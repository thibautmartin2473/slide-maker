---
move: panneau-conclusion
question: « et donc ? »
solidite: très solide (Bain ×4, Capgemini ×5, Danone, TotalEnergies ×8 en variante verdict)
lib: panneauConclusion ; verdict ; bandeau pleine largeur = rect + txt
---

# Panneau de conclusion

## Question servie
« Qu'est-ce que j'en retiens ? », la réponse lisible **seule**, à 5 mètres.

## Pourquoi ça paraît évident
La slide se lit titre → panneau ; le graphique n'est que la preuve à gauche. Le
panneau sombre en fond perdu est l'objet le plus lourd de la page, il attire l'œil
en second, juste après le titre.

## Anatomie
- Split **8/4 colonnes ≈ 65/35**, panneau `panel` (noir chaud ou nuit) du **bord
  droit de la page** jusqu'à la gouttière, **pleine hauteur** (0 → 7,5 in).
- Kicker capitales (« ET DONC ») à l'y du kicker de la slide.
- 1-2 blocs : « 2025… » (corps) / chiffre-héros 40 pt `panelAccent` / 1 phrase
  blanche avec mots-clés en semi-gras. Blocs séparés par un **filet court**
  accent (0,6 × 0,04 in), la charnière « 2025… / …2030 » (Bain p23).
- Titre et source limités à la zone blanche (`titleW`, `footW`) ; n° de page
  redessiné en clair par-dessus le panneau.

## Layering
contenu gauche → panneau (rect pleine hauteur) → filets courts → textes → n° de page.

## Recette pptxgenjs
```js
const s = ctx.slide({ …, titleW: 7.8, footW: 7.8, page: false });
L.panneauConclusion(ctx, s, { fromCol: 8, kicker: 'Et donc', yTop: 1.2, ySpan: 5.4,
  blocks: [{ pre: '2025…', big: '23 %', text: 'du marché passe par **l\'en-ligne**…' }, …] });
L.pageNo(ctx, s, 'B8B2A9');
```

## Variantes
- **Verdict en pied** : phrase-chiffre 18-24 pt semi-gras centrée sous le
  graphique (`L.verdict`), TotalEnergies, 8 slides sur 48.
- **Bandeau noir pleine largeur** en bas (y 76-90 %) portant 4-8 KPI blancs
  (Bain Lux p31).
- **Panneau pâle** (`n6`) portant une colonne de chiffres (move `chiffres-heros`).
- **Panneau-flèche** dont le bord gauche est en chevron (Danone p21, move `equation-de-graphiques`).

## Vu chez
- Bain Lux p23
- Capgemini p45
- Bain Lux p17 (bandeau), TotalEnergies p15 (verdict), Danone p21.

## Paysage / portrait
Portrait : le panneau devient un **bandeau bas** pleine largeur (fond perdu à
gauche, droite et bas), 25-30 % de la hauteur, blocs côte à côte.
