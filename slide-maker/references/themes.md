# Thèmes

Un thème = une palette (brun ou gris chaud, neutres, un accent) + un jeu de polices. Il se choisit en une ligne : `L.deck({ theme: 'ciceria' })`. Tout est défini dans `tools/lib.js` (objets `THEMES` et `FONTS`) ; on n'écrit jamais un code couleur à la main dans un script de deck, on lit `ctx.T` (par exemple `ctx.T.accent`).

## Thème par défaut : `ciceria`

Charte publique du site ciceriaconseil.fr (couleurs et polices). Un seul accent, l'indigo ; la lavande est un secondaire réservé aux fonds de mise en évidence et au texte sur panneau sombre.

| Rôle | Code | Usage |
|---|---|---|
| `ink` brun | `3A322D` | titres, chiffres, texte principal, panneau sombre |
| `n1` | `51463F` | texte courant fort |
| `n2` | `6F655D` | texte secondaire, sous-titres, axes, notes |
| `n3` | `A39A91` | barres de contexte (grises), axes |
| `n4` | `D1CAC2` | barres de second plan, séries fantômes |
| `n5` | `DDD6CE` | filets (0,5 pt) |
| `n6` | `ECE7E1` | aplats de carte, panneau pâle |
| `bg` beige | `F5F2EF` | fond de toutes les slides |
| `accent` indigo | `5E6AB0` | LA barre, LE mot, LE chiffre qui comptent (moins de 15 % de la surface) |
| `accent2` | `454F8F` | libellé sur fond pâle, texte d'accent sur petit corps |
| `accentLight` | `DFE2F3` | bande de mise en évidence, bandeau de conclusion |
| `lavande` | `B4BAE2` | secondaire : chiffre sur panneau brun, jamais en texte sur fond clair |
| `pos` / `neg` | `3F7A5C` / `A8483A` | signes, uniquement sur des chiffres (hausse, baisse) |
| `ref` | `B08A3E` | ligne de référence secondaire (médiane, consensus) |

Polices de la charte : titres **Source Serif 4** (graisse 600, nom `Source Serif 4 SemiBold`), texte **IBM Plex Sans** (400, 500, 600 : noms `IBM Plex Sans`, `IBM Plex Sans Medium`, `IBM Plex Sans SemiBold`). Le serif ne sert jamais dans un graphique.

### Si les polices ne sont pas sur l'ordinateur

PowerPoint remplace alors silencieusement la police absente et la mise en page change. Deux protections :

1. Le PPTX s'affiche avec les polices de l'ordinateur qui l'ouvre. La détection automatique ne vaut donc que si le deck est fabriqué sur ce même ordinateur (Claude Code) ; dans le bac à sable de claude.ai, forcer `SLIDE_FONTS=ciceria` si les polices sont installées chez l'utilisatrice. `L.deck()` cherche les polices dans les dossiers de polices usuels. Si elles manquent, il passe tout seul au **repli : Georgia pour les titres, Arial pour le reste** (polices présentes sur Windows et Mac), et affiche un message. Rien ne casse, mais la charte n'est pas respectée.
2. Pour avoir la charte complète : installer les deux familles depuis Google Fonts (fonts.google.com, recherche « Source Serif 4 » puis « IBM Plex Sans », bouton « Get font » puis « Download »), ouvrir les fichiers `.ttf` du sous-dossier `static` (pas le fichier « Variable ») et cliquer « Installer ». Sous Windows, choisir « Installer pour tous les utilisateurs » (clic droit sur le fichier) : une installation « pour moi seul » n'est parfois pas vue par PowerPoint, qui affiche alors une police de repli. Redémarrer PowerPoint, régénérer le deck.

Forcer le repli : variable d'environnement `SLIDE_FONTS=repli` (ou `L.deck({ fonts: 'repli' })`). Forcer la charte : `fonts: 'ciceria'`.

Les polices ne sont pas embarquées dans le PPTX. Pour un envoi à un client sans ces polices : joindre aussi un PDF (Fichier, Exporter en PDF depuis PowerPoint).

### Logo

Aucun logo n'est fourni. Poser un fichier **`logo.png`** (fond transparent de préférence) dans le dossier de travail ou à côté de `SKILL.md` : `L.deck()` le trouve seul. Il apparaît en bas à droite de chaque slide de contenu (1,4 pouce de large au plus) et en haut à droite de la couverture dans l'exemple. Autre chemin : `L.deck({ logo: 'chemin/vers/logo.png' })` ou variable `SLIDE_LOGO`. Sans fichier, aucune zone de logo n'est réservée.

## Thème neutre : `encre`

Fond blanc, texte presque noir chaud (`211E1B`), un accent rouge brique (`B42318`), neutres chauds. À utiliser quand aucune charte n'est demandée. Polices : repli (Georgia et Arial) automatiquement.

## Ajouter une charte

Dans `tools/lib.js`, copier le bloc `ciceria` dans `THEMES` sous un autre nom, changer les codes (sans `#`), et au besoin ajouter un jeu de polices dans `FONTS`. Règles : un seul accent ; `n1` à `n6` du plus foncé au plus clair, tous de la même température (tous chauds ou tous froids) ; `bg` clair ; `panel` foncé pour le panneau de conclusion ; vérifier qu'un texte `n2` reste lisible sur `bg`.
