/*
 * KAIROS AI Campus: Passwortschutz für die Präsentationsseite (Vercel Routing Middleware, ohne Framework).
 * Aufbau wie bei ECOWERTH Campus.
 *
 * Jede Anfrage ohne gültiges Zugangs-Cookie bekommt die Login-Seite mit Status 401; Folien, Inhalte und
 * Bilder verlassen den Server erst nach der Anmeldung. Frei bleiben nur Schriften, Logo und Favicon
 * (assets/brand), die Dateien der Login-Seite (assets/public) und robots.txt.
 *
 * Passwort: Umgebungsvariable SITE_PASSWORD im Vercel-Projekt; es steht bewusst nicht im Code. Fehlt sie,
 * bleibt die Seite gesperrt. Groß-/Kleinschreibung und Leerzeichen am Rand spielen keine Rolle.
 * Ein geteiltes Passwort ist Sichtschutz, keine Benutzerverwaltung.
 *
 * Sprache der Login-Seite: Englisch, mit ?lang=de Deutsch (wie die Präsentation).
 * Abmelden: /abmelden oder /logout.
 */
import { next } from '@vercel/functions';

export const config = {
  runtime: 'nodejs',
  matcher: ['/((?!_vercel|assets/fonts/|assets/public/|assets/brand/|robots\\.txt).*)'],
};

const COOKIE = 'kairos_campus';
const BLEIBEN_SEKUNDEN = 60 * 60 * 24 * 30; // „Angemeldet bleiben“: 30 Tage

const SICHERHEIT = {
  'x-robots-tag': 'noindex, nofollow',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'DENY',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'content-security-policy':
    "default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; font-src 'self'; " +
    "connect-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'self'",
};

const TEXT = {
  en: {
    lang: 'en',
    title: 'KAIROS AI Campus · Sign in',
    kicker: 'KAIROS AI Campus',
    h1: 'The right moment for AI in your organisation',
    intro: 'This page is not public. Please enter the password.',
    wrong: 'That password is not correct. Please check the spelling.',
    label: 'Password',
    remember: 'Stay signed in',
    submit: 'Open presentation',
    foot: 'A workshop on Claude for KAIROS · Design: Grafitecture',
    other: 'Deutsch',
    otherHref: '?lang=de',
    otherLang: 'de',
  },
  de: {
    lang: 'de',
    title: 'KAIROS AI Campus · Anmeldung',
    kicker: 'KAIROS AI Campus',
    h1: 'Der richtige Moment für KI im Unternehmen',
    intro: 'Diese Seite ist nicht öffentlich. Bitte geben Sie das Passwort ein.',
    wrong: 'Das Passwort stimmt nicht. Bitte prüfen Sie die Schreibweise.',
    label: 'Passwort',
    remember: 'Angemeldet bleiben',
    submit: 'Präsentation öffnen',
    foot: 'Ein Workshop zu Claude für KAIROS · Gestaltung: Grafitecture',
    other: 'English',
    otherHref: '?lang=en',
    otherLang: 'en',
  },
};

function normalisiert(passwort) {
  return String(passwort || '').normalize('NFC').trim().toLowerCase();
}

/** Cookie-Wert: aus dem Passwort abgeleitet, damit es nicht im Klartext im Browser liegt. */
async function pruefwert(passwort) {
  const bytes = new TextEncoder().encode('kairos-ai-campus:v1:' + normalisiert(passwort));
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Vergleich ohne frühen Abbruch. */
function gleich(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function cookieLesen(header, name) {
  if (!header) return null;
  for (const teil of header.split(';')) {
    const idx = teil.indexOf('=');
    if (idx > 0 && teil.slice(0, idx).trim() === name) return teil.slice(idx + 1).trim();
  }
  return null;
}

function cookieSetzen(wert, bleiben) {
  return `${COOKIE}=${wert}; Path=/; HttpOnly; Secure; SameSite=Lax` + (bleiben ? `; Max-Age=${BLEIBEN_SEKUNDEN}` : '');
}

function antwort(body, status, extra = {}) {
  return new Response(body, {
    status,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', ...SICHERHEIT, ...extra },
  });
}

/* Die beiden Facetten des KAIROS-Zeichens, groß gezogen (Koordinaten aus dem Logo abgeleitet). */
const FACETTEN = `<svg class="g-facets" viewBox="0 0 122 116" aria-hidden="true" focusable="false">
  <polygon class="g-facet g-facet--upper" points="50,12 99,0 120,44 96,96 50,80"></polygon>
  <polygon class="g-facet g-facet--lower" points="0,96 50,80 96,96 77,116 22,116"></polygon>
</svg>`;

export function loginSeite(sprache, fehler) {
  const t = TEXT[sprache] || TEXT.en;
  const meldung = `<p class="g-msg${fehler ? ' is-error' : ''}" id="g-msg" role="status" aria-live="polite">${fehler ? t.wrong : t.intro}</p>`;
  return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${t.title}</title>
<link rel="preload" href="/assets/fonts/source-sans-3-vf.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/public/login.css?v=1">
<link rel="icon" type="image/png" href="/assets/brand/favicon-64.png">
</head>
<body>
<div id="gate" data-wrong="${t.wrong}" data-intro="${t.intro}" data-empty="${t.lang === 'de' ? 'Bitte geben Sie das Passwort ein.' : 'Please enter the password.'}" data-busy="${t.lang === 'de' ? 'Wird geprüft …' : 'Checking …'}" data-welcome="${t.lang === 'de' ? 'Willkommen' : 'Welcome'}" data-failed="${t.lang === 'de' ? 'Die Anmeldung hat nicht geklappt. Bitte laden Sie die Seite neu.' : 'Sign-in did not work. Please reload the page.'}">
  <header class="g-head">
    <span class="g-brand"><img class="g-logo" src="/assets/brand/kairos-logo.png" alt="KAIROS" width="412" height="122"><span class="g-campus">AI Campus</span></span>
    <a class="g-lang" href="${t.otherHref}" lang="${t.otherLang}" hreflang="${t.otherLang}">${t.other}</a>
  </header>
  <main class="g-stage">
    <div class="g-copy">
      <p class="g-kicker">${t.kicker}</p>
      <h1 class="g-title">${t.h1}</h1>
      <form class="g-form" id="g-form" method="post" action="" novalidate>
        ${meldung}
        <div class="g-group">
          <label class="g-label" for="g-pass">${t.label}</label>
          <input id="g-pass" name="passwort" type="password" autocomplete="current-password" autocapitalize="none"
                 autocorrect="off" spellcheck="false" aria-describedby="g-msg"${fehler ? ' aria-invalid="true"' : ''}>
        </div>
        <label class="g-remember" for="g-remember"><input type="checkbox" id="g-remember" name="bleiben" value="1"><span>${t.remember}</span></label>
        <button type="submit" class="g-submit" id="g-submit"><span id="g-submit-t">${t.submit}</span></button>
      </form>
    </div>
    <div class="g-art">${FACETTEN}</div>
  </main>
  <footer class="g-foot">${t.foot}</footer>
</div>
<script src="/assets/public/login.js?v=1" defer></script>
</body>
</html>`;
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const sprache = url.searchParams.get('lang') === 'de' ? 'de' : 'en';
  const passwort = normalisiert(process.env.SITE_PASSWORD);
  const erwartet = passwort ? await pruefwert(passwort) : null; // ohne Passwort: niemand kommt hinein
  const angemeldet = erwartet !== null && gleich(cookieLesen(request.headers.get('cookie'), COOKIE), erwartet);

  if (url.pathname === '/abmelden' || url.pathname === '/logout') {
    return new Response(null, {
      status: 303,
      headers: { location: '/' + (sprache === 'de' ? '?lang=de' : ''),
                 'set-cookie': `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
                 'cache-control': 'no-store' },
    });
  }

  if (request.method === 'POST') {
    const perSkript = request.headers.get('x-campus-login') === '1';
    if (angemeldet) {
      return perSkript ? new Response(null, { status: 204 })
        : new Response(null, { status: 303, headers: { location: url.pathname + url.search } });
    }
    let eingabe = '';
    let bleiben = false;
    try {
      const formular = await request.formData();
      eingabe = String(formular.get('passwort') || '');
      bleiben = formular.get('bleiben') === '1';
    } catch {
      eingabe = '';
    }
    if (erwartet !== null && normalisiert(eingabe) && gleich(await pruefwert(eingabe), erwartet)) {
      const cookie = cookieSetzen(erwartet, bleiben);
      return perSkript
        ? new Response(null, { status: 204, headers: { 'set-cookie': cookie, 'cache-control': 'no-store' } })
        : new Response(null, { status: 303, headers: { location: url.pathname + url.search, 'set-cookie': cookie,
                                                       'cache-control': 'no-store' } });
    }
    return perSkript
      ? new Response('{"ok":false}', { status: 401, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } })
      : antwort(loginSeite(sprache, true), 401);
  }

  if (angemeldet) return next();
  return antwort(loginSeite(sprache, false), 401);
}
