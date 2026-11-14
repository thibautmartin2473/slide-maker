# Thèmes

Un thème = une palette (brun ou gris chaud, neutres, un accent) + un jeu de polices. Il se choisit en une ligne : `L.deck({ theme: 'ciceria' })`. Tout est défini dans `tools/lib.js` (objets `THEMES` et `FONTS`) ; on n'écrit jamais un code couleur à la main dans un script de deck, on lit `ctx.T` (par exemple `ctx.T.accent`).

## Trois chartes Ciceria : `ciceria` (défaut), `ciceria-contraste`, `ciceria-lavande`

Les trois partent des quatre couleurs du site ciceriaconseil.fr (brun `3A322D`, beige `F5F2EF`, indigo `5E6AB0`, lavande `B4BAE2`) et des deux polices, puis les déclinent en rampes tonales (OKLCH, 11 pas), palette data, rôles sémantiques et contrastes mesurés (WCAG). Chaque charte est un fichier de jetons dans `references/chartes/` ; `lib.js` le lit au chargement (`themeDepuisJetons`). Si un fichier manque, `ciceria` retombe sur l'ancien thème écrit en dur et les deux autres sur `ciceria`. L'indigo reste l'unique accent saturé dans les trois.

| Charte | Fichier | Principe | Quand la choisir |
|---|---|---|---|
| `ciceria` (A, défaut) | `ciceria.json` | Registre éditorial : papier beige, filets bruns, couleurs data sourdes (presse économique) | Par défaut : deck lu seul, analyse dense, proposition, rapport, tout document Word ou PowerPoint du cabinet |
| `ciceria-contraste` (B) | `ciceria-contraste.json` | Panneau brun presque noir (`201711`), lavande comme accent sur sombre, fond plus blanc | Deck projeté, comité, conclusion qui doit frapper |
| `ciceria-lavande` (C) | `ciceria-lavande.json` | Surfaces lavande, titres en encre indigo (`273166`), data froide, l'ambre seul chaud réservé aux écarts défavorables | Document plus doux : note au dirigeant, suivi récurrent, support de formation |

Choix en une ligne : `L.deck({ theme: 'ciceria-contraste' })`. La slide 11 de `exemple/demo-ciceria.pptx` montre la même slide dans les trois chartes.

### Rôles des jetons et clés de `lib.js`

| Clé `ctx.T` | Rôle du jeton | A | B | C | Usage |
|---|---|---|---|---|---|
| `ink` | `texte-1` | `3A322D` | `3A322D` | `3A322D` | chiffres, texte principal |
| `title` | `titre` | `3A322D` | `3A322D` | `273166` | titres de slide |
| `n1` | `texte-2` | `5C544D` | `5E534C` | `5A544F` | texte courant fort |
| `n2` | `texte-3` | `6F6761` | `706760` | `6D6864` | texte secondaire, axes, notes |
| `n3` | `donnee-contexte` | `A49D96` | `A69C95` | `B4BAE2` | barres de contexte, série réelle (`actual`) |
| `n4` | `filet` | `C4BCB5` | `D9D5D1` | `D2D7F7` | filets, barres de second plan |
| `n5` | `donnee-fantome` | `D9D5D0` | `D9D5D1` | `E7EAFF` | séries fantômes |
| `n6` | `surface-2` | `EAE5E1` | `EAE5E1` | `E7EAFF` | aplats de carte, panneau pâle |
| `bg` | `fond` | `F5F2EF` | `FEFBF9` | `FCFBF9` | fond des slides |
| `surface` | `surface` | `FCFAF7` | `F5F2EF` | `F5F6FF` | encadrés |
| `accent` | `accent` | `5E6AB0` | `5E6AB0` | `5E6AB0` | LA barre, LE mot, LE chiffre (moins de 15 % de la surface) |
| `accent2` | `accent-texte` | `4B5698` | `495399` | `4A5699` | texte d'accent sur petit corps |
| `accentLight` | `accent-pale` | `E7ECFF` | `E5EAFF` | `E7EAFF` | bande de mise en évidence, bandeau de conclusion |
| `lavande` | `accent-sur-sombre` | `B4BAE2` | `B4BAE2` | `D2D7F7` | chiffre sur panneau sombre, jamais en texte sur fond clair |
| `panel` / `panelText` | `panneau` / `texte-sur-panneau` | `3A322D` / `F5F2EF` | `201711` / `F5F2EF` | `B4BAE2` / `171F45` | panneau de conclusion |
| `pos` / `neg` | états positif et négatif | `498362` / `B45246` | `45845D` / `B84E45` | `478364` / `B4514C` | signes, uniquement sur des chiffres |
| `ref` | `reference` | `934717` | `9E3831` | `855200` | ligne de référence secondaire |
| `cat` | palette catégorielle (8 couleurs) | | | | séries multiples, dans l'ordre |
| `seq` | palette séquentielle (4 pas) | | | | du plus foncé au plus clair |

`panelAccent` se déduit : lavande sur panneau sombre (A, B), indigo texte sur panneau clair (C). Texte posé sur un aplat : `L.surAplat(T, fill)` rend l'encre ou le blanc selon la clarté de l'aplat. On n'écrit jamais un code à la main : on lit `ctx.T`.

### Limite connue de la charte B

La maquette d'origine de B prévoit une mise en page « titre dans un panneau » (bloc brun à gauche, titre en clair). Elle n'est **pas** dans `lib.js` : en B, le titre reste en haut comme dans A et C, donc jamais de titre de quatre lignes. Si on l'ajoute : panneau d'au moins 4,4 in de large et titre de 90 caractères au plus.

Polices de la charte : titres **Source Serif 4** (graisse 600, nom `Source Serif 4 SemiBold`, donné par le fichier `SourceSerif4-SemiBold.ttf` (nom Windows et PowerPoint : `Source Serif 4 SemiBold`). Les fichiers `SourceSerif4_18pt-...`, `_36pt-...`, `_48pt-...` du même dossier sont d'autres familles (« Source Serif 4 18pt SemiBold »...) : les installer ne gêne pas, mais seul le fichier sans taille optique dans le nom donne la police attendue), texte **IBM Plex Sans** (400, 500, 600 : noms `IBM Plex Sans`, `IBM Plex Sans Medium`, `IBM Plex Sans SemiBold`). Le serif ne sert jamais dans un graphique.

### Si les polices ne sont pas sur l'ordinateur

PowerPoint remplace alors silencieusement la police absente et la mise en page change. Deux protections :

1. Le PPTX s'affiche avec les polices de l'ordinateur qui l'ouvre. La détection automatique ne vaut donc que si le deck est fabriqué sur ce même ordinateur (Claude Code) ; dans le bac à sable de claude.ai, forcer `SLIDE_FONTS=ciceria` si les polices sont installées chez l'utilisatrice. `L.deck()` cherche les polices dans les dossiers de polices usuels. Si elles manquent, il passe tout seul au **repli : Georgia pour les titres, Arial pour le reste** (polices présentes sur Windows et Mac), et affiche un message. Rien ne casse, mais la charte n'est pas respectée.
2. Pour avoir la charte complète : installer les deux familles depuis Google Fonts (fonts.google.com, recherche « Source Serif 4 » puis « IBM Plex Sans », bouton « Get font » puis « Download »), ouvrir les fichiers `.ttf` du sous-dossier `static` (pas le fichier « Variable ») et cliquer « Installer ». Sous Windows, choisir « Installer pour tous les utilisateurs » (clic droit sur le fichier) : une installation « pour moi seul » n'est parfois pas vue par PowerPoint, qui affiche alors une police de repli. Redémarrer PowerPoint, régénérer le deck.

Forcer le repli : variable d'environnement `SLIDE_FONTS=repli` (ou `L.deck({ fonts: 'repli' })`). Forcer la charte : `fonts: 'ciceria'`.

Les polices ne sont pas embarquées dans le PPTX. Pour un envoi à un client sans ces polices : joindre aussi un PDF (Fichier, Exporter en PDF depuis PowerPoint).

### Logo

Aucun logo n'est fourni. **Logo du haut à droite** (proposition commerciale) : option `logoClient` de `L.deck({ logoClient: 'chemin.png' })` ou `L.slide(..., { logoClient })`. C'est le logo de Ciceria ou celui du client selon la proposition : Claude le demande à chaque fois et ne le suppose jamais. Le logo du bas à droite (ci-dessous) reste celui du cabinet. Poser un fichier **`logo.png`** (fond transparent de préférence) dans le dossier de travail ou à côté de `SKILL.md` : `L.deck()` le trouve seul. Il apparaît en bas à droite de chaque slide de contenu (1,4 pouce de large au plus) et en haut à droite de la couverture dans l'exemple. Autre chemin : `L.deck({ logo: 'chemin/vers/logo.png' })` ou variable `SLIDE_LOGO`. Sans fichier, aucune zone de logo n'est réservée.

## Thème neutre : `encre`

Fond blanc, texte presque noir chaud (`211E1B`), un accent rouge brique (`B42318`), neutres chauds. À utiliser quand aucune charte n'est demandée. Polices : repli (Georgia et Arial) automatiquement.

## Ajouter une charte

Dans `tools/lib.js`, copier le bloc `ciceria` dans `THEMES` sous un autre nom, changer les codes (sans `#`), et au besoin ajouter un jeu de polices dans `FONTS`. Règles : un seul accent ; `n1` à `n6` du plus foncé au plus clair, tous de la même température (tous chauds ou tous froids) ; `bg` clair ; `panel` foncé pour le panneau de conclusion ; vérifier qu'un texte `n2` reste lisible sur `bg`.
