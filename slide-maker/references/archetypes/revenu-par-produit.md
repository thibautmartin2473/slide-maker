---
tags: [revenu, produit, mix, barres-empilees, croissance, quantitatif, dense, im, levee-de-fonds, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Revenue by product (revenu par produit)
famille: Conseil
question: « Quels produits font le chiffre d'affaires, et comment le mix évolue-t-il ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (analyse de CA d'un memorandum ou d'une due diligence)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B02
extrait_le: 2026-10-29
---

# Revenue by product

**Répond à :** le CA total cache des trajectoires opposées. L'exhibit montre la
contribution de chaque produit dans le temps et dit **si la croissance vient d'un seul
produit** ou d'un portefeuille. Il prépare la question de la concentration et du mix de marge.

**Comparaison traitée :** CA par produit sur 4 à 6 ans, en valeur et en part.
**Graphique natif :** barres empilées par année (`addChart` bar stacked) avec total en
tête, plus rangée de parts en pastilles (move `pastilles-au-pas`) ; pas de donut, la rangée de
parts le remplace.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | produit moteur, part du CA, croissance |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | CA en M€, exercices, périmètre, réel ou plan |
| Barres empilées | 4,5 | 26 | 62 | 50 | 4 à 5 produits, un « Autres » ; total au-dessus de chaque barre |
| Rangée de parts | 4,5 | 77 | 62 | 10 | part de chaque produit par année, en pastilles chiffrées |
| Tableau de croissance | 69 | 26 | 26,5 | 38 | TCAM de chaque produit et contribution à la croissance totale (points) |
| Panneau de lecture | 69 | 65 | 26,5 | 22 | 2 constats : produits porteurs, produits qui ralentissent |
| Pied | 4,5 | 91,5 | 91 | 4 | définition de la ligne produit, règle d'allocation des ventes groupées |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| CA par produit et par année | M€, somme égale au CA consolidé | oui |
| Définition d'un produit | gamme, marque ou offre, stable sur la période | oui |
| Produits nouveaux ou arrêtés | année de lancement ou d'arrêt | oui |
| Marge par produit | % du CA, si disponible | conseillé |
| Ventes groupées (bundles) | règle d'allocation du prix entre produits | oui si présentes |
| Effet de change ou d'acquisition | à isoler | conseillé |

## Titre-type

« Le produit A fait **58 %** du CA 2025 et **72 %** de la croissance, tandis que B
et C stagnent » (chiffres fictifs). Pas « Répartition du CA par produit ».

## Pièges

- Plus de 6 couleurs : regrouper en « Autres » et détailler en annexe.
- Ordre d'empilement qui change d'une année à l'autre (le lecteur ne suit plus la série).
- Produits redéfinis en cours de période sans retraitement de l'historique.
- Parts affichées sans valeur absolue : un produit qui « gagne des parts » peut décroître en valeur.
- Allocation arbitraire des ventes groupées, non expliquée.

## Dense mais lisible

Même ordre d'empilement partout, produit moteur en accent et les autres en teintes d'un
même ton, parts en rangée chiffrée sous les barres. Le tableau de croissance répond
à « qui tire ? » mieux qu'une troisième couleur.

Voisins : [concentration-clients](concentration-clients.md),
[rentabilite-structure-couts](rentabilite-structure-couts.md).
