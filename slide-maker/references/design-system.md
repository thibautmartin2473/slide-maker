# Design system

Neutre ne veut pas dire fade : pas de décor, mais toutes les décisions de détail poussées au bout. Couleurs et polices : [themes.md](themes.md). Tout est dans `tools/lib.js` : on appelle `L.deck({ theme, format })` et on lit `ctx.T` (couleurs), `ctx.Fn` (polices), `ctx.G` (grille), `ctx.S` (tailles).

## 1. Échelle typographique (tableau unique)

Deux modes, à choisir au cadrage : **lecture** (le deck est envoyé ou imprimé, lu seul, plus dense) ou **projeté** (réunion, écran partagé, plus grand). Le linter (`tools/lint-deck.mjs`) contrôle ces seuils.

| Niveau | Lecture (format `16x9`) | Projeté (format `16x9P`) | Réglages |
|---|---|---|---|
| Chiffre-héros | 40 pt | 54 pt | police `hero`, accent ou blanc sur panneau |
| Titre de slide | 24 pt | 28 pt | deux lignes au plus, mot-clé en accent |
| Titre de graphique ou de colonne | 13 pt | 16 pt | semi-gras |
| Corps, commentaire (minimum) | 11 pt (min 10) | 14 pt (min 14) | |
| Étiquettes de données | 10 pt (min 9) | 12 pt (min 12) | |
| Axes, tableaux denses | 9 pt (min 9) | 12 pt (min 12) | |
| Surtitre (kicker) | 9 pt | 11 pt | casse normale, jamais de capitales |
| Notes et source | 10 pt | 10 pt | `n2` |

Rapports utiles : titre sur corps environ 2,2 ; chiffre-héros sur libellé environ 3 à 4 ; cinq tailles au plus par slide. Portrait A4 (`A4P`) : corps 10, données 9, axes 9, notes 10.

Coche et croix : autorisées comme glyphes de texte dans un tableau ; aucun autre pictogramme, aucun emoji.

## 2. Grille

### Paysage 16:9 (13,333 x 7,5 pouces)
- Marges gauche et droite 0,60 ; haut 0,40. 12 colonnes, gouttière 0,20. `G.col(i, n)` rend `{x, w}` pour n colonnes à partir de la i-ème (i commence à 0).
- Positions verticales fixes, jamais recentrées d'une slide à l'autre :

| Bloc | y (pouces) | Hauteur |
|---|---|---|
| Surtitre | 0,40 | 0,22 |
| Titre | 0,62 | 0,82 |
| Sous-titre (périmètre, unité) | 1,48 | 0,28 |
| Zone de contenu | 1,95 jusqu'à 6,75 | 4,80 |
| Note et source | 6,86 | 0,34 |
| Numéro de page | 7,05 | 0,20, à droite |

- Découpages types : pleine largeur (12) ; 6 et 6 ; 7 et 5 ; 8 et 4 (graphique et commentaire, ou panneau de conclusion en fond perdu à droite) ; 4, 4 et 4 (trois chiffres, petits multiples).

### Portrait A4 (8,27 x 11,69)
Marges 0,80 ; 6 colonnes ; titre sur trois lignes au plus (20 pt) ; les panneaux latéraux deviennent des bandeaux en pied et les colonnes s'empilent.

## 3. Espacements (pouces)

0,05 ; 0,10 ; 0,15 ; 0,20 (gouttière) ; 0,30 ; 0,45 ; 0,60 (marge). Un écart hors de cette échelle est un défaut.

## 4. Filets et traits

| Objet | Épaisseur | Couleur |
|---|---|---|
| Séparateur de rangée ou de colonne | 0,5 pt | `n5` |
| Axe des catégories (seul axe gardé) | 0,75 pt | `n3` |
| Cadre de mise en évidence, pilule | 1 pt, pointillé | accent ou `n2` |
| Ligne de référence (seuil, médiane, cible) | 1,25 pt, pointillé | accent ou `ink` |
| Série principale d'une courbe | 2,5 pt | accent ou `ink` |
| Séries de fond | 1,25 pt | `n4` |

## 5. Graphiques natifs (`addChart`, données éditables dans PowerPoint)

1. `showLegend: false` : la légende est dans le texte (premier mot du commentaire dans la couleur de la série).
2. Axe vertical masqué et quadrillage supprimé ; valeurs écrites sur les barres. Exception : série continue longue, axe à quatre graduations en 9 pt.
3. Axe des catégories : trait 0,75 pt `n3`, sans graduations.
4. Toujours poser `layout: {x, y, w, h}` : la zone de tracé devient calculable, donc les éléments posés dessus (pastilles, lignes, bandes) tombent juste. `L.plotBox(cadre, layout)` rend la zone en pouces.
5. Toujours fixer `valAxisMinVal: 0` et `valAxisMaxVal` : sinon PowerPoint choisit l'échelle et les objets superposés tombent à côté.
6. Barres : espacement 45 à 70 %, une couleur par barre (`chartColors`) : gris partout, accent sur la barre du message.
7. Une étiquette de couleur différente sur une seule barre est impossible en natif : deux séries empilées, ou un texte posé.
8. Barres horizontales (`barDir: 'bar'`) : la première catégorie est tracée en bas ; inverser les tableaux (`L.revBar`).
9. Courbes : pas de marqueurs ; séries de fond d'abord, accent en dernier (dessiné devant).
10. Jamais de 3D, d'ombre ni de dégradé de remplissage sur une série.

## 6. Tableaux (`addTable`)

- Bordures horizontales seules (0,5 pt `n5`), aucune bordure verticale.
- En-tête : 10 pt semi-gras `n2`, filet plus marqué dessous (1 pt `n3`).
- Chiffres alignés à droite, en police de corps ; une colonne = une unité.
- Marge de cellule en points, 1 ou plus : une valeur inférieure à 1 est lue en pouces et fait exploser le tableau.
- Mise en évidence : une ligne ou une cellule (fond `accentLight`, ou cadre pointillé posé par-dessus).
- Tableau sous un graphique : largeur de colonne = largeur de la zone de tracé divisée par le nombre de barres.

## 7. Repères de navigation (deck de plus de huit slides)

Un surtitre de section en accent au-dessus du titre, ou un petit repère de sections en haut. Pas les deux.

## 8. Pièges PowerPoint et pptxgenjs

- Couleurs sans `#` ; dimensions en pouces.
- La puce prend la couleur du texte : pour une puce d'accent sur un texte sombre, poser la puce comme forme.
- Un graphique natif ne sait pas colorer l'étiquette d'une seule barre (voir règle 7).
- Une police absente est remplacée sans prévenir : voir themes.md.
- Toujours regarder le rendu : le défaut numéro 1 est le texte qui déborde de sa zone.
