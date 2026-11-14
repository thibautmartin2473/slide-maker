---
move: donut-sobre
question: « quelle répartition, et combien au total ? »
solidite: très solide (LVMH p27/p62-148, Hermès p16/p19, TotalEnergies p11, Air Liquide p5, GS ID p126, BCG SIA)
lib: donutSobre
---

# Donut sobre (anneau fin, total au centre)

## Question servie
Une composition (≤ 5 parts, un chiffre central) **et** son total ; au-delà de 5 parts, des barres triées. Jamais un classement de sociétés
(barres triées pour ça).

## Pourquoi ça paraît évident
Le total est au centre, là où l'œil entre ; les étiquettes sont rangées sur deux
x fixes, pas éparpillées autour ; l'anneau fin ne crie pas.

## Anatomie
- Anneau `holeSize` 78-85 (fin), séparateurs blancs 1,5 pt, départ à 12 h.
- Couleurs : l'accent pour la part du message, `ink` pour la 2ᵉ, gris pour le reste.
- Total 30 pt Light au centre + libellé 9 pt dessous.
- Étiquettes : pourcentage 20 pt dans la couleur du segment + libellé 9 pt, sur
  **deux colonnes à x fixe** (gauche alignée à droite, droite alignée à gauche),
  reliées au segment par un fil pointillé 0,5 pt ; dédoublonnées verticalement.

## Layering
graphique natif → total → fils → étiquettes.

## Recette pptxgenjs
```js
L.donutSobre(ctx, s, { cx: 4.05, cy: 4.3, d: 3.3, labels, values, colors: [T.accent, T.ink, T.n3, T.n4],
  total: '1 840', totalLabel: 'M€ de chiffre\nd\'affaires 2025', labelDx: 0.55, fmt: (v) => Math.round(v / 18.4) + ' %' });
```

## Variantes
- **Accolade circulaire** : arc gris épais concentrique qui regroupe des segments
  en piliers ; pointillés blancs internes pour sous-découper (TotalEnergies p11).
  `addShape(ctx.SH.arc, …)` / `blockArc` avec angles calculés.
- **Double anneau** (Air Liquide p5) : anneau extérieur = niveau 1, intérieur = détail.
- **Donuts reliés en zoom** (GS ID p126) : 3 donuts de même Ø alignés, un trapèze
  translucide (`custGeom`, `transparency` 60) part du segment zoomé vers le donut
  suivant, **créé avant** lui ; la couleur du segment = couleur dominante du suivant.
- **Peigne** d'étiquettes sous le donut (rail + tiges verticales, Air Liquide p5).

## Vu chez
- LVMH p27
- TotalEnergies p11
- GS ID p126

## Paysage / portrait
Identique ; Ø ≤ 45 % de la largeur utile en portrait.
