---
tags: [catalogue, index, conseil, quantitatif, dense, tam, croissance, valorisation, comparables, concentration, etude-de-marche, tableau]
maisons: [derive-du-nom-non-observe]
archetype: Catalogue des 48 archétypes analytiques (index)
famille: Conseil
question: « Quel exhibit dense pour quelle comparaison ? »
vu_chez: aucun rendu observé ; 48 noms relevés sur la galerie publique d'un outil de slides (2026-10-29), rendus illisibles à cette échelle
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
extrait_le: 2026-10-29
---

# Catalogue des 48 archétypes analytiques

**Limite honnête.** Les 48 noms viennent d'une galerie publique dont les miniatures
sont illisibles. Aucun rendu n'a été observé : tout ce qui suit (comparaison,
graphique, données exigées) est **dérivé du nom** et du savoir conseil / finance.
Aucun texte, logo ni marque tiers n'est repris. Une fiche passe de `derive` à
`observe` seulement si un vrai exemple (deck de banque ou de cabinet) la corrige :
la mesurer alors, la corriger, noter la source dans `vu_chez`.

**Rapport avec les moves ([moves.md](../moves.md)).** Les 28 moves servent l'**impact** (une idée,
un accent). Ces archétypes servent l'**analyse** : une comparaison précise, un
contrat de données, une densité assumée. On combine : l'archétype dit quoi
montrer et avec quelles données, le move dit comment le rendre fort.

**Choix du graphique par la comparaison.** Ce qui explique un écart : cascade.
Part contre taille : Mekko. Classement : barres triées. Rétention : grille de
cohortes. Plage et méthode : barres flottantes. Positionnement : nuage. Calendrier :
frise. Comparer de nombreux attributs : tableau.

**Statuts.** `fiche` = fiche détaillée écrite (liée dans la colonne Statut) ;
`fiche+preuve` = fiche et PPTX de démonstration rendu ; `à faire` = nom seul.
Graphique natif = type `addChart` de pptxgenjs ; « cascade » = barres empilées à
base invisible (pas de type cascade natif), « grille » = tableau natif à fonds
conditionnels.

## Famille A - Board papers (plan, marché, thèse)

| N° | Archétype | Comparaison traitée | Graphique natif conseillé | Données exigées | Statut | Move proche |
|---|---|---|---|---|---|---|
| A01 | Business plan overview | trajectoire historique puis plan, avec jalons | barres + ligne de marge | CA, EBITDA, marge par année, réel ou plan | [fiche](plan-vue-ensemble.md) | frontiere-reel-projection, small-multiples |
| A02 | Plan bridge by driver | écart entre l'année N et le plan N+k, par driver | cascade | départ, arrivée, drivers signés, unité unique | [fiche+preuve](pont-par-driver.md) | bridge-a-groupes, rangee-unite |
| A03 | Assumption scorecard (RAG) | chaque hypothèse du plan contre sa preuve | tableau + pastilles | hypothèse, valeur, preuve, statut R/A/G | [fiche+preuve](scorecard-hypotheses.md) | table-au-pas, tableau-graphique |
| A04 | Plan vs market cross-check | croissance et marge du plan contre marché et pairs | barres groupées + ligne de référence | TCAM plan, TCAM marché, médiane des pairs | [fiche](plan-contre-marche.md) | ligne-de-reference, cible-vers-realise |
| A05 | Business profile on a page | l'entreprise en un coup d'oeil | tuiles + donut | 8 à 10 KPI, répartition CA | [fiche](profil-entreprise-page.md) | chiffres-heros, donut-sobre ; kpi-tiles |
| A06 | VoC summary dashboard | ce que disent les clients, critère par critère | barres horizontales triées | score par critère, n répondants, verbatims | [fiche](voix-client-tableau-de-bord.md) | table-au-pas |
| A07 | TAM / SAM / vended market bridge | du marché total au marché réellement adressé | cascade décroissante | TAM, filtres successifs, SAM, SOM | [fiche+preuve](pont-tam-sam-som.md) | entonnoir-encastre, bridge-a-groupes |
| A08 | Market size triangulation | taille du marché selon plusieurs méthodes | barres flottantes (plage) | une fourchette par méthode, hypothèses | [fiche+preuve](triangulation-taille-marche.md) | mise-entre-parentheses ; football-field, plage-min-max |
| A09 | Right to play / right to win | ce qui permet d'entrer, ce qui permet de gagner | tableau + pastilles | critères, preuve, statut | [fiche](droit-de-jouer-droit-de-gagner.md) | scoring-multicritere |
| A10 | Moats & barriers to entry | solidité de chaque barrière | barres notées | barrière, note 0-5, preuve | [fiche](douves-barrieres-entree.md) | scoring-multicritere |
| A11 | Growth lever map | leviers de croissance, impact contre effort | nuage de bulles | levier, impact (M€), effort, délai | [fiche+preuve](carte-leviers-croissance.md) | matrice-a-zones ; matrice-priorisation |
| A12 | AI value bridge to plan | ce que l'IA ajoute au plan de base | cascade à fourchettes | plan de base, effet par cas d'usage (bas, haut), plan cible | [fiche+preuve](pont-valeur-ia-vers-plan.md) | incertitude-dessinee, bridge-a-groupes |

## Famille B - Finance (revenus, clients, unités)

| N° | Archétype | Comparaison traitée | Graphique natif conseillé | Données exigées | Statut | Move proche |
|---|---|---|---|---|---|---|
| B01 | ARR evolution | variation du revenu récurrent par cause (nouveau, expansion, perte) | cascade trimestrielle | ARR début, new, expansion, contraction, churn | [fiche+preuve](evolution-arr.md) | bridge-a-groupes, serie-annotee |
| B02 | Revenue by product | contribution de chaque produit dans le temps | barres empilées + part | CA par produit et par année | [fiche](revenu-par-produit.md) | pastilles-au-pas, donut-sobre |
| B03 | Customer count x ARPC | CA = nombre de clients x revenu moyen | barres + ligne, deux séries | clients, ARPC, CA par période | [fiche](clients-fois-arpc.md) | equation-de-graphiques, small-multiples |
| B04 | Profitability & cost structure | marge et poids de chaque poste de coûts | barres empilées à 100 % | coûts par poste, % du CA | [fiche+preuve](rentabilite-structure-couts.md) | rangee-unite |
| B05 | Customer base segmentation | segments de clients : taille, valeur, fidélité | Mekko ou barres | segments, CA, ARPC, rétention | [fiche](segmentation-base-clients.md) | mekko |
| B06 | Cohort analysis | rétention de chaque cohorte au fil du temps | grille + courbe | cohorte, taille initiale, % restant par période | [fiche+preuve](analyse-cohortes.md) | tableau-graphique, small-multiples |
| B07 | Retention and churn | fidélité en logos et en valeur | lignes | GRR, NRR, churn logos, par période | [fiche+preuve](retention-churn.md) | small-multiples |
| B08 | Cross-sell / upsell | qui achète quoi, et où est le potentiel | grille produits x clients | clients, produits détenus | [fiche](cross-sell-upsell.md) | tableau-graphique |
| B09 | Customer concentration | dépendance aux plus gros clients | Pareto (barres + courbe cumulée) | CA par client, total | [fiche](concentration-clients.md) | pastilles-au-pas, gris-un-accent |
| B10 | Sales funnel & unit economics | conversion par étape, coût et valeur d'un client | entonnoir + tuiles | volumes par étape, CAC, marge, durée de vie | [fiche](entonnoir-vente-unit-economics.md) | entonnoir-encastre, chiffres-heros |
| B11 | Free to paid funnel | passage de l'usage gratuit au payant | entonnoir | inscrits, actifs, payants, délai | [fiche](entonnoir-gratuit-payant.md) | entonnoir-encastre |
| B12 | Driver history vs plan | chaque driver passé contre l'hypothèse du plan | petits multiples | série historique, valeur plan | [fiche+preuve](historique-drivers-contre-plan.md) | frontiere-reel-projection, cible-vers-realise |

## Famille C - Taille de marché

| N° | Archétype | Comparaison traitée | Graphique natif conseillé | Données exigées | Statut | Move proche |
|---|---|---|---|---|---|---|
| C01 | Market definition & scope | ce qui est dans le périmètre, ce qui n'y est pas | schéma + tableau | définitions, exclusions, motif | [fiche](definition-perimetre-marche.md) | arbre-resolution |
| C02 | Segmentation & where to play | segments attractifs et accessibles | nuage de bulles | taille, croissance, accessibilité par segment | [fiche](segmentation-ou-jouer.md) | matrice-a-zones |
| C03 | Sizing method & driver tree | comment la taille est calculée | arbre de formes | drivers, valeurs, sources | [fiche](methode-arbre-drivers.md) | equation-de-graphiques ; fiche-methode |
| C04 | Bottom-up sizing build | taille construite par unités x prix | barres + tableau | unités, prix, taux d'équipement | [fiche](taille-bottom-up.md) | rangee-unite |
| C05 | Market size by segment | répartition de la taille par segment | barres empilées ou Mekko | taille par segment et année | [fiche](taille-par-segment.md) | mekko, barre-eclatee |
| C06 | Market size by geography | répartition par zone | barres horizontales triées | taille par pays ou région | [fiche](taille-par-geographie.md) | gris-un-accent |
| C07 | Market growth | passé et futur, avec scénarios | lignes ou barres + TCAM | série passée, scénarios bas, central, haut | [fiche+preuve](croissance-marche.md) | frontiere-reel-projection ; cone-trajectoires |
| C08 | Growth driver decomposition | ce qui explique la croissance (volume, prix, mix) | cascade | croissance totale, contribution de chaque driver | [fiche+preuve](decomposition-croissance.md) | bridge-a-groupes |
| C09 | Market drivers overview | forces qui poussent ou freinent le marché | tableau + flèches | driver, sens, intensité, preuve | [fiche](vue-drivers-marche.md) | market-drivers, market-dynamics |
| C10 | Regulatory landscape & timing | quelles règles, applicables quand, à qui | frise + tableau | texte, date d'entrée en vigueur, périmètre, impact | [fiche](paysage-reglementaire.md) | serie-annotee ; frise-chevrons |
| C11 | Penetration by segment | part déjà adressée, part restante | barres empilées | taux de pénétration par segment | [fiche](penetration-par-segment.md) | barre-eclatee |
| C12 | Headroom & whitespace bridge | du marché actuel au potentiel non adressé | cascade | marché actuel, freins levés, potentiel | [fiche](pont-headroom-whitespace.md) | bridge-a-groupes |

## Famille D - Concurrence

| N° | Archétype | Comparaison traitée | Graphique natif conseillé | Données exigées | Statut | Move proche |
|---|---|---|---|---|---|---|
| D01 | Landscape & logo map | qui est où dans l'écosystème | grille de cartes | acteurs, catégorie | [fiche+preuve](paysage-logos.md) | galerie-par-categorie, buyer-landscape |
| D02 | Competitor archetypes | familles de concurrents et leur logique | blocs | archétypes, traits, acteurs | [fiche](archetypes-concurrents.md) | piliers-en-blocs |
| D03 | Competitor fact table | faits comparables, acteur par acteur | tableau | acteurs, 8 à 12 attributs sourcés | [fiche](tableau-concurrents.md) | tableau-graphique |
| D04 | Strengths & weaknesses grid | forces et faiblesses de chaque acteur | tableau + pastilles | acteurs, critères, note | [fiche+preuve](forces-faiblesses.md) | scoring-multicritere |
| D05 | Market share & momentum | poids et dynamique de chaque acteur | nuage ou barres | part, variation de part | [fiche+preuve](parts-et-dynamique.md) | mekko, serie-annotee |
| D06 | Positioning matrix | où se situe chaque acteur sur deux axes | nuage de bulles | 2 axes définis, position, taille | [fiche+preuve](matrice-positionnement.md) | matrice-a-zones |
| D07 | Capability benchmark | niveau de capacité par acteur | barres notées ou points reliés | capacités, note, échelle définie | [fiche](benchmark-capacites.md) | scoring-multicritere |
| D08 | Win/loss & sources of wins | pourquoi on gagne ou perd | barres empilées | deals gagnés, perdus, motifs | [fiche](gagne-perdu.md) | deal-log |
| D09 | Substitution threats | substituts et niveau de menace | tableau + pastilles | substitut, besoin servi, prix relatif, menace | [fiche](menaces-substitution.md) | diagnostic-causes |
| D10 | Peer financials & valuation | croissance, marge et multiples des comparables | tableau + nuage | pairs, CA, croissance, marge, VE, multiples | [fiche+preuve](pairs-financiers-valorisation.md) | familles-fonce-clair, football-field |
| D11 | Price benchmark | prix de chaque offre, à périmètre égal | barres flottantes | offre, prix min et max, périmètre | [fiche+preuve](benchmark-prix.md) | plage-min-max, double-mesure |
| D12 | M&A screening / target list | de l'univers aux cibles retenues | entonnoir + tableau | univers, filtres, effectifs, cibles | [fiche+preuve](screening-cibles-ma.md) | entonnoir-encastre, buyer-landscape |

## Conventions communes aux fiches

- Titre-action avec un chiffre ; une seule unité par exhibit ; période et périmètre
  écrits sous le titre ; tout chiffre estimé porte la mention « E ».
- Densité : on ajoute des **informations qui répondent à la question du lecteur**
  (étiquettes de valeur, pied de total, ligne de lecture), jamais des décorations.
- Police : polices uniformes du système (titre 24, corps 11, donnée 10,
  axe 9, note 10 pour un 16:9 ; portrait A4 : 20, 10, 9, 9, 10 ; projeté : 28, 14, 12, 12, 10).
  Rien en dessous ; tableau unique : [design-system.md](../design-system.md) section 3.
- Aucun tiret cadratin, aucun emoji. Les couleurs de statut R/A/G ont toujours le
  mot écrit à côté (accessibilité, impression noir et blanc).
