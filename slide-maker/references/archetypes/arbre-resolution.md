---
tags: [methode, decoupage, mece, case, conseil, couleur-par-axe, issue-tree]
maisons: [Oliver Wyman, Strategy&, McKinsey & Company]
famille: Conseil
archetype: Arbre de résolution (issue tree)
question: « Comment découpe-t-on le problème ? »
vu_chez: un case de conseil rendu (arbre de résolution en slide 5)
extrait_le: 2026-09-22
---

# Arbre de résolution

**Répond à :** comment la question posée se décompose en axes traitables, et
pourquoi ce découpage-là plutôt qu'un autre.

Sur un case, **c'est la slide qui prouve qu'on n'a pas deviné**. Elle est notée
autant que la réponse.

## Anatomie

Exhibit **pleine largeur**, trois niveaux de gauche à droite :

| Niveau | Contenu |
|---|---|
| **0** | La question racine, dans une boîte sombre pleine. Une seule |
| **1** | Les axes de décomposition, 3 en général. Chacun reçoit **sa teinte** dans la rampe d'accent |
| **2** | Les sous-questions de chaque axe, 2-3 par axe, dans la teinte de leur parent |

Chaque nœud de niveau 1 porte un **numéro** (`1`, `2`, `3`) et chaque nœud de
niveau 2 le numéro composé (`1.1`, `1.2`). Les connexions sont des traits fins,
pas des flèches : un arbre n'est pas un flux.

## Le mécanisme : la couleur comme fil conducteur

C'est la technique qui fait tout : **la teinte d'un
axe le suit dans tout le deck**. Pastille dans l'arbre (slide 5), équerre
d'angle de sa slide de détail (6, 7, 8), filet vertical de sa carte.

Le lecteur retrouve l'axe 2 **à la couleur, sans lire**. Sur un deck de 10
slides, c'est ce qui remplace un sommaire.

Corollaire opérationnel : **on ne choisit pas la rampe au moment de l'arbre, on
la choisit au moment du plan.** Trois axes = trois teintes réservées d'emblée.

## La charge

- **3 axes** au niveau 1. Deux ne ressemble pas à un découpage, quatre ne tient
  pas en largeur sur 1920 px avec un niveau 2 lisible.
- **2 à 3 sous-questions** par axe, et le **même nombre pour chaque axe**, un
  arbre déséquilibré se lit comme un découpage bâclé.
- Libellés de niveau 2 : **une ligne**. S'il en faut deux, la sous-question est
  mal posée.

## La règle MECE, et quand la dire

Les axes doivent être mutuellement exclusifs et collectivement exhaustifs. Si
le découpage ne l'est pas franchement, **l'écrire en note sous l'exhibit**
(« les trois axes se recouvrent partiellement sur X, traité dans l'axe 2 »)
plutôt que de laisser un correcteur le trouver.

## Variantes

- **Arbre vertical** (racine en haut) : plus naturel à lire mais mange la
  hauteur, à réserver aux arbres à 2 niveaux.
- **Arbre chiffré** : chaque nœud porte sa contribution en % ou en €. Transforme
  l'arbre en outil de priorisation, puissant quand les chiffres existent.
- **Niveau 3** : à éviter en 16:9, préférer une slide de détail par axe.

## Variantes vues en mission

- **Questions de recherche en tuiles** (OW Colorado 2023 p. 9) : l'arbre rendu
  en tuiles à deux familles (descriptif / explicatif).
- **Sommaire en questions** (McKinsey NCDOT 2019 p. 2) : les 4 questions du
  client deviennent les 4 sections ; l'arbre **est** le plan du deck.
- **Carte des barrières** (Strategy& EV smart charging 2024 p. 17, V2G p. 27) :
  arbre des barrières + matrice d'applicabilité à droite (✓ / ✗ par pays).
- **Objectif → KPI** (McKinsey Stop TB 2009 p. 19) : l'arbre opérationnel, une
  feuille = un indicateur.
- Le passage **de l'arbre aux recommandations** (constat → axe → mesure) est
  traité dans [diagnostic de causes](diagnostic-causes.md) ; la chaîne de
  calcul de chaque branche dans [fiche méthode](fiche-methode.md).
