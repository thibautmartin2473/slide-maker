# Design system

Neutre ne veut pas dire fade : pas de marque, mais **toutes** les décisions que prennent les meilleurs, poussées au bout. Des palettes, des paires de polices, une grille, une échelle. Tout est dans `tools/lib.js` : on ne recopie pas un code couleur à la main, on appelle `L.deck({ theme, format })` et on lit `ctx.T` (couleurs), `ctx.Fn` (polices), `ctx.G` (grille), `ctx.S` (tailles). Le thème par défaut (`ciceria`), les polices installées ou de repli et le logo sont décrits dans [themes.md](themes.md).

## 1. Palettes

Chaque palette = **noir chaud** + 5-6 neutres + **1 accent** (et sa teinte claire) + couleurs data à rôle fixe. Règle d'usage (habitude 4 des [principes](principes.md)) : l'accent couvre moins de 15 % de l'aire de la slide ; toute autre couleur a un rôle écrit ci-dessous.

### `ciceria` (défaut, voir [themes.md](themes.md))
Brun chaud, beige, un seul accent indigo qui désigne. Les codes sont dans `themes.md` et dans `THEMES` de `lib.js`.

### `encre` (sobre, neutre quand aucune charte n'est demandée)
Logique Bain, Kearney, Morgan Stanley : tout en gris, un seul vermillon qui désigne.

| Rôle | Code | Usage |
|---|---|---|
| `ink` noir chaud | `211E1B` | titres, chiffres, panneau de conclusion |
| `n1` | `3D3935` | texte courant fort, totaux de bridge |
| `n2` | `6B665F` | texte secondaire, sous-titres, axes |
| `n3` | `A39E96` | données de contexte (barres grises) |
| `n4` | `CFCBC4` | données fantômes, séries de fond |
| `n5` | `E6E2DB` | filets, fonds de jauge |
| `n6` | `F4F2EE` | aplats de panneau, zone focus |
| `accent` | `B42318` | LE point qui compte, mots-clés du titre, surtitre |
| `accentLight` | `F1D5CF` | bande de mise en évidence, cellule surlignée |
| `pos` / `neg` | `2E6B4F` / `B42318` | signes, **uniquement sur des chiffres** (dans `encre`, négatif = accent) |
| `ref` | `C28A1E` | ligne de référence secondaire (consensus, médiane) |

### `nuit` (affirmée)
Logique Capgemini, McKinsey, board book : panneaux bleu nuit, un cyan lumineux réservé aux chiffres-héros et à la mise en évidence.

| Rôle | Code | Usage |
|---|---|---|
| `ink` | `1E1C1A` | texte |
| `panel` (marine) | `0F1E3C` | panneaux, totaux, blocs d'étiquette |
| `n1` à `n6` | `2F3A4F` `5E6778` `9AA3B2` `C9CFD8` `E3E7ED` `F2F5F9` | neutres **bleutés** |
| `accent` | `1596CF` | chiffres-héros sur marine, mise en évidence |
| `accentLight` | `D6ECF7` | bandes, callouts, supports de commentaire |
| `seq` | `0F1E3C` `2D5DA8` `7FA3D6` `C3D4EC` | rampe séquentielle (réel, plan, référence) |
| `pos` / `neg` / `ref` | `2A8C5F` / `C8372D` / `D29A2E` | signes ; or = consensus |

### `terre` (éditoriale)
Logique J.P. Morgan Investor Day, Hermès, LVMH : rampe de bruns en aplats successifs (jamais en dégradé), crème pour les fonds, un vert profond pour la donnée.

| Rôle | Code | Usage |
|---|---|---|
| `ink` | `231F1C` | texte |
| `seq` (rampe) | `3E2519` `6A4430` `93684A` `B89478` | étages, séries ordonnées |
| `n1` à `n6` | `4A423C` `776D65` `A89F97` `D3CCC4` `EAE4DC` `F6F1EA` | neutres chauds |
| `n6` (crème) | `F6F1EA` | chevrons, flèches translucides, fonds |
| `accent` | `1F5A45` | le point qui compte, cible |
| `accentLight` | `DCE9E2` | bandes |
| `pos` / `neg` / `ref` | `1F5A45` / `B3362B` / `D29A2E` | performance (rouge, ambre, vert seulement pour la performance) |

**Couleurs de famille** (move [familles-fonce-clair](moves/familles-fonce-clair.md)) : toujours en paires foncé et clair : foncé pour le trait, l'en-tête, la médiane ; clair pour la surface. `lib.js` : `FAMILIES`, 4 paires compatibles avec chaque palette.

## 2. Paires de polices

Les polices du thème par défaut sont **Source Serif 4 SemiBold** (titres) et **IBM Plex Sans** (corps, données, chiffre-héros en `Medium`), avec repli **Georgia** et **Arial** (`FONTS` dans `lib.js` ; installation et repli : [themes.md](themes.md)). Un titre trop lourd écrase le mot-clé : le titre reste léger ou semi-gras, et c'est le mot-clé en accent qui porte le message (un titre en IBM Plex Sans SemiBold a été jugé « trop lourd » à la comparaison).

Noms à écrire tels quels dans `fontFace` (relevés sur les polices installées) : jamais de substitution silencieuse. Une police dont le fichier est installé peut malgré tout retomber sur Calibri à l'ouverture dans PowerPoint si le nom de famille est écrit autrement : toujours vérifier le rendu (voir [typographie.md](typographie.md)).

Autres associations observées, à ajouter dans `FONTS` si une charte les demande (elles ne sont pas codées dans `lib.js`) :

| Esprit | Titre | Corps / données | Chiffre-héros |
|---|---|---|---|
| grotesque technique, chiffres nets | `Libre Franklin Medium` | `IBM Plex Sans` | `IBM Plex Sans Light` : le héros en **Light grand corps** (PJT, Capgemini) |
| serif pour affirmer, sans pour montrer (McKinsey, Lazard, Rothschild) | `IBM Plex Serif` | `Source Sans 3` | `IBM Plex Serif` |
| titres condensés, affirmés, compacts (Danone, OW) | `Barlow Condensed SemiBold` | `Barlow` | `Barlow Condensed SemiBold` |

Règle : le serif ne rentre **jamais** dans un graphique (axes, étiquettes, tableaux restent en police de corps).

## 3. Échelle typographique

**Tableau unique des seuils de police** (référence reprise par `lint-deck.mjs`, `lib.js` et les fiches de forme ; ne pas le redéfinir ailleurs, renvoyer ici).

Deux modes, à choisir au cadrage : **lecture** (le deck est envoyé ou imprimé, lu seul, plus dense) ou **projeté** (réunion, écran partagé, plus grand).

| Niveau | Lu seul (défaut, format `16x9`) | Projeté (format `16x9P`) | Rapport au titre | Réglages |
|---|---|---|---|---|
| Chiffre-héros | 40 pt | 54 pt | 1,67 | police `hero`, couleur accent ou blanc sur panneau |
| Titre de slide | 24 pt | 28 pt | 1 | 2 lignes max, runs en gras ou accent sur le mot-clé |
| Surtitre (kicker) | 9 pt | 11 pt | 0,38 | casse normale (jamais de capitales), `charSpacing: 0,5`, accent |
| Titre de graphique ou de colonne | 13 pt | 16 pt | 0,54 | semi-gras, avec l'unité en `n2` |
| Corps, commentaire (minimum du lint) | 11 pt (min 10) | 14 pt (min 14) | 0,46 | |
| Étiquettes de données | 10 pt (min 9) | 12 pt (min 12) | 0,42 | |
| Axe, tableau dense (étiquettes courtes) | 9 pt (min 9) | 12 pt (min 12) | 0,38 | |
| Notes, source | 10 pt | 10 pt | 0,42 | `n2` |

**Coche et croix** : autorisées dans les tableaux et exhibits en glyphe de texte, jamais en emoji coloré ni en prose ; aucun autre pictogramme.

Principe : lecture seule, corps 10 pt minimum, étiquettes de graphique 9 pt, notes 10 pt ; projeté, corps 14 pt, étiquettes 12 pt, notes 10 pt. Portrait A4 (`A4P`) : corps 10, données 9, axes 9, notes 10.

Rapports-clés : titre sur corps environ 2,2 ; héros sur libellé environ 3 à 4 ; 5 tailles au plus par slide.

## 4. Grille

### Paysage 16:9 : 13,333 x 7,5 in (`format: '16x9'`)
- Marges : gauche = droite = **0,60 in** (4,5 %) ; haut 0,40 in.
- **12 colonnes**, gouttière **0,20 in**, colonne 0,828 in. `G.col(i, n)` rend `{x, w}` de n colonnes à partir de la i-ème (i commence à 0).
- **y fixes** (tout le deck, jamais recentré) :

| Bloc | y | h |
|---|---|---|
| Surtitre | 0,40 | 0,22 |
| Titre | 0,62 | 0,82 |
| Sous-titre (périmètre, unité) | 1,48 | 0,28 |
| Zone de contenu | 1,95 | 4,80 (jusqu'à 6,75) |
| Notes et source | 6,86 | 0,34 |
| N° de page | 7,05 | 0,20 (à droite) |

- Découpages types : pleine largeur (12) ; 6 et 6 ; 7 et 5 ; **8 et 4 = 65 % et 35 %** (graphique et commentaire, ou panneau de conclusion en fond perdu à droite) ; **3 et 9 = colonne-titre** (PJT : titre léger en colonne gauche, preuve sur panneau pâle) ; 4, 4 et 4 (petits multiples, chiffres-héros).

### Portrait A4 : 8,27 x 11,69 in (`format: 'A4P'`)
- Marges 0,80 in (environ 9,7 %) ; haut 0,70 in ; **6 colonnes**, gouttière 0,18 in.
- y fixes : surtitre 0,70 ; titre 0,92 (3 lignes max, 20 pt) ; sous-titre 2,05 ; contenu 2,45 à 10,75 ; source 10,95.
- Transposition : les panneaux latéraux deviennent des **bandeaux** en pied (panneau 65/35 devient bandeau bas 72/28 en hauteur) ; les colonnes côte à côte s'empilent ; les petits multiples passent de 1x3 à 3x1 ; les ponts et les football fields restent horizontaux, pleine largeur.

## 5. Espacements (in)

`xs 0,05` ; `s 0,10` ; `m 0,15` ; `g 0,20` (gouttière) ; `l 0,30` ; `xl 0,45` ; `xxl 0,60` (marge). Un écart hors de cette échelle est un défaut.

## 6. Filets et traits

| Objet | Épaisseur | Couleur |
|---|---|---|
| Séparateur de rangée ou de colonne | 0,5 pt | `n5` |
| Axe des catégories (seul axe gardé) | 0,75 pt | `n3` |
| Cadre de mise en évidence, pilule, callout | 1 pt | accent ou `n2`, pointillé `dash` |
| Ligne de référence (médiane, offre, cible) | 1,25 pt | accent ou `ref`, `dash` |
| Série principale d'une courbe | 2,5 pt | accent ou `ink` |
| Séries de fond (fantômes) | 1,25 pt | `n4` |
| Filet court au-dessus du titre (option) | 2 pt x 0,9 in | accent |

## 7. Règles des graphiques (natifs `addChart`, données éditables dans PowerPoint)

1. `showLegend: false` : la légende est dans le texte (move [legende-dans-le-texte](moves/legende-dans-le-texte.md) : premier mot du commentaire dans la couleur de la série).
2. `valAxisHidden: true` et `valGridLine: { style: 'none' }` ; valeurs en étiquettes. Exception : série temporelle continue, axe vertical à 4 graduations, 9 pt `n2`.
3. `catAxisLineShow` 0,75 pt `n3`, pas de graduations (`catAxisMajorTickMark: 'none'`).
4. `layout: {x, y, w, h}` **toujours posé** : c'est ce qui rend la zone de tracé calculable, donc les superpositions (pastilles, lignes, bandes, tableaux) justes. `L.plotBox(cadre, layout)` rend la zone de tracé en pouces.
5. `valAxisMinVal: 0` et `valAxisMaxVal` fixé : sans lui, PowerPoint choisit l'échelle et les objets posés par-dessus tombent à côté.
6. Barres : `barGapWidthPct` 45 à 70 ; une couleur par point via `chartColors` de longueur n (une série) : gris partout, accent sur la barre du message.
7. Une étiquette de couleur différente sur une seule barre est impossible en natif : deux séries empilées, ou un texte posé (et recalculé par la bibliothèque).
8. `barDir: 'bar'` trace la **première catégorie en bas** : la bibliothèque inverse les tableaux (`L.revBar`).
9. Courbes : `lineDataSymbol: 'none'` sauf marqueurs multiformes ; fantômes d'abord dans l'ordre des séries, accent en dernier (dessiné devant).
10. Jamais de 3D, d'ombre, de dégradé de remplissage sur une série.

## 8. Règles des tableaux (`addTable`)

- Bordures **horizontales seules** 0,5 pt `n5` ; aucune bordure verticale.
- En-tête : 9 à 10 pt semi-gras `n2`, filet plus marqué dessous (1 pt `n3`), ou bandeau plein `panel` ou `ink` à texte blanc.
- Chiffres alignés à droite, en police de corps ; une colonne = une unité.
- Marge de cellule en **points, 1 ou plus** : une valeur inférieure à 1 est lue en pouces et fait exploser le tableau.
- Mise en évidence : **une** ligne ou **une** cellule (fond `accentLight` ou cadre pointillé accent posé par-dessus en `addShape`).
- Tableau sous un graphique : `colW` = largeur de la zone de tracé divisée par le nombre de barres, x = x de la zone de tracé (move [table-au-pas](moves/table-au-pas.md)).

## 9. Repères de navigation (option, deck de plus de huit slides)

Un surtitre de section en accent (casse normale) au-dessus du titre, **ou** un tracker de pastilles A à E en haut à gauche (active pleine, autres `n4`). Pas les deux.

## 10. Pièges PowerPoint et pptxgenjs

- Couleurs sans `#` ; dimensions en pouces.
- La puce prend la couleur du texte : pour une puce d'accent sur un texte sombre, poser la puce comme forme.
- Un graphique natif ne sait pas colorer l'étiquette d'une seule barre (voir règle 7).
- Une police absente est remplacée sans prévenir : voir [themes.md](themes.md).
- Toujours regarder le rendu : le défaut numéro 1 est le texte qui déborde de sa zone.
