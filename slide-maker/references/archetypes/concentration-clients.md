---
tags: [concentration, clients, pareto, risque, diagnostic, quantitatif, dense, histogramme, im, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Customer concentration (dépendance aux plus gros clients)
famille: Conseil
question: « De combien de clients l'entreprise dépend-elle, et quel risque cela crée-t-il ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (due diligence commerciale)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B09
extrait_le: 2026-10-29
---

# Customer concentration

**Répond à :** en levée de fonds ou en due diligence, la question est « que se
passe-t-il si le premier client part ? ». L'exhibit chiffre la dépendance et la
**solidité** des plus gros comptes.

**Comparaison traitée :** poids de chaque client dans le CA, cumulé. **Graphique
natif :** Pareto = barres décroissantes (top 10 à 15 clients) et courbe de cumul en
combo natif (`addChart` avec deux types, axe secondaire) ; à défaut, cumul en
pastilles sous les barres (move `pastilles-au-pas`).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | part du top 5 et plus gros client |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | CA en M€ ou % du CA, exercice, périmètre |
| Pareto | 4,5 | 26 | 60 | 58 | barres décroissantes ; premier client en accent ; courbe de cumul avec repères 50 % et 80 % |
| Table au pas | 4,5 | 76 | 60 | 10 | sous chaque barre : ancienneté, durée du contrat restante, % récurrent |
| Tuiles de risque | 66 | 26 | 29,5 | 24 | top 1, top 5, top 10 en %, avec seuils d'alerte |
| Panneau de lecture | 66 | 52 | 29,5 | 34 | 3 puces : solidité des comptes, évolution sur 3 ans, plan de diversification |
| Pied | 4,5 | 91,5 | 91 | 4 | définition de « client » (groupe ou entité), source |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| CA par client | M€, exercice N, idéalement N-1 et N-2 | oui |
| Total | = CA consolidé, rapprochement écrit | oui |
| Définition de client | entité juridique ou groupe | oui |
| Contrat | durée restante, clause de sortie | conseillé |
| Nature | récurrent ou ponctuel | conseillé |
| Anonymisation | « Client A » si confidentiel, ordre conservé | oui si confidentiel |

## Titre-type

« Les **5 premiers clients** font **54 %** du CA, et le premier **19 %**, sous contrat
jusqu'en 2028 » : le chiffre ET la solidité, pas « Concentration clients ».

## Pièges

- Clients d'un même groupe comptés séparément (la dépendance réelle est plus forte).
- Concentration montrée sans durée de contrat : un client à 25 % sous contrat de 5 ans
  n'est pas un client à 25 % en renouvellement annuel.
- Seuils d'alerte non définis : écrire d'avance (plus de 10 % pour un seul client).
- Camembert de 30 parts.

## Dense mais lisible

Une seule barre en accent (le premier), cumul visible, une ligne de **solidité** sous
chaque barre. Trois tuiles de risque suffisent, pas dix.
