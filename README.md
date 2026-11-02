# KAIROS AI Campus

Zweisprachige Präsentationsseite (Englisch/Deutsch) für den Workshop „Claude verstehen und sicher nutzen“. Gestaltung nach [kairos-mannheim.de](https://kairos-mannheim.de), Umsetzung: Grafitecture.

Inhaltliche Grundlage ist das Statement of Work „Claude Platform Training, Governance and Safe Usage Workshop“ (Agenda, Erfolgskriterien, zehn Pflichtfragen). Faktenstand: 2. November 2026.

## Aufbau

| Pfad | Was |
|---|---|
| `site/index.html` | Seitengerüst: Kopfzeile, Folien, Feld von Jens Sattler, Vertiefungen, Übersicht |
| `site/assets/content-base.js` | Oberflächentexte und Begriffserklärungen (Glossar, DE/EN) |
| `site/assets/content-slides.js` | Alle 37 Folien mit Texten von Jens Sattler (DE/EN) und Quellen |
| `site/assets/content-deep.js` | Vertiefungen mit technischen Details (DE/EN) |
| `site/assets/app.js` | Darstellung, Navigation, Sprache, Begriffe, Übung |
| `site/assets/site.css` | Gestaltung |
| `site/assets/brand/` | KAIROS-Logo ohne Claim, Favicon |
| `site/assets/fonts/` | Source Sans 3 und Source Serif 4 (SIL Open Font License) |
| `scripts/images.json` | Quellbilder (KI-generiert mit Higgsfield) |
| `scripts/build.mjs` | Lädt die Bilder beim Build und erzeugt WebP in 800 und 1600 px |
| `kit/grafitecture-credit/` | Grafitecture-Feld (Kit v1.2), steht auf der letzten Folie; CSS als letzter Abschnitt in `site.css`, Schnipsel DE/EN in `site/assets/grafitecture-credit.js` (erzeugt mit `python3 scripts/credit.py`) |

## Inhalte ändern

- **Text einer Folie:** in `content-slides.js` die Folie über ihre `id` suchen, `de` und `en` anpassen.
- **Aussage von Jens Sattler:** Feld `jens` der jeweiligen Folie.
- **Begriff mit Erklärung:** im Text `{{id}}` oder `{{id|eigener Text}}` schreiben, die Erklärung steht in `content-base.js` unter `glossary`.
- **Vertiefung:** in `content-deep.js`, auf der Folie mit `deep: "id"` verknüpft.
- **Bild austauschen:** URL in `scripts/images.json` ersetzen (Name bleibt gleich). Für ein echtes Foto von Jens Sattler die Einträge `jens-portrait` (quadratisch) und `jens-speech` (Hochformat 4:5) ersetzen.

## Bedienung

Die Seite öffnet immer auf Englisch; Deutsch über den Umschalter oder einen Link mit `?lang=de`. Pfeiltasten oder Bild-auf/ab blättern, `O` Übersicht, `F` Vollbild, `D`/`E` Sprache. Direktlinks: `/?lang=de#k4-wege`. Auf schmalen Bildschirmen wird das Feld von Jens Sattler unten angedockt.

## Webseite

Vercel-Projekt `kairos-ai-campus` im Team Grafitecture, verbunden mit diesem Repo. Jeder Push auf `main` veröffentlicht neu. Der Build (`npm run build`) lädt die Bilder und schreibt sie nach `site/assets/img/` (nicht im Repo). Fehlt ein Bild, bricht der Build ab und die vorherige Version bleibt online. Die Seite ist von Suchmaschinen ausgeschlossen und lädt im Browser nichts von fremden Servern.

## Hinweise

- Alle Personenbilder sind KI-generiert. Die Bilder von Jens Sattler sind Platzhalter nach einem Referenzfoto.
- Kundenbeispiele beruhen auf Angaben der Unternehmen (veröffentlicht von Anthropic bzw. Allianz).
- Angaben zu Regionen, Verträgen und Produkten ändern sich. Vor Entscheidungen die verlinkten Quellen prüfen. Keine Rechtsberatung.
