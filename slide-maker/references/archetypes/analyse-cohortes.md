---
tags: [cohortes, retention, churn, saas, grille, heatmap, quantitatif, dense, tableau, croissance]
maisons: [derive-du-nom-non-observe]
archetype: Cohort analysis (rétention par cohorte)
famille: Conseil
question: « Les clients acquis à chaque période restent-ils, et la qualité de l'acquisition s'améliore-t-elle ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance et de la lecture classique d'un triangle de cohortes
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B06
extrait_le: 2026-10-29
---

# Cohort analysis

**Répond à :** un investisseur veut savoir si la croissance est **durable** : un
euro de revenu acquis aujourd'hui sera-t-il encore là dans douze mois ? Le triangle
de cohortes sépare l'effet « nouveaux clients » de l'effet « clients restés ».

**Comparaison traitée :** la même mesure (clients ou revenu restant) pour chaque
cohorte d'acquisition, à âge égal. **Graphique natif :** une grille (`addTable`) à
fonds en dégradé d'une seule teinte, plus des courbes de rétention
(`addChart` line, 2 ou 3 cohortes clés). Le dégradé ne code que l'intensité.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | rétention à 12 mois et sa tendance entre cohortes |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | mesure (revenu ou clients), pas (trimestre), période couverte |
| Grille | 4,5 | 26 | 58 | 60 | lignes = cohortes (plus ancienne en haut), colonnes = âge (T0, T1...) ; 1re colonne : taille initiale ; dernière ligne : moyenne pondérée |
| Courbes | 64 | 26 | 31,5 | 34 | rétention de 2 ou 3 cohortes contre la moyenne, axe en % |
| Panneau de lecture | 64 | 62 | 31,5 | 24 | 3 puces à tête grasse : tendance, cohorte atypique, effet sur la valeur |
| Pied | 4,5 | 91,5 | 91 | 4 | définition de cohorte et de « rétention », source, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Cohorte | période d'acquisition (T1 2024...) | oui |
| Taille initiale | clients ou revenu à T0, en unité | oui |
| Restant par âge | % de T0, une valeur par âge observé | oui |
| Définition | « actif » ou « payant », écrite | oui |
| Pas | mois ou trimestre, identique partout | oui |
| Revenu de réexpansion | si NRR affiché, le dire | si NRR |

Le triangle est **tronqué par construction** : une cellule absente est vide, jamais
zéro. Les cohortes de moins de 30 clients sont signalées (n petit).

## Titre-type

« La rétention à 12 mois passe de **71 % à 84 %** entre les cohortes 2023 et 2025 :
la croissance se consolide » ; ou, dans l'autre sens, « la cohorte T2 2025 perd
**11 points** de plus que la moyenne ».

## Pièges

- Mélanger rétention de logos et rétention de revenu sans le dire.
- Un dégradé arc-en-ciel : une teinte, du clair (faible) au foncé (fort).
- Afficher 20 cohortes : regrouper par semestre au-delà de 12 lignes.
- Lire la moyenne simple au lieu de la moyenne pondérée par la taille.
- Cohorte récente comparée à une ancienne sur un âge qu'elle n'a pas atteint.

## Dense mais lisible

Valeur écrite dans chaque cellule (pas de lecture à l'oeil seul), dégradé d'une
seule teinte, la **diagonale du présent** soulignée (ce qui est observé aujourd'hui),
une courbe de comparaison plutôt que vingt.

## Preuve

Rendu de démonstration, données fictives.
