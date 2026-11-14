---
move: double-mesure
question: « prix ET temps » (deux mesures d'un même objet) sans double axe
solidite: solide (OW AVISTRAT p70, Bain Lux p31, TotalEnergies p15)
lib: bars + addChart LINE superposé, étiquettes par point
---

# Double mesure sans double axe

## Question servie
Comparer des options sur deux mesures à la fois (prix et durée, volume et marge)
sans imposer au lecteur deux échelles.

## Pourquoi ça paraît évident
Chaque point de la courbe porte **sa** valeur : on n'a besoin d'aucun axe. Les
barres (mesure 1) et la courbe lissée d'une 2ᵉ couleur (mesure 2) se lisent
ensemble, et la conclusion (bas **et** rapide) saute aux yeux.

## Anatomie
- Barres couleur data 1 (accent ou `ink`), valeur au-dessus.
- Courbe lissée couleur data 2 (`accent2` ou cyan de P2), 2 pt, étiquette de
  chaque point (au-dessus de la courbe, ou en blanc dans la barre).
- **Aucun** axe Y, aucune légende : le titre du mini-graphique ou le sous-titre
  nomme les deux mesures dans leurs couleurs (move `legende-dans-le-texte`).
- Souvent en small multiples (4 cas d'usage, OW p70).

## Layering
barres → courbe (même cadre) → étiquettes courbe → étiquettes barres.

## Recette pptxgenjs
```js
const P = L.bars(ctx, s, { box, labels, values: prix, colors: prix.map(() => T.ink), max: maxPrix, layout });
s.addChart(ctx.CH.line, [{ name: 'Durée', labels, values: duree }], L.baseChart(ctx, { ...box, layout,
  valAxisMinVal: 0, valAxisMaxVal: maxDuree, catAxisHidden: true, chartColors: [T.accent2], lineSize: 2, lineSmooth: true,
  lineDataSymbol: 'none', showValue: true, dataLabelPosition: 't', dataLabelColor: T.accent2 }));
```

## Vu chez
- OW AVISTRAT p70
- Bain Lux p31
- TotalEnergies p15

## Paysage / portrait
Identique ; en portrait, 2 × 2 small multiples.
