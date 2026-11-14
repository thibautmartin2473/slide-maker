---
tags: [dumbbell, plage, dispersion, benchmark, comparaison, categories, conseil, automobile]
maisons: [Oliver Wyman, BCG, McKinsey & Company, Strategy&, Roland Berger, PMP Strategy]
famille: Conseil
archetype: Plage min-max (dumbbell)
question: « Quelle est l'étendue au sein de chaque catégorie ? »
vu_chez: Oliver Wyman (Automotive Labor Cost per Vehicle, p. 7)
extrait_le: 2026-09-22
---

# Plage min-max

**Répond à :** montrer qu'une catégorie n'est pas un chiffre mais un intervalle,
et que l'écart interne compte parfois plus que l'écart entre catégories.

Une barre classique donnerait une moyenne, et la moyenne mentirait.

## Anatomie

| Zone | Contenu |
|---|---|
| **Libellés** | à gauche, une ligne par catégorie, alignés à gauche |
| **Haltères** | une ligne épaisse en couleur claire, **une pastille pleine à chaque extrémité**, avec la valeur chiffrée à l'extérieur de chaque pastille |
| **Axe** | horizontal, en bas, gradué, commun à toutes les lignes |
| **Ligne d'unité** | sous le titre de l'exhibit : `Engineered hours per unit (EHPV), 2024` |

Titre en assertion, puis la ligne d'unité, puis le graphique, puis
`Source:` en petit.

## Le mécanisme

**L'œil compare deux choses à la fois** : la position de l'haltère sur l'axe
(le niveau) et sa longueur (la dispersion). Sur la source, les premiums
européens et les constructeurs EV occupent des plages larges, 8 à 32, 7 à 28,
tandis que les chinois tiennent dans 5 à 11. La conclusion n'est pas « les
chinois sont moins chers », elle est **« les chinois sont plus homogènes »**, et
c'est un argument qu'aucune barre de moyenne ne pourrait porter.

**Les valeurs sont écrites aux deux extrémités**, jamais dans une infobulle ni
en annexe. L'exhibit doit rester lisible imprimé en noir et blanc.

## La charge

- **3 à 6 catégories.** Au-delà, les lignes se tassent.
- **Axe commun obligatoire**, démarrant à zéro sauf raison explicite, ici la
  dispersion est le propos, un axe tronqué l'exagérerait.
- Tri : **par borne basse**, ou par étendue si c'est la dispersion qu'on
  démontre. Jamais par ordre alphabétique.

## Variantes

- **Médiane ajoutée** : une troisième pastille, de couleur distincte, sur la
  ligne. Utile quand la distribution est asymétrique.
- **Deux périodes superposées** (N et N-5) pour montrer un resserrement.
- **Vertical** quand les catégories sont des années.
- **Avec référence** : une ligne verticale en pointillés pour la moyenne du
  marché, traversant tout le graphique.

## En PPTX natif : l'haltère n'existe pas

**PowerPoint n'a pas de type dumbbell** (constaté le 2026-09-22). Deux sorties,
et le choix se dit à l'utilisatrice plutôt que de se faire en silence :

- **Barres min/max groupées**, deux séries, `barDir: "bar"`, valeurs affichées
  aux deux extrémités. Entièrement natif et éditable, mais l'œil lit deux
  valeurs au lieu d'une plage : la dispersion, qui est le propos, s'efface.
- **Le vrai haltère**, une barre empilée dont le segment de base est
  transparent, plus deux ellipses `addShape` par ligne pour les pastilles. Rend
  l'intention, mais les pastilles sont posées en coordonnées absolues : elles se
  désalignent dès que les données ou la taille du cadre changent.

Le premier tient dans le temps, le second est fidèle. Par défaut le premier, et
on passe au second quand la dispersion est le cœur du message.

## À ne pas confondre

Avec le [football field](football-field.md), qui empile aussi des plages, mais
là, une plage = une **méthode de valorisation** du même objet. Ici, une plage =
une **population** distincte.

## Variantes vues en mission

- **Plage à marqueurs** (BCG Connecticut 2023, exh. 11) : sur chaque barre
  min-max, des **triangles** placent les sous-populations ; « quelle étendue,
  et où se placent les sous-cas ? ».
- **Haltère par catégorie** (McKinsey Indiana 2023 p. 7) : même marque, mais
  entre **deux états** (avant / après) au lieu de min / max ; catégories
  regroupées en blocs, écart écrit sur le trait.
- **Fourchette par segment avec sous-totaux** (Strategy& / PwC 2024 p. 15) :
  accolades de sous-total par groupe de segments, total en fourchette.
- **Classement en paliers définis** (RB FCH 2017 p. 8) : l'étendue découpée en
  paliers chiffrés avant d'être remplis, voir
  [scoring multicritère](scoring-multicritere.md).
- **Nuage à zone critique** (PMP) : points par acteur, une zone ombrée sous le
  seuil ; « combien d'acteurs sont sous le seuil ? ».
