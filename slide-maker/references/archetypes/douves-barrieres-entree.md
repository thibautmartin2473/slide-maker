---
tags: [strategie, avantage-concurrentiel, barrieres, scoring, barres, diagnostic, dense, valorisation, levee-de-fonds, etude-de-marche]
maisons: [derive-du-nom-non-observe]
archetype: Moats and barriers to entry (douves et barrières à l'entrée)
famille: Conseil
question: « Quelles barrières protègent l'entreprise, et sont-elles solides et durables ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (analyse d'avantage concurrentiel, thèse d'investissement)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A10
extrait_le: 2026-10-29
---

# Moats and barriers to entry

**Répond à :** un investisseur paie un multiple plus élevé si l'avantage est
**défendable**. L'exhibit note chaque barrière, la prouve, et dit combien de temps
elle tient. C'est la page qui justifie (ou non) une prime de valorisation.

**Comparaison traitée :** solidité de chaque barrière sur une échelle commune, avec
sa durabilité. **Graphique natif :** barres horizontales notées 0 à 5 (`addChart` bar)
ou tableau natif à jauges ; la note est toujours accompagnée de sa **preuve** en
texte. Move proche : `scoring-multicritere`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | barrière dominante et note de la plus faible |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | échelle de notation, marché, concurrent le plus proche |
| Barres notées | 4,5 | 26 | 38 | 58 | 6 à 8 barrières (effet de réseau, coûts de changement, échelle, données, réglementaire, marque, brevets, relations) |
| Colonne preuve | 44 | 26 | 34 | 58 | par barrière : le fait chiffré qui justifie la note |
| Colonne durée | 79 | 26 | 16,5 | 58 | durabilité estimée (années) ou tendance : renforcée, stable, érodée (mot écrit) |
| Bandeau de lecture | 4,5 | 85 | 91 | 5 | ce qu'un entrant devrait investir pour contourner l'ensemble |
| Pied | 4,5 | 91,5 | 91 | 4 | grille de notation 0 à 5, sources, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Barrière | type et libellé de 3 mots | oui |
| Note | 0 à 5, grille d'ancrage écrite en pied (0 absente, 3 réelle mais contournable, 5 quasi infranchissable) | oui |
| Preuve | fait chiffré : taux de churn, coût de migration, ancienneté du contrat | oui |
| Durabilité | années ou tendance | oui |
| Point de vue | entreprise ou entrant potentiel | oui |
| Évaluateur | qui note (équipe, experts, clients) | conseillé |

## Titre-type

« La barrière principale est les **coûts de changement** (**4 sur 5**, 3 ans de
migration moyenne), mais l'effet de réseau reste à **1 sur 5** » (chiffres fictifs).

## Pièges

- Notes sans grille d'ancrage : 4 sur 5 ne veut rien dire pour le comité.
- Compter comme barrière ce qui est un simple avantage temporaire (une longueur d'avance produit).
- Barrières non indépendantes additionnées comme si leurs effets se cumulaient.
- Oublier le point de vue de l'entrant : une barrière se mesure à ce que coûte de la franchir.
- Une moyenne globale qui masque la barrière la plus faible ; afficher la plus faible, pas la moyenne.

## Dense mais lisible

Barres monochromes triées, la plus faible en accent, une preuve chiffrée par ligne,
durabilité en mots. Ne pas dépasser 8 lignes.

Voisins : [droit-de-jouer-droit-de-gagner](droit-de-jouer-droit-de-gagner.md),
[tableau-concurrents](tableau-concurrents.md).
