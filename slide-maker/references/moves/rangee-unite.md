---
move: rangee-unite
question: « pourquoi chaque levier ? »
solidite: solide (McK Chili p33, Bain Lux p34, GS p7, Lazard p8)
lib: rangeeUnite
---

# La rangée est l'unité

## Question servie
« De quoi est fait l'écart, et qu'est-ce qui explique chaque morceau ? »,
cascade + explication, sans aller-retour.

## Pourquoi ça paraît évident
La cascade est **horizontale** : elle se lit de haut en bas comme une liste.
Chaque levier a sa phrase **sur la même ligne**, à droite. Les filets traversent
les trois colonnes : l'œil suit la rangée, pas la colonne.

## Anatomie
- 3 colonnes : libellé (≈ 16 %) | barres (≈ 33 %) | commentaire (≈ 45 %).
- Rangées de hauteur égale ; filets 0,5 pt `n5` **pleine largeur** entre rangées.
- Totaux en `ink` semi-gras ; leviers : le plus gros en accent, les autres en gris
  décroissants (gris + un accent) ; même un levier nul garde sa rangée (rythme).
- Valeur en bout de barre (10 pt) ; premier mot du commentaire en couleur de la
  barre (move `legende-dans-le-texte`).
- Cote horizontale sous la dernière rangée (« −28 % », move `mesure-dessinee`).

## Layering
filets → graphique natif (barres) → libellés et valeurs → commentaires → cote.

## Recette pptxgenjs
Graphique **natif** en barres horizontales empilées : série « base » invisible
(`bg`) + **une série par rangée** (valeur sur sa rangée, 0 ailleurs), chacune sa
couleur ; `L.revBar` pour l'ordre ; valeurs posées à la main (sinon les zéros et
la base s'étiquettent).
```js
L.rangeeUnite(ctx, s, { y0: 2.0, y1: 6.25, coteText: '−28 %', rows: [
  { label: '2025', v: 3420, kind: 'total' },
  { label: 'Compresseur', v: -380, color: T.accent, comment: L.leadRuns(ctx, 'Compresseur :', '…', T.accent) }, …,
  { label: '2028', v: 2460, kind: 'total' }] });
```

## Variantes
- **Football field** : même principe (méthode | barre | commentaire par rangée),
  voir `mise-entre-parentheses`.
- Small multiples à commentaire par rangée (Lazard p8) → `small-multiples`.

## Vu chez
- McKinsey Chili p33
- Goldman Sachs p7
- Bain Lux p34 (planche-contact).

## Paysage / portrait
Portrait : idéal (la cascade horizontale gagne de la hauteur) ; commentaire sous
le libellé si la largeur manque (rangée sur 2 lignes).
