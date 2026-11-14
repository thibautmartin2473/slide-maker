// Lecture et écriture minimales de ZIP (pptx, docx). Sans dépendance : zlib de Node.
import zlib from 'node:zlib';

export function lireZip(buf) {
  let eocd = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 65557); i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) throw new Error('archive ZIP invalide (fin de répertoire introuvable)');
  const n = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  const entrees = new Map();
  for (let i = 0; i < n; i++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) throw new Error('répertoire ZIP corrompu');
    const methode = buf.readUInt16LE(p + 10);
    const csize = buf.readUInt32LE(p + 20);
    const lnom = buf.readUInt16LE(p + 28);
    const lextra = buf.readUInt16LE(p + 30);
    const lcom = buf.readUInt16LE(p + 32);
    const off = buf.readUInt32LE(p + 42);
    const nom = buf.toString('utf8', p + 46, p + 46 + lnom);
    entrees.set(nom, { methode, csize, off });
    p += 46 + lnom + lextra + lcom;
  }
  return {
    noms: [...entrees.keys()],
    a: (nom) => entrees.has(nom),
    lire(nom) {
      const e = entrees.get(nom);
      if (!e) return null;
      const lnom = buf.readUInt16LE(e.off + 26);
      const lextra = buf.readUInt16LE(e.off + 28);
      const data = buf.subarray(e.off + 30 + lnom + lextra, e.off + 30 + lnom + lextra + e.csize);
      if (e.methode === 0) return Buffer.from(data);
      if (e.methode === 8) return zlib.inflateRawSync(data);
      throw new Error(`méthode de compression ${e.methode} non gérée (${nom})`);
    },
    texte(nom) { const b = this.lire(nom); return b ? b.toString('utf8') : null; },
  };
}

/** Écrit un ZIP sans compression. entrees : { 'chemin/fichier.xml': 'contenu' | Buffer }. */
