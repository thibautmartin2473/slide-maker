---
tags: [marche, etude-de-marche, croissance, pont, cascade, volume-prix-mix, quantitatif, dense, valorisation, board]
maisons: [derive-du-nom-non-observe]
archetype: Growth driver decomposition (volume, prix, mix)
famille: Conseil
question: "« Qu'est-ce qui explique la croissance du marché : plus de clients, des prix plus élevés, ou un mix différent ? »"
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche pont-par-driver
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: C08
extrait_le: 2026-10-29
---

# Growth driver decomposition

**Répond à :** deux marchés qui croissent de 8 % par an ne se valent pas : l'un par
des volumes durables, l'autre par des hausses de prix qui s'épuisent. La
décomposition rend la qualité de la croissance lisible, ce qui compte pour un
multiple de valorisation.

**Comparaison traitée :** écart entre la taille de départ et la taille d'arrivée,
expliqué par des contributions signées. **Graphique natif :** cascade en barres
empilées à base invisible (`addChart` type bar, stacked) : départ (plein), marches
volume, prix, mix, nouveaux usages (vert pour la hausse, rouge pour la baisse, avec
les signes + et - écrits), arrivée (plein). Voir [bridge](bridge.md) et
[pont par driver](pont-par-driver.md) pour la mécanique.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | part de la croissance due au volume et au prix |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | marché en M€, années de départ et d'arrivée |
| Cascade | 4,5 | 26 | 66 | 58 | départ, 3 à 5 marches signées, arrivée ; valeur et % de la croissance sur chaque marche |
| Rappel de méthode | 4,5 | 84 | 66 | 5 | variation = volume + prix + mix (+ nouveaux usages), effet croisé nommé |
| Panneau de lecture | 73 | 26 | 22,5 | 58 | pour chaque marche : cause, durabilité (durable, ponctuelle), preuve |
| Pied | 4,5 | 91,5 | 91 | 4 | sources, convention de calcul, E |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Taille de départ et d'arrivée | valeur, année, unité unique | oui |
| Contribution par driver | valeur signée, en M€ et en points de croissance | oui |
| Définition du driver | volume, prix, mix, nouveaux usages | oui |
| Durabilité | durable, ponctuelle, avec motif | oui |
| Bouclage | départ + somme des marches = arrivée | oui, vérifié |

## Titre-type

« **Les deux tiers** de la croissance de 2021 à 2026 viennent des volumes ; la hausse
des prix n'en explique que 20 % » (exemple fictif).

## Pièges

- Effets croisés (volume x prix) rangés dans le mix sans le dire.
- Cascade qui ne boucle pas : écart d'arrondi masqué dans une marche.
- Plus de cinq marches : regrouper les petites en « autres ».
- Prix mesuré en valeur nominale sur une période d'inflation, sans le préciser.

## Dense mais lisible

Les marches sont triées par taille décroissante après le départ ; la durabilité se
lit en un mot écrit sous chaque marche. Voir [croissance du marché](croissance-marche.md)
pour la trajectoire d'ensemble.

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- Cinq marches, dont l'**effet croisé (volume x prix) nommé à part** et un mix négatif : la cascade boucle (3,1 + 0,90 + 0,30 + 0,25 + 0,10 - 0,05 = 4,6).
- Sous chaque marche, **points de croissance arrondis** (ici 29, 10, 8, 3, moins 2 : somme 48, égale au total) et un mot de durabilité ; l'effet croisé est qualifié « méthode », non durable ni ponctuel. Un contrôle refuse tout arrondi qui ne boucle pas.
- Axe tronqué (2,5 Md€) dit sous le graphique ; marche de 0,05 Md€ encore lisible grâce à l'étiquette signée.
- Prix en valeur nominale sans retraitement de l'inflation : écrit dans les notes (piège de la fiche confirmé).
