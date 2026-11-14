'use strict';
// Deck d'exemple (3 slides) : ce que change slide-maker, avant/après, puis une slide d'analyse dense.
// Lancer depuis ce dossier : node demo-ciceria.js ../../exemple/demo-ciceria.pptx
const path = require('path');
const L = require('./lib.js');
const D = require('./deck-data.js').charger(path.join(__dirname, 'demo-ciceria.data.json'));
const EX = path.join(__dirname, '..', '..', 'exemple');

const ctx = L.deck({ theme: 'ciceria' });
const { T, G, S, Fn } = ctx;
const entete = (s, x, w, texte) => {
  L.txt(ctx, s, texte, { x, y: G.y.top - 0.02, w, h: 0.24, fontSize: S.body, fontFace: Fn.semi, color: T.ink });
  L.line(ctx, s, x, G.y.top + 0.28, x + w, G.y.top + 0.28, { color: T.n5, w: 0.75 });
};

// Slide 1 : ce que change slide-maker
{
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
{
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
{
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

ctx.save(process.argv[2] || path.join(EX, 'demo-ciceria.pptx')).then(() => console.log('Écrit'));
