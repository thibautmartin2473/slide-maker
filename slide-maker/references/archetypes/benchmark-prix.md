---
tags: [concurrence, prix, benchmark, barres, plage, quantitatif, dense, pitch, etude-de-marche, valeur]
maisons: [derive-du-nom-non-observe]
archetype: Price benchmark (prix de chaque offre à périmètre égal)
famille: Conseil
question: « Où se situent nos prix par rapport à ceux des concurrents, à périmètre comparable ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche plage-min-max
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: D11
extrait_le: 2026-10-29
---

# Price benchmark

**Répond à :** le prix est le premier critère que le lecteur croit comprendre et le
plus souvent mal comparé : les offres n'incluent pas la même chose. L'exhibit montre
une **plage de prix** par offre, ramenée à une unité commune, avec ce que le prix
inclut.

**Comparaison traitée :** prix minimum et maximum de chaque offre, à périmètre
égal. **Graphique natif :** barres flottantes (`addChart` type bar, stacked, avec
série de base invisible = prix minimum, série visible = écart minimum-maximum) ; un
marqueur pour le prix le plus courant ; une ligne de référence verticale pour notre
prix. Voir [plage min-max](plage-min-max.md).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | positionnement de notre prix dans la plage du marché |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | unité commune (par utilisateur et par an, par site), devise, année, hors taxes |
| Barres flottantes | 4,5 | 26 | 62 | 58 | 6 à 10 offres, tri par prix médian, notre offre en accent |
| Colonne « inclus » | 67 | 26 | 28,5 | 58 | périmètre de chaque offre en quelques mots (modules, support, volume) |
| Ligne de lecture | 4,5 | 84 | 62 | 5 | écart de notre prix à la médiane du marché, en % |
| Pied | 4,5 | 91,5 | 91 | 4 | sources (grille publique, devis, entretiens), date de relevé |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Offre | acteur et formule | oui |
| Prix minimum et maximum | valeur, unité commune, devise | oui |
| Périmètre | ce qui est inclus (volume, modules, support) | oui |
| Prix courant | médiane ou valeur la plus fréquente des prix relevés, pour le marqueur et le tri | oui |
| Type de prix | public, devis, estimé (E) | oui |
| Date de relevé | jour | oui |
| Notre prix | valeur et position dans la plage | oui |

## Titre-type

« Notre prix se situe **12 % sous la médiane** du marché (exemple fictif) pour un
périmètre équivalent, mais 30 % au-dessus des offres d'entrée de gamme ».

## Pièges

- Comparer des prix par utilisateur à des prix par site sans conversion.
- Prix publics de catalogue pris pour des prix réellement payés (remises en vente).
- Périmètres différents ignorés : l'offre la moins chère n'inclut pas le support.
- Prix relevés à des dates différentes, ou avec et sans taxes.

## Dense mais lisible

Barres triées, périmètre écrit à droite en une ligne, accent unique sur notre
offre. Si le périmètre ne peut pas être aligné, le dire en sous-titre et passer
en classes (entrée, standard, premium).

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- **Barres flottantes natives** : série de base sans remplissage (pptxgenjs ne sait pas le faire, le XML est corrigé après écriture), puis deux segments (du prix le plus bas au prix courant, du prix courant au tarif de liste) ; le prix courant est un trait foncé. Orvane en corail sur ses deux segments, ligne en surbrillance.
- Les étiquettes de minimum et de maximum ont un **fond plein** : sans lui, les repères verticaux (prix d'Orvane, médiane) les barrent.
- La colonne « inclus » de la fiche est remplacée par la **couverture fonctionnelle en %** et le **type de prix** (public, devis, estimé). Un périmètre en texte libre ne se compare pas ; un pourcentage sur la même grille que la page de positionnement, si.
- **Écart ajusté au périmètre** : prix par point de couverture contre la médiane des autres offres. L'écart brut de 29 % tombe à 18 % : c'est ce chiffre, pas le brut, qui dit s'il y a de la place pour monter les prix. La médiane exclut l'offre de l'émetteur.
- Remises réelles inconnues, dites en panneau : la plage va du prix le plus bas relevé au tarif de liste.
