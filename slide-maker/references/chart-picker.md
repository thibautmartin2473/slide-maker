# Choisir le graphique par la question du lecteur

Choisir **la comparaison d'abord** (la question que la slide tranche), le graphique ensuite. Les fiches de [moves.md](moves.md) donnent le dessin et la fonction de `tools/lib.js` qui l'exécute.

| Ce qu'on montre | Graphique | À éviter | Move | Fonction `lib.js` |
|---|---|---|---|---|
| Une valeur dans le temps | Courbe (beaucoup de périodes) ou colonnes (peu) | Aires, qui cachent la série du bas | série annotée, petits multiples | `serieAnnotee`, `smallMultiples` |
| Ce qui explique un écart entre deux nombres | Cascade (pont) | Deux barres avant et après : le lecteur fait la soustraction | pont à groupes | `bridgeGroupes` |
| Parts d'un tout, une période | Barres triées des parts ; anneau seulement à 5 parts ou moins, total au centre | Camembert au-dessus de 3 parts ; anneau de plus de 5 parts | anneau sobre | `donutSobre` |
| Parts d'un tout dans le temps | Colonnes empilées à 100 % | Aires empilées de plus de 4 séries | pastilles au pas | `pastillesAuPas` |
| Deux dimensions (part et taille) | Colonnes à 100 % dont la largeur porte la taille : un graphique « Mekko » n'existe pas en natif, le dessiner en rectangles à l'échelle (et le dire) | Bulles, illisibles à l'aire | table au pas, matrice à zones | `tableAuPas` |
| Un classement | Barres horizontales triées | Barres verticales aux libellés inclinés | gris un accent, fond fantôme | `grisUnAccent`, `fondFantome` |
| Une distribution, une fourchette | Histogramme, boîte à moustaches, plage min-max | La moyenne seule | mise entre parenthèses | `bracket` |
| Une corrélation | Nuage de points, valeurs aberrantes étiquetées | Courbes à double axe : elles autorisent n'importe quelle relation | matrice à zones | formes |
| Avancement contre une cible | Barre avec repère de cible, ou colonnes cible et réalisé | Jauges et compteurs | cible vers réalisé | `cibleRealise`, `ligneReference` |
| Acquis contre promis (réel et prévu) | Frontière réel et prévision : barre plus pâle, étiquette « E » | Les mêmes barres pleines pour le réel et l'estimé | frontière réel et projection | `smallMultiples` |
| Cohortes, rétention | Tableau coloré en dégradé d'une seule teinte | Une courbe par cohorte au-delà de 4 | tableau-graphique | `addTable` |
| Un seul nombre qui compte | Le nombre en grand avec sa comparaison à côté | Un graphique à une barre | chiffres-héros | `chiffresHeros`, `medaillon` |
| Deux mesures d'échelles différentes | Deux graphiques superposés au même pas, ou les deux indexées à 100 | Double axe | double mesure | `bars` + courbe |
| Un seuil à ne pas franchir | Barres et une ligne de référence pointillée étiquetée | Zone colorée sans valeur | ligne de référence | `ligneReference` |

## Règles pour tous

- **Base zéro** sur toute barre, sauf cascade et barres flottantes (écarts, plages) : dans ce cas l'axe est écrit sous le graphique.
- **Étiquettes directes** sur la série commentée ; pas de légende détachée.
- **Tri par valeur**, sauf ordre naturel (mois, étapes d'un entonnoir).
- **L'unité dans le sous-titre ou l'axe**, pas répétée sur chaque étiquette ; même unité et même période du titre à la note de bas de slide.
- **Un accent** pour la série commentée, le reste en gris.
- Si le graphique demande plus d'une phrase d'explication, c'est le mauvais graphique.
- Un chiffre estimé se voit sur le graphique (barre plus pâle, « E »), un trou de données s'affiche « n.d. » et n'est jamais interpolé.

## Deux axes

À éviter. Si deux échelles sont vraiment nécessaires : indexer les deux séries à 100 à la première période et garder un seul axe ; si cela perd le message, deux graphiques empilés au même axe des temps.

## Cas de finance d'entreprise (rappels)

| Question du dirigeant | Graphique |
|---|---|
| Où en est la trésorerie ? | Barres mensuelles, dernier mois en accent, seuil en ligne pointillée |
| Pourquoi a-t-elle bougé ? | Pont : départ, flux d'exploitation, besoin en fonds de roulement, investissements, financement, arrivée |
| Réalisé contre budget ? | Colonnes cible et réalisé par ligne, ou pont d'écart budget vers réalisé |
| Qui nous doit de l'argent ? | Tableau trié par retard, trois lignes en tête, le reste regroupé |
| Combien de temps tient-on ? | Courbe ou barres de prévision avec « E » et seuil |
| Quel budget demandé et pour quoi ? | Barres horizontales triées des postes, retour sur investissement en chiffre-héros |
