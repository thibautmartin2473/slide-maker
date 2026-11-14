---
move: mesure-dessinee
question: « de combien, à quel rythme ? »
solidite: très solide (McK Chili p33, Bain PE p6, Capgemini p38, TotalEnergies p12/p14/p15/p34/p38)
lib: accolade ; cote ; pill
---

# Mesure dessinée (cote, accolade, pilule-delta)

## Question servie
« De combien ça change au total ? », « à quel rythme ? », le chiffre du titre
**dessiné sur la donnée**.

## Pourquoi ça paraît évident
C'est une cote d'architecte : on voit les deux bornes mesurées et le résultat
posé au milieu. Le lecteur n'a rien à calculer, et il voit d'où vient le chiffre.

## Anatomie
- **Accolade en équerre** : monte du sommet A, court à l'horizontale, redescend
  en flèche sur B ; pilule pleine au milieu du segment horizontal (« 4-5 % TCAM »,
  « 357 dispo. cumulés »). Trait 1 pt, couleur de la pilule.
- **Cote horizontale** : flèche double entre la fin de deux barres (total de
  départ et d'arrivée d'une cascade horizontale) + pilule « −28 % » ; pointillé
  de rappel vertical depuis la barre de départ.
- **Pilule-delta** : `roundRect` rayon max, fond blanc, contour accent 1 pt,
  posée sur l'intersection qu'elle commente (elle masque le trait).
- Texte de la pilule : 10 pt semi-gras ; parenthèses pour un négatif en style
  banque (« (−50 %) »), signe « − » typographique en style conseil.

## Layering
graphique → traits de cote → pilule (en dernier, pour masquer le trait).

## Recette pptxgenjs
```js
L.accolade(ctx, s, { x1: r.x(1), y1: r.top(1) - 0.3, x2: r.x(3), y2: r.top(3) - 0.3, y: r.top(3) - 0.55, text: '+17 %/an' });
L.cote(ctx, s, { x1: xEndStart, x2: xEndFinish, y: yBelow, text: '−28 %', color: T.accent });
```
`L.line` remet la flèche du bon côté quel que soit le sens (pptxgenjs trace de
(x,y) vers (x+w,y+h)).

## Variantes
- Deux mini-pilules empilées dans la gouttière entre deux barres = décomposition
  du delta sans waterfall (TotalEnergies p15).
- Flèche verticale rouge entre deux barres + « (−50 %) » (Bain PE p6).

## Vu chez
- McKinsey Chili p33
- Bain PE p6
- Capgemini p38
- TotalEnergies p15

## Paysage / portrait
Identique. Une seule accolade par graphique, deux au maximum (Capgemini).
