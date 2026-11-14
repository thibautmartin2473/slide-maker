---
tags: [tam, marche, etude-de-marche, fourchette, valorisation, quantitatif, dense, board, barres-flottantes, recoupement]
maisons: [derive-du-nom-non-observe]
archetype: Market size triangulation (taille du marché par plusieurs méthodes)
famille: Conseil
question: « Quelle est la taille du marché, et à quel point peut-on s'y fier ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et du football field existant ; fiche relue et corrigée au rendu d'une preuve (2026-10-29, données fictives)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A08
extrait_le: 2026-10-29
---

# Market size triangulation

**Répond à :** une taille de marché issue d'une seule méthode est une opinion. Trois
méthodes indépendantes qui se recoupent sont une **preuve**. L'exhibit montre
l'accord (ou le désaccord) et la valeur retenue.

**Comparaison traitée :** une fourchette par méthode, sur un axe commun.
**Graphique natif :** barres horizontales flottantes (barres empilées, base
invisible) ; la structure est celle du [football field](football-field.md), sans
l'offre. Une ligne verticale marque la valeur retenue ; une zone claire marque le
recouvrement des méthodes (move `zone-focus`).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | zone de recouvrement et valeur retenue |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | taille du marché en Md€, année de référence |
| Colonne « méthode » | 4,5 | 26 | 22 | 56 | nom en gras, la formule de la méthode en une ligne grise ; une méthode de contrôle (donnée partagée) est dite « de contrôle » |
| Barres flottantes | 27 | 26 | 44 | 56 | bas, central (trait), haut ; zone de recoupement ombrée, **sur les seules méthodes indépendantes** ; trait pointillé de la valeur retenue derrière les barres ; méthode de contrôle en gris |
| Colonne « hypothèses clés » | 72 | 26 | 23,5 | 56 | 2 hypothèses sensibles par méthode, **avec leur effet chiffré** sur le résultat (± x Md€) |
| Bandeau de conclusion | 4,5 | 84 | 91 | 6 | valeur retenue (E), règle de choix, recoupement (E), écart entre valeurs centrales, confiance |
| Pied | 4,5 | 91,5 | 91 | 4 | sources, dates |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Méthode | top-down, bottom-up, déduite de la demande, source tierce | oui, 3 indépendantes minimum |
| Bas, central, haut | trois valeurs, même unité et année ; **bornes de scénarios** de la méthode, jamais un intervalle statistique (à écrire en note) | oui |
| Hypothèses sensibles | les deux qui bougent le plus le résultat, avec l'effet d'un écart donné (ex. ±5 000 entreprises = ±0,4 Md€) | oui |
| Indépendance | une méthode qui partage une donnée source avec une autre est **de contrôle** : affichée, mais hors recoupement | oui, par méthode |
| Recoupement | du plus haut des bornes basses au plus bas des bornes hautes, méthodes indépendantes seulement ; **vide = titre de divergence** | calculé |
| Valeur retenue | valeur, règle écrite (médiane des valeurs centrales par défaut) et appartenance au recoupement | oui |
| Écart entre centrales | (plus haute centrale − plus basse) / plus basse ; moins de 15 % = convergence | calculé |

Toutes les valeurs sont des estimations : suffixe « (E) » sur la valeur retenue et sur le
recoupement.

## Titre-type

« Trois méthodes indépendantes se recoupent entre **4,4 et 4,9 Md€** en 2025 ; nous
retenons **4,6 Md€** » (le recoupement, pas l'enveloppe des fourchettes ni la fourchette
d'une seule méthode) ; si elles divergent : « Les méthodes divergent de **60 %** : le
bottom-up est retenu, car il est le seul sourcé par des données de vente ».

## Pièges

- Trois méthodes qui partent de la même donnée : fausse triangulation. Une étude tierce qui s'appuie sur la même base qu'une méthode est une méthode **de contrôle** (grisée, hors recoupement), pas une troisième preuve.
- Fourchettes disjointes laissées sans explication (dire laquelle est écartée et pourquoi).
- Valeur retenue au milieu par réflexe : la retenir pour une raison écrite (médiane des centrales, ou la méthode la mieux sourcée).
- Années ou périmètres différents entre barres.
- Titre qui annonce la fourchette d'une seule méthode, ou l'enveloppe de toutes, comme si c'était le recoupement.
- Axe tronqué : les barres flottantes ne partent pas de zéro, l'écrire dans l'en-tête (« Md€ en 2025, axe de 3,6 à 5,6 »).
- Effet d'une hypothèse non chiffré : « le taux d'équipement est sensible » ne dit pas de combien.

## Dense mais lisible

Les hypothèses sensibles sont **à droite de la barre** qu'elles pilotent ; le
bandeau final donne un nombre, pas une fourchette de dix pages. Le désaccord, s'il
existe, est affiché et expliqué, pas gommé.

## Preuve rendue (données fictives)

Rendu de démonstration (données fictives), page 1 du deck de preuve :
graphique `addChart` natif en barres empilées horizontales (base invisible, une série par
type de méthode), zone de recoupement et trait central en formes. Le rendu a révélé quatre
écarts avec la fiche d'origine : le titre-type confondait fourchette d'une méthode et
recoupement ; une étude tierce sur la même base devait être de contrôle ; une valeur centrale
trop proche du bord du recoupement se lit mal (étiquette à gauche du trait) ; l'effet chiffré
des hypothèses tient dans 2 lignes par méthode.
