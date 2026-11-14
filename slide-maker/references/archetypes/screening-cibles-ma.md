---
tags: [m-and-a, screening, cibles, entonnoir, tableau, buy-side, quantitatif, dense, pitch, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: M&A screening / target list (de l'univers aux cibles retenues)
famille: Conseil
question: « Parmi tous les acteurs du marché, lesquels méritent d'être approchés, et pourquoi ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir M&A et des fiches buyer-landscape et entonnoir
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: D12
extrait_le: 2026-10-29
---

# M&A screening / target list

**Répond à :** en mission buy-side (ou en projet de croissance externe), le lecteur
veut voir comment on passe de l'**univers** d'acteurs à une **short list** défendable :
filtres appliqués dans l'ordre, effectifs restants à chaque étape, puis un tableau
des cibles retenues avec les faits utiles à l'approche.

**Comparaison traitée :** réduction de l'univers par filtres successifs, puis
comparaison des cibles. **Graphique natif :** entonnoir à gauche (barres horizontales
décroissantes, `addChart` type bar, ou formes natives de largeur proportionnelle),
tableau natif à droite pour la short list. Voir [buyer landscape](buyer-landscape.md)
pour la vue côté acheteurs et [pairs financiers](pairs-financiers-valorisation.md)
pour les multiples.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | de combien d'acteurs à combien de cibles, avec le filtre le plus sélectif |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | critères stratégiques de l'acquéreur, date de l'inventaire |
| Entonnoir | 4,5 | 26 | 34 | 58 | 4 à 6 filtres, effectif restant, critère écrit sur chaque marche |
| Tableau de short list | 40 | 26 | 55,5 | 52 | 5 à 10 cibles : taille, croissance, rentabilité, actionnariat, géographie, fit stratégique |
| Colonne « abordabilité » | (dans le tableau) | | | | actionnariat et taille de ticket : fondateur, fonds, groupe ; sans prix de transaction affirmé |
| Bandeau « suite » | 40 | 79 | 55,5 | 6 | prochaines étapes : contact, diligence légère |
| Pied | 4,5 | 91,5 | 91 | 4 | sources, E pour les estimés, périmètre exclu |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Univers | nombre d'acteurs et source de l'inventaire | oui |
| Filtres | critère, seuil, effectif restant, dans l'ordre | oui |
| Cible | nom, pays, actionnaire | oui |
| Faits | CA, croissance, rentabilité, effectifs avec millésime, E si estimé | oui |
| Fit stratégique | note ou mot (fort, moyen), critère écrit | oui |
| Statut de contact | non approché, à approcher, écarté (motif) | recommandé |

## Titre-type

« Sur **120 acteurs** recensés (exemple fictif), 9 passent les filtres de taille,
de fit produit et d'actionnariat ; 3 sont prioritaires ».

## Pièges

- Filtres dont l'ordre change les effectifs intermédiaires (le « filtre le plus sélectif » en dépend) sans le dire ; le résultat final, lui, est indépendant de l'ordre.
- Données financières de cibles privées présentées comme certaines.
- Cibles écartées sans trace du motif : le comité les redemande.
- Mélange de cibles cotées et non cotées avec des attributs différents.

## Dense mais lisible

Un filtre par marche avec seuil écrit, tableau limité à dix lignes, deux couleurs
(priorité, à surveiller) avec le mot écrit. Nom de cible jamais divulgué hors périmètre
confidentiel : marquer le document en conséquence.

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- Entonnoir en **barres horizontales natives** (série par type de marche, ordre inversé pour le plus large en haut) avec, à droite de chaque barre, l'effectif restant et le nombre d'écartés (« 46, moins 74 »).
- Le « filtre le plus sélectif » dépend de l'ordre des filtres : écrit dans le panneau de lecture ; les neuf cibles finales n'en dépendent pas.
- Le tableau marque (E) dans l'en-tête de CA, croissance et EBITDA (cibles privées estimées) ; la colonne « Fit » est un jugement dit tel ; **aucun prix de transaction** n'est affirmé ; les noms sont fictifs et le panneau rappelle de marquer une vraie short list confidentielle.
- Contrôles du script : chaque cible passe les quatre seuils, la short list compte bien le nombre du titre, les prioritaires cumulent fit fort et croissance d'au moins 12 %.
