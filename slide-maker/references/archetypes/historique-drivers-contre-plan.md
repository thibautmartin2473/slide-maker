---
tags: [drivers, plan, historique, small-multiples, hypotheses, verification, quantitatif, dense, board, valorisation, levee-de-fonds]
maisons: [derive-du-nom-non-observe]
archetype: Driver history vs plan (historique de chaque driver contre l'hypothèse du plan)
famille: Conseil
question: « Chaque hypothèse du plan est-elle cohérente avec ce que le driver a réellement fait par le passé ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (test de crédibilité d'un business plan en due diligence)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: B12
extrait_le: 2026-10-29
---

# Driver history vs plan

**Répond à :** un plan repose sur 6 à 10 drivers (croissance des clients, ARPC,
marge brute, rétention, coût d'acquisition). L'exhibit met chaque driver en **petit
graphique**, avec son historique et l'hypothèse du plan prolongée, et dit si la rupture
de tendance est justifiée. C'est le test de crédibilité du plan, driver par driver.

**Comparaison traitée :** série passée contre trajectoire future, par driver.
**Graphique natif :** petits multiples (move `small-multiples`) : une grille de 6 à 8
graphiques en ligne (`addChart` line), réel en trait plein, plan en pointillé, frontière
verticale entre les deux (`frontiere-reel-projection`) ; un statut par graphique avec le
mot écrit. Move proche : `cible-vers-realise`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | nombre de drivers en rupture et leur poids dans le plan |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | historique (années), horizon du plan, unité propre à chaque driver |
| Grille de graphiques | 4,5 | 26 | 91 | 55 | 2 lignes x 3 ou 4 colonnes ; chaque cellule : titre du driver, courbe, dernière valeur, valeur plan N+k |
| Bandeau de statut | 4,5 | 82 | 91 | 7 | par driver, un mot : En ligne, À étayer, Rupture, avec l'écart en points ou en % |
| Pied | 4,5 | 91,5 | 91 | 4 | règle de statut (écart à la moyenne historique), source, date |

Chaque cellule de la grille mesure environ 22 % de largeur sur 26 % de hauteur ; le
titre du driver est en corps 11, la valeur en 10, les axes en 9.

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Driver | nom, unité, définition | oui |
| Historique | 3 à 5 ans (ou trimestres), même définition que le plan | oui |
| Hypothèse du plan | valeur par année du plan | oui |
| Référence externe | médiane des pairs ou fourchette de marché, sourcée | conseillé |
| Justification de la rupture | événement, investissement ou contrat qui change la pente | oui si rupture |
| Poids dans le plan | part de la valeur dépendant du driver | conseillé |

Règle de statut type, à écrire en pied : **En ligne** si le plan reste dans l'écart
historique observé ; **À étayer** s'il le dépasse mais avec une cause identifiée ;
**Rupture** sinon.

## Titre-type

« **3 des 8 drivers** du plan rompent avec leur historique, et portent **70 %** de la
croissance projetée » (chiffres fictifs). Pas « Drivers : historique et plan ».

## Pièges

- Échelles différentes d'un graphique à l'autre qui rendent les pentes incomparables : au moins afficher les valeurs de début et de fin.
- Historique trop court (1 an) pour juger une tendance.
- Plan prolongé en ligne droite à partir du dernier point, sans traduire un vrai raisonnement.
- Drivers corrélés comptés comme des tests indépendants.
- Statut en couleur seule : écrire le mot.

## Dense mais lisible

Mêmes dimensions de cellule, même rendu de courbe, valeur finale étiquetée, une seule
cellule en accent par ligne (la plus tendue). Le bandeau de statut condense la
lecture en un mot par driver.

Voisins : [scorecard-hypotheses](scorecard-hypotheses.md),
[plan-contre-marche](plan-contre-marche.md), [plan-vue-ensemble](plan-vue-ensemble.md).

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- Grille de **huit petits graphiques natifs** (2 x 4), une échelle par driver mais début, dernière année réelle et fin de plan écrits ; historique en trait plein, plan en pointillé (XML corrigé), frontière en filet fin entre 2025 et 2026.
- **Statut calculé par script, pas jugé** : le rythme annuel du plan (TCAM, ou points par an pour un ratio) est comparé au meilleur rythme annuel observé, **dans le sens favorable du driver** (un coût qui baisse est favorable). En ligne si le plan ne dépasse pas ce meilleur rythme ; À étayer jusqu'à 3 points de plus avec une cause identifiée ; Rupture sinon. Un plan plus prudent que l'historique n'est jamais signalé.
- Le statut est écrit en mot et en couleur, avec le rythme du plan et le meilleur observé sur la ligne dessous. Une cellule en accent par ligne (la plus tendue).
- **Poids dans le plan** calculé : part du logarithme de la croissance du CA portée par le prix (CA = clients x ARPC), 25 % dans l'exemple. Les drivers corrélés ne sont pas des tests indépendants : à dire en pied dans une vraie page.
- Titre et bandeau citent le nombre de drivers par statut ; le registre en vérifie le décompte.
