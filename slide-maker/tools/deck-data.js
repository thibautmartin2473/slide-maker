// Mode « re-cut » : le script qui fabrique le deck (pptxgenjs) lit le registre (fichier .data.json), donc un chiffre changé = une édition.
// const D = require('./deck-data.js').charger('mon-deck.data.json');
// D.fmt('ca24')             -> « 4,2 Md€ »          D.val('ca24')      -> 4.2
// D.fmt('croiss24')         -> « 21,7 % »            D.nombre('ca24')   -> « 4,2 » (sans unité)
// D.titre(3)                -> titre de la slide 3, modèle du registre dont les {id} sont remplacés par la valeur formatée
//                              (« Le CA atteint {ca24} en {ca24.periode} » ; {id.nombre} sans unité ; {id.periode} ; {id.unite})
// D.serie(['ca23','ca24'])  -> [3.45, 4.2] pour addChart       D.source(3) -> « Source : ... » prête à poser
// Après modification : node lint-deck.mjs deck.pptx   et   node lint-deck.mjs diff ancien.data.json nouveau.data.json
const fs = require('fs');

const FINE = '\u202f', NBSP = '\u00a0', MOINS = '\u2212';
function nombre(v, dec) {
  const d = dec ?? (String(v).split('.')[1] || '').length;
  const [e, f] = Math.abs(v).toFixed(d).split('.');
  return (v < 0 ? MOINS : '') + e.replace(/\B(?=(\d{3})+(?!\d))/g, FINE) + (f ? ',' + f : '');
}
function charger(chemin) {
  const j = JSON.parse(fs.readFileSync(chemin, 'utf8'));
  const idx = new Map();
  for (const s of j.slides) for (const c of s.chiffres || []) if (!idx.has(c.id)) idx.set(c.id, c);
  const get = (id) => { const c = idx.get(id); if (!c) throw new Error(`chiffre inconnu dans le registre : ${id}`); return c; };
  const nb = (id) => { const c = get(id); if (c.statut === 'gap') return 'n.d.'; return nombre(c.valeur, c.decimales); };
  const fmt = (id, o = {}) => {
    const c = get(id); if (c.statut === 'gap') return 'n.d.';
    const n = nb(id); const u = c.unite || '';
    const base = u === '%' ? `${n}${NBSP}%` : u === 'x' ? `${n}x` : u ? `${n}${NBSP}${u}` : n;
    return (c.statut === 'E' || c.statut === 'P') && o.etiquette !== false ? `${base}${NBSP}(${c.statut})` : base;
  };
  const modele = (t) => t.replace(/\{([\w]+)(?:\.(nombre|periode|unite))?\}/g, (_, id, part) => {
    const c = get(id);
    return part === 'nombre' ? nb(id) : part === 'periode' ? (c.periode || '') : part === 'unite' ? (c.unite || '') : fmt(id);
  });
  const slide = (n) => { const s = j.slides.find((x) => x.n === n || x.id === n); if (!s) throw new Error(`slide inconnue : ${n}`); return s; };
  return {
    j, nombre: nb, fmt, val: (id) => get(id).valeur, serie: (ids) => ids.map((id) => get(id).valeur),
    titre: (n) => modele(slide(n).titreModele || slide(n).titre || ''),
    source: (n) => { const l = [...new Set(slide(n).chiffres.filter((c) => c.source?.libelle).map((c) => `${c.source.libelle}${c.source.page ? ', p. ' + c.source.page : ''}`))]; return 'Source : ' + (l.join(' ; ') || 'à renseigner'); },
    parametres: j.parametres || {},
  };
}
module.exports = { charger, nombre };
