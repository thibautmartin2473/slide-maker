---
tags: [arr, revenu-recurrent, saas, pont, waterfall, decomposition, churn, quantitatif, dense, levee-de-fonds, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: ARR evolution (évolution du revenu récurrent par cause)
famille: Conseil
question: "« Comment le revenu récurrent a-t-il varié, et par quelles causes : nouveaux clients, expansion, contraction, perte ? »"
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (reporting d'une entreprise à revenus récurrents, due diligence)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B01
extrait_le: 2026-10-29
---

# ARR evolution

**Répond à :** pour une entreprise à abonnements, le revenu récurrent annualisé (ARR)
est la grandeur que les investisseurs capitalisent. Le total ne suffit pas : ils
veulent savoir **ce qui le fait bouger** (acquisition, croissance chez les clients
existants, pertes).

**Comparaison traitée :** variation de l'ARR entre deux dates, décomposée en 4 causes
signées. **Graphique natif :** cascade trimestrielle ou annuelle, barres empilées à base
invisible (`addChart` bar stacked) : ARR de départ, new (vert), expansion (vert),
contraction (rouge), churn (rouge), ARR d'arrivée. Moves proches : `bridge-a-groupes`,
`serie-annotee`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | variation de l'ARR et cause dominante |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | définition de l'ARR, unité, période, devise constante ou non |
| Cascade | 4,5 | 26 | 66 | 52 | départ, 4 causes, arrivée ; valeurs signées au-dessus |
| Rangée de ratios | 4,5 | 79 | 66 | 8 | croissance de l'ARR, NRR, GRR, ratio new / churn sous la cascade |
| Panneau de lecture | 73,5 | 26 | 22 | 61 | 3 constats : qualité de la croissance, fragilité, dépendance au new |
| Pied | 4,5 | 91,5 | 91 | 4 | règles de comptabilisation de l'ARR, devise, source |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| ARR de départ et d'arrivée | M€ ou k€, à la même date de coupure | oui |
| New | ARR de clients nouveaux sur la période | oui |
| Expansion | hausse d'ARR chez les clients existants (upsell, prix) | oui |
| Contraction | baisse d'ARR sans départ du client | oui |
| Churn | ARR perdu par départ du client | oui |
| Règle d'ARR | contrats pluriannuels, engagements, usage variable (inclus ou non) | oui |

Contrôle : départ + new + expansion - contraction - churn = arrivée, au chiffre près.
Une conversion de devise ou un changement de définition est une ligne à part.
Ratios de la rangée, sur la même fenêtre : NRR = (départ + expansion - contraction - churn) / départ ;
GRR = (départ - contraction - churn) / départ ; new exclu des deux ; un ratio trimestriel est dit tel quel, jamais annualisé en silence.

## Titre-type

« L'ARR passe de **8,2 à 11,6 M€** (**+41 %**), porté à **60 %** des ajouts bruts par les nouveaux
clients, tandis que le churn en retire **0,9 M€** » (exemple fictif). Pas « Évolution de l'ARR ».

## Pièges

- ARR qui inclut des services ponctuels ou un usage variable non récurrent.
- Mélange de devises ou de dates de coupure entre départ et arrivée.
- Contraction comptée dans le churn (ou l'inverse) : les deux causes appellent des remèdes différents.
- Cascade qui ne boucle pas, cachée par une ligne « Autres » volumineuse.
- Un seul pont sans tendance : donner les ratios de la rangée sur 4 trimestres au moins.

## Dense mais lisible

Valeur signée sur chaque marche, ratios en rangée sous le graphique, un panneau de
lecture. Vert et rouge toujours doublés du signe `+` ou `-`.

Voisins : [retention-churn](retention-churn.md), [analyse-cohortes](analyse-cohortes.md),
[pont-par-driver](pont-par-driver.md).

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- Le **vert et rouge** de la fiche se lit dans la palette du thème : gains en `pos`, pertes en `neg`, doublés du signe écrit.
- Ratios en rangée sous la cascade (croissance, NRR, GRR, new / churn) **plus** un tableau de quatre trimestres à droite : les quatre trimestres doivent boucler sur les quatre causes annuelles (le script refuse sinon) ; NRR et GRR trimestriels sont dits « non annualisés ».
- Cascade à axe tronqué (ARR de départ 8,2 sur un axe démarrant à 6) : tronquer et le dire sous le graphique ; les causes restent lisibles (contraction de 0,4 sur 10 pt).
- Le titre porte la part des **ajouts bruts** due au new (new / (new + expansion)), pas une part de la variation nette : la définition est écrite dans le registre (hypothèse).
