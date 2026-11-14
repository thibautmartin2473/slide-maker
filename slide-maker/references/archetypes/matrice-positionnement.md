---
tags: [concurrence, positionnement, matrice, bulles, nuage, strategie, dense, pitch, im, etude-de-marche]
maisons: [derive-du-nom-non-observe]
archetype: Positioning matrix (acteurs sur deux axes)
famille: Conseil
question: « Où chaque acteur se situe-t-il sur les deux dimensions qui comptent pour le client ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche matrice-priorisation
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: D06
extrait_le: 2026-10-29
---

# Positioning matrix

**Répond à :** le lecteur veut voir d'un coup d'oeil les groupes d'acteurs, les
espaces vides et la place de l'entreprise. C'est l'exhibit le plus cité des études
de marché, et le plus souvent dessiné à la main ; la rigueur tient aux **axes
mesurables**.

**Comparaison traitée :** position relative de chaque acteur sur deux axes ; taille
éventuelle en troisième dimension. **Graphique natif :** nuage de points ou de bulles
(`addChart` type scatter ou bubble) avec axes bornés et gradués, étiquettes de
valeur remplacées par des noms posés en formes natives ; quadrants nommés en fonds
natifs derrière le graphique. Voir [matrice de priorisation](matrice-priorisation.md).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | l'espace vide ou le groupe dominant, avec la place de l'entreprise |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | définition des deux axes, source de la notation |
| Matrice | 4,5 | 26 | 62 | 58 | 8 à 14 acteurs, quadrants nommés, zone vide encadrée en pointillé |
| Légende | 4,5 | 84 | 62 | 5 | surface = taille (CA), couleur = archétype |
| Panneau « lecture » | 69 | 26 | 26,5 | 58 | trois constats : groupe dominant, espace vide, risque de rapprochement |
| Pied | 4,5 | 91,5 | 91 | 4 | méthode de notation des axes, sources, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Axe x et axe y | nom, unité ou échelle, sens de lecture | oui |
| Position | valeur de chaque acteur sur chaque axe, avec source | oui |
| Taille | CA ou clients, unité | non |
| Archétype | pour la couleur, voir [archétypes](archetypes-concurrents.md) | non |
| Zone vide | définition de la zone et motif possible (pas de demande ou à prendre) | recommandé |

## Titre-type

« **Aucun acteur** ne combine prix bas et couverture complète (exemple fictif) :
l'espace est libre, mais deux entrants s'en approchent ».

## Pièges

- Axes subjectifs (« innovation », « qualité ») sans échelle ni critère.
- Axes corrélés : tous les acteurs sont alignés sur la diagonale, l'exhibit n'apprend rien.
- Entreprise placée au meilleur endroit sans justification chiffrée.
- Espace vide présenté comme une opportunité alors qu'il n'y a peut-être pas de demande.

## Dense mais lisible

Deux axes, quatre zones, un maximum de quatorze acteurs ; les noms ne se chevauchent
pas (décaler avec un trait de rappel). Axes en 9 pt, noms en 10 pt.

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- Le **seuil de la zone vide est chiffré dans le titre** (prix sous 50 k€, couverture de plus de 85 %), marqué (E) car choisi par l'équipe, et le script refuse tout acteur placé dans la zone.
- La **corrélation des deux axes est calculée et écrite** dans les notes (r = 0,83 sur les dix acteurs d'exemple) : un axe corrélé n'invalide pas l'exhibit si la zone d'intérêt est le coin hors diagonale, mais le lecteur doit le savoir.
- Couleur = archétype (suites complètes, spécialistes, entrée de gamme) et un anneau pour l'entreprise cible ; surface = CA total.
- L'espace vide n'est **pas présenté comme une preuve de demande** : le panneau et la conclusion disent ce qui reste à mesurer (combien d'acheteurs exigent plus de 85 % à moins de 50 k€).
- Les prix moyens des groupes (102 k€ contre 61 k€) sont calculés par le script et non écrits à la main.
