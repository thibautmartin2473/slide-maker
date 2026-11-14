---
move: fond-fantome
question: « qui ressort du lot ? »
solidite: solide (Kearney ×2, OW, JPM)
lib: fondFantome
---

# Fond fantôme

## Question servie
« Parmi N trajectoires, lesquelles comptent ? », sans retirer les autres, qui
donnent l'échelle et la norme.

## Pourquoi ça paraît évident
Les N séries existent (on ne soupçonne pas un tri), mais seules 1 à 3 sont
saturées : le reste forme une texture grise qui dit « la norme », la série clé
s'en détache.

## Anatomie
- Séries fantômes : `n4`, 1,25 pt. Séries clés : accent (et `ink` pour une 2ᵉ), 2,5 pt.
- Étiquettes en bout de ligne (nom + dernière valeur), dédoublonnées (écart
  mini 0,17 in) ; clés en semi-gras accent, fantômes en `n3` 9 pt.
- Axe Y réduit à 4 graduations (série temporelle), pas de grille.
- Une pilule posée sur la série clé porte le chiffre du titre (« ×2,4 »).

## Layering
1. graphique 1 : fantômes (porte les axes) ;
2. graphique 2 : séries clés, **même cadre et même `layout`**, axes cachés,
   fond transparent, les deux restent natifs et éditables ;
3. étiquettes de fin ; 4. pilule.

## Recette pptxgenjs
```js
const r = L.fondFantome(ctx, s, { box, labels, series, keys: ['Orvane'],
  min: 0, max: 16, axisFmt: '0"%"', majorUnit: 4, fmt: '0.0%' });
L.pill(ctx, s, { cx: r.x(5.2), cy: r.y(7.6), text: '×2,4 depuis 2018', style: 'fill' });
```
Classement (bump chart) : `valAxisOrientation: 'maxMin'` dans `baseChart` pour
mettre le rang 1 en haut ; `lineDataSymbol` par série (circle/square/diamond/
triangle) pour distinguer 4 clés **sans** couleur de plus (Kearney).

## Variantes
- **Bump chart** de rangs (Kearney p8) ; **heatmap** où seule la ligne clé porte
  ses valeurs (JPM p17) ; **tableau** avec la ligne clé en bleu plein (OW p39).

## Vu chez
- Kearney FDI 2026 p8
- JPM Investor Day p17 (heatmap)
- OW AVISTRAT p39 (planche-contact seulement).

## Paysage / portrait
Paysage : graphique 8/12, colonne de lecture 4/12 à droite. Portrait : graphique
pleine largeur, lecture en bandeau dessous ; au-delà de 12 séries, garder le
fantôme mais n'étiqueter que les clés.
