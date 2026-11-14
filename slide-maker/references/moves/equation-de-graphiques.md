---
move: equation-de-graphiques
question: « qu'est-ce qui explique le résultat ? »
solidite: solide (Danone p21, AXA p11/p32)
lib: bars (mini-graphiques) + rect/txt ; panneau en chevron = addShape(homePlate/chevron, flipH)
---

# Équation de graphiques

## Question servie
« Le modèle a-t-il marché ? », trois preuves qui, additionnées, donnent le résultat.

## Pourquoi ça paraît évident
La syntaxe est mathématique : graphique A **+** graphique B **+** graphique C
**→** résultat. On lit la démonstration dans l'ordre, sans consigne.

## Anatomie
- Carte blanche (≈ 63 % × 48 %) découpée en 3 colonnes égales ; « + » 28 pt
  `panel` dans les gouttières.
- 3 mini-graphiques **sans axe ni valeurs** : seulement le signe (négatif `neg`
  sous zéro, positif `pos` au-dessus) → on lit la trajectoire, pas les chiffres ;
  titre du mini-graphique 13 pt accent, mesure 9 pt `n2`.
- **Panneau-flèche** sombre à droite (≈ 35 %), bord gauche en pointe, qui
  **démarre sous la carte** (chevauchement 7 %) : 2 chiffres-héros blancs/accent.

## Layering
fond pâle → panneau-flèche (créé AVANT la carte) → carte blanche → mini-graphiques → « + » → textes du panneau.

## Recette pptxgenjs
```js
s.addShape(ctx.SH.homePlate, { x: 7.9, y: 2.3, w: 4.85, h: 3.7, flipH: true, fill: { color: T.panel } });
L.rect(ctx, s, G.ml, 2.5, 7.9, 3.3, { fill: 'FFFFFF', line: T.n5 });
[0, 1, 2].forEach((k) => L.bars(ctx, s, { box: { x: G.ml + 0.2 + k * 2.6, y: 3.2, w: 2.2, h: 2.2 }, labels, values: v[k],
  colors: v[k].map((x) => (x < 0 ? T.neg : T.pos)), min: -3, max: 3, showValue: false, extra: { invertIfNegative: false } }));
```
(`homePlate` = pentagone-flèche ; avec `flipH` la pointe est à gauche.)

## Vu chez
- Danone IR 2024 p21
- AXA p11/p32 (bloc + bloc, planche-contact).

## Paysage / portrait
Portrait : l'équation se lit de haut en bas (A / + / B / + / C / ↓ résultat en
bandeau sombre).
