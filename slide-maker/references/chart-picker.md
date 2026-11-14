# Choisir le graphique par la comparaison

Choisir **la comparaison d'abord** (la question de la slide), le graphique ensuite. Table reprise du pack gratuit de slides de conseil de Riplo, colonnes « move » et « lib.js » ajoutées pour passer directement à l'exécution. Pour la forme, l'étiquetage, les axes et les couleurs d'un graphique : [design-system.md](design-system.md), sections 1, 7 et 8. Les fiches de [moves.md](moves.md) donnent le dessin et la fonction de `tools/lib.js` qui l'exécute.

| Ce qu'on montre | Graphique | À éviter | Move (fiche) | `lib.js` |
|---|---|---|---|---|
| Une valeur dans le temps | courbe (beaucoup de périodes) ou colonnes (peu) | aires, qui cachent la série du bas | [serie-annotee](moves/serie-annotee.md), [small-multiples](moves/small-multiples.md) | `serieAnnotee`, `smallMultiples` |
| Ce qui explique un écart entre deux nombres | cascade (bridge) | deux barres avant / après : le lecteur fait la soustraction | [bridge-a-groupes](moves/bridge-a-groupes.md), [incertitude-dessinee](moves/incertitude-dessinee.md) | `bridgeGroupes` |
| Parts d'un tout, une période | barres empilées ou barres triées des parts ; anneau seulement à 5 parts ou moins avec le total au centre | camembert au-dessus de 3 parts ; anneau de plus de 5 parts | [donut-sobre](moves/donut-sobre.md), [pastilles-au-pas](moves/pastilles-au-pas.md) | `donutSobre`, `pastillesAuPas` |
| Parts d'un tout dans le temps | colonnes empilées à 100 % | aires empilées de plus de 4 séries | [pastilles-au-pas](moves/pastilles-au-pas.md) | `pastillesAuPas` |
| Deux dimensions à la fois (part et taille) | Mekko : **non natif en pptxgenjs**, le dessiner en rectangles à l'échelle (le dire) ou prendre colonnes à 100 % + largeur portée par une table | bulles, illisibles à l'aire | [table-au-pas](moves/table-au-pas.md), [matrice-a-zones](moves/matrice-a-zones.md) | `tableAuPas` |
| Un classement | barres horizontales triées (inverser les tableaux : voir le piège de l'ordre des catégories) | barres verticales aux libellés inclinés | [gris-un-accent](moves/gris-un-accent.md), [fond-fantome](moves/fond-fantome.md) | `grisUnAccent`, `fondFantome` |
| Une distribution, une fourchette de valeur | histogramme, boîte à moustaches, football field, plage min-max | la moyenne seule | [mise-entre-parentheses](moves/mise-entre-parentheses.md) | `footballField`, `bracket` |
| Une corrélation | nuage de points, valeurs aberrantes étiquetées | courbes à double axe : elles autorisent n'importe quelle relation | [matrice-a-zones](moves/matrice-a-zones.md) | formes / scatter |
| L'avancement contre une cible | barre à repère de cible, ou colonnes cible et réalisé | jauges et compteurs | [cible-vers-realise](moves/cible-vers-realise.md), [ligne-de-reference](moves/ligne-de-reference.md) | `cibleRealise`, `ligneReference` |
| Acquis contre promis | frontière réel / projection (barre plus pâle ou hachurée, étiquette « E ») | mêmes barres pleines pour le réel et l'estimé | [frontiere-reel-projection](moves/frontiere-reel-projection.md) | `smallMultiples` (split) |
| Cohortes, rétention | grille de cohortes en dégradé d'une seule teinte (tableau coloré) | une courbe par cohorte au-delà de 4 | [tableau-graphique](moves/tableau-graphique.md) | `addTable` + formes |
| Un seul nombre qui compte | le nombre, grand, avec sa comparaison à côté | un graphique à une barre | [chiffres-heros](moves/chiffres-heros.md), [kpi-dans-le-graphique](moves/kpi-dans-le-graphique.md) | `chiffresHeros`, `medaillon` |
| Deux mesures d'échelles différentes (prix et temps) | deux graphiques superposés au pas partagé, ou indexer les deux à 100 | double axe | [double-mesure](moves/double-mesure.md), [superposition-de-plans](moves/superposition-de-plans.md) | `bars` + courbe |
| Un seuil à ne pas franchir | barres et une ligne de référence pointillée étiquetée | zone colorée sans valeur | [ligne-de-reference](moves/ligne-de-reference.md) | `ligneReference` |

## Règles valables pour tous (la table de Riplo fusionnée avec les habitudes des [principes](principes.md))

- **Base zéro** sur toute barre, sauf cascade et barres flottantes (écarts, plages) : l'axe est alors écrit sous le graphique (cohérent avec les fiches [evolution-arr](archetypes/evolution-arr.md) et [triangulation-taille-marche](archetypes/triangulation-taille-marche.md)).
- **Étiquettes directes** sur les séries commentées. On va plus loin que Riplo (légende à partir de 4 séries) : **aucune légende détachée**, la légende vit dans le texte (move [legende-dans-le-texte](moves/legende-dans-le-texte.md)).
- **Tri par valeur**, sauf ordre naturel (mois, étapes d'un entonnoir).
- **L'unité dans le sous-titre ou l'axe**, pas répétée sur chaque étiquette ; la même unité et la même période du titre à la note de bas (c'est ce que contrôlent `UNITE-DERIVE` et `PERIODE-DERIVE` dans `tools/lint-deck.mjs`).
- **Une teinte d'accent** pour la série commentée, le reste en gris.
- Si le graphique demande plus d'une phrase d'explication, **c'est le mauvais graphique**.
- Un chiffre estimé se voit sur le graphique (hachures ou barre plus pâle, « E »), un trou de données s'affiche en « n.d. » et n'est jamais interpolé.

## Deux axes

À éviter. Si deux échelles sont vraiment nécessaires : indexer les deux séries à 100 à la première période et garder un seul axe ; si cela perd le message, deux graphiques empilés au même axe des temps.

## Dialogue avec les archétypes

Les [archétypes](archetypes/catalogue-48-archetypes.md) sont les exhibits denses d'analyse (une comparaison précise, un contrat de données) : un archétype qui impose un graphique doit être cohérent avec la ligne de cette table. L'archétype dit quoi montrer et avec quelles données, le move dit comment le rendre fort.

## Cas de finance d'entreprise (rappels)

| Question du dirigeant | Graphique |
|---|---|
| Où en est la trésorerie ? | Barres mensuelles, dernier mois en accent, seuil en ligne pointillée |
| Pourquoi a-t-elle bougé ? | Pont : départ, flux d'exploitation, besoin en fonds de roulement, investissements, financement, arrivée |
| Réalisé contre budget ? | Colonnes cible et réalisé par ligne, ou pont d'écart budget vers réalisé |
| Qui nous doit de l'argent ? | Tableau trié par retard, trois lignes en tête, le reste regroupé |
| Combien de temps tient-on ? | Courbe ou barres de prévision avec « E » et seuil |
| Quel budget demandé et pour quoi ? | Barres horizontales triées des postes, retour sur investissement en chiffre-héros |
