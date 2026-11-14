# slide-maker

Une skill pour Claude qui fabrique des présentations PowerPoint de niveau conseil : un titre qui dit la conclusion, un graphique qui répond à une seule question, une source sur chaque chiffre.
Vous décrivez votre besoin (point de trésorerie, budget, comité), Claude vous pose les questions de cadrage, vous fait valider le **plan des titres**, puis produit un fichier `.pptx` natif dont tous les graphiques restent modifiables dans PowerPoint.
Elle relit aussi un deck existant et rend la liste des corrections, slide par slide.

Thème par défaut : charte de Ciceria Conseil (brun, beige, indigo, polices Source Serif 4 et IBM Plex Sans). Un thème neutre est fourni, et on peut ajouter le sien.

## Installation pas à pas (sans coder)

### Dans Claude (claude.ai ou application Claude pour ordinateur)

1. **Téléchargez la skill** : https://github.com/thibautmartin2473/slide-maker/releases/latest/download/slide-maker.zip (fichier `slide-maker.zip`, prêt à importer, ne pas le décompresser).
2. *(Variante)* Si vous préférez partir du code : bouton vert « Code », « Download ZIP », extrayez, puis compressez le dossier `slide-maker` (celui qui contient `SKILL.md`) en `slide-maker.zip`, le dossier étant à la racine du zip.
3. **Activez l'exécution de code.** Dans Claude : Paramètres, puis Capacités. Activez « Exécution de code et création de fichiers » (le nom exact peut varier légèrement selon la version). Sans cela, Claude ne peut pas fabriquer le fichier PowerPoint.
4. **Importez la skill.** Toujours dans Paramètres, Capacités, section Skills : « Importer une skill » (ou « Ajouter une skill »), puis choisissez `slide-maker.zip`. Activez-la.
5. **Testez.** Ouvrez une nouvelle conversation et écrivez : « Utilise slide-maker pour faire un point de trésorerie. » Claude doit vous poser des questions de cadrage.

Si l'importation est refusée, vérifiez que le zip contient bien `slide-maker/SKILL.md` et que la taille reste modeste (le dossier fait moins de 1 Mo).

### Dans Claude Code (pour les développeurs)

Copiez le dossier `slide-maker` dans `~/.claude/skills/` (Windows : `%USERPROFILE%\.claude\skills\`). Dans `~/.claude/skills/slide-maker/tools/`, lancez une fois `npm install` pour installer `pptxgenjs`. La skill se déclenche ensuite sur les demandes de deck.

### Les polices de la charte (recommandé)

Pour que le deck s'affiche dans la charte, installez deux familles gratuites depuis Google Fonts (fonts.google.com) : **Source Serif 4** et **IBM Plex Sans** (bouton « Get font », puis « Download », ouvrez dans le zip le sous-dossier `static`, puis chaque fichier `.ttf`, et cliquez « Installer »). Sous Windows, choisissez « Installer pour tous les utilisateurs ». Redémarrez PowerPoint.
Claude vous demandera si elles sont installées. Sans elles, la skill passe sur Georgia et Arial et le dit : le deck reste propre, mais la charte n'est pas respectée à l'identique. Détail : `slide-maker/references/themes.md`.

## Comment demander un deck

Décrivez le sujet, le lecteur et ce qu'il doit décider ; joignez vos fichiers (relevés, balance, budget en Excel ou PDF). Deux exemples de demandes :

> « Utilise slide-maker. Je prépare le point mensuel de trésorerie pour la dirigeante d'une PME de 60 personnes. Elle doit décider si on reporte l'achat de deux camions. Voici le relevé bancaire d'octobre, la balance âgée clients et la prévision à 6 mois. Deck lu seul, 7 slides. »

> « Utilise slide-maker. Je présente le budget 2027 au comité de direction vendredi, en réunion, projeté. Il doit valider l'enveloppe d'investissement. Voici le réalisé 2026, le budget par poste et la liste des investissements demandés. Une dizaine de slides. »

Plus la demande dit **qui décide quoi** et **quelle est la réponse en une phrase**, plus le deck est juste.

## Ce que fait la skill, dans l'ordre

1. **Questions de cadrage**, posées en un seul message, chacune avec une proposition par défaut : qui lit, quelle décision, quelle réponse, d'où viennent les chiffres, unités et périodes, lu seul ou projeté.
2. **Plan de titres à valider.** Avant toute mise en page, vous recevez la liste des titres seuls (« 1. La trésorerie atteint 1 420 k€, soit 11 semaines de charges »). Vous répondez « 1 oui, 2 à reformuler, 3 à couper ». Rien n'est dessiné avant votre accord.
3. **Un registre des chiffres** : chaque chiffre est noté avec son unité, sa période et sa source. Les estimations sont étiquetées « E », les données manquantes restent « n.d. ».
4. **Le fichier PowerPoint natif**, graphiques modifiables, aux couleurs et polices de la charte.
5. **Une relecture chiffrée** : titres contre graphiques, unités, périodes, sources, tailles de texte. Vous recevez la **liste des corrections par slide** et une section « Ce que je n'ai pas pu vérifier ». Un chiffre sans source bloque la livraison.

Un exemple complet (PME fictive, 7 slides, mode lecture) est fourni dans `exemple/exemple.pptx`, avec son script `slide-maker/tools/exemple.js`.

## Votre charte et votre logo

- **Charte par défaut :** `ciceria`. Les couleurs, les polices et leur mode d'emploi sont dans `slide-maker/references/themes.md`.
- **Logo :** aucun logo n'est fourni dans ce dépôt. Joignez votre fichier `logo.png` (fond transparent de préférence) dans la conversation et demandez à Claude de l'enregistrer sous le nom `logo.png` dans le dossier de travail : il apparaît en bas à droite de chaque slide et sur la couverture.
- **Autre charte :** demandez à Claude d'ajouter un thème en donnant vos couleurs (un brun ou gris foncé pour le texte, un fond clair, un seul accent) et vos polices.

## Limites à connaître

- La skill fabrique du PowerPoint (`.pptx`), pas du Google Slides ni du Keynote (ils ouvrent le `.pptx`, avec de légères différences).
- Elle ne lit pas les chiffres contenus dans des images.
- Le contrôle automatique vérifie que le deck et le registre disent la même chose, pas que le registre soit exact : la relecture des chiffres contre vos fichiers reste humaine.
- Regardez toujours le rendu dans PowerPoint avant d'envoyer : le nombre de lignes des titres est estimé, pas mesuré.

## Contenu du dépôt

```
slide-maker/            le dossier à zipper et importer dans Claude
  SKILL.md              le protocole de la skill
  references/           principes, design system, thèmes, choix du graphique, gestes, plans de deck, forme dense, registre
  tools/                bibliothèque de mise en page, lecture du registre, relecture automatique, exemple
exemple/                le PPTX d'exemple
LICENSE                 MIT
```

## Crédits et licence

Licence MIT (voir `LICENSE`). Règles en partie adaptées du pack consulting-slides de Riplo (riplo.ai), libre d'usage.
