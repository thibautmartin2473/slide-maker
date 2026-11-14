---
move: ligne-de-reference
question: « par rapport à quoi ? »
solidite: très solide (M&A 8 documents ; Conseil, CAC40)
lib: ligneReference
---

# Ligne de référence étiquetée

## Question servie
« Ce chiffre est-il haut ou bas ? », médiane, offre, cible, prix non affecté,
coût du capital.

## Pourquoi ça paraît évident
Une seule ligne traverse **toutes** les barres : chaque barre se lit
au-dessus/au-dessous sans calcul. L'étiquette est dans la couleur de la ligne,
dans une zone vide.

## Anatomie
- Pointillé `dash` 1,25-1,5 pt, accent (le point qui compte) ou `n1` (repère neutre).
- Traverse toute la zone de tracé ; **créée après le graphique** (devant les barres).
- Étiquette semi-gras 10 pt de la couleur de la ligne, **hors des barres** :
  au-dessus des barres basses (droite), ou sous la ligne à droite, ou sous
  l'axe pour une verticale (« Offre : 44,00 € »). Multi-ligne avec `\n`.
- Jamais de fond blanc sur l'étiquette s'il masque la série (vu en QA).

## Layering
graphique → ligne → étiquette.

## Recette pptxgenjs
```js
L.ligneReference(ctx, s, { P, v: 11.35, max: 18, label: 'Médiane : 11,4x' });              // horizontale
L.ligneReference(ctx, s, { P, v: 44 - min, min: 0, max: max - min, vertical: true,
  label: 'Offre : 44,00 €', y0: top - 0.05, y1: bottom });                                   // verticale
```
`P` = zone de tracé rendue par `L.bars` / `plotBox` ; l'échelle doit être fixée.

## Variantes
- Médiane **par groupe** : petit trait vertical pointillé de la couleur foncée de
  la famille (Rothschild p27, move `familles-fonce-clair`).
- **Bande floue** translucide au lieu d'une ligne pour une valeur indicative
  (JPM p17, move `incertitude-dessinee`).
- Ligne cible verte + chiffre en serif gras (JPM p17 : « 17 % target »).

## Vu chez
- Morgan Stanley p28
- Goldman Sachs p7
- Centerview p20
- Rothschild p27, Evercore p43, Perella p5/p8, Hermès p32 (seuil).

## Paysage / portrait
Identique. En portrait, l'étiquette d'une verticale passe sous l'axe, centrée.
