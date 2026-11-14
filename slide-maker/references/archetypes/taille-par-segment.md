---
tags: [marche, etude-de-marche, tam, segmentation, mekko, barres, quantitatif, dense, croissance, pitch]
maisons: [derive-du-nom-non-observe]
archetype: Market size by segment (répartition de la taille par segment)
famille: Conseil
question: « Comment la taille du marché se répartit-elle entre segments, et comment cela évolue-t-il ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et des fiches mekko et barre-eclatee
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: C05
extrait_le: 2026-10-29
---

# Market size by segment

**Répond à :** « où est l'argent dans ce marché ? » Le total ne suffit pas : le
lecteur veut le poids de chaque segment aujourd'hui et la bascule attendue à
l'horizon (le segment qui double, celui qui stagne).

**Comparaison traitée :** composition du total, à une date et dans le temps.
**Graphique natif :** barres empilées (`addChart` type bar, stacked) sur 3 à 5
années, avec la part de chaque segment dans l'étiquette ; si la croissance par segment
doit se lire en même temps, variante [Mekko](mekko.md) (largeur = taille du segment,
hauteur = sous-segments), à construire en formes natives.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | segment dominant et segment qui gagne du poids |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | marché en M€, années, périmètre |
| Barres empilées | 4,5 | 26 | 66 | 58 | une barre par année, segments dans le même ordre, total au-dessus |
| Bandeau TCAM | 4,5 | 84 | 66 | 5 | TCAM de chaque segment aligné sous sa couleur |
| Panneau de lecture | 73 | 26 | 22,5 | 58 | trois constats chiffrés, un par segment qui compte |
| Pied | 4,5 | 91,5 | 91 | 4 | sources, E pour les années projetées |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Segment | nom, définition, ordre fixe | oui |
| Taille par année | valeur, unité unique | oui |
| Années | passé (réel) et projection (E), frontière marquée | oui |
| TCAM | % par segment et total, période écrite | oui |
| Somme | segments = total, à contrôler | oui |

## Titre-type

« Le segment **entreprises de taille intermédiaire** passe de 31 % à 44 % du marché
en cinq ans (exemple fictif), au détriment des grands comptes ».

## Pièges

- Plus de six segments : les couleurs deviennent indiscernables, regrouper en « autres ».
- Ordre des segments qui change d'une barre à l'autre.
- Projection tracée comme du réel : hachurer ou marquer E.
- Somme des étiquettes différente du total affiché à cause des arrondis.

## Dense mais lisible

Une teinte par segment, le plus gros au pied de la pile, les valeurs dans les
barres seulement quand elles tiennent à 10 pt. Voir
[croissance du marché](croissance-marche.md) pour le total et
[taille par géographie](taille-par-geographie.md) pour l'autre découpage.
