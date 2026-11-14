---
move: familles-fonce-clair
question: « quel sous-ensemble de comparables est pertinent ? »
solidite: très solide (Rothschild p26/p27, Perella p5/p7/p8, MS p19, Centerview p29 ; marqueurs multiformes : Kearney p8/p14)
lib: FAMILIES (paires foncé/clair) ; rect ; bars dir 'bar'
---

# Familles en paires foncé / clair

## Question servie
Comparer des pairs regroupés en familles (câble, fibre, rural…) et situer la cible.

## Pourquoi ça paraît évident
Chaque famille a **une** couleur, constante sur tout le deck : foncé pour le
trait, l'en-tête et la médiane ; clair pour la surface. La cible est seule dans
la couleur la plus sombre. 5 couleurs à l'écran mais seulement ~9 % d'aire
saturée, grâce aux teintes claires.

## Anatomie
- Lignes = sociétés (communes à toutes les colonnes), colonnes = métriques
  (largeur égale ≈ 20 %) → lecture horizontale = une société, verticale = une métrique.
- En-tête de famille plein (foncé) + cadre de groupe liseré foncé.
- Barres horizontales en teinte claire à liseré foncé ; valeur à droite.
- Médiane de famille : petit trait vertical pointillé foncé + « Médiane : x » coloré.
- Rangée « Médiane globale » sur fond gris, bordure noire, valeurs grasses.
- Bloc cible en bas, fond lavande/`accentLight`, barres pleines `panel`, titre rotaté.

## Layering
cadres de groupe → en-têtes → barres → médianes → rangée globale → bloc cible.

## Recette pptxgenjs
```js
const [dark, light] = L.FAMILIES[f];
L.rect(ctx, s, x, y, w * v / vmax, h, { fill: light, line: dark, lw: 0.75 });
L.line(ctx, s, xMed, yTopGroup, xMed, yBotGroup, { color: dark, dash: 'dash', w: 1 });
```
Dictionnaire `famille → [foncé, clair]` défini **une fois** pour tout le deck.

## Variantes
- **Marqueurs multiformes** : rond / carré / losange / triangle pour distinguer
  4 séries avec **une** couleur (Kearney p8), `lineDataSymbol` par série.

## Vu chez
- Rothschild p27
- Kearney p8

## Paysage / portrait
Portrait : 2 métriques par page au lieu de 4.
