---
tags: [marche, etude-de-marche, tam, bottom-up, quantitatif, dense, valorisation, pitch, tableau, barres]
maisons: [derive-du-nom-non-observe]
archetype: Bottom-up sizing build (taille construite par unités x prix)
famille: Conseil
question: « Quelle taille obtient-on en comptant les clients et en multipliant par ce qu'ils paient ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche triangulation-taille-marche
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: C04
extrait_le: 2026-10-29
---

# Bottom-up sizing build

**Répond à :** l'estimation descendante (part d'un marché plus large) est facile à
contester. L'estimation **ascendante** compte des unités réelles (entreprises
éligibles, sites, utilisateurs), applique un taux d'équipement puis un prix, et
s'additionne par segment. Elle sert de recoupement du top-down dans une levée de fonds.

**Comparaison traitée :** contribution de chaque segment à la taille, avec le calcul
visible. **Graphique natif :** barres simples (`addChart` type bar, triées) : une
barre par segment, longueur = unités x taux x prix ; à gauche, un tableau natif qui
déroule les colonnes du calcul. La somme apparaît en pied de tableau.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | taille obtenue et segment qui en porte la plus grande part |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | formule, année, unité (M€) |
| Tableau de calcul | 4,5 | 26 | 55 | 52 | par segment : unités, taux d'équipement, prix moyen, taille ; ligne de total |
| Barres par segment | 61 | 26 | 34,5 | 52 | taille par segment, étiquettes de valeur, accent sur le plus gros |
| Ligne de recoupement | 4,5 | 79 | 91 | 6 | écart avec l'estimation descendante, en M€ et en % |
| Pied | 4,5 | 91,5 | 91 | 4 | sources des unités et des prix, E pour les estimés |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Segment | nom, définition | oui |
| Unités | nombre, année, source | oui |
| Taux d'équipement | % ou « n.d. » écrit | oui |
| Prix moyen | valeur annuelle, devise, hors taxes | oui |
| Taille du segment | unités x taux x prix, à recalculer | oui |
| Estimation descendante | valeur pour le recoupement | recommandé |

## Titre-type

« Le décompte ascendant donne **410 M€** (exemple fictif), à 8 % sous l'estimation
descendante : les PME de 50 à 250 salariés en font 55 % ».

## Pièges

- Prix de catalogue pris pour prix payé (remises, formules gratuites ignorées).
- Taux d'équipement d'un pays mature appliqué sans condition à un pays émergent.
- Unités non dédupliquées entre segments : le total gonfle.
- Écart avec le top-down de plus de 30 % passé sous silence au lieu d'être expliqué.

## Dense mais lisible

Le tableau montre le calcul de gauche à droite, les barres ne répètent que le
résultat. Une seule unité monétaire, des colonnes d'unités en milliers ou en unités
mais jamais mélangées. Voir [triangulation](triangulation-taille-marche.md) pour la
confrontation des méthodes et [taille par segment](taille-par-segment.md).
