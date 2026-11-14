---
move: frontiere-reel-projection
question: « qu'est-ce qui est acquis, qu'est-ce qui est promis ? »
solidite: très solide (Lazard p8, GS p8, Centerview p11, Perella p4 ; Danone p10 hachures)
lib: smallMultiples (split) ; line pointillée ; couleurs T.actual / T.plan
---

# Frontière réel / projection

## Question servie
Séparer ce qui est constaté de ce qui est prévu, pour juger la crédibilité d'un plan.

## Pourquoi ça paraît évident
Une seule ligne verticale pointillée coupe **toutes** les rangées au même x ; la
couleur change de part et d'autre, et les bandeaux d'en-tête portent la même
couleur que les barres : la légende est l'en-tête.

## Anatomie
- Pointillé `dash` 1 pt `ink`, de l'en-tête au bas de la dernière rangée, créé en dernier.
- Couleurs : réel `T.actual`, plan `T.plan` (P1 : gris / vermillon ; P2 : ciel / nuit).
- Bandeaux d'en-tête pleins, texte blanc 9 pt, largeur = colonnes couvertes.
- Suffixe « P » ou « E » sur les années de plan (« 2026P »).
- Option : consensus en pastilles or dans les barres du plan (move `pastilles-au-pas`).

## Layering
bandeaux → graphiques → pastilles → frontière.

## Recette pptxgenjs
```js
colors: values.map((_, i) => (i < split ? T.actual : T.plan))   // une série, une couleur par point
L.line(ctx, s, xSplit, y0 - 0.05, xSplit, y1, { color: T.ink, w: 1, dash: 'dash' });
```

## Variantes
- **Barres hachurées** pour l'estimé (2 traits blancs diagonaux, Danone p10) →
  move `incertitude-dessinee`.
- Zone grisée derrière la période projetée (fan chart, JPM ID p16).

## Vu chez
- Lazard p8
- Danone CME p10
- GS p8, Centerview p11, Perella p4 (planches-contacts).

## Paysage / portrait
Identique ; en portrait, garder la frontière verticale même si les graphiques s'empilent.
