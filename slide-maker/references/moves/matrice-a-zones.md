---
move: matrice-a-zones
question: « dans quelle catégorie tombe chacun ? »
solidite: solide (Roland Berger p19, Bain Tech p29)
lib: rect/line/txt + addChart(scatter) pour les points
---

# Matrice à zones nommées

## Question servie
Classer N entités (pays, BU, clients) en catégories, sans que le lecteur lise des
coordonnées.

## Pourquoi ça paraît évident
Deux diagonales découpent le nuage en zones **nommées en gros** ; on lit la zone,
pas les valeurs. Un fond en dégradé d'intensité dit « plus on monte à droite,
plus c'est grave ».

## Anatomie
- Fond de quadrant pâle → saturé vers le coin critique (dégradé = intensité).
- Frontières diagonales pleines + diagonales pointillées « à risque ».
- Noms de zones 14 pt semi-gras posés dans les zones.
- Marqueurs : pastilles rondes (drapeaux, initiales) + nom 8 pt ; aucune légende.
- Axes réduits à 2 flèches + libellés **rédigés en phrase** (« Mon pays est
  très divisé »), pas de graduations.

## Layering
fond → zones/diagonales → marqueurs → noms de zones → encadré « à surveiller ».

## Recette pptxgenjs
Points : `addChart(ctx.CH.scatter, …)` (éditable) avec axes cachés et min/max
fixés, **ou** pastilles `ellipse` positionnées par `xVal`/`yAt`. Dégradé de
fond : pptxgenjs n'en écrit pas → 3-4 bandes diagonales à `transparency`
croissante (triangles `rtTriangle`) ou image PNG dégradée en fond (décor, pas donnée).
```js
L.line(ctx, s, P.x, P.y + P.h * 0.45, P.x + P.w * 0.55, P.y + P.h, { color: T.ink, w: 1 });
L.txt(ctx, s, 'Sévèrement polarisés', { x, y, w: 2, h: 0.3, fontSize: 14, fontFace: Fn.semi });
```

## Variantes
- Matrice 2 × 2 dont chaque quadrant contient une mini-barre : la matrice porte
  une mesure (Bain Tech p29).
- Rail de navigation vertical couleur de chapitre à gauche (RB, toutes pages).

## Vu chez
- Roland Berger Trend Compendium p19

## Paysage / portrait
Paysage : matrice 55 %, texte 40 % séparé par un filet vertical. Portrait :
matrice carrée pleine largeur, texte dessous.
