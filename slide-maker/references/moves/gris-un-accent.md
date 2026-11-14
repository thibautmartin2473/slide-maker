---
move: gris-un-accent
question: « lequel compte ? »
solidite: très solide (Conseil 6+, M&A 5, CAC40 3)
lib: grisUnAccent (option gradient pour la variante temporelle)
---

# Gris + un accent

## Question servie
« Lequel de ces éléments porte le message ? », la dernière année, la cible, le
point de rupture.

## Pourquoi ça paraît évident
L'œil va à la seule couleur saturée avant de lire quoi que ce soit ; le titre
nomme ce que l'accent montre. Tout le reste devient du contexte **sans être
supprimé**.

## Anatomie
- Toutes les barres en `n3` (ou rampe `n5 → n1` si l'ordre compte), **une** en
  `accent` ; l'accent repris sur le mot-clé du titre (`**…**`).
- Barres de largeur constante ; gap 45-60 % (jointives, gap 6-10 %, pour une
  série longue de 20+ points, Bain p9).
- Valeur au-dessus de chaque barre, aucune grille, aucun axe Y.
- Aire saturée < 15 % de la slide.

## Layering (arrière → avant)
1. graphique natif (une série, une couleur par point) ;
2. étiquettes posées à la main si besoin (années dans les barres, Bain p9) ;
3. cote ou pilule sur l'accent (move `mesure-dessinee`).

## Recette pptxgenjs
```js
const r = L.grisUnAccent(ctx, s, { box, labels, values, max, accent: [n - 1],
  gradient: false, gap: 55, layout: { x: 0, y: 0.1, w: 1, h: 0.8 } });
// r.x(i), r.top(i), r.bw : pour poser pilules, cotes, libellés
```
Une seule série + `chartColors` de longueur n → pptxgenjs écrit un `dPt` par
point. `valAxisMaxVal` fixé, sinon les objets posés tombent à côté.

## Variantes
- **Dégradé temporel** (`gradient: true`) : gris clair → anthracite, la dernière
  en accent ; le temps se lit dans la teinte (Bain Lux p9).
- **Surlignage de ligne dans un tableau** : une ligne pleine accent, le reste en
  gris (OW AVISTRAT p39, JPM p17 : ligne JPM seule écrite).
- **Deux panneaux jumeaux**, l'accent sur la même position dans chacun (Bain PE p6).

## Vu chez
- Bain Luxury Monitor p9
- Bain PE Roadshow p6
- Kearney FDI p8, McKinsey NYC p52, Morgan Stanley p28 (un seul bleu), Hermès p32 (orange seul).

## Paysage / portrait
Paysage : pleine largeur, 10-26 barres. Portrait : au-delà de 12 catégories,
passer en barres horizontales (`dir: 'bar'`, inverser avec `L.revBar`).
