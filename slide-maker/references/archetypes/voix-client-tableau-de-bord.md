---
tags: [voix-du-client, voc, enquete, satisfaction, nps, etude-de-marche, quantitatif, dense, barres, due-diligence]
maisons: [derive-du-nom-non-observe]
archetype: VoC summary dashboard (synthèse de la voix du client)
famille: Conseil
question: « Que disent les clients, critère par critère, et où l'entreprise gagne-t-elle ou perd-elle ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (due diligence commerciale, enquête clients)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A06
extrait_le: 2026-10-29
---

# VoC summary dashboard

**Répond à :** en due diligence commerciale ou en étude de marché, les entretiens et
enquêtes clients valident ou démentent la thèse. La page rend les résultats **par
critère d'achat**, avec l'importance du critère et la performance perçue.

**Comparaison traitée :** score de satisfaction par critère, trié, avec comparaison à
un concurrent ou à l'importance déclarée. **Graphique natif :** barres horizontales
triées (`addChart` bar, `barDir: bar`), éventuellement deux séries (l'entreprise, le
meilleur concurrent) ; un indicateur de recommandation (NPS) en tuile. Move proche :
`table-au-pas`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | critère où l'entreprise domine ou décroche, avec le score |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | échelle (1 à 5 ou 0 à 10), n répondants, période, mode de collecte |
| Barres par critère | 4,5 | 26 | 50 | 58 | 8 à 10 critères triés par importance ; 2 séries ; étiquettes 10 pt |
| Colonne importance | 55 | 26 | 8 | 58 | part des répondants qui jugent le critère décisif, alignée sur les barres |
| Tuiles | 65 | 26 | 30,5 | 16 | NPS, satisfaction globale, intention de renouvellement, avec n |
| Verbatims | 65 | 44 | 30,5 | 40 | 3 citations courtes, chacune avec profil anonymisé (taille, secteur) |
| Pied | 4,5 | 91,5 | 91 | 4 | question exacte posée, échelle, taille d'échantillon, biais connus |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Score par critère | moyenne ou % de satisfaits, même échelle partout | oui |
| n par critère | nombre de répondants (pas seulement le total) | oui |
| Importance du critère | % qui le jugent décisif | oui |
| Recommandation (NPS) | question « recommanderiez-vous ? » sur 0 à 10 ; NPS = % de 9-10 moins % de 0-6, en points | oui si tuile NPS |
| Comparaison | meilleur concurrent ou moyenne du marché | conseillé |
| Verbatims | citation exacte, profil, consentement de diffusion | oui |
| Échantillon | mode de sélection (fournis par l'entreprise ou indépendants) | oui |

Un échantillon de **clients choisis par la direction** est biaisé : l'écrire en pied.

## Titre-type

« Les clients notent le produit **4,4 sur 5**, mais le support n'obtient que **3,1** sur le
critère qu'ils jugent décisif à 71 % » (chiffres fictifs). Pas « Résultats de l'enquête ».

## Pièges

- Moyennes présentées sans n : 6 répondants ne font pas un score.
- Critères non triés, ou triés par score au lieu de l'importance (le lecteur lit l'ordre de priorité).
- Verbatims choisis un par un pour flatter ; montrer au moins un négatif.
- NPS calculé sur un échantillon trop petit pour que l'écart soit significatif.
- Mélanger clients actifs et clients perdus sans le dire.

## Dense mais lisible

Une seule échelle, une seule couleur par série, valeurs en bout de barre, importance en
colonne chiffrée plutôt qu'en troisième série. Les verbatims restent à 20 mots.

Voisin : [tableau-concurrents](tableau-concurrents.md) pour la comparaison factuelle.
