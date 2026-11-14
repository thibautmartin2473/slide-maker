---
tags: [tam, marche, etude-de-marche, segmentation, pont, quantitatif, dense, board, croissance]
maisons: [derive-du-nom-non-observe]
archetype: TAM / SAM / vended market bridge (du marché total au marché vendu, puis au SOM)
famille: Conseil
question: « Quelle part du marché total l'entreprise peut-elle réellement servir ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance ; sens de « vended market » retenu (dépense déjà réalisée) ; fiche relue et corrigée au rendu d'une preuve (2026-10-29, données fictives)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A07
extrait_le: 2026-10-29
---

# TAM / SAM / vended market bridge

**Répond à :** la phrase « le marché fait 40 Md€ » ne dit rien d'utile à un
investisseur. Il veut le chemin du marché total au marché **que l'on peut vendre**,
filtre après filtre.

**Comparaison traitée :** une taille qui se réduit par filtres successifs.
**Graphique natif :** cascade décroissante (barres empilées, base invisible) : le
TAM en barre pleine, chaque filtre en marche descendante, SAM, puis une dernière
marche (dépense non réalisée), le **marché vendu** en barre pleine et, si l'on veut
aller jusqu'à l'ambition, le **SOM** en barre claire au contour pointillé (objectif,
pas mesure). Ce n'est pas un entonnoir de cercles : les cercles concentriques
trompent sur les proportions.

Ordre des niveaux : TAM, filtres, **SAM** (adressable : plafond), marché **vendu**
(dépense déjà réalisée auprès d'offreurs comme le nôtre), **SOM** (part que l'on vise du
marché vendu). Le dernier niveau ne s'appelle jamais « marché servi » : le mot se lit
comme la clientèle actuelle de l'entreprise, qui est une autre chose.

Interprétation du dernier maillon, **retenue ici** : le
« vended market » est la dépense **déjà réalisée** auprès d'offreurs comme le nôtre
(le marché effectivement vendu aujourd'hui), par opposition à la dépense potentielle.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | taille du SAM et part du TAM qu'il représente |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | unité (Md€), année, définition de chaque niveau en une ligne |
| Cascade | 4,5 | 28 | 62 | 49 | TAM, filtres (géographie, segment, canal, solvabilité), SAM, dépense non réalisée, marché vendu, SOM ; valeur et part du TAM au-dessus des barres de niveau |
| Colonne « % retenu » | 4,5 | 70 | 62 | 5 | sous chaque marche, part du niveau précédent conservée (filtres, dépense non réalisée, SOM) |
| Panneau des définitions | 66 | 22 | 32 | 59 | pour chaque niveau : définition, critère mesurable, (E) ; les trois filtres regroupés en une puce |
| Légende | 4,5 | 80,5 | 62 | 3 | niveaux de couleur, objectif en pointillé |
| Pied | 4,5 | 91,5 | 91 | 4 | méthode, date, sources |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| TAM | valeur, unité, année, source (une triangulation, voir [triangulation](triangulation-taille-marche.md)) | oui |
| Filtres | 3 à 5, **dans l'ordre d'application** : libellé, part conservée du niveau précédent, critère mesurable | oui |
| SAM | = TAM x produit des parts conservées ; la valeur retirée par chaque filtre dépend de l'ordre, pas le SAM | oui |
| Dépense non réalisée | part du SAM faite en interne ou pas encore achetée ; se retire du SAM | oui |
| Marché vendu | = SAM x part déjà dépensée auprès d'offreurs ; valeur, mode de calcul | oui |
| SOM | = marché vendu x part visée ; **objectif**, à marché constant de l'année de base | facultatif |
| Statut | mesuré ou estimé (E) par niveau ; une part conservée est une estimation | oui |

Un filtre sans critère mesurable (« segment trop petit ») est refusé : le critère
s'écrit (« moins de 50 salariés »). Les valeurs affichées sont arrondies à la même
décimale et **doivent boucler** (4,6 - 1,5 - 0,9 - 0,3 = 1,9) ; sinon changer
l'arrondi ou le dire.

## Titre-type

« Sur un TAM de **4,6 Md€**, **1,9 Md€** sont adressables (**41 %**) et **1,4 Md€** déjà
dépensés auprès d'offreurs » ; avec un seul niveau : « Sur un TAM de **38 Md€**, le
marché réellement adressable ne pèse que **6,4 Md€** (17 %), faute d'accès aux deux
premiers canaux ». Les pourcentages sont recalculés sur les valeurs affichées.

## Pièges

- Le TAM de tout un secteur, sans lien avec l'offre : irréaliste, discrédite le reste.
- Filtres qui ne bouclent pas ; SAM donné sans chemin.
- Mélanger année de base du TAM et année du SAM (le SOM se chiffre à marché constant, pas en 2029 sur un TAM 2025).
- Présenter le SAM comme un objectif de CA : c'est un plafond, pas une prévision. Le SOM, lui, est un objectif et le dit (contour pointillé, « objectif »).
- Appeler « marché servi » le dernier niveau : ambigu avec les clients actuels ; écrire « marché vendu ».
- Un pourcentage du titre calculé sur des valeurs non arrondies : le lecteur refait 1,9 / 4,6 et trouve 41 %, pas 42 %.
- Accent de couleur sur le TAM ou le SOM : un seul accent, sur le SAM.

## Dense mais lisible

Définition et source **à côté** de chaque barre (pas en annexe), % retenu sous la
marche, un seul accent sur le SAM. Voir [triangulation](triangulation-taille-marche.md)
pour fiabiliser le TAM et [headroom](pont-headroom-whitespace.md) pour la suite.

## Preuve rendue (données fictives)

Rendu de démonstration (données fictives), page 3 du deck de preuve :
cascade en barres empilées natives (base invisible, une série par type de niveau), liaisons
et étiquettes en formes, TAM repris de la page de triangulation (4,6 Md€). Le rendu a
corrigé la fiche sur : l'ordre explicite des filtres, la part conservée au lieu d'une valeur
retirée à saisir, le nom du dernier niveau (marché vendu, pas marché servi), l'ajout du SOM
comme objectif, et les pourcentages recalculés sur les valeurs arrondies (le titre d'origine
donnait 42 % pour un lecteur qui trouve 41 %).
