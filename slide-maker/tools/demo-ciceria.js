'use strict';
// Deck d'exemple (10 slides) : ce que change slide-maker, avant/après, puis une slide par mission de DAF à temps partagé (PME fictive Atelier Gardelle).
// Lancer depuis ce dossier : node demo-ciceria.js ../../exemple/demo-ciceria.pptx
const path = require('path');
const L = require('./lib.js');
const D = require('./deck-data.js').charger(path.join(__dirname, 'demo-ciceria.data.json'));
const EX = path.join(__dirname, '..', '..', 'exemple');

// Options : node demo-ciceria.js [sortie.pptx] [--theme ciceria|ciceria-contraste|ciceria-lavande] [--seule N] (une seule slide, pour les aperçus de charte)
const opt = (k) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
const SORTIE = process.argv.slice(2).find((a) => a.endsWith('.pptx')) || path.join(EX, 'demo-ciceria.pptx');
const SEULE = Number(opt('--seule')) || 0;
const garde = (n) => !SEULE || SEULE === n;
const ctx = L.deck({ theme: opt('--theme') || 'ciceria' });
const { T, G, S, Fn } = ctx;
const entete = (s, x, w, texte) => {
  L.txt(ctx, s, texte, { x, y: G.y.top - 0.02, w, h: 0.24, fontSize: S.body, fontFace: Fn.semi, color: T.ink });
  L.line(ctx, s, x, G.y.top + 0.28, x + w, G.y.top + 0.28, { color: T.n5, w: 0.75 });
};

// Slide 1 : ce que change slide-maker
if (garde(1)) {
  const s = ctx.slide({ kicker: 'slide-maker | Ce que la méthode change', title: '**Ce que change slide-maker :** Claude ne met plus des chiffres en forme, il construit un argument qu\'un dirigeant peut trancher', note: 'comparaison établie sur la slide de trésorerie des pages suivantes (chiffres fictifs).', source: 'slide-maker, méthode et outils (github.com/thibautmartin2473/slide-maker)' });
  const lignes = [
    ['Avant de commencer', 'Produit tout de suite, sans connaître le cabinet', 'Lit votre lettre de mission, puis demande qui décide quoi et quelle matière explique les chiffres'],
    ['Titre', 'Un thème : « Prévision de trésorerie »', 'La décision, chiffrée, que le lecteur peut trancher'],
    ['Plan', 'Découvert à la livraison', 'Liste des titres validée par vous avant toute mise en page'],
    ['Graphique', 'Réglages par défaut : légende, quadrillage, libellés inclinés', 'Choisi selon la question du lecteur, une seule mise en évidence, valeurs sur les barres'],
    ['Commentaires', 'Paraphrase du graphique', 'Causes, sensibilité, option écartée, recommandation datée et chiffrée'],
    ['Chiffres', 'Complétés au besoin pour remplir la slide', 'Chaque chiffre a sa source ; estimations marquées (E), trous marqués n.d.'],
    ['Relecture', 'Aucune', 'Contrôle automatique des titres contre les chiffres, unités, périodes et sources, puis liste de ce qui n\'a pas pu être vérifié'],
  ];
  const head = (t, c) => ({ text: t, options: { fontFace: Fn.semi, color: c || T.ink, fill: { color: T.bg } } });
  const rows = [[head(''), head('Claude sans méthode', T.n2), head('Claude avec slide-maker', T.accent2)]].concat(lignes.map(([a, b, c]) => [
    { text: a, options: { fontFace: Fn.semi, color: T.ink } }, { text: b, options: { color: T.n2 } }, { text: c, options: { color: T.ink } },
  ]));
  s.addTable(rows, { x: G.ml, y: G.y.top, w: G.cwid, colW: [2.0, 4.3, G.cwid - 6.3], fontFace: Fn.body, fontSize: S.body, valign: 'middle', margin: [3, 6, 3, 6], rowH: 0.5,
    border: { type: 'solid', pt: 0.75, color: T.n5 }, fill: { color: T.bg } });
  L.bandeau(ctx, s, { y: 6.1, h: 0.55, label: 'En pratique', text: 'vous fournissez la lettre de mission une fois et validez la liste des titres ; Claude fait le reste et dit ce qu\'il n\'a pas pu vérifier.' });
}

// Slide 2 : avant / après
if (garde(2)) {
  const s = ctx.slide({ kicker: 'slide-maker | Avant, après', title: '**Mêmes chiffres, autre slide :** le titre tranche, les encarts expliquent le creux, la recommandation chiffre la décision', note: 'illustration. La slide de gauche reproduit le rendu habituel d\'un assistant sans méthode ; celle de droite est la page suivante. Chiffres fictifs.', source: 'slide-maker, méthode et outils (github.com/thibautmartin2473/slide-maker)' });
  const w = (G.cwid - 0.35) / 2, h = w * 9 / 16, y = G.y.top + 0.45;
  [[G.ml, 'Sans méthode : la prévision mise en forme', 'sans-methode.png', ['Le titre nomme un thème, il ne conclut rien.', 'Les puces relisent le graphique ; aucune cause, aucune option.', 'Ni source, ni seuil, ni décision proposée.']],
   [G.ml + w + 0.35, 'Avec slide-maker : la prévision argumentée', 'avec-slide-maker.png', ['Le titre donne la décision et son montant.', 'Les encarts expliquent le creux, le risque client et l\'option écartée.', 'Chaque chiffre est sourcé ; la recommandation est datée et chiffrée.']]]
    .forEach(([x, cap, img, pts], k) => {
      entete(s, x, w, cap);
      s.addImage({ path: path.join(EX, img), x, y, w, h, altText: cap });
      L.rect(ctx, s, x, y, w, h, { line: k ? T.accent : T.n4, lw: k ? 1.25 : 0.75 });
      L.txt(ctx, s, pts.map((t, i) => ({ text: t, options: { bullet: { indent: 12 }, breakLine: i < pts.length - 1, color: T.n1 } })), { x, y: y + h + 0.15, w, h: 0.8, fontSize: S.body, paraSpaceAfter: 2 });
    });
}

// Slide 3 : l'analyse dense (exhibit à gauche, lecture numérotée à droite, bandeau)
if (garde(3)) {
  const ids = Array.from({ length: 13 }, (_, i) => 'w' + String(i + 1).padStart(2, '0'));
  const soldes = D.serie(ids);
  const semaines = ids.map((id) => D.j.slides[2].chiffres.find((c) => c.id === id).periode);
  const seuil = D.val('seuil');
  const s = ctx.slide({
    kicker: 'Trésorerie et prévisionnel | Atelier Gardelle',
    title: '**Creux de janvier :** tirer ' + D.fmt('ligne') + ' de ligne court terme couvre les sorties de fin d\'année, même si le premier client paie en retard',
    note: 'exemple, chiffres fictifs. Soldes au lundi avant mouvements de la semaine ; pointillé : seuil de sécurité de ' + D.fmt('seuil') + '. (E) : estimation de l\'auteur. Taux de la ligne supposé à 4,5 %.',
    source: D.j.slides[2].chiffres[0].source.libelle,
  });
  const xL = G.ml, wL = 6.55;
  entete(s, xL, wL, 'Trésorerie prévisionnelle au lundi, en k€, du 16/11/2026 au 08/02/2027');
  const MAX = 450;
  const sous = soldes.map((v, i) => (v < seuil ? i : -1)).filter((i) => i >= 0);
  const r = L.grisUnAccent(ctx, s, { box: { x: xL, y: G.y.top + 0.43, w: wL, h: 3.45 }, labels: semaines, values: soldes, accent: sous, max: MAX, gap: 45 });
  L.ligneReference(ctx, s, { P: r.P, v: seuil, max: MAX, label: '', color: T.ink });
  soldes.forEach((v, i) => { if (Math.abs(v - seuil) < 40) L.etiquetteDegagee(ctx, s, { x: r.x(i), y: r.top(i) - 0.27, w: 0.42, text: String(v) }); });
  const y74 = r.P.y + r.P.h * (1 - D.val('bas_retard') / MAX);
  L.line(ctx, s, r.x(8) - r.bw / 2, y74, r.x(8) + r.bw / 2, y74, { color: 'FFFFFF', w: 1.5, dash: 'sysDash' });
  L.txt(ctx, s, D.nombre('bas_retard'), { x: r.x(8) - r.bw / 2, y: y74 + 0.04, w: r.bw, h: 0.2, fontSize: S.axis, fontFace: Fn.semi, color: 'FFFFFF', align: 'center' });
  const yA = r.top(5) - 0.42;
  L.line(ctx, s, r.x(5) - r.bw / 2, yA, r.x(7) + r.bw / 2, yA, { color: T.n1, w: 0.75 });
  [[5, -1], [7, 1]].forEach(([i, sg]) => L.line(ctx, s, r.x(i) + sg * r.bw / 2, yA, r.x(i) + sg * r.bw / 2, yA + 0.08, { color: T.n1, w: 0.75 }));
  L.pastille(ctx, s, { cx: r.x(6), cy: yA, n: 1, fill: T.n1 });
  L.pastille(ctx, s, { cx: r.x(8), cy: r.top(8) - 0.48, n: 2, fill: T.n1 });

  const xR = xL + wL + 0.35, wR = G.ml + G.cwid - xR;
  entete(s, xR, wR, 'Lecture');
  const blocs = [
    ['Trois sorties datées font le creux', `TVA de novembre (${D.fmt('tva')}, 19/12), 13e mois (${D.fmt('treize')}, 24/12), échéance d'emprunt (${D.fmt('emprunt')}, 04/01) : ${D.fmt('total3')} en trois semaines.`],
    ['La reprise tient à un seul client', `Brenac Industrie verse ${D.fmt('brenac')} la semaine du 04/01. À 60 jours au lieu de 45, le point bas tombe à ${D.fmt('bas_retard')} le 11/01.`],
    ['L\'affacturage arrive trop tard', 'Trois à quatre semaines de mise en place : il finance février. Reporter l\'échéance exige l\'accord de la banque avant le 15/12.'],
    ['La ligne court terme couvre les deux cas', `${D.fmt('ligne')} tirés sur ${D.nombre('autorise')} autorisés couvrent le besoin central (${D.fmt('besoin')}) et le cas Brenac (${D.fmt('besoin_retard')}), dès le 18/12.`],
  ];
  const y0 = G.y.top + 0.43, hB = 0.84, gB = 0.07;
  blocs.forEach(([t, x], k) => L.encadre(ctx, s, { x: xR, y: y0 + k * (hB + gB), w: wR, h: hB, n: k + 1, title: t, text: x, focus: k === 3 }));
  L.bandeau(ctx, s, { y: 6.12, h: 0.55, label: 'Recommandation', text: `tirer ${D.fmt('ligne')} du 18/12 au 18/01, soit ${D.fmt('interets')} d'intérêts, et relancer Brenac dès le 15/12, avant sa facture de décembre.` });
}

// ---------------------------------------------------------------- slides 4 à 10 : les autres missions, même exigence
const src = (n) => D.source(n).replace(/^Source : /, '');
const lecture = (s, x, w, blocs, { y0 = G.y.top + 0.43, hB = 0.84, gB = 0.07, focus = blocs.length - 1 } = {}) => {
  entete(s, x, w, 'Lecture');
  blocs.forEach(([t, b], k) => L.encadre(ctx, s, { x, y: y0 + k * (hB + gB), w, h: hB, n: k + 1, title: t, text: b, focus: k === focus }));
};
const k = (v) => L.fmtThousands(v);

// Slide 4 : tableau de bord mensuel (pont à groupes : quels moteurs, et combien pèse chaque famille ?)
if (garde(4)) {
  const s = ctx.slide({
    kicker: 'Tableau de bord mensuel | Atelier Gardelle, octobre 2026',
    title: `**EBE à fin octobre, ${D.fmt('tb_ecart')} sous le budget :** indexer les devis sur le prix du chêne dès le 1er décembre protège ${D.fmt('tb_an')} d'EBE en 2027`,
    note: 'exemple, chiffres fictifs. EBE cumulé de janvier à octobre 2026. (E) : estimation de l\'auteur, hausse du chêne supposée stable.',
    source: src(4),
  });
  const xL = G.ml, wL = 6.55;
  entete(s, xL, wL, 'EBE cumulé de janvier à octobre 2026, du budget au réalisé, en k€');
  const steps = [['Budget', 'tb_budget', 'total'], ['Volume', 'tb_volume'], ['Prix', 'tb_prix'], ['Chêne', 'tb_chene'], ['Intérim', 'tb_interim'], ['Autres charges', 'tb_autres'], ['Réalisé', 'tb_reel', 'total']]
    .map(([label, id, kind]) => ({ label, v: D.val(id), kind }));
  const r = L.bridgeGroupes(ctx, s, { box: { x: xL, y: G.y.top + 0.43, w: wL, h: 3.6 }, steps, max: 450,
    groups: [{ from: 1, to: 2, label: 'Activité', value: D.nombre('tb_activite') }, { from: 3, to: 5, label: 'Coûts', value: D.nombre('tb_couts') }] });
  const haut = (i) => r.y(r.geo[i].hi) - 0.62;
  [[1, 1], [3, 2], [4, 3]].forEach(([i, n]) => L.pastille(ctx, s, { cx: r.x(i), cy: haut(i), n, fill: T.n1 }));
  L.pastille(ctx, s, { cx: r.x(4) + 0.55, cy: r.y(r.geo[4].lo) + 0.5, n: 4, fill: T.n1 });
  const xR = xL + wL + 0.35, wR = G.ml + G.cwid - xR;
  lecture(s, xR, wR, [
    ['Le volume est décalé, pas perdu', `Deux chantiers hôteliers glissent en février 2027 à la demande du client : ${D.nombre('tb_volume').replace('−', '')} k€ d'EBE reportés, déjà commandés.`],
    [`Le chêne a pris ${D.fmt('tb_hausse')} depuis mars`, `Les ${D.nombre('tb_chantiers')} devis signés au printemps sont à prix ferme : l'atelier absorbe seul la hausse, ${D.nombre('tb_chene').replace('−', '')} k€ à fin octobre.`],
    ['L\'intérim remplace un chef d\'équipe', `Poste vacant depuis juin. L'arrêter avant le 05/01 épargnerait ${D.fmt('tb_eco')}, mais exposerait ${D.fmt('tb_penalites')} de pénalités.`],
    ['Indexer les devis protège 2027', `Clause sur l'indice bois pour tout devis de plus de ${D.fmt('tb_seuil')} : ${D.fmt('tb_an')} protégés ; chaque point de hausse non répercuté coûte ${D.fmt('tb_point')}.`],
  ]);
  L.bandeau(ctx, s, { y: 6.12, h: 0.55, label: 'Recommandation', text: `clause d'indexation dans tout devis de plus de ${D.fmt('tb_seuil')} dès le 01/12 (responsable commercial) ; intérim maintenu jusqu'au 05/01.` });
}

// Slide 5 : marge par famille de chantiers (barres horizontales, deux lignes de référence)
if (garde(5)) {
  const s = ctx.slide({
    kicker: 'Tableau de bord mensuel | Marge par famille de chantiers',
    title: `**Marchés publics :** ne plus répondre sous ${D.fmt('mg_seuil')} de marge prévue ; ces chantiers font ${D.fmt('mg_part')} du CA et ne couvrent pas leurs frais fixes`,
    note: 'exemple, chiffres fictifs. Marge sur coûts directs (matière, main-d\'œuvre, sous-traitance). Heures : écart entre heures passées et heures chiffrées. (E) : estimation de l\'auteur.',
    source: src(5),
  });
  const xL = G.ml, wL = 6.55;
  entete(s, xL, wL, `Marge par famille, de janvier à octobre 2026 (CA total : ${D.fmt('mg_tot')})`);
  const fam = [['Agencement de boutiques', 'bout'], ['Particuliers', 'part'], ['Hôtellerie', 'hot'], ['Bureaux', 'bur'], ['Marchés publics', 'mp']];
  const hx = (c) => (c === 'mp' ? D.val('mg_h_ecart') : D.val('mg_hx_' + c));
  const yH = G.y.top + 0.43, y0 = yH + 0.42, rh = 0.6, MAX = 38;
  const cL = { lab: xL, ca: xL + 1.75, hx: xL + 2.6, bar: xL + 3.55 }, wBar = xL + wL - cL.bar - 0.1;
  [['Famille', cL.lab, 1.7, 'left'], ['CA, k€', cL.ca, 0.75, 'right'], ['Heures', cL.hx, 0.8, 'right'], ['Marge sur coûts directs', cL.bar + 0.05, wBar, 'left']]
    .forEach(([t, x, w, a]) => L.txt(ctx, s, t, { x, y: yH, w, h: 0.3, fontSize: S.axis, fontFace: Fn.semi, color: T.n2, align: a, valign: 'bottom' }));
  const tx = fam.map(([, c]) => D.val('mg_tx_' + c));
  const P = L.bars(ctx, s, { box: { x: cL.bar, y: y0, w: wBar, h: rh * fam.length }, labels: L.revBar(fam.map((f) => f[0])), values: L.revBar(tx),
    colors: L.revBar(fam.map(([, c]) => (c === 'mp' ? T.accent : T.n3))), max: MAX, dir: 'bar', gap: 70, showValue: false, catLabels: false, layout: { x: 0, y: 0, w: 1, h: 1 } });
  fam.forEach(([lab, c], i) => {
    const y = y0 + i * rh, mp = c === 'mp';
    if (i) L.line(ctx, s, xL, y, xL + wL, y, { color: T.n5, w: 0.5 });
    const o = { y, h: rh, fontSize: S.body, valign: 'middle', color: mp ? T.ink : T.n1, fontFace: mp ? Fn.semi : Fn.body };
    L.txt(ctx, s, lab, { ...o, x: cL.lab, w: 1.7 });
    L.txt(ctx, s, k(D.val('mg_ca_' + c)), { ...o, x: cL.ca, w: 0.75, align: 'right' });
    L.txt(ctx, s, '+' + hx(c) + ' %', { ...o, x: cL.hx, w: 0.8, align: 'right', color: mp ? T.neg : T.n1 });
    L.txt(ctx, s, tx[i] + ' %', { ...o, x: L.xVal(P, tx[i], 0, MAX) + 0.06, w: 0.6, fontSize: S.data, fontFace: Fn.semi });
  });
  L.line(ctx, s, xL, y0 + rh * fam.length, xL + wL, y0 + rh * fam.length, { color: T.n3, w: 0.75 });
  const yb = y0 + rh * fam.length;
  const x15 = L.xVal(P, D.val('mg_seuil'), 0, MAX), x22 = L.xVal(P, D.val('mg_fixes'), 0, MAX);
  L.line(ctx, s, x22, y0 - 0.05, x22, yb + 0.05, { color: T.ink, w: 1, dash: 'dash' });
  L.line(ctx, s, x15, y0 - 0.05, x15, yb + 0.05, { color: T.accent, w: 1.25, dash: 'sysDash' });
  L.txt(ctx, s, `Frais fixes : ${D.fmt('mg_fixes')}`, { x: x22 + 0.05, y: yb + 0.07, w: 1.6, h: 0.2, fontSize: S.axis, fontFace: Fn.semi, color: T.ink });
  L.txt(ctx, s, `Seuil proposé : ${D.fmt('mg_seuil')}`, { x: x15 - 1.82, y: yb + 0.07, w: 1.6, h: 0.2, fontSize: S.axis, fontFace: Fn.semi, color: T.accent, align: 'right' });
  const yMP = y0 + 4.5 * rh;
  L.pastille(ctx, s, { cx: cL.hx + 0.12, cy: yMP, n: 1, fill: T.n1 });
  L.pastille(ctx, s, { cx: (cL.bar + L.xVal(P, tx[4], 0, MAX)) / 2, cy: yMP, n: 2, fill: T.n1 });
  L.pastille(ctx, s, { cx: cL.ca - 0.08, cy: yMP, n: 3, fill: T.n1 });
  L.pastille(ctx, s, { cx: x15, cy: yb + 0.17, n: 4, fill: T.n1 });
  const xR = xL + wL + 0.35, wR = G.ml + G.cwid - xR;
  lecture(s, xR, wR, [
    [`Les heures dépassent le chiffrage de ${D.fmt('mg_h_ecart')}`, `${k(D.val('mg_h_reel'))} h passées pour ${k(D.val('mg_h_chiffre'))} h chiffrées : poses de nuit et réserves absentes des cahiers des charges.`],
    ['Le prix sort de la mise en concurrence', `Pour emporter les lots, les offres passent en moyenne ${D.fmt('mg_rabais')} sous le devis privé équivalent.`],
    ['Les abandonner viderait l\'hiver', 'Ces chantiers occupent l\'atelier en janvier et février, quand le privé commande peu : l\'arrêt complet est écarté.'],
    [`Un seuil de réponse à ${D.fmt('mg_seuil')}`, `Heures de nuit chiffrées à part. Chaque point de marge vaut ${D.fmt('mg_point')} : au seuil, ${D.fmt('mg_gain')} de plus sur dix mois.`],
  ]);
  L.bandeau(ctx, s, { y: 6.12, h: 0.55, label: 'Recommandation', text: `seuil de ${D.fmt('mg_seuil')} de marge prévue dès l'appel d'offres du 08/12 ; le conducteur de travaux chiffre les heures de nuit à part.` });
}

// Slide 6 : dossier bancaire (petits multiples, frontière réel et prévision)
if (garde(6)) {
  const s = ctx.slide({
    kicker: 'Financement | Atelier Gardelle, dossier bancaire',
    title: `**Ligne de finition, ${D.fmt('fi_invest')} :** en crédit-bail sur cinq ans, les annuités restent couvertes au-dessus du seuil bancaire, même si le CA stagne`,
    note: 'exemple, chiffres fictifs. P : plan de la direction, hors reprise de Vasseur. (E) : estimation de l\'auteur. Couverture : CAF sur annuités d\'emprunt et de crédit-bail.',
    source: src(6),
  });
  const an = ['23', '24', '25', '26', '27', '28'];
  const sr = (p) => D.serie(an.map((a) => p + a));
  L.smallMultiples(ctx, s, { years: an.map((a) => '20' + a), split: 3, y0: G.y.top - 0.02, y1: 5.98, heads: ['Réalisé', 'Prévision de la direction (P)', 'Lecture'], rows: [
    { label: 'Chiffre d\'affaires, k€', values: sr('fi_ca'), max: 4400,
      comment: `**Recul de ${D.fmt('fi_recul')} en 2026** : deux chantiers hôteliers glissent en 2027, déjà commandés. La prévision 2027 ne suppose aucun nouveau client.` },
    { label: 'EBE, k€', values: sr('fi_ebe'), max: 560,
      comment: `**+${D.fmt('fi_delta')} en 2027**, dont ${D.fmt('fi_clause')} de clause bois. Sans la clause, ${D.fmt('fi_sans')} : le plan tient encore.` },
    { label: 'Dette nette sur EBE, fois', values: sr('fi_lev'), max: 2.6, fmt: '0.0',
      comment: `**Pic à ${D.nombre('fi_lev27')} fois en 2027**, crédit-bail compris, sous le plafond de ${D.nombre('fi_plafond')} fois des banques ; ${D.nombre('fi_lev28')} fois dès 2028.` },
    { label: 'Couverture des annuités, fois', values: sr('fi_cov'), max: 3.6, fmt: '0.0',
      comment: `**${D.nombre('fi_cov27')} fois au plus bas.** CA stable : ${D.fmt('fi_stagne')}, au-dessus du seuil de ${D.nombre('fi_seuil')}. Un prêt sur 7 ans donnerait ${D.fmt('fi_pret')}, mais avec caution personnelle : écarté.` },
  ] });
  L.bandeau(ctx, s, { y: 6.12, h: 0.55, label: 'Recommandation', text: `déposer le 29/01 le dossier de crédit-bail de ${D.fmt('fi_invest')} auprès des deux banques de l'atelier, avec le scénario de CA stable en annexe.` });
}

// Slide 7 : structuration de la fonction finance (rangée unité : pourquoi chaque levier ?)
if (garde(7)) {
  const s = ctx.slide({
    kicker: 'Structuration de la fonction finance | Atelier Gardelle',
    title: `**Clôture mensuelle :** passer de J+${D.nombre('cl_avant')} à J+${D.nombre('cl_cible')} d'ici mars demande quatre chantiers à ${D.fmt('cl_cout')} par an, ni embauche ni nouveau logiciel comptable`,
    note: 'exemple, chiffres fictifs. Délais mesurés sur la clôture d\'octobre 2026 ; gains par chantier estimés sur les temps relevés. (E) : estimation de l\'auteur.',
    source: src(7),
  });
  const yH = G.y.top, xC = G.ml + 2.0 + 0.15 + 4.3 + 0.35;
  entete(s, G.ml, xC - G.ml - 0.35, 'Délai de clôture, en jours après la fin du mois : octobre 2026, puis cible de mars 2027');
  entete(s, xC, G.ml + G.cwid - xC, 'Lecture');
  const v = (id) => D.val(id);
  L.rangeeUnite(ctx, s, { y0: yH + 0.45, y1: 5.72, coteText: `${D.nombre('cl_gain')} jours gagnés`, rows: [
    { label: 'Aujourd\'hui', kind: 'total', v: v('cl_avant'), comment: `Tableau d'octobre le 25/11 : trop tard pour les devis de décembre. Un comptable à mi-temps (${D.fmt('cl_comptable')} par an) n'y changerait rien.` },
    { label: 'Factures lues par OCR', v: v('cl_ocr'), comment: `${k(v('cl_factures'))} factures par an saisies à la main par l'assistante ; outil à ${D.nombre('cl_ocr_mois')} € par mois, en place en deux semaines.` },
    { label: 'Rapprochement bancaire automatique', v: v('cl_banque'), comment: 'Flux bancaires reliés au logiciel comptable actuel : l\'option est déjà comprise dans l\'abonnement.' },
    { label: 'Heures de chantier sur téléphone', v: v('cl_heures'), comment: `Les feuilles papier arrivent le 5 du mois suivant ; appli à ${D.nombre('cl_heures_mois')} € par mois. Sans elle, la cible s'arrête à J+${D.nombre('cl_sans')}.` },
    { label: 'Calendrier de clôture', v: v('cl_cal'), comment: `Qui envoie quoi, à quelle date ; revue de ${D.nombre('cl_revue')} minutes avec le dirigeant le 8 du mois.` },
    { label: 'Cible', kind: 'total', v: v('cl_cible'), color: T.accent, comment: 'Tableau de bord le 8 du mois suivant, dès la clôture de février.' },
  ] });
  L.bandeau(ctx, s, { y: 6.12, h: 0.55, label: 'Recommandation', text: `OCR et rapprochement en décembre (assistante), heures sur téléphone le 01/02 (chefs d'équipe), première clôture à J+${D.nombre('cl_cible')} le 08/03.` });
}

// Slide 8 : opération exceptionnelle (fourchette de valeur, référence mise entre parenthèses)
if (garde(8)) {
  const s = ctx.slide({
    kicker: 'Opération exceptionnelle | Reprise de la Menuiserie Vasseur',
    title: `**Reprise de Vasseur :** offrir ${D.fmt('va_offre')} dont ${D.fmt('va_compl')} liés à l'EBE 2027 ; les ${D.fmt('va_demande')} demandés valent ${D.nombre('va_x_dem')} fois l'EBE, hors de toutes les fourchettes`,
    note: `exemple, chiffres fictifs. Valeur des titres : valeur d'entreprise moins la dette nette de Vasseur (${D.fmt('va_dette')}). (E) : estimation de l'auteur.`,
    source: src(8),
  });
  const MIN = 300, MAX = 800;
  const rows = [
    { method: 'Multiple d\'EBE', sub: `${D.nombre('va_m_lo')} à ${D.nombre('va_m_hi')} fois l'EBE retraité de ${D.fmt('va_ebe')}`, lo: D.val('va_eb_lo'), hi: D.val('va_eb_hi'),
      comment: `**Fourchette centrale.** EBE retraité du salaire du cédant (+${D.fmt('va_retr')}). L'offre vaut ${D.nombre('va_x_off')} fois l'EBE.` },
    { method: 'Flux futurs actualisés', sub: `cinq ans, taux de ${D.nombre('va_t_lo')} à ${D.fmt('va_t_hi')}`, lo: D.val('va_df_lo'), hi: D.val('va_df_hi'),
      comment: `**Tient à deux clients hôteliers** (${D.fmt('va_clients')} du CA de Vasseur) : sans eux, ${D.fmt('va_sans')}. D'où le complément de prix.` },
    { method: 'Cessions comparables', sub: `${D.nombre('va_c_lo')} à ${D.nombre('va_c_hi')} fois le CA de ${D.fmt('va_ca')}`, lo: D.val('va_co_lo'), hi: D.val('va_co_hi'),
      comment: `${D.nombre('va_ops')} cessions de menuiseries de moins de ${D.nombre('va_taille')} salariés depuis 2023 ; la plus basse des fourchettes.` },
    { method: 'Actif net réévalué', sub: 'machines et stock', lo: D.val('va_an_lo'), hi: D.val('va_an_hi'), ref: true,
      comment: '**Plancher**, si l\'activité ne suivait pas après la reprise.' },
  ];
  const y1 = 5.5;
  const r = L.footballField(ctx, s, { rows, min: MIN, max: MAX, x0: G.ml, y0: G.y.top, y1, heads: ['Méthode', 'Valeur des titres, en k€', 'Lecture'], fmt: k,
    offer: { v: D.val('va_offre'), label: `Offre : ${D.fmt('va_offre')}` } });
  const xD = L.xVal(r.P, D.val('va_demande') - MIN, 0, MAX - MIN);
  L.line(ctx, s, xD, r.top - 0.05, xD, y1 + 0.02, { color: T.neg, w: 1.5, dash: 'sysDash' });
  L.txt(ctx, s, `Demandé : ${D.fmt('va_demande')}`, { x: xD - 1.2, y: y1 + 0.04, w: 2.4, h: 0.2, fontSize: S.data, fontFace: Fn.semi, color: T.neg, align: 'center' });
  L.bandeau(ctx, s, { y: 6.12, h: 0.55, label: 'Recommandation', text: `lettre d'intention à ${D.fmt('va_offre')} avant le 15/01 (${D.fmt('va_comptant')} comptant, ${D.fmt('va_compl')} si l'EBE 2027 dépasse ${D.fmt('va_ebe')}), audit social et clients en février.` });
}

// Slide 9 : proposition d'intervention (tableau-graphique, option retenue encadrée)
if (garde(9)) {
  const s = ctx.slide({
    kicker: 'Proposition d\'intervention | Premier semestre 2027',
    title: `**Proposition :** deux jours par mois de janvier à juin, ${D.fmt('pr_h2')} HT, pour le dossier bancaire, la reprise de Vasseur et la clôture à J+${D.nombre('pr_cible')}`,
    note: 'exemple, chiffres fictifs. Honoraires hors taxes, frais de déplacement inclus. (E) : estimation de l\'auteur.',
    source: src(9),
  });
  const xL = G.ml, colW = [1.6, 1.3, 2.0, 1.65], wL = colW.reduce((a, b) => a + b, 0), y0 = G.y.top + 0.43;
  entete(s, xL, wL, 'Trois formules sur six mois, de janvier à juin 2027');
  const rowsT = [
    ['', 'Ponctuel', 'Deux jours par mois', 'Quatre jours par mois'],
    ['Jours sur six mois', D.nombre('pr_j1'), D.nombre('pr_j2'), D.nombre('pr_j3')],
    ['Honoraires HT', D.fmt('pr_h1'), D.fmt('pr_h2'), D.fmt('pr_h3')],
    ['Tableau de bord', 'non', 'chaque mois, le 8', 'chaque mois, le 8'],
    ['Dossier bancaire', 'rédigé', 'rédigé et présenté', 'rédigé et présenté'],
    ['Reprise de Vasseur', 'avis sur le prix', 'offre et négociation', 'jusqu\'à l\'intégration'],
    [`Clôture à J+${D.nombre('pr_cible')}`, 'non', 'pilotée', 'réalisée par Ciceria'],
  ];
  const rh = [0.5, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45];
  const body = rowsT.map((row, i) => row.map((c, j) => ({ text: c, options: {
    fontFace: i === 0 || j === 0 ? Fn.semi : Fn.body, color: i === 0 ? (j === 2 ? T.accent2 : T.n2) : j === 0 ? T.ink : j === 2 ? T.ink : T.n1,
    fontSize: i === 0 ? S.axis + 1 : S.data, align: j === 0 ? 'left' : 'center' } })));
  s.addTable(body, { x: xL, y: y0, w: wL, colW, rowH: rh, fontFace: Fn.body, valign: 'middle', margin: [2, 6, 2, 6],
    border: [{ type: 'none' }, { type: 'none' }, { type: 'solid', pt: 0.5, color: T.n5 }, { type: 'none' }] });
  const yRow = (i) => y0 + rh.slice(0, i).reduce((a, b) => a + b, 0), xCol = (j) => xL + colW.slice(0, j).reduce((a, b) => a + b, 0);
  const yEnd = yRow(rh.length);
  L.rect(ctx, s, xCol(2) + 0.02, y0 - 0.02, colW[2] - 0.04, yEnd - y0 + 0.06, { line: T.accent, dash: 'dash', lw: 1.25 });
  const mid = (i) => yRow(i) + rh[i] / 2;
  L.pastille(ctx, s, { cx: xCol(1) - 0.2, cy: mid(4), n: 1, fill: T.n1 });
  L.pastille(ctx, s, { cx: xCol(4) - 0.18, cy: y0 + 0.01, n: 2, fill: T.n1 });
  L.pastille(ctx, s, { cx: xCol(3) - 0.2, cy: mid(5), n: 3, fill: T.n1 });
  L.pastille(ctx, s, { cx: xCol(3) - 0.2, cy: mid(2), n: 4, fill: T.n1 });
  const xR = xL + wL + 0.35, wR = G.ml + G.cwid - xR;
  lecture(s, xR, wR, [
    ['Trois échéances font le calendrier', `Lettre d'intention pour Vasseur avant le 15/01, dossier bancaire le 29/01, première clôture à J+${D.nombre('pr_cible')} le 08/03.`],
    ['Les deux autres formules sont écartées', `Ponctuel : la clôture reste à J+${D.nombre('pr_avant')}. Quatre jours : ${D.fmt('pr_h3')} pour des tâches que l'équipe tiendra seule dès avril.`],
    ['Si l\'offre sur Vasseur est acceptée', `Audit et négociation demandent ${D.nombre('pr_sup_j')} jours de plus en février : ${D.fmt('pr_sup')}, soit ${D.fmt('pr_total')} HT au total.`],
    ['La clause bois paie déjà la mission', `Les ${D.fmt('pr_clause')} d'EBE qu'elle protège en 2027 valent ${D.fmt('pr_ratio')} les honoraires de la formule retenue.`],
  ]);
  L.bandeau(ctx, s, { y: 6.12, h: 0.55, label: 'Recommandation', text: `signer la lettre de mission (${D.fmt('pr_h2')} HT, ${D.fmt('pr_tjm')} par jour) avant le 18/12 ; démarrage le 05/01, dossier bancaire le 29/01.` });
}

// Slide 10 : synthèse pour le dirigeant (tableau de décisions, panneau de conclusion)
if (garde(10)) {
  const s = ctx.slide({
    kicker: 'Synthèse pour le dirigeant | Novembre 2026',
    title: `**Synthèse :** cinq décisions d'ici la mi-janvier ; une seule ne peut pas attendre, tirer ${D.fmt('sy_ligne')} de ligne court terme avant Noël`,
    note: 'exemple, chiffres fictifs. Détail et sources aux slides 3 à 9. P : plan de la direction. (E) : estimation de l\'auteur.',
    source: src(10),
  });
  const xP = G.col(8).x + 0.1, xL = G.ml, wL = xP - xL - 0.35, y0 = G.y.top;
  entete(s, xL, wL, 'Décisions, effet attendu, échéance et responsable');
  const dec = [
    ['Tirer la ligne court terme', `${D.fmt('sy_ligne')} du 18/12 au 18/01, ${D.fmt('sy_interets')} d'intérêts`, '18/12', 'Dirigeant'],
    ['Indexer les devis sur le prix du chêne', `${D.fmt('sy_clause')} d'EBE protégés en 2027`, '01/12', 'Responsable commercial'],
    [`Seuil de ${D.fmt('sy_seuil')} pour les marchés publics`, `${D.fmt('sy_gain')} de marge sur dix mois`, '08/12', 'Conducteur de travaux'],
    ['Crédit-bail de la ligne de finition', `${D.fmt('sy_invest')} sur cinq ans, annuités couvertes ${D.fmt('sy_cov')}`, '29/01', 'Dirigeant, Ciceria'],
    ['Offre sur la Menuiserie Vasseur', `${D.fmt('sy_offre')}, dont ${D.fmt('sy_compl')} de complément de prix`, '15/01', 'Dirigeant, avocat'],
  ];
  const colW = [0.4, 2.35, 2.75, 0.65], wT = colW.reduce((a, b) => a + b, 0) + (wL - colW.reduce((a, b) => a + b, 0));
  colW.push(wL - colW.reduce((a, b) => a + b, 0));
  const head = ['', 'Décision', 'Effet attendu', 'Quand', 'Qui'].map((t) => ({ text: t, options: { fontFace: Fn.semi, color: T.n2, fontSize: S.axis + 1 } }));
  const body = [head].concat(dec.map((d, i) => [{ text: String(i + 1), options: { fontFace: Fn.semi, color: i === 0 ? T.accent2 : T.ink, align: 'center' } },
    { text: d[0], options: { fontFace: Fn.semi, color: T.ink } }, { text: d[1], options: { color: T.n1 } }, { text: d[2], options: { color: T.ink, fontFace: Fn.semi } }, { text: d[3], options: { color: T.n1 } }]));
  L.rect(ctx, s, xL, y0 + 0.43 + 0.35, wL, 0.62, { fill: T.accentLight });
  s.addTable(body, { x: xL, y: y0 + 0.43, w: wT, colW, rowH: [0.35, 0.62, 0.62, 0.62, 0.62, 0.62], fontFace: Fn.body, fontSize: S.data, valign: 'middle', margin: [2, 5, 2, 5],
    border: [{ type: 'none' }, { type: 'none' }, { type: 'solid', pt: 0.5, color: T.n5 }, { type: 'none' }] });
  // panneau : ce qui ferait changer l'ordre
  const wP = G.ml + G.cwid - xP, yP = y0, hP = 6.0 - yP;
  L.rect(ctx, s, xP, yP, wP, hP, { fill: T.panel });
  L.txt(ctx, s, 'Ce qui ferait changer l\'ordre', { x: xP + 0.3, y: yP + 0.18, w: wP - 0.6, h: 0.25, fontSize: S.body, fontFace: Fn.semi, color: T.panelAccent });
  const bl = [
    [`${D.nombre('sy_retard')} jours`, `Si Brenac paie à ${D.nombre('sy_retard')} jours, le point bas tombe à ${D.fmt('sy_bas')} : la ligne suffit encore.`],
    [`${D.nombre('sy_x_dem')} fois l'EBE`, 'Le prix demandé pour Vasseur : il ferait passer la reprise avant la ligne de finition. Écarté.'],
    [`${D.nombre('sy_stagne')} fois (E)`, 'Couverture des annuités si le CA 2027 stagne : le crédit-bail reste finançable.'],
  ];
  const pitch = (hP - 0.75) / bl.length;
  bl.forEach(([big, t], i) => {
    const by = yP + 0.62 + i * pitch;
    L.txt(ctx, s, big, { x: xP + 0.3, y: by, w: wP - 0.6, h: 0.45, fontSize: 28, fontFace: Fn.hero, color: T.panelAccent, valign: 'middle' });
    L.txt(ctx, s, t, { x: xP + 0.3, y: by + 0.5, w: wP - 0.6, h: pitch - 0.6, fontSize: S.body, color: T.panelText, lineSpacingMultiple: 1.05 });
  });
  L.bandeau(ctx, s, { y: 6.12, h: 0.55, label: 'Recommandation', text: `valider les cinq décisions au comité du 27/11 et demander à la banque le tirage de ${D.fmt('sy_ligne')} dès le 01/12.` });
}

// Slide 11 : les trois chartes (même slide 6, rendue dans chaque thème par --seule 6 --theme ..., puis exportée en PNG)
if (!SEULE) {
  const s = ctx.slide({ kicker: 'slide-maker | Trois chartes', title: '**Trois chartes au choix :** la même slide en registre éditorial (par défaut), en panneau contrasté ou en lavande',
    note: 'aperçus de la slide 6, rendus avec les polices de repli. Chaque charte décline les couleurs et les polices du site de Ciceria en rampes tonales, palette de données et rôles, contrastes mesurés.',
    source: 'slide-maker, references/chartes et references/themes.md' });
  const n = 3, gap = 0.3, w = (G.cwid - gap * (n - 1)) / n, h = w * 9 / 16, y = G.y.top + 0.45;
  [['Éditoriale', 'ciceria', 'charte-ciceria.png', "Par défaut. Papier beige, encres sourdes, l'indigo seul accent : comités, dossiers lus à l'écran."],
   ['Contrastée', 'ciceria-contraste', 'charte-ciceria-contraste.png', 'Panneau brun presque noir sur fond clair : deck projeté, synthèse, temps forts.'],
   ['Lavande', 'ciceria-lavande', 'charte-ciceria-lavande.png', 'Surfaces lavande, titres indigo : proposition commerciale, présentation du cabinet.']]
    .forEach(([nom, cle, img, usage], k) => {
      const x = G.ml + k * (w + gap);
      entete(s, x, w, nom);
      s.addImage({ path: path.join(EX, img), x, y, w, h, altText: 'Charte ' + nom });
      L.rect(ctx, s, x, y, w, h, { line: k ? T.n4 : T.accent, lw: k ? 0.75 : 1.25 });
      L.txt(ctx, s, [{ text: `theme: '${cle}'`, options: { fontFace: Fn.semi, color: T.accent2, breakLine: true } }, { text: usage, options: { color: T.n1 } }],
        { x, y: y + h + 0.15, w, h: 0.9, fontSize: S.body, paraSpaceAfter: 2 });
    });
  L.bandeau(ctx, s, { y: 6.12, h: 0.55, label: 'En pratique', text: 'demander « en charte contrastée » ou « en lavande » ; sans précision, Claude prend la charte éditoriale.' });
}

ctx.save(SORTIE).then(() => console.log('Écrit ' + SORTIE));
