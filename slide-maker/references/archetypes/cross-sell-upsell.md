---
tags: [cross-sell, upsell, grille, matrice, produits, clients, potentiel, tableau, quantitatif, dense, levee-de-fonds, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Cross-sell and upsell (vente croisée et montée en gamme)
famille: Conseil
question: « Quels clients achètent quels produits, et où se trouve le potentiel de vente supplémentaire ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (analyse de la base clients et du potentiel d'expansion)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B08
extrait_le: 2026-10-29
---

# Cross-sell / upsell

**Répond à :** la croissance la moins chère vient souvent de la base existante. La
grille montre **qui détient quoi**, mesure le taux d'équipement de chaque produit et
chiffre le potentiel si les clients les moins équipés rejoignaient le niveau des
mieux équipés.

**Comparaison traitée :** présence ou absence de chaque produit chez chaque client
(ou segment de clients). **Graphique natif :** grille = tableau natif (`addTable`) à fonds
conditionnels, lignes = segments ou clients, colonnes = produits, cellule = taux de
détention (en %) ; une colonne de potentiel en M€. Move proche : `tableau-graphique`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | taux d'équipement moyen et potentiel chiffré |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | périmètre de clients, date de l'extraction, définition de « détient » |
| Grille | 4,5 | 26 | 66 | 56 | 6 à 10 lignes (segments), 4 à 6 colonnes (produits) ; teinte du fond selon le taux, valeur écrite dans la cellule |
| Ligne de total | 4,5 | 83 | 66 | 5 | taux moyen par produit |
| Panneau de potentiel | 72 | 26 | 23,5 | 62 | hypothèse de rattrapage, potentiel en M€ (bas, haut), 2 produits à pousser, 1 produit à ne pas pousser |
| Pied | 4,5 | 91,5 | 91 | 4 | méthode de calcul du potentiel, source, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Clients | identifiant et segment | oui |
| Produits détenus | liste par client | oui |
| ARPC par produit | prix moyen payé | oui |
| Taux d'équipement | % de clients détenant le produit, par segment | oui |
| Compatibilité | produit A vendable sans B ? | oui |
| Hypothèse de rattrapage | part du retard comblée, avec délai | oui |

Potentiel brut = (taux de la référence - taux actuel) x clients x ARPC. Le dire et
appliquer une décote prudente.

## Titre-type

« Seuls **23 %** des clients détiennent le module B ; atteindre le niveau des segments
comparables les mieux équipés vaut **+2,4 M€** d'ARR » (exemple fictif). Pas « Matrice produits clients ».

## Pièges

- Potentiel calculé sur l'ensemble des clients alors que beaucoup ne sont pas éligibles.
- Référence prise sur le meilleur segment, qui n'est pas représentatif.
- Grille de 40 lignes : agréger par segment, détailler seulement les 10 premiers clients.
- Teinte seule pour la valeur : toujours écrire le pourcentage dans la cellule.
- Confondre cross-sell (autre produit) et upsell (version supérieure) dans le même calcul.

## Dense mais lisible

Fond conditionnel à une seule teinte (intensité = taux), nombres alignés à droite,
potentiel isolé dans un panneau, ligne de total en gras.

Voisins : [segmentation-base-clients](segmentation-base-clients.md),
[retention-churn](retention-churn.md), [revenu-par-produit](revenu-par-produit.md).
