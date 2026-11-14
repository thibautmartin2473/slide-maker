# Forme « Analytique dense »

> **Ce que c'est.** Une slide qui porte une analyse entière : titre en deux tons (étiquette de sujet en accent, puis la conclusion), un exhibit (matrice, benchmark, tableau, comparatif) relié par des **pastilles numérotées** à des **encadrés** ou à un panneau, un **bandeau de conclusion** qui dit la décision, et une **ligne de notes** qui avoue ce qui est un jugement et non une mesure. Le tableau de l'exemple (slide 5 de `tools/exemple.js`) est une application complète.
>
> **Origine.** Forme reconstruite à partir de l'anatomie d'une slide d'analyse publique (pack de slides de conseil publié par Riplo : système typographique, proportions, rôle des couleurs), puis recalée sur la géométrie réelle de pages de son deck d'accueil exporté en PPTX et rendu dans PowerPoint. Seuls le logo, la bande dégradée latérale, le copyright vertical et les textes de la source ne sont pas repris. Les couleurs et les polices sont celles du thème (`ctx.T`, `ctx.Fn` : voir [themes.md](themes.md)), pas celles de la source.
>
> **Quand la prendre** : slide **lue** (envoyée, imprimée, relue en groupe) où le lecteur doit pouvoir vérifier : retards clients, comparatif de fournisseurs ou d'offres, matrice de positionnement, benchmark d'options, matrice de risques, tableau de facteurs. **Quand l'éviter** : slide **parlée devant une salle** (utiliser la variante projetée, plus aérée, ou une autre forme), page de garde, intercalaire.

## Anatomie

1. **Titre** : phrase-conclusion sur deux lignes au plus, un mot-clé ou un chiffre en accent.
2. **Sous-titre** : mesure, période, unité.
3. **Exhibit à gauche** (environ 55 % de la largeur) : tableau sans cadre, filets horizontaux seulement ; une **pastille numérotée** par ligne ou par cellule qui compte.
4. **Encadrés à droite** (environ 40 %) : un par pastille, même numéro, titre en semi-gras puis une phrase d'action. **Un seul** encadré est en mise en évidence (fond `accentLight`, cadre pointillé accent).
5. **Bandeau de conclusion** pleine largeur sous le tout : une seule phrase, actionnable, précédée du libellé « Conclusion » (ou « Décision demandée » ; « Assessment » est le libellé d'origine du modèle).
6. **Note** en pied : ce qui est un jugement, ce qui est fictif ou estimé, la date de vérification ; puis la source.

## Mode lecture et mode projeté

Une taille par type de texte, jamais réglée slide par slide. Les seuils sont ceux du tableau unique de [design-system.md](design-system.md) section 3 ; pour cette forme :

| Niveau | LECTURE (corps 10 pt mini) | PROJETÉ (corps 14 pt mini) |
|---|---|---|
| Titre (2 lignes max), interligne 1,1 | 24 pt (26,4) | 28 pt (30,8) |
| Étiquette de section, haut droite | 9 pt | 11 pt |
| En-tête de bloc | 11 pt gras | 15 pt gras |
| Titre d'encadré, de cellule | 11 pt gras | 15 pt gras |
| Corps, libellés, tableau (interligne 1,1, 4 pt entre puces) | 11 pt | 14 pt |
| Légende, étiquette de graphique | 9 pt | 12 pt |
| Notes, source, n° de page (8 pt est illisible une fois imprimé) | 10 pt | 10 pt |
| Nombre d'encadrés | 3 à 4 | 2 à 3 |
| Lignes du tableau | 5 à 8 | 3 à 5 |

Les deux modes se choisissent par le format du deck : `L.deck({ format: '16x9' })` pour la lecture, `'16x9P'` pour le projeté (les tailles de `ctx.S` suivent). Dire « projeté » au cadrage réduit la densité : moins de lignes, moins d'encadrés, jamais une police plus petite.

**Longueur du titre** : environ 73 caractères par ligne à 24 pt (146 en tout), 62 par ligne à 28 pt.

Rapport titre sur corps : 24 / 11 = 2,2 en lecture, 28 / 14 = 2 en projeté (la source, à 9 pt de corps, donnait 2,7 : ses corps de 6,5 à 9 pt sont illisibles en projection).

## Ce qui est mesuré et ce qui est dérivé

Une seule slide publique, capture de 2560 x 1543 : la slide occupe 1871 x 1054 px (ratio 1,775, proche de 16:9), soit **1,949 px par point** sur une base de 960 x 540 pt (13,333 x 7,5 in). Couleurs échantillonnées au canvas, bandes de lignes et de colonnes relevées par balayage de luminosité.

| Quoi | Statut |
|---|---|
| **Page produit** : boîtes du titre, des en-têtes et filets, du pied de page, du numéro, colonnes, marges, tailles et graisses, interligne, couleurs de texte, filets, pastilles, séries de graphique, marges de tableau | **relevé** (lecture de l'export PPTX et de l'éditeur du produit) |
| Positions (titre, en-têtes, encadrés, bandeau, notes), largeurs, hauteurs des boîtes (slide publique) | **mesuré** |
| Couleurs de fond (cellule, encadré, mise en avant, bandeau, pastille), encre, étiquette | **mesuré**, puis ramené aux codes du thème (section « Palette ») |
| Corps de police | **dérivé** : hauteur ascendante-descendante des lignes (titre 24-25 pt, titre d'encadré 10,5 pt, corps 9 pt, notes 6,5-7 pt) |
| Familles de polices de la source (serif de lecture écran, sans proche de l'Arial) | **dérivé à l'œil** |
| Diamètre des pastilles (environ 10-12 pt), épaisseur du pointillé | **dérivé** d'une vue 1:1 |
| Tableau dense à icônes, slide benchmark | **non mesurés** : géométrie reconstruite et marquée comme telle |

**Critique de la source (à ne pas reproduire)** : corps de 6,5 à 9 pt, illisible en projection ; gris sur gris faible ; benchmark où l'auteur arrive premier partout ; une coquille visible dans un encadré. La variante LECTURE monte à 10 pt, la variante PROJETÉ à 14 pt.

## Géométrie de référence (points, base 960 x 540)

Ces valeurs donnent les **proportions** de la forme. La bibliothèque applique sa propre grille (marges 0,60 in, voir [design-system.md](design-system.md) section 4) ; en cas d'écart, la grille de la bibliothèque prime et on garde les rapports.

| Bloc | Position mesurée |
|---|---|
| Marges de contenu | gauche 22, droite 21 |
| Logo / étiquette de section | logo y 9-21 ; **étiquette de section en haut à droite** x 814-935, y 11-20 |
| Titre | boîte x 22, y 22, 916 x 60, marge 4, ancrage haut ; texte x 26, y 26 ; haut des capitales y 27,7 ; pas de ligne 24 pt à l'interligne 1 (26,4 pt en interligne exact, `lineSpacing` 26,4) ; hauteur de capitale 19 pt, x-height 13,3 pt (valeurs de la police de la source : à recontrôler au rendu avec la police du thème) |
| En-têtes de colonne | y 99-109, gras environ 10,5 pt |
| Matrice | cellules de fond neutre, x 43-514 ; mise en avant à bord pointillé gris foncé |
| Encadrés de droite | x 543-938 (395 de large), 4 boîtes de 71-72 de haut séparées de 4-5 pt, de y 137 à 439 ; la dernière est la mise en avant |
| Titre d'encadré / corps | environ 10,5 pt gras / environ 9 pt (source), pas de ligne 11,2 pt |
| Bandeau de conclusion | y 450-490, x 21,5-938, texte environ 9 pt (source), icône à gauche |
| Notes | y 502-518, deux lignes, environ 6,5-7 pt (source) |
| Numéro de page | bas à droite, très petit, gris |
| Rapport titre / corps | 24 / 9 = **2,7** pour la source ; ici 24 / 11 = 2,2 en lecture, 28 / 14 = 2 en projeté |

### Géométrie relevée sur les pages du produit (base 960 x 540, 1 px éditeur = 1 pt)

| Élément | Valeur relevée |
|---|---|
| Titre | boîte x 22, y 22, 916 x 60, marge 4, ancrage haut ; texte x 26, y 26 ; police de titre en graisse forte, 24 pt, interligne exact 26,4 pt (`lnSpc` 2640 dans le XML), 2 lignes ; étiquette en accent, conclusion en encre |
| Corps (XML) | 11 pt, `lnSpc` 1210 (12,1 exact), puces « • » `marL` 18 et `indent` -18, **4 pt après chaque puce** (`spcAft` 400) ; légendes 9 pt `lnSpc` 990, centrées, fond gris pâle, bord **1 pt** gris, marges 11,5 / 9,5 |
| Numéro de page (XML) | espace réservé : boîte 897,504 de 35 x 22, marge 4, **ancrage bas, aligné à droite, 8 pt gris** |
| Tableau (XML) | pas de table native : une zone de texte par cellule, marges 9 / 7 / 9 / 7, en-tête de 30 de haut **ancré en bas**, gras de la couleur d'en-tête, **filet sous l'en-tête 1 pt** et filets de ligne **gris clair 1 pt**, première colonne éventuelle en aplat foncé à texte blanc |
| Graphique (XML) | colonnes **groupées (`clustered`), `gapWidth` 18, `overlap` 0**, étiquettes centrées dans la barre, axes affichés, pas de quadrillage, zone de tracé interne x 0,027 y 0,151 l 0,947 h 0,767, texte 10-11 pt, traits de connecteur 1,5 pt foncés |
| Thème (XML) | polices majeure et mineure ; le `theme1.xml` exporté garde les couleurs Office par défaut (les accents ne sont que dans le panneau de thème et les formes) |
| Marque | x 22, y 9, 39 x 13 (logo : non repris ; l'étiquette de section reste en haut à droite comme sur la slide publique) |
| Bande latérale | x 0, 14,7 x 540 (dégradé : non repris) |
| En-tête de bloc | y 114, h 12, **11 pt** gras (tête) puis normal, interligne 1,1 ; **filet 1 pt gris clair à y 134** sur la largeur du bloc ; contenu dès y 139-140 |
| Colonnes | x 22 à 469 et x 491 à 938 (447 de large, gouttière 22) ; contenu jusqu'à y 484 ; zones deux colonnes 22 à 633,9 et 647 à 925,9 |
| Pied de page (notes) | boîte x 22, y 496, 859 x 22, marge 4 ; texte x 26, y 500, 8 pt gris |
| Numéro de page | boîte x 897, y 504, 35 x 22 ; texte x 901-928, 8 pt gris, centre vertical à 517,6 |
| Copyright vertical | x 945, y 344, 14 x 180, 6 pt gris (non repris) |
| Pastille de guide | cercle 23,3 (22,3 de tracé), tracé 1 pt, chiffre 12 pt ; pastille d'icône pleine à tracé blanc |
| Légende d'encadré | 9 pt, interligne 1,1, marge 10 / 12, fond gris pâle, bord 0,8 pt gris |
| Tableau | boîte x 490,6, 447 de large, marge de cellule **7 haut-bas, 9 gauche-droite**, en-tête 30 de haut, en-tête gras, corps 11 pt, filets 1 pt, sans remplissage |
| Graphique | titre 13 pt gras ; valeurs 10 pt blanches dans le segment ; axe 1 pt ; étiquettes d'axe 10 pt ; connecteur 1,5 pt ; bulle d'annotation fond blanc, bord 1 pt |

## Palette : les couleurs de la source ramenées au thème

La source a une palette propre (gris-vert, une étiquette orange, une sauge de mise en avant) ; on reprend de près la **fonction** de chaque couleur, avec les codes du thème en cours (`ctx.T`) : une seule teinte chaude ou saturée dit « ici ».

| Rôle dans la forme | Couleur du thème |
|---|---|
| Étiquette du titre (**seul** usage de l'accent dans le titre) | `accent` |
| Titre conclusion, gras, pastilles de matrice, séries sombres | `ink` |
| Corps | `n1` |
| Cellule de matrice, encadré de texte | `n6` |
| **Mise en avant** (cellule et dernier encadré) | `accentLight`, bord pointillé `accent` 1 pt |
| Bandeau de conclusion | `accentLight` |
| Pastille d'encadré, bande du panneau, en-tête de tableau, série 2 | `n1` (pastille), `accent2` (en-tête) |
| Notes | `n2` (un texte qui avoue un jugement doit se lire : vérifier le contraste sur le fond) |
| Numéro de page | `n3` |
| Filets de tableau et de section | `n5`, 1 pt |
| Fond | `bg` |
| Signes (tendance, risque, coches) | `pos`, `ref`, `neg` (le vert, l'ambre et le rouge servent uniquement sur des signes) |

Règle : l'accent ne sert qu'à l'étiquette du titre et à la mise en avant ; la mise en avant est le fond pâle à bord pointillé. Pas de petites capitales espacées ni de gros chiffres serif décoratifs.

## Typographie

**Titre en deux tons** : étiquette de sujet en accent, puis la conclusion en encre, en police de titre du thème (`Fn.title`, serif de titre : jamais dans un graphique), 24 pt, **interligne exact 26,4 pt** (`lineSpacing`), boîte posée à x 26, y 26. La ligne de base est à contrôler au rendu PowerPoint : une compensation d'offset essayée pour retrouver les valeurs du navigateur n'a pas été conservée, la valeur de PowerPoint fait foi (le livrable est un PPTX).

**Corps : police de corps du thème** (`Fn.body`, sans) ; titre d'encadré en gras. La coche utilise `Segoe UI Symbol`.

| Usage | `fontFace` |
|---|---|
| Titre en deux tons | `Fn.title`, interligne exact `lineSpacing` 26,4 pt |
| Tout le reste | `Fn.body` (gras par `bold: true` ou `Fn.semi`) |
| Coche | `Segoe UI Symbol` |

**Embarquement** : les polices du thème (Source Serif 4, IBM Plex Sans, licence OFL) ne sont pas embarquées dans le PPTX ; sur un autre poste sans elles, PowerPoint les remplace. Pour un envoi : exporter en PDF, ou installer les polices sur l'ordinateur de lecture ([themes.md](themes.md)). Une police qui retombe sur Calibri à l'export alors que son fichier est installé : voir [typographie.md](typographie.md).

## Construction par type de page (960 x 540 pt)

Communs : étiquette de section en haut à droite (alignée à droite sur x 938, y 11) ; titre boîte x 26, y 26, deux lignes jusqu'à y 80 ; **légende y 99-110 à droite, x 471** ; **en-têtes de bloc y 114 avec filet à y 134** (x 22 et x 535,7) ; contenu y 140 à 440 ; **bandeau de conclusion x 22-938, y 451, h 40** ; notes x 26, y 500 ; n° de page texte x 901-928, y 508-522, ancrage bas, aligné à droite.

Mesures de la source : encadrés x 535,7-939 (403 de large), h 72,9, pas 77 (y 136 / 212,9 / 289,9 / 367,4) ; cellules de matrice en 3 rangées y 146,2-235 (h 88,8), 241,7-327,4, 335,1-421,3 (écart 6,7 à 7,7), colonnes x 43/60,5-194, 203,7-334,5, 343,3-514,6 (écart 9 à 10) ; bandeau y 451-491.

1. **Matrice 2x2 + encadrés** : matrice x 60,5-515 et y 146-421 (la source en a 3x3, la nôtre 2x2 sur la même emprise), cellules séparées de 6, titre gras, 3 à 4 items à **puce ronde** (`bullet` natif, 6 pt entre puces), **pastille `ink` Ø 14 à cheval sur le bord haut de la cellule, à 10 pt du bord droit** (vu sur la source) ; flèches d'axe fines 1 pt à gauche (x 54) et en bas, étiquette verticale à x 32 ; encadrés x 535,7 w 402,3, 4 de 72 séparés de 4 dès y 140, pastille `n1` à gauche du titre.
2. **Benchmark à colonnes groupées + panneau** (géométrie reconstruite, non mesurée) : libellés x 22-172, quatre colonnes de 104 dès x 172 ; groupes titrés en casse normale 9 pt gras avec filet 1 pt ; en-tête = pastille Ø 14 + nom ; colonne retenue = rectangle `accentLight` à bord pointillé posé AVANT les textes ; profil = graphique de lignes natif, points ronds de 9, plage 0-100, `layout` pleine largeur ; critères h 29 avec une coche `pos` ou « - » gris ; panneau x 612-938, y 140-440, bande `accent2` de 3 pt.
3. **Tableau dense à icônes** (géométrie reconstruite, marges de cellule relevées) : `addTable` x 22, y 140, largeur 916, colonnes 96 / 140 / 300 / 195 / 86 / 99, en-tête h 26 gras `accent2` 11 pt, lignes h 38 (2 lignes de texte plus marge 7/9), filet sous l'en-tête `accent2` 1 pt, filets de ligne `n5` 1 pt, `n4` entre dimensions ; sans cadre extérieur ni filet vertical ; tendance (triangle plein) et risque (disque Ø 11 + mot) posés par-dessus.
4. **Couverture, intercalaire, fin** : non définis ici.

## Formes de meublage

| Forme | Dimensions et rôle |
|---|---|
| Pastille numérotée | disque `ink` (matrice, colonnes) ou `n1` (encadrés), liseré blanc 1 pt, chiffre blanc gras à 62 % du diamètre ; relie l'exhibit à son encadré par le même numéro (`L.pastille`) |
| Encadré | rectangle sans bord, fond `n6`, marge interne 8 ; focus : `accentLight` + bord pointillé `accent` 1 pt (`L.encadre`) |
| Panneau latéral | fond `n6` + bande `accent2` de 3 pt à gauche, **puces rondes** (`bullet` code 2022, retrait 18), 4 pt entre puces (export), **tête de puce en gras** |
| Bandeau de conclusion | `L.bandeau`, icône ronde `ink` Ø 18 avec « i » en serif italique blanc, libellé gras « Conclusion » (ou « Lecture » ; « Assessment » est le libellé d'origine du modèle) puis une phrase ; une seule phrase de conclusion actionnable |
| Notes | 8 pt `n2` (10 pt en mode lecture, voir le tableau), deux lignes : ce qui est donné d'exemple ou de fiction, **ce qui est jugement et non mesure**, **date de vérification** |
| Légende | pastille 18 x 11 (neutre ou mise en avant à bord pointillé) + libellé 10 pt |
| Flèche d'axe | ligne 1 pt `ink`, pointe triangle pleine, jamais de quadrillage |

## Charte des graphiques et tableaux

Graphique de profil (`addChart` LINE, données éditables) : `chartColors` [`ink`, `accent2`, `n4`] (codes du thème, sans `#`), texte du graphique 10 pt `ink`, `lineSize` 1,5, `lineDataSymbol` circle, `lineDataSymbolSize` 9, `valAxisHidden` true, `valAxisMinVal` 0, `valAxisMaxVal` 100, `valGridLine` none, `catAxisHidden` true (les en-têtes de colonne servent d'axe), `showLegend` false (la légende est dans le texte : « Coût (trait foncé), rapidité (trait clair) »), `layout` {x 0, y 0,08, w 1, h 0,84}. Pas de 3D, pas d'ombre, pas de dégradé.

Tableau (`addTable`) : en valeurs pptxgenjs, `border` par cellule `[haut, droite, bas, gauche]` avec `{type:"none"}` partout sauf le bas `{type:"solid", pt:1, color: n5}` ; marge de cellule `[7, 9, 7, 9]` en points (une marge inférieure à 1 est lue en pouces) ; `lineSpacing` 12,1 ; texte `n1`, en-tête, première colonne et facteurs en gras, dépendances en `n2`. **Graphique en colonnes empilées** (règle relevée, non démontrée ici) : séries `ink`, `accent2`, `n4`, valeurs 10 pt dans les segments, **total au-dessus** (série de lignes sans trait portant les étiquettes de total).

## Construction avec la bibliothèque

```js
const L = require('./lib.js');
const ctx = L.deck({ theme: 'ciceria' });
const { T, G, S, Fn } = ctx;
const s = ctx.slide({ kicker: 'Créances clients', title: 'Trois clients concentrent 46 % des retards', subtitle: 'Retards au 31 octobre 2026, en k€', source: 'Balance âgée clients', note: 'Les priorités suivent le montant : jugement, pas mesure.' });
s.addTable([...], { x: G.ml + 0.45, y: 2.15, w: 6.5, colW: [2.4, 1.3, 1.2, 1.6], rowH: 0.55 });   // exhibit, bordures horizontales seules
L.pastille(ctx, s, { cx: G.ml + 0.18, cy: 2.15 + 0.55 * 1.5, n: 1 });                          // une par ligne qui compte
L.encadre(ctx, s, { x: 8.1, y: 2.15, w: 4.6, h: 1.1, n: 1, title: 'Titre', text: 'Action', focus: true });
L.bandeau(ctx, s, { y: 5.95, label: 'Conclusion', text: 'obtenir ces paiements ramène le retard de 890 k€ à 480 k€.' });
```

`L.pastille`, `L.encadre` et `L.bandeau` sont définies dans `tools/lib.js`. Le reste (graphiques, positions) se pose avec les primitives (`L.rect`, `L.txt`, `L.line`, `bars`).

## Règles de la forme

- Le tableau n'a **ni cadre ni filet vertical** : l'œil suit les lignes, pas les cases.
- Les pastilles et les encadrés partagent le même numéro et le même ordre (haut vers bas).
- Une seule teinte chaude ou saturée dit « ici » (l'encadré en évidence) ; tout le reste est neutre, tout ce qui est gris-vert se tait.
- Le bandeau dit la décision, pas un résumé du tableau.
- La ligne de notes avoue le jugement (« Les priorités suivent le montant en retard : c'est un jugement ») et date la vérification.
- Un comparatif où la cible gagne sur tous les critères est suspect : montrer ce qu'elle coûte (« au prix d'un coût plus haut »).
- Le titre est une **phrase conclusion en deux tons**, serif de titre, deux lignes au plus.
- **Un exhibit relié à son texte par des numéros** : on lit le graphique, on cherche le numéro, on trouve l'explication.

## À ne pas reprendre (ni faire)

- Le logo, la bande dégradée latérale, les textes et les captures de la source.
- Des corps de 6 à 9 pt : illisibles en projection et à l'impression.
- Gris sur gris trop faible : vérifier le contraste du texte secondaire sur le fond.
- Un benchmark où la cible est première partout : ici la colonne retenue gagne sur des critères choisis et le bandeau dit ce qu'on perd.
- Plus de quatre encadrés : scinder en deux slides.
- Les polices qui retombent sur Calibri (voir [typographie.md](typographie.md)).

## Fond (livrables en charte)

Cette forme est neutre : elle se combine avec les fonds [Étude de marché](fonds/etude-de-marche.md), [Diagnostic](fonds/diagnostic.md) et [Business case multi-options](fonds/business-case-options.md) pour leurs slides d'analyse. Quand un deck porte la charte d'une autre maison, cette fiche sert à l'anatomie seulement (pastilles, panneau, bandeau, notes), avec les couleurs et polices de la charte.

## Sources

- Capture d'une slide d'analyse publique du pack de slides de conseil de Riplo (2560 x 1543), échantillonnée au canvas du navigateur ; fichier non conservé.
- Mesures reproductibles : slide x 257-2127, y 317-1371 de la capture ; bandes de lignes par balayage de luminosité.
- Fiches d'archétypes qui s'appuient sur cette forme : [catalogue](archetypes/catalogue-48-archetypes.md).
