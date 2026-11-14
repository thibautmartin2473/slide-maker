---
tags: [concurrence, benchmark, capacites, scoring, barres, quantitatif, qualitatif, dense, pitch, due-diligence]
maisons: [derive-du-nom-non-observe]
archetype: Capability benchmark (niveau de capacité par acteur)
famille: Conseil
question: « Sur chaque capacité clé, où se situe chaque acteur par rapport aux autres et à la cible ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche scoring-multicritere
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: D07
extrait_le: 2026-10-29
---

# Capability benchmark

**Répond à :** quand l'avantage tient à des capacités (produit, données, force de
vente, conformité, déploiement), le lecteur veut un **niveau** par capacité et par
acteur, comparé à un niveau cible. Utile en due diligence commerciale et en plan
d'investissement : il montre l'écart à combler.

**Comparaison traitée :** niveau de chaque acteur sur chaque capacité, avec une
référence. **Graphique natif :** points reliés (`addChart` type line avec marqueurs
seuls, une série par acteur) ou barres groupées (type bar) ; la cible est une série
de marqueurs en tiret, sans relier les capacités. Pour un grand nombre d'acteurs, préférer un tableau
natif à fonds conditionnels.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | capacité où l'écart à la cible est le plus grand |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | échelle de maturité (1 à 5), date d'évaluation |
| Graphique | 4,5 | 26 | 66 | 52 | 5 à 8 capacités en abscisse, 3 à 5 séries (entreprise, 2 à 3 pairs, cible) |
| Rappel d'échelle | 4,5 | 79 | 66 | 6 | définition des niveaux 1, 3 et 5 en une ligne chacun |
| Panneau « écart » | 73 | 26 | 22,5 | 58 | par capacité : écart à la cible, action, coût indicatif |
| Pied | 4,5 | 91,5 | 91 | 4 | méthode d'évaluation, sources, qui a noté |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Capacité | nom et définition | oui |
| Échelle | niveaux décrits, au moins les bornes et le milieu | oui |
| Note par acteur | valeur sur l'échelle, avec preuve | oui |
| Niveau cible | valeur et justification | recommandé |
| Évaluateur | interne, client, tiers | oui |
| Écart | note de l'entreprise moins cible | oui, calculé |

## Titre-type

« Nous dépassons la cible d'**un niveau** sur la donnée (exemple fictif), mais restons à deux
niveaux en dessous sur le déploiement, critique pour les grands comptes ».

## Pièges

- Échelle non définie : un 3 chez l'un n'est pas un 3 chez l'autre.
- Évaluation par l'équipe seule, sans test client ni preuve externe.
- Courbes qui se croisent sans que les capacités aient d'ordre naturel : lignes
  reliant des catégories sans sens, d'où l'usage de points seuls.
- Cible fixée au meilleur acteur par défaut, sans lien avec le besoin du client.

## Dense mais lisible

Une couleur d'accent pour l'entreprise, du gris pour les pairs, la cible en tiret
fin ; maximum quatre séries. Voir [forces et faiblesses](forces-faiblesses.md) pour
une version pondérée.
