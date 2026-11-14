// logos.js : règle des logos d'entreprise, outillée pour pptxgenjs.
//
// La règle (principes B9, references/principes.md) : dans les listes, tableaux, légendes
// et axes de graphique, le nom d'une entreprise est remplacé par son LOGO (nom en logotype), au moins dans la moitié des
// exhibits qui nomment des entreprises ; cohérent dans un même exhibit (tous logos ou tous noms) ; nom conservé en texte
// alternatif ; logotype fictif propre pour une société fictive ; JAMAIS de logo inventé pour une société réelle.
//
// Trois fonctions (unités : pouces, comme pptxgenjs) :
//
//   logoOuNom(slide, entreprise, { x, y, h, w, alt, mode, variante, align, fontFace, fontSize, color, bold })
//     mode 'logo' et un fichier existe dans la bibliothèque (voir DOSSIER_LOGOS) : image posée à la hauteur h, ratio conservé,
//     dans la boîte (x, y, w?, h) ; altText = alt || entreprise. Sinon le NOM en texte à la même place (aucun logo n'est jamais
//     fabriqué pour une entreprise réelle). Retourne { affichage: 'logo'|'nom', w, fichier }. Le registre du deck
//     (deck.data.json, champ « entreprises ») doit dire ce qui est réellement affiché : utiliser l'affichage retourné.
//     variante : 'clair' (défaut, fond clair : écarte les versions blanches), 'sombre' (fond foncé : versions blanches ou
//     négatives seulement, sinon le nom), ou un mot du nom de fichier (« vert », « rouge », « slate »).
//
//   logotypeFictif(slide, nom, { x, y, h, w, align, style, picto })
//     logotype FICTIF pour une société fictive (Orvane, Lumera, Tavelin...), construit en formes et en texte natifs (aucune image,
//     modifiable dans PowerPoint) : le nom dans une police et une couleur propres, plus un petit pictogramme géométrique.
//     Style et couleur sont déterministes à partir du nom (10 styles, 11 couleurs). Pour un exhibit, donner des styles tous
//     différents avec attribuerStyles(noms) puis passer { style } : le hasard du nom pourrait sinon donner deux fois le même.
//     Le texte alternatif d'une forme n'est pas écrit par pptxgenjs : après pres.writeFile, appeler
//     `await ajouterAltTextes(fichier)` (pose descr = nom sur chaque objet « Logotype <nom> »). Le lint refuse un logotype sans.
//     Polices : Arial, Georgia, Century Gothic, Franklin Gothic Medium, Gill Sans MT, Rockwell, Palatino Linotype, Tw Cen MT,
//     Trebuchet MS, Verdana (toutes livrées avec Windows et Office ; sur un poste sans l'une, PowerPoint en substitue une).
//     picto: false retire le pictogramme : à faire pour les étiquettes de points d'un nuage ou d'une matrice, où une pastille se lirait comme un point de données.
//     Retourne { w, h, style, couleur } (w estimée, utile pour centrer ou aligner à droite).
//
//   modeLogos(nbExhibitsAvecEntreprises, indexExhibit)
//     'logo' ou 'nom', déterministe : alternance, le premier exhibit en logos (index 0), donc au moins 50 % en logos.
//     Compter seulement les exhibits qui nomment au moins 3 entreprises (seuil du lint).
//
// Aides : logoDisponible(entreprise) (true/false, pour renseigner le registre), trouverLogo(entreprise, variante),
// attribuerStyles(noms), ajouterAltTextes(fichier), DOSSIER_LOGOS, STYLES.
//
// Bibliothèque de logos réels : DOSSIER_LOGOS/<Entreprise>/*.png|svg|jpg (aucun logo n'est fourni avec la skill : le dossier `logos/`, à côté de `tools/`, est à remplir par l'utilisatrice, ou à désigner par la variable SLIDE_LOGOS). Le dossier est reconnu par
// son nom EXACT (accents, casse et ponctuation ignorés : « EY-Parthenon » = « EY Parthenon ») ; une correspondance approchée
// serait dangereuse (« Bain Capital » n'est pas « Bain »). Pour un autre nom courant, un fichier alias.json dans DOSSIER_LOGOS :
// { "McKinsey & Company": "McKinsey" }. Les images sont posées sans téléchargement : si le logo n'est pas dans le dossier,
// le nom reste en texte.
//
// Exemple :
//   const L = require('./logos.js');
//   const mode = L.modeLogos(nbExhibits, i);
//   L.logoOuNom(slide, 'Bain', { x: 1, y: 2, h: 0.3, mode });
//   const st = L.attribuerStyles(['Lumera', 'Tavelin']);   L.logotypeFictif(slide, 'Lumera', { x: 1, y: 3, h: 0.3, style: st.Lumera });
//   await pres.writeFile({ fileName }); await L.ajouterAltTextes(fileName);
'use strict';
const fs = require('fs');
const path = require('path');

const DOSSIER_LOGOS = process.env.SLIDE_LOGOS || path.join(__dirname, '..', 'logos');

const norm = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

// ---------------------------------------------------------------- bibliothèque de logos réels
function dossierDe(entreprise) {
  if (!fs.existsSync(DOSSIER_LOGOS)) return null;
  let cible = entreprise;
  const alias = path.join(DOSSIER_LOGOS, 'alias.json');
  if (fs.existsSync(alias)) {
    try { const a = JSON.parse(fs.readFileSync(alias, 'utf8')); const cle = Object.keys(a).find((k) => norm(k) === norm(entreprise)); if (cle) cible = a[cle]; } catch (e) { /* alias illisible : ignoré */ }
  }
  const d = fs.readdirSync(DOSSIER_LOGOS, { withFileTypes: true }).find((e) => e.isDirectory() && norm(e.name) === norm(cible));
  return d ? path.join(DOSSIER_LOGOS, d.name) : null;
}

function dimensions(fichier) {
  const ext = path.extname(fichier).toLowerCase();
  const buf = fs.readFileSync(fichier);
  if (ext === '.png') return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  if (ext === '.jpg' || ext === '.jpeg') {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const m = buf[i + 1];
      if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
      i += 2 + buf.readUInt16BE(i + 2);
    }
    return null;
  }
  if (ext === '.svg') {
    const t = buf.toString('utf8', 0, 4000);
    const vb = t.match(/viewBox\s*=\s*"([^"]+)"/i);
    if (vb) { const v = vb[1].trim().split(/[\s,]+/).map(Number); if (v.length === 4 && v[2] > 0 && v[3] > 0) return { w: v[2], h: v[3] }; }
    const w = t.match(/<svg[^>]*\swidth\s*=\s*"([\d.]+)/i); const h = t.match(/<svg[^>]*\sheight\s*=\s*"([\d.]+)/i);
    if (w && h) return { w: +w[1], h: +h[1] };
  }
  return null;
}

// Fichier de logo à utiliser pour une entreprise réelle, ou null (le nom reste alors en texte).
function trouverLogo(entreprise, variante = 'clair') {
  const d = dossierDe(entreprise);
  if (!d) return null;
  const BLANC = /(blanc|negatif|white|negative)/i;
  const AUTRE = /(derive|cadre|fond-degrade|accredit|ancien|unleash|pied)/i;
  const pref = (f) => (/\.png$/i.test(f) ? 0 : /\.svg$/i.test(f) ? 2 : 3) + (/2000px/i.test(f) ? 0 : 1) + (/officiel/i.test(f) ? -0.5 : 0) + (/wikimedia/i.test(f) ? 0.5 : 0);
  let fichiers = fs.readdirSync(d).filter((f) => /\.(png|svg|jpe?g)$/i.test(f) && !AUTRE.test(f));
  if (variante === 'clair') fichiers = fichiers.filter((f) => !BLANC.test(f));
  else if (variante === 'sombre') fichiers = fichiers.filter((f) => BLANC.test(f));
  else fichiers = fichiers.filter((f) => norm(f).includes(norm(variante)));
  fichiers.sort((a, b) => pref(a) - pref(b));
  for (const f of fichiers) {
    const fichier = path.join(d, f);
    const dim = dimensions(fichier);
    if (dim && dim.w > 0 && dim.h > 0) return { fichier, ratio: dim.w / dim.h };
  }
  return null;
}
const logoDisponible = (entreprise, variante) => !!trouverLogo(entreprise, variante);

// ---------------------------------------------------------------- estimation de largeur de texte (pas de mesure réelle disponible)
const FAMILLE = { Arial: 0.5, Georgia: 0.52, 'Century Gothic': 0.55, 'Franklin Gothic Medium': 0.47, 'Gill Sans MT': 0.47, Rockwell: 0.52, 'Palatino Linotype': 0.49, 'Tw Cen MT': 0.43, 'Trebuchet MS': 0.5, Verdana: 0.58 };
function largeurTexte(txt, pt, police, gras) {
  const f = (FAMILLE[police] || 0.52) * (gras ? 1.06 : 1);
  let em = 0;
  for (const c of txt) em += /[iljtfr.,;:'!|]/.test(c) ? 0.55 : /[mwMW]/.test(c) ? 1.55 : /[A-Z]/.test(c) ? 1.22 : 1;
  return em * f * pt / 72;          // pouces
}

// ---------------------------------------------------------------- mode
function modeLogos(nbExhibitsAvecEntreprises, indexExhibit) {
  if (!(nbExhibitsAvecEntreprises > 0)) return 'nom';
  return indexExhibit % 2 === 0 ? 'logo' : 'nom';
}

// ---------------------------------------------------------------- logo réel ou nom
function boite(x, w, wReel, align) { return align === 'center' ? x + (w - wReel) / 2 : align === 'right' ? x + w - wReel : x; }

function logoOuNom(slide, entreprise, o = {}) {
  const { x, y, h } = o;
  const mode = o.mode || 'logo';
  const logo = mode === 'logo' ? trouverLogo(entreprise, o.variante || 'clair') : null;
  if (logo) {
    let hh = h; let ww = h * logo.ratio;
    if (o.w && ww > o.w) { ww = o.w; hh = ww / logo.ratio; }
    slide.addImage({ path: logo.fichier, x: boite(x, o.w ?? ww, ww, o.align), y: y + (h - hh) / 2, w: ww, h: hh, altText: o.alt || entreprise, objectName: 'Logo ' + entreprise });
    return { affichage: 'logo', w: ww, fichier: logo.fichier };
  }
  const pt = o.fontSize || Math.max(9, Math.round(h * 72 * 0.6 * 10) / 10);
  const police = o.fontFace || 'Arial';
  const w = o.w ?? largeurTexte(entreprise, pt, police, o.bold) * 1.15 + 0.05;
  slide.addText(entreprise, { x, y, w, h, fontFace: police, fontSize: pt, bold: !!o.bold, color: o.color || '323232', align: o.align || 'left', valign: 'middle', margin: 0, wrap: false, fit: 'none' });
  return { affichage: 'nom', w, fichier: null };
}

// ---------------------------------------------------------------- logotype fictif (formes et texte natifs)
// 10 styles réellement différents : police, graisse, italique, casse, pictogramme (forme, côté).
const STYLES = [
  { police: 'Arial', gras: true, casse: 'normale', picto: 'disque', cote: 'gauche', echelle: 1 },
  { police: 'Georgia', gras: false, casse: 'normale', picto: 'losange', cote: 'gauche', echelle: 1 },
  { police: 'Century Gothic', gras: true, casse: 'normale', picto: 'carre-point', cote: 'gauche', echelle: 0.93 },
  { police: 'Franklin Gothic Medium', gras: false, casse: 'normale', picto: 'triangle', cote: 'droite', echelle: 1.08 },
  { police: 'Gill Sans MT', gras: false, casse: 'minuscule', picto: 'anneau', cote: 'gauche', echelle: 1.12 },
  { police: 'Rockwell', gras: true, casse: 'normale', picto: 'barres', cote: 'gauche', echelle: 1 },
  { police: 'Palatino Linotype', gras: false, italique: true, casse: 'normale', picto: 'point', cote: 'droite', echelle: 1.1 },
  { police: 'Tw Cen MT', gras: true, casse: 'normale', picto: 'chevron', cote: 'gauche', echelle: 1.2 },
  { police: 'Trebuchet MS', gras: true, casse: 'normale', picto: 'hexagone', cote: 'droite', echelle: 1 },
  { police: 'Verdana', gras: false, casse: 'minuscule', picto: 'parallelogramme', cote: 'gauche', echelle: 0.92 },
];
const COULEURS = ['1F3A5F', '7A1F2B', '0F6B5C', 'B4400C', '4B2E83', '5B6770', '8A5A00', '0E6E86', '9D174D', '3F6212', '2B2D42'];

function hache(s) { let h = 2166136261; for (const c of norm(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; }
function styleDe(nom) { const h = hache(nom); return { style: h % STYLES.length, couleur: Math.floor(h / STYLES.length) % COULEURS.length }; }

// Attribue à chaque nom un style ET une couleur tous différents (tant qu'il y a moins de 10 noms), de façon déterministe
// (ordre alphabétique des noms, sondage linéaire à partir de la valeur du nom).
function attribuerStyles(noms) {
  const pris = new Set(), prisC = new Set(), res = {};
  [...noms].sort((a, b) => norm(a).localeCompare(norm(b))).forEach((nom) => {
    let { style, couleur } = styleDe(nom);
    for (let i = 0; i < STYLES.length && pris.has(style) && pris.size < STYLES.length; i++) style = (style + 1) % STYLES.length;
    for (let i = 0; i < COULEURS.length && prisC.has(couleur) && prisC.size < COULEURS.length; i++) couleur = (couleur + 1) % COULEURS.length;
    pris.add(style); prisC.add(couleur); res[nom] = { style, couleur };
  });
  return res;
}

function picto(slide, kind, x, y, t, col, nom) {
  const f = { fill: { color: col }, line: { type: 'none' }, objectName: 'Pictogramme ' + nom };
  const forme = (prst, X, Y, W, H, ex = {}) => slide.addShape(prst, Object.assign({ x: X, y: Y, w: W, h: H }, f, ex));
  switch (kind) {
    case 'disque': forme('ellipse', x, y, t, t); break;
    case 'losange': forme('diamond', x, y, t, t); break;
    case 'triangle': forme('triangle', x, y, t, t); break;
    case 'anneau': forme('donut', x, y, t, t); break;
    case 'chevron': forme('chevron', x, y, t * 0.8, t); break;
    case 'hexagone': forme('hexagon', x, y, t, t * 0.9, { }); break;
    case 'parallelogramme': forme('parallelogram', x, y + t * 0.1, t, t * 0.8); break;
    case 'carre-point':
      forme('roundRect', x, y, t, t, { rectRadius: 0.2 });
      slide.addShape('ellipse', { x: x + t * 0.3, y: y + t * 0.3, w: t * 0.4, h: t * 0.4, fill: { color: 'FFFFFF' }, line: { type: 'none' }, objectName: 'Pictogramme ' + nom });
      break;
    case 'barres':
      forme('rect', x, y, t * 0.42, t);
      forme('rect', x + t * 0.58, y + t * 0.38, t * 0.42, t * 0.62);
      break;
    case 'point': forme('ellipse', x, y, t, t); break;
    default: forme('ellipse', x, y, t, t);
  }
}
const largeurPicto = (kind, t) => (kind === 'chevron' ? t * 0.8 : t);

function logotypeFictif(slide, nom, o = {}) {
  const { x, y, h } = o;
  const d = styleDe(nom);
  const sIdx = (o.style && o.style.style !== undefined ? o.style.style : (typeof o.style === 'number' ? o.style : d.style));
  const cIdx = (o.style && o.style.couleur !== undefined ? o.style.couleur : d.couleur);
  const st = STYLES[sIdx], col = COULEURS[cIdx];
  const pt = o.fontSize || Math.max(9, Math.round(h * 72 * 0.58 * st.echelle * 10) / 10);
  const txt = st.casse === 'minuscule' ? nom.toLowerCase() : nom;
  const tw = largeurTexte(txt, pt, st.police, st.gras) * 1.02 + 0.01;
  const sansPicto = o.picto === false;
  const pico = st.picto === 'point' ? h * 0.2 : h * 0.72;
  const pw = sansPicto ? 0 : largeurPicto(st.picto, pico), gap = sansPicto ? 0 : st.picto === 'point' ? h * 0.07 : h * 0.26;
  const total = tw + gap + pw;
  const x0 = boite(x, o.w ?? total, total, o.align);
  const xt = st.cote === 'gauche' ? x0 + pw + gap : x0;
  const xp = st.cote === 'gauche' ? x0 : x0 + tw + gap;
  const yp = st.picto === 'point' ? y + h / 2 + pt * 0.33 / 72 - pico : y + (h - pico) / 2;       // le point se pose sur la ligne de base
  if (!sansPicto) picto(slide, st.picto, xp, yp, pico, col, nom);
  slide.addText(txt, { x: xt, y, w: tw, h, fontFace: st.police, fontSize: pt, bold: !!st.gras, italic: !!st.italique, color: col, align: 'left', valign: 'middle', margin: 0, wrap: false, fit: 'none', objectName: 'Logotype ' + nom });
  return { w: total, h, style: sIdx, couleur: cIdx };
}

// ---------------------------------------------------------------- texte alternatif des logotypes (post-traitement du .pptx)
async function ajouterAltTextes(fichier) {
  const JSZip = require('jszip');
  const zip = await JSZip.loadAsync(fs.readFileSync(fichier));
  let n = 0;
  for (const nom of Object.keys(zip.files).filter((f) => /^ppt\/slides\/slide\d+\.xml$/.test(f))) {
    const xml = await zip.file(nom).async('string');
    const nx = xml.replace(/<p:cNvPr\b([^>]*?)(\/?)>/g, (m, attrs, fin) => {
      const mm = attrs.match(/\bname="Logotype ([^"]*)"/);
      if (!mm || /\bdescr=/.test(attrs)) return m;
      n++; return `<p:cNvPr${attrs} descr="${mm[1]}"${fin}>`;
    });
    if (nx !== xml) zip.file(nom, nx);
  }
  fs.writeFileSync(fichier, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
  return n;
}

module.exports = { logoOuNom, logotypeFictif, modeLogos, logoDisponible, trouverLogo, attribuerStyles, ajouterAltTextes, largeurTexte, STYLES, COULEURS, DOSSIER_LOGOS };
