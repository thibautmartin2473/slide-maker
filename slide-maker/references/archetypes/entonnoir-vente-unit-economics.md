---
tags: [funnel, entonnoir, unit-economics, saas, pricing, croissance, quantitatif, dense, histogramme, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Sales funnel & unit economics (entonnoir commercial et économie unitaire)
famille: Conseil
question: « Combien coûte l'acquisition d'un client, et combien rapporte-t-il ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (SaaS, levée de fonds)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B10
extrait_le: 2026-10-29
---

# Sales funnel & unit economics

**Répond à :** un fonds de capital-risque juge d'abord la **machine d'acquisition** :
chaque euro dépensé en vente et marketing revient-il, et en combien de temps ? Le
funnel montre où l'on perd des prospects ; les unit economics disent si cela paie.

**Comparaison traitée :** conversion étape par étape, puis coût d'acquisition contre
valeur d'un client. **Graphique natif :** barres horizontales décroissantes
(`addChart` bar) pour l'entonnoir, avec taux de conversion entre barres ; à droite,
tuiles de chiffres (CAC, LTV, LTV/CAC, payback).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | LTV/CAC et délai de remboursement |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | période, segment, définition de chaque étape |
| Entonnoir | 4,5 | 26 | 50 | 56 | barres horizontales : prospects, qualifiés, démos, propositions, gagnés ; taux entre étapes ; étape la plus faible en accent |
| Colonne délais | 55 | 26 | 9 | 56 | durée médiane par étape |
| Tuiles | 66 | 26 | 29,5 | 36 | CAC, LTV, LTV/CAC, payback (mois), marge brute |
| Formules | 66 | 64 | 29,5 | 20 | calcul en clair : CAC = dépenses V&M / nouveaux clients ; LTV = ARPA x marge brute / churn |
| Pied | 4,5 | 91,5 | 91 | 4 | périmètre des dépenses, période, source CRM |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Volumes par étape | nombre, même période, même cohorte | oui |
| Dépenses V&M | M€ sur la période, périmètre listé (salaires, outils, commissions) | oui |
| Nouveaux clients | nombre sur la même période | oui |
| ARPA | revenu moyen par compte, mensuel ou annuel, écrit | oui |
| Marge brute | % | oui |
| Churn | % mensuel ou annuel, écrit | oui |
| Délai de remboursement | CAC / (ARPA mensuel x marge brute) | oui |

## Titre-type

« Chaque euro de vente et marketing rapporte **3,4 €** de marge sur la vie du client,
remboursé en **14 mois** ; l'étape démo-proposition perd 62 % des prospects ».

## Pièges

- CAC calculé sans les salaires des commerciaux : flatteur et rejeté par tout investisseur.
- Décalage de période entre dépenses (T1) et clients gagnés (T2) non traité.
- LTV sur un churn estimé à partir de six mois d'historique : le dire (E).
- Mélanger segments PME et grands comptes dans un même entonnoir.

## Dense mais lisible

Les formules sont écrites à côté des tuiles (le lecteur refait le calcul), l'étape
faible est la seule en accent, les délais par étape sont dans une colonne alignée.
