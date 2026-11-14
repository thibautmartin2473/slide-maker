---
tags: [croissance, leviers, priorisation, nuage-de-bulles, matrice, plan, quantitatif, board, levee-de-fonds, usage-des-fonds]
maisons: [derive-du-nom-non-observe]
archetype: Growth lever map (carte des leviers de croissance, impact contre effort)
famille: Conseil
question: « Quels leviers de croissance activer d'abord, compte tenu de leur impact et de leur effort ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil (matrice de priorisation) et finance (usage des fonds)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A11
extrait_le: 2026-10-29
---

# Growth lever map

**Répond à :** une levée de fonds finance des leviers, pas une intention. La carte
classe 8 à 12 leviers selon l'**impact chiffré** (M€ de CA ou d'EBITDA à horizon du
plan) et l'**effort** (coût, délai, risque), et désigne ceux que les fonds servent.

**Comparaison traitée :** impact contre effort, taille de bulle = coût ou
investissement. **Graphique natif :** nuage de bulles (`addChart` bubble) : x = effort,
y = impact, taille = investissement requis ; zones tracées en formes (rapides à
lancer, paris structurants, à écarter). Un tableau récapitulatif complète. Move proche :
`matrice-a-zones` ; voir aussi la [matrice de priorisation](matrice-priorisation.md).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | nombre de leviers retenus et part de l'impact qu'ils couvrent |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | horizon, unité d'impact, définition de l'effort |
| Nuage | 4,5 | 26 | 55 | 60 | axes gradués, 3 zones, bulles numérotées, bulles retenues en accent |
| Tableau des leviers | 61 | 26 | 34,5 | 60 | n°, levier, impact M€ (bas, haut), investissement, délai, responsable |
| Pied | 4,5 | 91,5 | 91 | 4 | méthode de chiffrage, hypothèses communes, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Levier | verbe et objet, 4 mots (ouvrir l'Allemagne, hausser les prix) | oui |
| Impact | M€ de CA ou d'EBITDA à N+k, fourchette bas et haut (la bulle se place sur le milieu) | oui |
| Effort | score composite défini (complexité, ressources, dépendances) : jamais l'investissement lui-même, qui porte la taille de bulle | oui |
| Investissement | M€ à engager, taille de la bulle | oui |
| Délai | trimestres avant effet | oui |
| Risque | faible, moyen, élevé, avec motif | oui |
| Chevauchement | leviers dont les effets se recoupent | oui |

Les impacts sont **bruts** ou **nets des recoupements** : le dire. La somme des
leviers dépasse presque toujours le plan.

## Titre-type

« **4 leviers sur 11** couvrent **70 %** de l'impact du plan pour **40 %** de
l'investissement ; les fonds levés financent les trois premiers » (fictif).

## Pièges

- Axe d'effort non défini : chacun y met sa notion de difficulté.
- Bulles chevauchées et illisibles : numéroter, ne pas écrire de noms dans les bulles.
- Impacts additionnés sans corriger des recoupements (le prix et le volume jouent l'un sur l'autre).
- Positionnement au jugé ; pas de lien entre la carte et le plan chiffré.
- Plus de 12 bulles : retenir les plus gros et renvoyer le reste en annexe.

## Dense mais lisible

Numéro dans la bulle, nom dans le tableau à droite, couleurs : accent pour retenu,
gris pour reste. La fourchette bas / haut apparaît dans le tableau, pas sur le nuage.

Voisins : [pont-valeur-ia-vers-plan](pont-valeur-ia-vers-plan.md),
[pont-par-driver](pont-par-driver.md).

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- **Nuage de bulles natif** (effort en x, impact central en y, surface = investissement), bulles numérotées par un texte centré, le nom du levier uniquement dans le tableau. Axe de l'impact jusqu'à 6,5 et non 6 : la plus grosse bulle était rognée par le haut du graphique.
- **Effort défini et recalculé** : moyenne de trois notes de 1 à 10 (complexité, ressources, dépendances), jamais l'investissement. Règle de sélection écrite et testée par script : effort de 6 ou moins et impact de 1 M€ ou plus, c'est-à-dire un rectangle de la carte (une règle en ratio impact sur investissement ne se lit pas sur le nuage).
- Trois zones tracées derrière le graphique (à lancer, paris structurants, à écarter), retenus en vert, autres en gris ; fourchette bas à haut dans le tableau seulement.
- Impacts **bruts** dits sous le graphique ; recoupements nommés en pied (prix et module IA, Allemagne et Italie). Sans ce rappel, la somme de 25,5 M€ se lit comme un plan.
- Le tableau à 10 lignes de 16 pt ne laisse qu'une puce au panneau : on y met le fait qui fait décider (les deux paris pèsent 38 % de l'impact pour 57 % de l'investissement). Noms de levier de 22 caractères au plus, sinon la ligne passe à deux lignes et déborde.
