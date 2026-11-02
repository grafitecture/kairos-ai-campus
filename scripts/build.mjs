// Baut die Bilder für site/: lädt die Quellbilder aus scripts/images.json und erzeugt WebP in zwei Breiten.
// Läuft auf Vercel als Build-Schritt (dort gibt es Netzwerkzugriff). Bricht ab, wenn ein Bild fehlt,
// damit nie eine Seite ohne Bilder live geht; die vorherige Version bleibt dann online.
import { readFile, mkdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, "..", "site", "assets", "img");
const { images } = JSON.parse(await readFile(path.join(root, "images.json"), "utf8"));
const widths = [800, 1600];

async function download(url, tries = 3) {
  let last;
  for (let i = 1; i <= tries; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(60000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      last = err;
      await new Promise((r) => setTimeout(r, 1500 * i));
    }
  }
  throw new Error(`Download fehlgeschlagen: ${url} (${last && last.message})`);
}

await mkdir(outDir, { recursive: true });
const entries = Object.entries(images);
let failed = 0;
await Promise.all(entries.map(async ([name, url]) => {
  try {
    const buf = await download(url);
    const meta = await sharp(buf).metadata();
    for (const w of widths) {
      const file = path.join(outDir, `${name}-${w}.webp`);
      await sharp(buf).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(file);
      const { size } = await stat(file);
      console.log(`${name}-${w}.webp  ${meta.width}x${meta.height} -> ${Math.round(size / 1024)} KB`);
    }
  } catch (err) {
    failed++;
    console.error(`FEHLER ${name}: ${err.message}`);
  }
}));
if (failed) {
  console.error(`${failed} Bild(er) fehlen – Build abgebrochen.`);
  process.exit(1);
}
console.log(`${entries.length} Bilder fertig.`);
