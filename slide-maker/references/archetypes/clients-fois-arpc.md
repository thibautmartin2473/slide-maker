---
tags: [clients, arpc, revenu-moyen, decomposition, equation, croissance, quantitatif, dense, levee-de-fonds, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Customer count x ARPC (nombre de clients fois revenu moyen par client)
famille: Conseil
question: « La croissance du CA vient-elle de plus de clients ou d'un revenu plus élevé par client ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (décomposition volume x prix d'un CA)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B03
extrait_le: 2026-10-29
---

# Customer count x ARPC

**Répond à :** CA = nombre de clients x revenu moyen par client (ARPC). Les deux
facteurs n'ont pas la même valeur : des clients en plus signalent une acquisition
coûteuse, un ARPC en hausse signale du pouvoir de prix ou de l'expansion. L'exhibit
**sépare les deux effets** et vérifie qu'ils reconstituent le CA.

**Comparaison traitée :** l'équation du CA, lue en trois petits graphiques alignés.
**Graphique natif :** trois séries sur la même échelle de temps : barres du nombre
de clients, ligne de l'ARPC (`addChart` bar et line, un graphique chacun) et barres
du CA résultant. Moves proches : `equation-de-graphiques`, `small-multiples`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | part de la croissance due aux clients, part due à l'ARPC |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | définition d'un client, de l'ARPC (annuel ou mensuel), unité, périmètre |
| Graphique clients | 4,5 | 26 | 28 | 40 | nombre de clients en fin de période, par année |
| Opérateur x | 33,5 | 40 | 3 | 8 | signe de multiplication entre les graphiques |
| Graphique ARPC | 36,5 | 26 | 28 | 40 | ARPC en k€ par client |
| Opérateur = | 65 | 40 | 3 | 8 | signe d'égalité |
| Graphique CA | 68 | 26 | 27,5 | 40 | CA en M€, résultat de l'équation |
| Décomposition | 4,5 | 68 | 91 | 20 | tableau : variation du CA, effet clients, effet ARPC, effet croisé, en M€ et en % |
| Pied | 4,5 | 91,5 | 91 | 4 | méthode de calcul de l'effet croisé, source, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Clients | nombre par période, début, fin et moyen | oui |
| ARPC | CA divisé par clients moyens, unité claire | oui |
| CA | M€, rapproché de la compta | oui |
| Définition de client | actif, payant, contrat en cours | oui |
| Clients sans revenu | essais gratuits à exclure | oui |
| Effet croisé | méthode (variation clients x variation ARPC) | oui |

Contrôle : clients moyens x ARPC = CA, au chiffre près.

## Titre-type

« La croissance de **+3,1 M€** (+29 %) vient pour près de **2/3** de l'ARPC (**+18 %**), pour 1/3 de
**+9 %** de clients, le reste en effet croisé » (chiffres fictifs). Pas « Clients et ARPC ».

## Pièges

- Utiliser les clients de fin de période pour calculer l'ARPC : biais avec forte croissance, prendre la moyenne.
- Clients gratuits dans le dénominateur : l'ARPC s'effondre sans raison réelle.
- Effet croisé passé sous silence ; il peut peser plus que l'un des deux effets.
- Moyenne trompeuse si quelques gros clients tirent l'ARPC : donner aussi la médiane.
- Axes tronqués qui font exagérer l'une des pentes ; chaque graphique part de zéro.

## Dense mais lisible

Trois graphiques de même hauteur et de même couleur d'accent, signes `x` et `=` entre
eux, tableau d'effets en bas. Les années sont alignées sur la même verticale.

Voisins : [pont-par-driver](pont-par-driver.md), [segmentation-base-clients](segmentation-base-clients.md).
