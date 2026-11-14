---
tags: [marche, etude-de-marche, croissance, drivers, tableau, reglementaire, durabilite, dense, quantitatif, pitch]
maisons: [derive-du-nom-non-observe]
archetype: Market drivers overview (forces qui poussent ou freinent)
famille: Conseil
question: « Quelles forces font avancer ou ralentir le marché, et avec quelle intensité ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et des fiches market-drivers et market-dynamics
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: C09
extrait_le: 2026-10-29
---

# Market drivers overview

**Répond à :** le lecteur veut la liste hiérarchisée des forces qui expliquent la
trajectoire du marché : réglementation, technologie, coût, comportement d'achat,
financement. Sans cela, une projection de croissance paraît tombée du ciel.

**Comparaison traitée :** forces comparées par sens (accélérateur, frein) et par
intensité. **Graphique natif :** tableau natif (`addTable`) à lignes de forces,
avec une colonne de sens écrite (« accélère » ou « freine ») et une pastille
d'intensité (forte, moyenne, faible, toujours avec le mot). Option : barres
horizontales bidirectionnelles (accélérateurs à droite, freins à gauche) pour
l'effet estimé sur la croissance en points. Voir [market drivers](market-drivers.md)
et [market dynamics](market-dynamics.md) pour le rendu graphique.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | nombre de forces et celle qui domine |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | marché, horizon de 3 à 5 ans |
| Tableau de forces | 4,5 | 26 | 68 | 58 | 6 à 9 lignes : force, sens, intensité, délai, preuve |
| Barres d'effet | 74 | 26 | 21,5 | 58 | effet estimé en points de croissance, aligné ligne à ligne |
| Ligne de total | 4,5 | 84 | 91 | 5 | somme des accélérateurs, des freins, solde |
| Pied | 4,5 | 91,5 | 91 | 4 | sources, E pour les effets estimés |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Force | nom et définition d'une ligne | oui |
| Sens | accélère, freine | oui |
| Intensité | forte, moyenne, faible, avec règle de notation | oui |
| Effet estimé | points de croissance annuelle, E | recommandé |
| Délai | année d'effet | oui |
| Preuve | fait vérifiable et source | oui |

## Titre-type

« Sept forces pèsent sur le marché : **les trois accélérateurs** réglementaires
compensent largement le frein du coût de mise en conformité » (exemple fictif).

## Pièges

- Liste de forces sans hiérarchie : tout paraît aussi important.
- Une force listée deux fois sous deux noms (réglementation, conformité).
- Intensité donnée sans règle, donc invérifiable.
- Date réglementaire écrite de mémoire : relire le texte officiel (voir
  [paysage réglementaire](paysage-reglementaire.md)).

## Dense mais lisible

Tri par intensité décroissante, accélérateurs et freins en deux teintes
distinguées aussi par le mot écrit. Neuf lignes au maximum.
