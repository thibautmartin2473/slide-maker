---
tags: [concurrence, etude-de-marche, ecosysteme, grille, galerie, logos, dense, im, pitch, buy-side]
maisons: [derive-du-nom-non-observe]
archetype: Landscape & logo map (qui est où dans l'écosystème)
famille: Conseil
question: « Qui sont les acteurs du marché, et dans quelle catégorie se rangent-ils ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et des fiches galerie-par-categorie et buyer-landscape
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: D01
extrait_le: 2026-10-29
---

# Landscape & logo map

**Répond à :** en ouverture d'une étude de marché ou d'un mémorandum, le lecteur
veut cartographier l'écosystème : combien d'acteurs, de quels types, et où se situe
l'entreprise. C'est une carte de repérage, pas un jugement.

**Comparaison traitée :** appartenance de chaque acteur à une catégorie. **Graphique
natif :** pas de graphique de données ; une grille de cartes en formes natives
(rectangles ou `addTable`), une colonne par catégorie, un compteur d'acteurs en tête
de colonne. Logos : n'utiliser que ceux fournis par le client ou publics et libres
d'usage ; à défaut, le nom de l'acteur en texte, ce qui suffit et reste lisible.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | nombre d'acteurs, catégories et position de l'entreprise |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | périmètre, date de collecte |
| En-têtes de catégorie | 4,5 | 26 | 91 | 6 | 4 à 6 catégories, compteur d'acteurs en chiffre |
| Grille de cartes | 4,5 | 33 | 91 | 51 | une carte par acteur : nom, pays, taille indicative |
| Carte de l'entreprise | (dans la grille) | | | | seule mise en avant : fond sauge à bord pointillé (forme analytique dense) |
| Pied | 4,5 | 91,5 | 91 | 4 | critère de classement, sources, limites de l'inventaire |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Acteur | nom, pays | oui |
| Catégorie | une seule par acteur, définition écrite | oui |
| Taille indicative | tranche (petit, moyen, grand) avec le seuil | recommandé |
| Source | numéro renvoyant au pied | oui |
| Exhaustivité | « liste non exhaustive » écrit ou nombre total connu | oui |

## Titre-type

« **Une quarantaine d'acteurs** (exemple fictif) se partagent le marché en cinq
catégories ; l'entreprise est l'un des six éditeurs de la catégorie logiciel ».

## Pièges

- Acteurs classés dans deux catégories : la carte n'est plus lisible.
- Logos de tailles et de couleurs hétérogènes qui créent une hiérarchie involontaire.
- Carte présentée comme exhaustive alors qu'elle ne l'est pas.
- Catégories qui mélangent critères de nature (éditeur, cabinet) et de taille.

## Dense mais lisible

Une seule logique de classement (la nature de l'offre), un compteur par colonne,
huit cartes par colonne au maximum, le reste dans « autres (n) ». Voir
[galerie par catégorie](galerie-par-categorie.md) et
[tableau des concurrents](tableau-concurrents.md) pour passer aux faits.

## Preuve

Rendu de démonstration (données fictives, forme dense), 2 tours de correction.
