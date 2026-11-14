---
move: incertitude-dessinee
question: « quelle part est une fourchette, un estimé, un illustratif ? »
solidite: solide (Capgemini p45/p46, Danone p10, JPM ID p16/p17, Capgemini p38)
lib: bridgeGroupes (est: true -> hachures + contour pointillé)
---

# Incertitude dessinée

## Question servie
Dire « ce chiffre n'est pas sécurisé » **sans** l'écrire en note de bas de page.

## Pourquoi ça paraît évident
Le flou, la hachure ou la teinte claire sont compris instantanément comme « moins
sûr ». La précision est dans le code visuel, pas dans un astérisque.

## Anatomie (4 codes, un seul par slide)
1. **Hachures** : 2 traits blancs 2 pt en diagonale sur la marche + contour
   pointillé de la couleur de la marche (Danone p10). Code par défaut de la lib.
2. **Marche évanescente** : dégradé vertical alpha 0 → 1 → 0 (Capgemini p45) ;
   seules les bornes sont chiffrées.
3. **Barre bicolore** : plein + clair = fourchette basse/haute (Capgemini p38).
4. **Bande floue translucide** horizontale pour une valeur indicative (coût du
   capital, JPM p17), posée devant les barres, `transparency` 30-60.
Le sous-titre l'annonce : « marches hachurées = gains non sécurisés ».

## Layering
graphique → hachures / bande translucide → contour pointillé → étiquette.

## Recette pptxgenjs
```js
{ label: 'Coût de revient', v: 71, est: true }            // dans L.bridgeGroupes
L.rect(ctx, s, P.x, yAt(10.5), P.w, 0.18, { fill: 'FFFFFF', transp: 35 }); // bande floue devant
```
**Limite** : pptxgenjs n'écrit pas de remplissage en dégradé sur une série de
graphique ni sur une forme simple ; la marche évanescente exige une image PNG
dégradée posée par-dessus (acceptable : c'est un calque, les données restent dans
le graphique natif dessous) ou 3 rectangles à `transparency` 80/0/80.

## Vu chez
- Capgemini p45
- Danone p10
- JPM ID p17

## Paysage / portrait
Identique.
