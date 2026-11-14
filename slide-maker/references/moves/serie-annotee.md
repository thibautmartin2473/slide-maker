---
move: serie-annotee
question: « que s'est-il passé, et quand ? »
solidite: très solide (événements : Centerview p20, Perella p3, GS p5, JPM ID p12 ; périodes : Bain PE p4, Bain Lux p9/p31/p34)
lib: serieAnnotee (+ ligneReference)
---

# Série annotée (événements lettrés, ères)

## Question servie
« Qu'est-ce qui a fait bouger la courbe ? » (cours de bourse, inflation, ventes).

## Pourquoi ça paraît évident
Chaque inflexion porte une lettre ; chaque lettre a sa phrase à droite, dans le
même ordre. L'œil fait l'aller-retour sans légende. Seul le % de réaction est coloré.

## Anatomie (variante événements)
- Graphique 60 % (7/12), colonne narrative 40 % à droite, en-têtes des deux
  panneaux sur une même ligne de base (bandeau pâle `n6`).
- Courbe `ink` 1,75 pt, axe Y 4-6 graduations `n2`, pas de grille ; mois en
  catégories (libellé 1 semaine sur 4, les autres vides).
- Losange accent sur le point exact ; pointillé vertical vers un cercle-lettre
  Ø 0,24 in (fond `accentLight`, liseré accent) **au-dessus** si réaction +,
  **au-dessous** si −.
- Colonne : une ligne par lettre à pas constant, cercle, date semi-gras, fait,
  réaction colorée `pos`/`neg`.
- Ligne de référence (cours non affecté) + dernière valeur en bout de courbe.

## Anatomie (variante ères, Bain PE p4)
Pointillés verticaux aux ruptures, **segment horizontal = moyenne de l'ère**
avec son libellé au-dessus, frise d'ères colorée au-dessus du graphique ; barres
de Gantt posées sur la série pour une durée (ancienneté).

## Layering
graphique → pointillés → losanges → cercles → lettres → ligne de référence → étiquettes.

## Recette pptxgenjs
```js
const r = L.serieAnnotee(ctx, s, { box, labels, values, min: 24, max: 46, majorUnit: 4, events,
  col: { x: G.col(8).x - 0.1, w: 4.3, y0: 2.45, y1: 6.6 } });
L.ligneReference(ctx, s, { P: r.P, v: 33.2, min: 24, max: 46, label: 'Cours non affecté\n(01/08) : 33,20 €', color: T.n1 });
```
Position x d'un point de courbe : `xAt(P, n, i)` (catégories « entre » les graduations).

## Variantes
- Callouts rectangulaires gris à liseré pointillé reliés au point (Perella p3).
- Mini-tableau « Prix / VWAP » posé **dans** le vide de la zone de tracé (Centerview p20).

## Vu chez
- Centerview p20
- Perella p3
- Bain PE p4

## Paysage / portrait
Portrait : graphique pleine largeur, colonne narrative dessous en 2 colonnes.
