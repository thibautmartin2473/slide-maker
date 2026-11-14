---
move: tableau-graphique
question: « quelles variables croise-t-on, et où est le cas de base ? »
solidite: très solide (PJT p18/p19/p33, JPM p10/p17, Lazard p25, Perella p6, Rothschild p27, Danone p15, OW p65)
lib: addTable + rect/txt (axe-objet) ; zoneFocus mode 'frame'
---

# Le tableau traité comme un graphique

## Question servie
Matrice de sensibilité, heatmap de pairs, trajectoire par phase : un tableau qui
doit se lire d'un coup d'œil.

## Pourquoi ça paraît évident
Les axes deviennent des **objets pleins** (bande sombre rotatée pour l'axe
vertical, en-tête plein pour l'horizontal) ; aucune bordure interne, seulement
une alternance de fonds ; **une seule** cellule encadrée en pointillé accent.

## Anatomie (matrice de sensibilité, PJT p18)
- En-tête horizontal plein `panel` pleine largeur (« TCAM 2027-2030 ») ; rangée
  des valeurs de l'axe sur fond sable/`n6`.
- Axe vertical : bande `panel` étroite, titre rotaté 270° blanc ; colonne des
  valeurs d'axe sur `n6`.
- Valeurs 11 pt régulier centrées ; colonnes de même largeur ; aucune bordure.
- Cellule du cas de base : cadre pointillé accent 1 pt ; mini-tag à cheval sur
  la bordure ; callout à pointe qui déborde **hors** du tableau.

## Variantes
- **Heatmap** (JPM p17) : `fill` par cellule selon seuils (rouge/ambre/vert
  réservés à la performance), filet blanc 1 pt, espaces entre groupes sans titre,
  seule la ligne clé porte ses valeurs.
- **Cellule fusionnée = même objectif** (Danone p15) : `colspan` sur les périodes
  à guidance identique + bandeau de phases en dégradé au-dessus.
- **Tableau qui finit en graphique** (OW p65) : dernière ligne = marqueur dont la
  hauteur code la maturité.

## Layering
panneau pâle → table → bandes d'axe → cadre de la cellule → tag → callout.

## Recette pptxgenjs
```js
s.addTable(rows, { x, y, colW, rowH: 0.42, fontFace: Fn.body, fontSize: 11, align: 'center', valign: 'middle', margin: 2,
  border: { type: 'none' } });                         // fills par cellule : { text, options: { fill: { color } } }
L.rect(ctx, s, xAxis, yTop, 0.35, hRows, { fill: T.panel });
s.addText('Marge d\'EBITDA 2030', { x: xAxis + 0.175 - hRows / 2, y: yTop + hRows / 2 - 0.175, w: hRows, h: 0.35, rotate: 270, color: 'FFFFFF', align: 'center' });
L.zoneFocus(ctx, s, { x: cellX, y: cellY, w: colW, h: 0.42, mode: 'frame' });
```

## Vu chez
- PJT p18
- JPM p17
- Danone p15
- OW p65

## Paysage / portrait
Portrait : 5 × 5 max ; au-delà, scinder.
