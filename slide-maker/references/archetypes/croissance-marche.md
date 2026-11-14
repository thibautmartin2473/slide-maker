---
tags: [marche, etude-de-marche, croissance, scenarios, projection, lignes, quantitatif, dense, pitch, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Market growth (passé, futur et scénarios)
famille: Conseil
question: « À quelle vitesse le marché a-t-il grandi, et à quelle vitesse va-t-il grandir selon les scénarios ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche cone-trajectoires
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: C07
extrait_le: 2026-10-29
---

# Market growth

**Répond à :** la croissance du marché est le premier levier d'une valorisation de
société en croissance. Le lecteur veut le passé réel, une projection centrale et
une **fourchette**, avec le TCAM de chaque période et ce qui fait passer d'un
scénario à l'autre.

**Comparaison traitée :** série historique, puis trois trajectoires (bas, central,
haut). **Graphique natif :** barres pour le passé (`addChart` type bar) et lignes
pour les trois scénarios (type line), ou combo barres + lignes ; la frontière
réel / projection est une ligne verticale en formes natives, les années projetées en
teinte plus claire avec la mention E.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | TCAM passé, TCAM central, écart entre scénarios |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | marché en M€, période, périmètre |
| Graphique | 4,5 | 26 | 66 | 58 | série passée, trois trajectoires, étiquettes en début et en fin |
| Étiquettes de TCAM | (sur le graphique) | | | | une par période, posées entre deux années |
| Panneau « hypothèses des scénarios » | 73 | 26 | 22,5 | 58 | bas, central, haut : hypothèse de volume, de prix, de réglementation |
| Pied | 4,5 | 91,5 | 91 | 4 | sources, méthode de projection, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Série passée | valeur par année, source | oui, 3 ans minimum |
| Scénarios | bas, central, haut, mêmes années | oui |
| TCAM | par période, formule écrite : (fin / début)^(1/n) - 1, n = années entre les bornes | oui |
| Hypothèse par scénario | texte d'une ligne chacune | oui |
| Frontière | dernière année réelle | oui |
| Périmètre | identique à la slide de définition | oui |

## Titre-type

« Le marché croît de **9 % par an** (exemple fictif) depuis trois ans ; entre 6 % et
13 % d'ici 2030 selon le rythme d'adoption ». Chiffres d'exemple, à remplacer par
les données sourcées.

## Pièges

- Scénario haut copié de la prévision d'un éditeur sans regarder son intérêt.
- TCAM calculé sur une année de creux ou de pic exceptionnel : écrire la base.
- Trois trajectoires qui ne diffèrent que d'un coefficient, sans hypothèse distincte.
- Passé et projection dans la même teinte.

## Dense mais lisible

La fourchette s'ouvre à partir de la dernière année réelle, pas avant. Trois lignes,
une seule en trait plein (le central). Voir [cône de trajectoires](cone-trajectoires.md)
et [décomposition de la croissance](decomposition-croissance.md).

## Preuve rendue (données fictives)

Rendu de démonstration (forme dense, données fictives d'une société imaginaire, Orvane). Ce que le rendu a corrigé dans la fiche :

- **Combo natif barres + lignes** (pptxgenjs mélange les types avec des options par type) : barres du réel depuis 0, trois lignes de scénario qui partent de la dernière année réelle (le cône s'ouvre à 2025, pas avant), valeurs manquantes en « trou » et non en zéro.
- Zone projetée en teinte claire, frontière réel / projection en pointillé, TCAM du passé en accolade, TCAM de chaque scénario à l'extrémité de sa ligne. Bas et haut en gris pointillé (le XML est corrigé : pptxgenjs impose un seul tracé par graphique), central en trait plein.
- **Trois scénarios qui diffèrent par une hypothèse**, pas par un coefficient : chacun est décrit en volume et en prix, et le script refuse si ces deux taux ne redonnent pas le TCAM affiché à 0,1 point près.
- Test de bon sens ajouté : le central doit rester sous la **dernière année observée** (+7,0 %) quand le rythme se tasse ; sinon il suppose une reprise et doit le dire.
- Le scénario haut n'est pas celui d'un éditeur : écrit en note.
