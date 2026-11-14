// Exemple : point de trésorerie d'une PME FICTIVE (Veyrac Matériaux), 7 slides, thème ciceria, mode lecture.
// Les titres, chiffres, séries et sources viennent du registre exemple.data.json : un chiffre change = une valeur modifiée là, puis on relance.
// Lancement : node exemple.js [sortie.pptx]      (pptxgenjs doit être installé : npm install pptxgenjs)
'use strict';
const path = require('path');
const L = require('./lib.js');
const D = require('./deck-data.js').charger(path.join(__dirname, 'exemple.data.json'));
const OUT = process.argv[2] || 'exemple.pptx';

const ctx = L.deck({ theme: 'ciceria' });          // paysage 16:9, mode lecture (corps 11 pt)
const { T, G, S, Fn } = ctx;
const FICTIF = 'Veyrac Matériaux est une entreprise fictive ; chiffres de démonstration';
const E = 'E : estimation du DAF';
const base = (n, extra = {}) => ({ title: D.titre(n), source: D.source(n).replace(/^Source : /, ''), ...extra });

// ---------- 1. couverture
{
  const s = ctx.pres.addSlide();
  s.background = { color: T.bg };
  L.rect(ctx, s, 0, 0, 0.35, G.H, { fill: T.accent });
  L.txt(ctx, s, 'Point de trésorerie', { x: 1.1, y: 2.3, w: 10.5, h: 0.4, fontSize: 14, fontFace: Fn.semi, color: T.accent });
  s.addText('Veyrac Matériaux : la trésorerie couvre 11 semaines de charges, trois décisions la protègent', { x: 1.1, y: 2.85, w: 10.5, h: 1.6, fontFace: Fn.title, bold: !!Fn.boldSemi, fontSize: S.hero, color: T.ink, margin: 0, valign: 'top', isTextBox: true, fit: 'none' });
  L.txt(ctx, s, 'Comité de direction, 12 novembre 2026', { x: 1.1, y: 4.9, w: 10.5, h: 0.3, fontSize: 14, color: T.n2 });
  L.txt(ctx, s, FICTIF, { x: 1.1, y: 6.7, w: 10.5, h: 0.3, fontSize: 10, color: T.n2 });
  if (ctx.logo) s.addImage({ path: ctx.logo, x: G.W - G.mr - 2.2, y: 0.5, w: 2.2, h: 0.8, sizing: { type: 'contain', w: 2.2, h: 0.8 }, altText: 'Logo' });
  ctx.page += 1;
}

// ---------- 2. les trois chiffres du mois
{
  const s = ctx.slide(base(2, { kicker: 'Résumé', subtitle: 'Position au 31 octobre 2026, en k€ et en semaines de charges', note: FICTIF }));
  const cards = [
    { id: 'treso_oct', t: 'Trésorerie disponible au 31 octobre', hot: false },
    { id: 'charges_hebdo', t: 'Charges moyennes par semaine (13 dernières semaines)', hot: false },
    { id: 'semaines', t: 'Couverture des charges, pour un seuil de ' + D.fmt('seuil_sem'), hot: true },
  ];
  cards.forEach((c, i) => {
    const col = G.col(i * 4, 4); const w = col.w - 0.1;
    L.rect(ctx, s, col.x, 2.25, w, 2.5, { fill: T.n6 });
    // le nombre en grand, l'unité en plus petit : le chiffre se lit en premier
    L.txt(ctx, s, [{ text: D.nombre(c.id), options: { fontSize: S.hero } }, { text: ' ' + D.j.slides.flatMap((x) => x.chiffres || []).find((x) => x.id === c.id).unite, options: { fontSize: S.title } }],
      { x: col.x + 0.3, y: 2.55, w: w - 0.6, h: 0.9, fontFace: Fn.hero, color: c.hot ? T.accent : T.ink, valign: 'middle' });
    L.txt(ctx, s, c.t, { x: col.x + 0.3, y: 3.65, w: w - 0.6, h: 0.9, fontSize: S.body + 1, color: T.n1 });
  });
  L.verdict(ctx, s, { text: 'Le seuil n\'est **pas menacé aujourd\'hui** ; c\'est la pente des six derniers mois qu\'il faut regarder', y: 5.35, h: 0.6 });
}

// ---------- 3. évolution sur six mois (une seule mise en évidence : le dernier mois)
{
  const s = ctx.slide(base(3, { kicker: 'Évolution', subtitle: 'Trésorerie de fin de mois, en k€, de mai à octobre 2026', note: FICTIF }));
  const ids = ['tre_mai', 'tre_juin', 'tre_juil', 'tre_aout', 'tre_sept', 'treso_oct'];
  L.grisUnAccent(ctx, s, { box: { x: G.ml, y: 2.1, w: 7.9, h: 4.55 }, labels: ['mai', 'juin', 'juillet', 'août', 'septembre', 'octobre'], values: D.serie(ids), max: 2000, fmt: '#,##0' });
  const c = G.col(8, 4);
  L.txt(ctx, s, [
    ...L.leadRuns(ctx, 'Six mois de baisse.', 'Aucun mois n\'a vu la trésorerie remonter depuis mai.', T.accent),
  ], { x: c.x, y: 2.3, w: c.w, h: 1.0, fontSize: S.body + 1, lineSpacingMultiple: 1.1 });
  L.txt(ctx, s, [
    ...L.leadRuns(ctx, 'Une baisse régulière,', 'sans choc ponctuel : elle vient des flux courants (slide suivante).', T.n1),
  ], { x: c.x, y: 3.5, w: c.w, h: 1.0, fontSize: S.body + 1, lineSpacingMultiple: 1.1 });
}

// ---------- 4. pont de trésorerie : d'où vient la baisse
{
  const s = ctx.slide(base(4, { kicker: 'Causes', subtitle: 'De la trésorerie de mai à celle d\'octobre 2026, en k€', note: FICTIF }));
  L.bridgeGroupes(ctx, s, { box: { x: G.ml, y: 2.05, w: G.cwid, h: 4.1 }, max: 2300, steps: [
    { label: 'Trésorerie fin mai', kind: 'total', v: D.val('tre_mai') },
    { label: 'Flux d\'exploitation', v: D.val('cf_expl') },
    { label: 'Besoin en fonds de roulement', v: -D.val('bfr') },
    { label: 'Investissements', v: -D.val('invest') },
    { label: 'Emprunts remboursés', v: -D.val('emprunts') },
    { label: 'Trésorerie fin octobre', kind: 'total', v: D.val('treso_oct') }] });
  L.verdict(ctx, s, { text: 'Le premier levier est **le poste clients**, avant tout arbitrage sur les investissements', y: 6.2, h: 0.5 });
}

// ---------- 5. forme dense : tableau, pastilles, encadrés, bandeau de conclusion
{
  const s = ctx.slide(base(5, { kicker: 'Créances clients', subtitle: 'Retards de paiement au 31 octobre 2026, en k€ et en jours', note: 'Les priorités suivent le montant en retard ; c\'est un jugement, pas une mesure. ' + FICTIF }));
  const rows = [['Bâtisud', '420', '190', '52'], ['Menuiseries Ardèche', '310', '130', '38'], ['SCI Les Terrasses', '240', '90', '71'], ['Autres clients', '2 860', D.nombre('retard_autres'), '21']];
  const cell = (t, o = {}) => ({ text: t, options: { fontFace: Fn.body, fontSize: S.body, color: T.ink, valign: 'middle', border: [{ type: 'none' }, { type: 'none' }, { type: 'solid', pt: 0.5, color: T.n5 }, { type: 'none' }], margin: [3, 6, 3, 6], ...o } });
  const head = ['Client', 'Encours (k€)', 'Retard (k€)', 'Retard moyen (jours)'].map((t, i) => cell(t, { bold: true, fontFace: Fn.semi, color: T.n2, fontSize: S.data, align: i ? 'right' : 'left', border: [{ type: 'none' }, { type: 'none' }, { type: 'solid', pt: 1, color: T.n3 }, { type: 'none' }] }));
  const body = rows.map((r, k) => r.map((t, i) => cell(t, { align: i ? 'right' : 'left', fontFace: k === 3 ? Fn.body : (i === 0 ? Fn.semi : Fn.body), color: k === 3 ? T.n2 : T.ink, bold: Fn.boldSemi && k < 3 && i === 0 })));
  const x0 = G.ml + 0.45; const tw = 6.5;
  s.addTable([head, ...body], { x: x0, y: 2.15, w: tw, colW: [2.4, 1.3, 1.2, 1.6], rowH: 0.55, fontFace: Fn.body, fontSize: S.body });
  [0, 1, 2].forEach((k) => L.pastille(ctx, s, { cx: G.ml + 0.18, cy: 2.15 + 0.55 * (k + 1) + 0.275, n: k + 1 }));
  const xe = x0 + tw + 0.5; const we = G.W - G.mr - xe;
  [['Bâtisud : le plus gros retard', 'Appel de la direction commerciale cette semaine ; 190 k€ à encaisser.', true],
    ['Menuiseries Ardèche : retard moyen', 'Plan de paiement en deux échéances, signé avant le 30 novembre.', false],
    ['SCI Les Terrasses : retard le plus ancien', 'Livraisons suspendues tant que le retard dépasse 60 jours.', false]].forEach(([t, d, f], k) =>
    L.encadre(ctx, s, { x: xe, y: 2.15 + k * 1.2, w: we, h: 1.1, n: k + 1, title: t, text: d, focus: f }));
  L.bandeau(ctx, s, { y: 5.95, h: 0.55, label: 'Conclusion', text: 'obtenir ces trois paiements ramène le retard total de ' + D.fmt('retard_total') + ' à ' + D.fmt('retard_autres') + '.' });
}

// ---------- 6. prévision : la trésorerie sans action (barres estimées)
{
  const s = ctx.slide(base(6, { kicker: 'Prévision', subtitle: 'Trésorerie de fin de mois, en k€, d\'octobre 2026 à mars 2027', note: E + ' ; ' + FICTIF }));
  const vals = D.serie(['treso_oct', 'nov', 'dec', 'jan', 'fev', 'mar']);
  const colors = vals.map((_, i) => (i === 4 ? T.accent : i === 0 ? T.n3 : T.n4));
  const box = { x: G.ml, y: 2.1, w: 8.1, h: 4.5 };
  const r = L.grisUnAccent(ctx, s, { box, labels: ['oct. (réel)', 'nov. (E)', 'déc. (E)', 'janv. (E)', 'févr. (E)', 'mars (E)'], values: vals, accent: [4], max: 1600, fmt: '#,##0' });
  L.ligneReference(ctx, s, { P: r.P, v: D.val('seuil'), max: 1600, label: 'Seuil\n' + D.fmt('seuil'), color: T.ink, labelPos: 'left', labelX: r.P.x + r.P.w + 0.08, below: false });
  L.etiquetteDegagee(ctx, s, { x: r.x(4), y: r.top(4) - 0.27, text: D.fmt('fev').replace(/ ?k€/, '') });
  const c = G.col(8, 4);
  L.txt(ctx, s, [
    ...L.leadRuns(ctx, 'Hypothèses.', 'Rythme des six derniers mois ; achat de camions de 240 k€ inclus en décembre ; aucune relance client.', T.accent),
  ], { x: c.x + 0.2, y: 2.3, w: c.w - 0.2, h: 1.5, fontSize: S.body + 1, lineSpacingMultiple: 1.1 });
  L.txt(ctx, s, [
    ...L.leadRuns(ctx, 'Lecture.', 'La trésorerie reste au-dessus du seuil jusqu\'en janvier, puis passe dessous.', T.n1),
  ], { x: c.x + 0.2, y: 4.5, w: c.w - 0.2, h: 1.2, fontSize: S.body + 1, lineSpacingMultiple: 1.1 });
}

// ---------- 7. décisions demandées
{
  const s = ctx.slide(base(7, { kicker: 'Décisions', subtitle: 'Effet attendu sur la trésorerie de novembre 2026 à février 2027, en k€', note: E + ' ; ' + FICTIF }));
  const cell = (t, o = {}) => ({ text: t, options: { fontFace: Fn.body, fontSize: S.body + 1, color: T.ink, valign: 'middle', border: [{ type: 'none' }, { type: 'none' }, { type: 'solid', pt: 0.5, color: T.n5 }, { type: 'none' }], margin: [4, 8, 4, 8], ...o } });
  const hd = (t, i) => cell(t, { bold: true, fontFace: Fn.semi, color: T.n2, fontSize: S.data, align: i === 1 ? 'right' : 'left', border: [{ type: 'none' }, { type: 'none' }, { type: 'solid', pt: 1, color: T.n3 }, { type: 'none' }] });
  const lignes = [
    ['Obtenir le paiement des trois clients en retard', D.fmt('eff1'), 'Direction commerciale', '30 novembre 2026'],
    ['Reporter de deux mois l\'achat de camions', D.fmt('eff2'), 'Direction générale', '20 novembre 2026'],
    ['Passer le délai fournisseurs de 30 à 45 jours sur trois fournisseurs', D.fmt('eff3'), 'Achats', '15 décembre 2026'],
  ];
  const rows = [['Décision', 'Effet attendu', 'Responsable', 'Échéance'].map(hd),
    ...lignes.map((r) => r.map((t, i) => cell(t, { align: i === 1 ? 'right' : 'left', fontFace: i === 1 ? Fn.semi : Fn.body, bold: Fn.boldSemi && i === 1 }))),
    ['Effet cumulé', D.fmt('effet_tot'), '', ''].map((t, i) => cell(t, { align: i === 1 ? 'right' : 'left', fontFace: Fn.semi, bold: Fn.boldSemi, color: i === 1 ? T.accent : T.ink }))];
  s.addTable(rows, { x: G.ml, y: 2.2, w: G.cwid, colW: [5.6, 1.8, 2.5, 2.23], rowH: 0.62, fontFace: Fn.body, fontSize: S.body + 1 });
  L.bandeau(ctx, s, { y: 5.7, h: 0.6, label: 'Décision demandée', text: 'valider ces trois actions avant le 20 novembre 2026.' });
}

ctx.save(OUT).then(() => console.log('Écrit : ' + OUT));
