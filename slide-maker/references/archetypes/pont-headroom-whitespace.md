---
tags: [marche, etude-de-marche, croissance, pont, segmentation, tam, quantitatif, dense, board, scenarios]
maisons: [derive-du-nom-non-observe]
archetype: Headroom & whitespace bridge (du marché actuel au potentiel non adressé)
famille: Conseil
question: « Quel potentiel reste-t-il au-delà de ce qui est déjà vendu, et qu'est-ce qui le débloque ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: C12
extrait_le: 2026-10-29
---

# Headroom & whitespace bridge

**Répond à :** « jusqu'où le marché peut-il grandir ? » Le **headroom** est la marge
de croissance dans les segments déjà adressés (sous-équipés) ; le **whitespace**
est le potentiel dans des usages ou clients **pas encore adressés**. Les séparer
évite de mélanger du réalisable et du spéculatif.

**Comparaison traitée :** marché actuel et potentiel, avec ce qui comble l'écart.
**Graphique natif :** cascade ascendante (barres empilées, base invisible) : marché
actuel (plein), marches de headroom (aplat), marches de whitespace (hachuré ou
bordure pointillée = conditionnel), potentiel (plein).

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | potentiel total et part qui dépend d'une condition |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | marché en Md€, année cible, périmètre |
| Cascade | 4,5 | 26 | 64 | 58 | actuel, headroom par segment, whitespace par usage, potentiel |
| Pastilles de condition | 4,5 | 84 | 64 | 5 | lettre sous chaque marche conditionnelle, renvoi au panneau |
| Panneau « ce qui débloque » | 71 | 26 | 24,5 | 58 | pour chaque lettre : condition (réglementation, prix, canal), échéance, probabilité |
| Pied | 4,5 | 91,5 | 91 | 4 | méthode, sources, date |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Marché actuel | valeur, année, source | oui |
| Headroom | par segment : taux de pénétration actuel, taux cible, taille | oui |
| Whitespace | par usage : taille, condition, E | oui |
| Potentiel | = actuel + headroom + whitespace (à boucler) | oui |
| Condition de chaque marche | texte, échéance | oui pour le whitespace |
| Horizon | année, identique pour toutes les marches | oui |

## Titre-type

« Le marché peut passer de **7,8 à 14,3 Md€**, dont **4 Md€** de headroom sûr et
**2,5 Md€** de whitespace conditionnel à la réglementation ».

## Pièges

- Prendre le taux de pénétration d'un pays mature comme cible sans condition.
- Additionner headroom et whitespace dans une seule couleur : le lecteur ne voit plus
  ce qui est réaliste.
- Potentiel sans horizon (« un jour »).
- Confondre avec le [pont TAM / SAM](pont-tam-sam-som.md), qui **réduit** un total ;
  ici on **ajoute** à l'existant.

## Dense mais lisible

La distinction pleine / hachurée est le seul code ; chaque marche conditionnelle a sa
lettre et sa condition écrite à droite. Trois marches de headroom au maximum, par
segment, les autres regroupées.
