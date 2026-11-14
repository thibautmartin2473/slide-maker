---
move: zone-focus
question: « où sommes-nous ? » / « qu'est-ce qui est nouveau ? »
solidite: très solide (JPM p4/p25, PJT p18/p19, GS p13, Rothschild p33, Evercore p29, Capgemini p38, Danone)
lib: zoneFocus (mode 'band' derrière, mode 'frame' devant)
---

# Zone focus (une seule mise en évidence)

## Question servie
« Quel sous-ensemble regarder ? », le bin où cote la cible, les nouveaux pools de
valeur, la cellule du cas de base.

## Pourquoi ça paraît évident
Une bande pâle derrière un groupe le détache sans changer ses couleurs ; le
reste du graphique devient contexte. **Une seule** par slide.

## Anatomie
- **Bande** (fond) : `n6` ou `accentLight`, liseré pointillé `n4` 0,75 pt, largeur =
  pas de la catégorie, hauteur = zone de tracé **+ table sous l'axe** (la cellule
  de la table est dans la bande, JPM p25). Étiquette 9 pt semi-gras en haut de la bande.
- **Cadre** (contour) : pointillé accent 1 pt, sans remplissage, autour d'une
  cellule / d'une colonne (PJT p18 : cellule du cas management).
- **Panneau gris** derrière 2 marches d'un bridge pour isoler « le nouveau »
  (Capgemini p38), avec son titre dedans.

## Layering
Bande : **créée avant** le graphique (le graphique a un fond transparent).
Cadre : **créé après** (il passe devant).

## Recette pptxgenjs
```js
L.zoneFocus(ctx, s, { x: L.xAt(P, n, k) - cw / 2, y: P.y - 0.5, w: cw, h: P.h + 0.5 + tableH,
  mode: 'band', label: 'Cours actuel\n(54 %)' });   // avant L.bars(...)
L.zoneFocus(ctx, s, { x, y, w, h, mode: 'frame' });  // après la table
```

## Variantes
- Deux bandes symétriques « pour référence » aux extrémités d'un classement
  (MS p28), c'est la même mise en évidence, inversée.
- Mini-tag à cheval sur la bordure (« Management Forecast », PJT p18).

## Vu chez
- JPM p25
- PJT p18
- Capgemini p38

## Paysage / portrait
Identique ; en barres horizontales (portrait) la bande devient horizontale.
