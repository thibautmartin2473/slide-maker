---
move: chiffres-heros
question: « l'entreprise en N chiffres »
solidite: très solide (Air Liquide p5, L'Oréal p2/p8, LVMH p27, Hermès p2, McK NYC p52, Danone p30)
lib: chiffresHeros
---

# Chiffres-héros

## Question servie
« Qui est-elle, en chiffres ? », ouverture de deck, fiche d'identité, synthèse.

## Pourquoi ça paraît évident
Le chiffre **est** le graphique. Rapport chiffre/libellé 3:1, alignement
rigoureux et filets fins : la page respire et paraît sûre d'elle.

## Anatomie (colonne, Air Liquide p5)
- Colonne sur aplat `n6` en **fond perdu** (bord droit, haut, bas), ≈ 4/12 colonnes.
- 5-7 chiffres **alignés à droite** sur la marge droite, 28 pt Light (ou serif
  pour un registre éditorial) ; libellé 9 pt `n2` dessous, aligné à droite.
- Pas constant ; filets 0,5 pt `n4` entre chiffres.
- Un seul chiffre en accent au plus.

## Layering
aplat → filets → chiffres → libellés ; l'exhibit de gauche (donut, carte) vit à côté.

## Recette pptxgenjs
```js
const x = G.col(8).x - G.gut / 2;
const s = ctx.slide({ …, titleW: x - G.ml - 0.4, footW: x - G.ml - 0.4, page: false });
L.chiffresHeros(ctx, s, { x, items: [{ v: '241 M€', label: 'EBITDA 2025, +16 % sur un an' }, …] });
L.pageNo(ctx, s);
```

## Variantes
- **Grille à filets** (LVMH p27) : 4 colonnes × 2 étages de chiffres centrés,
  filets pleine largeur entre étages.
- **Bento en quinconce** (L'Oréal p2) : tuiles arrondies, colonnes décalées d'une
  demi-tuile, 4 teintes en damier, registre éditorial, à réserver aux rapports.
- **Colonne entre crochets** (Hermès p2) : 4 coins en L accent au lieu d'un cadre.
- **Pictogramme-jauge** (McK NYC p52) : 3 KPI 48 pt, chacun avec une icône
  remplie à p % (icône 2 couleurs, la pleine recadrée `sizing: { type: 'crop' }`),
  ou jauge-barre remplie (Bain Lux p15).
- Chiffres en accent **dans le texte courant** (Hermès, Air Liquide) : lecture en diagonale.

## Vu chez
- Air Liquide p5
- LVMH p27
- L'Oréal p2
- Hermès p2
- McK NYC p52

## Paysage / portrait
Portrait : bandeau de 3-4 chiffres en tête ou colonne droite de 35 %.
