// Validates the extension manifest and the theme file: parseable JSON, required fields, hex colours.
import fs from "node:fs";

const files = ["package.json", "themes/phosphor-color-theme.json"];
const data = Object.fromEntries(files.map((f) => [f, JSON.parse(fs.readFileSync(f, "utf8"))]));

const pkg = data["package.json"];
const themes = pkg.contributes?.themes ?? [];
if (!themes.length) throw new Error("package.json: contributes.themes is empty");
for (const t of themes) {
  if (!fs.existsSync(t.path)) throw new Error(`theme file missing: ${t.path}`);
}

const theme = data["themes/phosphor-color-theme.json"];
const hex = /^#([0-9a-f]{6}|[0-9a-f]{8})$/i;
let bad = 0;
for (const [k, v] of Object.entries(theme.colors ?? {})) {
  if (!hex.test(v)) {
    console.error(`bad colour ${k}: ${v}`);
    bad++;
  }
}
for (const [k, v] of Object.entries(theme.semanticTokenColors ?? {})) {
  if (typeof v === "string" && !hex.test(v)) {
    console.error(`bad semantic colour ${k}: ${v}`);
    bad++;
  }
}
if (bad) process.exit(1);
console.log(`ok: ${Object.keys(theme.colors).length} workbench colours, ${theme.tokenColors.length} token rules`);
