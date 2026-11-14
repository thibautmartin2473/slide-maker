---
move: pastilles-au-pas
question: « combien au total, et en % ? » sans second graphique
solidite: très solide (McK Chili p43, MS p9, PJT p11, Perella p4, Rothschild p33, Evercore p29, Rothschild p53)
lib: pastillesAuPas ; pill
---

# Pastilles au pas des colonnes

## Question servie
Le total d'une pile, un ratio (croissance, marge), un écart au consensus, au-dessus
de chaque colonne, sans deuxième graphique.

## Pourquoi ça paraît évident
Le chiffre de synthèse se lit **avant** le détail, sur la même verticale. Plein
= KPI principal ; contour = KPI secondaire : deux mesures distinguées par le seul
remplissage.

## Anatomie
- Pilules ou ellipses 0,24 × 0,5 in, centrées **exactement** sur `xAt(P, n, i)`.
- Rangée 1 pleine `ink` texte blanc ; rangée 2 contour `ink` 0,75 pt ; libellé de
  rangée à gauche, aligné à droite.
- Variante « comparaison » : pastille de la couleur `ref` (or) posée **dans** la
  barre, à la hauteur de la valeur comparée (consensus vs plan, Lazard p8).
- Rangée de ratios en italique 8 pt au pas, négatif en `neg`.

## Layering
graphique → pastilles (elles masquent ce qu'elles chevauchent) → libellé de rangée.

## Recette pptxgenjs
```js
L.pastillesAuPas(ctx, s, { P, n, y: P.y - 0.55, values: ['0,4', '3', '11'], filled: true, label: 'Total' });
L.pastillesAuPas(ctx, s, { P, n, y: P.y - 0.25, values: ['2', '15', '65'], filled: false, label: 'GW' });
L.pill(ctx, s, { cx: L.xAt(P, 9, 5), cy: L.yAt(P, 268, 0, 540), text: '268', style: 'fill', color: T.ref });
```

## Variantes
- Rangée de pastilles « nombre de brokers » au-dessus d'une série temporelle
  (Rothschild p53).
- Carré de la couleur du segment qui déborde de la barre pour étiqueter un
  segment trop fin (McK p43).

## Vu chez
- McKinsey Chili p43
- Lazard p8
- Rothschild p53

## Paysage / portrait
Identique ; en portrait, 8 colonnes max pour garder des pastilles ≥ 0,45 in.
