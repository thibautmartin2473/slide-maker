---
tags: [rentabilite, marge, couts, structure-de-couts, barres-empilees, quantitatif, dense, im, valorisation, levee-de-fonds]
maisons: [derive-du-nom-non-observe]
archetype: Profitability and cost structure (rentabilité et structure de coûts)
famille: Conseil
question: « Où va chaque euro de chiffre d'affaires, et quel poste de coûts explique la marge ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (compte de résultat analytique, due diligence financière)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B04
extrait_le: 2026-10-29
---

# Profitability and cost structure

**Répond à :** la marge d'EBITDA ne dit pas où se joue la rentabilité. L'exhibit
ramène chaque poste de coûts à un **pourcentage du CA** et montre comment la
structure évolue, pour repérer l'effet d'échelle (ou son absence).

**Comparaison traitée :** décomposition de 100 % du CA en postes de coûts et marge,
sur plusieurs années ou face aux pairs. **Graphique natif :** barres empilées à 100 %
(`addChart` bar stacked percent) : coût des ventes, R&D, ventes et marketing, frais
généraux, EBITDA. Move proche : `rangee-unite`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | marge atteinte et poste qui explique l'évolution |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | en % du CA, exercices, périmètre, EBITDA publié ou retraité |
| Barres à 100 % | 4,5 | 26 | 55 | 56 | une barre par année (ou par pair) ; EBITDA en accent, postes en teintes neutres |
| Rangée de montants | 4,5 | 83 | 55 | 6 | CA en M€ sous chaque barre, pour garder l'échelle absolue |
| Tableau des postes | 61 | 26 | 34,5 | 40 | par poste : % du CA N-2, N, écart en points |
| Panneau de lecture | 61 | 67 | 34,5 | 22 | levier d'échelle : quels postes baissent en % quand le CA monte |
| Pied | 4,5 | 91,5 | 91 | 4 | règle d'affectation des coûts, retraitements, source |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| CA | M€ par exercice | oui |
| Coûts par poste | M€, 4 à 6 postes, somme cohérente avec le compte de résultat | oui |
| Définition de l'EBITDA | retraité (éléments exceptionnels, paiements en actions) ou publié | oui |
| Coûts fixes et variables | split si disponible | conseillé |
| Pairs | structure de coûts de 3 à 5 comparables à périmètre égal | conseillé |
| Retraitements | liste, montant, motif | oui |

Contrôle : somme des postes + EBITDA = 100 % du CA pour chaque barre.

## Titre-type

« La marge d'EBITDA gagne **6 points** en deux ans ; **4 points** viennent de la baisse du
poids des frais généraux, 2 de la R&D » (chiffres fictifs). Pas « Structure de coûts ».

## Pièges

- Postes classés par nature dans une année et par fonction dans l'autre : comparaison faussée.
- EBITDA retraité sans écrire les retraitements : le comité doute de tout le reste.
- Barres à 100 % sans montants absolus : on ne voit plus qu'un poste « baisse en % » parce que le CA a grossi, pas parce que le coût a baissé.
- Capitalisation de la R&D qui améliore la marge sans changer le cash.
- Comparer aux pairs sans harmoniser les définitions (affectation des frais commerciaux).

## Dense mais lisible

Une seule couleur d'accent (l'EBITDA), postes de coûts en gris échelonnés avec étiquette
de valeur, écart en points dans le tableau. Montants absolus rappelés sous les barres.

Voisins : [pairs-financiers-valorisation](pairs-financiers-valorisation.md),
[revenu-par-produit](revenu-par-produit.md).

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- Barres **empilées à 100 % natives** (`percentStacked`), la **marge d'EBITDA au pied** de chaque barre (base commune, donc comparable d'une année à l'autre) et les postes de coûts en gris échelonnés, séparés par un filet blanc ; noms des postes en face de la dernière barre, sans légende.
- Un segment de moins de 14 pt de haut (EBITDA 2022 et 2023) ne porte pas son étiquette : elle est posée à droite de la barre. Sans cette règle le chiffre blanc déborde sur le gris voisin.
- **Piège de la fiche rendu visible** : tous les postes baissent en part du CA, aucun ne baisse en euros. Le tableau ajoute une colonne « Euros » (croissance du poste de 2022 à 2025 contre celle du CA) et le titre dit « par dilution », pas « baisse de dépenses ». Les montants du CA et de l'EBITDA en M€ sont rappelés sous chaque barre.
- Contrôles du script : poste + EBITDA = 100 % chaque année, les écarts des postes bouclent sur le gain de marge, le registre est recalculé.
- Les pairs ne tiennent pas dans la page : écrit dans « À vérifier » (définitions non harmonisées), au lieu de les afficher sans harmonisation.
