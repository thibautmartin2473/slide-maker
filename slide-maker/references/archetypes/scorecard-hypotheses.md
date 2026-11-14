---
tags: [scorecard, hypotheses, plan, diagnostic, tableau, grille, quantitatif, dense, board, scenarios]
maisons: [derive-du-nom-non-observe]
archetype: Assumption scorecard (RAG) (hypothèses du plan contre leurs preuves)
famille: Conseil
question: « Sur quelles hypothèses repose le plan, et lesquelles tiennent ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et du tableau-graphique existant
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: A03
extrait_le: 2026-10-29
---

# Assumption scorecard (RAG)

**Répond à :** un comité d'investissement ou un jury veut savoir **quelle part du
plan est sourcée et quelle part est un pari**. La scorecard met chaque hypothèse
face à sa preuve et lui donne un statut.

**Comparaison traitée :** valeur retenue dans le plan contre référence externe ou
historique, ligne par ligne. **Graphique natif :** tableau natif (`addTable`) à
fonds conditionnels, plus des pastilles (ellipses) de statut **toujours avec le mot
écrit** (R/A/G ne passe ni en noir et blanc ni chez un daltonien).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 70 | 11 | nombre d'hypothèses fragiles et part de valeur qu'elles portent |
| Compteurs de statut | 76 | 9 | 19,5 | 8 | 3 chiffres : solides, à étayer, fragiles |
| Tableau | 4,5 | 26 | 91 | 55 | 8 à 12 lignes ; colonnes ci-dessous |
| Bandeau de lecture | 4,5 | 83 | 91 | 7 | une phrase : « le plan tient si les hypothèses 4 et 7 tiennent » |
| Pied | 4,5 | 91,5 | 91 | 4 | règle de statut, date, sources |

Colonnes (largeur en % du tableau) : N° 4 | Hypothèse 24 | Valeur du plan 11 |
Référence testée 24 | Écart 9 | Statut (pastille + mot) 11 | Action 17.

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Hypothèse | une phrase, une grandeur | oui |
| Valeur du plan | nombre et unité | oui |
| Référence | valeur, source, date | oui (sinon statut Fragile) |
| Écart | valeur ou ratio, calculé | oui |
| Statut | Solide, À étayer, Fragile | oui |
| Règle de statut | écrite en pied | oui |
| Poids de valeur | part de la valeur du plan qui dépend de l'hypothèse | conseillé |

Règle de statut type, à écrire en pied : **Solide** si la valeur est dans la
fourchette d'une source indépendante ; **À étayer** si elle dépasse la borne haute
de moins de 50 % ou si la source est unique ; **Fragile** sans source ou au-delà.

## Titre-type

« **3 hypothèses sur 11** sont fragiles, et elles portent **62 %** de la valeur du
plan » : le nombre de fragiles et leur poids, pas « Revue des hypothèses ».

## Pièges

- Statut donné au jugé : sans règle écrite, le jury demande « pourquoi orange ? ».
- Hypothèses non indépendantes comptées deux fois (prix et marge).
- Plus de 12 lignes : trier par poids de valeur et rejeter le reste en annexe.
- Pastille seule, sans mot ; rouge vif sur toute la ligne (fatigue visuelle).

## Dense mais lisible

Une couleur de statut par ligne dans la **seule** cellule de statut (le reste reste
neutre), lignes triées par poids de valeur décroissant, écart en gras quand il
déclasse l'hypothèse, une action concrète par ligne fragile.

## Preuve

Rendu de démonstration, données fictives.
