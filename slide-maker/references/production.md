# Produire un deck

Le principe : **ne jamais commencer à dessiner avant d'avoir verrouillé les axes** (thème, fond, contenu). Une slide produite sans fiche de fond ni plan validé est une slide inventée, et elle se repère en une seconde.

Ce protocole détaille et complète les étapes de `SKILL.md` : l'interview de cadrage, la porte de plan de titres, la fabrication d'un PPTX natif, la relecture finale. Il vaut pour une création comme pour un deck repris.

## Étape 1 : l'interview de cadrage

**Tout en un seul message, jamais en rafale.** Chaque question à défaut porte sa proposition, pour qu'on puisse répondre « ok » et n'écrire que ce qui s'écarte du défaut. Deux natures :

- **[bloquant]** : ne commence pas sans la réponse ;
- **[défaut]** : propose, la personne corrige si elle veut.

### Gabarit de brief (le résultat de l'interview tient en cette fiche)

À remplir à partir des blocs ci-dessous, à relire avec l'utilisatrice, puis à **ranger à côté du deck** (`brief.md`) : c'est le document auquel on revient quand une slide dérive (méthode « preuves » inspirée de Riplo). Une ligne vide = une question non posée.

```
Audience          : qui lit (fonction, niveau de détail attendu), projeté ou lu seul
Décision attendue : la décision en une phrase, et LA réponse qui ouvre le deck
Matière           : fichiers fournis (chemin, page, date), ce qui est citable, ce qui manque
Longueur          : nombre de slides, corps principal / annexe
Fixé              : thème, fond, charte, trame, titres ou chiffres déjà imposés, version précédente
À ne pas toucher  : slides, textes ou chiffres validés par elle ; périmètre exclu (D2)
Unités et périodes: devise, échelle (Md€ ou M€), exercice (FY ou CY), date d'arrêté
Mode              : lecture (texte mini 10 pt) ou projeté (14 pt) ; niveaux de texte max (vide = libre)
```

Le registre de preuves (`deck.data.json`, voir « Garde-fou des preuves » plus bas et [registre-preuves.md](registre-preuves.md)) naît de la ligne « Matière » et de « Unités et périodes ».

### Bloc 0 : les axes *(bloquant)*

> **THÈME ET FORME** : `ciceria` (défaut, voir [themes.md](themes.md)) · `encre` (neutre, sans charte) · [forme dense](forme-dense.md) (défaut d'un deck pro dense, d'un travail de groupe ou d'une lecture à l'écran) · une nouvelle charte (voir « Ajouter une charte » dans [themes.md](themes.md))
>
> **FOND** : `case de conseil` · `pitch sell-side` · `IM` · `investor relations` · `étude de marché` · `point de vue` · `étude commanditée` · `diagnostic` · `programme de transformation` · `business case multi-options` · autre (voir [fonds/](fonds/))
>
> **CONTENU** : tu fournis le texte, ou je le rédige ?

Si le thème et le fond sont déjà dans le message, ne pas les redemander.

### Bloc A : la décision *(bloquant)*

> **A1.** Qui lit, et **quelle décision doit-il prendre** après ?
> **A2.** Quelle est **LA réponse**, en une phrase ? C'est elle qui ouvre le deck.
> **A3.** *(sauf case noté)* Que croit-il **aujourd'hui**, et quelle est son objection principale ?

**A2 est la question qui change tout.** Sans elle on produit un rapport, pas un argument : c'est la « governing thought » de la pyramide de Minto, celle dont tout le reste découle.

A3 vient du SCQA et sert à ordonner les objections. Sur un case noté, l'énoncé tient lieu de complication : on la saute.

### Bloc B : le cadre de lecture

> **B1.** [bloquant] **Projeté** en réunion, ou **lu seul** en PDF ?
> **B2.** [défaut] Combien de slides ? *Défaut : le plan de la fiche de fond.*
> **B3.** [défaut] Format et charte imposés ? *Défaut : le thème du Bloc 0.*
> **B4.** [défaut] **Paysage ou portrait ?** *Défaut : paysage si projeté, portrait si c'est une restitution ou un rapport lu en A4.*

B4 ne dépend pas du thème : toute charte se rend dans les deux orientations ([canevas.md](canevas.md)). Si une fiche marque l'orientation demandée comme `derive`, on garde sa charte et on applique les règles de transposition, et on remonte les mesures dans la fiche à l'étape 4.

B1 détermine la densité et le **plancher de corps** : un IM se lit à 8 pt à 30 cm, une slide projetée ne descend pas sous 14 pt (le linter l'impose). La même matière donne deux livrables différents : ne jamais transposer les tailles d'une fiche de document sur un deck projeté.

### Bloc C : la matière

> **C1.** [bloquant] D'où viennent les chiffres, et **lesquels sont citables** ?
> **C2.** [bloquant] **Date d'arrêté, devise, unité, périmètre.**
> **C3.** [défaut] Qu'est-ce qui est **estimé** plutôt que réalisé ? *Défaut : tout ce qui dépasse l'année en cours, barre hachurée ou plus pâle et « E ».*

C2 est bloquante parce que c'est l'information qui manque le plus souvent, et qu'elle alimente directement le sous-titre de cadrage (principes B3) et la ligne de source (principes B4). Une slide sans périmètre ni date d'arrêté n'est pas opposable.

### Bloc D : les limites

> **D1.** [bloquant] Réel ou fictif ? Logos, noms, filigrane ? *Défaut sur un travail de démonstration : société fictive, aucun logo réel.*
> **D2.** [défaut] Qu'est-ce que le deck **ne doit pas** traiter ?
> **D3.** [défaut] Qui relit, et à quoi saura-t-il que c'est réussi ?

### Bloc E : selon le fond *(2 questions, seulement si pertinent)*

| Fond | Questions |
|---|---|
| Pitch sell-side | Quelles méthodes de valorisation ? · Liste d'acheteurs arrêtée ou à construire ? |
| IM | Quelles sections des 6 sont dans le périmètre ? · Business plan fourni ou à reconstituer ? |
| Étude de marché | Taille de marché **bottom-up ou top-down** ? · Quelles sources sont opposables ? |
| Case de conseil | Quel est l'énoncé exact ? · Évalué sur la réponse, la méthode, ou les deux ? |

Le bottom-up est plus défendable parce qu'on montre le calcul ; le top-down ne tient que si la source est reconnue. Demander laquelle des deux évite de reconstruire l'exhibit après coup.

## Étape 2 : charger, puis proposer un plan

1. Charge la fiche de fond `references/fonds/<fond>.md` et, si le deck est dense ou lu à l'écran, [forme-dense.md](forme-dense.md). Si la fiche de fond n'existe pas, dis-le : « pas de fiche pour ce type, je pars du plan générique ([squelettes-deck.md](squelettes-deck.md)) et on la créera après ».
2. Sors le plan de la fiche de fond, **adapté au sujet** : pas le plan générique recopié.
3. Pour chaque slide, nomme l'**archétype** retenu et charge sa fiche. Pour un exhibit **analytique** (pont de plan, scorecard, taille de marché, cohortes, comparables, concurrence), cherche d'abord dans le [catalogue des 48 archétypes](archetypes/catalogue-48-archetypes.md) : chaque ligne donne le graphique natif et les données à exiger. Ces fiches sont dérivées du nom, non observées : les signaler comme telles dans le tableau.

Rends ça sous forme de tableau, et attends l'accord :

| # | Slide | Archétype | Message porté |
|---|---|---|---|
| 1 | Couverture | - | - |
| 2 | Le marché est porteur | `market-dynamics` | La pénétration du leasing double d'ici 2030 |

C'est le moment où une erreur coûte le moins cher. Un plan validé en trois lignes évite de refaire huit slides.

### Porte de plan de titres *(bloquante : rien n'est mis en page avant l'accord)*

Après ce tableau, et **avant tout code de mise en page**, rendre à l'utilisatrice la **liste des titres seuls**, numérotée, un titre par ligne, chaque titre étant la conclusion de la slide avec son chiffre (pas le thème). Elle répond « 1 oui 2 non 3 bof ». Ce que fait cette porte :

1. **Lecture « titres seuls »** : les titres lus de haut en bas doivent raconter l'argument sans les exhibits. Pour le vérifier mécaniquement, sortir la liste depuis le registre (`node -e` sur `deck.data.json`, champ `titre` de chaque slide) ou, sur un deck existant, depuis le PPTX avec `lint-deck.mjs ... --json` (champ `titres`), et la lui montrer **telle quelle**, sans les graphiques.
2. **Une slide dont le titre n'avance pas l'argument est coupée**, une slide dont le titre contient « et » est scindée en deux.
3. Chaque chiffre d'un titre existe déjà au registre : sourcé (fichier, page, date), estimé (`E`) ou en trou (`gap`). Un titre dont le chiffre est un trou n'a pas de chiffre : on l'écrit autrement, on ne le comble pas.
4. Le registre est créé ici avec les titres validés ; la mise en page commence ensuite, et toute modification de titre repasse par lui.

Outil et format : [registre-preuves.md](registre-preuves.md) et `tools/lint-deck.mjs`.

## Étape 2 bis : quand la matière n'est pas apportée

**À faire seulement si C1 est resté sans réponse** : pas de chiffres fournis, et il faut aller les chercher. Si l'utilisatrice apporte le contenu, cette étape saute, et la règle « ne jamais reformuler » (en fin de ce protocole) reprend la main : on met en forme, on ne recherche rien.

L'ordre est ce qui fait tout le travail : **les consignes de construction d'abord, la recherche ensuite.** Les archétypes sont déjà nommés à l'étape 2, donc leurs contraintes sont connues : ce sont elles qui écrivent les requêtes, pas le sujet.

1. Pour chaque exhibit, dériver le cahier de recherche de la fiche d'archétype : combien d'items, quelle unité unique, quel tri, quelles bornes, quelle source opposable. Méthode et gabarit : **[le cahier de recherche](cahier-de-recherche.md)**.
2. **Lui montrer le cahier avant de chercher.** Un tableau, une ligne par donnée. C'est le second moment où une erreur coûte le moins cher : elle sait souvent d'avance quelle source fait autorité dans son secteur, et quel chiffre n'existe pas publiquement.
3. Chercher : une requête par ligne, pas une par sujet.
4. Confronter au contrat : ça rentre, ça déborde, ça manque. **L'archétype cède, jamais la donnée.** Si ça déborde ou ça manque, revenir à l'étape 2 et corriger le plan avec elle, plutôt que de tordre le chiffre en silence.

La boucle s'arrête quand chaque exhibit a ses items, son unité, sa date d'arrêté et sa source. Pas avant : un exhibit dont la ligne `Sources:` reste à écrire n'est pas prêt à être produit.

## Étape 3 : produire un PPTX natif, comme un analyste

**La règle :** un analyste ne livre pas une image de slide, il **crée des objets et leur applique des paramètres**. Le livrable doit s'ouvrir dans PowerPoint et se laisser éditer : déplacer une forme, retoucher un libellé, cliquer un graphique et corriger une valeur.

Un export HTML vers PPTX ne donne pas ça. **On génère donc directement en `pptxgenjs`** (`tools/lib.js` en est la couche de design ; la compétence PowerPoint intégrée, si elle est disponible, apporte ses pièges et ses scripts de QA).

### Ce que « objet » veut dire, concrètement

| Élément de la fiche | Objet PowerPoint | Jamais |
|---|---|---|
| Aplat, bandeau, pastille, filet | `addShape` (`RECTANGLE`, `ROUNDED_RECTANGLE`, `OVAL`, `LINE`) | un rectangle dessiné dans une image |
| Titre, corps, note, source | `addText` avec **`isTextBox: true`** | du texte incrusté dans un visuel |
| Tableau (buyer landscape, process considerations, deal log) | `addTable` | une capture de tableau |
| Histogramme, barres, courbe, donut | **`addChart`** : natif, données éditables | une image de graphique |
| Icône, logo, photo | `addImage` | - |

**Un graphique rendu en image est un échec**, même s'il est joli : l'utilisatrice ne peut ni corriger une valeur ni prolonger une série. Les seuls graphiques admis en image sont ceux que PowerPoint ne sait pas faire (Sankey, réseau, chord).

### Les paramètres à poser explicitement

Ne jamais laisser un défaut décider. Sur chaque objet : `fill`, `line` (couleur et épaisseur), `fontFace`, `fontSize`, `bold`, `color`, `align`, `valign`, et `margin: 0` dès qu'un texte doit s'aligner sur une forme ou un filet. Sur chaque graphique : `chartColors` tirés de la palette du thème, `showValue` et `dataLabelPosition`, couleurs d'axes, grille discrète, `showLegend: false` quand il n'y a qu'une série.

Les couleurs des fiches sont en `#RRGGBB` ; **pptxgenjs les veut sans `#`** (`"5E6AB0"`), et un code à 8 chiffres corrompt le fichier.

### Géométrie : convertir la fiche en pouces

`pptxgenjs` travaille en pouces, les fiches en px ou en pt. Pose le canevas **avant d'ajouter la moindre slide** (avec `L.deck({ format })`, c'est déjà fait) :

- fiche en **px** (1920 x 1080) : `px / 144`, soit 13,333 x 7,5 in (`pres.defineLayout({ name: "deck", width: 13.333, height: 7.5 })`) ;
- fiche en **pt** (formats observés : 792 x 450, 780 x 540, 842 x 595) : `pt / 72` ;
- **portrait** : A4 `defineLayout({ name: "A4P", width: 8.27, height: 11.69 })`, US Letter `8.5 x 11`. PowerPoint gère le portrait nativement ; seul le canevas change, la charte reste celle du thème. Les compositions en colonnes se transposent en lignes empilées ([canevas.md](canevas.md)).

Une coordonnée hors canevas n'est pas ramenée au bord : **l'objet est écrit et n'apparaît pas**.

Ordre de travail : la géométrie et le gabarit d'abord (marges, y du titre, pied de page), le contenu ensuite.

### Quand les fiches contredisent les conseils génériques

La compétence PowerPoint intégrée (`pptx`) conseille de ne jamais mettre de filet sous un titre ni de bandeau de couleur, au motif que ça fait « slide générée par IA ». **Les fiches gagnent** : le bandeau de conclusion, le filet court, les panneaux pleins sont l'ossature de la méthode (forme dense, panneau de conclusion). Ces fiches sont tirées de vrais decks professionnels ; le conseil générique vise des decks sans charte. On prend de `pptx` sa mécanique et ses pièges, pas sa direction artistique.

### Ce qu'on n'écrit jamais

Pas de phrase qui décrit la slide (principes B5). Ni sur la slide, ni en note d'orateur, ni dans les métadonnées du fichier. En `pptxgenjs` : aucun `addNotes` descriptif, et pas de zone de texte « introductive » sous le titre qui n'apporterait qu'une reformulation de ce qu'on voit.

Le réflexe à avoir en écrivant le générateur : chaque `addText` doit porter soit une **conclusion**, soit une **donnée**, soit un **libellé**. S'il ne porte aucun des trois, il ne sert qu'à faire « slide générée » : on le supprime.

### QA obligatoire avant de livrer

Si la compétence `pptx` est disponible, son validateur contrôle le XML (`python office/validate.py deck.pptx`, depuis un chemin court : sous Windows, les chemins de plugin dépassent parfois `MAX_PATH` et Python ne trouve plus ses propres scripts ; `pip install defusedxml` si le validateur s'en plaint).

Pour le rendu, **exporter avec PowerPoint lui-même en COM**, pas avec LibreOffice : c'est le moteur qui servira à l'ouverture, et surtout il rend avec les polices réellement installées :

```powershell
$ppt = New-Object -ComObject PowerPoint.Application
$dossier = (Get-Location).Path   # COM exige des chemins absolus
$pres = $ppt.Presentations.Open("$dossier\deck.pptx", $true, $false, $false)
$pres.Export("$dossier\png", 'PNG', 1754, 1240)   # largeur/hauteur en px : paysage
# portrait : 1240, 1754
$pres.Close(); $ppt.Quit()
```

Ça supprime la réserve sur les polices : la substitution LibreOffice n'existe plus, l'ajustement constaté est le vrai. Garder la marge de 10 % environ uniquement si on retombe sur LibreOffice.

Puis **regarde chaque image** : débordement de texte (le défaut n° 1), chevauchements, pied de page qui touche le contenu, colonnes désalignées.

### Pièges pptxgenjs

- **Marge de cellule de tableau** (pptxgenjs 3.12) : si la **première** valeur du tableau `margin` est supérieure ou égale à 1, les quatre valeurs sont lues en points ; sinon, les **quatre** sont lues en pouces (`margin: [0, 6, 0, 6]` = 6 pouces à gauche et à droite, `margin: 0.5` = 36 pt : le tableau explose). Toujours des points entiers >= 1 (`[1, 6, 1, 6]`, `[2, 5, 2, 5]`) ; une valeur seule `margin: 1` vaut 1 pt. Les marges d'une zone de texte (`addText`), elles, sont toujours en points. Vérifier au rendu.
- **Couleur de puce** : la puce prend toujours la couleur du texte. Pour une puce d'accent sur un texte noir : poser la puce comme forme ou caractère à part.
- **Étiquette d'une seule barre** : un graphique natif ne sait pas colorer l'étiquette de la seule barre clé ; soit deux séries empilées (clé et autres), soit une zone de texte posée à la main (et alors la recalculer si les données changent).
- **Lancer un script** : `node mon-deck.js` depuis le dossier `tools/` (pptxgenjs installé) ; si le module est ailleurs, `NODE_PATH=<dossier>/node_modules node mon-deck.js`.
- **Export PowerPoint COM** : s'il ne rend pas la main en 2 min, vérifier qu'aucun `POWERPNT` n'est resté ouvert avant de relancer.
- **Nuage de points et bulles** (pptxgenjs 3.12) : l'axe X d'un nuage reçoit des éléments de catégories que PowerPoint refuse et son format est ignoré ; le graphique à bulles écrit des éléments d'axe refusés, des points vides pour les valeurs absentes et n'expose pas `bubbleScale`. Corriger le XML après écriture (le graphique reste natif et éditable) Ne pas rendre une partie seulement des slides si deux graphiques à bulles sont concernés : le post-traitement XML des bulles suit l'ordre des graphiques.
- **Ligne à hauteur négative** : une ligne dont `h` est négatif (une droite montante) rend le fichier illisible pour PowerPoint (erreur 0x80070570) : utiliser `flipV`.
- **Marge de cellule de tableau** : elle n'est pas toujours prise en compte (7 pt et 9 pt par défaut, lignes gonflées) : vérifier au rendu, au besoin la ramener par post-traitement du XML.
- **`fontFace: undefined`** écrase la police par défaut quand les options sont fusionnées avec `Object.assign` : ne jamais passer `undefined` (le texte sort en serif par accident).
- **Un seul tracé en pointillé par graphique** (`lineDash`) : pour pointiller des séries (plan, scénarios, repère), post-traiter le XML ; de même, la série « base » d'une barre flottante n'a pas de remplissage dans pptxgenjs : la rendre transparente après écriture, sinon un rectangle blanc masque les repères.
- **Combo barres et lignes** : `addChart([{ type, data, options }, ...], opts)` fonctionne ; valeurs manquantes en `null` et `displayBlanksAs: 'gap'`, les points vides sont retirés du XML.
- **Ordre de création** : une forme posée après un texte le cache : dessiner la mise en avant AVANT les textes.
- **Puces** : dans un `addText` multi-paragraphes, l'option `bullet` se pose sur le premier run de chaque paragraphe, pas globalement.
- **Barre de cascade à axe tronqué** : l'écrire sous le graphique.

### Gotcha de graphique : l'ordre des catégories s'inverse

Sur un `barDir: "bar"` (barres horizontales), **PowerPoint trace la première catégorie du tableau tout en bas**. Un tri calculé dans l'ordre de lecture sort donc à l'envers sur la slide : inverser les tableaux `labels` et `values` avant de les passer (`L.revBar`). Vu sur un exhibit [plage-min-max](archetypes/plage-min-max.md) trié par borne basse, que le rendu affichait en décroissant.

## Étape 3 bis : garde-fou des preuves (avant de livrer, et à chaque re-cut)

Outil : `node tools/lint-deck.mjs <deck.pptx>` (registre `deck.data.json` à côté du PPTX ; format et liste des contrôles : [registre-preuves.md](registre-preuves.md)). Il complète le validateur XML, il ne le remplace pas.

**Passe de relecture finale**, dans cet ordre :

1. Validateur XML (si disponible), puis `lint-deck.mjs` (mode `lecture` ou `projete` selon B1).
2. Rendre à l'utilisatrice **la liste de corrections par slide** telle que le lint la donne (« Slide 4 : le titre dit 23 %, le registre 21,7 % »), numérotée pour qu'elle réponde « 1 oui 2 non ». **Aucune correction silencieuse** : une correction appliquée est une ligne de la liste, l'ancienne et la nouvelle valeur écrites.
3. Terminer par la section **« Ce que je n'ai pas pu vérifier »** (le lint la produit ; la compléter de ce que tu sais seul : source non relue, chiffre lu sur une image, rendu non regardé). Un deck est livré avec cette section, pas sans.
4. Un chiffre sans source dans le registre (`sourced` sans fichier) bloque la livraison ; un `gap` ou un `E` reste affiché comme tel sur la slide.

**Étape de livraison : PDF d'accompagnement** (systématique pour un deck qui utilise une police non embarquée ; la police n'est pas dans le PPTX, donc un destinataire sans elle verrait une substitution) : exporter le PDF depuis PowerPoint (Fichier, Exporter en PDF) ou par COM (`$pres.SaveAs("$dossier\deck.pdf", 32)`), hors écran. Livrer PPTX et PDF ensemble, dire que la police doit être installée pour modifier le PPTX. C'est l'unique ordre de la preuve : validateur XML, puis `lint-deck.mjs`, puis rendu et PDF.

**Mode « re-cut » (deck piloté par les données).** Pour un deck qui sera retouché (travail de groupe, versions successives, chiffres qui bougent), le générateur pptxgenjs ne contient aucun chiffre en dur : il lit `deck.data.json` via `tools/deck-data.js` (`D.titre(n)`, `D.fmt(id)`, `D.serie([...])`, `D.source(n)`). Un chiffre qui change = une valeur modifiée au registre, `node lint-deck.mjs diff ancien.data.json nouveau.data.json` pour voir quelles slides sont à rééditer, relance du générateur, relance du lint. Le titre du deck et celui du registre ne doivent jamais diverger (`TITRE-REGISTRE`).

## Étape 4 : le retour dans la base (c'est ce qui rend l'outil meilleur)

À la fin d'un deck, **avant de clore**, écris ce qui a dérivé :

- une contrainte découverte en produisant : dans la fiche de **forme** ou de **move** (« le titre à 54 px casse au-delà de 62 caractères ») ;
- un ajout ou un retrait au plan : dans la fiche de **fond** (« une slide de risques a été demandée après la conclusion ») ;
- une variante d'exhibit : dans la fiche d'**archétype** ;
- une correction faite à la main par l'utilisatrice : **toujours**, c'est le signal le plus précieux de tous.

Dis-lui en une ligne ce que tu as écrit dans la base : c'est elle qui valide.

## Règle qui prime sur tout

> « Ne reformule pas, ne résume pas, n'ajoute pas d'interprétation. Ton rôle est uniquement la mise en forme visuelle et la structuration. »

Quand l'utilisatrice fournit le texte, **c'est le texte**. Pas de synonyme mieux tourné, pas de bullet raccourci, pas de titre plus percutant. Sur un case noté, c'est elle qui est évaluée dessus : reformuler, c'est dégrader. Si un libellé ne tient pas dans la mise en page : le dire et proposer, jamais couper en silence.
