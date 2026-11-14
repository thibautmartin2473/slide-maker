---
move: superposition-de-plans
question: « le contexte suit-il la donnée principale ? »
solidite: solide (Rothschild p53, Evercore p25, Bain PE p4, TotalEnergies p15)
lib: bars + graphique LINE superposé au même cadre (voir fondFantome pour le principe)
---

# Superposition de plans (fond pâle + premier plan)

## Question servie
Lire deux choses à la fois : un contexte (sentiment des analystes, ères,
inflation) et la donnée principale (cours, objectif).

## Pourquoi ça paraît évident
Le fond est **pâle** (pastels, gris clair) et ne concurrence jamais la courbe
sombre du premier plan. On voit la relation sans double lecture.

## Anatomie
- Arrière-plan : barres 100 % empilées pastel (vert / sable / rose très clairs)
  ou barres grises, sur l'axe gauche.
- Premier plan : courbe noire épaisse 2-2,5 pt (+ escalier accent pour
  l'objectif), axe droit ; les deux axes assumés aux deux bords.
- Rangée de pastilles au-dessus (nombre d'observations par période).

## Layering
graphique fond → graphique premier plan (même cadre, fond transparent) → pastilles.

## Recette pptxgenjs
Deux options natives :
```js
// 1) chart combiné
s.addChart([{ type: ctx.CH.bar, data: ratings, options: { barGrouping: 'percentStacked', chartColors: ['DDEBD5', 'F6EBC8', 'F3D9DE'] } },
            { type: ctx.CH.line, data: [price, target], options: { secondaryValAxis: true, secondaryCatAxis: true, chartColors: [T.ink, T.accent], lineSize: 2 } }],
  { x, y, w, h, valAxes: [{ showValAxisTitle: false }, { showValAxisTitle: false }], catAxes: [{}, { catAxisHidden: true }] });
// 2) deux addChart au même x,y,w,h et même layout, le second avec axes cachés (TotalEnergies p15)
```
La 2ᵉ option est plus robuste (chaque graphique garde ses options).

## Variantes
- Barres de Gantt posées sur une série (Bain PE p4 : anciennetés sur la courbe CPI).
- Ligne de taux sur barres + pilule posée sur l'intersection (TotalEnergies p15).

## Vu chez
- Rothschild p53
- Bain PE p4
- TotalEnergies p15

## Paysage / portrait
Identique ; en portrait, légende des pastels en pied (3 carrés).
