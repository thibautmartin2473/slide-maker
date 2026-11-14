---
tags: [pont, waterfall, ia, intelligence-artificielle, plan, incertitude, fourchette, quantitatif, dense, board, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: AI value bridge to plan (pont de valeur de l'IA vers le plan)
famille: Conseil
question: « Que l'IA ajoute-t-elle au plan de base, cas d'usage par cas d'usage, avec quelle incertitude ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil (pont) et du move d'incertitude dessinée
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A12
extrait_le: 2026-10-29
---

# AI value bridge to plan

**Répond à :** un plan « augmenté par l'IA » est vite suspect. Le pont sépare le
**plan de base** (sans IA) du **plan cible** (avec IA) et chiffre chaque cas d'usage
par une **fourchette**, pas par un point. Le lecteur voit ce qui est acquis et ce qui
est un pari.

**Comparaison traitée :** un écart entre deux plans, réparti par cas d'usage (gain de
productivité, réduction de coûts, nouveau revenu), avec bas et haut. **Graphique
natif :** cascade en barres empilées à base invisible (`addChart` bar stacked), les marches
s'enchaînent sur la valeur **centrale** (le pont boucle exactement : base + somme des centres = plan
cible central) ; la fourchette bas-haut de chaque cas d'usage est une barre d'étendue affichée
sur la marche (étiquette « 2 à 5 »), jamais le chaînage lui-même. Convention retenue le 2026-10-29
(défendable en banque d'affaires : le scénario central est celui qu'on valorise, et un pont qui
chaîne sur les bas décrit un scénario que personne ne défend ; les bornes se somment, mais leur
somme est un cas extrême, pas un scénario). Moves proches : `incertitude-dessinee`, `bridge-a-groupes`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | gain central et fourchette, part du plan cible |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | métrique (EBITDA N+k), unité, scénario de référence |
| Cascade | 4,5 | 26 | 62 | 52 | plan de base (foncé), 4 à 7 cas d'usage, plan cible (foncé) ; fourchette par marche |
| Rangée de maturité | 4,5 | 79 | 62 | 8 | sous chaque marche : maturité (idée, pilote, déployé) en mots |
| Panneau de lecture | 69 | 26 | 26,5 | 61 | investissement requis, délai de gain, scénario bas : le plan tient-il sans IA ? |
| Pied | 4,5 | 91,5 | 91 | 4 | méthode de chiffrage, source de chaque hypothèse, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Plan de base | valeur à N+k, sans l'effet IA | oui |
| Cas d'usage | 4 à 7 lignes : libellé, effet bas, effet haut, nature | oui |
| Maturité | idée, pilote, déployé | oui |
| Coût de mise en oeuvre | M€ et calendrier | oui |
| Plan cible | base + effets, en trois valeurs : bas (base + somme des bas), centre, haut ; les marches s'enchaînent sur les centres ; bas et haut sont affichés en bornes (étiquette et barre d'étendue) et sont des bornes extrêmes, pas un intervalle de confiance | oui |
| Hypothèse clé | taux d'adoption, gain unitaire mesuré | oui |
| Chevauchement | deux cas d'usage qui touchent le même poste de coûts | oui |

Le plan de base reste **défendable seul** : si le plan ne tient que grâce à l'IA, le
titre doit le dire.

## Titre-type

« L'IA ajoute **entre 3 et 9 M€** d'EBITDA en 2029 (centre 6 M€), soit **15 %** du plan
cible, dont 2 M€ déjà en pilote » (exemple fictif).

## Pièges

- Effets sans fourchette : un seul chiffre prête une précision qui n'existe pas.
- Gains de productivité comptés comme des économies alors que les équipes ne sont pas réduites.
- Cas d'usage non exclusifs : le même poste de coûts économisé deux fois.
- Coûts d'intégration, de données et de maintenance oubliés, seul le brut est affiché.
- Mélange d'un cas d'usage déployé et d'une idée dans la même couleur.

## Dense mais lisible

Fourchette dessinée (tranche hachurée) plutôt que décrite, maturité en mots sous la
marche, un seul panneau de texte. Le centre porte l'étiquette de valeur, les bornes bas et haut sont écrites en petit à côté ; la note de pied rappelle que la somme des bornes est un cas extrême.

Voisins : [pont-par-driver](pont-par-driver.md), [carte-leviers-croissance](carte-leviers-croissance.md).

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- Le chevauchement est une **marche à part** (retrait central de 0,3 M€, bornes de 0,1 à 0,5), pas une note : sans elle le pont ne boucle pas avec la somme des cas d'usage.
- Les bornes du plan cible (base + somme des bas, base + somme des hauts) se dessinent en **trait à capuchons** sur la colonne du plan cible ; elles sont dites « cas extrême, pas un scénario » dans le panneau et les notes.
- Pont à **axe tronqué** (les totaux dépassent de beaucoup les marches) : le dire sous le graphique (« axe tronqué à 34 M€ »), jamais en silence.
- Sous chaque colonne, deux rangées d'étiquettes : **fourchette bas à haut** et **maturité** en mots (pilote, idée, déployé) ; la part « déjà en pilote » du titre se somme sur les centres, hors idées.
- Retraits en corail, gains en vert foncé, toujours avec le signe écrit (+ ou moins) ; les valeurs sont suivies de (E) dans la conclusion.
