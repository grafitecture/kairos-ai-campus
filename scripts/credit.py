"""Erzeugt site/assets/grafitecture-credit.js aus den Schnipseln des Grafitecture-Kits.
Aufruf nach einem Kit-Update: python3 scripts/credit.py"""
import json, re
from pathlib import Path

root = Path(__file__).resolve().parent.parent
kit = root / "kit" / "grafitecture-credit"
out = {}
for lang in ("de", "en"):
    html = (kit / f"snippet.{lang}.html").read_text(encoding="utf-8")
    out[lang] = re.sub(r"^\s*<!--.*?-->\s*", "", html, flags=re.S).strip()
js = ("/* Grafitecture-Feld · Kit v1.2 – erzeugt aus kit/grafitecture-credit/snippet.de.html und snippet.en.html.\n"
      "   Nicht von Hand ändern: Kit aktualisieren und mit scripts/credit.py neu erzeugen. */\n"
      "window.KAIROS_CREDIT = " + json.dumps(out, ensure_ascii=False, indent=2) + ";\n")
(root / "site" / "assets" / "grafitecture-credit.js").write_text(js, encoding="utf-8")
print("site/assets/grafitecture-credit.js aktualisiert")
