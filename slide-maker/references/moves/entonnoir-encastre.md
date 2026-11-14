---
move: entonnoir-encastre
question: « dans quel ordre de priorité ? »
solidite: 1 occurrence (JPM Investor Day 2025 p14), retenu comme exceptionnellement fort (meilleur layering des 45 slides)
lib: entonnoir (+ bars, accolade, chevron)
---

# Entonnoir à graphiques encastrés

## Question servie
« Qu'allez-vous faire de ce capital ? », un stock à gauche, l'ordre d'emploi à
droite, et la preuve chiffrée dans chaque étage.

## Pourquoi ça paraît évident
L'entonnoir dit « ordre de priorité » sans un mot ; la flèche translucide dit
« ça descend » ; chaque étage porte sa carte-preuve. Trois plans superposés, lus
en une seconde.

## Anatomie (mesures JPM ID)
- Gauche 5/12 : panneau filaire gris, surtitre capitales qui **interrompt** la
  bordure ; histogramme empilé natif (engagé gris / disponible accent), noms de
  séries à gauche **dans leur couleur**, totaux au-dessus, accolade de cumul.
- Gouttière : **chevron** `n6` pleine hauteur (le « donc »).
- Droite : 4 trapèzes (`flipV`) de hauteur égale, gap 0,14 in, **rétrécis
  d'un inset par côté** à chaque étage (inset = 0,25 × h, fixé par la forme
  PowerPoint), rampe du plus foncé au plus clair (`T.seq`).
- Titre d'étage 13 pt semi-gras blanc numéroté + sous-titre 9 pt italique.
- **Flèche vers le bas** `n6` à `transparency` 55, qui traverse les 4 étages.
- **Cartes blanches** arrondies qui mordent le bord droit des trapèzes, surtitre
  capitales à cheval sur leur bordure, mini-histogramme natif de la teinte de l'étage.

## Layering
panneau gauche → graphique → chevron → trapèzes → flèche translucide → textes →
cartes → mini-graphiques (créés en dernier).

## Recette pptxgenjs
```js
s.addShape(ctx.SH.chevron, { x: xg, y: y0 + 0.1, w: 0.42, h: y1 - y0 - 0.1, fill: { color: T.n6 }, line: { type: 'none' } });
L.entonnoir(ctx, s, { x0: xg + 0.55, w0: 5.35, y0: y0 + 0.1, y1, arrowX: 9.55, cardX: 10.35, stages: [
  { title: 'Outil industriel', sub: 'Deuxième usine en Pologne', card: { title: 'Investissements, M€', labels, values, max } }, …] });
```
Limite : l'inset du trapèze n'est pas réglable en pptxgenjs (pas d'`adj`) ; pour
un rétrécissement libre, `custGeom` à 4 points.

## Vu chez
- JPM Investor Day 2025 p14

## Paysage / portrait
Portrait : stock en haut (bandeau), entonnoir pleine largeur dessous, cartes à droite des étages.
