---
tags: [pont, waterfall, decomposition, evolution, stock, prevision, conseil, aeronautique, fourchette, diagnostic]
maisons: [Oliver Wyman, McKinsey & Company, Bain & Company, BCG, Roland Berger, Strategy&]
famille: Conseil
archetype: Bridge (pont de décomposition)
question: « Comment passe-t-on de X à Y ? »
vu_chez: Oliver Wyman (Global Fleet & MRO Forecast 2026 p. 3 ; BdE 2012 p. 43 ; BAZL 2020 p. 23), McKinsey (NCDOT 2019 p. 8 ; New Hampshire 2022 p. 31), Bain (UC Berkeley 2010 p. 23 ; Green Economy 2022 p. 22 ; Altagamma 2021 p. 3), BCG (NYCHA 2012 p. 43 ; Victoria 2015 p. 56), Roland Berger (CLEPA 2025 p. 14 ; DGE 2014 p. 40 ; UNIFE 2016 p. 5 ; FCH 2017 p. 22), Strategy& (FIEN+ 2024 p. 38 ; LNG 2024 p. 26 ; V2G 2021 p. 14)
extrait_le: 2026-09-22
---

# Bridge

**Répond à :** décomposer un écart entre deux états, un stock de départ, un
stock d'arrivée, et ce qui explique le passage de l'un à l'autre.

C'est le cousin honnête du waterfall : au lieu de barres flottantes qu'il faut
déchiffrer, une **ligne horizontale de termes additionnés**, lisible comme une
équation.

## Anatomie : une bande horizontale, trois zones

| Zone | Part | Traitement |
|---|---|---|
| **Départ** | ~20 % | Bloc plein de la couleur la plus foncée, texte en blanc : le libellé (`2026 Fleet`) en petit au-dessus, **le chiffre en très grand** en dessous |
| **Décomposition** | ~55 % | Sur aplat neutre. Les termes séparés par des `+`, chacun avec son libellé en petit au-dessus et son chiffre en grand. **Une ligne fine à pastilles** relie les termes par le haut |
| **Arrivée** | ~25 % | Bloc sur aplat clair de la couleur d'accent, chiffre en très grand |

Sous la bande : `Note:` (la date d'arrêté du stock de départ) puis `Sources:` sur
une seconde ligne.

## Le mécanisme

**Le contraste porte la lecture** : foncé plein à gauche, neutre au centre,
clair à droite. Sans lire un chiffre, on voit qu'on part d'un bloc dense, qu'on
traverse des composantes, et qu'on arrive ailleurs.

Les `+` explicites sont ce qui le distingue d'un waterfall : le lecteur peut
**refaire le calcul de tête**. Sur la source, 18 046 + 4 628 + 18 461 = 41 135,
et cette vérifiabilité est tout l'argument, personne ne conteste un chiffre
qu'il vient d'additionner lui-même.

**Les chiffres sont plus grands que les libellés**, d'un facteur 2 à 3. C'est
l'inverse de ce qu'on fait spontanément, et c'est ce qui fait que l'exhibit se
lit en trois secondes.

## La charge

- **3 à 4 termes** dans la décomposition. Deux ne justifie pas l'exhibit, cinq
  casse la lecture horizontale.
- Libellé de terme : **un ou deux mots**.
- Une seule unité sur toute la bande, ne jamais mélanger des unités et des
  pourcentages.

## Variantes

- **Termes négatifs** : remplacer le `+` par `−`. Toujours l'écrire, ne jamais
  le laisser deviner par une barre descendante.
- **Bridge de coûts** : départ = coût actuel, termes = leviers, arrivée = coût
  cible. C'est le cost bridge classique du conseil.
- **Bridge de marge** ou de chiffre d'affaires, même anatomie.
- **Vertical** quand les libellés sont longs, on perd l'effet d'équation,
  sauf en version multiplicative (voir plus bas).

## Variantes vues en mission

Le bridge est l'archétype le plus partagé de la base : **six cabinets sur
huit**. Ce qui suit s'ajoute aux variantes ci-dessus.

### Waterfall à barres flottantes

La forme classique, quand les termes sont trop nombreux pour l'équation
horizontale (5-11 marches). Départ et arrivée en barres pleines posées sur
l'axe, termes en barres flottantes, **terme final dans l'accent** (OW BdE 2012 :
le besoin de capital en bout de waterfall ; un déficit dans une couleur
fonctionnelle).

### Waterfall de variance à zone surlignée (McKinsey NCDOT p. 8)

« Pourquoi l'écart entre prévu et réalisé ? » Départ = prévu, arrivée = réalisé.
Un **aplat léger regroupe les barres qui seront détaillées ensuite**
(« Deep dive to follow ») ; sous chaque barre, un **code de renvoi** (`2a`-`2d`)
qui devient le tracker des pages suivantes ; sous l'axe, une **ligne de
pastilles donne la part de chaque barre** dans l'écart (« 70 % expliqués par 4
causes ») ; un encadré à droite (~25 %) réécrit les parts en phrases. Les
causes non analysées restent en gris dans « Autres ». Charge : 8 barres. C'est
la porte d'entrée du [diagnostic de causes](diagnostic-causes.md).

### Équation verticale multiplicative (McKinsey NH p. 31, Strategy& V2G p. 14)

« D'où vient la taille ? » Les termes sont **multipliés**, pas additionnés :
`a` × `b` = `c`, opérateurs `×` et `=` en pastilles. McKinsey empile les termes
à la verticale, **chaque terme étant une petite série temporelle**, on voit
lequel tire la croissance. Strategy& reste horizontal (équation de
dimensionnement). Transposable tel quel en case de market sizing.

### Waterfall d'économies avec cible (Bain Berkeley p. 23, BCG NYCHA p. 43)

Départ = base de coûts, termes = leviers, arrivée = potentiel. Quatre ajouts :

- **fourchettes en étiquette** (« 12-19 ») ; chez BCG, **marches bicolores** :
  borne basse en plein, écart jusqu'à la borne haute en teinte claire, levier,
  incertitude et atteinte de la cible lus d'un coup ;
- un **terme négatif « chevauchement »** avant le total : on ne compte pas deux
  fois les économies de deux leviers qui touchent le même poste ;
- une **ligne pointillée de cible** traversant le graphe, avec encadré de
  recommandation ;
- une **ligne de dénominateurs sous l'axe** (Bain) : la base sur laquelle
  chaque levier s'applique, pour que le % soit vérifiable.

Charge : jusqu'à 11 marches. Deux cascades côte à côte (économies / recettes)
si deux natures de valeur.

### Plein / hachuré (Bain Green Economy p. 22)

Chaque barre est coupée en **partie pleine = acquis / inconditionnel** et
**partie hachurée = conditionnel** (à une réforme, un financement), avec des
**renvois lettrés** vers la condition. Le lecteur voit ce qui dépend de lui.

### Termes lettrés et double unité (Roland Berger CLEPA p. 14, DGE p. 40, UNIFE p. 5)

- **Pastilles A / B / C** sur les termes, qui renvoient aux sections du deck ;
- **accolade** au-dessus de la décomposition avec l'écart total ;
- **deuxième rangée de cartouches** sous la bande, dans une autre unité (Md€
  en haut, emplois en bas) ;
- **TCAM par terme** en pastille.

La double unité est la seule exception à « une seule unité sur toute la
bande » : elle est permise parce que chaque unité a **sa rangée**.

### Bridge de révision (Strategy& FIEN+ p. 38)

« Pourquoi la prévision a-t-elle changé ? » Ancienne prévision → effet prix →
effet volume → nouvelle prévision, % d'écart en cartouche sur chaque terme.

### Bridge signé par la couleur (Strategy& LNG p. 26)

La couleur code le **signe** (hausse / baisse) ou le **rôle** (propos vs
contexte), le total seul dans l'accent.

### Tableau-bridge (OW BAZL p. 23)

Le bridge intégré à un tableau : libellé | barre | % | commentaire, une ligne
par terme. Pour 6-10 termes qui ont chacun besoin d'une phrase.

### Leviers numérotés + mini-graphe (RB FCH 2017 p. 22)

Les leviers ne sont plus additionnés mais **un par ligne** : grand numéro,
levier et explication à gauche (60 %), mini-histogramme base → ajusté →
référence avec l'écart en bulle à droite (40 %). Pour des sensibilités
indépendantes, qui ne se somment pas.

### Variante à icônes (Bain Altagamma 2021 p. 3)

Une icône au-dessus de chaque marche remplace le libellé long.

## Rendu en paysage et en portrait

- **Paysage** : bande horizontale (équation) ou waterfall pleine largeur.
- **Portrait** : **reste horizontal, pleine largeur de colonne** (règle de
  [canevas](../canevas.md)) ; au-delà de 6 termes, passer au **tableau-bridge**
  ou à l'**équation verticale**, qui se lisent de haut en bas. Le waterfall à
  11 marches ne tient pas en portrait sous 8 pt : le scinder en deux cascades.

## À ne pas confondre

Avec le [football field](football-field.md), qui compare des **méthodes** sur un
même axe. Ici on décompose **un seul** écart. Si tu as plusieurs scénarios, ce
n'est pas un bridge.
