---
tags: [plan, marche, croissance, tcam, comparables, quantitatif, dense, board, histogramme, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Plan vs market cross-check (le plan face au marché et aux pairs)
famille: Conseil
question: « La croissance du plan est-elle crédible face au marché et aux pairs ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de ligne-de-reference
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A04
extrait_le: 2026-10-29
---

# Plan vs market cross-check

**Répond à :** un plan qui croît plus vite que son marché suppose des gains de part.
Cet exhibit rend ce pari **visible et chiffré**, avant que le comité ne le fasse.

**Comparaison traitée :** TCAM (taux de croissance annuel moyen) du plan contre
TCAM du marché et médiane des pairs, par segment ; part de marché implicite.
**Graphique natif :** barres groupées horizontales (`addChart` bar) plan / marché,
une ligne de référence pour la médiane des pairs (move `ligne-de-reference`).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | multiple de croissance plan / marché et gain de part requis |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | TCAM 2025-2030, % ; périmètre et devise |
| Barres groupées | 4,5 | 26 | 55 | 58 | un groupe par segment : barre plan (accent), barre marché (gris) ; ligne pointillée pairs |
| Tableau d'écart | 61 | 26 | 34,5 | 40 | segment, écart en points, part implicite 2025 puis 2030 |
| Panneau de lecture | 61 | 68 | 34,5 | 18 | « ce qu'il faut croire » : gain de part en points, concurrent à déloger |
| Pied | 4,5 | 91,5 | 91 | 4 | sources marché et pairs, même période, même périmètre |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| TCAM plan | % par segment, période explicite | oui |
| TCAM marché | % par segment, source, même période | oui |
| Médiane des pairs | % et nombre de pairs | oui |
| CA du plan | départ et arrivée, même unité | oui |
| Taille du marché | départ et arrivée | oui (pour la part implicite) |
| Nominal ou réel | un seul des deux, écrit | oui |

Part implicite = CA du plan / taille du marché ; c'est elle, pas le TCAM, qui
traduit le pari en gain de part.

## Titre-type

« Le plan croît **2,3 fois plus vite** que le marché : il exige **+3,8 points de
part** d'ici 2030 » ; si le plan est sage : « Le plan reste sous la croissance du
marché : aucune hypothèse de gain de part ».

## Pièges

- TCAM plan nominal contre TCAM marché réel.
- Période différente (2024-2029 contre 2025-2030) : l'écart devient un artefact.
- Marché défini plus large que ce que l'entreprise sert : écart faussement rassurant.
- Pairs en nombre insuffisant (moins de 4) : afficher la plage, pas la médiane.

## Dense mais lisible

Une seule ligne de référence, écart écrit en points sur chaque groupe, part implicite
en deux chiffres. Le panneau dit **qui** perd la part gagnée.
