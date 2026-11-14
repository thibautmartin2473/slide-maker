---
tags: [marche, etude-de-marche, tam, methode, arbre, quantitatif, dense, im, pitch, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Sizing method & driver tree (méthode de calcul de la taille)
famille: Conseil
question: « Comment la taille du marché est-elle calculée, et de quelles hypothèses dépend-elle ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et des fiches fiche-methode et arbre-resolution
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: C03
extrait_le: 2026-10-29
---

# Sizing method & driver tree

**Répond à :** un chiffre de marché sans méthode n'est pas crédible. Le lecteur veut
voir la **formule** (par exemple nombre de clients x taux d'équipement x prix) et
la valeur de chaque facteur, avec sa source. C'est la slide qui permet de contester
une hypothèse précise plutôt que le total.

**Comparaison traitée :** décomposition multiplicative du marché en drivers.
**Graphique natif :** arbre en formes natives (rectangles et connecteurs), signes
x et + écrits dans des pastilles ; à droite, un tableau natif des hypothèses. Pas de
type de graphique dédié.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | taille obtenue et driver qui pèse le plus |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | formule en toutes lettres, année, unité |
| Arbre | 4,5 | 26 | 62 | 58 | racine à gauche (marché), 2 à 3 niveaux, valeur dans chaque noeud |
| Tableau d'hypothèses | 68 | 26 | 27,5 | 58 | driver, valeur, source, confiance (public, déclaré, estimé) |
| Marque de sensibilité | (dans l'arbre) | | | | pastille sur les 2 drivers qui font le plus varier le total |
| Pied | 4,5 | 91,5 | 91 | 4 | sources, date, mention E pour les valeurs estimées |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Formule | produit et somme de drivers, écrite | oui |
| Driver | nom, valeur, unité, année | oui |
| Source | numéro renvoyant au pied | oui |
| Confiance | public, déclaré, estimé | oui |
| Sensibilité | variation du total sur la fourchette plausible (bas, haut) de chaque driver ; un ±10 % uniforme ne classe rien, car dans un produit chaque driver pèse pareil | non, recommandé |
| Résultat | produit des feuilles, à boucler avec la slide de taille | oui |

## Titre-type

« Le marché atteint **1,2 Md€** (exemple fictif) ; le taux d'équipement, seule hypothèse
non publique, le fait varier de **0,8 à 1,6 Md€** sur sa fourchette plausible ».

## Pièges

- Arbre dont le produit des feuilles ne redonne pas le total affiché.
- Drivers non indépendants (population et nombre de clients) comptés deux fois.
- Unités mélangées dans un même arbre (milliers et millions).
- Hypothèse clé cachée dans le pied au lieu d'être marquée sur l'arbre.

## Dense mais lisible

Trois niveaux maximum, une couleur pour les données publiques, une pour les
estimations, avec le mot écrit. Voir [fiche méthode](fiche-methode.md) pour la mise
en forme d'une méthode et [taille bottom-up](taille-bottom-up.md) pour son usage.
