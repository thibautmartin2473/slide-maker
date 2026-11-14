---
tags: [concurrence, tableau, comparables, etude-de-marche, quantitatif, dense, matrice, grille, im, pitch]
maisons: [derive-du-nom-non-observe]
archetype: Competitor fact table (fiche comparative des concurrents)
famille: Conseil
question: « Qui sont les concurrents, et que sait-on d'eux, fait par fait ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et du tableau-graphique existant
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: D03
extrait_le: 2026-10-29
---

# Competitor fact table

**Répond à :** avant toute opinion sur les forces et faiblesses, le lecteur veut les
**faits** : taille, croissance, clients, prix, financement. Le tableau est la base
factuelle ; les jugements viennent après (grille de forces et faiblesses).

**Comparaison traitée :** les mêmes attributs, acteur par acteur. **Graphique natif :**
tableau natif (`addTable`) ; micro-barres en cellule possibles par rectangles pour
le CA. Pas de graphique : c'est un tableau de référence.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | ce que le tableau révèle (écart de taille, point commun) |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | périmètre des acteurs, date de collecte |
| Tableau | 4,5 | 26 | 91 | 58 | 5 à 8 acteurs en lignes, 8 à 10 attributs en colonnes ; l'entreprise étudiée en 1re ligne, fond fantôme |
| Colonne « confiance » | (dans le tableau) | | | | pastille texte : public, déclaré, estimé |
| Pied | 4,5 | 91,5 | 91 | 4 | numéros de sources par cellule, « n.d. » expliqué |

Attributs types : année de création, siège, effectifs, CA et croissance, clients
cibles, offre, modèle de prix, financement ou actionnaire, géographies.

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Acteur | nom, nature (société, filiale) | oui |
| Attributs | valeur, unité, millésime | oui, 8 minimum |
| Source | numéro renvoyant au pied, par cellule | oui |
| Niveau de confiance | public, déclaré, estimé (E) | oui |
| Donnée absente | « n.d. » écrit, jamais case vide | oui |

## Titre-type

« Sur sept acteurs, **seuls deux** dépassent 50 M€ de CA, et aucun ne propose le
modèle à l'usage » : une lecture du tableau, pas « Concurrents ».

## Pièges

- Attributs différents d'un acteur à l'autre (CA 2024 ici, 2022 là) sans l'écrire.
- Cases vides interprétées comme « zéro ».
- Estimation présentée comme un fait : marquer E.
- Plus de 8 colonnes : la police descend sous le seuil ; scinder en deux tableaux.

## Dense mais lisible

Fond fantôme sur la ligne de l'entreprise étudiée, première colonne en gras, valeurs
chiffrées alignées à droite, une seule couleur de confiance. Pas de logos de 40 px
qui prennent la place des données.
