---
tags: [concurrence, comparables, tableau, scoring, grille, qualitatif, dense, im, pitch, matrice]
maisons: [derive-du-nom-non-observe]
archetype: Strengths & weaknesses grid (forces et faiblesses par acteur)
famille: Conseil
question: « Sur quels critères chaque concurrent est-il fort ou faible, et où est notre avantage ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche scoring-multicritere
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: D04
extrait_le: 2026-10-29
---

# Strengths & weaknesses grid

**Répond à :** une fois les faits posés (voir [tableau des concurrents](tableau-concurrents.md)),
le lecteur attend le **jugement** : sur quels critères d'achat chaque acteur est
supérieur ou inférieur, et où l'entreprise se distingue. La grille rend ce jugement
vérifiable.

**Comparaison traitée :** acteurs contre critères, avec une note par cellule.
**Graphique natif :** tableau natif (`addTable`) avec une pastille d'évaluation par
cellule (forte, moyenne, faible : toujours le mot, ou les abréviations Fo, Mo, Fa, à côté de la
couleur) et, à droite, une colonne de score global ; les critères sont pondérés, le
poids s'écrit sous chaque en-tête. Voir [scoring multicritère](scoring-multicritere.md).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | critère où l'entreprise est la meilleure, critère où elle est en retard |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | échelle de notation, source des évaluations |
| Grille | 4,5 | 26 | 66 | 58 | 5 à 7 acteurs en lignes, 6 à 8 critères en colonnes (7 % de large chacun : en-têtes de 2 lignes de 10 caractères, jamais un mot coupé), poids sous l'en-tête, dernière colonne = score global et rang entre parenthèses |
| Panneau « ce que cela change » | 72 | 26 | 23,5 | 58 | 3 à 4 puces à tête en gras, numérotées comme les pastilles posées sur les en-têtes (vérifié au rendu du 2026-10-29 : 10,5 % de large était trop étroit) |
| Pied | 4,5 | 91,5 | 91 | 4 | critères définis, preuves, qui a noté |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Critère | nom, définition, poids (somme = 100 %) | oui |
| Note par cellule | échelle de 1 à 3 ou 1 à 5, définie | oui |
| Preuve | élément vérifiable par note extrême | oui pour les notes 1 et max |
| Évaluateur | équipe, clients interrogés, tiers | oui |
| Score global | somme pondérée, recalculable | oui |

## Titre-type

« Nous sommes **les meilleurs sur 3 critères sur 7** (exemple fictif), mais derrière
les deux leaders sur la couverture géographique, critère pondéré à 25 % ».

## Pièges

- Notes auto-attribuées sans preuve : le lecteur y lit de la complaisance.
- Poids choisis après les notes pour faire gagner l'entreprise.
- Pastilles seulement colorées : illisible en noir et blanc, d'où le mot écrit.
- Critères qui comptent dans l'opinion de l'équipe mais pas dans l'achat du client.

## Dense mais lisible

L'entreprise étudiée en première ligne sur fond fantôme ; couleurs limitées à trois ;
poids visibles. Au-delà de sept critères, scinder en deux grilles.

## Preuve

Rendu de démonstration (données fictives, forme dense), 2 tours de correction.
