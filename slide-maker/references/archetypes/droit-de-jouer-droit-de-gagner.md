---
tags: [strategie, avantage-concurrentiel, scoring, tableau, pastilles, diagnostic, dense, board, levee-de-fonds, etude-de-marche]
maisons: [derive-du-nom-non-observe]
archetype: Right to play / right to win (droit de jouer, droit de gagner)
famille: Conseil
question: « Qu'est-ce qui permet à l'entreprise d'entrer sur ce marché, et qu'est-ce qui lui permet d'y gagner ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil en stratégie
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A09
extrait_le: 2026-10-29
---

# Right to play / right to win

**Répond à :** la thèse d'investissement ou la recommandation stratégique tient sur
deux questions distinctes. **Droit de jouer** : l'entreprise remplit-elle les
conditions pour être admise (licences, certifications, taille minimale, références) ?
**Droit de gagner** : qu'a-t-elle de plus que les autres pour prendre des parts ?

**Comparaison traitée :** critère par critère, la situation de l'entreprise face au
seuil requis (jouer) puis face aux concurrents (gagner). **Graphique natif :** deux
tableaux natifs (`addTable`) côte à côte ou superposés, pastilles de statut **avec le
mot écrit** (Acquis, Partiel, Absent). Move proche : `scoring-multicritere`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | verdict : conditions d'entrée remplies, avantage sur N critères sur M |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | marché ou segment visé, concurrents de référence |
| Bloc « Droit de jouer » | 4,5 | 26 | 44 | 58 | 5 à 7 critères d'entrée : seuil requis, situation, statut (pastille + mot) |
| Bloc « Droit de gagner » | 51,5 | 26 | 44 | 58 | 5 à 7 critères de différence : preuve chiffrée, rang face aux pairs, statut |
| Bandeau de lecture | 4,5 | 85 | 91 | 5 | la conclusion : où l'on peut gagner, ce qui manque pour jouer |
| Pied | 4,5 | 91,5 | 91 | 4 | règle de statut, sources, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Critère | une grandeur ou un fait vérifiable, 4 mots | oui |
| Seuil (jouer) | valeur minimale ou condition binaire | oui |
| Situation de l'entreprise | valeur, date | oui |
| Rang ou écart face aux pairs (gagner) | valeur chiffrée, pairs nommés | oui |
| Preuve | document, contrat, mesure indépendante | oui |
| Statut | Acquis, Partiel, Absent (règle écrite) | oui |

Les critères de « jouer » sont des **conditions nécessaires** : un seul Absent peut
suffire à bloquer. Ceux de « gagner » sont des **différences** : à pondérer.

## Titre-type

« L'entreprise remplit **5 conditions d'entrée sur 6** et domine sur **3 critères de
différence**, mais la certification manquante bloque l'accès au premier segment » (fictif).

## Pièges

- Confondre les deux blocs : « avoir un bon produit » n'est pas un droit de jouer, c'est le cas de tous.
- Critères d'avantage invérifiables (« culture d'innovation ») ; exiger une preuve mesurable.
- Statuts donnés au jugé, sans règle écrite en pied.
- Tout Acquis : un tableau sans point faible n'est pas crédible, il manque un critère.
- Couleur seule pour le statut ; toujours le mot.

## Dense mais lisible

Deux blocs de même structure, même ordre de colonnes, statuts uniquement dans la
dernière colonne, le reste en noir sur blanc. Une seule phrase de conclusion.

Voisins : [scorecard-hypotheses](scorecard-hypotheses.md) pour la logique de statut,
[douves-barrieres-entree](douves-barrieres-entree.md) pour la durabilité de l'avantage.
