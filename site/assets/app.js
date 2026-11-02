/* KAIROS AI Campus – Präsentationslogik
   Inhalte: assets/content.js (window.KAIROS). Diese Datei rendert Folien, Sprache, Begriffe, Vertiefungen. */
(function () {
  "use strict";

  var K = window.KAIROS;
  var deck = document.getElementById("deck");
  var voice = document.querySelector(".voice");
  var quote = voice.querySelector(".voice__quote");
  var quoteP = quote.querySelector("p");
  var meta = voice.querySelector(".voice__meta");
  var count = voice.querySelector(".voice__count");
  var chapterLabel = document.querySelector(".topbar__chapter");
  var progress = document.querySelector(".progress__bar");
  var tip = document.getElementById("tip");
  var deepDialog = document.getElementById("deep");
  var overviewDialog = document.getElementById("overview");

  var lang = "en";
  var current = -1;
  var sections = [];

  /* ---------- Hilfen ---------- */
  function ui(key) { return (K.ui[lang] && K.ui[lang][key]) || K.ui.de[key] || ""; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* {{id}} oder {{id|Text}} wird zu einem erklärten Begriff */
  function rich(s) {
    if (s == null) return "";
    return String(s).replace(/\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}/g, function (m, id, text) {
      var g = K.glossary[id];
      if (!g) return text || id;
      var label = text || g[lang][0];
      return '<span class="term" tabindex="0" role="term" data-term="' + id + '">' + label + "</span>";
    });
  }
  function L(obj) { return obj ? (obj[lang] != null ? obj[lang] : obj.de) : ""; }

  function pic(name, alt, extra) {
    if (!name) return "";
    var base = "assets/img/" + name;
    return '<figure class="pic ' + (extra || "") + '"><img class="pic__img" src="' + base + '-1600.webp" srcset="' + base + "-800.webp 800w, " + base +
      '-1600.webp 1600w" sizes="(max-width: 960px) 92vw, 38vw" alt="' + esc(alt || "") + '" loading="lazy" decoding="async" width="1600" height="1200"></figure>';
  }
  function deepBtn(id) {
    if (!id || !K.deep[id]) return "";
    return '<button type="button" class="deep-btn" data-deep="' + id + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
      esc(ui("deepOpen")) + ": " + esc(K.deep[id][lang].title) + "</button>";
  }
  function head(c) {
    return (c.kicker ? '<p class="kicker">' + rich(c.kicker) + "</p>" : "") +
      '<h2 class="h2">' + rich(c.h) + "</h2>" +
      (c.lead ? '<p class="lead">' + rich(c.lead) + "</p>" : "");
  }
  function source(c) { return c.source ? '<p class="source">' + c.source + "</p>" : ""; }

  /* ---------- Folientypen ---------- */
  var R = {
    prolog: function (c, s) {
      return '<div class="prolog">' +
        '<figure class="prolog__portrait"><span class="prolog__img"><img src="assets/img/' + s.img + '-800.webp" alt="' + esc(c.alt) + '" width="800" height="1000"></span>' +
        "<figcaption><strong>Jens Sattler</strong>" + rich(c.caption) + "</figcaption></figure>" +
        '<div><p class="prolog__label">' + rich(c.label) + '</p><div class="speech">' +
        c.speech.map(function (p) { return "<p>" + rich(p) + "</p>"; }).join("") + "</div>" +
        '<a class="begin" href="#' + K.slides[1].id + '">' + esc(c.begin) +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg></a></div></div>';
    },
    title: function (c, s) {
      return '<div class="split"><div><p class="kicker">' + rich(c.kicker) + '</p><h1 class="h1">' + rich(c.h) + '</h1><p class="lead">' + rich(c.lead) + "</p>" +
        '<p class="meta-row">' + c.meta.map(function (m) { return "<span>" + rich(m) + "</span>"; }).join("") + "</p></div>" +
        pic(s.img, L(s.alt), "title-art") + "</div>";
    },
    agenda: function (c) {
      var items = c.items.map(function (it) {
        return '<li><span class="num">' + it.n + '</span><a href="#' + it.target + '">' + rich(it.t) + "</a><small>" + rich(it.d) + "</small></li>";
      }).join("");
      return '<div class="stack">' + head(c) + '<ol class="agenda">' + items + "</ol></div>";
    },
    chapter: function (c, s) {
      return '<div class="split"><div><p class="chapter-num" aria-hidden="true">' + c.n + '</p><p class="kicker">' + esc(ui("chapter")) + " " + c.n + '</p><h2 class="h2">' + rich(c.h) + '</h2><p class="lead">' + rich(c.lead) + "</p></div>" +
        pic(s.img, L(s.alt)) + "</div>";
    },
    points: function (c, s) {
      var cols = s.cols || c.cols;
      var cls = cols === 3 ? " points--three" : cols === 1 ? " points--one" : "";
      var list = '<ul class="points' + cls + '">' + c.items.map(function (it) {
        return "<li><h3>" + rich(it.t) + "</h3><p>" + rich(it.d) + "</p></li>";
      }).join("") + "</ul>";
      var body = '<div class="stack">' + head(c) + list + "</div>" + source(c) + '<div class="actions">' + deepBtn(c.deep) + deepBtn(c.deep2) + "</div>";
      if (s.img) return '<div class="split"><div>' + body + "</div>" + pic(s.img, L(s.alt)) + "</div>";
      return body;
    },
    lights: function (c) {
      function col(k, d) {
        return '<div class="light light--' + k + '"><h3>' + rich(d.t) + "</h3><ul>" + d.items.map(function (i) { return "<li>" + rich(i) + "</li>"; }).join("") + "</ul></div>";
      }
      return '<div class="stack">' + head(c) + '<div class="lights">' + col("gut", c.gut) + col("vorsicht", c.vorsicht) + col("stopp", c.stopp) + "</div></div>" +
        source(c) + '<div class="actions">' + deepBtn(c.deep) + "</div>";
    },
    quiz: function (c) {
      var items = c.items.map(function (it, i) {
        var btns = ["gut", "vorsicht", "stopp"].map(function (k) {
          return '<button type="button" data-choice="' + k + '" aria-pressed="false">' + esc(c.labels[k]) + "</button>";
        }).join("");
        return '<div class="quiz__item" data-answer="' + it.a + '" data-i="' + i + '"><p class="quiz__q">' + rich(it.q) + '</p><div class="quiz__choices" role="group" aria-label="' + esc(it.q.replace(/\{\{[^|}]+\|?([^}]*)\}\}/g, "$1")) + '">' + btns +
          '</div><p class="quiz__a" aria-live="polite" hidden></p></div>';
      }).join("");
      return '<div class="stack">' + head(c) + '<div class="quiz">' + items + '</div><p class="quiz__score" aria-live="polite"></p></div>';
    },
    routes: function (c) {
      var r = c.routes.map(function (x) {
        return '<div class="route' + (x.eu ? " route--eu" : "") + '"><h3>' + rich(x.t) + '</h3><p class="where">' + rich(x.where) + "</p><p>" + rich(x.d) + "</p></div>";
      }).join("");
      return '<div class="stack">' + head(c) + '<div><p class="origin"><span class="origin__dot" aria-hidden="true"></span>' + rich(c.origin) + '</p><div class="routes">' + r + "</div></div></div>" +
        source(c) + '<div class="actions">' + deepBtn(c.deep) + deepBtn(c.deep2) + "</div>";
    },
    steps: function (c, s) {
      var st = '<ol class="steps">' + c.steps.map(function (x) { return "<li><h3>" + rich(x.t) + "</h3><p>" + rich(x.d) + "</p></li>"; }).join("") + "</ol>";
      return '<div class="stack">' + head(c) + st + "</div>" + source(c) + '<div class="actions">' + deepBtn(c.deep) + "</div>";
    },
    figures: function (c) {
      var f = c.figs.map(function (x) {
        return '<figure class="figure"><span class="figure__n">' + esc(x.n) + '</span><span class="figure__t">' + rich(x.t) + '</span><span class="figure__s">' +
          (x.href ? '<a href="' + x.href + '" target="_blank" rel="noopener">' + esc(x.s) + "</a>" : esc(x.s)) + "</span></figure>";
      }).join("");
      return '<div class="stack">' + head(c) + '<div class="figures">' + f + "</div></div>" + source(c) + '<div class="actions">' + deepBtn(c.deep) + "</div>";
    },
    cases: function (c) {
      var li = c.cases.map(function (x) {
        return "<li><h3>" + esc(x.name) + '</h3><p class="what">' + rich(x.what) + "</p><p>" + rich(x.d) + "</p>" +
          (x.href ? '<a class="src" href="' + x.href + '" target="_blank" rel="noopener">' + esc(x.src) + "</a>" : "") + "</li>";
      }).join("");
      return '<div class="stack">' + head(c) + '<ul class="cases">' + li + "</ul></div>" + source(c);
    },
    faq: function (c) {
      var qa = c.qa.map(function (x) {
        return "<details><summary>" + rich(x.q) + '</summary><div class="answer">' + x.a.map(function (p) { return "<p>" + rich(p) + "</p>"; }).join("") + "</div></details>";
      }).join("");
      return '<div class="stack">' + head(c) + '<div class="faq">' + qa + "</div></div>" + source(c) + '<div class="actions">' + deepBtn(c.deep) + "</div>";
    },
    closing: function (c, s) {
      var body = '<div class="stack">' + head(c) + '<ul class="closing-list">' + c.list.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul></div>" +
        (c.note ? '<p class="footer-note">' + c.note + "</p>" : "");
      if (s.img) return '<div class="split"><div>' + body + "</div>" + pic(s.img, L(s.alt), "pic--wide") + "</div>";
      return body;
    }
  };

  function render() {
    var keep = current;
    deck.innerHTML = K.slides.map(function (s, i) {
      var c = s[lang] || s.de;
      var cls = "slide slide--" + s.type + (s.alt_bg ? " slide--alt" : "");
      return '<section class="' + cls + '" id="' + s.id + '" data-i="' + i + '" aria-label="' + esc(navTitle(s)) + '">' + R[s.type](c, s) + "</section>";
    }).join("");
    sections = Array.prototype.slice.call(deck.querySelectorAll(".slide"));
    renderOverview();
    current = -1;
    update(keep < 0 ? 0 : keep, true);
  }

  function navTitle(s) {
    var c = s[lang] || s.de;
    return (c.nav || c.h || "").replace(/\{\{[a-z0-9-]+\|([^}]+)\}\}/g, "$1").replace(/\{\{([a-z0-9-]+)\}\}/g, function (m, id) {
      return K.glossary[id] ? K.glossary[id][lang][0] : id;
    }).replace(/<[^>]+>/g, "");
  }

  function renderOverview() {
    var ol = overviewDialog.querySelector(".overview");
    ol.innerHTML = K.slides.map(function (s, i) {
      return '<li><a href="#' + s.id + '" data-go="' + i + '"><span class="num">' + (i + 1) + "</span><span>" + esc(navTitle(s)) + "</span></a></li>";
    }).join("");
  }

  function applyUi() {
    document.documentElement.lang = lang;
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) { el.textContent = ui(el.getAttribute("data-i18n")); });
    document.querySelector('[data-action="fullscreen"]').setAttribute("aria-label", ui("fullscreen"));
    document.querySelector('[data-action="prev"]').setAttribute("aria-label", ui("prev"));
    document.querySelector('[data-action="next"]').setAttribute("aria-label", ui("next"));
    document.querySelector(".voice__toggle").setAttribute("aria-label", ui("voiceToggle"));
    document.querySelector(".topbar__tools").setAttribute("aria-label", ui("tools"));
    document.querySelector(".topbar__logo").setAttribute("aria-label", ui("home"));
    document.title = ui("docTitle");
    Array.prototype.forEach.call(document.querySelectorAll(".lang__btn"), function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
  }

  function setLang(l, silent) {
    if (l !== "de" && l !== "en") return;
    lang = l;
    try {
      var u = new URL(window.location.href);
      u.searchParams.set("lang", l);
      window.history.replaceState(null, "", u.pathname + u.search + u.hash);
    } catch (e) { /* ignorieren */ }
    applyUi();
    hideTip();
    if (!silent) render();
  }

  /* ---------- Aktive Folie ---------- */
  function update(i, force) {
    if (i === current && !force) return;
    current = i;
    var s = K.slides[i];
    document.body.classList.toggle("at-prolog", s.type === "prolog");
    progress.style.transform = "scaleX(" + (sections.length > 1 ? i / (sections.length - 1) : 0) + ")";
    count.textContent = (i + 1) + " / " + sections.length;
    var ch = s.chapter != null ? K.ui[lang].chapters[s.chapter] : "";
    chapterLabel.textContent = ch;
    meta.textContent = ch;
    var text = L(s.jens);
    if (text) {
      quote.classList.add("is-changing");
      window.setTimeout(function () {
        quoteP.innerHTML = rich(text);
        quote.classList.remove("is-changing");
      }, force ? 0 : 220);
    }
    Array.prototype.forEach.call(overviewDialog.querySelectorAll("[data-go]"), function (a) {
      a.setAttribute("aria-current", String(Number(a.getAttribute("data-go")) === i));
    });
  }

  function detect() {
    var y = window.scrollY + window.innerHeight * 0.4;
    var idx = 0;
    for (var i = 0; i < sections.length; i++) { if (sections[i].offsetTop <= y) idx = i; else break; }
    update(idx);
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(function () { ticking = false; detect(); }); }
  }, { passive: true });
  window.addEventListener("resize", detect);

  function go(i) {
    i = Math.max(0, Math.min(sections.length - 1, i));
    sections[i].scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    update(i);
  }
  function next() {
    var sec = sections[current];
    var r = sec.getBoundingClientRect();
    if (r.bottom > window.innerHeight + 8 && r.top < window.innerHeight * 0.5) { window.scrollBy({ top: window.innerHeight * 0.75, behavior: "smooth" }); return; }
    go(current + 1);
  }
  function prev() {
    var r = sections[current].getBoundingClientRect();
    if (r.top < -8) { window.scrollBy({ top: -window.innerHeight * 0.75, behavior: "smooth" }); return; }
    go(current - 1);
  }

  /* ---------- Begriffe ---------- */
  var tipFor = null, tipShownAt = 0;
  function showTip(el) {
    if (tipFor !== el) tipShownAt = Date.now();
    var g = K.glossary[el.getAttribute("data-term")];
    if (!g) return;
    var dlg = el.closest("dialog");
    var host = dlg || document.body;
    if (tip.parentNode !== host) host.appendChild(tip);
    tip.querySelector(".tip__term").textContent = g[lang][0];
    tip.querySelector(".tip__def").textContent = g[lang][1];
    tip.hidden = false;
    el.setAttribute("aria-describedby", "tip");
    var r = el.getBoundingClientRect();
    var tw = tip.offsetWidth, th = tip.offsetHeight;
    var left = Math.min(Math.max(12, r.left + r.width / 2 - tw / 2), window.innerWidth - tw - 12);
    var top = r.top - th - 10;
    if (top < 12) top = r.bottom + 10;
    tip.style.left = left + "px";
    tip.style.top = top + "px";
    tipFor = el;
  }
  function hideTip() {
    if (tipFor) tipFor.removeAttribute("aria-describedby");
    tip.hidden = true;
    tipFor = null;
  }
  document.addEventListener("mouseover", function (e) { var t = e.target.closest(".term"); if (t) showTip(t); });
  document.addEventListener("mouseout", function (e) { var t = e.target.closest(".term"); if (t && t === tipFor) hideTip(); });
  document.addEventListener("focusin", function (e) { var t = e.target.closest && e.target.closest(".term"); if (t) showTip(t); else if (tipFor) hideTip(); });
  window.addEventListener("scroll", function () { if (tipFor) hideTip(); }, { passive: true });

  /* ---------- Dialoge ---------- */
  function openDeep(id) {
    var d = K.deep[id];
    if (!d) return;
    deepDialog.querySelector(".sheet__title").innerHTML = rich(d[lang].title);
    deepDialog.querySelector(".sheet__body").innerHTML = rich(d[lang].html);
    hideTip();
    deepDialog.showModal();
    deepDialog.querySelector(".sheet__inner").scrollTop = 0;
    deepDialog.scrollTop = 0;
  }
  [deepDialog, overviewDialog].forEach(function (dlg) {
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("close", function () { hideTip(); if (tip.parentNode !== document.body) document.body.appendChild(tip); });
  });

  /* ---------- Übung ---------- */
  function quizChoose(btn) {
    var item = btn.closest(".quiz__item");
    var c = (K.slides[Number(btn.closest(".slide").getAttribute("data-i"))][lang]);
    var data = c.items[Number(item.getAttribute("data-i"))];
    var choice = btn.getAttribute("data-choice");
    Array.prototype.forEach.call(item.querySelectorAll("[data-choice]"), function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
    var ok = choice === data.a;
    item.setAttribute("data-state", data.a);
    item.setAttribute("data-correct", String(ok));
    var a = item.querySelector(".quiz__a");
    a.hidden = false;
    a.innerHTML = "<strong>" + esc(ok ? c.right : c.wrong) + " " + esc(c.labels[data.a]) + ".</strong> " + rich(data.why);
    var slide = btn.closest(".slide");
    var done = slide.querySelectorAll(".quiz__item[data-correct]").length;
    var right = slide.querySelectorAll('.quiz__item[data-correct="true"]').length;
    slide.querySelector(".quiz__score").textContent = c.score.replace("{r}", right).replace("{n}", done).replace("{t}", c.items.length);
  }

  /* ---------- Ereignisse ---------- */
  document.addEventListener("click", function (e) {
    var term = e.target.closest(".term");
    if (term) { e.preventDefault(); if (tipFor === term && Date.now() - tipShownAt > 400) hideTip(); else if (tipFor !== term) showTip(term); return; }
    var t = e.target.closest("button, a");
    if (!t) { if (tipFor) hideTip(); return; }
    if (t.hasAttribute("data-deep")) { openDeep(t.getAttribute("data-deep")); return; }
    if (t.hasAttribute("data-choice")) { quizChoose(t); return; }
    if (t.hasAttribute("data-lang")) { setLang(t.getAttribute("data-lang")); return; }
    if (t.hasAttribute("data-go")) { e.preventDefault(); overviewDialog.close(); go(Number(t.getAttribute("data-go"))); return; }
    var act = t.getAttribute("data-action");
    if (act === "next") next();
    else if (act === "prev") prev();
    else if (act === "overview") { hideTip(); overviewDialog.showModal(); var cur = overviewDialog.querySelector('[aria-current="true"]'); if (cur) cur.focus(); }
    else if (act === "close") t.closest("dialog").close();
    else if (act === "fullscreen") toggleFullscreen();
    else if (t.classList.contains("voice__toggle") && window.matchMedia("(max-width: 960px)").matches) {
      var collapsed = voice.getAttribute("data-collapsed") === "true";
      voice.setAttribute("data-collapsed", String(!collapsed));
      t.setAttribute("aria-expanded", String(collapsed));
    }
    else if (t.tagName === "A" && t.getAttribute("href") && t.getAttribute("href").charAt(0) === "#") {
      var target = document.getElementById(t.getAttribute("href").slice(1));
      if (target && target.classList.contains("slide")) { e.preventDefault(); go(Number(target.getAttribute("data-i"))); }
    }
  });

  function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    } catch (e) { /* nicht verfügbar */ }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && tipFor) { hideTip(); return; }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (deepDialog.open || overviewDialog.open) return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return;
    var k = e.key;
    if (k === "ArrowDown" || k === "PageDown" || k === "ArrowRight" || (k === " " && tag !== "button" && tag !== "summary")) { e.preventDefault(); next(); }
    else if (k === "ArrowUp" || k === "PageUp" || k === "ArrowLeft") { e.preventDefault(); prev(); }
    else if (k === "Home") { e.preventDefault(); go(0); }
    else if (k === "End") { e.preventDefault(); go(sections.length - 1); }
    else if (k === "o" || k === "O") { overviewDialog.showModal(); }
    else if (k === "f" || k === "F") toggleFullscreen();
    else if (k === "e" || k === "E") setLang("en");
    else if (k === "d" || k === "D") setLang("de");
  });

  /* ---------- Start ---------- */
  /* Startsprache ist immer Englisch. Deutsch nur über den Umschalter oder einen Link mit ?lang=de. */
  var param = null;
  try { param = new URL(window.location.href).searchParams.get("lang"); } catch (e) { /* alt */ }
  setLang(param === "de" ? "de" : "en", true);
  if (window.matchMedia("(max-width: 960px)").matches) voice.setAttribute("data-collapsed", "false");
  render();
  if (window.location.hash) {
    var start = document.getElementById(window.location.hash.slice(1));
    if (start && start.classList.contains("slide")) { start.scrollIntoView(); update(Number(start.getAttribute("data-i")), true); }
  }
  detect();
})();
