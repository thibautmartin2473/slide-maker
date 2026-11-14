---
move: chevauchement
question: relief et hiérarchie sans ombre
solidite: très solide (Hermès toutes pages, Danone p10/p21, JPM ID p14/p16/p17, TotalEnergies p11, AXA p7, Bain Lux p9/p15/p23, BCG SIA p13, PJT p18)
lib: ordre de création ; rect ; txt({ fill }) ; medaillon
---

# Chevauchement (layering sans ombre)

## Question servie
Donner de la profondeur et relier deux zones, c'est ce qui sépare un deck
« premium » d'un deck « propre ». Invariant A9 des principes.

## Pourquoi ça paraît évident
Un élément qui franchit une frontière dit « ces deux choses vont ensemble » et
crée un avant-plan, sans ombre ni cadre.

## Anatomie : les 7 formes observées
1. **Carte blanche à cheval** sur une bande de couleur (haut 51 % crème, carte
   posée à cheval), Hermès.
2. **Surtitre qui interrompt la bordure** d'un panneau : texte capitales à fond
   blanc posé sur le filet du haut, JPM ID p14/p17.
3. **Panneau en fond perdu** qui touche un ou deux bords de page, Bain p23, Capgemini.
4. **Médaillon coupé** par la ligne de base, Bain Lux p9 (move `kpi-dans-le-graphique`).
5. **Pilule / onglet à cheval** sur le bord d'un encadré (« 2026-2030 », TotalEnergies p11 ;
   tag « Management Forecast », PJT p18).
6. **Chevron ou flèche qui entre** dans un cartouche / panneau (AXA p7, Danone p21).
7. **Cartes qui mordent** le bord d'un trapèze (JPM ID p14, move `entonnoir-encastre`).

## Layering
La règle : **ordre de création = ordre des plans**. Fond → bande → panneau →
carte → graphique → texte → pilule. Un masque blanc (rectangle `bg`) se crée
après ce qu'il coupe et **avant** ce qui doit rester visible (source, n° de page).

## Recette pptxgenjs
```js
L.rect(ctx, s, x, y + 0.1, w, h, { line: T.n4, lw: 0.75 });                     // panneau filaire
L.txt(ctx, s, 'FLUX DE TRÉSORERIE, M€', { x: x + 0.15, y, w: 2.9, h: 0.2, fontSize: 8,
  fontFace: Fn.semi, color: T.accent, charSpacing: 1.2, fill: { color: 'FFFFFF' }, align: 'center' }); // interrompt le filet
```
Ombre : seulement très douce sous une carte (`shadow: { type: 'outer', blur: 8, opacity: 0.15 }`), jamais sur une donnée.

## Vu chez
- Hermès p2
- JPM ID p14
- Danone p10
- Bain Lux p15

## Paysage / portrait
Identique ; en portrait, les fonds perdus se font en haut/bas plutôt qu'à droite.
