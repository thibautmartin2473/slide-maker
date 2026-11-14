# Les moves : 28 gestes de mise en page, un par question de lecteur

Un **move** est une façon éprouvée de répondre à une question précise du lecteur. On choisit le move par la question (colonne 2), pas par l'esthétique. Chaque slide en utilise un principal. Les fonctions s'appellent depuis `tools/lib.js` : `const L = require('./lib.js')`, puis `L.nomDeLaFonction(ctx, slide, options)`. Quand la colonne « Fonction » est vide, le move se compose avec les primitives (`L.rect`, `L.txt`, `L.line`, `L.pill`, `bars`) en respectant la recette.

Avant de coder un move : le titre est validé, le chiffre est au registre, la question est écrite.

## Index

| # | Move | Question du lecteur | Fonction |
|---|---|---|---|
| 1 | gris un accent | Lequel compte ? | `grisUnAccent` |
| 2 | fond fantôme | Qui ressort du lot ? | `fondFantome` |
| 3 | légende dans le texte | Quelle couleur veut dire quoi ? | `leadRuns`, `md` |
| 4 | chiffre dans le graphique | Quel est le chiffre de synthèse ? | `medaillon`, `pill` |
| 5 | panneau de conclusion | Et donc ? | `panneauConclusion`, `verdict` |
| 6 | ligne de référence | Par rapport à quoi ? | `ligneReference` |
| 7 | zone de focus | Où sommes-nous ? Qu'est-ce qui est nouveau ? | `zoneFocus` |
| 8 | table au pas | Qui, combien, quand, pour chaque barre ? | `tableAuPas` |
| 9 | pastilles au pas | Combien au total, et en % ? | `pastillesAuPas` |
| 10 | mesure dessinée | De combien, à quel rythme ? | `accolade`, `cote` |
| 11 | rangée unité | Pourquoi chaque levier ? | `rangeeUnite` |
| 12 | mise entre parenthèses | Qu'est-ce qui compte dans la conclusion et qu'est-ce qui sert de référence ? | `bracket`, `zoneFocus` |
| 13 | petits multiples | Toutes les métriques ou tous les cas racontent-ils la même histoire ? | `smallMultiples` |
| 14 | série annotée | Que s'est-il passé, et quand ? | `serieAnnotee` |
| 15 | incertitude dessinée | Quelle part est une fourchette ou une estimation ? | `bridgeGroupes` avec `est: true` |
| 16 | pont à groupes | Quels moteurs, et combien pèse chaque famille ? | `bridgeGroupes` |
| 17 | fourchette de valeur | Dans quelle fourchette se situe la valeur ? | `footballField` |
| 18 | cible vers réalisé | La promesse a-t-elle été tenue ? | `cibleRealise` |
| 19 | chiffres-héros | L'entreprise en N chiffres | `chiffresHeros` |
| 20 | anneau sobre | Quelle répartition, et combien au total ? | `donutSobre` |
| 21 | entonnoir encastré | Dans quel ordre de priorité ? | `entonnoir` |
| 22 | frontière réel et projection | Qu'est-ce qui est acquis, qu'est-ce qui est promis ? | `smallMultiples` (paramètre `split`) |
| 23 | double mesure | Prix et temps, sans double axe | `bars` + courbe superposée |
| 24 | superposition de plans | Le contexte suit-il la donnée principale ? | `bars` + courbe au même cadre |
| 25 | familles foncé clair | Quel sous-ensemble de comparables est pertinent ? | `FAMILIES` + `bars` |
| 26 | équation de graphiques | Qu'est-ce qui explique le résultat ? | `bars` en mini-graphiques |
| 27 | matrice à zones | Dans quelle catégorie tombe chacun ? | formes + nuage de points |
| 28 | tableau-graphique | Quelles variables croise-t-on, où est le cas de base ? | `addTable` + `zoneFocus` |

Le relief sans ombre (chevauchement : un élément à cheval sur une frontière) n'est pas un move mais une habitude : ordre de création du fond vers l'avant, `rect`, `txt` avec fond, `medaillon`.

## Fiches

**1. Gris un accent.** Toutes les barres en gris, une seule en accent : celle du message. Variante : dégradé du clair au foncé pour coder le temps. Recette : `L.grisUnAccent(ctx, s, { box, labels, values, accent: [indice], max, fmt })` ; rend la zone de tracé et des fonctions de position (`x(i)`, `top(i)`) pour poser du texte dessus. Piège : fixer `max`.

**2. Fond fantôme.** Toutes les séries en gris très clair, les deux ou trois séries clés par-dessus (deux graphiques natifs superposés au même cadre). Étiquettes à droite, sans chevauchement. Pour montrer qu'un acteur ressort d'un lot.

**3. Légende dans le texte.** Les premiers mots du commentaire sont dans la couleur de la série qu'ils décrivent : `L.leadRuns(ctx, 'Six mois de baisse.', 'Aucun mois ne remonte.', T.accent)`. Remplace toute légende.

**4. Chiffre dans le graphique.** Un médaillon rond posé sur la zone de tracé, coupé par la ligne de base, porte la synthèse (taux de croissance, écart). `L.medaillon(ctx, s, { cx, cy, d, value, label, clipY })`.

**5. Panneau de conclusion.** Un panneau sombre à droite en fond perdu (65 % et 35 %) avec deux ou trois blocs « chiffre et phrase » ; ou, plus léger, une phrase-verdict centrée sous le graphique (`L.verdict`). Une seule conclusion par slide.

**6. Ligne de référence.** Horizontale (seuil, budget, médiane) ou verticale, pointillée, avec une étiquette posée dans une zone vide, jamais sur une barre. `L.ligneReference(ctx, s, { P, v, max, label, labelX })`. Si la ligne traverse l'étiquette d'une barre proche du seuil, poser ensuite `L.etiquetteDegagee(ctx, s, { x: r.x(i), y: r.top(i) - 0.27, text })` : un masque couleur de fond puis l'étiquette réécrite par-dessus.

**7. Zone de focus.** Une bande pâle derrière un groupe (créée avant le graphique), ou un cadre pointillé devant. Un seul par slide. `L.zoneFocus`.

**8. Table au pas.** Une table sous le graphique dont les colonnes ont exactement la largeur des barres : chaque barre a ses lignes (qui, combien, quand). `L.tableAuPas(ctx, s, { P, n, y, rows })`.

**9. Pastilles au pas.** Sous chaque barre, une pastille donne le total ou le pourcentage : évite un second graphique. `L.pastillesAuPas`.

**10. Mesure dessinée.** Une accolade en équerre entre deux points avec une pilule (écart, taux de croissance annuel) ou une cote horizontale. `L.accolade`, `L.cote`.

**11. Rangée unité.** Une cascade horizontale native par levier, avec le commentaire sur la même rangée et des filets traversants. `L.rangeeUnite`.

**12. Mise entre parenthèses.** L'information de référence est montrée mais écartée de la conclusion : barre rotative « pour référence » (`L.bracket`), teinte pâle, cadre pointillé.

**13. Petits multiples.** N mini-graphiques de même échelle, même hauteur, axe des temps partagé, un commentaire par rangée. C'est l'habitude 12 des principes. `L.smallMultiples`.

**14. Série annotée.** Une courbe avec des événements lettrés (A, B, C) et une colonne qui les explique. Pour une série longue dont on veut expliquer les ruptures. `L.serieAnnotee`.

**15. Incertitude dessinée.** Dans un pont, la marche estimée est hachurée avec un contour pointillé et le libellé « E ». `bridgeGroupes` avec `est: true` sur l'étape.

**16. Pont à groupes.** Une cascade avec des étapes de départ et d'arrivée (`kind: 'total'`), des hausses vertes, des baisses rouges, et éventuellement des cadres pointillés autour de familles de leviers. `L.bridgeGroupes(ctx, s, { box, steps, max })`. Les valeurs négatives sont passées négatives ; les étiquettes affichent « + » et « − ».

**17. Fourchette de valeur.** Des barres flottantes min et max par méthode, une ligne verticale pour l'offre ou le budget. `L.footballField`. L'axe est écrit sous le graphique (la base n'est pas zéro).

**18. Cible vers réalisé.** Deux colonnes : objectifs à gauche, réalisé à droite sur un panneau sombre ; des coches et une seule croix, honnête et expliquée. `L.cibleRealise(ctx, s, { heads, rows })`. Pour un budget annuel contre le réalisé.

**19. Chiffres-héros.** Une colonne de quatre à six chiffres alignés à droite sur un aplat pâle en fond perdu : « l'entreprise en chiffres ». `L.chiffresHeros`.

**20. Anneau sobre.** Un anneau fin natif, le total au centre, les étiquettes rangées sur deux x fixes. À cinq parts au plus. `L.donutSobre`.

**21. Entonnoir encastré.** Des étapes décroissantes avec, pour chacune, une carte qui dit pourquoi. Pour un ordre de priorité. `L.entonnoir`.

**22. Frontière réel et projection.** Les barres du réel en gris, celles du prévu en couleur plus pâle, une ligne verticale pointillée entre les deux, libellés « E ». Passe par `smallMultiples` (paramètre `split` : nombre de périodes réalisées).

**23. Double mesure.** Deux mesures d'échelles différentes sans double axe : un histogramme et une courbe superposés au même cadre, étiquettes sur chaque point.

**24. Superposition de plans.** Un contexte en fond très pâle (période, scénario) et la donnée principale devant.

**25. Familles foncé clair.** Les sous-ensembles de comparables en paires foncé et clair : foncé pour le trait ou la médiane, clair pour la surface. `L.FAMILIES`.

**26. Équation de graphiques.** Trois mini-graphiques reliés par « + » et « = » : ce qui explique le résultat (volume, prix, mix).

**27. Matrice à zones.** Un nuage de points sur un fond découpé en quatre zones nommées ; chaque point est étiqueté ; la zone de décision est la seule teintée.

**28. Tableau-graphique.** Un tableau dont les cellules sont colorées en dégradé d'une seule teinte (cohortes, sensibilités), le cas de base entouré d'un cadre pointillé.

## Choisir sans hésiter

1. Écrire la question du lecteur en une phrase.
2. La chercher dans la colonne 3 de l'index ; si plusieurs moves conviennent, prendre le plus simple (1, 5, 6 couvrent la moitié des cas d'un point mensuel).
3. Si aucun ne convient, le message n'est peut-être pas clair : revenir au titre.
