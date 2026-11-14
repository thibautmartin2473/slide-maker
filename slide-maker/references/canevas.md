# Canevas : une charte, deux orientations

**Règle de la maison :** une fiche de forme enregistre une **charte**, pas un format de page. La même charte doit pouvoir se rendre en **paysage** (deck projeté, slides de travail) comme en **portrait** (rapport, restitution A4, one-pager). L'orientation d'une source ne décide jamais de l'orientation du livrable.

Exemple type : une charte apprise sur des slides, puis une restitution rendue en A4 portrait. La charte n'a pas changé, seul le canevas a changé.

## Ce qui appartient à la charte (identique dans les deux orientations)

- palette et rôle de chaque couleur, noir chaud compris ;
- polices et **hiérarchie** (titre > sous-titre > corps > note/source), avec les rapports de taille entre niveaux ;
- anatomie d'un exhibit : label (`Exhibit N` / `EXHIBIT N`), titre-message, ligne d'unité, `Note:` puis `Source:`, et leur position relative ;
- éléments de pied de page (mention de droits, nom de l'émetteur, n° de page) et leur côté ;
- fil d'Ariane / tracker, filets, aplats, pastilles, traitement photo.

## Ce qui appartient au canevas (change selon l'orientation)

| Paramètre | Paysage | Portrait |
|---|---|---|
| Canevas type | 16:9 **13,333 x 7,5 in** ; A4 paysage **11,69 x 8,27 in** | A4 **8,27 x 11,69 in** ; US Letter **8,5 x 11 in** |
| Marges | environ 5 % de la largeur sur les côtés, environ 6 % en haut | environ 9-10 % de la largeur sur les côtés (20 mm), environ 7 % en haut |
| Titre | y fixe, 1-2 lignes, pleine largeur | y fixe, jusqu'à 3 lignes, pleine largeur de la colonne |
| Grille | 2 colonnes : texte et exhibit côte à côte, ou exhibit pleine largeur | 1 colonne de texte ; exhibits **pleine largeur, empilés** |
| Charge | 1 exhibit = 1 slide | 1 à 2 exhibits par page, entre des paragraphes |
| Corps | projeté 14 pt minimum (18 pt confortable) ; lu seul 10-12 pt | lu seul 9-11 pt (rapport), 8 pt minimum pour notes |
| Pied de page | bande basse, environ 4 % de la hauteur | bande basse, environ 3 % de la hauteur |

Quand une fiche donne des tailles pour une seule orientation, on **garde les rapports entre niveaux** et on recale le corps sur le mode de lecture (B1 de la [production](production.md)), pas sur la taille de page.

## Transposer un archétype

| Composition paysage | En portrait |
|---|---|
| Colonnes côte à côte (piliers, equity story, pros/cons) | lignes empilées, même ordre de lecture |
| Texte à gauche, exhibit à droite | titre, exhibit pleine largeur, commentaire dessous |
| Histogramme vertical à beaucoup de catégories | barres horizontales (plus de place en hauteur) |
| Bridge, football field, frise | restent horizontaux, pleine largeur de colonne |
| Tableau large (buyer landscape, deal log) | on retire des colonnes ou on scinde ; jamais sous 8 pt |
| Grille de tuiles 2 x 3 | 2 x 3 conservée ou 3 x 2 |

## Table portrait obligatoire

Toute fiche de forme porte une **table typographique portrait complète** (titre, sous-titre, en-tête d'exhibit, corps, tableau, notes, sources, pied) : mesurée si la source publie en portrait, sinon dérivée ici et marquée `derive`. Leçon d'un test à l'aveugle : sans elle, l'agent invente la hiérarchie.

## Dans une fiche de forme

Chaque fiche porte en frontmatter `canevas:`, la liste des orientations et leur statut : `observe` (mesuré sur une source) ou `derive` (obtenu par les règles ci-dessus). Exemple : `canevas: [paysage-observe, portrait-derive]`. Une orientation **dérivée** se produit sans problème, mais la fiche le dit, et la première production dans cette orientation remonte ses mesures dans la fiche (étape 4 de la [production](production.md)).
