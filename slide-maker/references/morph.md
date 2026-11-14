# Transitions Morph : catalogue de concepts animés

Règle d'usage : dès qu'on fait du design PowerPoint, proposer le ou les concepts de ce catalogue les plus adaptés au deck (une ligne de pourquoi chacun), sans attendre la demande. Un seul concept dominant par deck, un second au plus pour un moment fort ; un mouvement répété à chaque slide lasse.

## Technique (PowerPoint 365, 2019 ou web)

1. Dupliquer la slide, modifier position, taille, couleur ou rotation des objets sur la copie.
2. Appliquer la transition Morph à la 2e slide (Transitions > Morph ; Effect Options : Objects, Words ou Characters). Durées : voir « Durées » plus bas.
3. Forcer l'appariement : Home > Editing > Select > Selection Pane, même nom préfixé de `!!` sur les deux slides (ex. `!!fond1`). Nom unique par slide.
4. Morph n'apparie que des objets de même nature (forme avec forme, image avec image). Un graphique natif ne se transforme pas : le dessiner en formes (données non éditables).
5. Entrer ou sortir de l'écran : poser l'objet hors de la slide (zoomer arrière pour avoir de la place). Morph fait glisser de la position hors champ à la position visible.
6. Texte : construire d'abord la slide finale, puis modifier la slide de départ.

## Durées (règle apprise à l'usage)

Les durées par défaut sont trop longues : un premier réglage à 1,75 s pour une courbe, 1,25 s pour des barres et 0,9 s ailleurs a été jugé lent et divisé par deux. **1 s pour une courbe ou un fond, 0,5 s pour un contenu.** Pour des barres qui partent de zéro et montent vite jusqu'au pourcentage qui compte : 4 slides d'étapes (0, 40, 70, 90 %) en avance automatique à 0 s, Morph à 0,18 s, axe fixé (0 à 80 par exemple). Les notes de travail temporaires (cases « à ajouter », repères de relecture) restent hors animation : préfixe `!!` avec un nom unique (elles ne sont jamais appariées) et premier plan.

## Concepts

| Id | Nom | Mouvement | Adapté à |
|---|---|---|---|
| A | Fil conducteur | une forme d'accent `!!barre` : trait sous le titre, puis repère dans le sommaire, puis aplat derrière le chiffre clé | tout deck structuré, le plus réutilisable comme template |
| B | Zoom dans la grille | une vignette (image recadrée) sort d'une grille puis remplit l'écran | révélation d'un cas, d'un marché, d'une photo forte ; une fois par deck |
| C | Graphique recomposé | des barres dessinées deviennent classement, puis tuiles KPI | slides de chiffres (conseil, finance) |
| D | Montée bas vers haut | les blocs arrivent par le bas (hors champ) et sortent par le haut ; le contenu semble défiler verticalement | enchaînement de sections, listes, timeline verticale |
| E | Entrée-sortie hors champ | un objet héros (ex. une voiture, un produit) entre par un bord, s'arrête, repart par l'autre bord à la slide suivante ; rotation 3D légère pour le vivant | pitch produit, histoire d'un objet, ouverture et clôture |
| F | Formes de fond qui dérivent | 3 à 5 grandes formes semi-transparentes (`!!fond1`...) changent de position, taille et rotation à chaque slide ; elles entrent au début et sortent à la fin | deck à forte identité visuelle (ex. pitch de levée) |
| G | Toile panoramique | toute la présentation est une grande toile groupée (`!!toile`, 2x2 slides ou plus) ; chaque slide la décale ; un fil d'accent relie les parties | récit en étapes (pitch, plan) ; effet « caméra » à la Prezi, sans gadget |
| H | Photo qui se recadre | une image du projet (`!!photo`) passe de plein écran à colonne, à vignette, puis revient plein écran | deck avec une vraie photo forte (usine, produit, équipe) |
| I | Chiffre géant en filigrane | un numéro de partie en contour seul (`!!num`), très grand, glisse et change d'échelle ; Morph en mode Characters | deck sombre à chapitres, ouverture de chaque partie |
| J | Pastille de chapitre | le grand bloc de la slide titre rétrécit en panneau du sommaire ; la pastille numérotée de la partie en cours (`!!chap3`) quitte le sommaire et se pose à côté du titre ; barres qui poussent depuis zéro sur la slide de chiffres ; Fade ailleurs | deck académique ou conseil dense, avec sommaire numéroté |

Les maquettes de fonds décoratifs (bulles, rubans, anneaux) du concept F ont été jugées moins bonnes que les autres : un fond qui bouge sans rôle fait décoratif. Préférer un mouvement qui sert le récit (G, H, I).

### Exemple d'application : deck à courbe en aire sur le titre

Deck : courbe de cours en aire sur le titre, bandeau marine en pied des slides de contenu, sommaire à 4 pastilles reliées par un fil, petite pastille de chapitre en haut à droite (slides 3 à 11). Quatre usages de Morph :

1. Courbe du titre qui s'aplatit en bandeau de pied (1 vers 2, `!!courbe`) : lie l'ouverture au deck. Risque : deux formes libres au nombre de points différent se tordent ; si la courbe est une image ou un graphique, pas de Morph. Tester d'abord.
2. Pastille de chapitre (2 vers 3, `!!chap`) : la pastille 1 du sommaire file en haut à droite ; aux slides suivantes, le chiffre change en place. Risque faible.
3. Morph « Objects » sur toutes les slides de contenu : bandeau, filet rouge et pastille restent immobiles, le contenu se fond. Risque : des titres de même nom peuvent glisser bizarrement ; renommer les titres par slide.
4. Barres qui poussent (copie de la slide aux barres à largeur nulle juste avant) : option. Risque : un clic de plus, numéro de page décalé, graphique natif à vérifier.

Commun : Morph exige PowerPoint 2019 ou 365 sur le PC de la salle ; sinon repli en fondu.

### Recette d'implémentation par PowerPoint COM (PowerShell)

- Transition : `SlideShowTransition.EntryEffect = 3954` (Morph par objet ; 3955 mots, 3956 caractères), `Duration` selon la section « Durées ». Contrôle : `p159:morph` dans le XML.
- Courbe vers bandeau : une aire de 21 points et un trait de 19 pour la courbe du titre, un bandeau de 14 et 12. Les bandeaux de toutes les slides ont été refaits en jumeaux de 21 et 19 points posés sur la même ligne brisée (sommets d'origine plus des milieux de segments), formats copiés par `PickUp` et `Apply`, ordre de plan rétabli : rendu identique, appariement propre. Noms `!!courbeAire`, `!!courbeTrait` sur toutes les slides.
- Autres noms : `!!filet` (filet), `!!logo` (le grand logo du titre rétrécit dans le coin), `!!chapAnneau`, `!!chapDisque`, `!!chapNum` (pastille), titres renommés `Titre S<n>`.
- Barres : une copie de la slide, graphiques nommés (`!!barresA`, `!!barresB`), données mises à zéro dans `ChartData.Workbook` puis `Chart.Refresh()` (sans Refresh, l'export garde les anciennes barres), étiquettes masquées. Valeurs 0,0001 pour un axe qui ne part pas de 0 (fin trait visible).
- Valeurs posées dans le cache XML des graphiques (`c:val/c:v`, `c:valAx/c:scaling`) quand l'édition par Excel en COM échoue (0x800A03EC, classeur nul : une fois sur deux).
- Pièges COM : `foreach` sur `Slides` peut sauter, boucler par index ; un chemin accentué est mal lu par un script .ps1 en PowerShell 5.1 (passer par `Get-ChildItem -Filter` avec joker).
- Non vérifiable hors écran : le rendu animé réel (images fixes et XML seulement). Le dire.

## Principes des designers

- Chaque mouvement a un rôle (relier, zoomer sur l'important, marquer un chapitre) ; si la transition attire plus l'oeil que le contenu, c'est la mauvaise.
- Peu d'écart entre deux slides : trop de changements d'un coup donnent des trajectoires imprévisibles ; découper en slides intermédiaires.
- Durée plus longue si le mouvement saccade ; caler chaque Morph sur la phrase dite.
- Fond sobre derrière les chiffres ; forme semi-transparente à 50 % ou plus sous un texte.
- Une idée par slide, lisible en 3 s, 6 éléments au plus, 40 % de vide.
- Canva : animations peu contrôlables et perdues à l'export ; construire le mouvement dans PowerPoint.
- Sources : [Deckary](https://deckary.com/blog/powerpoint-transitions),
  [SlideModel](https://slidemodel.com/morph-transition-in-powerpoint/),
  [Beautiful.ai](https://www.beautiful.ai/blog/simple-backgrounds-for-presentations-and-how-backgrounds-affect-presentation-design),
  [frontend-slides](https://github.com/zarazhangrui/frontend-slides/blob/main/SKILL.md),
  [huashu design-principles](https://github.com/alchaincyf/huashu-skills/blob/master/huashu-slides/references/design-principles.md).

Références : [Microsoft, astuces Morph](https://support.microsoft.com/en-us/office/bc7f48ff-f152-4ee8-9081-d3121788024f),
[Indezine, noms !!](https://www.indezine.com/products/powerpoint/learn/animationsandtransitions/transitions/morph-exclamation-named-objects.html),
[The PowerPoint Blog, carrousel de voitures 3D](https://thepowerpointblog.com/?p=11868).

## F en détail (fond animé)

- Formes : cercles, blobs ou rectangles très arrondis, 40 à 120 % de la hauteur de slide, transparence 70 à 88 %, 2 couleurs de la charte au plus.
- Chaque slide : déplacer chaque forme de 10 à 30 % de la largeur et tourner de 15 à 45°, jamais toutes dans le même sens (sinon on lit un simple glissement d'ensemble).
- Le fond ne passe jamais sous le texte avec un contraste qui baisse : vérifier la slide la plus chargée.
- Slide 1 : formes hors champ ou réduites (entrée) ; dernière : sorties vers les bords.
- Sur une slide de section, une forme peut grossir jusqu'à devenir l'aplat de fond (pont avec A).

## Génération avec pptxgenjs

pptxgenjs ne pose pas de transition Morph. Nommer les formes (option `objectName: '!!fond1'`, à vérifier selon la version) puis, après génération, injecter dans chaque `ppt/slides/slideN.xml` (N >= 2), juste après `</p:clrMapOvr>` ou avant `</p:sld>` :

```xml
<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice xmlns:p159="http://schemas.microsoft.com/office/powerpoint/2015/09/main" Requires="p159"><p:transition spd="slow"><p159:morph option="byObject"/></p:transition></mc:Choice><mc:Fallback><p:transition spd="slow"><p:fade/></p:transition></mc:Fallback></mc:AlternateContent>
```

Non encore testé de bout en bout : valider sur un deck de 3 slides avant de s'y fier.
