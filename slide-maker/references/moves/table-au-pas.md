---
move: table-au-pas
question: « qui / combien / quand, pour chaque barre ? »
solidite: très solide (M&A 6 documents : MS, JPM, GS, Evercore, Perella, Rothschild ; Bain Lux p23)
lib: tableAuPas
---

# Table au pas des barres

## Question servie
Donner le détail de chaque barre (cible, acquéreur, date, nb de deals) sans
légende ni renvoi.

## Pourquoi ça paraît évident
Chaque barre est **au-dessus de sa colonne** : on descend verticalement, c'est
tout. C'est la « précision invisible » la plus constante des board books.

## Anatomie
- `colW = plotW / n` exactement, x = plotX : la table hérite du pas du graphique.
- 3-4 rangées de 0,2-0,26 in, 8 pt ; 1ʳᵉ rangée en semi-gras `ink` (le nom), les
  autres `n1` ; filets horizontaux 0,5 pt `n5`.
- Libellés de rangée **à gauche de la zone de tracé**, alignés à droite,
  semi-gras `n2` (« Cible », « Acquéreur », « VE, M€ », « Date »).
- Le graphique n'a pas d'étiquettes de catégorie (la table les porte).

## Layering
(bande focus éventuelle) → graphique → table → étiquettes de rangée.

## Recette pptxgenjs
```js
const P = L.bars(ctx, s, { box, labels: deals.map(() => ''), values, colors, max, fmt: '0.0"x"', layout });
L.tableAuPas(ctx, s, { P, n, y: P.y + P.h + 0.1, rowH: 0.26, labelW: 1.0, rows: [
  { label: 'Cible', cells: names, bold: true, color: T.ink }, { label: 'Date', cells: dates }] });
```
Piège : `margin` de cellule < 1 = pouces ; la lib passe `margin: 1` (pt).

## Variantes
- Logos à la place des noms (`addImage` centré dans chaque cellule, MS p28), pas
  de logo réel en démo.
- Rangée de ratios en italique **au-dessus** des barres (Lazard p8) → même pas.
- Deux lignes « Wholesale % / Retail % » sous l'axe (Bain Lux p23).

## Vu chez
- Morgan Stanley p28
- JPM p25
- Bain Lux p23, GS p11/p12, Evercore p28/p43, Rothschild p53.

## Paysage / portrait
Paysage : jusqu'à 16 colonnes à 8 pt. Portrait : 8 colonnes max, sinon barres
horizontales et la table devient des colonnes à droite des barres (même rangée).
