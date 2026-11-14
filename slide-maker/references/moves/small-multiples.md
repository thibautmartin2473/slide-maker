---
move: small-multiples
question: « toutes les métriques / tous les cas racontent-ils la même histoire ? »
solidite: très solide (Conseil 5 : OW p70, BCG SIA p13, Bain Lux p31/p35, McK NYC p56 ; M&A 5 : Lazard p8, Perella p4, MS p9, Rothschild p26/p27, Evercore p28)
lib: smallMultiples
---

# Small multiples à gabarit identique

## Question servie
Comparer N métriques sur une même chronologie, ou N cas sur une même mesure,
d'un seul regard.

## Pourquoi ça paraît évident
La répétition fait le travail : même taille, même pas, même échelle par rangée,
en-têtes sur une même ligne de base. L'œil compare des formes, pas des nombres.

## Anatomie (version « axe X partagé », Lazard p8)
- 3 zones : étiquettes de rangée en **blocs pleins** (`panel`, texte blanc) |
  graphiques (≈ 52 %) | commentaire (≈ 27 %).
- Années écrites **une seule fois**, en tête ; bandeaux de période au-dessus
  (« Réalisé » couleur `actual`, « Plan » couleur `plan`) = légende.
- Rangées de hauteur égale, filets pleine largeur ; ratios en italique au pas
  au-dessus de chaque graphique ; commentaire aligné sur le haut de sa rangée,
  une idée par rangée, mot-clé en semi-gras.
- Frontière réel/plan : pointillé vertical traversant toutes les rangées, au
  premier plan (move `frontiere-reel-projection`).

## Layering
bandeaux → filets → blocs de rangée → ratios → graphiques → commentaires → frontière.

## Recette pptxgenjs
N `addChart` identiques (même x, w, gap, `layout`), `catAxisHidden`, une couleur
par point (réel / plan).
```js
L.smallMultiples(ctx, s, { years, split: 5, heads: ['Réalisé', 'Plan de la direction', 'Lecture'],
  rows: [{ label: 'Chiffre d\'affaires, M€', values, max: 3000, ratios, comment: '**+10 % par an** prévus…' }, …] });
```

## Variantes
- **En colonnes** : N mini-graphiques côte à côte séparés par des filets
  verticaux, picto + titre + sous-titre alignés sur une ligne de base (OW p70).
- **Distributions** : une cascade de micro-barres par période + courbe de
  synthèse qui les traverse (Bain Lux p31).
- **Mini-jauges répétées** par maillon d'une chaîne de valeur (BCG SIA p13).
- **Fiche-gabarit** répétée page à page (Bain SEA p94-106, LVMH p62-148).

## Vu chez
- Lazard p8
- OW AVISTRAT p70
- Bain Lux p31
- BCG SIA p13
- Rothschild p27

## Paysage / portrait
Portrait : les rangées gagnent (4-5 métriques) ; commentaire sous la rangée ou
dans une colonne étroite (30 %).
