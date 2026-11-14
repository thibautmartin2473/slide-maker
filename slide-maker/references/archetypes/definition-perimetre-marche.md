---
tags: [marche, etude-de-marche, tam, segmentation, tableau, quantitatif, dense, im, pitch]
maisons: [derive-du-nom-non-observe]
archetype: Market definition & scope (périmètre du marché)
famille: Conseil
question: « Qu'est-ce qui est dans le marché que l'on mesure, et qu'est-ce qui n'y est pas ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche arbre-resolution
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: C01
extrait_le: 2026-10-29
---

# Market definition & scope

**Répond à :** avant tout chiffre de taille, le lecteur veut savoir **ce que l'on
compte**. Deux études donnent des tailles qui diffèrent d'un facteur deux uniquement
parce que le périmètre diffère. Cette slide fige la définition une fois pour toutes
et sert de renvoi à toutes les suivantes (levée de fonds, étude de marché, reporting).

**Comparaison traitée :** inclus contre exclus, sur quatre axes : produit ou service,
client, géographie, canal. **Graphique natif :** pas de graphique de données ; un
tableau natif (`addTable`) à trois colonnes (dedans, à la frontière, dehors) et, à
gauche, un schéma de cercles ou de rectangles emboîtés en formes natives.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | la définition retenue en une phrase, avec le motif du choix |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | année de référence, unité, devise |
| Schéma emboîté | 4,5 | 26 | 30 | 58 | marché large, périmètre retenu, coeur de cible ; un trait par exclusion |
| Tableau de périmètre | 37 | 26 | 58,5 | 46 | 4 axes en lignes ; colonnes dans le périmètre, frontière, hors périmètre |
| Bandeau « pourquoi » | 37 | 74 | 58,5 | 10 | règle de décision pour les cas limites |
| Pied | 4,5 | 91,5 | 91 | 4 | définitions officielles citées, sources, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Axe | produit, client, géographie, canal | oui, 4 minimum |
| Inclus | liste fermée, définition d'une ligne | oui |
| Exclus | liste, avec le motif (hors besoin, hors zone, hors seuil) | oui |
| Cas limite | élément ambigu et décision prise | oui, 2 à 4 |
| Nomenclature | code ou classification de référence si elle existe | non |
| Année et unité | identiques à toutes les slides de taille | oui |

## Titre-type

« Nous mesurons le marché des **logiciels de reporting de durabilité pour sociétés
de 250 à 1 000 salariés en Europe**, hors cabinets de conseil et hors grands groupes ».
La phrase est la définition, pas « Périmètre de l'étude ».

## Pièges

- Définition par la solution de l'entreprise (« notre marché ») au lieu du besoin du client.
- Exclusion sans motif : le lecteur suspecte un périmètre taillé pour gonfler ou réduire.
- Cas limites passés sous silence, puis tranchés différemment d'une slide à l'autre.
- Périmètre qui change entre la taille actuelle et la projection.

## Dense mais lisible

Le schéma n'a que trois niveaux ; le tableau porte le détail. Une couleur pour
« dedans », le gris pour « dehors », et la frontière en trait pointillé avec le mot
« limite » écrit. Voir [arbre de résolution](arbre-resolution.md) pour décomposer un
périmètre en branches, et [pont TAM / SAM](pont-tam-sam-som.md) pour la suite.
