# Typographie disponible

Quelles polices écrire dans `fontFace`, et quoi prendre quand la vraie police d'une charte est payante. Quand une charte nomme une police absente de l'ordinateur (Noto Sans, Helvetica Neue LT, ITC Charter, par exemple), PowerPoint substitue en silence : c'est le pire cas, parce que la slide sort sans erreur et que l'écart ne se voit qu'à l'œil exercé.

Les polices doivent être **installées sur l'ordinateur qui ouvre le PPTX** : elles ne sont pas embarquées dans le fichier. Installées pour l'utilisateur (profil, pas système), PowerPoint et `pptxgenjs` les voient sans droits administrateur. Pour les polices du thème par défaut, voir [themes.md](themes.md).

## La règle

**Ne substitue jamais en silence.** Si une charte nomme une police qui n'est pas dans les tableaux ci-dessous, dis-le à l'utilisatrice et propose le remplaçant : ne choisis pas seul une police « qui ressemble ».

**Écris le nom de famille exact, celui de la colonne « Nom à écrire ».** C'est la chaîne que `pptxgenjs` met dans `fontFace`, et PowerPoint la résout telle quelle : `TeX Gyre Heros` ne trouve rien, `TeXGyreHeros` trouve. Un nom approximatif fait retomber PowerPoint sur sa police de substitution, sans erreur et sans prévenir : le deck sort faux et l'écart ne se voit qu'à l'œil exercé. Les noms ci-dessous ont été relevés sur les polices installées, pas devinés d'après le nom du fichier.

Corollaire : une police libre n'est pas un pis-aller à cacher. Charis SIL **est** ITC Charter (même dessin de Matthew Carter), TeX Gyre Heros **a** les métriques exactes d'Helvetica. Le rendu ne trahit pas.

## Les polices du thème par défaut

| Usage | Nom à écrire | D'où ça vient |
|---|---|---|
| Titres | `Source Serif 4 SemiBold` | Google Fonts, à installer (voir [themes.md](themes.md)) |
| Corps, données | `IBM Plex Sans` | Google Fonts |
| Semi-gras | `IBM Plex Sans SemiBold` | Google Fonts |
| Chiffre-héros | `IBM Plex Sans Medium` | Google Fonts |
| Repli (titres) | `Georgia` | fournie par Windows et macOS |
| Repli (reste) | `Arial` | fournie par Windows et macOS |

Autres polices de système fournies par Windows et souvent demandées par une charte : `Arial Narrow` (condensé de repli), `Trebuchet MS`.

## Le reste de la réserve

Quand un deck arrive dans une police payante, chercher d'abord ici avant de déclarer qu'on ne peut pas s'aligner.

| Nom à écrire | Remplace |
|---|---|
| `Noto Sans` | Noto Sans (c'est la vraie, elle est gratuite) |
| `Arimo` | Arial (métriques identiques) |
| `Tinos` | Times New Roman (métriques identiques) |
| `TeXGyreHeros` | Helvetica Neue LT (clone Helvetica, métriques identiques) |
| `Charis` | ITC Charter (même dessin, étendu par SIL, qui a laissé tomber le suffixe « SIL » en v7) |
| `Archivo` | Interstate, DIN Next |
| `Archivo Narrow` | Trade Gothic Condensed, MMCDisplayCondensed |
| `Roboto` / `Roboto Condensed` | sans-serif corporate, bandeaux et titres condensés |
| `Source Sans 3` | Myriad Pro |
| `Libre Franklin` | ITC Franklin Gothic |
| `Libre Baskerville` | Baskerville éditorial |
| `EB Garamond` | Adobe Garamond, Garamond Premier |
| `Montserrat` | Gotham |
| `Lato` / `Open Sans` | Calibri, sans-serif corporate ubiquitaire |
| `Jost` | Futura |
| `Oswald` | Alternate Gothic, Trade Gothic Bold Condensed |
| `Barlow` / `Barlow Condensed` | DIN, DIN Condensed |
| `Playfair Display` | Didot, serif d'affichage |
| `PT Sans` / `PT Serif` | sans et serif institutionnels |
| `Public Sans` | neutre institutionnel (USWDS) |
| `Work Sans` / `Fira Sans` | grotesques neutres |
| `IBM Plex Sans` / `IBM Plex Serif` / `IBM Plex Mono` | système corporate IBM ; le Mono pour les chiffres tabulaires |
| `Noto Serif` | compagnon serif de `Noto Sans` |
| `TeXGyreHerosCn` | Helvetica Condensed |

### Les trois à taille optique

Inter, Source Serif 4 et Merriweather ne s'installent pas comme une famille unique : chaque taille optique est **une famille séparée**, et le nom du dossier (`Inter`) n'existe pas côté Windows. Prends celle qui encadre le corps visé, pas la plus petite disponible. (Source Serif 4 en fichiers statiques : `Source Serif 4 SemiBold` du thème par défaut est une des familles du dossier `static`.)

| Nom à écrire | Remplace | Quand |
|---|---|---|
| `Inter 18pt` | Helvetica Neue, Akkurat, Neue Haas Grotesk | corps de texte, tableaux, labels |
| `Inter 24pt` / `Inter 28pt` | idem | sous-titres / titres de slide |
| `Source Serif 4 14pt` | Minion Pro, Tiempos | notes, sources, petit corps |
| `Source Serif 4 18pt` | idem | corps de rapport |
| `Source Serif 4 36pt` / `48pt` | idem | titres de section |
| `Merriweather 24pt` ... `120pt` | serif de lecture écran | 5 tailles, même logique |

Toutes sous licence libre (OFL, GUST Font License), donc utilisables sur un livrable remis : ce que ne permettrait pas une police d'entreprise récupérée dans un PPTX.

**Piège** : `Source Sans 3`, `Inter 18pt`, `Merriweather 24pt`, `Source Serif 4`, `Arimo`, `Playfair Display`, `Public Sans` et `Fira Sans` peuvent retomber sur Calibri à l'export PowerPoint alors que leurs fichiers sont installés : toujours exporter le rendu et le regarder (voir [production.md](production.md), « QA obligatoire »).

## Icônes

**Lucide** (environ 1 800 icônes, licence ISC) et **Bootstrap Icons** (environ 2 000, MIT), chacun livré en SVG **et en police d'icônes** :

- le **SVG** pour `pptxgenjs`, quand l'icône doit être un objet vectoriel redimensionnable dans la slide ;
- la **police** quand l'icône vit dans une ligne de texte et doit suivre la taille et la couleur du texte autour.

Ce sont des icônes de trait, sobres, à une seule épaisseur : elles vont avec la règle « pictogrammes au trait, d'une seule épaisseur, ou aucun » (anti-patterns des [principes](principes.md)) et avec une couleur d'accent, des neutres autour. Ne les remplis pas d'aplats de couleur et ne mélange pas les deux jeux dans un même deck.

## Ce qu'on n'a pas, et pourquoi

**Pas d'add-in de graphiques** (think-cell, Mekko Graphics, UpSlide). Ce sont des extensions PowerPoint propriétaires sans équivalent libre crédible : ce qui circule sous ce nom est du logiciel piraté. Et surtout, elles ne serviraient à rien ici : le livrable est un PPTX natif généré par `pptxgenjs`, où les graphiques sont déjà des objets aux données éditables. Un add-in qui dessine des graphiques à la main s'insère dans un flux de travail manuel, pas dans celui-là.

**Pas les axes de chasse** (`_Condensed`, `_ExtraCondensed`, `_Expanded`, `_SemiCondensed`...) des familles à axes multiples : à ne pas installer par défaut, Windows les présente comme autant de familles distinctes et elles noient le menu de polices (`Archivo` seul en apporte 6). On les ajoute si un deck en réclame.

Les condensés réellement utilisés ne passent pas par cet axe : ce sont des familles à part entière (`Archivo Narrow`, `Barlow Condensed`, `Roboto Condensed`, `TeXGyreHerosCn`).
