---
tags: [marche, etude-de-marche, tam, geographie, barres, quantitatif, dense, croissance, pitch, international]
maisons: [derive-du-nom-non-observe]
archetype: Market size by geography (répartition de la taille par zone)
famille: Conseil
question: « Où se trouve le marché, et quelles zones faut-il traiter en premier ? »
vu_chez: aucun rendu observé ; nom relevé sur une galerie publique (2026-10-29), anatomie dérivée du savoir conseil et de la fiche barre-eclatee
canevas: [paysage-derive, portrait-derive]
statut: derive-du-nom-non-observe
numero: C06
extrait_le: 2026-10-29
---

# Market size by geography

**Répond à :** pour une expansion internationale ou une thèse d'investissement
européenne, le lecteur veut classer les pays ou régions par taille, et voir en même
temps lesquels croissent vite. Le classement fonde l'ordre de déploiement.

**Comparaison traitée :** classement de zones sur une même mesure. **Graphique natif :**
barres horizontales triées par taille décroissante (`addChart` type bar, barDir
horizontal), une couleur d'accent pour les zones prioritaires et du gris pour les
autres ; à droite de chaque barre, une colonne de texte avec le TCAM. Pas de carte
géographique en graphique natif : si une carte est utile, la dessiner en formes
simples et la tenir secondaire.

## Anatomie (paysage 16:9, % de la slide)

| Zone | x | y | l | h | Contenu |
|---|---|---|---|---|---|
| Titre-action | 4,5 | 8 | 91 | 11 | poids des zones prioritaires dans le total |
| Sous-titre | 4,5 | 19,7 | 91 | 3,5 | marché en M€, année, définition des zones |
| Barres triées | 4,5 | 26 | 55 | 58 | 8 à 12 zones, valeur au bout de chaque barre |
| Colonne TCAM | 60 | 26 | 12 | 58 | croissance annuelle alignée ligne à ligne sur les barres |
| Panneau « ordre de déploiement » | 73 | 26 | 22,5 | 58 | zones retenues, vague 1 et vague 2, motif chiffré |
| Pied | 4,5 | 91,5 | 91 | 4 | sources par zone, taux de change et année |

## Contrat de données

| Champ | Forme | Obligatoire |
|---|---|---|
| Zone | pays ou région, définition homogène | oui |
| Taille | valeur, unité, année, taux de change fixé | oui |
| TCAM | % et période | oui |
| Part du total | % (somme à contrôler) | oui |
| Statut de la donnée | public, déclaré, estimé (E) | oui |
| Regroupement « autres » | liste des zones agrégées | oui |

## Titre-type

« **Quatre pays** font 72 % du marché européen (exemple fictif) ; les deux plus
petits croissent deux fois plus vite » ; pas « Marché par pays ».

## Pièges

- Mélanger des pays et des régions dans le même classement.
- Tailles en devises locales converties à des dates différentes.
- Barres à axe tronqué : la zone n°1 paraît trois fois la n°2 alors qu'elle est 1,3 fois.
- Zones sans données omises sans le dire : écrire « n.d. » dans la liste.

## Dense mais lisible

Le tri fait le message ; une seule couleur d'accent ; colonne TCAM en texte aligné
à droite, jamais un second graphique. Voir [taille par segment](taille-par-segment.md)
pour le découpage par segment et [croissance](croissance-marche.md).
