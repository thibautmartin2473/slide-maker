---
tags: [marche, etude-de-marche, tam, penetration, segmentation, barres, quantitatif, dense, croissance, pitch]
maisons: [derive-du-nom-non-observe]
archetype: Penetration by segment (part déjà adressée, part restante)
famille: Conseil
question: « Quelle part de chaque segment est déjà équipée, et quelle marge reste-t-il ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche barre-eclatee
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: C11
extrait_le: 2026-10-29
---

# Penetration by segment

**Répond à :** un marché de 1 Md€ à 80 % de pénétration ne se vend pas comme un
marché à 15 %. Le lecteur veut, segment par segment, la part déjà équipée, la part
restante et la raison de cette part restante (non adressable, ou simplement pas
encore vendue).

**Comparaison traitée :** pour chaque segment, déjà adressé contre restant. **Graphique
natif :** barres horizontales empilées à 100 % (`addChart` type bar, percentStacked) :
équipé (plein), restant adressable (aplat clair), restant non adressable (gris).
Le tri se fait par pénétration croissante pour faire monter les segments à potentiel.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | segment le moins pénétré et valeur du reste à équiper |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | définition de la pénétration, année |
| Barres à 100 % | 4,5 | 26 | 58 | 58 | 5 à 8 segments, pourcentage dans chaque tranche |
| Colonne « taille » | 63 | 26 | 12 | 58 | taille du segment en M€, alignée ligne à ligne |
| Colonne « reste en M€ » | 76 | 26 | 19,5 | 58 | taille x part restante adressable, total en pied |
| Pied | 4,5 | 91,5 | 91 | 4 | formule de pénétration, sources, E |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Segment | nom, mêmes segments que la slide de taille | oui |
| Pénétration | % équipé, définition (en clients ou en valeur) | oui |
| Restant non adressable | % et motif (hors périmètre, contrainte) | oui |
| Taille du segment | valeur, année, unité | oui |
| Valeur du restant | taille x (1 - pénétration - restant non adressable), E | oui |
| Statut de la donnée | public, déclaré, estimé | oui |

## Titre-type

« Les entreprises de taille intermédiaire ne sont équipées qu'à **22 %** (exemple
fictif) : le reste adressable représente 340 M€, soit deux fois celui des grands comptes ».

## Pièges

- Pénétration en nombre de clients comparée à une pénétration en valeur.
- Dénominateur flou (équipés sur quoi ?) : écrire la base sous le titre.
- Restant considéré comme tout adressable, sans retrancher les non-clients structurels.
- Segments qui ne correspondent pas à ceux de la slide de taille.

## Dense mais lisible

Les trois teintes ont chacune leur mot dans la légende ; seules les valeurs
supérieures à 5 % s'écrivent dans la barre. Voir
[pont headroom et whitespace](pont-headroom-whitespace.md) pour traduire le restant en
potentiel, et [taille par segment](taille-par-segment.md).
