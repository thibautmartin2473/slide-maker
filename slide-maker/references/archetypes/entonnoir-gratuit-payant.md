---
tags: [entonnoir, conversion, freemium, gratuit-payant, acquisition, produit, quantitatif, dense, levee-de-fonds, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Free to paid funnel (entonnoir du gratuit vers le payant)
famille: Conseil
question: « Quelle part des utilisateurs gratuits devient payante, et à quelle étape perd-on le plus ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (modèle freemium, métriques de conversion produit)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B11
extrait_le: 2026-10-29
---

# Free to paid funnel

**Répond à :** pour un produit freemium ou à essai gratuit, la valeur de l'entreprise
dépend de la **conversion** en payant. L'exhibit suit une cohorte d'inscrits étape par
étape et chiffre le taux de passage et le délai à chaque étape.

**Comparaison traitée :** volumes à chaque étape (inscrits, actifs, utilisateurs
engagés, payants) avec taux de passage. **Graphique natif :** barres horizontales
décroissantes centrées, qui forment l'entonnoir (`addChart` bar, barres empilées avec
série invisible de centrage), taux de passage dans des étiquettes entre les barres.
Move proche : `entonnoir-encastre`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | taux de conversion global et étape la plus faible |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | cohorte (mois d'inscription), délai d'observation, définition de « payant » |
| Entonnoir | 4,5 | 26 | 55 | 58 | 4 à 5 étapes, volume en tête de chaque barre, taux de passage entre barres |
| Rangée de délais | 4,5 | 85 | 55 | 4 | délai médian entre étapes |
| Tuiles | 61 | 26 | 34,5 | 20 | conversion globale, délai médian jusqu'au paiement, ARPC des convertis |
| Comparaison de cohortes | 61 | 48 | 34,5 | 38 | conversion globale des 6 dernières cohortes (barres), tendance |
| Pied | 4,5 | 91,5 | 91 | 4 | définition d'« actif » et de « engagé », source |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Inscrits | nombre par cohorte mensuelle, 6 cohortes pour la comparaison | oui |
| Étapes intermédiaires | actif, utilisateur de la fonction clé, essai de l'offre payante | oui |
| Payants | nombre de ceux qui ont payé dans la fenêtre d'observation, et revenu moyen par payant | oui |
| Fenêtre d'observation | jours depuis l'inscription, identique pour toutes les cohortes | oui |
| Délai | médian par étape | oui |
| Canal d'acquisition | split par canal si disponible | conseillé |

Même cohorte du haut au bas de l'entonnoir : ne jamais diviser les payants d'un mois
par les inscrits d'un autre.

## Titre-type

« **4,2 %** des inscrits deviennent payants sous 90 jours ; la plus grosse perte
survient entre l'inscription et la première activation (**-61 %**) » (chiffres fictifs).

## Pièges

- Taux calculé sur des cohortes de fenêtres d'observation différentes (les récentes paraissent mauvaises).
- Étapes définies a posteriori pour faire joli ; elles doivent correspondre à des événements mesurés.
- Inscrits qui incluent des comptes de test ou des bots.
- Conversion en valeur ignorée : un payant à 5 euros ne vaut pas un payant à 500 euros.
- Entonnoir qui mélange canaux de qualité très différente, sans split.

## Dense mais lisible

Barres centrées avec le volume et le taux écrits, étape faible en accent, cohortes
comparées en petite série à côté. Rien d'autre que des événements mesurés.

Voisins : [entonnoir-vente-unit-economics](entonnoir-vente-unit-economics.md),
[analyse-cohortes](analyse-cohortes.md).
