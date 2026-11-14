---
tags: [pont, waterfall, decomposition, prevision, plan, croissance, quantitatif, dense, board, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Plan bridge by driver (pont du plan, driver par driver)
famille: Conseil
question: « Comment passe-t-on de l'année N au plan N+k, et quels drivers portent l'écart ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et du bridge existant
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A02
extrait_le: 2026-10-29
---

# Plan bridge by driver

**Répond à :** le lecteur d'un business plan ne croit pas le point d'arrivée, il veut
savoir **qui le porte**. Le pont par driver décompose l'écart entre le réalisé et
le plan en causes chiffrées, ordonnées par taille.

**Comparaison traitée :** un écart total, réparti entre drivers (volume, prix, mix,
périmètre, coûts). **Graphique natif :** cascade = barres empilées, série de base
invisible (`addChart` bar, `barGrouping: stacked`) ; `bridgeGroupes` de
`tools/lib.js` la produit déjà. Le bridge court de
[bridge](bridge.md) reste l'équation horizontale à 3-4 termes ; ici on en a 5 à 8.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | chiffre de l'écart et driver dominant, deux lignes max |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | métrique, unité, périmètre, années |
| Cascade | 4,5 | 26 | 66 | 56 | départ (foncé), drivers (vert hausse, rouge baisse), arrivée (foncé) ; libellé de valeur signé au-dessus ; ligne de raccord entre barres |
| Rangée de contexte | 4,5 | 82 | 66 | 7 | sous chaque barre : part de l'écart en % (pastilles) |
| Panneau de lecture | 73,5 | 26 | 22 | 63 | 3 constats en tête grasse, puis la phrase « ce qu'il faut croire » |
| Pied | 4,5 | 91,5 | 91 | 4 | note de définition des drivers, source, date |

Regrouper les barres par famille (cadre pointillé : volume, prix, coûts) quand il y
en a plus de 6 : c'est le move `bridge-a-groupes`.

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Départ | valeur, année, périmètre | oui |
| Arrivée | valeur, année, même périmètre | oui |
| Drivers | 5 à 8 lignes : libellé (3 mots max), valeur signée, nature, source | oui |
| Unité | une seule (M€ ou %), écrite sous le titre | oui |
| Statut de chaque driver | mesuré ou estimé (E) | oui |
| Dénominateur | base sur laquelle le driver s'applique | conseillé |

Contrôle avant dessin : départ + somme des drivers = arrivée, au chiffre près ;
sinon c'est une ligne « Autres », jamais un arrondi caché. « Autres » pèse moins de
15 % de l'écart.

## Titre-type

« Le plan 2029 ajoute **38 M€ d'EBITDA**, dont **24 M€** viennent des volumes en
Allemagne et du prix » : chiffre de l'écart, puis les drivers qui pèsent plus de la
moitié. Jamais « Pont d'EBITDA 2025-2029 » seul.

## Pièges

- Pont qui ne boucle pas, ou drivers non exclusifs (le prix compté dans le volume).
- Ordre alphabétique ou chronologique au lieu de l'ordre de taille décroissante.
- Mélange de CA et d'EBITDA, d'euros et de pourcentages dans le même pont.
- Même couleur pour hausse et baisse ; signe laissé à deviner : écrire `+` et `−`.
- Dix barres de 1 M€ : en dessous de 3 % de l'écart, fusionner.

## Dense mais lisible

Valeur signée au-dessus de chaque marche, % de l'écart dessous, un cadre pointillé
par famille, **un seul** panneau de texte à droite. La densité vient du contenu par
barre (valeur, part, nature), pas de barres supplémentaires.

## Variantes

Pont de marge (points), pont de CA par client ou par pays, pont de révision (ancien
plan, nouveau plan, voir [bridge](bridge.md)).

## Preuve

Rendu de démonstration, données fictives.
