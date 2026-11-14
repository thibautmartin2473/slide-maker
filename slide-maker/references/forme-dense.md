# Forme « Analytique dense »

Une slide qui porte une analyse entière : un exhibit (tableau, matrice, comparatif), relié par des **pastilles numérotées** à des **encadrés** ou à un panneau, un **bandeau de conclusion** qui dit la décision, et une **ligne de notes** qui avoue ce qui est un jugement et non une mesure. Le tableau de l'exemple (slide 5 de `tools/exemple.js`) est une application complète.

## Quand la prendre, quand l'éviter

- La prendre pour une slide **lue** (envoyée, imprimée, relue en groupe) où le lecteur doit pouvoir vérifier : retards clients, comparatif de fournisseurs ou d'offres, matrice de risques, tableau de facteurs.
- L'éviter pour une slide **parlée devant une salle** (utiliser la variante projetée, plus aérée, ou une autre forme), pour une couverture et pour un intercalaire.

## Anatomie

1. **Titre** : phrase-conclusion sur deux lignes au plus, un mot-clé ou un chiffre en accent.
2. **Sous-titre** : mesure, période, unité.
3. **Exhibit à gauche** (environ 55 % de la largeur) : tableau sans cadre, filets horizontaux seulement ; une **pastille numérotée** par ligne ou par cellule qui compte.
4. **Encadrés à droite** (environ 40 %) : un par pastille, même numéro, titre en semi-gras puis une phrase d'action. **Un seul** encadré est en mise en évidence (fond `accentLight`, cadre pointillé accent).
5. **Bandeau de conclusion** pleine largeur sous le tout : une seule phrase, actionnable, précédée du libellé « Conclusion » (ou « Décision demandée »).
6. **Note** en pied : ce qui est un jugement, ce qui est fictif ou estimé, la date de vérification ; puis la source.

## Mode lecture et mode projeté

| | Lecture | Projeté |
|---|---|---|
| Titre | 24 pt | 28 pt |
| Corps, tableau, encadrés | 11 pt (10 minimum) | 14 pt |
| En-têtes de colonne, étiquettes | 10 pt | 12 pt |
| Notes, source | 10 pt | 10 pt |
| Nombre d'encadrés | 3 à 4 | 2 à 3 |
| Lignes du tableau | 5 à 8 | 3 à 5 |

Les deux modes se choisissent par le format du deck : `L.deck({ format: '16x9' })` pour la lecture, `'16x9P'` pour le projeté (les tailles de `ctx.S` suivent). Dire « projeté » au cadrage réduit la densité : moins de lignes, moins d'encadrés, jamais une police plus petite.

## Construction avec la bibliothèque

```js
const L = require('./lib.js');
const ctx = L.deck({ theme: 'ciceria' });
const { T, G, S, Fn } = ctx;
const s = ctx.slide({ kicker: 'Créances clients', title: 'Trois clients concentrent 46 % des retards', subtitle: 'Retards au 31 octobre 2026, en k€', source: 'Balance âgée clients', note: 'Les priorités suivent le montant : jugement, pas mesure.' });
s.addTable([...], { x: G.ml + 0.45, y: 2.15, w: 6.5, colW: [2.4, 1.3, 1.2, 1.6], rowH: 0.55 });   // exhibit, bordures horizontales seules
L.pastille(ctx, s, { cx: G.ml + 0.18, cy: 2.15 + 0.55 * 1.5, n: 1 });                          // une par ligne qui compte
L.encadre(ctx, s, { x: 8.1, y: 2.15, w: 4.6, h: 1.1, n: 1, title: 'Titre', text: 'Action', focus: true });
L.bandeau(ctx, s, { y: 5.95, label: 'Conclusion', text: 'obtenir ces paiements ramène le retard de 890 k€ à 480 k€.' });
```

`L.pastille`, `L.encadre` et `L.bandeau` sont définies dans `tools/lib.js`.

## Règles de la forme

- Le tableau n'a **ni cadre ni filet vertical** : l'œil suit les lignes, pas les cases.
- Les pastilles et les encadrés partagent le même numéro et le même ordre (haut vers bas).
- Une seule teinte chaude ou saturée dit « ici » (l'encadré en évidence) ; tout le reste est neutre.
- Le bandeau dit la décision, pas un résumé du tableau.
- La ligne de notes avoue le jugement (« Les priorités suivent le montant en retard : c'est un jugement ») et date la vérification.
- Un comparatif où la cible gagne sur tous les critères est suspect : montrer ce qu'elle coûte (« au prix d'un coût plus haut »).

## À ne pas faire

- Des corps de 6 à 9 pt : illisibles en projection et à l'impression.
- Gris sur gris trop faible : vérifier le contraste du texte secondaire sur le fond.
- Plus de quatre encadrés : scinder en deux slides.
