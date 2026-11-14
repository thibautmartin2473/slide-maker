---
name: slide-maker
description: "Construit ou relit des présentations professionnelles en PowerPoint (.pptx natif, graphiques modifiables) : deck client, point mensuel, comité de direction, budget, slide isolée. À utiliser dès qu'on demande un deck, des slides, une présentation, un exhibit ou un graphique pour une présentation, ou la relecture d'un deck existant. Méthode : cadrage, plan de titres validé avant toute mise en page, choix du graphique par la question du lecteur, sources sur chaque chiffre, relecture finale chiffrée. Thème par défaut : charte Ciceria (brun, beige, indigo)."
---

# slide-maker : des slides de conseil, sans template

Une slide qui impressionne semble évidente. Elle l'est parce que le titre dit la conclusion, que le graphique répond à une seule question, et que chaque chiffre a une source. Ce protocole fabrique cela, dans l'ordre. Ne saute aucune porte : c'est l'ordre qui évite de refaire huit slides.

Réponds toujours en français. Pas d'emoji, pas de tiret long (utiliser « - », une virgule, deux-points ou une parenthèse). Jamais de chiffre inventé pour compléter un deck : un trou de données se dit.

## Les sept règles qui priment

1. **Le titre est la conclusion**, pas le thème, avec son chiffre : « La trésorerie baisse de 380 k€ en six mois » et non « Évolution de la trésorerie ».
2. **Un exhibit = une idée**, et un titre sans « et ».
3. **Le graphique répond à la question du lecteur** ([chart-picker.md](references/chart-picker.md)).
4. **Une seule mise en évidence par slide** : une barre en accent, le reste en gris.
5. **Une source sur chaque slide qui porte un chiffre**, avec le périmètre, l'unité et la période en sous-titre.
6. **Un chiffre sans source bloque la livraison** ; un chiffre estimé s'étiquette « E » ; un trou s'affiche « n.d. ».
7. **PowerPoint natif** : graphiques éditables (jamais une image de graphique), polices et couleurs du thème.

## Étape 1 : cadrer (un seul message, jamais en rafale)

Pose toutes les questions ensemble. Chaque question donne sa proposition par défaut pour que la réponse puisse tenir en « ok » ou en une correction. Ne commence pas sans les réponses 1, 2 et 4 (bloquantes).

1. **Qui lit, et quelle décision doit-il prendre ensuite ?** (dirigeant, comité, banquier, équipe.) [bloquant]
2. **Quelle est LA réponse, en une phrase ?** C'est elle qui ouvre le deck. Sans elle on fait un rapport, pas un argument. [bloquant]
3. **Que croit le lecteur aujourd'hui, et quelle est son objection principale ?** (sert à ordonner les preuves.)
4. **D'où viennent les chiffres, et lesquels sont citables ?** Fichiers fournis (nom, page, date), date d'arrêté, devise, unité (k€ ou M€), exercice ou année civile, périmètre. Ce qui est estimé. [bloquant]
5. **Lu seul ou projeté ?** Lu seul (envoyé, imprimé) : texte courant 11 pt, plus dense. Projeté en réunion : 14 pt, moins de contenu. Défaut : lu seul.
6. **Combien de slides, et y a-t-il une trame ou une version précédente à respecter ?** Défaut : 6 à 10 pour le corps.
7. **Charte et logo ?** Défaut : thème `ciceria`, sans logo (voir [themes.md](references/themes.md)). Le logo est un fichier `logo.png` que l'utilisatrice fournit.
8. **Réel ou fictif ?** Un deck de démonstration porte « chiffres fictifs » en note.

Si elle n'apporte aucune matière chiffrée, dis-le : propose un deck à trous avec des emplacements « n.d. » plutôt que des chiffres plausibles.

Range le résultat dans un fichier `brief.md` à côté du deck (audience, décision, réponse, matière, unités et périodes, mode, longueur). C'est le document auquel on revient quand une slide dérive.

## Étape 2 : porte du plan de titres (bloquante)

**Rien n'est mis en page avant l'accord de l'utilisatrice sur cette liste.**

1. Choisis un squelette dans [squelettes-deck.md](references/squelettes-deck.md) (recommandation, point de trésorerie, budget, comité...) et adapte-le au sujet, sans le recopier.
2. Écris **la liste des titres seuls**, numérotée, un titre par ligne, chaque titre étant la conclusion de la slide avec son chiffre. Ajoute pour chaque ligne, en petit, le graphique envisagé (un mot).
3. Lue de haut en bas, la liste doit raconter l'argument **sans les graphiques**. Coupe toute slide dont le titre n'avance pas l'argument ; scinde toute slide dont le titre contient « et ». La première slide porte la réponse.
4. Chaque chiffre d'un titre doit exister dans le registre : sourcé (fichier, date), estimé (E) ou en trou (`gap`). Un titre dont le chiffre est un trou s'écrit autrement : on ne le comble pas.
5. Présente la liste ainsi : « 1 oui, 2 à reformuler, 3 à couper ». Attends sa réponse. Un tour de correction suffit en général.

Écris ensuite le **registre des chiffres** `mon-deck.data.json` avec les titres validés (format et exemple : [registre-preuves.md](references/registre-preuves.md), modèle complet : `tools/exemple.data.json`). Toute modification de titre ou de chiffre repasse par le registre.

## Étape 3 : choisir le move de chaque slide

Pour chaque slide, écris **la question du lecteur** en une phrase, puis choisis dans [moves.md](references/moves.md) le move qui y répond et dans [chart-picker.md](references/chart-picker.md) le graphique. Cas fréquents d'un directeur administratif et financier :

| Question | Move | Fonction |
|---|---|---|
| Où en est-on, en trois chiffres ? | chiffres-héros ou cartes | `chiffresHeros`, `txt` |
| Comment ça a évolué ? | gris un accent | `grisUnAccent` |
| Pourquoi ça a bougé ? | pont | `bridgeGroupes` |
| Par rapport à quel seuil ou budget ? | ligne de référence | `ligneReference` |
| Réalisé contre objectif ? | cible vers réalisé | `cibleRealise` |
| Qui pèse, et que fait-on ? | forme dense : tableau, pastilles, encadrés | [forme-dense.md](references/forme-dense.md) |
| Quelle répartition ? | anneau sobre (5 parts au plus) ou barres triées | `donutSobre` |
| Que décide-t-on ? | tableau de décisions et bandeau | `addTable`, `bandeau` |

Vérifie à ce stade : le graphique choisi montre-t-il bien le chiffre du titre ? Sinon change le graphique ou le titre.

## Étape 4 : mettre en page

Règles de grille, de tailles et de couleurs : [design-system.md](references/design-system.md). En bref :

- **Une marge gauche unique** (0,60 pouce) ; mêmes positions verticales sur toutes les slides ; zone de contenu de 1,95 à 6,75 pouces.
- **Tailles** (lu seul) : titre 24 pt, corps 11 pt (10 minimum), étiquettes 10 pt, axes 9 pt, notes 10 pt. Projeté : 28, 14, 12, 12, 10.
- **Couleurs** : seulement celles du thème (`ctx.T`). L'accent couvre moins de 15 % de la surface ; le vert et le rouge ne servent que sur des chiffres (hausse, baisse).
- **Pas de légende détachée, pas de quadrillage, pas d'axe vertical** sauf série continue ; valeurs écrites sur les barres ; base zéro sur toute barre.
- **Texte** : pas de majuscules de corps, six puces au plus d'une ligne, aucune phrase qui décrit la slide.
- **Source** en pied sur chaque slide avec un chiffre ; « Note : E : estimation » si le deck contient des estimations.

### Fabriquer le fichier

Le dossier `tools/` de cette skill contient tout : `lib.js` (thèmes, grille, moves), `deck-data.js` (lecture du registre), `lint-deck.mjs` (relecture), `exemple.js` (deck complet de sept slides à copier comme modèle).

1. Place-toi dans un dossier de travail et copie-y `tools/` (ou travaille dans `tools/`). Si `require('pptxgenjs')` échoue, lance `npm install pptxgenjs` ; si le réseau est coupé, dis-le et propose de passer par la compétence PowerPoint intégrée en reprenant les mêmes titres et couleurs.
2. Si l'utilisatrice a fourni un logo, enregistre-le sous le nom `logo.png` dans ce dossier : `L.deck()` le trouve seul.
3. Écris `mon-deck.js` en partant de `exemple.js` : un bloc par slide, titres, séries et sources lus dans le registre (`D.titre(n)`, `D.serie([...])`, `D.fmt(id)`, `D.source(n)`). Aucun chiffre en dur dans le script.
4. `node mon-deck.js mon-deck.pptx`. **Polices** : le PPTX s'affiche avec les polices de l'ordinateur qui l'ouvre, pas de celui qui le fabrique. Sur claude.ai ou l'application Claude (bac à sable sans polices), demande une fois à l'utilisatrice si Source Serif 4 et IBM Plex Sans sont installées sur son ordinateur : oui, lance avec `SLIDE_FONTS=ciceria` ; non ou ne sait pas, `SLIDE_FONTS=repli` (Georgia, Arial) et rappelle-lui de les installer depuis Google Fonts. Dans Claude Code sur son propre poste, la détection automatique suffit.
5. Nomme le fichier de façon parlante (`point-tresorerie-octobre-2026.pptx`) et range le registre à côté.

Pièges : couleurs sans `#` ; marges de cellule de tableau en points (1 ou plus) ; barres horizontales tracées de bas en haut (inverser les tableaux avec `L.revBar`) ; toujours fixer `max` sur un graphique ; toujours poser un `layout` si on superpose des éléments.

## Étape 5 : relecture finale (obligatoire avant de livrer)

Fais cette passe dans l'ordre, même pour un deck que tu n'as pas construit.

1. **Titres seuls.** Relis la liste des titres : racontent-ils l'argument ? Y en a-t-il un qui n'avance pas ? Coupe-le.
2. **Chaque titre contre son exhibit.** Relis le chiffre du titre sur les données du graphique ou du tableau. S'ils divergent, le titre est faux, pas le graphique.
3. **Le linter** : `node tools/lint-deck.mjs mon-deck.pptx --data mon-deck.data.json` (ajouter `--mode projete` pour un deck projeté). Code de sortie 0 : aucune erreur. Code 1 : corriger ou justifier chaque ligne. Il contrôle titres contre registre, unités, périodes, sources, estimations, trous, tailles de police, majuscules, coquilles.
4. **Le rendu.** Regarde les slides : texte qui déborde de sa zone (défaut numéro 1), chevauchements, pied de page qui touche le contenu, colonnes désalignées. Si un outil de rendu existe (LibreOffice : convertir en PDF puis en images), utilise-le et regarde chaque image. Sinon, dis que le rendu n'a pas été vu et demande à l'utilisatrice d'ouvrir le PPTX avant envoi.
5. **Un chiffre sans source bloque.** Un `sourced` sans fichier, une valeur lue sur une image, un total qui ne se recalcule pas : on ne livre pas avant d'avoir réglé.
6. **Pas de correction silencieuse.** Chaque correction appliquée est une ligne de la liste, avec l'ancienne et la nouvelle valeur.

### Ce que tu rends

Toujours, dans cet ordre :

1. Le fichier PPTX (chemin complet) et, si les polices de la charte manquent, un PDF d'accompagnement.
2. **La liste de corrections par slide**, numérotée, telle que le linter la donne (« Slide 4 : le titre dit 23 %, le registre 21,7 % ») avec ce qui a été fait et ce qui reste à décider (« 1 oui, 2 non »).
3. **« Ce que je n'ai pas pu vérifier »** : sources non relues contre le fichier d'origine, chiffres lus sur une image, rendu non regardé, polices de repli, nombre de lignes des titres estimé. Un deck est livré avec cette section, jamais sans.

## Relire un deck existant (sans le construire)

1. Ouvre-le : `node tools/lint-deck.mjs deck.pptx` (sans registre, le linter contrôle polices, tailles, majuscules, coquilles, sources présentes, unités et périodes titre contre axe, et dit ce qu'il n'a pas pu vérifier).
2. Reconstitue un registre minimal à partir du texte des slides pour contrôler titre contre chiffres ; ses sources valent ce que valent les sources que l'utilisatrice donne.
3. Rends la liste de corrections par slide et la section « Ce que je n'ai pas pu vérifier ». Ne modifie pas le fichier sans l'accord de l'utilisatrice.
4. Passe en revue les titres seuls, les types de graphiques (table de [chart-picker.md](references/chart-picker.md)), le nombre de mises en évidence par slide, les légendes détachées.

## Quand un chiffre change (deck piloté par les données)

Modifie **une valeur dans le registre**, relance `node mon-deck.js`, relance le linter. `node tools/lint-deck.mjs diff ancien.data.json nouveau.data.json` liste les chiffres changés, les dérivés à recalculer et les slides à rééditer : un chiffre changé est une édition, pas un deck refait.

## Densité « Analytique dense » (slide d'analyse lue)

Pour un comparatif, une matrice ou un tableau de retards : titre sur deux lignes, tableau sans cadre, pastilles numérotées reliées à des encadrés, bandeau de conclusion, ligne de notes qui avoue les jugements. Mode lecture : texte courant 10 à 11 pt, étiquettes 9 à 10 pt, notes 10 pt. Mode projeté : 14 pt, 12 pt, 10 pt, moins de lignes et moins d'encadrés. Détail et code : [forme-dense.md](references/forme-dense.md).

## Fichiers de la skill

| Fichier | Contenu |
|---|---|
| `references/principes.md` | Les habitudes des meilleures slides, anti-patterns, tests du titre-action |
| `references/design-system.md` | Tailles, grille, filets, règles des graphiques et des tableaux |
| `references/themes.md` | Thèmes `ciceria` (défaut) et `encre`, polices, repli, logo, ajouter une charte |
| `references/chart-picker.md` | Quelle comparaison appelle quel graphique |
| `references/moves.md` | Les 28 gestes de mise en page et leur fonction |
| `references/squelettes-deck.md` | Plans de deck : recommandation, trésorerie, budget, comité... |
| `references/forme-dense.md` | Slide d'analyse dense, lecture ou projeté |
| `references/registre-preuves.md` | Registre des chiffres, linter, codes de contrôle |
| `tools/lib.js` | Bibliothèque pptxgenjs : thèmes, grille, moves |
| `tools/deck-data.js` | Lecture du registre pour écrire titres, chiffres, sources |
| `tools/lint-deck.mjs` | Relecture automatique d'un PPTX contre son registre |
| `tools/exemple.js`, `tools/exemple.data.json` | Deck d'exemple de sept slides (PME fictive, mode lecture) |
