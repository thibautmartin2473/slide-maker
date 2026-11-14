# Le registre des chiffres (garde-fou des preuves)

Un fichier `mon-deck.data.json`, rangé à côté du PPTX, liste **chaque chiffre** du deck avec sa valeur, son unité, sa période, son statut et sa source. Il est écrit **pendant le plan de titres**, avant toute mise en page, et mis à jour à chaque changement de chiffre. Le script du deck lit le registre pour écrire titres, séries et sources : un chiffre qui change = une valeur modifiée dans le registre, puis on relance le script et le linter.

## Format

```json
{
  "deck": "Titre du deck",
  "version": 1,
  "parametres": { "mode": "lecture", "policeMinPt": 10, "policeMinNotePt": 10, "niveauxTexteMax": null },
  "slides": [
    { "n": 1, "id": "s1", "type": "couverture", "chiffres": [] },
    { "n": 2, "id": "s2",
      "titre": "Le chiffre d'affaires atteint 4,2 M€ en 2025, en hausse de 21,7 % sur un an",
      "titreModele": "Le chiffre d'affaires atteint {ca25} en {ca25.periode}, en hausse de {croiss} sur un an",
      "chiffres": [
        { "id": "ca25", "valeur": 4.2, "unite": "M€", "periode": "2025", "decimales": 1, "dansTitre": true, "statut": "sourced",
          "source": { "fichier": "sources/rapport-annuel-2025.pdf", "page": 12, "date": "2026-03-14", "libelle": "Rapport annuel 2025" },
          "verifie": { "par": "DAF", "le": "2026-11-03" } },
        { "id": "croiss", "valeur": 21.7, "unite": "%", "periode": "2025", "statut": "sourced", "calcul": "(ca25/ca24-1)*100", "decimales": 1, "dansTitre": true }
      ] }
  ]
}
```

| Champ d'un chiffre | Sens |
|---|---|
| `id` | Unique dans le deck (lettres, chiffres, `_`). Un même id peut revenir sur plusieurs slides à condition d'avoir la même valeur, unité, période et statut. |
| `valeur`, `unite`, `periode` | Valeur numérique ; unité (`k€`, `M€`, `%`, `x`, `semaines`, `jours`) ; période (`2025`, `octobre 2026`, `T3 2026`). |
| `statut` | `sourced` : vient d'un fichier (source obligatoire). `E` : estimé, étiqueté « E » sur la slide, avec une `hypothese`. `P` : plan de la direction, accepté seulement si la slide définit « P : plan de la direction ». `gap` : donnée manquante, valeur absente, affichée « n.d. », jamais comblée. |
| `source` | `{fichier, page, date, libelle}` : `fichier` et `date` obligatoires pour `sourced` ; `libelle` est le texte qui doit figurer sur la slide. |
| `calcul` | Pour un chiffre dérivé : formule sur d'autres ids ; le linter la recalcule et compare. |
| `verifie` | `{par, le}` une fois la valeur relue contre le fichier source par un humain. Sinon le rapport la liste dans « non vérifié ». |
| `dansTitre`, `decimales` | Le chiffre est cité dans le titre ; arrondi d'affichage. |

Une slide peut porter `type` : `couverture`, `sommaire`, `intercalaire`, `fin` (exemptées de source, de période et d'unité) ou `contenu` (défaut). `parametres.mode` vaut `lecture` (texte courant 10 pt minimum) ou `projete` (14 pt) ; `verifierFichiers: true` demande en plus que les fichiers sources existent à côté du registre.

## Dans le script du deck

```js
const D = require('./deck-data.js').charger('mon-deck.data.json');
s.addText(D.titre(2), { ... });                    // titre : modèle dont les {id} sont remplacés par la valeur formatée
D.fmt('ca25');                                     // « 4,2 M€ » (typographie française ; « (E) » ajouté aux estimations)
D.nombre('ca25');                                  // « 4,2 » sans unité
D.val('ca25');                                     // 4.2
D.serie(['ca24', 'ca25']);                         // [3.45, 4.2] pour addChart
D.source(2);                                       // « Source : Rapport annuel 2025, p. 12 »
```

## Le contrôle

```bash
node tools/lint-deck.mjs mon-deck.pptx --data mon-deck.data.json
node tools/lint-deck.mjs mon-deck.pptx --data mon-deck.data.json --mode projete
node tools/lint-deck.mjs mon-deck.pptx --data mon-deck.data.json --sortie rapport.md
node tools/lint-deck.mjs diff ancien.data.json nouveau.data.json     # quels chiffres ont changé, quelles slides rééditer
```

Code de sortie 1 s'il y a au moins une erreur ; 0 sinon. Lecture seule : le deck n'est jamais modifié. Le rapport est une **liste de corrections par slide** (« Slide 4 : le titre dit 23 %, le registre 21,7 % ») suivie d'une section **« Ce que je n'ai pas pu vérifier »**.

| Code | Contrôle |
|---|---|
| `TITRE-LIGNES`, `TITRE-DEBORDE`, `TITRE-ABSENT` | Titre de deux lignes au plus (estimé) ; titre identifiable |
| `TITRE-CHIFFRE`, `TITRE-UNITE`, `TITRE-REGISTRE` | Chaque chiffre du titre est au registre, égal, avec la même unité ; le titre du deck égale celui du registre |
| `UNITE-DERIVE`, `ECHELLE-MIXTE`, `DEVISE-MIXTE`, `NOTATION-UNITE` | M€ dans le titre et k€ dans l'axe ; plusieurs échelles ou devises ; notations hétérogènes |
| `PERIODE-DERIVE`, `PERIODE-FY-CY`, `PERIODE-REGISTRE` | L'année du titre n'est pas celle de l'axe ; exercice et année civile mélangés ; période du registre absente de la slide |
| `SOURCE-ABSENTE`, `SOURCE-VIDE`, `SOURCE-VAGUE`, `SOURCE-LIBELLE`, `SOURCE-REGISTRE`, `SOURCE-FICHIER` | Source sur chaque slide de contenu, précise, égale à celle du registre |
| `E-NON-ETIQUETE`, `E-LEGENDE-SEULE`, `P-NON-DEFINI`, `GAP-COMBLE`, `GAP-NON-SIGNALE`, `GAP-DANS-TITRE` | Estimations étiquetées « E » ; trous de données signalés et jamais comblés |
| `REGISTRE-INTROUVABLE`, `CALCUL`, `REGISTRE-ID`, `SLIDE-HORS-REGISTRE` | Chiffre du registre absent de la slide (deck pas à jour) ; dérivé qui ne se recalcule pas ; registre incohérent |
| `POLICE-MIN`, `POLICE-MIN-GRAPHIQUE`, `POLICE-UNIFORME`, `NIVEAUX-TEXTE` | Taille minimale par mode ; une taille et une police par type de texte ; niveaux de texte |
| `MAJUSCULES`, `COQUILLE`, `TIRET-CADRATIN`, `EMOJI` | Majuscules de corps ; mots répétés, fautes fréquentes, valeur non résolue ; tiret long, emoji |

**Deux niveaux de texte au plus** : option `--niveaux-max 2`, éteinte par défaut ; à activer pour un deck lu en 30 secondes.

**Limites** (le rapport les redit) : le nombre de lignes du titre est estimé, pas mesuré ; l'orthographe générale n'est pas vérifiée ; les chiffres dans des images ne sont pas lus ; le linter garantit que le deck et le registre disent la même chose, pas que le registre dise la vérité du fichier source (c'est le champ `verifie`, posé par un humain).

## Sans registre

Le linter tourne quand même (polices, tailles, majuscules, coquilles, sources présentes, unités et périodes du titre contre l'axe) et dit en tête de « non vérifié » que titre contre chiffres, statuts E et trous n'ont pas été contrôlés. Pour un deck existant, reconstituer le registre à partir du texte donne un premier rapport utile ; ses `sourced` ne valent que ce que valent ses sources.
