---
tags: [profil, entreprise, kpi, tuiles, donut, synthese, quantitatif, dense, im, levee-de-fonds, valorisation]
maisons: [derive-du-nom-non-observe]
archetype: Business profile on a page (l'entreprise en une page)
famille: Conseil
question: « Qui est cette entreprise, en chiffres, en une page ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir finance (profil de société en teaser, memorandum, page 2 d'un comité)
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A05
extrait_le: 2026-10-29
---

# Business profile on a page

**Répond à :** un investisseur, un jury ou un comité qui découvre la société doit la
situer en 30 secondes : ce qu'elle vend, à qui, à quelle échelle, avec quelle
croissance, et ce qui la distingue. C'est une page de **repères**, pas d'argumentation.

**Comparaison traitée :** aucune comparaison unique : une mosaïque de grandeurs
d'échelle lues côte à côte, plus une répartition. **Graphique natif :** tuiles de
chiffres (formes et zones de texte), un donut (`addChart` doughnut) pour la répartition
du CA, une mini-série de barres pour la croissance. Moves proches : `chiffres-heros`,
`donut-sobre`.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | une phrase d'identité avec un chiffre (échelle ou croissance) |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | exercice de référence, unité, périmètre |
| Description | 4,5 | 26 | 38 | 22 | activité en 3 lignes : offre, clients cibles, modèle de revenu |
| Repères | 4,5 | 50 | 38 | 37 | année de création, siège, effectifs, pays, actionnaires (tableau à 2 colonnes) |
| Tuiles KPI | 45 | 26 | 50,5 | 24 | 8 à 10 tuiles : CA, croissance, marge, clients, rétention, trésorerie, effectifs |
| Répartition | 45 | 52 | 24 | 35 | donut du CA par produit ou par zone, légende avec valeurs |
| Mini-croissance | 71 | 52 | 24,5 | 35 | barres du CA sur 4 à 5 ans, dernière année en accent |
| Pied | 4,5 | 91,5 | 91 | 4 | définitions des KPI, source, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| KPI | 8 à 10 valeurs : nom, valeur, unité, période, statut (réel ou E) | oui |
| Répartition du CA | 3 à 5 parts qui totalisent 100 % | oui |
| Série de CA | 4 à 5 années, même périmètre | oui |
| Description | 3 lignes max, pas de superlatif non prouvé | oui |
| Faits d'identité | création, siège, effectifs, actionnaires | oui |
| Source de chaque KPI | système ou document (compta, CRM) | conseillé |

Chaque tuile porte sa période : « CA 2025 », « ARR au 31/12 », jamais un chiffre nu.

## Titre-type

« Éditeur de logiciel de **18 M€ de CA**, en croissance de **42 %**, avec **92 %** de
rétention nette » (exemple fictif). Pas « Présentation de la société ».

## Pièges

- Dix KPI de nature différente sans hiérarchie : choisir les 3 qui portent la thèse et les mettre en grand.
- Un donut de 7 parts ; au-delà de 5, regrouper en « Autres ».
- KPI mesurés à des dates différentes présentés comme simultanés.
- Description marketing (« leader », « innovant ») sans chiffre qui la soutienne.
- Tuiles colorées par humeur : une seule teinte d'accent, le reste neutre.

## Dense mais lisible

Trois tailles seulement : valeur de tuile en corps de titre, libellé 9 pt, note 7,5 pt.
Alignement strict sur une grille de colonnes, tuiles de même hauteur. La densité vient
du nombre de repères, pas de la décoration.

Voisins : [concentration-clients](concentration-clients.md) et
[revenu-par-produit](revenu-par-produit.md) pour détailler la répartition.
