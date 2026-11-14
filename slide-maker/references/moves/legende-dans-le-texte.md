---
move: legende-dans-le-texte
question: « quelle couleur = quoi ? » sans légende
solidite: très solide (Conseil 3, CAC40 4, M&A 4)
lib: leadRuns ; md() ; libellés alignés à la main (voir `tools/exemple.js`)
---

# Légende dans le texte

## Question servie
Lire un graphique multi-séries **sans** aller-retour vers une boîte de légende.

## Pourquoi ça paraît évident
Le nom de la série est là où l'œil est déjà : au bout de la courbe, à côté du
segment, dans le commentaire. La couleur du mot = la couleur de la donnée.

## Anatomie (4 formes, par ordre de préférence)
1. **Libellé au droit du segment** de la dernière pile, dans sa couleur
   (Bain Lux p23) ; pour les gris, texte `n1`.
2. **Premier mot du commentaire** coloré comme sa barre (McKinsey Chili p33).
3. **Titre du graphique écrit dans la couleur de sa série** (TotalEnergies p15 :
   « Reinvestment rate » en rouge = la ligne).
4. **Étiquette de fin de courbe** en pastille de la couleur de la série
   (Perella p3), ou texte coloré (move `fond-fantome`).
Si une légende survit : une ligne de 2-3 carrés en tête, à droite.

## Layering
graphique → libellés (même y que le centre du segment, calculé depuis les cumuls).

## Recette pptxgenjs
```js
// y du centre du segment k de la dernière pile (empilé, max 100)
let cum = 0; ser.forEach(([name, v, color], k) => { const mid = cum + v[last] / 2; cum += v[last];
  L.txt(ctx, s, name, { x: xLabel, y: L.yAt(P, mid, 0, 100) - 0.1, w: 1.9, h: 0.2, color, fontSize: S.data }); });
// premier mot coloré
comment: L.leadRuns(ctx, 'Compresseur :', 'second fournisseur…', T.accent)
```

## Variantes
- Colonne de lecture (delta, TCAM) alignée sur les mêmes y que les libellés
  (Bain p23), la légende devient un tableau.
- Mots-clés du **titre** en couleur de marque (JPM ID : un seul segment en gras brun).

## Vu chez
- McKinsey Chili p33
- Bain Lux p23
- TotalEnergies p15
- Perella p3, JPM ID p14, LVMH p27, Lazard p8 (bandeaux = couleur des barres).

## Paysage / portrait
Identique ; en portrait, les libellés passent **sous** les piles si la largeur manque.
