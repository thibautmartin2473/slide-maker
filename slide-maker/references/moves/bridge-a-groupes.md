---
move: bridge-a-groupes
question: « quels moteurs, et combien pèse chaque famille ? »
solidite: 1 émetteur × 4 slides (Evercore p29-p32) + Capgemini p38 (zone focus, accolades), exceptionnellement fort
lib: bridgeGroupes
---

# Bridge à groupes encadrés

## Question servie
« Qu'est-ce qui fait passer de X à Y ? » quand les leviers sont nombreux : la
réponse est par **famille** (croissance, prix net, productivité), pas par levier.

## Pourquoi ça paraît évident
Les deltas d'une même famille sont dans un cadre pointillé, et une ellipse grise
sous le cadre donne le total de la famille : on lit 3 chiffres, pas 8.

## Anatomie
- Bandeau pâle pleine largeur **au-dessus** du graphique avec le KPI de synthèse
  (« EBITDA 2025-2028P : +144 M€, soit +17 % par an »).
- Totaux `ink` pleins, à l'échelle ; hausses `pos`, baisses `neg` ; valeurs
  au-dessus de chaque marche, colorées par signe ; connecteurs 0,5 pt `n3`.
- Cadres pointillés `n2` 0,75 pt autour de chaque groupe (0,32 in au-dessus de la
  plus haute marche) ; **ellipse** `n6` liseré `n4` dans le vide sous les marches
  flottantes : libellé 9 pt + valeur 12 pt semi-gras colorée.
- Marches estimées hachurées (move `incertitude-dessinee`).

## Layering
bandeau → graphique natif → connecteurs → valeurs → hachures → cadres → ellipses → (callouts).

## Recette pptxgenjs
Natif : colonnes empilées, série « base » invisible (`bg`) + séries Total /
Hausse / Baisse (valeur sur leur marche, 0 ailleurs). Étiquettes posées à la main.
```js
L.bridgeGroupes(ctx, s, { box, max: 440, steps: [{ label: 'EBITDA 2025', v: 241, kind: 'total' }, { label: 'Volumes', v: 88 }, …],
  groups: [{ from: 1, to: 2, label: 'Croissance', value: '+115', color: T.pos }, …] });
```
Limite : la série base est peinte en `bg` (pptxgenjs n'expose pas « aucun
remplissage » par série) : ne rien poser derrière le graphique à cet endroit.

## Variantes
- Deltas en **plaques d'épaisseur fixe** (échelle sacrifiée, Evercore) quand les
  deltas sont minuscules devant les totaux.
- Callouts à pointe bleu clair posés au-dessus des cadres (`wedgeRectCallout`).
- Accolades de TCAM au-dessus d'un bridge de marché + zone grise « nouveau » (Capgemini p38).

## Vu chez
- Evercore p29
- Capgemini p38

## Paysage / portrait
Portrait : ≤ 8 marches, libellés sur 2 lignes ; au-delà, cascade horizontale
(move `rangee-unite`).
