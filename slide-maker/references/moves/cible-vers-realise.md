---
move: cible-vers-realise
question: « la promesse a-t-elle été tenue ? »
solidite: très solide (AXA p7/p11/p32, Capgemini p7, Air Liquide p7 ; frontière qui pointe : Danone p21/p23)
lib: cibleRealise
---

# Cible → réalisé (frontière qui pointe)

## Question servie
« Avez-vous livré le plan précédent ? », la question de crédibilité de tout
Investor Day, de tout comité de pilotage.

## Pourquoi ça paraît évident
Même ligne, même unité, deux côtés : l'œil compare −30 % / −34 % sans lire. Le
réalisé est **plus gros et plus lumineux** que la cible ; les coches répondent
« oui » avant même la lecture ; la seule croix est honnête et datée.

## Anatomie (split, Capgemini p7)
- Split 50/50 : gauche blanche « OBJECTIFS », droite panneau sombre « RÉALISÉ »
  en fond perdu (droite et bas), en-têtes capitales espacées (`charSpacing` 3)
  sur une même ligne de base.
- Lignes à **pas constant** ; même retrait relatif dans chaque moitié.
- Cible : 34 pt Light `ink` ; réalisé : 38 pt semi-gras `panelAccent` (raté :
  blanc) ; libellé 11 pt collé sur la ligne de base du chiffre (runs).
- **Encoches** : triangle blanc tourné de 90° centré sur la frontière à chaque
  ligne → le panneau « pointe » vers le réalisé, sans flèche.
- Colonne de coches : cercle 0,4 in liseré, ✓ ou ✕ ; raison de l'écart en
  italique 9 pt sous la ligne ratée.

## Layering
fond → panneau → encoches (elles mordent le panneau) → chiffres → coches.

## Recette pptxgenjs
```js
L.cibleRealise(ctx, s, { heads: ['Objectifs 2025', 'Réalisé 2025'], panelY: 1.9, y0: 2.2, y1: 6.7, rows: [
  { target: '1,6 Md€', done: '1,84 Md€', label: 'de chiffre d\'affaires', ok: true }, …,
  { target: '14,0 %', done: '13,1 %', label: 'de marge d\'EBITDA', ok: false, gap: 'Inflation du cuivre…' }] });
L.pageNo(ctx, s, 'B8B2A9');
```
`panelY` > 0 laisse le titre en pleine largeur au-dessus du panneau.

## Variantes
- **AXA** : libellé aligné à droite | cible regular | chevron dégradé qui entre
  dans un cartouche bleu pâle | réalisé gras même corps | coche (la graisse seule
  hiérarchise).
- Panneau-flèche en chevron qui passe derrière une carte (Danone p21).

## Vu chez
- Capgemini p7
- AXA p7

## Paysage / portrait
Portrait : deux colonnes étroites deviennent deux lignes par KPI (cible au-dessus,
réalisé dessous sur bandeau sombre) ; l'encoche pointe vers le bas.
