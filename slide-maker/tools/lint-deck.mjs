#!/usr/bin/env node
// Contrôle des preuves d'un deck PPTX contre son registre (deck.data.json). Lecture seule : rend une LISTE de
// corrections par slide, ne modifie jamais le deck. Voir README.md.
// Ici : preuves, unités, périodes, sources, polices par slide. La relecture visuelle se fait en ouvrant le PPTX.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { lireZip } from './zip.mjs';

// ---------- paramètres ----------
const DEFAUTS = {
  mode: 'lecture',              // lecture : lu seul (PDF, mail) ; projete : en réunion
  policeMin: { lecture: 10, projete: 14 },
  policeMinLabel: { lecture: 9, projete: 12 },  // étiquettes courtes : axes, kickers, valeurs de données
  policeMinNote: { lecture: 10, projete: 10 },  // sources et notes de bas (voir references/design-system.md)
  niveauxMax: null,             // Paramètre, pas invariant : 2 pour un deck lu en 30 secondes, plus pour un exhibit dense.
  titreLignesMax: 2,
  motMajusculeMax: 4,           // acronyme toléré jusqu'à 4 lettres
};
const ACRONYMES = new Set('EBITDA EBIT CAGR WACC LBO LTM NTM IPO ROCE ROIC ROE EUR USD GBP CHF PIB GDP KPI OPA PME ETI SAS SARL TVA IFRS GAAP FCF DCF NAV TRI IRR MOIC DPI RVPI TVPI ESG CSRD IA AI API B2B B2C SIREN BFR CAPEX OPEX SG&A COGS'.split(' '));

const COQUILLES_COURANTES = [
  [/\bimmature an human\b/i, 'an human'], [/\b(a|an) (other|human)\b/i, 'article devant mot'],
  [/\b(accomodat\w*|recieve\w*|occured|seperat\w*|definately|untill|teh|adress\b|enviroment|developement)/i, 'faute fréquente (anglais)'],
  [/\b(dévelopement|éxemple|caractèristique|aquisition|acquistion|chiffe d'affaire\b|chiffre d'affaire\b|resultat\b|bénéfice net net|pourcentge)/i, 'faute fréquente (français)'],
  [/\b([A-Za-zÀ-ÿ]{2,})\s+\1\b/i, 'mot répété'],
];
const PLACEHOLDERS = /(\bundefined\b|\bNaN\b|\[object Object\]|\bnull\b|lorem ipsum|\bTODO\b|\bXXX+\b|\bTBD\b|\?\?\?|\[\.\.\.\]|à compléter|a completer)/i;
const MARQUEUR_GAP = /(n\.?\s?d\.?\b|non disponible|donn[ée]e manquante|manquant|indisponible|n\/a|gap|à confirmer|non communiqu)/i;
const MARQUEUR_P = /(\bP\s*[:=]\s*(plan|pr[ée]visionnel|budget)|\(P\)\s*[:=,]?\s*(plan|pr[ée]visionnel|budget)|plan de la direction\s*\(P\)|P\s*=\s*plan)/i;
const MARQUEUR_E =/(\(E\)|\bE\s*[:=]|\bE\s*=\s*estim|estim[ée]|estimation|\bestimate|\bforecast|prévision|hypoth[eè]se)/i;

// ---------- utilitaires ----------
const unxml = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&amp;/g, '&');
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const SEP_MILLIERS = '[\\u00a0\\u202f\\u2009 ]';
const RE_NOMBRE = new RegExp(`(?<![A-Za-z0-9.,])[-+\\u2212]?(?:\\d{1,3}(?:${SEP_MILLIERS}\\d{3})+|\\d+)(?:[.,]\\d+)?`, 'g');
const fr = (v) => String(v).replace('.', ',');

function parseNombre(tok) {
  const t = tok.replace(new RegExp(SEP_MILLIERS, 'g'), '').replace('\u2212', '-').replace(',', '.');
  const v = Number(t);
  return { valeur: v, decimales: (t.split('.')[1] || '').length };
}
const arrondi = (v, d) => Math.round(v * 10 ** d) / 10 ** d;

// Échelle monétaire d'un texte : ensemble de clés comme "Md€", "M$", "k€"
const SCALES = { k: 'k', m: 'M', mn: 'M', M: 'M', Md: 'Md', Mds: 'Md', Mrd: 'Md', Mrds: 'Md', bn: 'Md', B: 'Md' };
const DEVISE = { '€': '€', EUR: '€', '$': '$', USD: '$', '£': '£', GBP: '£', CHF: 'CHF' };
function echellesDe(t) {
  const res = new Set();
  for (const m of t.matchAll(/(?<![A-Za-z])(k|mn|m|M|Md|Mds|Mrds?|bn|B)\s?(€|EUR|\$|USD|£|GBP|CHF)(?![A-Za-z])/g)) res.add((SCALES[m[1]] || m[1]) + DEVISE[m[2]]);
  for (const m of t.matchAll(/(€|EUR|\$|USD|£|GBP|CHF)\s?(k|mn|m|M|Md|bn)(?![A-Za-z])/g)) res.add((SCALES[m[2]] || m[2]) + DEVISE[m[1]]);
  for (const m of t.matchAll(/\b(milliers?|millions?|milliards?)\s+d['’]\s?(euros?|dollars?)/gi)) {
    const e = /^milliard/i.test(m[1]) ? 'Md' : /^million/i.test(m[1]) ? 'M' : 'k';
    res.add(e + (/^euro/i.test(m[2]) ? '€' : '$'));
  }
  return res;
}
// Périodes : années (avec plages développées), FY / CY
function periodesDe(t) {
  const annees = new Set();
  const an = (s) => (s.length === 2 ? 2000 + Number(s) : Number(s));
  for (const m of t.matchAll(/\b((?:19|20)\d{2})\s?[-\u2013\/]\s?((?:19|20)?\d{2})\b/g)) {
    const a = Number(m[1]); const b = m[2].length === 2 ? Math.floor(a / 100) * 100 + Number(m[2]) : Number(m[2]);
    for (let y = a; y <= b && y - a < 40; y++) annees.add(y);
  }
  for (const m of t.matchAll(/(?<![\d.,])((?:19|20)\d{2})(?![\d])/g)) annees.add(Number(m[1]));
  for (const m of t.matchAll(/\b(?:FY|CY|[HQST][1-4])\s?['’]?(\d{2}|\d{4})\b/g)) annees.add(an(m[1]));
  return { annees, fy: /\bFY\s?['’]?\d{2}/.test(t) || /exercice/i.test(t), cy: /\bCY\s?['’]?\d{2}/.test(t) || /ann[ée]e civile|calendar year/i.test(t) };
}
const uniteNorm = (u) => (u || '').replace(/[\s\u00a0\u202f]/g, '').replace(/EUR/gi, '€').replace(/USD/gi, '$').replace(/^Mds?/i, 'Md').replace(/^milliards?(d')?/i, 'Md').toLowerCase();

// ---------- lecture du PPTX ----------
const num = (a, b) => Number(a.match(/(\d+)\.xml/)?.[1]) - Number(b.match(/(\d+)\.xml/)?.[1]);
function largeurTexte(t, pt, gras) {
  let w = 0;
  for (const ch of t) {
    if (ch === ' ') w += 0.27;
    else if ('ilIjt.,;:\'’|!()[]'.includes(ch)) w += 0.3;
    else if ('mwMW%'.includes(ch)) w += 0.85;
    else if (/[A-Z]/.test(ch)) w += 0.64;
    else if (/\d/.test(ch)) w += 0.55;
    else w += 0.5;
  }
  return w * pt * (gras ? 1.1 : 1);
}
function lignesEstimees(paras, largeurPt) {
  let n = 0;
  for (const p of paras) {
    const pt = p.pt || 18; const gras = p.gras;
    let cur = 0; let l = 1;
    for (const mot of p.texte.split(/\s+/).filter(Boolean)) {
      const w = largeurTexte(mot, pt, gras); const esp = largeurTexte(' ', pt, gras);
      if (cur && cur + esp + w > largeurPt) { l++; cur = w; } else cur += (cur ? esp : 0) + w;
    }
    n += l + (p.br || 0);
  }
  return n;
}

function lireChart(z, nom) {
  const xml = z.texte(nom) || '';
  const textes = [...xml.matchAll(/<a:t>([^<]*)<\/a:t>/g)].map((m) => unxml(m[1]).trim()).filter(Boolean);
  const cats = [...xml.matchAll(/<c:(?:cat|tx)>[\s\S]*?<\/c:(?:cat|tx)>/g)].flatMap((b) => [...b[0].matchAll(/<c:v>([^<]*)<\/c:v>/g)].map((m) => unxml(m[1]).trim()));
  const nombres = [...xml.matchAll(/<c:val>[\s\S]*?<\/c:val>/g)].flatMap((b) => [...b[0].matchAll(/<c:v>([^<]*)<\/c:v>/g)].map((m) => Number(m[1]))).filter((v) => Number.isFinite(v));
  const formats = [...xml.matchAll(/formatCode="([^"]*)"/g)].map((m) => unxml(m[1]));
  const tailles = [...xml.matchAll(/<a:(?:defRPr|rPr)[^>]*\bsz="(\d+)"/g)].map((m) => Number(m[1]) / 100);
  return { nom, textes, cats, nombres, formats, tailles };
}

export function lirePptx(fichier) {
  const z = lireZip(fs.readFileSync(fichier));
  const pres = z.texte('ppt/presentation.xml') || '';
  const sz = pres.match(/<p:sldSz[^>]*\bcx="(\d+)"[^>]*\bcy="(\d+)"/);
  const W = sz ? Number(sz[1]) : 9144000; const H = sz ? Number(sz[2]) : 5143500;
  const rels = z.texte('ppt/_rels/presentation.xml.rels') || '';
  const cible = {};
  for (const r of rels.matchAll(/<Relationship\b[^>]*>/g)) {
    const id = r[0].match(/\bId="([^"]+)"/)?.[1]; const tgt = r[0].match(/\bTarget="([^"]+)"/)?.[1];
    if (id && tgt) cible[id] = tgt;
  }
  const ordre = [...pres.matchAll(/<p:sldId\b[^>]*\br:id="([^"]+)"/g)].map((m) => cible[m[1]]).filter(Boolean)
    .map((t) => 'ppt/' + t.replace(/^\/?(ppt\/)?/, '')).filter((n) => z.a(n));
  const noms = ordre.length ? ordre : z.noms.filter((n) => /^ppt\/slides\/slide\d+\.xml$/.test(n)).sort(num);
  const slides = noms.map((nom, i) => lireSlide(z, nom, i + 1, W, H));
  return { fichier, W, H, slides };
}

function lireSlide(z, nom, n, W, H) {
  const xml = z.texte(nom) || '';
  const relsNom = nom.replace('slides/', 'slides/_rels/') + '.rels';
  const rel = z.texte(relsNom) || '';
  const chartsNoms = [...rel.matchAll(/Target="([^"]*charts\/chart\d+\.xml)"/g)].map((m) => 'ppt/charts/' + m[1].split('/').pop());
  const charts = chartsNoms.filter((c) => z.a(c)).map((c) => lireChart(z, c));
  const formes = [];
  const lireParas = (bloc) => {
    const paras = [];
    for (const p of bloc.matchAll(/<a:p>[\s\S]*?<\/a:p>/g)) {
      const runs = [...p[0].matchAll(/<a:r>[\s\S]*?<\/a:r>/g)].map((r) => {
        const rpr = r[0].match(/<a:rPr([^>]*)/)?.[1] || '';
        const szm = rpr.match(/\bsz="(\d+)"/);
        return {
          texte: unxml(r[0].match(/<a:t>([\s\S]*?)<\/a:t>/)?.[1] ?? ''), pt: szm ? Number(szm[1]) / 100 : null,
          gras: /\bb="1"/.test(rpr), cap: /\bcap="all"/.test(rpr), police: r[0].match(/<a:latin typeface="([^"]+)"/)?.[1] || null,
        };
      });
      const texte = runs.map((r) => r.texte).join('') + [...p[0].matchAll(/<a:fld\b[\s\S]*?<a:t>([^<]*)<\/a:t>/g)].map((m) => unxml(m[1])).join('');
      if (!texte.trim()) continue;
      const pts = runs.map((r) => r.pt).filter(Boolean);
      paras.push({
        texte: texte.trim(), runs, pt: pts.length ? Math.max(...pts) : null, ptMin: pts.length ? Math.min(...pts) : null,
        gras: runs.some((r) => r.gras || /black|bold/i.test(r.police || '')), police: runs.find((r) => r.police)?.police || null,
        br: (p[0].match(/<a:br\b/g) || []).length,
      });
    }
    return paras;
  };
  for (const sp of xml.matchAll(/<p:sp[ >][\s\S]*?<\/p:sp>/g)) {
    const ph = sp[0].match(/<p:ph([^>]*?)\/?>/);
    const phType = ph ? ph[1].match(/type="(\w+)"/)?.[1] : null;
    const off = sp[0].match(/<a:off x="(-?\d+)" y="(-?\d+)"/); const ext = sp[0].match(/<a:ext cx="(\d+)" cy="(\d+)"/);
    const body = sp[0].match(/<a:bodyPr([^>]*)/)?.[1] || '';
    const paras = lireParas(sp[0]);
    if (!paras.length) continue;
    formes.push({
      nomObjet: unxml(sp[0].match(/<p:cNvPr\b[^>]*?\bname="([^"]*)"/)?.[1] ?? ''),
      kind: 'texte', phType, x: off ? +off[1] : 0, y: off ? +off[2] : 0, cx: ext ? +ext[1] : W, cy: ext ? +ext[2] : H,
      lIns: +(body.match(/\blIns="(\d+)"/)?.[1] ?? 91440), rIns: +(body.match(/\brIns="(\d+)"/)?.[1] ?? 91440), paras,
    });
  }
  for (const gf of xml.matchAll(/<p:graphicFrame>[\s\S]*?<\/p:graphicFrame>/g)) {
    if (!/<a:tbl>/.test(gf[0])) continue;
    const off = gf[0].match(/<a:off x="(-?\d+)" y="(-?\d+)"/);
    formes.push({ kind: 'tableau', x: off ? +off[1] : 0, y: off ? +off[2] : 0, cx: W, cy: 0, lIns: 0, rIns: 0, paras: lireParas(gf[0]) });
  }
  const pics = [...xml.matchAll(/<p:pic>[\s\S]*?<\/p:pic>/g)].length;
  // objets susceptibles de porter un logo : images (texte alternatif = descr) et logotypes natifs (formes nommées « Logotype <nom> »)
  const objets = [];
  for (const m of xml.matchAll(/<p:(pic|sp)(?: [^>]*)?>\s*<p:nv(?:Pic|Sp)Pr>\s*<p:cNvPr\b([^>]*?)\/?>/g)) {
    const nomObjet = unxml(m[2].match(/\bname="([^"]*)"/)?.[1] ?? ''); const descr = unxml(m[2].match(/\bdescr="([^"]*)"/)?.[1] ?? '');
    if (m[1] === 'pic' || /^Logotype /.test(nomObjet)) objets.push({ type: m[1] === 'pic' ? 'image' : 'logotype', nomObjet, descr });
  }
  return { n, nom, formes, charts, pics, objets };
}

// ---------- analyse d'une slide ----------
function qualifier(slide, W, H, regTitre) {
  const textes = slide.formes.filter((f) => f.kind !== 'graphique');
  // titre : placeholder, sinon registre (ressemblance), sinon plus grande police dans le tiers haut
  let titre = textes.find((f) => f.phType === 'title' || f.phType === 'ctrTitle') || null;
  if (!titre && regTitre) {
    const cible = norm(regTitre);
    let best = null; let bs = 0;
    for (const f of textes) {
      const t = norm(f.paras.map((p) => p.texte).join(' '));
      if (!t) continue;
      const mots = new Set(cible.split(' ')); const commun = t.split(' ').filter((m) => mots.has(m)).length;
      const s = commun / Math.max(mots.size, t.split(' ').length);
      if (s > bs) { bs = s; best = f; }
    }
    if (best && bs >= 0.6) titre = best;
  }
  if (!titre) {
    const hauts = textes.filter((f) => f.y < H * 0.3 && f.kind === 'texte');
    const phrase = (f) => f.paras.map((p) => p.texte).join(' ').split(/\s+/).length >= 4 ? 1 : 0;      // un titre est une phrase, pas un chiffre-héros
    hauts.sort((a, b) => (phrase(b) - phrase(a)) || (Math.max(...b.paras.map((p) => p.pt || 0)) - Math.max(...a.paras.map((p) => p.pt || 0))) || a.y - b.y);
    if (hauts[0] && Math.max(...hauts[0].paras.map((p) => p.pt || 0)) >= 16) titre = hauts[0];
  }
  const estNote = (f, p) => /^\s*(sources?\b|note[s]?\b|\(\d\)|\*|d'apr[eè]s|selon\b)/i.test(p.texte) || (f.y > H * 0.88 && (p.pt || 99) <= 10);
  // un titre posé en deux zones (conclusion puis suite) : même police, même colonne, juste dessous
  const ptDe = (f) => Math.max(...f.paras.map((p) => p.pt || 0));
  const titreFormes = titre ? [titre, ...textes.filter((f) => f !== titre && f.kind === 'texte' && !f.phType && ptDe(f) === ptDe(titre) && ptDe(f) >= 16
    && Math.abs(f.x - titre.x) < titre.cx * 0.05 && f.y >= titre.y && f.y - (titre.y + titre.cy) < 365760)] : [];
  const zones = { titre: [], corps: [], notes: [], sources: [], tableau: [] };
  for (const f of textes) {
    for (const p of f.paras) {
      if (titreFormes.includes(f)) zones.titre.push(p);
      else if (/^\s*sources?\s*:?/i.test(p.texte) && p.texte.length >= 6 || /^\s*source\b/i.test(p.texte)) zones.sources.push(p);
      else if (estNote(f, p)) zones.notes.push(p);
      else (f.kind === 'tableau' ? zones.tableau : zones.corps).push(p);
    }
  }
  const somme = (k) => titreFormes.reduce((t, f) => t + lignesEstimees(f.paras, (f.cx - f.lIns - f.rIns) / 12700 * k), 0);
  const lignesTitre = somme(1); const lignesPessim = somme(0.93);
  const hautTitrePt = titre ? titreFormes.reduce((t, f) => t + f.cy, 0) / 12700 : 0;
  const ptTitre = titre ? Math.max(...zones.titre.map((p) => p.pt || 0)) : 0;
  return { titre, zones, titreTexte: zones.titre.map((p) => p.texte).join(' '), lignesTitre, lignesPessim, debordeTitre: titre && hautTitrePt && lignesTitre * ptTitre * 1.1 > hautTitrePt * 1.12 };
}

// ---------- registre ----------
export function chargerRegistre(chemin) {
  const j = JSON.parse(fs.readFileSync(chemin, 'utf8'));
  const index = new Map();
  for (const s of j.slides || []) for (const c of s.chiffres || []) { c._slide = s; if (c.id) index.set(c.id, c); }
  if ((j.slides || []).some((s) => s.titreModele && !s.titre)) {        // titre attendu = modèle développé par deck-data.js
    try { const D = createRequire(import.meta.url)('./deck-data.js').charger(chemin); for (const s of j.slides) if (s.titreModele && !s.titre) s.titre = D.titre(s.n).replace(/\*\*/g, ''); } catch (e) { /* modèle illisible : le lint retombe sur la détection */ }
  }
  return { j, index, dossier: path.dirname(path.resolve(chemin)) };
}
function evaluer(formule, index) {
  const expr = formule.replace(/[A-Za-z_]\w*/g, (id) => {
    const c = index.get(id); if (!c || typeof c.valeur !== 'number') throw new Error(`id inconnu ou sans valeur : ${id}`);
    return `(${c.valeur})`;
  });
  if (!/^[\d+\-*/().\s eE]+$/.test(expr)) throw new Error('formule non autorisée');
  return Function(`"use strict";return (${expr})`)();
}

// ---------- contrôles ----------
export function controler(deck, reg, opts = {}) {
  const P = {
    mode: opts.mode || reg?.j.parametres?.mode || DEFAUTS.mode,
    niveauxMax: opts.niveauxMax ?? reg?.j.parametres?.niveauxTexteMax ?? DEFAUTS.niveauxMax,
  };
  P.policeMin = opts.policeMin ?? reg?.j.parametres?.policeMinPt ?? DEFAUTS.policeMin[P.mode];
  P.policeMinLabel = opts.policeMinLabel ?? reg?.j.parametres?.policeMinLabelPt ?? DEFAUTS.policeMinLabel[P.mode];
  P.policeMinNote = opts.policeMinNote ?? reg?.j.parametres?.policeMinNotePt ?? DEFAUTS.policeMinNote[P.mode];
  const constats = []; const nonVerifie = new Set();
  const add = (n, gravite, code, message, titre) => constats.push({ slide: n, gravite, code, message, titre });
  const slidesReg = new Map((reg?.j.slides || []).map((s) => [s.n, s]));
  if (!reg) nonVerifie.add('Aucun registre fourni : titre contre chiffres, statuts E et gap, périodes du registre non contrôlés.');

  // registre : cohérence interne
  if (reg) {
    const vus = new Map(); const nonRelus = new Set();
    for (const s of reg.j.slides || []) {
      if (s.n > deck.slides.length) add(s.n, 'erreur', 'REGISTRE-SLIDE', `Le registre décrit la slide ${s.n}, le deck n'en a que ${deck.slides.length}.`);
      for (const c of s.chiffres || []) {
        const ou = `chiffre « ${c.id || '?'} »`;
        if (!c.id) add(s.n, 'erreur', 'REGISTRE-ID', 'Un chiffre du registre n\'a pas d\'id.');
        else if (vus.has(c.id)) {
          const o = vus.get(c.id);       // un même chiffre peut revenir sur plusieurs slides, à condition d'être le même
          if (o.valeur !== c.valeur || o.unite !== c.unite || o.periode !== c.periode || o.statut !== c.statut) add(s.n, 'erreur', 'REGISTRE-ID', `${ou} : même id qu'à la slide ${o._slide.n} mais valeur, unité, période ou statut différents (${fr(o.valeur)} ${o.unite} ${o.periode} contre ${fr(c.valeur)} ${c.unite} ${c.periode}). Un chiffre, une seule définition.`);
        } else vus.set(c.id, c);
        if (!['sourced', 'E', 'P', 'gap'].includes(c.statut)) add(s.n, 'erreur', 'REGISTRE-STATUT', `${ou} : statut « ${c.statut} » inconnu (sourced, E, P ou gap).`);
        if (c.statut === 'P' && !c.source && !c.hypothese) add(s.n, 'avertissement', 'P-SANS-BASE', `${ou} : chiffre du plan sans source (le plan de la direction doit être cité : document, date).`);
        if (c.statut === 'gap' && c.valeur != null) add(s.n, 'erreur', 'GAP-COMBLE', `${ou} : statut gap mais une valeur (${c.valeur}) est renseignée. Un trou de données n'est jamais comblé : retirer la valeur ou changer le statut.`);
        if (c.statut !== 'gap' && typeof c.valeur !== 'number') add(s.n, 'erreur', 'REGISTRE-VALEUR', `${ou} : valeur numérique manquante.`);
        if (c.statut !== 'gap' && !c.unite) add(s.n, 'avertissement', 'REGISTRE-UNITE', `${ou} : unité manquante.`);
        if (c.statut !== 'gap' && !c.periode) add(s.n, 'avertissement', 'REGISTRE-PERIODE', `${ou} : période manquante.`);
        if (c.statut === 'sourced' && !(c.source && c.source.fichier && c.source.date) && !c.calcul) add(s.n, 'erreur', 'SOURCE-REGISTRE', `${ou} : statut sourced sans source {fichier, page, date}.`);
        if (c.statut === 'E' && !c.hypothese && !c.calcul && !c.source) add(s.n, 'avertissement', 'E-SANS-BASE', `${ou} : estimation sans hypothèse ni source ; écrire sur quoi elle repose.`);
        if (c.source?.fichier && !/^https?:/i.test(c.source.fichier) && reg.j.parametres?.verifierFichiers) {
          const f = path.isAbsolute(c.source.fichier) ? c.source.fichier : path.join(reg.dossier, c.source.fichier);
          if (!fs.existsSync(f)) add(s.n, 'avertissement', 'SOURCE-FICHIER', `${ou} : fichier source introuvable (${c.source.fichier}).`);
        }
        if (c.calcul) {
          try {
            const v = evaluer(c.calcul, reg.index); const d = c.decimales ?? 1;
            if (Math.abs(v - c.valeur) > 0.5 * 10 ** -d + 1e-9) add(s.n, 'erreur', 'CALCUL', `${ou} : « ${c.calcul} » donne ${arrondi(v, d + 2)} mais le registre dit ${c.valeur}.`);
          } catch (e) { add(s.n, 'avertissement', 'CALCUL', `${ou} : formule illisible (${e.message}).`); }
        }
        if (c.statut === 'sourced' && !c.calcul && !(c.verifie && c.verifie.par)) nonRelus.add(c.id);
      }
    }
    if (nonRelus.size) nonVerifie.add(`Valeur contre fichier source : ${nonRelus.size} chiffre(s) du registre pas encore relus contre leur source (${[...nonRelus].slice(0, 8).join(', ')}${nonRelus.size > 8 ? ', ...' : ''}) ; une relecture humaine l'enregistre avec "verifie": {"par", "le"}.`);
    for (const s of deck.slides) if (!slidesReg.has(s.n)) add(s.n, 'avertissement', 'SLIDE-HORS-REGISTRE', 'Slide absente du registre : aucun de ses chiffres n\'est contrôlé.');
  }

  // polices par rôle, sur tout le deck
  const roles = { titre: [], corps: [], note: [] };
  const analyses = deck.slides.map((s) => {
    const regS = slidesReg.get(s.n);
    s.formes = s.formes.filter((f) => !/^Logotype /.test(f.nomObjet || ''));          // un logotype natif est l'équivalent d'une image : ni police, ni taille, ni majuscules
    const a = qualifier(s, deck.W, deck.H, regS?.titre);
    a.slide = s; a.reg = regS;
    roles.titre.push(...a.zones.titre.map((p) => ({ n: s.n, pt: p.pt, police: p.police })));
    roles.corps.push(...a.zones.corps.map((p) => ({ n: s.n, pt: p.pt, police: p.police })));
    roles.note.push(...[...a.zones.notes, ...a.zones.sources].map((p) => ({ n: s.n, pt: p.pt, police: p.police })));
    return a;
  });

  const typesExemptes = new Set(['couverture', 'sommaire', 'intercalaire', 'fin']);
  for (const a of analyses) {
    const { slide: s, reg: regS, zones } = a;
    const n = s.n;
    const type = regS?.type || (n === 1 ? 'couverture' : /\b(sommaire|agenda|contents|merci|thank you|questions)\b/i.test(a.titreTexte) ? 'sommaire' : 'contenu');
    const contenu = !typesExemptes.has(type);
    const tout = [...zones.titre, ...zones.corps, ...zones.notes, ...zones.sources, ...zones.tableau];
    const texteTout = tout.map((p) => p.texte).join('\n');
    const texteChart = s.charts.flatMap((c) => [...c.textes, ...c.cats]).join('\n');
    const titreTxt = a.titreTexte;
    const t = (x) => `« ${x.length > 70 ? x.slice(0, 67) + '...' : x} »`;
    const ctitre = (code, g, msg) => add(n, g, code, msg, titreTxt);

    // titre
    if (contenu && !a.titre) ctitre('TITRE-ABSENT', 'erreur', 'Aucun titre identifiable (ni zone de titre, ni grand texte en haut). Une slide de contenu porte une conclusion en titre.');
    if (a.titre) {
      if (a.lignesTitre > DEFAUTS.titreLignesMax) ctitre('TITRE-LIGNES', 'erreur', `Le titre tient sur environ ${a.lignesTitre} lignes (max ${DEFAUTS.titreLignesMax}) : ${t(titreTxt)}. Raccourcir.`);
      else if (a.lignesPessim > DEFAUTS.titreLignesMax) ctitre('TITRE-LIGNES', 'avertissement', `Le titre est limite : 2 lignes avec une marge de 7 %, 3 si la police rend plus large. À confirmer au rendu.`);
      if (a.debordeTitre) ctitre('TITRE-DEBORDE', 'avertissement', 'Le titre dépasse probablement la hauteur de sa zone de texte (estimation).');
      if (regS?.titre && norm(regS.titre) !== norm(titreTxt)) ctitre('TITRE-REGISTRE', 'avertissement', `Le titre du deck diffère du titre du registre. Deck : ${t(titreTxt)} ; registre : ${t(regS.titre)}. Mettre l'un des deux à jour (re-cut).`);
    }

    // chiffres du titre contre le registre
    const chiffres = regS?.chiffres || [];
    if (a.titre && reg) {
      const nombresTitre = [...titreTxt.matchAll(RE_NOMBRE)].map((m) => ({ brut: m[0], idx: m.index, ...parseNombre(m[0]) }))
        .filter((k) => !(Number.isInteger(k.valeur) && k.valeur >= 1900 && k.valeur <= 2100 && !k.brut.includes(',')));
      const dansTitre = new Set();
      for (const k of nombresTitre) {
        const suite = titreTxt.slice(k.idx + k.brut.length, k.idx + k.brut.length + 14);
        const avant = titreTxt.slice(Math.max(0, k.idx - 3), k.idx);
        if (/[A-Za-z]$/.test(avant) || /^(er|e|ème|eme|è)\b/.test(suite)) continue;       // T3, FY24, 1er
        const mu = suite.match(/^\s?(%|pts?\b|pp\b|bps\b|x\b|×|(?:k|M|Md|Mds|bn|m)\s?(?:€|EUR|\$|USD)|milliards?|millions?|€|\$|EUR|USD)/i);
        const unite = mu ? mu[1] : null;
        const decimalesOK = (c) => typeof c.valeur === 'number' && arrondi(c.valeur, k.decimales) === arrondi(k.valeur, k.decimales);
        const exact = chiffres.filter(decimalesOK);
        const ailleurs = [...reg.index.values()].filter(decimalesOK);
        const cand = exact.length ? exact : [];
        if (cand.length) {
          cand.forEach((c) => dansTitre.add(c.id));
          const c = cand[0];
          if (unite && c.unite && uniteNorm(unite) !== uniteNorm(c.unite) && !cand.some((x) => uniteNorm(x.unite) === uniteNorm(unite))) ctitre('TITRE-UNITE', 'erreur', `Le titre écrit « ${k.brut} ${unite} » ; le registre (${c.id}) dit ${fr(c.valeur)} ${c.unite}. Unités différentes.`);
          if (c.statut === 'gap') ctitre('GAP-DANS-TITRE', 'erreur', `${k.brut} est dans le titre alors que ${c.id} est un gap.`);
        } else {
          const proches = chiffres.filter((c) => typeof c.valeur === 'number' && (!unite || !c.unite || uniteNorm(c.unite) === uniteNorm(unite)) && Math.abs(c.valeur - k.valeur) <= Math.max(Math.abs(k.valeur) * 0.25, 0.5 * 10 ** -k.decimales));
          if (proches.length) ctitre('TITRE-CHIFFRE', 'erreur', `Le titre dit ${k.brut}${unite ? ' ' + unite : ''} ; le registre dit ${proches.map((c) => `${fr(c.valeur)} ${c.unite || ''} (${c.id}, ${c.periode || 'période ?'})`).join(' ou ')}. Corriger le titre ou le registre.`);
          else if (ailleurs.length) ctitre('TITRE-CHIFFRE', 'avertissement', `${k.brut} est dans le registre d'une autre slide (${ailleurs.map((c) => c.id).join(', ')}) mais pas dans celui-ci. Le rattacher à cette slide.`);
          else ctitre('TITRE-CHIFFRE', 'erreur', `Le chiffre ${k.brut}${unite ? ' ' + unite : ''} du titre est absent du registre. Le sourcer, l'étiqueter E, ou l'enlever.`);
        }
      }
      for (const c of chiffres.filter((x) => x.dansTitre)) if (!dansTitre.has(c.id)) ctitre('TITRE-REGISTRE', 'avertissement', `Le registre dit que ${c.id} (${fr(c.valeur)} ${c.unite || ''}) est dans le titre ; je ne l'y trouve pas.`);
    } else if (a.titre && !reg && /\d/.test(titreTxt.replace(/\b(19|20)\d{2}\b/g, ''))) {
      /* pas de registre : déjà signalé en bas */
    }

    // chiffres du registre présents sur la slide (re-cut)
    if (reg) {
      const corpusNombres = [...(texteTout + '\n' + texteChart).matchAll(RE_NOMBRE)].map((m) => parseNombre(m[0]));
      const chartNb = s.charts.flatMap((c) => c.nombres);
      const introuvables = []; const sansPeriode = [];
      for (const c of chiffres.filter((x) => x.statut !== 'gap' && typeof x.valeur === 'number' && x.surSlide !== false)) {
        const d = c.decimales ?? (String(c.valeur).split('.')[1] || '').length;
        const trouve = corpusNombres.some((k) => arrondi(k.valeur, d) === arrondi(c.valeur, d) || arrondi(k.valeur, d) === arrondi(c.valeur * (c.unite === '%' ? 100 : 1), d))
          || chartNb.some((v) => arrondi(v, d) === arrondi(c.valeur, d) || arrondi(v, d + 2) === arrondi(c.valeur / (c.unite === '%' ? 100 : 1), d + 2));
        if (!trouve) introuvables.push(`${c.id} (${fr(c.valeur)} ${c.unite || ''}, ${c.periode || '?'})`);
        if (c.periode) {
          const ann = [...periodesDe(c.periode).annees];
          const toutes = periodesDe(titreTxt + '\n' + texteTout + '\n' + texteChart).annees;
          if (ann.length && !ann.some((y) => toutes.has(y))) sansPeriode.push(`${c.id} (${c.periode})`);
        }
      }
      if (introuvables.length) add(n, 'avertissement', 'REGISTRE-INTROUVABLE', `Dans le registre mais lus nulle part sur la slide : ${introuvables.join(' ; ')}. Deck pas à jour (re-cut) ou chiffre retiré (mettre "surSlide": false).`, titreTxt);
      if (sansPeriode.length) add(n, 'avertissement', 'PERIODE-REGISTRE', `La période du registre n'apparaît ni dans le titre, ni dans l'axe, ni dans le corps, pour : ${sansPeriode.join(' ; ')}. Écrire l'année ou la période sur la slide.`, titreTxt);
      // statut E : étiqueté sur la slide
      const nonEtiquetes = []; const legendeSeule = [];
      // statut P : plan de la direction, accepté seulement si la slide définit « P »
      const nonDefinis = chiffres.filter((x) => x.statut === 'P' && !MARQUEUR_P.test(texteTout + '\n' + texteChart + '\n' + titreTxt)).map((c) => `${c.id} (${fr(c.valeur)} ${c.unite || ''})`);
      if (nonDefinis.length) add(n, 'erreur', 'P-NON-DEFINI', `Chiffres du plan de la direction (statut P) sans définition de « P » sur la slide : ${nonDefinis.join(' ; ')}. Écrire en note « P : plan de la direction » (ou « E » si c'est une estimation).`, titreTxt);
      for (const c of chiffres.filter((x) => x.statut === 'E')) {
        const affiche = fr(c.valeur);
        const reE = new RegExp(`${affiche.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\d,])[^\\n]{0,12}?(\\(E\\)|(?<![A-Za-zÀ-ÿ])E(?![A-Za-zÀ-ÿ])|(?<=\\d)e\\b)`);
        const marque = reE.test(texteTout + '\n' + texteChart) || reE.test(titreTxt);
        const legende = MARQUEUR_E.test(texteTout + '\n' + texteChart + '\n' + titreTxt);
        if (!marque && !legende) nonEtiquetes.push(`${c.id} (${affiche} ${c.unite || ''})`);
        else if (!marque) legendeSeule.push(`${c.id} (${affiche})`);
      }
      if (nonEtiquetes.length) add(n, 'erreur', 'E-NON-ETIQUETE', `Estimations (statut E) sans aucune mention « E » ni « estimé » sur la slide : ${nonEtiquetes.join(' ; ')}. Étiqueter sur la slide (barre hachurée, « E » après la valeur, note).`, titreTxt);
      if (legendeSeule.length) add(n, 'avertissement', 'E-LEGENDE-SEULE', `La slide mentionne l'estimation mais ces valeurs ne sont pas suivies de « E » : ${legendeSeule.join(' ; ')}. À étiqueter à côté de la valeur.`, titreTxt);
      // statut gap : signalé, jamais comblé
      for (const c of chiffres.filter((x) => x.statut === 'gap')) {
        if (!MARQUEUR_GAP.test(texteTout + '\n' + texteChart)) add(n, 'erreur', 'GAP-NON-SIGNALE', `${c.id} est un gap (donnée manquante) et la slide ne le dit pas (« n.d. », « non disponible », « donnée manquante »). Afficher le trou, ne pas le laisser en blanc.`, titreTxt);
      }
    }

    // unités et périodes : titre / axes et graphiques / notes
    const autres = !contenu ? '' : [zones.corps, zones.tableau, zones.notes, zones.sources].flat().map((p) => p.texte).join('\n') + '\n' + texteChart;
    const eT = echellesDe(titreTxt); const eA = echellesDe(autres);
    if (contenu && eT.size && eA.size && ![...eT].some((e) => eA.has(e))) ctitre('UNITE-DERIVE', 'erreur', `Le titre parle en ${[...eT].join(', ')} ; l'axe, le corps ou les notes parlent en ${[...eA].join(', ')}. Unités différentes sur la même slide : convertir l'un des deux.`);
    else if (contenu && new Set([...eT, ...eA].map((e) => e.replace(/^(k|M|Md)/, ''))).size > 1) add(n, 'avertissement', 'DEVISE-MIXTE', `Plusieurs devises sur la slide (${[...eT, ...eA].join(', ')}) : taux de change et date à écrire en note.`, titreTxt);
    else if (contenu && new Set(eA).size > 1) add(n, 'avertissement', 'ECHELLE-MIXTE', `Plusieurs échelles de montants dans le corps ou les notes (${[...eA].join(', ')}).`, titreTxt);
    const autresPeriode = !contenu ? '' : [zones.corps, zones.tableau, zones.notes].flat().map((p) => p.texte).join('\n') + '\n' + texteChart;   // la date d'un rapport cité en source n'est pas une période de données
    const pT = periodesDe(titreTxt); const pA = periodesDe(autresPeriode);
    if (contenu && pT.annees.size && pA.annees.size) {
      const manque = [...pT.annees].filter((y) => !pA.annees.has(y));
      if (manque.length === pT.annees.size) ctitre('PERIODE-DERIVE', 'erreur', `Le titre parle de ${[...pT.annees].join(', ')} ; l'axe, le corps et les notes parlent de ${[...pA.annees].sort().join(', ')}. Période différente entre le titre et l'exhibit.`);
      else if (manque.length) ctitre('PERIODE-DERIVE', 'avertissement', `Le titre cite ${manque.join(', ')}, absent de l'axe, du corps et des notes.`);
    }
    if (contenu && (pT.fy || pA.fy) && (pT.cy || pA.cy)) add(n, 'avertissement', 'PERIODE-FY-CY', 'Exercice fiscal (FY) et année civile (CY) mélangés sur la slide : trancher et le dire en note.', titreTxt);

    // source
    if (contenu) {
      const src = zones.sources.map((p) => p.texte);
      if (!src.length) add(n, 'erreur', 'SOURCE-ABSENTE', 'Pas de source sur cette slide de contenu (ligne commençant par « Source »).', titreTxt);
      else if (src.every((x) => /^sources?\s*:?\s*$/i.test(x.trim()))) add(n, 'erreur', 'SOURCE-VIDE', 'La ligne de source est vide.', titreTxt);
      else if (src.some((x) => /(analyse interne|à compléter|source interne|internal analysis)/i.test(x)) && chiffres.some((c) => c.statut === 'sourced' && c.source?.fichier)) add(n, 'avertissement', 'SOURCE-VAGUE', 'La source affichée est vague (« analyse interne ») alors que le registre cite des fichiers. Citer le document.', titreTxt);
      const libelles = [...new Set(chiffres.filter((c) => c.source?.libelle).map((c) => c.source.libelle))];
      for (const l of libelles) if (src.length && !src.join(' ').toLowerCase().includes(l.toLowerCase().slice(0, 18))) add(n, 'avertissement', 'SOURCE-LIBELLE', `La source du registre (« ${l} ») ne figure pas dans la ligne de source de la slide.`, titreTxt);
    }

    // tailles de police
    const tailles = (ps, min, libelle, gravite) => {
      const bas = ps.filter((p) => p.runs.some((r) => r.pt && r.pt < min && r.texte.trim())).map((p) => ({ pt: Math.min(...p.runs.filter((r) => r.pt && r.texte.trim()).map((r) => r.pt)), texte: p.texte }));
      if (bas.length) {
        const mn = Math.min(...bas.map((b) => b.pt));
        add(n, gravite, 'POLICE-MIN', `${libelle} : ${bas.length} paragraphe(s) sous ${min} pt (mode ${P.mode}), le plus petit à ${mn} pt (${t(bas.find((b) => b.pt === mn).texte)}).`, titreTxt);
      }
    };
    const etiquette = (p) => p.texte.length <= 60 || p.texte.split(/\s+/).length <= 4;       // libellé, kicker, annotation : une ligne de 60 caractères au plus
    const courant = [...zones.corps, ...zones.tableau];
    tailles([...zones.titre, ...courant.filter((p) => !etiquette(p))], P.policeMin, 'Texte courant', 'erreur');
    tailles(courant.filter(etiquette), P.policeMinLabel, 'Étiquettes courtes', 'erreur');
    tailles([...zones.notes, ...zones.sources], P.policeMinNote, 'Notes et sources', 'avertissement');
    const petitsChart = s.charts.flatMap((c) => c.tailles).filter((v) => v < P.policeMinLabel);
    if (petitsChart.length) add(n, 'avertissement', 'POLICE-MIN-GRAPHIQUE', `Texte de graphique sous ${P.policeMinLabel} pt (min ${Math.min(...petitsChart)} pt, ${petitsChart.length} occurrence(s)).`, titreTxt);
    if (P.niveauxMax) {
      const niv = new Set([...zones.corps, ...zones.tableau].map((p) => p.pt && Math.round(p.pt)).filter(Boolean));
      if (niv.size > P.niveauxMax) add(n, 'avertissement', 'NIVEAUX-TEXTE', `${niv.size} tailles de texte de corps (${[...niv].sort((a, b) => b - a).join(', ')} pt) pour un maximum fixé à ${P.niveauxMax}.`, titreTxt);
    }

    // majuscules de corps
    const capsTrouvees = [];
    for (const p of [...zones.corps, ...zones.notes, ...zones.tableau, ...zones.titre]) {
      for (const r of p.runs) if (r.cap && r.texte.trim().length > 4) capsTrouvees.push(r.texte);
      const lettres = p.texte.replace(/[^A-Za-zÀ-ÿ]/g, '');
      const mots = p.texte.split(/\s+/).filter((w) => /[A-ZÀ-Ý]{2}/.test(w));
      const toutMaj = lettres.length >= 8 && p.texte === p.texte.toUpperCase() && p.texte !== p.texte.toLowerCase();
      if (toutMaj && !ACRONYMES.has(p.texte.replace(/[^A-Z&]/g, '')) && p.texte.length > 5) capsTrouvees.push(p.texte);
      else for (const w of mots) { const m = w.replace(/[^A-Za-zÀ-ÿ&]/g, ''); if (m.length > DEFAUTS.motMajusculeMax && m === m.toUpperCase() && !ACRONYMES.has(m) && !toutMaj) capsTrouvees.push(m); }
    }
    if (capsTrouvees.length) add(n, 'avertissement', 'MAJUSCULES', `Texte en majuscules (${[...new Set(capsTrouvees)].slice(0, 3).map(t).join(', ')}${capsTrouvees.length > 3 ? ', ...' : ''}). Écrire en casse normale, mettre en valeur par le poids ou la couleur.`, titreTxt);

    // coquilles et règles de forme
    const brut = tout.map((p) => p.texte);
    for (const ligne of brut) {
      for (const [re, quoi] of COQUILLES_COURANTES) { const m = ligne.match(re); if (m && !(quoi === 'mot répété' && /^\d+$|^(très|de|la|le|x|n)$/i.test(m[1] || '') && false)) { if (quoi === 'mot répété' && /^\d/.test(m[0])) continue; add(n, 'avertissement', 'COQUILLE', `${quoi} : ${t(m[0])} dans ${t(ligne)}.`, titreTxt); } }
      if (PLACEHOLDERS.test(ligne)) add(n, 'erreur', 'COQUILLE', `Texte de remplissage ou valeur non résolue : ${t(ligne.match(PLACEHOLDERS)[0])} dans ${t(ligne)}.`, titreTxt);
      if ((ligne.trim().split(/\s+/).length >= 5 && / {2,}/.test(ligne.trim())) || /\s,(?!\d)|\s\.(?![.\d])/.test(ligne)) add(n, 'avertissement', 'COQUILLE', `Espacement douteux (double espace ou espace avant , .) dans ${t(ligne)}.`, titreTxt);
      const ouv = (ligne.match(/\(/g) || []).length; const fer = (ligne.match(/\)/g) || []).length;
      if (ouv !== fer) add(n, 'avertissement', 'COQUILLE', `Parenthèses non appariées dans ${t(ligne)}.`, titreTxt);
      if (/[\u2014\u2013]/.test(ligne)) add(n, 'erreur', 'TIRET-CADRATIN', `Tiret cadratin ou demi-cadratin dans ${t(ligne)} (utiliser un tiret simple, une virgule, deux-points ou une parenthèse).`, titreTxt);
      if (/\p{Extended_Pictographic}/u.test(ligne)) add(n, 'erreur', 'EMOJI', `Emoji, pictogramme ou symbole de copyright ou de marque dans ${t(ligne)} (aucun dans un deck client).`, titreTxt);
    }
  }

  // apostrophes mélangées sur le deck
  const toutTexte = analyses.flatMap((a) => [...a.zones.titre, ...a.zones.corps, ...a.zones.notes].map((p) => p.texte)).join('\n');
  if (/\w'\w/.test(toutTexte) && /\w\u2019\w/.test(toutTexte)) add(0, 'avertissement', 'COQUILLE', 'Deux types d\'apostrophes dans le deck (droite \' et typographique ’) : en choisir un.');
  // notation d'unité hétérogène
  const notations = new Set();
  for (const m of toutTexte.matchAll(/\b(\d[\d.,\s]*)\s?(M€|Md€|k€|M EUR|Md EUR|EUR m|€m|€bn|M\$|\$m|\$bn|millions? d['’]euros|milliards? d['’]euros|Mds? ?€)/g)) notations.add(m[2].replace(/\s/g, '').toLowerCase());
  if (notations.size > 2) add(0, 'avertissement', 'NOTATION-UNITE', `Notations d'unités hétérogènes dans le deck : ${[...notations].join(', ')}. En choisir une.`);

  // polices uniformes par rôle
  for (const [role, liste] of Object.entries(roles)) {
    const sans = role === 'titre' ? liste.filter((x) => x.n !== 1) : liste;       // la couverture a son propre titre
    const mode = (arr) => { const c = new Map(); arr.forEach((v) => c.set(v, (c.get(v) || 0) + 1)); return [...c.entries()].sort((a, b) => b[1] - a[1])[0]?.[0]; };
    const tailles = sans.map((x) => x.pt && Math.round(x.pt * 10) / 10).filter(Boolean);
    const m = mode(tailles);
    if (role !== 'corps' && tailles.length) {
      const hors = [...new Set(sans.filter((x) => x.pt && Math.round(x.pt * 10) / 10 !== m).map((x) => `${x.n} (${x.pt} pt)`))];
      if (hors.length) add(0, 'erreur', 'POLICE-UNIFORME', `Les ${role === 'titre' ? 'titres' : 'notes et sources'} n'ont pas tous la même taille : ${m} pt en général, mais slide(s) ${hors.slice(0, 8).join(', ')}. Une taille par type de texte, jamais réglée slide par slide.`);
    }
    if (role === 'corps') { const distinct = [...new Set(tailles)]; if (distinct.length > 6) add(0, 'avertissement', 'POLICE-UNIFORME', `${distinct.length} tailles de corps différentes dans le deck (${distinct.sort((a, b) => b - a).join(', ')} pt) : l'échelle du design system en compte 5 au plus.`); }
    const pol = [...new Set(sans.map((x) => x.police).filter(Boolean))];
    if (role !== 'corps' && pol.length > 1) add(0, 'erreur', 'POLICE-UNIFORME', `Plusieurs polices pour les ${role === 'titre' ? 'titres' : 'notes'} : ${pol.join(', ')}.`);
  }

  // images : non lisibles
  const avecImages = deck.slides.filter((s) => s.pics).map((s) => s.n);
  if (avecImages.length) nonVerifie.add(`Chiffres éventuellement contenus dans des images (slides ${avecImages.join(', ')}) : non lus.`);
  nonVerifie.add('Nombre de lignes du titre : estimé avec une table de largeurs de caractères, pas mesuré. Confirmer en ouvrant le PPTX.');
  nonVerifie.add('Orthographe générale : pas de dictionnaire dans l\'outil ; seules les fautes fréquentes, les répétitions et les valeurs non résolues sont détectées.');
  nonVerifie.add('Vérité des sources : le lint contrôle la cohérence deck / registre, pas que la valeur du registre soit celle du fichier source.');
  nonVerifie.add('Position des textes dans les groupes de formes : approximative (coordonnées du groupe non recomposées).');
  const titres = Object.fromEntries(analyses.map((a) => [a.slide.n, a.titreTexte || a.reg?.titre || '']));
  return { parametres: { ...P, titreLignesMax: DEFAUTS.titreLignesMax }, titres, constats, nonVerifie: [...nonVerifie], nbSlides: deck.slides.length };
}

// ---------- rapport ----------
export function rapport(res, deckNom, regNom) {
  const E = res.constats.filter((c) => c.gravite === 'erreur').length; const A = res.constats.filter((c) => c.gravite === 'avertissement').length;
  const L = [`# Relecture du deck : ${deckNom}`, '', `Registre : ${regNom || 'aucun'}. Mode ${res.parametres.mode}, texte mini ${res.parametres.policeMin} pt (étiquettes ${res.parametres.policeMinLabel} pt, notes ${res.parametres.policeMinNote} pt), ${res.nbSlides} slides.`,
    `**Bilan : ${E} erreur(s), ${A} avertissement(s).** Rien n'a été corrigé dans le deck : chaque ligne ci-dessous est une correction à faire ou à refuser.`, ''];
  const parSlide = new Map();
  for (const c of res.constats) { if (!parSlide.has(c.slide)) parSlide.set(c.slide, []); parSlide.get(c.slide).push(c); }
  const ordre = [...parSlide.keys()].sort((a, b) => a - b);
  if (!ordre.length) L.push('Aucune correction à signaler.', '');
  for (const n of ordre) {
    const l = parSlide.get(n);
    L.push(n === 0 ? '## Deck entier' : `## Slide ${n}${res.titres?.[n] ? ` : ${res.titres[n].slice(0, 90)}` : ''}`);
    l.sort((a, b) => (a.gravite === b.gravite ? 0 : a.gravite === 'erreur' ? -1 : 1));
    l.forEach((c, i) => L.push(`${i + 1}. [${c.gravite === 'erreur' ? 'ERREUR' : 'à vérifier'}] ${c.code} : ${c.message}`));
    L.push('');
  }
  L.push('## Ce que je n\'ai pas pu vérifier', ...res.nonVerifie.map((x) => `- ${x}`), '');
  return L.join('\n');
}

// ---------- différences entre deux registres (re-cut) ----------
export function diffRegistres(ancien, nouveau) {
  const A = chargerRegistre(ancien); const B = chargerRegistre(nouveau);
  const lignes = []; const slides = new Set();
  for (const [id, c] of B.index) {
    const o = A.index.get(id);
    const nouveauS = c._slide.n;
    if (!o) { lignes.push(`+ ${id} : nouveau (${fr(c.valeur)} ${c.unite || ''}, ${c.periode || '?'}) slide ${nouveauS}`); slides.add(nouveauS); continue; }
    const ch = [];
    if (o.valeur !== c.valeur) ch.push(`valeur ${fr(o.valeur)} -> ${fr(c.valeur)}`);
    if (o.unite !== c.unite) ch.push(`unité ${o.unite} -> ${c.unite}`);
    if (o.periode !== c.periode) ch.push(`période ${o.periode} -> ${c.periode}`);
    if (o.statut !== c.statut) ch.push(`statut ${o.statut} -> ${c.statut}`);
    if (ch.length) { lignes.push(`~ ${id} : ${ch.join(', ')} (slide ${nouveauS})`); slides.add(nouveauS); }
    for (const [id2, c2] of B.index) if (c2.calcul && new RegExp(`\\b${id}\\b`).test(c2.calcul) && ch.length) { lignes.push(`  -> dérivé ${id2} (${c2.calcul}) à recalculer, slide ${c2._slide.n}`); slides.add(c2._slide.n); }
  }
  for (const [id, c] of A.index) if (!B.index.has(id)) { lignes.push(`- ${id} : supprimé (était slide ${c._slide.n})`); slides.add(c._slide.n); }
  return { lignes, slides: [...slides].sort((a, b) => a - b) };
}

// ---------- CLI ----------
function main(argv) {
  const pos = []; const o = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) { const k = a.slice(2); if (['json', 'strict'].includes(k)) o[k] = true; else o[k] = argv[++i]; } else pos.push(a);
  }
  if (pos[0] === 'diff') {
    if (pos.length < 3) throw new Error('usage : diff <ancien.data.json> <nouveau.data.json>');
    const d = diffRegistres(pos[1], pos[2]);
    console.log(d.lignes.length ? d.lignes.join('\n') : 'Aucun changement de chiffre.');
    console.log(d.slides.length ? `\nSlides à rééditer : ${d.slides.join(', ')}` : '');
    return 0;
  }
  if (!pos[0] || o.aide) { console.log('usage : node lint-deck.mjs <deck.pptx> [--data deck.data.json] [--mode lecture|projete] [--police-min N] [--police-min-note N] [--niveaux-max N] [--sortie rapport.md] [--json]\n        node lint-deck.mjs diff <ancien.data.json> <nouveau.data.json>'); return 2; }
  const deckPath = path.resolve(pos[0]);
  const candidats = [o.data, deckPath.replace(/\.pptx$/i, '.data.json'), path.join(path.dirname(deckPath), 'deck.data.json')].filter(Boolean);
  const regPath = candidats.find((c) => fs.existsSync(c));
  const reg = regPath ? chargerRegistre(regPath) : null;
  const res = controler(lirePptx(deckPath), reg, {
    mode: o.mode, policeMin: o['police-min'] ? Number(o['police-min']) : undefined, policeMinLabel: o['police-min-label'] ? Number(o['police-min-label']) : undefined, policeMinNote: o['police-min-note'] ? Number(o['police-min-note']) : undefined,
    niveauxMax: o['niveaux-max'] ? Number(o['niveaux-max']) : undefined,
  });
  const txt = o.json ? JSON.stringify(res, null, 2) : rapport(res, path.basename(deckPath), regPath && path.basename(regPath));
  if (o.sortie) fs.writeFileSync(o.sortie, txt); else console.log(txt);
  return res.constats.some((c) => c.gravite === 'erreur') ? 1 : 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  try { process.exitCode = main(process.argv.slice(2)); } catch (e) { console.error('Erreur : ' + e.message); process.exitCode = 2; }
}
