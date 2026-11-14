---
tags: [concurrence, parts-de-marche, croissance, nuage, barres, mekko, quantitatif, dense, etude-de-marche, pitch]
maisons: [derive-du-nom-non-observe]
archetype: Market share & momentum (poids et dynamique de chaque acteur)
famille: Conseil
question: « Qui pèse le plus dans le marché, et qui gagne ou perd du terrain ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche mekko
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: D05
extrait_le: 2026-10-29
---

# Market share & momentum

**Répond à :** la part de marché d'aujourd'hui dit le poids ; la variation de part dit
la dynamique. Un acteur à 12 % qui gagne 3 points en deux ans inquiète plus que le
leader à 30 % stable. Le lecteur lit les deux ensemble.

**Comparaison traitée :** part actuelle et variation sur la période, par acteur.
**Graphique natif :** nuage de bulles (`addChart` type bubble) : x = part de marché
actuelle (%), y = variation de part en points sur trois ans, surface = CA total de l'acteur (pas son CA sur ce marché, déjà porté par l'axe x) ; ligne de
référence à zéro de variation. Variante : barres horizontales triées par part avec,
à droite, une colonne de variation en texte (flèche écrite « hausse » ou « baisse »).
Voir [Mekko](mekko.md) quand la part se lit dans un marché segmenté.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | acteur qui gagne le plus de terrain, part cumulée des cinq premiers |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | base de calcul des parts (valeur ou volume), période |
| Nuage de bulles | 4,5 | 26 | 62 | 58 | 8 à 12 acteurs, noms des 5 plus gros, ligne à zéro |
| Légende de lecture | 4,5 | 84 | 62 | 5 | surface = CA total de l'acteur ; axes définis |
| Tableau de rang | 69 | 26 | 26,5 | 58 | rang, acteur, part, variation en points |
| Pied | 4,5 | 91,5 | 91 | 4 | sources, E pour les parts estimées |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Acteur | nom | oui |
| Part de marché | %, base (valeur ou volume), année | oui |
| Part précédente | %, même base, année de départ | oui |
| Variation | points de pourcentage, jamais en % relatif | oui |
| CA total de l'acteur | valeur et unité (taille du groupe) | recommandé |
| Total du marché | pour contrôler la somme à 100 % | oui |

## Titre-type

« Les cinq premiers font **61 %** du marché (exemple fictif), mais c'est un acteur
à 9 % qui gagne le plus : plus 4 points en trois ans ».

## Pièges

- Variation en pourcentage relatif confondue avec des points de part.
- Parts calculées sur des bases différentes selon les acteurs (valeur, volume).
- Acteurs non cotés estimés sans mention E.
- Somme des parts supérieure à 100 % à cause du double compte des filiales.

## Dense mais lisible

Seuls les acteurs qui comptent sont nommés sur le nuage, le quadrant haut-droit
(gros et en hausse) reçoit l'accent. Voir
[matrice de positionnement](matrice-positionnement.md) pour un autre usage du nuage.

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- Le **graphique à bulles natif** exige trois corrections du XML après écriture (éléments d'axe de catégories refusés par PowerPoint, points vides retirés, `bubbleScale` posé)  ; à faire après l'écriture du fichier, le graphique reste éditable.
- Acteur cible à CA trop faible (74 M€ contre 3 900) : la bulle est presque invisible, un **anneau de repère** l'entoure plutôt que de fausser les surfaces.
- Grappe d'acteurs proches : étiquettes **sur trois rangées sous les bulles avec trait de rappel** ; zone « gagnent du terrain » teintée derrière le graphique, zone « perdent » nommée.
- Tableau de rang avec une ligne « Autres » (solde à 100 %, ici 12,9 % contre 14,9 %) : la somme des variations vaut zéro, contrôlée par le script.
- Le titre dit « cinq acteurs font 67 % », somme des parts 2025 des cinq premiers ; la variation est toujours en points, jamais en pourcentage relatif.
