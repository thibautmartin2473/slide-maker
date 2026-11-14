---
tags: [comparables, valorisation, multiples, ev-ebitda, concurrence, tableau, quantitatif, dense, im, pitch, fourchette]
maisons: [derive-du-nom-non-observe]
archetype: Peer financials & valuation (comparables boursiers)
famille: Conseil
question: « Que valent les pairs, et que dit leur valorisation de la nôtre ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (trading comps) ; fiche relue et corrigée au rendu d'une preuve (2026-10-29, données fictives)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: D10
extrait_le: 2026-10-29
---

# Peer financials & valuation

**Répond à :** en valorisation, la page des comparables boursiers est la base du
multiple. Elle doit montrer **les chiffres, la médiane et le lien** entre croissance
ou marge et multiple, pas seulement un tableau de VE/EBITDA.

**Comparaison traitée :** croissance, marge et multiples de chaque pair, puis relation
entre performance et valorisation. **Graphique natif :** tableau natif (à gauche) et
nuage de points `addChart` scatter (croissance contre VE/CA) avec droite de tendance
et l'entreprise étudiée en accent.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | multiple médian et décote ou prime de la cible |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | devise, date de cours, calendarisation |
| Tableau | 4,5 | 27 | 56,5 | 40 | pair, pays, VE, CA N+1, croissance, marge EBITDA, VE/CA, VE/EBITDA ; lignes **médiane** et **moyenne** (VE et CA compris : elles disent la taille) puis la cible en accent (budget, multiples laissés vides) |
| Nuage | 62 | 29 | 36 | 26 | croissance (x) contre VE/CA (y), droite de régression pointillée, **R² et n écrits sur le graphique**, cible en accent sur la droite |
| Panneau de lecture | 62 | 57 | 36 | 25 | « ce que le marché paie » : prime de croissance chiffrée, marge, taille (3 puces) |
| Fourchette appliquée | 4,5 | 70 | 56,5 | 12 | une ligne par règle : multiple x agrégat de la cible = VE implicite, puis fonds propres (VE − dette nette) |
| Pied | 4,5 | 91,5 | 91 | 4 | source des cours, définition de la VE, retraitements, arrondi des multiples |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Pairs | 6 à 12, critère de sélection écrit | oui |
| Date de cours | jour, devise | oui |
| VE | capitalisation + dette nette + minoritaires - actifs financiers ; définition en pied | oui |
| Agrégats | CA et EBITDA N+1, **calendarisés** à la même clôture ; croissance = CA N+1 / CA N − 1 ; marge = EBITDA N+1 / CA N+1 | oui |
| Multiples | VE/CA N+1 et VE/EBITDA N+1 ; « n.s. » si négatif ; arrondis à 0,1x **avant** d'être appliqués (le lecteur doit pouvoir refaire la multiplication) | oui |
| Régression | VE/CA sur la croissance ; n et R² affichés ; **jamais d'extrapolation** hors de l'étendue des pairs (avec 8 pairs, c'est un ordre de grandeur) | oui si nuage |
| Cible | agrégats du budget (statut sourcé, document cité), dette nette | oui |
| Règle de fourchette | écrite : borne basse = médiane sans prime ; borne haute = droite à la croissance de la cible ; décote de taille nommée mais non chiffrée si le nombre de pairs ne le permet pas | oui |
| Contre-vérification | l'autre multiple (EBITDA si le CA a servi, et inversement) ; l'écart est expliqué par la marge | oui |
| Source | fournisseur de données nommé, date d'extraction | oui |

## Titre-type

« Les pairs se valorisent **2,0x le CA** (médiane) ; la marge d'Orvane, **sous la
médiane**, ramène la valeur d'entreprise de **200 à 153 M€** » : le multiple, la valeur
et le point qui les sépare. Quand la cible a la marge des pairs : « ... notre cible, plus
rapide, vaut **2,0 à 2,7x le CA** ».

## Pièges

- Clôtures non calendarisées : les multiples ne sont pas comparables.
- Normes comptables mélangées (loyers IFRS 16) sans retraitement.
- Valeurs aberrantes dans la moyenne : donner la **médiane** d'abord.
- Multiples négatifs affichés en chiffres : « n.s. ».
- Pairs choisis pour leur multiple flatteur : écrire le critère de sélection.
- **Le multiple de CA seul** : il ignore la marge. Une cible à 14 % de marge contre 20,5 % en médiane vaut 200 M€ sur le CA et 153 M€ sur l'EBITDA ; afficher les deux et expliquer l'écart.
- Droite prolongée au-delà des pairs, ou donnée comme loi : 8 points, R² de 0,70, c'est une tendance.
- Une VE implicite donnée comme prix : elle devient une valeur des fonds propres seulement après la dette nette.

## Dense mais lisible

Médiane et moyenne en lignes de bas de tableau, cible en accent dans le nuage,
**fourchette appliquée** sous le tableau pour boucler vers la valeur. Voir aussi le
[football field](football-field.md) pour comparer les méthodes de valorisation entre
elles.

## Preuve rendue (données fictives)

Rendu de démonstration (données fictives), page 2 du deck de preuve :
tableau natif, nuage `addChart` scatter natif (droite, étiquettes et cible en surcouche),
fourchette appliquée en second tableau, données lues dans `sources/pairs-exemple.csv`. Le
rendu a corrigé la fiche sur : la contre-vérification par l'EBITDA (qui renverse la
lecture du seul multiple de CA), l'arrondi des multiples avant application, R² et n sur le
graphique, la dette nette pour passer à la valeur des fonds propres, et les proportions
(tableau et nuage plus larges qu'annoncé).
