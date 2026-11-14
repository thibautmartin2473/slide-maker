---
tags: [concurrence, win-loss, ventes, barres, quantitatif, dense, pitch, due-diligence, commercial, deal-log]
maisons: [derive-du-nom-non-observe]
archetype: Win/loss & sources of wins (pourquoi on gagne ou perd)
famille: Conseil
question: « Contre qui gagne-t-on, contre qui perd-on, et pour quelles raisons ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche deal-log
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: D08
extrait_le: 2026-10-29
---

# Win/loss & sources of wins

**Répond à :** les parts de marché disent le résultat, l'analyse gagné / perdu dit
la **cause**. En due diligence commerciale ou en levée, c'est la preuve la plus
convaincante d'un avantage : des appels d'offres réels, face à des concurrents
nommés, avec le motif déclaré par le client.

**Comparaison traitée :** issues des affaires par concurrent rencontré, et motifs de
décision. **Graphique natif :** deux panneaux : à gauche, barres horizontales empilées
(`addChart` type bar, stacked) par concurrent : gagnées (plein), perdues (aplat),
abandonnées (gris) ; à droite, barres triées des motifs de gain et de perte. Taux de
gain écrit en bout de barre. Voir [deal log](deal-log.md) pour le journal source.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | taux de gain global et concurrent le plus difficile |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | période, nombre d'affaires, définition d'une affaire |
| Barres par concurrent | 4,5 | 26 | 44 | 58 | 5 à 8 concurrents, nombre d'affaires et taux de gain |
| Barres par motif | 51 | 26 | 44,5 | 58 | motifs de gain (haut) et de perte (bas), en % des décisions |
| Encadré « n » | 4,5 | 84 | 91 | 5 | effectif par barre, seuil sous lequel une barre est indicative |
| Pied | 4,5 | 91,5 | 91 | 4 | source du journal, mode de recueil des motifs (déclaré par le client, estimé par les ventes) |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Affaire | identifiant, date, segment | oui |
| Issue | gagnée, perdue, abandonnée | oui |
| Concurrent rencontré | nom ou « aucun » | oui |
| Motif | liste fermée, source du motif | oui |
| Effectif | nombre d'affaires par ligne | oui |
| Période | dates de début et de fin | oui |

Taux de gain = gagnées / (gagnées + perdues) ; les abandonnées sont exclues du taux (convention courante) mais **leur nombre est écrit à côté du taux** de chaque ligne (« 58 % (n = 24, dont 6 abandonnées) ») pour ne pas les cacher ; la règle est écrite en pied et le taux « abandonnées comptées comme perdues » est donné en note si l'écart dépasse 5 points.

## Titre-type

« Nous gagnons **58 %** des affaires où nous rencontrons un concurrent (exemple
fictif), mais seulement 31 % face au leader, surtout sur le prix ».

## Pièges

- Effectifs trop faibles (moins de 10 affaires) présentés comme des taux fermes.
- Motifs recueillis par les commerciaux seuls : biais en faveur de « prix ».
- Affaires « non décidées » ou « sans concurrent » comptées comme des gains.
- Période qui mélange avant et après un changement d'offre.

## Dense mais lisible

Effectif écrit à côté de chaque taux ; les barres sous 10 affaires en teinte
pâle avec la mention « indicatif ». Liste des motifs fermée à six entrées maximum.
