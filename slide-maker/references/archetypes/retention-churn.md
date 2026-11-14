---
tags: [retention, churn, grr, nrr, fidelite, saas, courbes, small-multiples, quantitatif, dense, levee-de-fonds, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Retention and churn (rétention et attrition)
famille: Conseil
question: « Les clients restent-ils, en nombre et en valeur, et la tendance s'améliore-t-elle ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (métriques de rétention d'une entreprise à abonnements)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B07
extrait_le: 2026-10-29
---

# Retention and churn

**Répond à :** une croissance qui perd ses clients par l'autre côté ne vaut pas
grand-chose. L'exhibit présente la fidélité sous **deux angles**, les logos (combien de
clients restent) et la valeur (combien de revenu reste), et sépare ce qui est perdu de
ce qui est regagné par l'expansion.

**Comparaison traitée :** évolution dans le temps de GRR (rétention brute en valeur),
NRR (rétention nette, expansion incluse) et churn de logos. **Graphique natif :** trois
lignes (`addChart` line), ou petits multiples : un graphique par mesure, même échelle
de temps (move `small-multiples`).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | niveau actuel de NRR et GRR et tendance |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | définitions courtes, fenêtre de calcul (12 mois glissants), périmètre |
| Graphique NRR | 4,5 | 26 | 29 | 40 | courbe sur 8 trimestres ; repère à 100 % |
| Graphique GRR | 35 | 26 | 29 | 40 | courbe ; la base à 100 % est le plafond |
| Graphique churn logos | 65,5 | 26 | 30 | 40 | % de clients perdus, trimestre par trimestre |
| Tableau de définitions | 4,5 | 68 | 91 | 19 | formule de chaque mesure, valeur courante, valeur N-1, écart, repère de marché (si sourcé) |
| Pied | 4,5 | 91,5 | 91 | 4 | définition de « perdu » (résiliation, impayé), source |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| ARR ou CA de départ d'une cohorte | début de fenêtre | oui |
| Pertes en valeur | churn et contraction | oui |
| Expansion | hausse chez les clients restants | oui |
| Clients perdus | nombre et % | oui |
| Fenêtre | 12 mois glissants ou trimestre annualisé, un seul choix | oui |
| Segment | rétention par segment ou taille, en annexe | conseillé |

Formules : churn de logos = clients perdus / clients au départ ; GRR = (départ - contraction - churn) / départ ; NRR = (départ - contraction -
churn + expansion) / départ.

## Titre-type

« La rétention nette atteint **108 %**, mais la rétention brute n'est que de **88 %** : la
croissance existante masque les pertes » (chiffres fictifs). Pas « Rétention ».

## Pièges

- NRR seul : une forte expansion de quelques gros clients cache un churn élevé chez les petits.
- Fenêtres de calcul différentes d'un graphique à l'autre.
- Churn de logos montré sans pondération : perdre 10 petits clients n'est pas perdre 1 gros.
- Courbes avec échelle tronquée qui amplifient une variation de 1 point.
- Repères de marché cités sans source ni date : à écarter plutôt que d'inventer.

## Dense mais lisible

Trois graphiques de même échelle de temps et de même format, repère visible à 100 %,
dernière valeur étiquetée, tableau de définitions en bas. Pas de quatrième courbe.

Voisins : [analyse-cohortes](analyse-cohortes.md), [evolution-arr](evolution-arr.md),
[cross-sell-upsell](cross-sell-upsell.md).

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- Trois **courbes natives de même amplitude (20 points)**, pas d'échelle automatique : NRR de 90 à 110 avec repère à 100 %, GRR de 80 à 100 avec le plafond à 100 %, churn de logos de 0 à 20. Les pentes se comparent ; trois échelles libres auraient fait ressembler une baisse de 4,6 points à un effondrement.
- Valeurs de début, de pic et de fin écrites sur la courbe, trimestres de début, du milieu et de fin sous l'axe (huit étiquettes de trimestre ne tiennent pas dans 190 pt à 10 pt).
- Les **dernières valeurs sont recalculées depuis les flux de l'année** (départ, contraction, churn, expansion) : le script refuse si la série et les flux divergent.
- Ajout utile au panneau : churn de logos contre churn en valeur (les clients perdus sont-ils plus petits que la moyenne ?), expansion en points (NRR moins GRR), et ce que serait la rétention nette sans expansion.
- Pas de repère de marché : non sourcé, donc écarté et dit.
