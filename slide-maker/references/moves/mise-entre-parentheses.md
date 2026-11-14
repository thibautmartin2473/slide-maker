---
move: mise-entre-parentheses
question: « qu'est-ce qui compte / ne compte pas dans la conclusion ? »
solidite: très solide (GS p7, MS p28, Lazard p11, Evercore p41/p43, PJT p18/p19/p33)
lib: bracket ; footballField ; zoneFocus
---

# Mise entre parenthèses (« pour référence »)

## Question servie
Montrer une information secondaire **sans** qu'elle pèse dans la conclusion :
méthodes indicatives, transactions exclues de la médiane, hypothèses anciennes.

## Pourquoi ça paraît évident
On voit tout (rien n'est caché, donc rien n'est suspect), mais la hiérarchie est
portée par la **teinte** : le retenu est plein et sombre, la référence est pâle
et regroupée par un bracket.

## Anatomie
- **Bracket vertical** : bande `n5` étroite (0,24 in) le long des rangées
  concernées, texte « Pour référence » rotaté 270°, 8 pt.
- Les blocs et barres de ces rangées passent en `n5`/`n4` (texte `n1`) ; les
  retenus en `panel`/`ink` texte blanc.
- Dans un classement : barres exclues en `n4` dans une bande pointillée pleine
  hauteur + note « médiane hors transactions pour référence ».
- Football field : 3 colonnes à en-têtes sur une même ligne de base (Méthode |
  Fourchette | Commentaire), filets pleine largeur, bornes à l'extérieur des
  barres, **ligne de l'offre créée en dernier** (move `ligne-de-reference`).

## Layering
filets → blocs méthode → barres (graphique natif) → bornes → bracket → ligne d'offre.

## Recette pptxgenjs
Football field **natif** : barres horizontales empilées, série « base »
invisible (`lo − min`), série « retenue » (`ink`), série « référence » (`n4`) ;
`L.revBar` ; zone de tracé = rangées (layout 0/0/1/1).
```js
L.footballField(ctx, s, { x0: G.ml, y0: 2.0, y1: 6.45, min: 24, max: 52,
  heads: ['Méthode', 'Fourchette de valeur par action', 'Commentaire'],
  offer: { v: 44, label: 'Offre : 44,00 €' }, rows: [{ method: 'DCF', sub: 'CMPC 8,0-9,0 %', lo: 38.5, hi: 47, comment: '…' }, { …, ref: true }] });
```

## Variantes
- Cartouche « POUR RÉFÉRENCE » encadré noir centré en tête de slide (PJT p18).
- Barres grises hachurées (Evercore p41).

## Vu chez
- Goldman Sachs p7
- Morgan Stanley p28
- PJT p18

## Paysage / portrait
Portrait : football field pleine largeur, commentaire **sous** chaque barre (la
rangée double de hauteur).
