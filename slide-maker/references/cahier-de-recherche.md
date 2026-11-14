---
tags: [methode, recherche, donnees, sources, exhibit, opposable, quantitatif, echantillon]
famille: Toutes
type: méthode, dériver un cahier de recherche de l'archétype avant d'aller chercher la donnée
statut: à éprouver, écrit avant sa première utilisation en production
---

# Le cahier de recherche

**Quand l'utilisatrice n'apporte pas la matière, on n'ouvre pas un moteur de recherche
avant d'avoir interrogé l'archétype.**

Une recherche guidée par le **sujet** ramène ce qui existe. Guidée par
l'**exhibit**, elle ramène ce qui rentre. L'écart n'est pas de confort : un
exhibit se construit sur 3 à 6 items d'une seule unité, et une recherche libre
revient avec douze chiffres hétérogènes dont on ne fera rien, ou pire, qu'on
fera rentrer de force en fabriquant une moyenne que personne ne pourra sourcer.

C'est un aller-retour, pas une passe : l'archétype commande la recherche, la
recherche renvoie ce qu'elle trouve, et **c'est l'archétype qui s'ajuste**.

## Aller : les cinq questions posées à la fiche

L'archétype porte déjà son contrat de données, dans sa section « La charge ».
On ne le recopie pas ici : il vit dans la fiche et bouge avec elle. On lui pose
ces cinq questions, et les réponses deviennent les contraintes de la recherche.

| Question | Où se trouve la réponse | Exemple ; `bridge` |
|---|---|---|
| Combien d'items ? | « La charge » de l'archétype | 3 à 4 termes, ni 2 ni 5 |
| Quelle unité, **unique** ? | « La charge » | une seule ; jamais des unités et des % |
| Quel tri ? | « La charge » | `plage-min-max` : par borne basse, jamais alphabétique |
| Quelles bornes ? | l'anatomie de l'archétype | un état de départ et un d'arrivée, tous deux datés |
| Quelle source est opposable ? | la fiche de **fond** | point de vue : source tierce obligatoire partout |

Puis trois réponses qui ne s'inventent pas et qui viennent du Bloc C de
l'interview : **date d'arrêté, devise, périmètre**. Sans elles la donnée trouvée
n'est pas comparable, et l'exhibit n'est pas opposable (principes B3 et B4).

## Le gabarit

Une ligne par donnée à trouver, écrite **avant** la première requête.

| Donnée | Granularité | Unité | Période | Source acceptable | Ce qui disqualifie |
|---|---|---|---|---|---|
| Parc en service | mondial, > 100 sièges | appareils | au 31/12/2025 | constructeur, IATA, Cirium | un chiffre « environ », une source sans date d'arrêté |
| Livraisons | mondial, même périmètre | appareils | 2026-2031 cumulé | carnet de commandes publié | une projection d'analyste sans méthode |

**La dernière colonne est celle qui compte.** Sans critère de rejet écrit
d'avance, on accepte le premier chiffre trouvé, et on découvre trois jours plus
tard qu'il ne porte pas le même périmètre que les deux autres.

## Retour : trois issues, une règle d'arbitrage

| Ce que la recherche ramène | Ce qu'on fait |
|---|---|
| **Ça rentre** | on produit |
| **Ça déborde** ; 8 catégories pour un archétype qui en tient 6 | on agrège à un niveau qui reste sourçable, ou on change d'archétype |
| **Ça manque** ; pas de source opposable pour un terme | on retire le terme et on le dit en `Note:`, ou on change de question |

> **L'archétype cède, jamais la donnée.**

C'est la règle dont tout le reste découle. Tordre un chiffre pour qu'il tienne
dans une forme est indétectable à l'œil et fatal à la relecture, et sur un
point de vue, qui sera lu par des gens sans aucune raison d'être indulgents,
c'est exactement ce qui détruit l'autorité que le document cherche à construire.

Changer d'archétype en cours de route n'est pas un échec : c'est le signe que la
question posée n'était pas celle que la donnée sait trancher. Le dire à l'utilisatrice
en une ligne, avec les deux options, plutôt que d'arbitrer seul.

## Ce qu'on n'écrit jamais

- Un chiffre dont on ne peut pas citer la source (principes B4), même estimé,
  même « de notoriété publique ».
- Une moyenne, un total ou un écart **calculé par nous** présenté comme une
  donnée trouvée. Si on calcule, la `Note:` dit qu'on a calculé et à partir de
  quoi.
- Une projection au-delà de l'année en cours sans la marquer comme estimée : la
  convention de la base est **la dernière barre hachurée**.
- Deux périmètres différents dans le même exhibit sans que l'écart soit dit.

## L'outil de recherche

Le cahier ne dépend d'aucun moteur de recherche : il dit quoi chercher et quoi
rejeter, le moteur ne fait qu'exécuter.

Une requête par ligne du gabarit, pas une requête pour le sujet entier. Et on
garde l'URL de chaque chiffre retenu dès la première lecture : la retrouver au
moment d'écrire la ligne `Sources:` coûte trois fois plus cher.
