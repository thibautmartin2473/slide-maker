---
tags: [segmentation, clients, mekko, arpc, retention, marimekko, quantitatif, dense, due-diligence, etude-de-marche, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Customer base segmentation (segmentation de la base clients)
famille: Conseil
question: « Quels segments de clients pèsent le plus, valent le plus et restent le plus longtemps ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (analyse de la base clients d'une due diligence commerciale)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B05
extrait_le: 2026-10-29
---

# Customer base segmentation

**Répond à :** tous les clients ne se valent pas. L'exhibit montre pour chaque
segment sa **taille** (nombre de clients), sa **valeur** (revenu moyen) et sa
**fidélité** (rétention), et dit où se trouve la base de valeur.

**Comparaison traitée :** part et valeur de chaque segment en même temps : la largeur
dit le nombre de clients, la hauteur dit le revenu moyen, l'aire dit le CA. **Graphique
natif :** diagramme à largeur variable (variante du Marimekko : les hauteurs ne totalisent pas 100 %, l'aire
lit le CA), à simuler par formes (rectangles dimensionnés), ou à défaut barres groupées (`addChart` bar) avec tableau à côté. Voir le
[Mekko](mekko.md).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | segment qui concentre la valeur et sa part |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | critère de segmentation, CA en M€, exercice, périmètre |
| Mekko | 4,5 | 26 | 58 | 58 | largeur = % des clients, hauteur = ARPC relatif, aire = CA ; étiquette de CA dans l'aire |
| Tableau des segments | 64 | 26 | 31,5 | 40 | par segment : clients, ARPC, rétention nette, ancienneté |
| Panneau de lecture | 64 | 67 | 31,5 | 20 | segment à protéger, segment à développer, segment à arbitrer |
| Pied | 4,5 | 91,5 | 91 | 4 | règle de rattachement d'un client à un segment, source |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Critère de segmentation | taille, secteur, zone, canal, un seul à la fois | oui |
| Clients par segment | nombre et % du total | oui |
| CA par segment | M€, somme égale au CA consolidé | oui |
| ARPC | CA divisé par clients moyens | oui |
| Rétention | en valeur et en logos, par segment | oui |
| Coût d'acquisition | CAC par segment si disponible | conseillé |

Un client rattaché à un seul segment ; règle écrite quand il pourrait en relever de plusieurs.

## Titre-type

« Les **entreprises de plus de 500 salariés** sont **12 %** des clients et **47 %** du CA, avec
une rétention nette de **112 %** » (chiffres fictifs). Pas « Segmentation de la base ».

## Pièges

- Segments qui se recoupent (taille et secteur mélangés) : l'aire perd son sens.
- Plus de 6 segments : le Mekko devient illisible, regrouper.
- Segmentation faite au gré de la donnée disponible plutôt que du critère de décision (qui change l'action commerciale).
- Rétention d'un segment calculée sur un très petit effectif.
- Oublier de dire si l'ARPC est annuel ou mensuel.

## Dense mais lisible

Aire en accent pour le segment moteur, gris pour les autres, valeur de CA écrite dans
chaque rectangle, tableau à droite pour les mesures qui ne tiennent pas dans l'aire.

Voisins : [clients-fois-arpc](clients-fois-arpc.md), [retention-churn](retention-churn.md),
[concentration-clients](concentration-clients.md).
