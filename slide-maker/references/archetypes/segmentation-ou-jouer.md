---
tags: [marche, etude-de-marche, segmentation, croissance, matrice, bulles, quantitatif, dense, strategie, pitch]
maisons: [derive-du-nom-non-observe]
archetype: Segmentation & where to play (segments attractifs et accessibles)
famille: Conseil
question: « Sur quels segments du marché faut-il jouer en priorité ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche matrice-priorisation
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: C02
extrait_le: 2026-10-29
---

# Segmentation & where to play

**Répond à :** un marché n'est pas homogène. Le lecteur (comité d'investissement,
jury de levée de fonds) veut voir quels segments sont à la fois **gros, en
croissance et atteignables** par l'entreprise, et lesquels on laisse de côté.

**Comparaison traitée :** segments sur trois dimensions : croissance, accessibilité,
taille. **Graphique natif :** nuage de bulles (`addChart` type bubble) : x =
accessibilité (note 1 à 5), y = croissance annuelle (%), surface = taille en M€ ;
quatre zones tracées en formes natives derrière le graphique (jouer, tester, opportuniste,
éviter). Alternative portrait : tableau trié avec barres de taille.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | segments retenus et poids cumulé dans le marché |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | segmentation utilisée, année, unité (M€) |
| Nuage de bulles | 4,5 | 26 | 60 | 58 | 5 à 10 segments, zones nommées, bulles retenues en accent |
| Légende de lecture | 4,5 | 84 | 60 | 5 | surface = taille ; accessibilité = définition en une ligne |
| Panneau « décision » | 67 | 26 | 28,5 | 58 | segment, décision (jouer, tester, opportuniste, éviter), motif chiffré |
| Pied | 4,5 | 91,5 | 91 | 4 | sources de taille, grille de notation de l'accessibilité |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Segment | nom et définition, mutuellement exclusifs | oui |
| Taille | valeur, année, unité ; E si estimé | oui |
| Croissance | TCAM en %, période écrite | oui |
| Accessibilité | note 1 à 5 avec critères (canal, réglementation, produit déjà adapté) | oui |
| Décision | jouer, tester, opportuniste, éviter, avec motif | oui |

## Titre-type

« **Trois segments sur sept** concentrent 70 % de la croissance et sont accessibles
avec l'offre actuelle » (exemple fictif) ; pas « Segmentation du marché ».

## Pièges

- Axe « accessibilité » composite sans formule : la position devient arbitraire.
- Segments qui se recouvrent, donc des tailles qui ne s'additionnent pas.
- Bulles toutes de la même couleur : on ne voit plus la décision.
- Accessibilité notée par l'équipe sans critère écrit.

## Dense mais lisible

Pas plus de dix bulles ; seules les retenues sont nommées sur le graphique, les
autres en gris avec un numéro renvoyant au panneau de décision. Voir
[matrice de priorisation](matrice-priorisation.md) pour le rendu des zones.
