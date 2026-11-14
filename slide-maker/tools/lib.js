// slide-maker : bibliothèque pptxgenjs (design system + une fonction par move).
// Lancement : node mon-deck.js (pptxgenjs installé : npm install pptxgenjs).
// Tout est en pouces (canevas 16:9 = 13,333 x 7,5 in). Couleurs sans '#'.
'use strict';
const PptxGenJS = require('pptxgenjs');

// ---------------------------------------------------------------- design system
const THEMES = {
  // Thème par défaut : charte publique de Ciceria Conseil (brun, beige, indigo). Un seul accent (indigo), lavande en secondaire.
  ciceria: { ink: '3A322D', n1: '51463F', n2: '6F655D', n3: 'A39A91', n4: 'D1CAC2', n5: 'DDD6CE', n6: 'ECE7E1', bg: 'F5F2EF',
    accent: '5E6AB0', accent2: '454F8F', accentLight: 'DFE2F3', lavande: 'B4BAE2', panel: '3A322D', panelText: 'F5F2EF', panelAccent: 'B4BAE2',
    pos: '3F7A5C', neg: 'A8483A', ref: 'B08A3E', seq: ['3A322D', '5E6AB0', 'B4BAE2', 'DFE2F3'], actual: 'A39A91', plan: '5E6AB0' },
  encre: { ink: '211E1B', n1: '3D3935', n2: '6B665F', n3: 'A39E96', n4: 'CFCBC4', n5: 'E6E2DB', n6: 'F4F2EE', bg: 'FFFFFF',
    accent: 'B42318', accent2: '7E1A12', accentLight: 'F1D5CF', panel: '211E1B', panelText: 'FFFFFF', panelAccent: 'F0765C',
    pos: '2E6B4F', neg: 'B42318', ref: 'C28A1E', seq: ['211E1B', '6B665F', 'A39E96', 'CFCBC4'], actual: 'A39E96', plan: 'B42318' },
  nuit: { ink: '1E1C1A', n1: '2F3A4F', n2: '5E6778', n3: '9AA3B2', n4: 'C9CFD8', n5: 'E3E7ED', n6: 'F2F5F9', bg: 'FFFFFF',
    accent: '1596CF', accent2: '0E5F8A', accentLight: 'D6ECF7', panel: '0F1E3C', panelText: 'FFFFFF', panelAccent: '3DB8EC',
    pos: '2A8C5F', neg: 'C8372D', ref: 'D29A2E', seq: ['0F1E3C', '2D5DA8', '7FA3D6', 'C3D4EC'], actual: '7FA3D6', plan: '0F1E3C' },
  terre: { ink: '231F1C', n1: '4A423C', n2: '776D65', n3: 'A89F97', n4: 'D3CCC4', n5: 'EAE4DC', n6: 'F6F1EA', bg: 'FFFFFF',
    accent: '1F5A45', accent2: '3E2519', accentLight: 'DCE9E2', panel: '3E2519', panelText: 'FFFFFF', panelAccent: 'E3C9A6',
    pos: '1F5A45', neg: 'B3362B', ref: 'D29A2E', seq: ['3E2519', '6A4430', '93684A', 'B89478'], actual: 'B89478', plan: '6A4430' },
};
// Paires foncé/clair pour les familles de pairs (move familles-fonce-clair)
const FAMILIES = [['8A6A2E', 'EFE6D2'], ['2F5D7C', 'DCE7EF'], ['4F6B3A', 'E2EAD9'], ['7A3B55', 'EFDDE5']];

const FONTS = {
  // Polices de la charte (à installer depuis Google Fonts : Source Serif 4, IBM Plex Sans). boldSemi : false (les graisses sont des polices à part).
  ciceria: { title: 'Source Serif 4 SemiBold', body: 'IBM Plex Sans', semi: 'IBM Plex Sans SemiBold', hero: 'IBM Plex Sans Medium', boldSemi: false },
  // Repli si les polices de la charte manquent : polices présentes partout. Les graisses passent par bold.
  repli: { title: 'Georgia', body: 'Arial', semi: 'Arial', hero: 'Arial', boldSemi: true },
};

const FORMATS = {
  '16x9': { W: 13.333, H: 7.5, ml: 0.6, mr: 0.6, cols: 12, gut: 0.2,
    y: { kicker: 0.40, title: 0.62, titleH: 0.82, sub: 1.48, top: 1.95, bottom: 6.75, source: 6.86, page: 7.05 },
    size: { hero: 40, title: 24, kicker: 9, h3: 13, body: 11, data: 10, axis: 9, note: 10 } },
  // Preset projeté (réunion, écran partagé) : corps 14, étiquettes 12, notes 10 (tableau unique : references/design-system.md section 3)
  '16x9P': { W: 13.333, H: 7.5, ml: 0.6, mr: 0.6, cols: 12, gut: 0.2,
    y: { kicker: 0.40, title: 0.62, titleH: 0.82, sub: 1.48, top: 1.95, bottom: 6.75, source: 6.86, page: 7.05 },
    size: { hero: 54, title: 28, kicker: 11, h3: 16, body: 14, data: 12, axis: 12, note: 10 } },
  'A4P': { W: 8.27, H: 11.69, ml: 0.8, mr: 0.8, cols: 6, gut: 0.18,
    y: { kicker: 0.70, title: 0.92, titleH: 1.05, sub: 2.05, top: 2.45, bottom: 10.75, source: 10.95, page: 11.25 },
    size: { hero: 34, title: 20, kicker: 9, h3: 12, body: 10, data: 9, axis: 9, note: 10 } },
};

function grid(f) {
  const cw = (f.W - f.ml - f.mr - (f.cols - 1) * f.gut) / f.cols;
  return { ...f, cw, cwid: f.W - f.ml - f.mr, col: (i, n = 1) => ({ x: f.ml + i * (cw + f.gut), w: n * cw + (n - 1) * f.gut }) };
}

// ---------------------------------------------------------------- deck + gabarit de page
// Les polices de la charte sont-elles installées ? Recherche simple dans les dossiers de polices usuels (sinon : repli, avec un message).
function policesInstallees() {
  const fs = require('fs'), os = require('os'), path = require('path');
  const h = os.homedir();
  const dirs = [process.env.WINDIR && path.join(process.env.WINDIR, 'Fonts'), process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Microsoft', 'Windows', 'Fonts'),
    '/Library/Fonts', path.join(h, 'Library', 'Fonts'), '/System/Library/Fonts', path.join(h, '.fonts'), path.join(h, '.local', 'share', 'fonts'), '/usr/share/fonts', '/usr/local/share/fonts'];
  const trouve = (re, d, prof = 0) => { try { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (e.isDirectory()) { if (prof < 3 && trouve(re, path.join(d, e.name), prof + 1)) return true; } else if (re.test(e.name)) return true; } } catch (e) { /* dossier absent */ } return false; };
  const a = (re) => dirs.filter(Boolean).some((d) => trouve(re, d));
  return a(/sourceserif4|source.?serif.?4/i) && a(/ibmplexsans|ibm.?plex.?sans/i);
}

// Logo de l'utilisatrice : fichier logo.png (ou chemin donné). Cherché dans le dossier courant, puis dans le dossier de la skill. Aucun logo n'est fourni.
function trouverLogo(chemin) {
  const fs = require('fs'), path = require('path');
  const c = [chemin, process.env.SLIDE_LOGO, path.join(process.cwd(), 'logo.png'), path.join(__dirname, '..', 'logo.png')].filter(Boolean);
  return c.find((p) => { try { return fs.statSync(p).isFile(); } catch (e) { return false; } }) || null;
}

// theme : 'ciceria' (défaut) ou 'encre' ; fonts : 'auto' (défaut : charte si installée, sinon repli), 'ciceria', 'repli', ou une autre clé de FONTS.
function deck({ theme, palette, fonts = process.env.SLIDE_FONTS || 'auto', format = '16x9', logo } = {}) {
  theme = theme || palette || 'ciceria';
  if (fonts === 'auto') {
    fonts = theme === 'ciceria' ? (policesInstallees() ? 'ciceria' : 'repli') : 'repli';
    if (fonts === 'repli') console.log('Polices de la charte non trouvées : repli sur Georgia et Arial (installer Source Serif 4 et IBM Plex Sans depuis Google Fonts pour la charte complète).');
  }
  const pres = new PptxGenJS();
  const f = FORMATS[format];
  pres.defineLayout({ name: format, width: f.W, height: f.H });
  pres.layout = format;
  const ctx = { pres, T: THEMES[theme], Fn: FONTS[fonts], G: grid(f), S: f.size, SH: pres.ShapeType, CH: pres.ChartType, page: 0, logo: trouverLogo(logo) };
  ctx.slide = (o) => frame(ctx, o);
  ctx.save = (p) => pres.writeFile({ fileName: p });
  return ctx;
}

// "texte **mot-clé** texte" -> runs ; emph = options des passages entre **
function md(str, emph = {}, base = {}) {
  return String(str).split('**').map((t, i) => ({ text: t, options: i % 2 ? { ...base, ...emph } : { ...base } })).filter((r) => r.text !== '');
}

// repli : la police « semi » est Arial (la même que le corps), la graisse passe par bold. Limite : un libellé explicitement en police de corps dans txt() serait aussi mis en gras.
function gras(ctx, text, o) {
  const b = ctx.Fn.boldSemi; if (!b) return [text, o];
  const f = (x) => (x && (x.fontFace === ctx.Fn.semi || x.fontFace === ctx.Fn.title || x.fontFace === ctx.Fn.hero) ? { ...x, bold: true } : x);
  if (Array.isArray(text)) text = text.map((r) => (r && r.options ? { ...r, options: f(r.options) } : r));
  return [text, f(o)];
}
// typographie française : espace insécable avant ; : ? ! pour qu'aucun signe ne parte seul en début de ligne
const typo = (t) => (typeof t === 'string' ? t.replace(/ ([;:?!»])/g, ' $1').replace(/(«) /g, '$1 ') : t);
function txt(ctx, s, text, o = {}) {
  const { T, Fn, S } = ctx;
  text = Array.isArray(text) ? text.map((r) => (r && r.text != null ? { ...r, text: typo(r.text) } : r)) : typo(text);
  [text, o] = gras(ctx, text, o);
  s.addText(text, { fontFace: Fn.body, fontSize: S.body, color: T.ink, margin: 0, valign: 'top', isTextBox: true, fit: 'none', ...o });
}

function frame(ctx, o = {}) {
  const { pres, T, Fn, G, S } = ctx;
  const s = pres.addSlide();
  s.background = { color: T.bg };
  ctx.page += 1;
  const tw = o.titleW || G.cwid;
  if (o.kicker) txt(ctx, s, o.kicker, { x: G.ml, y: G.y.kicker, w: tw, h: 0.2, fontSize: S.kicker, fontFace: Fn.semi, color: T.accent, charSpacing: 0.5 });
  if (o.title) s.addText(md(o.title, { color: T.accent }), { x: G.ml, y: G.y.title, w: tw, h: G.y.titleH, fontFace: Fn.title, bold: !!Fn.boldSemi, fontSize: S.title, color: T.ink, margin: 0, valign: 'top', lineSpacingMultiple: 0.95, isTextBox: true, fit: 'none' });
  if (o.subtitle) txt(ctx, s, o.subtitle, { x: G.ml, y: G.y.sub, w: tw, h: 0.26, fontSize: S.body, color: T.n2 });
  if (ctx.logo && o.footer !== false && o.logo !== false) s.addImage({ path: ctx.logo, x: G.W - G.mr - 2.0, y: G.y.page - 0.12, w: 1.4, h: 0.34, sizing: { type: 'contain', w: 1.4, h: 0.34 }, altText: 'Logo' });
  if (o.footer !== false) footer(ctx, s, { ...o, footW: o.footW || Math.min(tw, ctx.logo ? G.cwid - 2.2 : tw) });
  if (o.page !== false && o.footer !== false) pageNo(ctx, s);
  return s;
}
// Pied : note + source. frame() l'appelle ; footer:false pour le poser en dernier (après une forme débordante)
function footer(ctx, s, o) {
  const { T, G, S } = ctx; const foot = [];
  if (o.note) foot.push({ text: 'Note : ' + o.note, options: { breakLine: true } });
  foot.push({ text: 'Source : ' + (o.source || 'analyse interne') });
  txt(ctx, s, foot, { x: G.ml, y: G.y.source, w: o.footW || G.cwid, h: 0.34, fontSize: S.note, color: T.n2, valign: 'bottom' });
}
// N° de page (à rappeler après un panneau en fond perdu, couleur claire)
function pageNo(ctx, s, color) { const { G, S, T } = ctx; txt(ctx, s, String(ctx.page), { x: G.W - G.mr - 0.5, y: G.y.page, w: 0.5, h: 0.2, fontSize: S.note, color: color || T.n2, align: 'right' }); }

// ---------------------------------------------------------------- primitives
function rect(ctx, s, x, y, w, h, o = {}) {
  const shape = o.radius != null ? ctx.SH.roundRect : ctx.SH.rect;
  const opt = { x, y, w, h, fill: o.fill ? { color: o.fill, transparency: o.transp || 0 } : { type: 'none' },
    line: o.line ? { color: o.line, width: o.lw || 0.75, dashType: o.dash || 'solid' } : { type: 'none' } };
  if (o.radius != null) opt.rectRadius = o.radius;
  if (o.rotate) opt.rotate = o.rotate;
  s.addShape(shape, opt);
}
function line(ctx, s, x1, y1, x2, y2, o = {}) {
  const opt = { x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.max(Math.abs(x2 - x1), 0.0001), h: Math.max(Math.abs(y2 - y1), 0.0001),
    line: { color: o.color || ctx.T.n3, width: o.w || 0.75, dashType: o.dash || 'solid' } };
  if ((x2 - x1) * (y2 - y1) < 0) opt.flipV = true;
  // pptxgenjs trace de (x,y) vers (x+w,y+h) : on remet la flèche du bon côté
  const forward = x2 > x1 || (x2 === x1 && y2 > y1);
  if (o.end) opt.line[forward ? 'endArrowType' : 'beginArrowType'] = o.end;
  if (o.begin) opt.line[forward ? 'beginArrowType' : 'endArrowType'] = o.begin;
  s.addShape(ctx.SH.line, opt);
}
function ellipse(ctx, s, cx, cy, d, o = {}) {
  s.addShape(ctx.SH.ellipse, { x: cx - d / 2, y: cy - d / 2, w: d, h: d,
    fill: o.fill ? { color: o.fill } : { type: 'none' }, line: o.line ? { color: o.line, width: o.lw || 1 } : { type: 'none' } });
}
const textW = (str, pt) => String(str).length * pt * 0.0078 + 0.16; // largeur approx. d'un libellé (in)

// Pilule : fond plein ou contour, rayon max. Masque ce qu'elle chevauche (fond blanc par défaut).
function pill(ctx, s, { cx, cy, text, h = 0.28, size, style = 'outline', color, w }) {
  const { T, Fn, S } = ctx; const c = color || T.accent; size = size || S.data;
  w = w || textW(text, size) + 0.1;
  const fill = style === 'fill' ? c : T.bg;
  s.addShape(ctx.SH.roundRect, { x: cx - w / 2, y: cy - h / 2, w, h, rectRadius: h / 2, fill: { color: fill }, line: { color: c, width: 1 } });
  txt(ctx, s, text, { x: cx - w / 2, y: cy - h / 2, w, h, fontSize: size, fontFace: Fn.semi, color: style === 'fill' ? 'FFFFFF' : c, align: 'center', valign: 'middle' });
}

// ---------------------------------------------------------------- géométrie des graphiques
// layout = zone de tracé en fractions du cadre du graphique -> zone de tracé en pouces
const plotBox = (b, l) => ({ x: b.x + l.x * b.w, y: b.y + l.y * b.h, w: l.w * b.w, h: l.h * b.h });
const xAt = (P, n, i) => P.x + (i + 0.5) * P.w / n;                         // centre de la catégorie i
const yAt = (P, v, min, max) => P.y + P.h * (1 - (v - min) / (max - min));  // ordonnée de v
const xVal = (P, v, min, max) => P.x + P.w * (v - min) / (max - min);       // barres horizontales
const revBar = (a) => a.slice().reverse();                                  // barDir 'bar' : 1re catégorie en bas
const lum = (hex) => { const n = parseInt(hex, 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; };
const mix = (a, b, t) => { const p = (h) => [0, 8, 16].map((k) => (parseInt(h, 16) >> (16 - k)) & 255);
  const A = p(a), B = p(b); return A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join('').toUpperCase(); };

function baseChart(ctx, o) {
  const { T, Fn, S } = ctx;
  return { showLegend: false, valAxisHidden: true, valGridLine: { style: 'none' }, catGridLine: { style: 'none' },
    catAxisLabelFontFace: Fn.body, catAxisLabelFontSize: S.axis, catAxisLabelColor: T.n2, catAxisLineShow: true, catAxisLineColor: T.n3,
    catAxisMajorTickMark: 'none', valAxisMajorTickMark: 'none', dataLabelFontFace: Fn.body, dataLabelFontSize: S.data, dataLabelColor: T.ink, ...o };
}

// Histogramme natif. values: tableau ; colors: 1 couleur par barre. Rend la zone de tracé.
function bars(ctx, s, { box, labels, values, series, colors, max, min = 0, gap = 55, layout = { x: 0, y: 0.1, w: 1, h: 0.8 },
  showValue = true, fmt = '#,##0', catLabels = true, dir = 'col', stacked = false, valueColor, extra = {} }) {
  const data = series || [{ name: 'Valeur', labels, values }];
  s.addChart(ctx.CH.bar, data, baseChart(ctx, { x: box.x, y: box.y, w: box.w, h: box.h, barDir: dir, barGrouping: stacked ? 'stacked' : 'clustered',
    barGapWidthPct: gap, barOverlapPct: stacked ? 100 : 0, chartColors: colors, valAxisMinVal: min, valAxisMaxVal: max, catAxisHidden: !catLabels,
    showValue, dataLabelPosition: stacked ? 'ctr' : 'outEnd', dataLabelFormatCode: fmt, dataLabelColor: valueColor || ctx.T.ink, layout, ...extra }));
  return plotBox(box, layout);
}

// ---------------------------------------------------------------- forme « Analytique dense » (voir references/forme-dense.md)
// Pastille numérotée : relie un exhibit à son encadré par le même numéro.
function pastille(ctx, s, { cx, cy, n, d = 0.26, fill }) {
  const { T, Fn } = ctx;
  s.addShape(ctx.SH.ellipse, { x: cx - d / 2, y: cy - d / 2, w: d, h: d, fill: { color: fill || T.ink }, line: { color: T.bg, width: 1 } });
  txt(ctx, s, String(n), { x: cx - d / 2, y: cy - d / 2, w: d, h: d, fontSize: 10, fontFace: Fn.semi, color: 'FFFFFF', align: 'center', valign: 'middle' });
}
// Encadré : titre en semi-gras puis texte ; focus = fond accentLight et bord pointillé accent.
function encadre(ctx, s, { x, y, w, h, n, title, text, focus = false }) {
  const { T, Fn, S } = ctx;
  rect(ctx, s, x, y, w, h, focus ? { fill: T.accentLight, line: T.accent, dash: 'dash', lw: 1 } : { fill: T.n6 });
  if (n != null) pastille(ctx, s, { cx: x + 0.25, cy: y + 0.27, n, fill: T.n1 });
  const tx = x + (n != null ? 0.5 : 0.15);
  txt(ctx, s, [{ text: title, options: { fontFace: Fn.semi, breakLine: true, color: T.ink } }, { text, options: { color: T.n1 } }], { x: tx, y: y + 0.1, w: w - (tx - x) - 0.15, h: h - 0.2, fontSize: S.body, lineSpacingMultiple: 1.05 });
}
// Bandeau de conclusion : une seule phrase actionnable, libellé en semi-gras.
function bandeau(ctx, s, { y, h = 0.5, label = 'Conclusion', text }) {
  const { T, Fn, G, S } = ctx;
  rect(ctx, s, G.ml, y, G.cwid, h, { fill: T.accentLight });
  txt(ctx, s, [{ text: label + ' : ', options: { fontFace: Fn.semi, color: T.accent2 } }, { text, options: { color: T.ink } }], { x: G.ml + 0.2, y, w: G.cwid - 0.4, h, fontSize: S.body + 1, valign: 'middle' });
}

// ================================================================ MOVES
// Chaque move : (ctx, slide, options). Ordre de création = ordre des plans (arrière -> avant).

// gris-un-accent (+ variante dégradée temporelle) : toutes les barres en gris, une seule en accent
function grisUnAccent(ctx, s, { box, labels, values, accent = [values.length - 1], max, fmt = '#,##0', gradient = false, gap = 55, layout, catLabels = true }) {
  const { T } = ctx; const n = values.length;
  const colors = values.map((_, i) => accent.includes(i) ? T.accent : gradient ? mix(T.n5, T.n1, i / Math.max(1, n - 2)) : T.n3);
  const P = bars(ctx, s, { box, labels, values, colors, max, fmt, gap, layout, catLabels });
  return { P, n, colors, top: (i) => yAt(P, values[i], 0, max), x: (i) => xAt(P, n, i), bw: P.w / n / (1 + gap / 100) };
}

// fond-fantome : toutes les séries en gris clair, les séries clés par-dessus (2 graphiques natifs superposés)
function fondFantome(ctx, s, { box, labels, series, keys, colors = {}, min = 0, max, fmt = '0', layout = { x: 0.06, y: 0.04, w: 0.8, h: 0.86 }, axisFmt, majorUnit, endLabels = true }) {
  const { T, Fn, S } = ctx;
  const ghosts = series.filter((x) => !keys.includes(x.name)); const hi = series.filter((x) => keys.includes(x.name));
  const common = { x: box.x, y: box.y, w: box.w, h: box.h, valAxisMinVal: min, valAxisMaxVal: max, layout, lineDataSymbol: 'none' };
  s.addChart(ctx.CH.line, ghosts.map((g) => ({ ...g, labels })), baseChart(ctx, { ...common, chartColors: ghosts.map(() => T.n4), lineSize: 1.25,
    valAxisHidden: !axisFmt, valAxisLabelFormatCode: axisFmt, valAxisLabelFontSize: S.axis, valAxisLabelColor: T.n2, valAxisLineShow: false, valAxisMajorUnit: majorUnit }));
  s.addChart(ctx.CH.line, hi.map((g) => ({ ...g, labels })), baseChart(ctx, { ...common, chartColors: hi.map((h) => colors[h.name] || T.accent), lineSize: 2.5, catAxisHidden: true }));
  const P = plotBox(box, layout); const n = labels.length;
  if (endLabels) {
    const items = series.map((x) => ({ name: x.name, v: x.values[n - 1], key: keys.includes(x.name), y: yAt(P, x.values[n - 1], min, max) })).sort((a, b) => a.y - b.y);
    for (let i = 1; i < items.length; i++) items[i].y = Math.max(items[i].y, items[i - 1].y + 0.17);
    items.forEach((it) => txt(ctx, s, [{ text: it.name + '  ', options: { fontFace: it.key ? Fn.semi : Fn.body } }, { text: fmtNum(it.v, fmt) }],
      { x: xAt(P, n, n - 1) + 0.1, y: it.y - 0.08, w: 1.9, h: 0.17, fontSize: it.key ? S.data : S.axis, color: it.key ? (colors[it.name] || T.accent) : T.n3 }));
  }
  return { P, n, x: (i) => xAt(P, n, i), y: (v) => yAt(P, v, min, max) };
}
function fmtNum(v, f) { if (f === '0.0%') return v.toFixed(1).replace('.', ',') + ' %'; if (f === '0.0') return v.toFixed(1).replace('.', ','); return String(Math.round(v)); }

// legende-dans-le-texte : premier(s) mot(s) dans la couleur de la série, reste en texte courant
function leadRuns(ctx, lead, rest, color) { return [{ text: lead, options: { color, fontFace: ctx.Fn.semi } }, { text: ' ' + rest, options: { color: ctx.T.n1 } }]; }

// kpi-dans-le-graphique : médaillon posé sur la zone de tracé, coupé par la ligne de base (fond perdu)
function medaillon(ctx, s, { cx, cy, d, value, label, fill, clipY, clipH = 1 }) {
  const { T, Fn } = ctx;
  s.addShape(ctx.SH.ellipse, { x: cx - d / 2, y: cy - d / 2, w: d, h: d, fill: { color: fill || T.accent }, line: { color: T.bg, width: 4.5 } });
  if (clipY != null) rect(ctx, s, cx - d / 2 - 0.1, clipY, d + 0.2, clipH, { fill: T.bg }); // masque sous la ligne de base
  const top = cy - d / 2; const vis = (clipY != null ? clipY : cy + d / 2) - top;
  txt(ctx, s, label, { x: cx - d / 2, y: top + vis * 0.22, w: d, h: 0.18, fontSize: 9, fontFace: Fn.semi, color: 'FFFFFF', align: 'center', charSpacing: 0.3 });
  txt(ctx, s, value, { x: cx - d / 2, y: top + vis * 0.22 + 0.2, w: d, h: 0.5, fontSize: Math.min(30, d * 22), fontFace: Fn.semi, color: 'FFFFFF', align: 'center' });
}

// panneau-conclusion : panneau sombre à droite en fond perdu (8/4 = 65/35), blocs chiffre + phrase
function panneauConclusion(ctx, s, { fromCol = 8, blocks, kicker, yTop, ySpan }) {
  const { T, Fn, G, S } = ctx;
  const x0 = G.col(fromCol).x - G.gut / 2; const w = G.W - x0; const ix = x0 + 0.45; const iw = w - 0.45 - G.mr;
  rect(ctx, s, x0, 0, w, G.H, { fill: T.panel });
  let y = yTop || G.y.top; const span = ySpan || (G.y.bottom - y);
  if (kicker) { txt(ctx, s, kicker, { x: ix, y: G.y.kicker, w: iw, h: 0.2, fontSize: S.kicker, fontFace: Fn.semi, color: T.panelAccent, charSpacing: 0.5 }); }
  const bh = span / blocks.length;
  blocks.forEach((b, i) => {
    const by = y + i * bh;
    if (i > 0) rect(ctx, s, ix, by - 0.02, 0.6, 0.04, { fill: T.panelAccent });
    if (b.pre) txt(ctx, s, b.pre, { x: ix, y: by + 0.18, w: iw, h: 0.3, fontSize: S.body, color: T.panelText });
    txt(ctx, s, b.big, { x: ix, y: by + (b.pre ? 0.46 : 0.2), w: iw, h: 0.75, fontSize: S.hero, fontFace: Fn.hero, color: T.panelAccent });
    txt(ctx, s, md(b.text, { fontFace: Fn.semi }), { x: ix, y: by + (b.pre ? 1.2 : 0.95), w: iw, h: bh - 1.2, fontSize: S.body + 1, color: T.panelText, lineSpacingMultiple: 1.1 });
  });
  return { x: x0 };
}
// Variante : verdict en pied (phrase-chiffre centrée sous le graphique)
function verdict(ctx, s, { text, y, x, w }) {
  const { T, Fn, G } = ctx;
  txt(ctx, s, md(text, { color: T.accent }), { x: x || G.ml, y: y || G.y.bottom - 0.4, w: w || G.cwid, h: 0.4, fontSize: ctx.S.body + 3, fontFace: Fn.semi, color: T.ink, align: 'center', valign: 'middle' });
}

// ligne-de-reference : horizontale (médiane, prix non affecté) ou verticale (offre), étiquette dans une zone vide
// Étiquette de donnée traversée par une ligne de référence : poser APRÈS la ligne un masque couleur de fond et réécrire l'étiquette dessus.
function etiquetteDegagee(ctx, s, { x, y, text, w = 0.7, h = 0.2, color }) {
  const { T, S } = ctx;
  s.addShape('rect', { x: x - w / 2, y, w, h, fill: { color: T.bg }, line: { color: T.bg, width: 0 } });
  txt(ctx, s, text, { x: x - w / 2, y, w, h, fontSize: S.data, color: color || T.ink, align: 'center', valign: 'middle' });
}
function ligneReference(ctx, s, { P, v, min = 0, max, label, color, vertical = false, labelPos = 'right', labelX, below = false, dash = 'dash', y0, y1 }) {
  const { T, Fn, S } = ctx; const c = color || T.accent;
  if (!vertical) {
    const y = yAt(P, v, min, max);
    line(ctx, s, P.x, y, P.x + P.w, y, { color: c, w: 1.25, dash });
    const ls = String(label).split('\n'); const lw = Math.max(...ls.map((t) => textW(t, S.data))); const lh = 0.17 * ls.length + 0.03;
    txt(ctx, s, label, { x: labelX != null ? labelX : labelPos === 'right' ? P.x + P.w - lw : P.x + 0.05, y: below ? y + 0.05 : y - 0.04 - lh, w: lw, h: lh, fontSize: S.data, fontFace: Fn.semi, color: c, align: labelPos === 'right' ? 'right' : 'left' });
    return y;
  }
  const x = xVal(P, v, min, max); const ya = y0 != null ? y0 : P.y; const yb = y1 != null ? y1 : P.y + P.h;
  line(ctx, s, x, ya, x, yb, { color: c, w: 1.5, dash });
  txt(ctx, s, label, { x: x - 1.2, y: yb + 0.04, w: 2.4, h: 0.2, fontSize: S.data, fontFace: Fn.semi, color: c, align: 'center' });
  return x;
}

// zone-focus : bande pâle DERRIÈRE un groupe (à créer avant le graphique) ou cadre pointillé DEVANT
function zoneFocus(ctx, s, { x, y, w, h, label, mode = 'band', color }) {
  const { T, Fn, S } = ctx;
  if (mode === 'band') rect(ctx, s, x, y, w, h, { fill: color || T.n6, line: T.n4, dash: 'dash', lw: 0.75 });
  else rect(ctx, s, x, y, w, h, { line: color || T.accent, dash: 'dash', lw: 1 });
  if (label) txt(ctx, s, label, { x: x + 0.06, y: y + 0.06, w: w - 0.12, h: 0.36, fontSize: S.axis, fontFace: Fn.semi, color: mode === 'band' ? T.n1 : (color || T.accent), align: 'center' });
}

// table-au-pas : table sous l'axe, colonnes au pas exact des barres, libellés de rangée à gauche
function tableAuPas(ctx, s, { P, n, y, rows, rowH = 0.2, labelW = 1.0, size }) {
  const { T, Fn, S } = ctx; size = size || S.axis;
  const body = rows.map((r) => r.cells.map((c) => ({ text: String(c), options: { bold: !!r.bold, color: r.color || T.n1 } })));
  s.addTable(body, { x: P.x, y, w: P.w, colW: Array(n).fill(P.w / n), rowH, fontFace: Fn.body, fontSize: size, align: 'center', valign: 'middle', margin: 1,
    border: { type: 'solid', pt: 0.5, color: T.n5 } });
  rows.forEach((r, i) => txt(ctx, s, r.label, { x: P.x - labelW - 0.1, y: y + i * rowH, w: labelW, h: rowH, fontSize: size, fontFace: Fn.semi, color: T.n2, align: 'right', valign: 'middle' }));
}

// pastilles-au-pas : rangée de pastilles (total, ratio) alignées sur les colonnes
function pastillesAuPas(ctx, s, { P, n, y, values, filled = true, label, w = 0.52, h = 0.24, idx, color }) {
  const { T, Fn, S } = ctx; const c = color || T.ink;
  (idx || values.map((_, i) => i)).forEach((i, k) => pill(ctx, s, { cx: xAt(P, n, i), cy: y, text: values[k], h, w, style: filled ? 'fill' : 'outline', color: c, size: S.axis }));
  if (label) txt(ctx, s, label, { x: P.x - 1.6, y: y - h / 2, w: 1.5, h, fontSize: S.axis, fontFace: Fn.semi, color: T.n2, align: 'right', valign: 'middle' });
}

// mesure-dessinee : accolade en équerre entre deux points + pilule (écart, TCAM), ou cote horizontale
function accolade(ctx, s, { x1, y1, x2, y2, y, text, color, style = 'fill' }) {
  const c = color || ctx.T.ink;
  line(ctx, s, x1, y1, x1, y, { color: c, w: 1 });
  line(ctx, s, x1, y, x2, y, { color: c, w: 1 });
  line(ctx, s, x2, y, x2, y2, { color: c, w: 1, end: 'triangle' });
  pill(ctx, s, { cx: (x1 + x2) / 2, cy: y, text, style, color: c });
}
function cote(ctx, s, { x1, x2, y, text, color }) {
  const c = color || ctx.T.ink;
  line(ctx, s, x1, y, x2, y, { color: c, w: 1, end: 'triangle', begin: 'triangle' });
  pill(ctx, s, { cx: (x1 + x2) / 2, cy: y, text, style: 'fill', color: c });
}

// rangee-unite : cascade horizontale native + commentaire sur la même rangée, filets traversants
function rangeeUnite(ctx, s, { y0, y1, rows, labelW = 2.0, barW = 4.3, unit = '', coteText }) {
  const { T, Fn, G, S } = ctx; const n = rows.length; const rh = (y1 - y0) / n;
  const xL = G.ml, xB = G.ml + labelW + 0.15, xC = xB + barW + 0.35, wC = G.W - G.mr - xC;
  // niveaux
  let cum = 0; const geo = rows.map((r) => { let a, b; if (r.kind === 'total') { a = 0; b = r.v; cum = r.v; } else { a = cum; b = cum + r.v; cum = b; } return { lo: Math.min(a, b), hi: Math.max(a, b) }; });
  const max = Math.max(...geo.map((g) => g.hi)) * 1.1;
  for (let i = 0; i <= n; i++) line(ctx, s, G.ml, y0 + i * rh, G.W - G.mr, y0 + i * rh, { color: T.n5, w: 0.5 });
  // graphique natif : série de base invisible + une série par rangée (couleur propre)
  const labels = revBar(rows.map((r) => r.label));
  const series = [{ name: 'base', labels, values: revBar(geo.map((g) => g.lo)) }].concat(rows.map((r, k) => ({ name: r.label, labels, values: revBar(geo.map((g, i) => (i === k ? g.hi - g.lo : 0))) })));
  const colors = [T.bg].concat(rows.map((r) => r.color || (r.kind === 'total' ? T.ink : T.n3)));
  const box = { x: xB, y: y0, w: barW, h: y1 - y0 };
  const P = bars(ctx, s, { box, series, colors, max, dir: 'bar', stacked: true, gap: 70, showValue: false, catLabels: false, layout: { x: 0, y: 0, w: 1, h: 1 } });
  rows.forEach((r, i) => {
    const cy = y0 + (i + 0.5) * rh; const g = geo[i];
    txt(ctx, s, r.label, { x: xL, y: cy - 0.15, w: labelW, h: 0.3, fontSize: S.body, fontFace: r.kind === 'total' ? Fn.semi : Fn.body, color: T.ink, valign: 'middle' });
    const xe = xVal(P, g.hi, 0, max); const v = r.kind === 'total' ? fmtThousands(r.v) : (r.v > 0 ? '+' : '−') + fmtThousands(Math.abs(r.v));
    txt(ctx, s, v, { x: xe + 0.06, y: cy - 0.1, w: 0.8, h: 0.2, fontSize: S.data, fontFace: r.kind === 'total' ? Fn.semi : Fn.body, color: T.ink, valign: 'middle' });
    if (r.comment) txt(ctx, s, r.comment, { x: xC, y: y0 + i * rh + 0.08, w: wC, h: rh - 0.12, fontSize: S.body - 0.5, color: T.n1, valign: 'middle', lineSpacingMultiple: 1.05 });
  });
  if (coteText) { const a = xVal(P, geo[0].hi, 0, max), b = xVal(P, geo[n - 1].hi, 0, max); const yc = y1 + 0.2;
    line(ctx, s, a, y0 + 0.5 * rh, a, yc, { color: T.n3, w: 0.75, dash: 'sysDot' }); cote(ctx, s, { x1: a, x2: b, y: yc, text: coteText, color: T.accent }); }
  return { P, max, rh };
}
function fmtThousands(v) { return Math.round(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u202F'); }

// mise-entre-parentheses : bracket rotaté « pour référence » le long de rangées
function bracket(ctx, s, { x, y, w = 0.24, h, text }) {
  const { T, Fn, S } = ctx;
  rect(ctx, s, x, y, w, h, { fill: T.n5 });
  s.addText(text, { x: x + w / 2 - h / 2, y: y + h / 2 - w / 2, w: h, h: w, rotate: 270, fontFace: Fn.semi, fontSize: S.axis, color: T.n1, align: 'center', valign: 'middle', margin: 0 });
}

// small-multiples (axe X partagé, frontière réel/plan, commentaire par rangée)
function smallMultiples(ctx, s, { years, split, rows, y0 = ctx.G.y.top, y1 = ctx.G.y.bottom, labelW = 1.35, chartW = 6.9, heads = ['Réalisé', 'Plan', 'Lecture'] }) {
  const { T, Fn, G, S } = ctx; const n = years.length;
  const xL = G.ml, xC = G.ml + labelW + 0.15, xR = xC + chartW + 0.3, wR = G.W - G.mr - xR;
  const P0 = { x: xC, w: chartW }; const colW = chartW / n; const xs = (i) => xC + (i + 0.5) * colW;
  // bandeaux de période (couleur = couleur des barres) + en-tête lecture
  rect(ctx, s, xC, y0, split * colW - 0.03, 0.26, { fill: T.actual });
  rect(ctx, s, xC + split * colW + 0.03, y0, (n - split) * colW - 0.03, 0.26, { fill: T.plan });
  rect(ctx, s, xR, y0, wR, 0.26, { fill: T.panel });
  [[xC, split * colW, heads[0]], [xC + split * colW, (n - split) * colW, heads[1]], [xR, wR, heads[2]]].forEach(([x, w, t]) =>
    txt(ctx, s, t, { x, y: y0, w, h: 0.26, fontSize: S.axis, fontFace: Fn.semi, color: 'FFFFFF', align: 'center', valign: 'middle' }));
  years.forEach((yv, i) => txt(ctx, s, yv, { x: xs(i) - colW / 2, y: y0 + 0.32, w: colW, h: 0.2, fontSize: S.axis, fontFace: Fn.semi, color: T.n1, align: 'center' }));
  const top = y0 + 0.6; const rh = (y1 - top) / rows.length; const out = [];
  rows.forEach((r, k) => {
    const ry = top + k * rh;
    line(ctx, s, G.ml, ry, G.W - G.mr, ry, { color: T.n5, w: 0.5 });
    rect(ctx, s, xL, ry + 0.12, labelW, rh - 0.24, { fill: T.panel });
    txt(ctx, s, r.label, { x: xL + 0.08, y: ry + 0.12, w: labelW - 0.16, h: rh - 0.24, fontSize: S.axis + 1, fontFace: Fn.semi, color: 'FFFFFF', align: 'center', valign: 'middle' });
    if (r.ratios) r.ratios.forEach((t, i) => txt(ctx, s, t, { x: xs(i) - colW / 2, y: ry + 0.08, w: colW, h: 0.18, fontSize: S.axis, italic: true, align: 'center',
      color: /^[−-]/.test(t) ? T.neg : T.n2 }));
    const box = { x: xC, y: ry + 0.26, w: chartW, h: rh - 0.32 };
    const P = bars(ctx, s, { box, labels: years, values: r.values, colors: r.values.map((_, i) => (i < split ? T.actual : T.plan)), max: r.max, fmt: r.fmt || '#,##0',
      catLabels: false, gap: 45, layout: { x: 0, y: 0.18, w: 1, h: 0.82 } });
    if (r.comment) txt(ctx, s, md(r.comment, { fontFace: Fn.semi, color: T.ink }), { x: xR, y: ry + 0.12, w: wR, h: rh - 0.2, fontSize: S.body - 1, color: T.n1, lineSpacingMultiple: 1.05 });
    out.push(P);
  });
  line(ctx, s, G.ml, y1, G.W - G.mr, y1, { color: T.n5, w: 0.5 });
  const xs0 = xC + split * colW; line(ctx, s, xs0, y0 - 0.05, xs0, y1, { color: T.ink, w: 1, dash: 'dash' }); // frontière réel / plan, au premier plan
  return { plots: out, xs, colW };
}

// bridge-a-groupes (+ 15 incertitude-dessinee via est:true -> hachures)
function bridgeGroupes(ctx, s, { box, steps, groups = [], max, layout = { x: 0, y: 0.16, w: 1, h: 0.72 }, fmt = (v) => fmtThousands(v) }) {
  const { T, Fn, S } = ctx; const n = steps.length;
  let cum = 0; const geo = steps.map((st) => { let lo, hi; if (st.kind === 'total') { lo = 0; hi = st.v; cum = st.v; } else { lo = Math.min(cum, cum + st.v); hi = Math.max(cum, cum + st.v); cum += st.v; } return { lo, hi, end: cum }; });
  const labels = steps.map((st) => st.label);
  const pick = (f) => geo.map((g, i) => (f(steps[i]) ? g.hi - g.lo : 0));
  const series = [{ name: 'base', labels, values: geo.map((g, i) => (steps[i].kind === 'total' ? 0 : g.lo)) },
    { name: 'Total', labels, values: pick((st) => st.kind === 'total') }, { name: 'Hausse', labels, values: pick((st) => st.kind !== 'total' && st.v > 0) },
    { name: 'Baisse', labels, values: pick((st) => st.kind !== 'total' && st.v < 0) }];
  const P = bars(ctx, s, { box, series, colors: [T.bg, T.ink, T.pos, T.neg], max, stacked: true, gap: 40, showValue: false, layout });
  const bw = P.w / n / 1.4;
  geo.forEach((g, i) => {
    const st = steps[i]; const x = xAt(P, n, i);
    if (i < n - 1) line(ctx, s, x + bw / 2, yAt(P, g.end, 0, max), xAt(P, n, i + 1) - bw / 2, yAt(P, g.end, 0, max), { color: T.n3, w: 0.5 });
    const label = st.kind === 'total' ? fmt(st.v) : (st.v > 0 ? '+' : '−') + fmt(Math.abs(st.v));
    txt(ctx, s, label, { x: x - 0.5, y: yAt(P, g.hi, 0, max) - 0.22, w: 1, h: 0.2, fontSize: S.data, fontFace: Fn.semi, align: 'center',
      color: st.kind === 'total' ? T.ink : st.v > 0 ? T.pos : T.neg });
    if (st.est) { // incertitude dessinée : 2 hachures blanches + contour pointillé
      const y1 = yAt(P, g.hi, 0, max), y2 = yAt(P, g.lo, 0, max);
      [0.3, 0.6].forEach((f) => line(ctx, s, x - bw / 2 + bw * f - 0.08, y2 - 0.03, x - bw / 2 + bw * f + 0.12, y1 + 0.03, { color: T.bg, w: 2 }));
      rect(ctx, s, x - bw / 2, y1, bw, y2 - y1, { line: st.v > 0 ? T.pos : T.neg, dash: 'sysDash', lw: 1 });
    }
  });
  groups.forEach((gp) => { // cadre pointillé autour du groupe + ellipse de synthèse dans le vide sous les marches
    const xa = xAt(P, n, gp.from) - bw / 2 - 0.1, xb = xAt(P, n, gp.to) + bw / 2 + 0.1;
    const ya = Math.min(...geo.slice(gp.from, gp.to + 1).map((g) => yAt(P, g.hi, 0, max))) - 0.32; const yb = Math.max(...geo.slice(gp.from, gp.to + 1).map((g) => yAt(P, g.lo, 0, max))) + 0.1;
    rect(ctx, s, xa, ya, xb - xa, yb - ya, { line: T.n2, dash: 'dash', lw: 0.75 });
    const ew = Math.max(1.35, xb - xa - 0.1); const ecy = yb + (P.y + P.h - yb) * 0.5;
    s.addShape(ctx.SH.ellipse, { x: (xa + xb) / 2 - ew / 2, y: ecy - 0.3, w: ew, h: 0.6, fill: { color: T.n6 }, line: { color: T.n4, width: 0.75 } });
    txt(ctx, s, [{ text: gp.label, options: { breakLine: true, color: T.n2 } }, { text: gp.value, options: { fontFace: Fn.semi, color: gp.color || T.ink, fontSize: S.body + 1 } }],
      { x: (xa + xb) / 2 - ew / 2, y: ecy - 0.26, w: ew, h: 0.52, fontSize: S.axis, align: 'center', valign: 'middle' });
  });
  return { P, geo, x: (i) => xAt(P, n, i), y: (v) => yAt(P, v, 0, max) };
}

// serie-annotee : événements lettrés sur une courbe + colonne narrative
function serieAnnotee(ctx, s, { box, labels, values, min, max, events, layout = { x: 0.07, y: 0.05, w: 0.9, h: 0.84 }, col, majorUnit }) {
  const { T, Fn, S } = ctx; const n = values.length;
  s.addChart(ctx.CH.line, [{ name: 'Cours', labels, values }], baseChart(ctx, { x: box.x, y: box.y, w: box.w, h: box.h, chartColors: [T.ink], lineSize: 1.75,
    lineDataSymbol: 'none', valAxisHidden: false, valAxisMinVal: min, valAxisMaxVal: max, valAxisMajorUnit: majorUnit, valAxisLabelFontSize: S.axis, valAxisLabelColor: T.n2,
    valAxisLineShow: false, valAxisLabelFormatCode: '0', layout }));
  const P = plotBox(box, layout);
  events.forEach((e) => {
    const x = xAt(P, n, e.i), y = yAt(P, values[e.i], min, max); const up = e.react > 0; const cy = Math.min(Math.max(y + (up ? -0.42 : 0.42), P.y + 0.14), P.y + P.h - 0.14);
    line(ctx, s, x, y, x, cy + (up ? 0.12 : -0.12), { color: T.n3, w: 0.75, dash: 'dash' });
    s.addShape(ctx.SH.diamond || 'diamond', { x: x - 0.045, y: y - 0.045, w: 0.09, h: 0.09, fill: { color: T.accent }, line: { type: 'none' } });
    ellipse(ctx, s, x, cy, 0.24, { fill: T.accentLight, line: T.accent, lw: 0.75 });
    txt(ctx, s, e.letter, { x: x - 0.12, y: cy - 0.12, w: 0.24, h: 0.24, fontSize: S.axis, fontFace: Fn.semi, color: T.accent, align: 'center', valign: 'middle' });
  });
  if (col) { // colonne « événements » : une ligne par lettre, pas constant ; % coloré seul
    const pitch = (col.y1 - col.y0) / events.length;
    events.forEach((e, k) => { const y = col.y0 + k * pitch;
      ellipse(ctx, s, col.x + 0.12, y + 0.14, 0.24, { fill: T.accentLight, line: T.accent, lw: 0.75 });
      txt(ctx, s, e.letter, { x: col.x, y: y + 0.02, w: 0.24, h: 0.24, fontSize: S.axis, fontFace: Fn.semi, color: T.accent, align: 'center', valign: 'middle' });
      txt(ctx, s, [{ text: e.date + '  ', options: { fontFace: Fn.semi, color: T.ink } }, { text: e.text + ' ', options: { color: T.n1 } },
        { text: (e.react > 0 ? '+' : '−') + Math.abs(e.react).toFixed(1).replace('.', ',') + ' %', options: { fontFace: Fn.semi, color: e.react > 0 ? T.pos : T.neg } }],
      { x: col.x + 0.36, y: y + 0.02, w: col.w - 0.36, h: pitch - 0.06, fontSize: S.axis + 1, lineSpacingMultiple: 1.05 }); });
  }
  return { P, n, x: (i) => xAt(P, n, i), y: (v) => yAt(P, v, min, max) };
}

// Football field natif (support du move mise-entre-parentheses + ligne-de-reference verticale)
function footballField(ctx, s, { rows, min, max, offer, x0, y0, y1, methodW = 2.35, barW = 5.3, heads }) {
  const { T, Fn, G, S } = ctx; const n = rows.length;
  const xM = x0 + 0.34, xB = xM + methodW + 0.55, xC = xB + barW + 0.55, wC = G.W - G.mr - xC;
  const hy = y0; const top = y0 + 0.42; const rh = (y1 - top) / n;
  [[xM, methodW, heads[0], 'left'], [xB, barW, heads[1], 'center'], [xC, wC, heads[2], 'left']].forEach(([x, w, t, a]) => {
    txt(ctx, s, t, { x, y: hy, w, h: 0.22, fontSize: S.axis + 1, fontFace: Fn.semi, color: T.n1, align: a });
    line(ctx, s, x, hy + 0.28, x + w, hy + 0.28, { color: T.ink, w: 0.75 }); });
  const labels = revBar(rows.map((r) => r.method));
  const series = [{ name: 'base', labels, values: revBar(rows.map((r) => r.lo - min)) },
    { name: 'Retenue', labels, values: revBar(rows.map((r) => (r.ref ? 0 : r.hi - r.lo))) }, { name: 'Référence', labels, values: revBar(rows.map((r) => (r.ref ? r.hi - r.lo : 0))) }];
  const P = bars(ctx, s, { box: { x: xB, y: top, w: barW, h: y1 - top }, series, colors: [T.bg, T.ink, T.n4], max: max - min, dir: 'bar', stacked: true, gap: 90,
    showValue: false, catLabels: false, layout: { x: 0, y: 0, w: 1, h: 1 } });
  rows.forEach((r, i) => {
    const y = top + i * rh, cy = y + rh / 2;
    if (i) line(ctx, s, xM, y, G.W - G.mr, y, { color: T.n5, w: 0.5 });
    rect(ctx, s, xM, y + 0.07, methodW, rh - 0.14, { fill: r.ref ? T.n5 : T.panel });
    txt(ctx, s, [{ text: r.method, options: { fontFace: Fn.semi, breakLine: !!r.sub } }].concat(r.sub ? [{ text: r.sub, options: { fontSize: S.axis } }] : []),
      { x: xM + 0.1, y: y + 0.07, w: methodW - 0.2, h: rh - 0.14, fontSize: S.axis + 1, color: r.ref ? T.n1 : 'FFFFFF', valign: 'middle' });
    const f = (v) => v.toFixed(2).replace('.', ',') + ' €';
    txt(ctx, s, f(r.lo), { x: xVal(P, r.lo - min, 0, max - min) - 0.85, y: cy - 0.1, w: 0.8, h: 0.2, fontSize: S.axis, color: T.n1, align: 'right', valign: 'middle' });
    txt(ctx, s, f(r.hi), { x: xVal(P, r.hi - min, 0, max - min) + 0.05, y: cy - 0.1, w: 0.8, h: 0.2, fontSize: S.axis, color: T.n1, valign: 'middle' });
    txt(ctx, s, md(r.comment, { fontFace: Fn.semi, color: T.ink }), { x: xC, y: y + 0.04, w: wC, h: rh - 0.08, fontSize: S.axis, color: T.n1, valign: 'middle' });
  });
  const refIdx = rows.map((r, i) => (r.ref ? i : -1)).filter((i) => i >= 0);
  if (refIdx.length) bracket(ctx, s, { x: x0, y: top + refIdx[0] * rh + 0.07, h: refIdx.length * rh - 0.14, text: 'Pour référence' });
  if (offer) ligneReference(ctx, s, { P, v: offer.v - min, min: 0, max: max - min, vertical: true, label: offer.label, y0: top - 0.05, y1: y1 + 0.02 });
  return { P, rh, top };
}

// cible-vers-realise : split 50/50, panneau sombre à droite, encoches qui « pointent » vers le réalisé
function cibleRealise(ctx, s, { rows, heads, y0 = ctx.G.y.top + 0.1, y1 = ctx.G.y.bottom - 0.1, panelY = 0 }) {
  const { T, Fn, G, S } = ctx; const xm = G.W / 2; const sep = mix(T.panel, 'FFFFFF', 0.18);
  rect(ctx, s, xm, panelY, G.W - xm, G.H - panelY, { fill: T.panel });
  txt(ctx, s, heads[0], { x: G.ml, y: y0, w: xm - G.ml - 0.4, h: 0.3, fontSize: 13, fontFace: Fn.semi, color: T.accent });
  txt(ctx, s, heads[1], { x: xm + 0.55, y: y0, w: xm - 1.1, h: 0.3, fontSize: 13, fontFace: Fn.semi, color: T.panelAccent });
  const top = y0 + 0.55; const pitch = (y1 - top) / rows.length;
  rows.forEach((r, i) => {
    const cy = top + (i + 0.5) * pitch;
    if (i) { line(ctx, s, G.ml, top + i * pitch, xm - 0.4, top + i * pitch, { color: T.n5, w: 0.5 }); line(ctx, s, xm + 0.55, top + i * pitch, G.W - G.mr, top + i * pitch, { color: sep, w: 0.5 }); }
    txt(ctx, s, [{ text: r.target, options: { fontFace: Fn.hero, fontSize: 34, color: T.ink } }, { text: '   ' + r.label, options: { fontSize: S.body, color: T.n1 } }],
      { x: G.ml, y: cy - 0.32, w: xm - G.ml - 0.5, h: 0.64, valign: 'middle' });
    s.addShape(ctx.SH.triangle, { x: xm - 0.2, y: cy - 0.2, w: 0.4, h: 0.4, rotate: 90, fill: { color: T.bg }, line: { type: 'none' } });
    txt(ctx, s, [{ text: r.done, options: { fontFace: Fn.title, fontSize: 38, color: r.ok ? T.panelAccent : 'FFFFFF' } }, { text: '   ' + r.label, options: { fontSize: S.body, color: 'D9D4CC' } }],
      { x: xm + 0.55, y: cy - 0.32, w: xm - 1.75, h: 0.64, valign: 'middle' });
    const kx = G.W - G.mr - 0.2; ellipse(ctx, s, kx, cy, 0.4, { line: r.ok ? T.panelAccent : '8A847C', lw: 1.25 });
    txt(ctx, s, r.ok ? '✓' : '✕', { x: kx - 0.2, y: cy - 0.2, w: 0.4, h: 0.4, fontSize: 14, fontFace: 'Segoe UI Symbol', color: r.ok ? T.panelAccent : 'B8B2A9', align: 'center', valign: 'middle' });
    if (r.gap) txt(ctx, s, r.gap, { x: xm + 0.55, y: cy + 0.3, w: 4.5, h: 0.2, fontSize: S.axis, italic: true, color: 'B8B2A9' });
  });
}

// equation-de-graphiques : N mini-graphiques + « + » + panneau-flèche résultat (voir fiche ; composé avec bars + rect)

// chiffres-heros : colonne de chiffres alignés à droite sur aplat pâle, filets entre, fond perdu
function chiffresHeros(ctx, s, { x, w, items, y0 = 0.5, y1 = ctx.G.H - 0.5, bleed = true }) {
  const { T, Fn, S, G } = ctx;
  if (bleed) rect(ctx, s, x, 0, G.W - x, G.H, { fill: T.n6 });
  const pitch = (y1 - y0) / items.length; const xr = G.W - G.mr;
  items.forEach((it, i) => {
    const y = y0 + i * pitch;
    if (i) line(ctx, s, x + 0.4, y, xr, y, { color: T.n4, w: 0.5 });
    txt(ctx, s, it.v, { x: x + 0.3, y: y + pitch * 0.14, w: xr - x - 0.3, h: pitch * 0.5, fontSize: 28, fontFace: Fn.hero, color: it.accent ? T.accent : T.ink, align: 'right', valign: 'middle' });
    txt(ctx, s, it.label, { x: x + 0.3, y: y + pitch * 0.62, w: xr - x - 0.3, h: pitch * 0.3, fontSize: S.axis, color: T.n2, align: 'right' });
  });
}

// donut-sobre : anneau fin natif, total au centre, étiquettes rangées sur deux x fixes + fils
function donutSobre(ctx, s, { cx, cy, d, labels, values, colors, total, totalLabel, hole = 80, labelDx = 0.45, fmt = (v) => v }) {
  const { T, Fn, S } = ctx; const sum = values.reduce((a, b) => a + b, 0); const r = d / 2;
  s.addChart(ctx.CH.doughnut, [{ name: 'Répartition', labels, values }], { x: cx - r, y: cy - r, w: d, h: d, holeSize: hole, chartColors: colors, showLegend: false,
    showValue: false, showPercent: false, showLabel: false, firstSliceAng: 0, dataBorder: { pt: 1.5, color: ctx.T.bg }, layout: { x: 0, y: 0, w: 1, h: 1 } });
  txt(ctx, s, total, { x: cx - r * 0.7, y: cy - 0.42, w: r * 1.4, h: 0.55, fontSize: 30, fontFace: Fn.hero, color: T.ink, align: 'center', valign: 'middle' });
  txt(ctx, s, totalLabel, { x: cx - r * 0.7, y: cy + 0.14, w: r * 1.4, h: 0.4, fontSize: S.axis, color: T.n2, align: 'center' });
  let acc = 0; const L = [], R = [];
  values.forEach((v, i) => { const a = ((acc + v / 2) / sum) * 2 * Math.PI; acc += v;
    const it = { i, a, px: cx + (r + 0.02) * Math.sin(a), py: cy - (r + 0.02) * Math.cos(a) }; it.y = it.py; (Math.sin(a) >= 0 ? R : L).push(it); });
  [[R, 1], [L, -1]].forEach(([arr, side]) => { arr.sort((a, b) => a.y - b.y); for (let k = 1; k < arr.length; k++) arr[k].y = Math.max(arr[k].y, arr[k - 1].y + 0.62);
    arr.forEach((it) => { const lx = cx + side * (r + labelDx);
      line(ctx, s, it.px, it.py, lx - side * 0.06, it.y, { color: T.n3, w: 0.5, dash: 'sysDot' });
      txt(ctx, s, [{ text: fmt(values[it.i]), options: { fontFace: Fn.hero, fontSize: 20, color: colors[it.i] === T.n4 ? T.n2 : colors[it.i], breakLine: true } }, { text: labels[it.i], options: { fontSize: S.axis, color: T.n1 } }],
        { x: side > 0 ? lx : lx - 1.8, y: it.y - 0.2, w: 1.8, h: 0.56, align: side > 0 ? 'left' : 'right' }); }); });
}

// entonnoir-encastre : trapèzes empilés + flèche translucide traversante + cartes à mini-graphiques qui mordent le bord
function entonnoir(ctx, s, { x0, w0, y0, y1, stages, arrowX, cardX }) {
  const { T, Fn, S, G } = ctx; const n = stages.length; const gap = 0.14; const h = (y1 - y0 - gap * (n - 1)) / n; const inset = 0.25 * Math.min(h, w0);
  stages.forEach((st, k) => { const x = x0 + k * inset, w = w0 - 2 * k * inset, y = y0 + k * (h + gap);
    s.addShape(ctx.SH.trapezoid, { x, y, w, h, flipV: true, fill: { color: T.seq[k] || T.seq[T.seq.length - 1] }, line: { type: 'none' } }); });
  s.addShape(ctx.SH.downArrow, { x: arrowX, y: y0 - 0.05, w: 0.8, h: y1 - y0 + 0.1, fill: { color: T.n6, transparency: 55 }, line: { type: 'none' } });
  stages.forEach((st, k) => { const x = x0 + k * inset, y = y0 + k * (h + gap); const light = lum(T.seq[k] || '999999') > 0.6;
    txt(ctx, s, [{ text: (k + 1) + '  ' + st.title, options: { fontFace: Fn.semi, fontSize: S.h3, breakLine: true } }, { text: st.sub, options: { fontSize: S.axis, italic: true } }],
      { x: x + 0.45, y: y + 0.12, w: arrowX - x - 0.55, h: h - 0.24, color: light ? T.ink : 'FFFFFF', valign: 'middle' });
    if (st.card) { const cw = G.W - G.mr - cardX, cy = y + 0.04, ch = h - 0.08; // carte blanche qui chevauche le bord droit du trapèze
      rect(ctx, s, cardX, cy, cw, ch, { fill: T.bg, line: T.n4, lw: 0.75, radius: 0.06 });
      txt(ctx, s, st.card.title, { x: cardX + 0.12, y: cy - 0.1, w: textW(st.card.title, 9) * 1.3 + 0.1, h: 0.2, fontSize: 9, fontFace: Fn.semi, color: T.seq[Math.min(k, 1)], charSpacing: 0.3, fill: { color: 'FFFFFF' }, align: 'center' });
      bars(ctx, s, { box: { x: cardX + 0.12, y: cy + 0.12, w: cw - 0.24, h: ch - 0.16 }, labels: st.card.labels, values: st.card.values, colors: st.card.values.map(() => T.seq[k] || T.n3),
        max: st.card.max, fmt: st.card.fmt || '0', gap: 70, layout: { x: 0, y: 0.22, w: 1, h: 0.44 }, extra: { dataLabelFontSize: 9, catAxisLabelFontSize: 9 } }); }
  });
}

module.exports = { etiquetteDegagee, typo, policesInstallees, pastille, encadre, bandeau, pageNo, footer, THEMES, FAMILIES, FONTS, FORMATS, deck, md, txt, rect, line, ellipse, pill, textW, plotBox, xAt, yAt, xVal, revBar, mix, lum, bars, baseChart, fmtThousands,
  grisUnAccent, fondFantome, leadRuns, medaillon, panneauConclusion, verdict, ligneReference, zoneFocus, tableAuPas, pastillesAuPas, accolade, cote,
  rangeeUnite, bracket, smallMultiples, bridgeGroupes, serieAnnotee, footballField, cibleRealise, chiffresHeros, donutSobre, entonnoir };
