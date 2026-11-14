---
tags: [plan, business-plan, trajectoire, croissance, marge, quantitatif, dense, board, levee-de-fonds, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Business plan overview (vue d'ensemble du plan, historique puis projection)
famille: Conseil
question: « Où l'entreprise est-elle passée, où le plan l'emmène-t-il, et par quels jalons ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et finance (board paper, memorandum de levée)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A01
extrait_le: 2026-10-29
---

# Business plan overview

**Répond à :** c'est la page d'ouverture d'un plan. Le lecteur veut voir en une
seule vue la **trajectoire** (CA, EBITDA, marge), l'endroit où le réalisé cesse et
où la projection commence, et les **jalons** qui conditionnent le chemin.

**Comparaison traitée :** une série annuelle, réalisé puis plan, avec une marge qui
évolue en parallèle. **Graphique natif :** barres du CA (`addChart` bar) plus ligne de
marge d'EBITDA sur axe secondaire (combo natif) ; réalisé en plein, plan en teinte
claire ou hachurée (une série par statut, pas une couleur par année). Move proche :
`frontiere-reel-projection`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | TCAM du plan et marge visée en fin de période |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | métrique, unité, exercice, périmètre, réel ou plan |
| Graphique | 4,5 | 26 | 62 | 40 | barres CA, ligne de marge, trait vertical à la frontière réel / plan |
| Frise de jalons | 4,5 | 67 | 62 | 20 | 4 à 6 jalons datés (produit, pays, recrutement, levée), alignés sur l'axe des années |
| Tableau de synthèse | 69 | 26 | 26,5 | 40 | CA, EBITDA, marge, effectifs pour 3 années clés (dernier réel, N+1, N+k) |
| Panneau de lecture | 69 | 67 | 26,5 | 20 | 2 constats : ce qui change de rythme, ce qui est financé par la levée |
| Pied | 4,5 | 91,5 | 91 | 4 | définition de l'EBITDA, source, date d'arrêté du plan |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| CA par année | M€, 3 ans de réel au moins, 3 à 5 ans de plan | oui |
| EBITDA et marge | M€ et %, même définition sur toute la série | oui |
| Statut de chaque année | réalisé, atterrissage, plan | oui |
| Jalons | date (trimestre), libellé de 4 mots, lien avec une ligne du plan | oui |
| Effectifs ou clients | une grandeur d'échelle | conseillé |
| Scénario | central, ou bas / central / haut en annexe | conseillé |

Une année en cours est un **atterrissage** (réel partiel plus prévision), jamais du
réalisé. Exercice décalé ou changement de périmètre : le dire en sous-titre.

## Titre-type

« Le plan fait passer le CA de **12 M€ (2026) à 41 M€ (2030)** (TCAM 36 % sur 4 ans) et la
marge d'EBITDA de **-8 % à +14 %** » (chiffres d'exemple, fictifs ; TCAM = (fin / début)^(1/n) - 1,
n = nombre d'années entre les deux bornes). Pas « Aperçu du business plan ».

## Pièges

- Frontière réel / plan invisible : le lecteur prend la projection pour de l'historique.
- Marge sur un axe tronqué qui fabrique une pente ; ou deux axes sans étiquettes de valeur.
- Jalons décoratifs, sans lien chiffré avec le plan (un jalon doit déplacer une barre).
- Réalisé et plan avec des définitions d'EBITDA différentes (IFRS 16, capitalisation de R&D).
- TCAM calculé sur une année de départ quasi nulle.

## Dense mais lisible

Étiquettes de valeur sur chaque barre (10 pt), marge en ligne avec points étiquetés,
tableau limité à 3 années, une seule phrase de lecture par constat. La frise ajoute
l'information « pourquoi » sans ajouter de série.

Voisins : [pont-par-driver](pont-par-driver.md) pour expliquer l'écart,
[plan-contre-marche](plan-contre-marche.md) pour le confronter au marché,
[historique-drivers-contre-plan](historique-drivers-contre-plan.md) pour tester les drivers.
