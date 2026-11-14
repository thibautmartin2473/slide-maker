---
move: kpi-dans-le-graphique
question: « quel est le chiffre de synthèse ? »
solidite: solide (Bain p9, McK p33/p43, TotalEnergies p11, GS ID p126)
lib: medaillon ; pill ; donutSobre (total au centre)
---

# KPI posé dans le graphique

## Question servie
« Quel chiffre retenir de ce graphique ? » (TCAM, total, variation), sans
encadré à côté.

## Pourquoi ça paraît évident
Le chiffre est posé **sur** la donnée qu'il résume : pas de lien à faire. Le
chevauchement (médaillon qui mord les barres, coupé par la ligne de base) donne
la profondeur qui fait « deck premium ».

## Anatomie
- Médaillon Ø 13-16 % de la largeur (1,7-2,0 in), bord blanc 4,5 pt, centré sur
  la plage qu'il résume, **coupé** par la ligne de base (centre 0,1-0,2 in au-dessus).
- Contenu : kicker capitales 7,5 pt (« TCAM 2012-19 ») + chiffre ~30 pt blanc,
  ≈ 1,3 × le titre.
- Taille qui croît avec l'importance (Bain : 6 % → 29 %) ; dernier médaillon en
  couleur accent foncée.

## Layering (le plus important du move)
1. barres ; 2. médaillon (ellipse, bord blanc épais) ; 3. **rectangle blanc
   masque** sous la ligne de base (effet coupé) ; 4. textes du médaillon ;
5. filet de base redessiné ; 6. **source et n° de page posés en dernier**
(`frame({ footer: false })` puis `L.footer` + `L.pageNo`), sinon le masque les couvre.

## Recette pptxgenjs
```js
const base = r.P.y + r.P.h;
L.medaillon(ctx, s, { cx: r.x(9.8), cy: base - 0.12, d: 2.0, value: '+16 %',
  label: 'TCAM 2021-25', fill: T.accent2, clipY: base + 0.004, clipH: 1.2 });
L.line(ctx, s, G.ml, base, G.W - G.mr, base, { color: T.n3 });
L.footer(ctx, s, { source }); L.pageNo(ctx, s);
```

## Variantes
- **Pastille pleine / contour** au-dessus des piles (total / 2ᵉ KPI) → move `pastilles-au-pas`.
- **Total au centre du donut** (TotalEnergies p11, GS ID) → move `donut-sobre`.
- **Pilule posée sur l'intersection** ligne/barre, qui masque le trait (TotalEnergies p15).

## Vu chez
- Bain Lux p9
- McKinsey Chili p43
- TotalEnergies p11

## Paysage / portrait
Paysage : 2-3 médaillons max. Portrait : 1-2, Ø ≤ 30 % de la largeur ; sinon
passer à une pilule.
