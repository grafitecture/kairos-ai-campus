/* KAIROS AI Campus – Folien (DE/EN)
   Jede Folie: id, type, chapter (Index in ui.chapters), img, jens (Text im Feld von Jens Sattler), de/en (Inhalte).
   Faktenstand: 2. November 2026. Quellen stehen in den Folien und Vertiefungen. */
(function (K) {
  var SRC = {
    residency: "https://platform.claude.com/docs/en/manage-claude/data-residency",
    location: "https://privacy.claude.com/en/articles/7996890",
    training: "https://privacy.claude.com/en/articles/7996885-is-my-data-used-for-model-training",
    retention: "https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data",
    zdr: "https://platform.claude.com/docs/en/manage-claude/api-and-data-retention",
    dpa: "https://www.anthropic.com/legal/data-processing-addendum",
    subproc: "https://trust.anthropic.com/subprocessors",
    certs: "https://privacy.claude.com/en/articles/10015870-do-you-have-a-soc-2-or-hipaa-certifications",
    roles: "https://support.claude.com/en/articles/13930458-set-up-role-based-permissions-on-enterprise-plans",
    sso: "https://support.claude.com/en/articles/13132885-set-up-single-sign-on-sso",
    audit: "https://support.claude.com/en/articles/9970975-access-audit-logs",
    cmek: "https://support.claude.com/en/articles/15505325-what-are-customer-managed-encryption-keys-cmek",
    bedrock: "https://platform.claude.com/docs/build-with-claude/claude-in-amazon-bedrock",
    vertex: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/data-residency",
    foundry: "https://learn.microsoft.com/en-my/Azure/foundry/foundry-models/concepts/claude-models-hosting-comparison",
    aup: "https://www.anthropic.com/aup",
    halluc: "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations",
    models: "https://platform.claude.com/docs/en/about-claude/models/overview",
    eiJan: "https://www.anthropic.com/research/anthropic-economic-index-january-2026-report",
    eiJun: "https://www.anthropic.com/research/economic-index-june-2026-report",
    prod: "https://www.anthropic.com/research/estimating-productivity-gains",
    labor: "https://www.anthropic.com/research/labor-market-impacts",
    wef: "https://www.weforum.org/stories/jobs-and-the-future-of-work/future-of-jobs-report-2025-jobs-of-the-future-and-the-skills-you-need-to-get-them/"
  };
  function a(href, text) { return '<a href="' + href + '" target="_blank" rel="noopener">' + text + "</a>"; }
  K.src = SRC;
  K.a = a;

  K.slides = [
    /* ---------------- Prolog ---------------- */
    {
      id: "prolog", type: "prolog", chapter: 0, img: "jens-speech",
      jens: { de: "", en: "" },
      de: {
        nav: "Prolog: Jens Sattler",
        label: "Bevor wir beginnen",
        caption: "begleitet diesen Workshop",
        alt: "Jens Sattler im Gespräch",
        begin: "Zur Präsentation",
        speech: [
          "Die alten Griechen kannten zwei Wörter für Zeit. Chronos ist die Zeit, die einfach vergeht. Kairos ist der Augenblick, in dem sich etwas entscheidet.",
          "Ich glaube, wir stehen gerade in so einem Augenblick. Viele von Ihnen nutzen KI schon, manche nebenbei, manche mit einem unguten Gefühl. Andere halten Abstand, weil niemand ihnen erklärt hat, was mit ihren Daten passiert. Beides verstehe ich gut.",
          "Wer schon einmal einen Umbruch im Unternehmen begleitet hat, weiß: Selten entscheidet die Technik über den Erfolg. Es entscheidet, ob Menschen ihr vertrauen können und ob sie wissen, wo die Grenzen liegen.",
          "Deshalb geht es heute um beides. Um das, was Claude wirklich kann. Und um die Regeln, die uns schützen: Datenschutz, Sicherheit, Verantwortung. Nicht als Bremse, sondern als Geländer, an dem man sich sicher bewegt.",
          "Ich verspreche Ihnen keine Wunder. Ich verspreche Ihnen Klarheit. Bleiben Sie neugierig, auch dort, wo es unbequem wird. Lassen Sie uns diesen Moment nutzen."
        ]
      },
      en: {
        nav: "Prologue: Jens Sattler",
        label: "Before we begin",
        caption: "accompanies this workshop",
        alt: "Jens Sattler in conversation",
        begin: "Start the presentation",
        speech: [
          "The ancient Greeks had two words for time. Chronos is time that simply passes. Kairos is the moment when something is decided.",
          "I believe we are in such a moment right now. Many of you already use AI, some casually, some with an uneasy feeling. Others keep their distance because nobody has explained what happens to their data. I understand both.",
          "Anyone who has been through change in an organisation knows: technology rarely decides success. What decides it is whether people can trust it and whether they know where the limits are.",
          "So today is about both. About what Claude can really do. And about the rules that protect us: data protection, security, responsibility. Not as a brake, but as a handrail that lets us move safely.",
          "I won’t promise you miracles. I promise you clarity. Stay curious, even where it gets uncomfortable. Let’s make the most of this moment."
        ]
      }
    },

    /* ---------------- Titel & Agenda ---------------- */
    {
      id: "start", type: "title", chapter: 1, img: "title",
      alt: { de: "Vier Kolleginnen und Kollegen besprechen sich an einem Laptop", en: "Four colleagues talking around a laptop" },
      jens: {
        de: "Sie müssen heute nichts auswendig lernen. Ich wünsche mir, dass Sie am Ende sicherer sind als am Anfang, und ein bisschen neugieriger.",
        en: "You don’t have to memorise anything today. I hope you leave more confident than you came, and a little more curious."
      },
      de: {
        nav: "KAIROS AI Campus",
        kicker: "KAIROS AI Campus",
        h: "Der richtige Moment für KI im Unternehmen",
        lead: "Ein Workshop zu Claude: was es kann, wo seine Grenzen liegen und wie Ihr Unternehmen es sicher, rechtskonform und mit Gewinn einsetzt.",
        meta: ["Workshop, 3 Stunden", "Deutsch und Englisch", "Faktenstand November 2026"]
      },
      en: {
        nav: "KAIROS AI Campus",
        kicker: "KAIROS AI Campus",
        h: "The right moment for AI in your organisation",
        lead: "A workshop on Claude: what it can do, where its limits are, and how your organisation can use it safely, lawfully and to real benefit.",
        meta: ["Workshop, 3 hours", "German and English", "Facts as of November 2026"]
      }
    },
    {
      id: "agenda", type: "agenda", chapter: 1, alt_bg: true,
      jens: {
        de: "Wir gehen vom Staunen zum Handwerk. Erst das Potenzial, dann die Leitplanken, dann üben wir.",
        en: "We’ll move from wonder to craft. First the potential, then the guardrails, then we practise."
      },
      de: {
        nav: "Ablauf",
        h: "Ablauf",
        lead: "Neun Kapitel, die Pflichtfragen und eine Kurzreferenz zum Mitnehmen. Technische Einzelheiten stecken in den Vertiefungen.",
        items: [
          { n: "1", t: "Claude kennenlernen", d: "Was es ist, was es kann, wo es an Grenzen stößt", target: "k1" },
          { n: "2", t: "Anwendungsfälle", d: "Von Vertragsanalyse bis Automatisierung, mit Beispielen", target: "k2" },
          { n: "3", t: "Datenschutz und Informationsgovernance", d: "Was hochgeladen werden darf und was nicht", target: "k3" },
          { n: "4", t: "Datenstandorte und Übermittlungen", d: "UK/EU oder USA, Aufbewahrung, DSGVO", target: "k4" },
          { n: "5", t: "Sicherheitskontrollen", d: "Anmeldung, Rollen, Protokolle, Verschlüsselung", target: "k5" },
          { n: "6", t: "Verantwortungsvoll einsetzen", d: "Halluzinationen, Prüfung, Bias, Validierung", target: "k6" },
          { n: "7", t: "Governance", d: "Freigaben, Eskalation, Datenklassen", target: "k7" },
          { n: "8", t: "Praxis", d: "Live-Demo von der Einrichtung bis zum Export", target: "k8" },
          { n: "9", t: "Zukunft der Arbeit", d: "Was sich für Unternehmen und Mitarbeitende ändert", target: "k9" },
          { n: "?", t: "Pflichtfragen", d: "Zehn Antworten für Datenschutz, IT und Einkauf", target: "fragen" }
        ]
      },
      en: {
        nav: "Agenda",
        h: "Agenda",
        lead: "Nine chapters, the mandatory questions and a quick reference to take away. Technical detail lives in the deep dives.",
        items: [
          { n: "1", t: "Meet Claude", d: "What it is, what it can do, where it hits limits", target: "k1" },
          { n: "2", t: "Use cases", d: "From contract analysis to automation, with examples", target: "k2" },
          { n: "3", t: "Data protection and information governance", d: "What may and may not be uploaded", target: "k3" },
          { n: "4", t: "Data residency and transfers", d: "UK/EU or US, retention, GDPR", target: "k4" },
          { n: "5", t: "Security controls", d: "Sign-in, roles, logs, encryption", target: "k5" },
          { n: "6", t: "Responsible use", d: "Hallucinations, review, bias, validation", target: "k6" },
          { n: "7", t: "Governance", d: "Approvals, escalation, data classes", target: "k7" },
          { n: "8", t: "Hands-on", d: "Live demo from setup to export", target: "k8" },
          { n: "9", t: "Future of work", d: "What changes for organisations and employees", target: "k9" },
          { n: "?", t: "Mandatory questions", d: "Ten answers for data protection, IT and procurement", target: "fragen" }
        ]
      }
    },

    /* ---------------- Kapitel 1 ---------------- */
    {
      id: "k1", type: "chapter", chapter: 2, img: "intro",
      alt: { de: "Eine Frau liest überrascht und neugierig am Laptop", en: "A woman reading at her laptop, surprised and curious" },
      jens: {
        de: "Beim ersten Mal ist es fast unheimlich, wie gut Claude formuliert. Gerade deshalb lohnt es sich, genau hinzuschauen, wie es funktioniert.",
        en: "The first time, it’s almost uncanny how well Claude writes. That’s exactly why it’s worth looking closely at how it works."
      },
      de: { nav: "Kapitel 1: Claude kennenlernen", n: "1", h: "Claude kennenlernen", lead: "Was Claude ist, was es kann, wie es sich in Ihre Systeme einfügt und wo seine Grenzen liegen." },
      en: { nav: "Chapter 1: Meet Claude", n: "1", h: "Meet Claude", lead: "What Claude is, what it can do, how it fits into your systems and where its limits are." }
    },
    {
      id: "k1-was", type: "points", chapter: 2, cols: 2,
      jens: {
        de: "Claude ist kein Orakel und kein Kollege mit Gedächtnis für alles. Es ist ein sehr gutes Sprachwerkzeug. Wer das verinnerlicht, nutzt es klüger.",
        en: "Claude is neither an oracle nor a colleague who remembers everything. It’s a very good language tool. Once you take that in, you use it more wisely."
      },
      de: {
        nav: "Was Claude ist",
        kicker: "Was Claude ist",
        h: "Ein Sprachmodell, das mit Ihnen arbeitet",
        lead: "Claude ist ein {{llm|großes Sprachmodell}} des US-Unternehmens Anthropic. Es liest, versteht und schreibt Text, analysiert Bilder und Dokumente und arbeitet mit Code.",
        items: [
          { t: "Versteht Zusammenhänge", d: "Claude erfasst lange Dokumente im {{kontextfenster}} von bis zu einer Million {{token|Token}} und beantwortet Fragen dazu im Kontext." },
          { t: "Erzeugt statt nachzuschlagen", d: "Antworten entstehen aus Wahrscheinlichkeiten. Darum klingen sie immer sicher, auch wenn sie falsch sind ({{halluzination}})." },
          { t: "Hat einen Wissensstand", d: "Die aktuellen Modelle kennen die Welt bis Juni 2026 ({{wissensstand}}). Neueres nur über Websuche oder Ihre Dokumente." },
          { t: "Folgt Grundsätzen", d: "Anthropic trainiert Claude auf Hilfsbereitschaft, Ehrlichkeit und Schadensvermeidung. Es lehnt manche Anfragen ab und sagt, wenn es unsicher ist." }
        ],
        deep: "wie-llm"
      },
      en: {
        nav: "What Claude is",
        kicker: "What Claude is",
        h: "A language model that works with you",
        lead: "Claude is a {{llm|large language model}} made by the US company Anthropic. It reads, understands and writes text, analyses images and documents, and works with code.",
        items: [
          { t: "Grasps context", d: "Claude takes in long documents within a {{kontextfenster}} of up to one million {{token|tokens}} and answers questions about them in context." },
          { t: "Generates rather than looks up", d: "Answers come from probabilities. That’s why they always sound confident, even when they’re wrong ({{halluzination}})." },
          { t: "Has a knowledge cutoff", d: "The current models know the world up to June 2026 ({{wissensstand}}). Anything newer only via web search or your documents." },
          { t: "Follows principles", d: "Anthropic trains Claude to be helpful, honest and harmless. It declines some requests and says when it is unsure." }
        ],
        deep: "wie-llm"
      }
    },
    {
      id: "k1-funktionen", type: "points", chapter: 2, cols: 3, alt_bg: true,
      jens: {
        de: "Lassen Sie sich von der Liste nicht erschlagen. Die meisten von Ihnen brauchen am Anfang genau zwei Dinge: den Chat und Projekte.",
        en: "Don’t let the list overwhelm you. Most of you need exactly two things to start: the chat and projects."
      },
      de: {
        nav: "Funktionen und Produkte",
        kicker: "Funktionen",
        h: "Was Claude heute kann",
        lead: "Ein Modell, mehrere Arbeitsweisen: vom Gespräch über eigenständige Aufgaben bis zur Einbindung in Office und Entwicklung.",
        items: [
          { t: "Chat und Projekte", d: "Fragen, Entwürfe, Analysen. In {{projekte|Projekten}} liegen Anweisungen und Dokumente für ein Thema gebündelt." },
          { t: "Artifacts", d: "Dokumente, Tabellen, Diagramme oder kleine Anwendungen als eigenständige {{artifact|Ergebnisse}} neben dem Chat." },
          { t: "Cowork", d: "Längere Aufgaben selbstständig erledigen lassen, etwa Dateien auswerten und einen Bericht erstellen ({{cowork}})." },
          { t: "Office und Browser", d: "Claude für Excel und PowerPoint, Word in der Beta für Team und Enterprise, Claude in Chrome." },
          { t: "Konnektoren und Skills", d: "Anbindung an Firmensysteme über {{mcp}}, wiederverwendbare {{skill|Skills}} für Firmenformate." },
          { t: "Claude Code und API", d: "{{claude-code}} für Softwareentwicklung, die {{api}} für eigene Anwendungen und Agenten." }
        ],
        deep: "modelle"
      },
      en: {
        nav: "Features and products",
        kicker: "Features",
        h: "What Claude can do today",
        lead: "One model, several ways of working: from conversation to independent tasks to integration with Office and development.",
        items: [
          { t: "Chat and projects", d: "Questions, drafts, analyses. {{projekte|Projects}} bundle instructions and documents for one topic." },
          { t: "Artifacts", d: "Documents, tables, diagrams or small apps as standalone {{artifact|outputs}} next to the chat." },
          { t: "Cowork", d: "Hand over longer tasks, such as analysing files and producing a report ({{cowork}})." },
          { t: "Office and browser", d: "Claude for Excel and PowerPoint, Word in beta for Team and Enterprise, Claude in Chrome." },
          { t: "Connectors and skills", d: "Links to company systems via {{mcp}}, reusable {{skill|skills}} for company formats." },
          { t: "Claude Code and API", d: "{{claude-code}} for software development, the {{api}} for your own applications and agents." }
        ],
        deep: "modelle"
      }
    },
    {
      id: "k1-integration", type: "points", chapter: 2, cols: 2,
      jens: {
        de: "Die eigentliche Kraft entsteht, wenn Claude an Ihre Systeme kommt. Genau dort beginnt auch die Verantwortung.",
        en: "The real power emerges when Claude reaches your systems. That’s exactly where responsibility begins too."
      },
      de: {
        nav: "Integration",
        kicker: "Integration",
        h: "Wie sich Claude in Ihre Landschaft einfügt",
        lead: "Claude lässt sich direkt bei Anthropic oder über die großen Cloud-Plattformen beziehen und an Identität, Daten und Abläufe anbinden.",
        items: [
          { t: "Identität", d: "Anmeldung per {{sso}} über Ihren Identitätsanbieter, automatische Benutzerverwaltung per {{scim}}." },
          { t: "Daten und Werkzeuge", d: "{{konnektor|Konnektoren}} zu Dokumentablagen, Tickets, Datenbanken. Administratoren entscheiden, welche erlaubt sind." },
          { t: "Eigene Anwendungen", d: "Über die {{api}} in Fachanwendungen, Portale oder Abläufe. Mit Managed Agents auch als {{agent|KI-Agent}}." },
          { t: "Cloud-Plattformen", d: "Claude über {{bedrock}}, {{vertex}} oder {{foundry}}: Abrechnung und Vertrag über den bestehenden Cloud-Anbieter, teils mit EU-Regionen." }
        ],
        deep: "integration"
      },
      en: {
        nav: "Integration",
        kicker: "Integration",
        h: "How Claude fits into your landscape",
        lead: "You can get Claude directly from Anthropic or through the major cloud platforms, and connect it to identity, data and workflows.",
        items: [
          { t: "Identity", d: "Sign-in via {{sso}} through your identity provider, automatic user management via {{scim}}." },
          { t: "Data and tools", d: "{{konnektor|Connectors}} to document stores, tickets, databases. Admins decide which are allowed." },
          { t: "Your own applications", d: "Through the {{api}} into business applications, portals or workflows. With Managed Agents also as an {{agent}}." },
          { t: "Cloud platforms", d: "Claude via {{bedrock}}, {{vertex}} or {{foundry}}: billing and contract through your existing cloud provider, partly with EU regions." }
        ],
        deep: "integration"
      }
    },
    {
      id: "k1-grenzen", type: "points", chapter: 2, cols: 2, alt_bg: true,
      jens: {
        de: "Ich habe Menschen erlebt, die nach einer falschen Antwort nie wieder hingeschaut haben. Und andere, die alles geglaubt haben. Beides ist teuer.",
        en: "I’ve seen people who never looked again after one wrong answer. And others who believed everything. Both are costly."
      },
      de: {
        nav: "Grenzen",
        kicker: "Aktuelle Grenzen",
        h: "Was Claude nicht kann oder nicht garantiert",
        lead: "Die Grenzen zu kennen ist keine Skepsis, sondern die Voraussetzung für guten Einsatz.",
        items: [
          { t: "Keine Garantie für Richtigkeit", d: "{{halluzination|Halluzinationen}} lassen sich verringern, aber nicht ausschließen. Wichtiges muss ein Mensch prüfen." },
          { t: "Lange Aufgaben werden unsicherer", d: "Anthropic misst: Über die API gelingen Aufgaben im Schnitt zu 49 %, bei Aufgaben von mehr als fünf Stunden nur noch zu etwa 45 %." },
          { t: "Kein Zugriff ohne Anbindung", d: "Claude kennt Ihre internen Daten nur, wenn Sie sie bereitstellen oder einen {{konnektor}} freigeben." },
          { t: "Daten liegen in den USA", d: "Bei direkter Nutzung speichert Anthropic Daten in den USA. EU-Verarbeitung gibt es nur über Cloud-Plattformen (Kapitel 4)." }
        ],
        source: "Quelle Erfolgsquoten: " + a(SRC.eiJan, "Anthropic Economic Index, Januar 2026")
      },
      en: {
        nav: "Limitations",
        kicker: "Current limitations",
        h: "What Claude cannot do or does not guarantee",
        lead: "Knowing the limits isn’t scepticism. It is the precondition for using it well.",
        items: [
          { t: "No guarantee of correctness", d: "{{halluzination|Hallucinations}} can be reduced but not ruled out. Anything important needs human review." },
          { t: "Long tasks get less reliable", d: "Anthropic measures that tasks via the API succeed 49 % of the time on average, falling to about 45 % for tasks over five hours." },
          { t: "No access without a connection", d: "Claude only knows your internal data if you provide it or approve a {{konnektor|connector}}." },
          { t: "Data is stored in the US", d: "When used directly, Anthropic stores data in the US. EU processing is only available via cloud platforms (chapter 4)." }
        ],
        source: "Source for success rates: " + a(SRC.eiJan, "Anthropic Economic Index, January 2026")
      }
    },

    /* ---------------- Kapitel 2 ---------------- */
    {
      id: "k2", type: "chapter", chapter: 3, img: "usecases",
      alt: { de: "Zwei Kollegen prüfen gemeinsam einen Vertrag", en: "Two colleagues reviewing a contract together" },
      jens: {
        de: "Die besten Anwendungsfälle sind selten spektakulär. Es sind die Aufgaben, die heute Abende und Wochenenden fressen.",
        en: "The best use cases are rarely spectacular. They’re the tasks that eat up evenings and weekends today."
      },
      de: { nav: "Kapitel 2: Anwendungsfälle", n: "2", h: "Anwendungsfälle", lead: "Wo Claude im Arbeitsalltag Zeit schafft und was der Mensch dabei weiterhin tut." },
      en: { nav: "Chapter 2: Use cases", n: "2", h: "Use cases", lead: "Where Claude frees up time in everyday work and what people keep doing." }
    },
    {
      id: "k2-faelle", type: "points", chapter: 3, cols: 2,
      jens: {
        de: "Achten Sie auf die zweite Hälfte jedes Satzes. Dort steht, was Ihre Erfahrung wert ist.",
        en: "Pay attention to the second half of each sentence. That’s where your experience comes in."
      },
      de: {
        nav: "Acht typische Einsätze",
        kicker: "Business Use Cases",
        h: "Was Claude übernimmt, was Sie entscheiden",
        items: [
          { t: "Vertragsanalyse", d: "Claude findet Klauseln, Abweichungen vom Muster und Fristen. Sie bewerten Risiko und Verhandlungsspielraum." },
          { t: "Dokumentenprüfung", d: "Claude vergleicht Fassungen und prüft Vollständigkeit. Sie entscheiden, was gilt." },
          { t: "Anforderungen extrahieren", d: "Claude zieht aus Ausschreibungen und Protokollen strukturierte Anforderungen. Sie klären Widersprüche mit den Beteiligten." },
          { t: "Zusammenfassen", d: "Claude verdichtet Berichte und Gesprächsnotizen mit {{zitate|Belegstellen}}. Sie wählen, was weitergegeben wird." },
          { t: "Risiken erkennen", d: "Claude markiert Auffälligkeiten in Dokumenten und Daten. Sie prüfen und eskalieren." },
          { t: "Wissen finden", d: "Claude beantwortet Fragen aus Richtlinien und Handbüchern mit Quellenangabe. Sie halten die Quellen aktuell." },
          { t: "Abläufe automatisieren", d: "Claude erledigt wiederkehrende Schritte über {{konnektor|Konnektoren}}. Sie legen Grenzen und Kontrollpunkte fest." },
          { t: "Software entwickeln", d: "{{claude-code}} schreibt, testet und migriert Code. Ihr Team reviewt und verantwortet jede Änderung." }
        ],
        deep: "prompt-beispiele"
      },
      en: {
        nav: "Eight typical uses",
        kicker: "Business use cases",
        h: "What Claude takes on, what you decide",
        items: [
          { t: "Contract analysis", d: "Claude finds clauses, deviations from templates and deadlines. You assess risk and room to negotiate." },
          { t: "Document review", d: "Claude compares versions and checks completeness. You decide what stands." },
          { t: "Requirement extraction", d: "Claude turns tenders and minutes into structured requirements. You resolve contradictions with stakeholders." },
          { t: "Summarisation", d: "Claude condenses reports and meeting notes with {{zitate|citations}}. You choose what gets passed on." },
          { t: "Risk identification", d: "Claude flags anomalies in documents and data. You check and escalate." },
          { t: "Knowledge retrieval", d: "Claude answers questions from policies and manuals with sources. You keep the sources current." },
          { t: "Workflow automation", d: "Claude handles recurring steps through {{konnektor|connectors}}. You set limits and checkpoints." },
          { t: "Software development", d: "{{claude-code}} writes, tests and migrates code. Your team reviews and owns every change." }
        ],
        deep: "prompt-beispiele"
      }
    },
    {
      id: "k2-beispiele", type: "cases", chapter: 3, alt_bg: true,
      jens: {
        de: "Diese Zahlen kommen von den Unternehmen selbst. Nehmen Sie sie als Richtung, nicht als Versprechen für Ihr Haus.",
        en: "These figures come from the companies themselves. Take them as a direction, not a promise for your organisation."
      },
      de: {
        nav: "Beispiele aus Unternehmen",
        kicker: "Beispiele",
        h: "So setzen es andere bereits ein",
        cases: [
          { name: "Novo Nordisk", what: "Zusammenfassen, Dokumente erstellen", d: "Klinische Studienberichte mit bis zu 300 Seiten: Dokumentation von über 10 Wochen auf 10 Minuten, Schreibzeit minus 90 %.", src: "claude.com/customers/novo-nordisk", href: "https://claude.com/customers/novo-nordisk" },
          { name: "Pictet", what: "Anforderungen abgleichen", d: "Über 50 Richtlinien gegen regulatorische Standards geprüft. Geschätzt zwei Wochen für zwei bis drei Personen, erledigt in Stunden.", src: "claude.com/customers/pictet", href: "https://claude.com/customers/pictet" },
          { name: "NBIM", what: "Wissen finden, Recherche", d: "Norwegens Staatsfonds: laut interner Umfrage über 20 % Zeitersparnis pro Person und Woche, über 600 aktive Nutzer in zwei Monaten.", src: "claude.com/customers/nbim", href: "https://claude.com/customers/nbim" },
          { name: "Qonto", what: "Abläufe automatisieren", d: "Banking-Agenten über Amazon Bedrock: Gehaltsläufe fünfmal, Rechnungen dreimal schneller. Erster Agent nach sechs Wochen live.", src: "claude.com/customers/qonto", href: "https://claude.com/customers/qonto" },
          { name: "IG Group", what: "Analysen, interne Texte", d: "Claude Enterprise in HR, Marketing, Analytik und Qualitätssicherung: rund 70 Stunden pro Woche gespart, Investition nach drei Monaten zurück.", src: "claude.com/customers/ig-group", href: "https://claude.com/customers/ig-group" },
          { name: "Allianz", what: "Schadenbearbeitung, Entwicklung", d: "Agenten für Kfz- und Krankenversicherung, komplexe Fälle gehen an Mitarbeitende. Jede Entscheidung, Begründung und Datenquelle wird protokolliert.", src: "allianz.com, Januar 2026", href: "https://allianz.com/en/mediacenter/news/media-releases/260109-allianz-and-anthropic-forge-global-partnership.html" },
          { name: "Spellbook", what: "Vertragsanalyse", d: "Prüfung und Redlining in Word nach Vorgaben der Rechtsabteilung: rund 530.000 Prüfungen pro Monat, ein Vertrag statt bis zu 10 Stunden etwa 1 Stunde.", src: "claude.com/customers/spellbook", href: "https://claude.com/customers/spellbook" },
          { name: "EvenUp", what: "Dokumente auswerten", d: "Akten und Befunde werden ausgewertet, Entwürfe erstellt. 8 bis 15 Stunden Facharbeit pro Fall schrumpfen auf Minuten. Eine Anwältin prüft und unterschreibt.", src: "claude.com/customers/evenup", href: "https://claude.com/customers/evenup" },
          { name: "Doctolib", what: "Softwareentwicklung", d: "Claude Code für Tests, Dokumentation und Migrationen: Migrationen in Stunden statt Wochen, neue Entwickler in Tagen produktiv.", src: "claude.com/de/customers/doctolib", href: "https://claude.com/de/customers/doctolib" }
        ],
        source: "Angaben der Unternehmen, veröffentlicht von Anthropic bzw. Allianz. Nicht unabhängig geprüft; Abruf 2. November 2026."
      },
      en: {
        nav: "Company examples",
        kicker: "Examples",
        h: "How others already use it",
        cases: [
          { name: "Novo Nordisk", what: "Summarisation, document generation", d: "Clinical study reports of up to 300 pages: documentation from over 10 weeks to 10 minutes, writing time down 90 %.", src: "claude.com/customers/novo-nordisk", href: "https://claude.com/customers/novo-nordisk" },
          { name: "Pictet", what: "Requirement matching", d: "More than 50 directives checked against regulatory standards. Sized at two weeks for two to three people, done in hours.", src: "claude.com/customers/pictet", href: "https://claude.com/customers/pictet" },
          { name: "NBIM", what: "Knowledge retrieval, research", d: "Norway’s sovereign wealth fund: over 20 % time saved per person per week in internal surveys, 600+ active users within two months.", src: "claude.com/customers/nbim", href: "https://claude.com/customers/nbim" },
          { name: "Qonto", what: "Workflow automation", d: "Banking agents on Amazon Bedrock: payroll five times faster, invoices three times. First agent live after six weeks.", src: "claude.com/customers/qonto", href: "https://claude.com/customers/qonto" },
          { name: "IG Group", what: "Analytics, internal writing", d: "Claude Enterprise across HR, marketing, analytics and QA: about 70 hours a week saved, full return within three months.", src: "claude.com/customers/ig-group", href: "https://claude.com/customers/ig-group" },
          { name: "Allianz", what: "Claims, development", d: "Agents for motor and health claims, with complex cases handed to staff. Every decision, rationale and data source is logged.", src: "allianz.com, January 2026", href: "https://allianz.com/en/mediacenter/news/media-releases/260109-allianz-and-anthropic-forge-global-partnership.html" },
          { name: "Spellbook", what: "Contract analysis", d: "Review and redlining in Word following the legal team’s playbooks: about 530,000 reviews a month, one agreement in about 1 hour instead of up to 10.", src: "claude.com/customers/spellbook", href: "https://claude.com/customers/spellbook" },
          { name: "EvenUp", what: "Document analysis", d: "Case files and records are analysed and drafts produced. 8 to 15 hours of skilled work per case shrink to minutes. An attorney checks and signs.", src: "claude.com/customers/evenup", href: "https://claude.com/customers/evenup" },
          { name: "Doctolib", what: "Software development", d: "Claude Code for tests, documentation and migrations: migrations in hours rather than weeks, new developers productive in days.", src: "claude.com/de/customers/doctolib", href: "https://claude.com/de/customers/doctolib" }
        ],
        source: "Company statements published by Anthropic or Allianz. Not independently verified; retrieved 2 November 2026."
      }
    },

    /* ---------------- Kapitel 3 ---------------- */
    {
      id: "k3", type: "chapter", chapter: 4, img: "dataprotection",
      alt: { de: "Ein Mann zögert nachdenklich, bevor er eine Datei hochlädt", en: "A man pauses thoughtfully before uploading a file" },
      jens: {
        de: "Diesen kurzen Moment des Zögerns vor dem Hochladen, den will ich Ihnen nicht nehmen. Ich will ihn Ihnen beibringen.",
        en: "That brief moment of hesitation before uploading: I don’t want to take it from you. I want to teach it to you."
      },
      de: { nav: "Kapitel 3: Datenschutz", n: "3", h: "Datenschutz und Informationsgovernance", lead: "Welche Daten in Claude gehören, welche nicht, und wie Sie mit Vertraulichem, Personenbezogenem und geistigem Eigentum umgehen." },
      en: { nav: "Chapter 3: Data protection", n: "3", h: "Data protection and information governance", lead: "Which data belongs in Claude and which doesn’t, and how to handle confidential information, personal data and intellectual property." }
    },
    {
      id: "k3-ampel", type: "lights", chapter: 4,
      jens: {
        de: "Die meisten Fehler passieren nicht aus Leichtsinn, sondern unter Zeitdruck. Darum hilft eine einfache Ampel mehr als ein langes Regelwerk.",
        en: "Most mistakes don’t come from carelessness but from time pressure. That’s why a simple traffic light helps more than a long rulebook."
      },
      de: {
        nav: "Erlaubte und verbotene Uploads",
        kicker: "Erlaubte und verbotene Uploads",
        h: "Die Upload-Ampel",
        lead: "Gilt nur für freigegebene Unternehmenskonten. Maßgeblich ist immer die {{datenklassifizierung}} Ihres Unternehmens.",
        gut: { t: "Erlaubt", items: ["Öffentliche Informationen, veröffentlichte Texte", "Eigene Entwürfe ohne Personenbezug", "Interne Dokumente der Klasse „intern“", "Anonymisierte oder aggregierte Daten", "Code ohne Zugangsdaten und Geheimnisse"] },
        vorsicht: { t: "Nur mit Zweck und Freigabe", items: ["Vertrauliche Geschäftsunterlagen wie Verträge und Angebote", "{{pii|Personenbezogene Daten}} von Kunden oder Beschäftigten, möglichst {{pseudonymisierung|pseudonymisiert}}", "Daten Dritter, für die Verträge gelten (NDA prüfen)", "Proprietärer Quellcode"] },
        stopp: { t: "Nie hochladen", items: ["Passwörter, API-Schlüssel, Zugangsdaten", "Gesundheits- und andere {{art9|besondere Daten}}, sofern nicht ausdrücklich freigegeben", "Bank- und Kreditkartendaten", "Firmendaten in privaten Konten (Free, Pro, Max)", "Alles, dessen Weitergabe ein Vertrag oder Gesetz verbietet"] },
        deep: "dsgvo-ki"
      },
      en: {
        nav: "Permitted and prohibited uploads",
        kicker: "Permitted and prohibited uploads",
        h: "The upload traffic light",
        lead: "Applies to approved company accounts only. Your organisation’s {{datenklassifizierung|data classification}} always takes precedence.",
        gut: { t: "Permitted", items: ["Public information, published texts", "Your own drafts without personal data", "Internal documents classed “internal”", "Anonymised or aggregated data", "Code without credentials or secrets"] },
        vorsicht: { t: "Only with purpose and approval", items: ["Confidential business documents such as contracts and offers", "{{pii|Personal data}} about customers or staff, ideally {{pseudonymisierung|pseudonymised}}", "Third-party data covered by contracts (check the NDA)", "Proprietary source code"] },
        stopp: { t: "Never upload", items: ["Passwords, API keys, credentials", "Health and other {{art9|special category data}} unless explicitly approved", "Bank and payment card data", "Company data in personal accounts (Free, Pro, Max)", "Anything a contract or law forbids you to share"] },
        deep: "dsgvo-ki"
      }
    },
    {
      id: "k3-uebung", type: "quiz", chapter: 4, alt_bg: true,
      jens: {
        de: "Raten Sie ruhig falsch. Hier kostet es nichts. Im Alltag schon.",
        en: "Feel free to guess wrong. Here it costs nothing. In real life it does."
      },
      de: {
        nav: "Übung: Darf das hoch?",
        kicker: "Übung",
        h: "Darf das hoch?",
        lead: "Sechs Situationen aus dem Alltag. Wählen Sie für jede eine Ampelfarbe.",
        labels: { gut: "Erlaubt", vorsicht: "Mit Freigabe", stopp: "Nie" },
        right: "Richtig:", wrong: "Nicht ganz. Richtig ist:",
        score: "{r} von {n} richtig, {t} Situationen insgesamt.",
        items: [
          { q: "Eine bereits veröffentlichte Pressemitteilung soll in drei Varianten umgeschrieben werden.", a: "gut", why: "Öffentliche Inhalte ohne Personenbezug sind unkritisch." },
          { q: "Die Kundenliste mit Namen, E-Mail und Umsatz soll für eine Segmentierung ausgewertet werden.", a: "vorsicht", why: "Personenbezogene Daten nur im freigegebenen Unternehmens-Workspace, mit Zweck und Rechtsgrundlage. Besser: Namen und E-Mail vorher durch Kennungen ersetzen." },
          { q: "Eine Konfigurationsdatei mit Datenbank-Passwort, damit Claude einen Fehler findet.", a: "stopp", why: "Zugangsdaten gehören nie in einen KI-Chat. Passwort durch einen Platzhalter ersetzen, dann ist die Datei unkritisch." },
          { q: "Ein Lieferantenvertrag soll im freigegebenen Unternehmenskonto auf Risiken geprüft werden.", a: "vorsicht", why: "Vertrauliche Unterlagen sind im freigegebenen Enterprise-Workspace erlaubt, sofern keine Geheimhaltungsklausel die Weitergabe an Dienstleister verbietet." },
          { q: "Die Krankmeldung eines Mitarbeiters soll für die Personalakte zusammengefasst werden.", a: "stopp", why: "Gesundheitsdaten sind besondere Kategorien nach Art. 9 DSGVO und brauchen eine ausdrückliche, geprüfte Freigabe." },
          { q: "Das Strategiepapier wird schnell in den privaten Free-Account kopiert, weil der Firmenzugang hakt.", a: "stopp", why: "Private Konten haben keinen Auftragsverarbeitungsvertrag; bei Verbraucherkonten können Chats je nach Einstellung sogar für Training genutzt werden." }
        ]
      },
      en: {
        nav: "Exercise: can this be uploaded?",
        kicker: "Exercise",
        h: "Can this be uploaded?",
        lead: "Six everyday situations. Pick a traffic light colour for each.",
        labels: { gut: "Permitted", vorsicht: "With approval", stopp: "Never" },
        right: "Correct:", wrong: "Not quite. The answer is:",
        score: "{r} of {n} correct, {t} situations in total.",
        items: [
          { q: "A press release that is already published should be rewritten in three versions.", a: "gut", why: "Public content without personal data is not critical." },
          { q: "The customer list with names, email and revenue should be analysed for segmentation.", a: "vorsicht", why: "Personal data only in the approved company workspace, with a purpose and legal basis. Better: replace names and emails with IDs first." },
          { q: "A configuration file containing a database password, so Claude can find a bug.", a: "stopp", why: "Credentials never belong in an AI chat. Replace the password with a placeholder and the file is fine." },
          { q: "A supplier contract should be checked for risks in the approved company account.", a: "vorsicht", why: "Confidential documents are allowed in the approved Enterprise workspace, unless a confidentiality clause forbids sharing with service providers." },
          { q: "An employee’s sick note should be summarised for the personnel file.", a: "stopp", why: "Health data is special category data under Art. 9 GDPR and needs explicit, reviewed approval." },
          { q: "The strategy paper is quickly pasted into a personal Free account because the company login isn’t working.", a: "stopp", why: "Personal accounts have no data processing agreement; on consumer plans chats may even be used for training, depending on settings." }
        ]
      }
    },
    {
      id: "k3-vertraulich", type: "points", chapter: 4, cols: 3,
      jens: {
        de: "Vertrauen ist hier keine Gefühlsfrage. Es steht in Verträgen, Einstellungen und Gewohnheiten. Alle drei müssen stimmen.",
        en: "Trust here isn’t a matter of feeling. It lives in contracts, settings and habits. All three have to be right."
      },
      de: {
        nav: "Vertrauliches, Personendaten, geistiges Eigentum",
        kicker: "Umgang mit sensiblen Informationen",
        h: "Vertrauliches, Personendaten, geistiges Eigentum",
        items: [
          { t: "Vertrauliche Informationen", d: "Nur in freigegebenen Unternehmenskonten. Kommerzielle Daten nutzt Anthropic nicht zum Training. Ausnahme: Bewertungen per Daumen, die Sie bewusst abgeben." },
          { t: "Personenbezogene Daten", d: "Zweck festlegen, Daten minimieren, {{pseudonymisierung|pseudonymisieren}}. Für neue Verarbeitungen mit Personendaten den Datenschutz einbinden, oft mit {{dsfa}}." },
          { t: "Geistiges Eigentum", d: "Eigene Inhalte bleiben geschützt, wenn sie nicht ins Training fließen. Fremde Inhalte nur hochladen, wenn Sie die Rechte haben, und Ergebnisse auf übernommene Passagen prüfen." }
        ],
        deep: "ip"
      },
      en: {
        nav: "Confidential data, personal data, IP",
        kicker: "Handling sensitive information",
        h: "Confidential information, personal data, intellectual property",
        items: [
          { t: "Confidential information", d: "Only in approved company accounts. Anthropic does not train on commercial data. Exception: thumbs-up/down ratings you deliberately submit." },
          { t: "Personal data", d: "Define the purpose, minimise data, {{pseudonymisierung|pseudonymise}}. Involve data protection for new processing of personal data, often with a {{dsfa|DPIA}}." },
          { t: "Intellectual property", d: "Your own content stays protected when it isn’t used for training. Upload third-party content only if you hold the rights, and check outputs for copied passages." }
        ],
        deep: "ip"
      }
    },

    /* ---------------- Kapitel 4 ---------------- */
    {
      id: "k4", type: "chapter", chapter: 5, img: "residency",
      alt: { de: "Eine Architektin erklärt am Whiteboard Datenwege", en: "An architect explaining data flows at a whiteboard" },
      jens: {
        de: "Die Frage „Wo liegen unsere Daten?“ ist berechtigt. Sie verdient eine ehrliche Antwort, keine beruhigende.",
        en: "The question “Where is our data?” is legitimate. It deserves an honest answer, not a soothing one."
      },
      de: { nav: "Kapitel 4: Datenstandorte", n: "4", h: "Datenstandorte und internationale Übermittlungen", lead: "Wo Daten gespeichert und verarbeitet werden, was das für UK/EU heißt und wer nach DSGVO welche Rolle hat." },
      en: { nav: "Chapter 4: Data residency", n: "4", h: "Data residency and international transfers", lead: "Where data is stored and processed, what that means for the UK and EU, and who plays which role under GDPR." }
    },
    {
      id: "k4-wege", type: "routes", chapter: 5,
      jens: {
        de: "Hier lohnt es sich, langsam zu lesen. Der Weg, über den Sie Claude beziehen, entscheidet, wo Ihre Daten liegen.",
        en: "This is worth reading slowly. The route through which you get Claude determines where your data lives."
      },
      de: {
        nav: "Wohin die Daten gehen",
        kicker: "Speicherorte und Verarbeitung",
        h: "Fünf Wege zu Claude, fünf Antworten",
        origin: "Ihr Unternehmen in UK oder EU nutzt Claude über …",
        routes: [
          { t: "Claude Team und Enterprise", where: "Speicherung in den USA", d: "Verarbeitung je nach Routing in den USA, Europa, Asien oder Australien. Übermittlung über Standardvertragsklauseln." },
          { t: "Claude API direkt", where: "Speicherung in den USA", d: "{{inference-geo|Inferenz}} global (Standard) oder nur USA gegen Aufpreis. Keine EU- oder UK-Option." },
          { t: "Amazon Bedrock", where: "EU-Regionen wählbar", d: "EU-Inferenzprofil u. a. Frankfurt, Paris, Irland, Stockholm, Mailand, Spanien, Zürich, London. AWS ist Auftragsverarbeiter.", eu: true },
          { t: "Google Cloud Vertex AI", where: "EU-Regionen wählbar", d: "EU-Multiregion (nur EU-Staaten, ohne UK) sowie Belgien und Niederlande. Globale Endpunkte ohne Standortzusage.", eu: true },
          { t: "Microsoft Foundry", where: "Derzeit keine EU-Option", d: "Global Standard oder Data Zone USA. Eine europäische Datenzone kündigt Anthropic als „coming soon“ an." }
        ],
        source: "Quellen: " + a(SRC.location, "Anthropic Privacy Center") + ", " + a(SRC.residency, "Claude-Dokumentation Data Residency") + ", " + a(SRC.bedrock, "Claude in Amazon Bedrock") + ", " + a(SRC.vertex, "Google Cloud Data Residency") + ", " + a(SRC.foundry, "Microsoft Learn") + ". Stand 2. November 2026; Verfügbarkeit je Modell vorher prüfen.",
        deep: "regionen"
      },
      en: {
        nav: "Where the data goes",
        kicker: "Storage and processing locations",
        h: "Five routes to Claude, five answers",
        origin: "Your organisation in the UK or EU uses Claude via …",
        routes: [
          { t: "Claude Team and Enterprise", where: "Stored in the US", d: "Processing may be routed to the US, Europe, Asia or Australia. Transfers covered by standard contractual clauses." },
          { t: "Claude API direct", where: "Stored in the US", d: "{{inference-geo|Inference}} global (default) or US only at extra cost. No EU or UK option." },
          { t: "Amazon Bedrock", where: "EU regions available", d: "EU inference profile incl. Frankfurt, Paris, Ireland, Stockholm, Milan, Spain, Zurich, London. AWS is the processor.", eu: true },
          { t: "Google Cloud Vertex AI", where: "EU regions available", d: "EU multi-region (EU member states only, excludes the UK) plus Belgium and the Netherlands. Global endpoints carry no location guarantee.", eu: true },
          { t: "Microsoft Foundry", where: "No EU option yet", d: "Global Standard or US Data Zone. Anthropic lists a European data zone as “coming soon”." }
        ],
        source: "Sources: " + a(SRC.location, "Anthropic Privacy Center") + ", " + a(SRC.residency, "Claude docs on data residency") + ", " + a(SRC.bedrock, "Claude in Amazon Bedrock") + ", " + a(SRC.vertex, "Google Cloud data residency") + ", " + a(SRC.foundry, "Microsoft Learn") + ". As of 2 November 2026; check availability per model.",
        deep: "regionen"
      }
    },
    {
      id: "k4-dsgvo", type: "points", chapter: 5, cols: 3, alt_bg: true,
      jens: {
        de: "Datenschutz klingt nach Formularen. Am Ende geht es um Menschen, deren Daten wir anvertraut bekommen haben.",
        en: "Data protection sounds like paperwork. In the end it’s about people who have entrusted us with their data."
      },
      de: {
        nav: "DSGVO, Rollen, Aufbewahrung",
        kicker: "DSGVO und Verantwortlichkeiten",
        h: "Wer ist wofür verantwortlich?",
        items: [
          { t: "Ihr Unternehmen", d: "Ist {{verantwortlicher}}: legt Zweck und Rechtsgrundlage fest, informiert Betroffene, beantwortet Auskunftsanfragen." },
          { t: "Anthropic oder Cloud-Anbieter", d: "Ist {{auftragsverarbeiter}}. Der {{avv}} gilt automatisch mit den kommerziellen Bedingungen." },
          { t: "Unterauftragsverarbeiter", d: "U. a. AWS, Google Cloud, Microsoft Azure. Neue {{unterauftragsverarbeiter}} werden angekündigt, Widerspruch binnen 15 Tagen." },
          { t: "Übermittlung in die USA", d: "Abgesichert durch {{scc}} (Module 2 und 3), {{uk-addendum}} und Schweizer Addendum. Ergänzend eine {{tia}} durch Sie." },
          { t: "Aufbewahrung", d: "API: Löschung binnen 30 Tagen. Enterprise: Standard unbegrenzt, einstellbar ab 30 Tagen. Markierte Sicherheitsfälle bis zu 2 Jahre." },
          { t: "Kein Training", d: "Team, Enterprise und API werden nicht zum Training genutzt, außer bei freiwilliger Teilnahme am Development Partner Program." }
        ],
        source: "Quellen: " + a(SRC.dpa, "Data Processing Addendum") + ", " + a(SRC.retention, "Aufbewahrung") + ", " + a(SRC.training, "Training") + ". Keine Rechtsberatung.",
        deep: "aufbewahrung",
        deep2: "dsgvo-ki"
      },
      en: {
        nav: "GDPR, roles, retention",
        kicker: "GDPR and responsibilities",
        h: "Who is responsible for what?",
        items: [
          { t: "Your organisation", d: "Is the {{verantwortlicher|controller}}: sets purpose and legal basis, informs data subjects, answers access requests." },
          { t: "Anthropic or the cloud provider", d: "Is the {{auftragsverarbeiter|processor}}. The {{avv|DPA}} applies automatically with the commercial terms." },
          { t: "Sub-processors", d: "Including AWS, Google Cloud, Microsoft Azure. New {{unterauftragsverarbeiter|sub-processors}} are announced, with 15 days to object." },
          { t: "Transfers to the US", d: "Covered by {{scc|SCCs}} (modules 2 and 3), the {{uk-addendum}} and a Swiss addendum. Plus a {{tia}} on your side." },
          { t: "Retention", d: "API: deleted within 30 days. Enterprise: unlimited by default, configurable from 30 days. Flagged safety cases up to 2 years." },
          { t: "No training", d: "Team, Enterprise and API data are not used for training, unless you voluntarily join the Development Partner Program." }
        ],
        source: "Sources: " + a(SRC.dpa, "Data Processing Addendum") + ", " + a(SRC.retention, "retention") + ", " + a(SRC.training, "training") + ". Not legal advice.",
        deep: "aufbewahrung",
        deep2: "dsgvo-ki"
      }
    },

    /* ---------------- Kapitel 5 ---------------- */
    {
      id: "k5", type: "chapter", chapter: 6, img: "security",
      alt: { de: "Ein IT-Administrator am Stehpult mit Dashboards", en: "An IT administrator at a standing desk with dashboards" },
      jens: {
        de: "Gute Sicherheit merkt man im Alltag kaum. Man merkt nur, wenn sie fehlt.",
        en: "Good security is barely noticeable day to day. You only notice when it’s missing."
      },
      de: { nav: "Kapitel 5: Sicherheit", n: "5", h: "Sicherheitskontrollen", lead: "Welche Stellschrauben Ihr Unternehmen in der Hand hat und welche Anthropic nachweist." },
      en: { nav: "Chapter 5: Security", n: "5", h: "Security controls", lead: "Which levers your organisation controls and what Anthropic can evidence." }
    },
    {
      id: "k5-kontrollen", type: "points", chapter: 6, cols: 3,
      jens: {
        de: "Ich empfehle: erst Zugang und Rollen sauber aufsetzen, dann freischalten. Andersherum wird es mühsam.",
        en: "My advice: set up access and roles properly first, then switch things on. The other way round gets painful."
      },
      de: {
        nav: "Kontrollen für Administratoren",
        kicker: "Kontrollen",
        h: "Was Ihre Administratoren steuern",
        items: [
          { t: "Anmeldung und Zugang", d: "{{sso}} mit {{saml}} und Domain-Verifizierung. Selbst angelegte Organisationen auf Ihrer Domain lassen sich unterbinden. In Enterprise zusätzlich IP-Allowlist." },
          { t: "Benutzer und Rollen", d: "Automatische Pflege per {{scim}}. Enterprise-Gruppen ({{rbac}}) steuern Funktionen, Konnektoren, Modelle und Budgets." },
          { t: "Protokolle", d: "{{audit-log|Audit-Logs}} mit rund 40 Ereignistypen, Export für 180 Tage. {{compliance-api}} für Archiv- und Prüfsysteme." },
          { t: "Verschlüsselung", d: "AES-256 im Ruhezustand, TLS 1.2+ bei der Übertragung. Optional {{cmek|eigene Schlüssel}} für Enterprise." },
          { t: "Aufbewahrung und Export", d: "Eigene Löschfristen ab 30 Tagen, Export der Organisationsdaten durch die Hauptverantwortlichen." },
          { t: "Vorfälle", d: "Der {{avv}} regelt die Unterstützung bei Datenpannen. Ihr eigener Prozess muss KI-Vorfälle abdecken, etwa versehentlich hochgeladene Daten." }
        ],
        source: "Quellen: " + a(SRC.sso, "SSO") + ", " + a(SRC.roles, "Rollen") + ", " + a(SRC.audit, "Audit-Logs") + ", " + a(SRC.cmek, "CMEK") + ", " + a(SRC.dpa, "DPA") + ".",
        deep: "sicherheit-technik"
      },
      en: {
        nav: "Admin controls",
        kicker: "Controls",
        h: "What your admins control",
        items: [
          { t: "Sign-in and access", d: "{{sso}} with {{saml}} and domain verification. Self-created organisations on your domain can be blocked. Enterprise adds IP allowlisting." },
          { t: "Users and roles", d: "Automatic provisioning via {{scim}}. Enterprise groups ({{rbac}}) control features, connectors, models and budgets." },
          { t: "Logs", d: "{{audit-log|Audit logs}} with around 40 event types, exportable for 180 days. {{compliance-api}} for archiving and review systems." },
          { t: "Encryption", d: "AES-256 at rest, TLS 1.2+ in transit. Optional {{cmek|customer-managed keys}} for Enterprise." },
          { t: "Retention and export", d: "Custom deletion periods from 30 days, organisation data export by the primary owners." },
          { t: "Incidents", d: "The {{avv|DPA}} covers support with data breaches. Your own process must cover AI incidents, such as data uploaded by mistake." }
        ],
        source: "Sources: " + a(SRC.sso, "SSO") + ", " + a(SRC.roles, "roles") + ", " + a(SRC.audit, "audit logs") + ", " + a(SRC.cmek, "CMEK") + ", " + a(SRC.dpa, "DPA") + ".",
        deep: "sicherheit-technik"
      }
    },
    {
      id: "k5-nachweise", type: "points", chapter: 6, cols: 3, alt_bg: true,
      jens: {
        de: "Zertifikate ersetzen kein eigenes Urteil. Aber sie zeigen, dass jemand von außen genau hingeschaut hat.",
        en: "Certificates don’t replace your own judgement. But they show that someone from outside has looked closely."
      },
      de: {
        nav: "Zertifikate und Nachweise",
        kicker: "Nachweise",
        h: "Was Anthropic belegen kann",
        items: [
          { t: "SOC 2 Typ I und II", d: "Prüfberichte unabhängiger Prüfer zu Sicherheitskontrollen ({{soc2}})." },
          { t: "ISO/IEC 27001:2022", d: "Zertifiziertes Informationssicherheits-Managementsystem ({{iso27001}})." },
          { t: "ISO/IEC 42001:2023", d: "Zertifiziertes KI-Managementsystem für verantwortungsvolle KI ({{iso42001}}), seit Januar 2025." },
          { t: "HIPAA-fähig", d: "Konfiguration mit Vertrag für US-Gesundheitsdaten ({{hipaa}}). Zeigt, wie streng Einstellungen sein können." },
          { t: "Vertragliche Zusagen", d: "{{avv}} mit {{scc}}, UK- und Schweizer Addendum; jährliche externe Audits und Penetrationstests." },
          { t: "Personalzugriff", d: "Mitarbeitende von Anthropic sehen Unterhaltungen standardmäßig nicht. Ausnahmen: freigegebenes Feedback und Prüfungen bei Richtlinienverstößen." }
        ],
        source: "Quellen: " + a(SRC.certs, "Zertifizierungen") + ", " + a(SRC.dpa, "DPA") + ". Berichte gibt es im " + a("https://trust.anthropic.com", "Trust Center") + "."
      },
      en: {
        nav: "Certifications and evidence",
        kicker: "Evidence",
        h: "What Anthropic can evidence",
        items: [
          { t: "SOC 2 Type I and II", d: "Independent audit reports on security controls ({{soc2}})." },
          { t: "ISO/IEC 27001:2022", d: "Certified information security management system ({{iso27001}})." },
          { t: "ISO/IEC 42001:2023", d: "Certified AI management system for responsible AI ({{iso42001}}), since January 2025." },
          { t: "HIPAA-ready", d: "A configuration with an agreement for US health data ({{hipaa}}). Shows how strict settings can get." },
          { t: "Contractual commitments", d: "{{avv|DPA}} with {{scc|SCCs}}, UK and Swiss addenda; annual external audits and penetration tests." },
          { t: "Staff access", d: "Anthropic staff do not see conversations by default. Exceptions: shared feedback and reviews of policy violations." }
        ],
        source: "Sources: " + a(SRC.certs, "certifications") + ", " + a(SRC.dpa, "DPA") + ". Reports are available in the " + a("https://trust.anthropic.com", "Trust Center") + "."
      }
    },

    /* ---------------- Kapitel 6 ---------------- */
    {
      id: "k6", type: "chapter", chapter: 7, img: "responsible",
      alt: { de: "Zwei Kollegen prüfen gemeinsam ein Ergebnis", en: "Two colleagues checking a result together" },
      jens: {
        de: "Das Gefährlichste an KI ist nicht der Fehler. Es ist die Bequemlichkeit, nicht mehr nachzuschauen.",
        en: "The most dangerous thing about AI isn’t the error. It’s the comfort of no longer checking."
      },
      de: { nav: "Kapitel 6: Verantwortungsvoll einsetzen", n: "6", h: "Verantwortungsvoll einsetzen", lead: "Halluzinationen, menschliche Prüfung, Bias und wie man Ergebnisse validiert." },
      en: { nav: "Chapter 6: Responsible use", n: "6", h: "Responsible use", lead: "Hallucinations, human review, bias and how to validate results." }
    },
    {
      id: "k6-grundsaetze", type: "points", chapter: 7, cols: 2,
      jens: {
        de: "Ihr Name steht unter dem Ergebnis, nicht der von Claude. Das ist keine Last. Das ist Ihre Rolle.",
        en: "Your name is on the result, not Claude’s. That’s not a burden. That’s your role."
      },
      de: {
        nav: "Vier Grundsätze",
        kicker: "Responsible AI",
        h: "Vier Grundsätze für sichere Ergebnisse",
        items: [
          { t: "Halluzinationen einplanen", d: "Anthropic selbst schreibt, dass sich {{halluzination|Halluzinationen}} nicht vollständig vermeiden lassen. Kritische Informationen immer prüfen, besonders vor wichtigen Entscheidungen." },
          { t: "Menschliche Prüfung", d: "Die {{aup}} ab 12. November 2026 verlangt in Hochrisikobereichen wie Recht, Finanzen, Versicherung und Personal eine echte Prüfung durch eine qualifizierte Person, die das Ergebnis ändern darf." },
          { t: "Bias erkennen", d: "{{bias}} kann Bewertungen über Menschen verzerren. Bei Auswahl, Bewertung oder Ansprache von Personen Ergebnisse gezielt auf Fairness prüfen." },
          { t: "Validieren statt glauben", d: "Quellen verlangen, {{zitate}} nachschlagen, Zahlen nachrechnen, bei Unsicherheit eine zweite Fassung erzeugen und vergleichen." }
        ],
        source: "Quellen: " + a(SRC.halluc, "Anthropic: Reduce hallucinations") + ", " + a(SRC.aup, "Anthropic Usage Policy") + ".",
        deep: "halluzinationen"
      },
      en: {
        nav: "Four principles",
        kicker: "Responsible AI",
        h: "Four principles for safe results",
        items: [
          { t: "Plan for hallucinations", d: "Anthropic itself says {{halluzination|hallucinations}} cannot be eliminated entirely. Always check critical information, especially before important decisions." },
          { t: "Human review", d: "The {{aup|Usage Policy}} effective 12 November 2026 requires meaningful review by a qualified person with authority to change the result in high-risk areas such as legal, finance, insurance and employment." },
          { t: "Recognise bias", d: "{{bias|Bias}} can skew judgements about people. When selecting, assessing or addressing people, check results specifically for fairness." },
          { t: "Validate, don’t trust blindly", d: "Ask for sources, look up {{zitate|citations}}, recalculate figures, and when unsure generate a second version and compare." }
        ],
        source: "Sources: " + a(SRC.halluc, "Anthropic: Reduce hallucinations") + ", " + a(SRC.aup, "Anthropic Usage Policy") + ".",
        deep: "halluzinationen"
      }
    },
    {
      id: "k6-pruefen", type: "steps", chapter: 7, alt_bg: true,
      jens: {
        de: "Fünf Fragen, zwei Minuten. Machen Sie es zur Gewohnheit, dann wird es irgendwann leicht.",
        en: "Five questions, two minutes. Make it a habit and one day it becomes easy."
      },
      de: {
        nav: "Prüfroutine vor dem Weitergeben",
        kicker: "Validierung",
        h: "Fünf Fragen, bevor Sie ein Ergebnis weitergeben",
        steps: [
          { t: "Woher stammt das?", d: "Gibt es eine Quelle oder Textstelle? Wenn nicht: nachfragen oder selbst belegen." },
          { t: "Stimmen die Zahlen?", d: "Summen, Prozente und Daten nachrechnen oder mit dem Original vergleichen." },
          { t: "Hält es der Gegenprobe stand?", d: "Claude bitten, Gegenargumente oder Schwachstellen der eigenen Antwort zu nennen." },
          { t: "Ist es fair?", d: "Betrifft das Ergebnis Menschen? Dann auf einseitige Annahmen und Formulierungen achten." },
          { t: "Ist es gekennzeichnet?", d: "Wo Leser es wissen sollten, den KI-Einsatz offen machen. In Hochrisikobereichen ist das Pflicht." }
        ],
        deep: "halluzinationen"
      },
      en: {
        nav: "Review routine before sharing",
        kicker: "Validation",
        h: "Five questions before you pass on a result",
        steps: [
          { t: "Where does it come from?", d: "Is there a source or passage? If not, ask or back it up yourself." },
          { t: "Do the numbers add up?", d: "Recalculate totals, percentages and dates or compare with the original." },
          { t: "Does it survive a counter-check?", d: "Ask Claude to name counter-arguments or weak points in its own answer." },
          { t: "Is it fair?", d: "Does the result affect people? Then watch for one-sided assumptions and wording." },
          { t: "Is it labelled?", d: "Where readers should know, disclose the use of AI. In high-risk areas this is required." }
        ],
        deep: "halluzinationen"
      }
    },

    /* ---------------- Kapitel 7 ---------------- */
    {
      id: "k7", type: "chapter", chapter: 8, img: "governance",
      alt: { de: "Ein Team ordnet Notizen an einer Glaswand", en: "A team arranging notes on a glass wall" },
      jens: {
        de: "Wenn es keine Regeln gibt, nutzen die Menschen KI trotzdem, nur heimlich. Gute Governance holt sie ins Licht.",
        en: "Without rules, people use AI anyway, just in secret. Good governance brings it into the open."
      },
      de: { nav: "Kapitel 7: Governance", n: "7", h: "Governance und organisatorische Erwartungen", lead: "Welche Einsätze freigegeben sind, wer entscheidet, wohin man sich wendet und welche Datenklasse welches Werkzeug erlaubt." },
      en: { nav: "Chapter 7: Governance", n: "7", h: "Governance and organisational expectations", lead: "Which uses are approved, who decides, where to turn, and which data class permits which tool." }
    },
    {
      id: "k7-anwendungen", type: "lights", chapter: 8,
      jens: {
        de: "Eine klare Liste nimmt Angst. Wer weiß, was erlaubt ist, traut sich auch, es zu nutzen.",
        en: "A clear list takes away fear. People who know what’s allowed also dare to use it."
      },
      de: {
        nav: "Freigegebene und eingeschränkte Einsätze",
        kicker: "Freigegebene und eingeschränkte Einsätze",
        h: "Ein Vorschlag für Ihren Einsatzkatalog",
        lead: "Als Ausgangspunkt gedacht. Ihr KI-Gremium passt ihn an Branche, Risiko und Betriebsvereinbarungen an.",
        gut: { t: "Freigegeben", items: ["Entwürfe, Formulierungen, Übersetzungen", "Zusammenfassungen interner Dokumente", "Recherche mit Quellenangabe", "Code-Unterstützung in freigegebenen Repositories", "Vorbereitung von Meetings und Präsentationen"] },
        vorsicht: { t: "Nur mit Freigabe", items: ["Auswertungen mit Kunden- oder Mitarbeiterdaten", "Automatisierte Abläufe mit {{konnektor|Konnektoren}}", "Außenkommunikation im Namen des Unternehmens", "Neue {{agent|Agenten}} mit Schreibrechten in Systemen"] },
        stopp: { t: "Nicht erlaubt", items: ["Entscheidungen über Menschen ohne menschliche Prüfung, etwa Bewerbungen oder Kredite", "Rechtliche oder medizinische Beratung ohne Fachprüfung", "Umgehen von Sicherheits- oder Freigabekontrollen", "Private KI-Konten für Unternehmensdaten"] },
        deep: "governance-modell"
      },
      en: {
        nav: "Approved and restricted uses",
        kicker: "Approved and restricted use cases",
        h: "A starting point for your use case catalogue",
        lead: "Meant as a starting point. Your AI board adapts it to your industry, risk and works agreements.",
        gut: { t: "Approved", items: ["Drafts, wording, translations", "Summaries of internal documents", "Research with sources", "Coding help in approved repositories", "Preparing meetings and presentations"] },
        vorsicht: { t: "Approval required", items: ["Analyses involving customer or employee data", "Automated workflows with {{konnektor|connectors}}", "External communication on behalf of the organisation", "New {{agent|agents}} with write access to systems"] },
        stopp: { t: "Not permitted", items: ["Decisions about people without human review, e.g. applications or loans", "Legal or medical advice without expert review", "Bypassing security or approval controls", "Personal AI accounts for company data"] },
        deep: "governance-modell"
      }
    },
    {
      id: "k7-klassen", type: "points", chapter: 8, cols: 2, alt_bg: true,
      jens: {
        de: "Die Datenklasse kennen die meisten aus der E-Mail-Fußzeile. Jetzt bekommt sie eine praktische Bedeutung.",
        en: "Most people know data classes from email footers. Now they take on a practical meaning."
      },
      de: {
        nav: "Datenklassen und Werkzeuge",
        kicker: "Datenklassifizierung",
        h: "Welche Datenklasse wohin darf",
        lead: "Beispiel für eine Zuordnung nach üblicher {{datenklassifizierung}}. Ihre Richtlinie geht vor.",
        items: [
          { t: "Öffentlich", d: "Alle freigegebenen KI-Werkzeuge des Unternehmens." },
          { t: "Intern", d: "Claude Team oder Enterprise mit Firmenanmeldung. Keine privaten Konten." },
          { t: "Vertraulich", d: "Claude Enterprise mit SSO, Rollen und Protokollen, oder Claude über eine EU-Region bei Bedrock oder Vertex AI. Zweck dokumentieren." },
          { t: "Streng vertraulich", d: "Grundsätzlich nicht. Ausnahmen nur nach Einzelfreigabe durch Informationssicherheit und Datenschutz, etwa mit {{cmek|eigenen Schlüsseln}} und kurzer Aufbewahrung." }
        ],
        deep: "governance-modell"
      },
      en: {
        nav: "Data classes and tools",
        kicker: "Data classification",
        h: "Which data class may go where",
        lead: "An example mapping based on common {{datenklassifizierung|data classification}}. Your policy takes precedence.",
        items: [
          { t: "Public", d: "All of the organisation’s approved AI tools." },
          { t: "Internal", d: "Claude Team or Enterprise with company sign-in. No personal accounts." },
          { t: "Confidential", d: "Claude Enterprise with SSO, roles and logs, or Claude in an EU region on Bedrock or Vertex AI. Document the purpose." },
          { t: "Strictly confidential", d: "Not by default. Exceptions only with individual approval from information security and data protection, e.g. with {{cmek|customer-managed keys}} and short retention." }
        ],
        deep: "governance-modell"
      }
    },
    {
      id: "k7-freigabe", type: "steps", chapter: 8,
      jens: {
        de: "Ein Freigabeprozess darf nicht länger dauern als die Aufgabe, die er absichert. Sonst umgehen ihn alle.",
        en: "An approval process must not take longer than the task it protects. Otherwise everyone works around it."
      },
      de: {
        nav: "Freigabe und Eskalation",
        kicker: "Freigabeprozess und Eskalationswege",
        h: "Vom Einfall zum freigegebenen Einsatz",
        steps: [
          { t: "Beschreiben", d: "Zweck, Nutzen, beteiligte Daten und Systeme auf einer Seite festhalten." },
          { t: "Einstufen", d: "Datenklasse bestimmen, Personendaten und Hochrisikobereiche markieren." },
          { t: "Bewerten", d: "Datenschutz und Informationssicherheit prüfen, bei Bedarf {{dsfa}} und Betriebsrat einbinden." },
          { t: "Freigeben", d: "Das KI-Gremium entscheidet und legt Kontrollen und Verantwortliche fest." },
          { t: "Erproben und messen", d: "Pilot über 30 bis 60 Tage, Nutzen und Fehler messen, dann ausrollen oder stoppen." }
        ],
        source: "Eskalation bei Unsicherheit oder Vorfällen: Vorgesetzte, Datenschutzbeauftragte, Informationssicherheit, KI-Gremium. Pilotdauer nach dem Enterprise AI Transformation Guide von Anthropic.",
        deep: "governance-modell"
      },
      en: {
        nav: "Approval and escalation",
        kicker: "Approval process and escalation routes",
        h: "From idea to approved use",
        steps: [
          { t: "Describe", d: "Capture purpose, benefit, data and systems involved on one page." },
          { t: "Classify", d: "Determine the data class, flag personal data and high-risk areas." },
          { t: "Assess", d: "Data protection and information security review; involve a {{dsfa|DPIA}} and the works council where needed." },
          { t: "Approve", d: "The AI board decides and sets controls and owners." },
          { t: "Pilot and measure", d: "Pilot for 30 to 60 days, measure benefit and errors, then roll out or stop." }
        ],
        source: "Escalation when in doubt or after incidents: line manager, data protection officer, information security, AI board. Pilot length based on Anthropic’s Enterprise AI Transformation Guide.",
        deep: "governance-modell"
      }
    },

    /* ---------------- Kapitel 8 ---------------- */
    {
      id: "k8", type: "chapter", chapter: 9, img: "handson",
      alt: { de: "Ein Trainer hilft einer Teilnehmerin im Workshop", en: "A trainer helping a participant in a workshop" },
      jens: {
        de: "Jetzt wird es praktisch. Trauen Sie sich, Fragen zu stellen, die Ihnen banal vorkommen. Genau die bringen die Gruppe weiter.",
        en: "Now it gets practical. Dare to ask questions that seem trivial. Those are the ones that move the group forward."
      },
      de: { nav: "Kapitel 8: Praxis", n: "8", h: "Praxis: Live-Demonstration", lead: "Ein vollständiger Durchlauf mit einem echten Dokument, von der Einrichtung bis zum sicheren Export." },
      en: { nav: "Chapter 8: Hands-on", n: "8", h: "Hands-on demonstration", lead: "A complete run-through with a real document, from setup to safe export." }
    },
    {
      id: "k8-demo", type: "steps", chapter: 9,
      jens: {
        de: "Achten Sie bei der Demo weniger auf die Klicks als auf die Momente, in denen ich innehalte und prüfe.",
        en: "During the demo, watch less for the clicks and more for the moments when I pause and check."
      },
      de: {
        nav: "Ablauf der Demo",
        kicker: "Hands-on",
        h: "Fünf Schritte der Live-Demo",
        steps: [
          { t: "Workspace einrichten", d: "Mit Firmenkonto anmelden, ein {{projekte|Projekt}} anlegen, Anweisungen und Rolle festlegen." },
          { t: "Dokument hochladen", d: "Vorher die Ampel prüfen: Datenklasse, Personendaten, Geheimnisse. Bei Bedarf schwärzen." },
          { t: "Analysieren und prüfen", d: "Fragen stellen, {{zitate|Belegstellen}} verlangen, Ergebnisse gegen das Original prüfen." },
          { t: "Governance anwenden", d: "Freigegebene Konnektoren nutzen, Teilen nur im Team, keine Weitergabe nach außen." },
          { t: "Sicher exportieren", d: "Ergebnis prüfen, KI-Einsatz kennzeichnen, in der freigegebenen Ablage speichern." }
        ],
        deep: "demo-skript"
      },
      en: {
        nav: "Demo flow",
        kicker: "Hands-on",
        h: "Five steps of the live demo",
        steps: [
          { t: "Set up the workspace", d: "Sign in with the company account, create a {{projekte|project}}, set instructions and role." },
          { t: "Upload a document", d: "Check the traffic light first: data class, personal data, secrets. Redact if needed." },
          { t: "Analyse and review", d: "Ask questions, request {{zitate|citations}}, check results against the original." },
          { t: "Apply governance", d: "Use approved connectors, share within the team only, nothing external." },
          { t: "Export safely", d: "Review the result, label the use of AI, save to the approved repository." }
        ],
        deep: "demo-skript"
      }
    },
    {
      id: "k8-prompts", type: "points", chapter: 9, cols: 3, alt_bg: true,
      jens: {
        de: "Ein guter Prompt ist wie eine gute Übergabe an einen neuen Kollegen. Wer sich dafür Zeit nimmt, bekommt bessere Arbeit zurück.",
        en: "A good prompt is like a good handover to a new colleague. Take time over it and you get better work back."
      },
      de: {
        nav: "Gute Prompts",
        kicker: "Best Practice",
        h: "So formulieren Sie Aufgaben für Claude",
        items: [
          { t: "Aufgabe und Ziel", d: "Was soll entstehen, für wen, wozu? Ein Satz zum Zweck verändert die Antwort mehr als zehn Adjektive." },
          { t: "Kontext mitgeben", d: "Relevante Dokumente, Beispiele, Fachbegriffe. Die {{wissensbasis}} entscheidet über die Qualität." },
          { t: "Form festlegen", d: "Länge, Gliederung, Tabelle, Sprache, Tonfall. Gern ein Beispiel zeigen." },
          { t: "Belege verlangen", d: "„Zitiere die Textstellen, auf die du dich stützt.“" },
          { t: "Unsicherheit erlauben", d: "„Wenn die Unterlagen das nicht hergeben, sag es.“ Das senkt Halluzinationen." },
          { t: "Nachschärfen", d: "Die erste Antwort ist ein Entwurf. Nachfragen, korrigieren, vertiefen." }
        ],
        deep: "prompt-beispiele"
      },
      en: {
        nav: "Good prompts",
        kicker: "Best practice",
        h: "How to frame tasks for Claude",
        items: [
          { t: "Task and goal", d: "What should be produced, for whom, and why? One sentence on purpose changes the answer more than ten adjectives." },
          { t: "Provide context", d: "Relevant documents, examples, terminology. The {{wissensbasis|knowledge base}} determines quality." },
          { t: "Set the format", d: "Length, structure, table, language, tone. Showing an example helps." },
          { t: "Ask for evidence", d: "“Quote the passages you are relying on.”" },
          { t: "Allow uncertainty", d: "“If the documents don’t support it, say so.” This reduces hallucinations." },
          { t: "Refine", d: "The first answer is a draft. Ask follow-ups, correct, go deeper." }
        ],
        deep: "prompt-beispiele"
      }
    },

    /* ---------------- Kapitel 9 ---------------- */
    {
      id: "k9", type: "chapter", chapter: 10, img: "future",
      alt: { de: "Eine erfahrene Kollegin und ein Auszubildender lachen gemeinsam am Laptop", en: "An experienced colleague and an apprentice laughing together at a laptop" },
      jens: {
        de: "Viele fragen mich: Nimmt mir das meine Arbeit weg? Ich antworte ehrlich: Es verändert sie. Und wir haben mehr Einfluss darauf, als wir glauben.",
        en: "Many people ask me: will this take my job? I answer honestly: it will change it. And we have more influence over that than we think."
      },
      de: { nav: "Kapitel 9: Zukunft der Arbeit", n: "9", h: "Zukunft der Arbeit", lead: "Was die Daten sagen und was das für Unternehmen und Mitarbeitende bedeutet." },
      en: { nav: "Chapter 9: Future of work", n: "9", h: "The future of work", lead: "What the data says and what it means for organisations and employees." }
    },
    {
      id: "k9-zahlen", type: "figures", chapter: 10,
      jens: {
        de: "Die Zahlen beruhigen und fordern zugleich. Es geht weniger um Ersetzen als um Mitarbeiten. Aber nur, wenn wir lernen.",
        en: "The numbers reassure and challenge at the same time. It’s less about replacing than collaborating. But only if we learn."
      },
      de: {
        nav: "Was die Daten sagen",
        kicker: "Potenzial",
        h: "Was die Daten heute sagen",
        figs: [
          { n: "52 %", t: "der Unterhaltungen auf Claude.ai unterstützen Menschen ({{augmentation}}), 45 % automatisieren Aufgaben.", s: "Anthropic Economic Index, Januar 2026", href: SRC.eiJan },
          { n: "≈ 80 %", t: "weniger Zeit für Aufgaben, die ohne KI rund 90 Minuten dauern. Laut Anthropic eher eine Obergrenze.", s: "Anthropic, November 2025", href: SRC.prod },
          { n: "86 %", t: "der befragten Nutzer berichten, schneller zu arbeiten; 82 % mehr Umfang, 69 % höhere Qualität.", s: "Anthropic Economic Index, Juni 2026", href: SRC.eiJun },
          { n: "57 %", t: "sagen, KI habe ihre Fähigkeiten wertvoller gemacht.", s: "Anthropic Economic Index, Juni 2026", href: SRC.eiJun },
          { n: "+78 Mio.", t: "Arbeitsplätze weltweit bis 2030 im Saldo: 170 Mio. neue, 92 Mio. wegfallende.", s: "World Economic Forum, Future of Jobs 2025", href: SRC.wef },
          { n: "39 %", t: "der Kernkompetenzen von Beschäftigten ändern sich bis 2030.", s: "World Economic Forum, Future of Jobs 2025", href: SRC.wef }
        ]
      },
      en: {
        nav: "What the data says",
        kicker: "Potential",
        h: "What the data says today",
        figs: [
          { n: "52 %", t: "of conversations on Claude.ai support people ({{augmentation}}); 45 % automate tasks.", s: "Anthropic Economic Index, January 2026", href: SRC.eiJan },
          { n: "≈ 80 %", t: "less time on tasks that take about 90 minutes without AI. Anthropic calls this more of an upper bound.", s: "Anthropic, November 2025", href: SRC.prod },
          { n: "86 %", t: "of surveyed users report working faster; 82 % broader scope, 69 % higher quality.", s: "Anthropic Economic Index, June 2026", href: SRC.eiJun },
          { n: "57 %", t: "say AI has made their skills more valuable.", s: "Anthropic Economic Index, June 2026", href: SRC.eiJun },
          { n: "+78m", t: "jobs worldwide by 2030 on balance: 170m created, 92m displaced.", s: "World Economic Forum, Future of Jobs 2025", href: SRC.wef },
          { n: "39 %", t: "of workers’ core skills will change by 2030.", s: "World Economic Forum, Future of Jobs 2025", href: SRC.wef }
        ]
      }
    },
    {
      id: "k9-bedeutung", type: "points", chapter: 10, cols: 3, alt_bg: true,
      jens: {
        de: "Ich wünsche mir Unternehmen, in denen die Erfahrenen den Jungen Urteilskraft beibringen und die Jungen den Erfahrenen Mut zum Ausprobieren.",
        en: "I wish for organisations where the experienced teach the young judgement, and the young teach the experienced the courage to try."
      },
      de: {
        nav: "Was das für Unternehmen und Mitarbeitende heißt",
        kicker: "Was das bedeutet",
        h: "Für Unternehmen und Mitarbeitende",
        items: [
          { t: "Aufgaben ändern sich vor Berufen", d: "Anthropic findet seit Ende 2022 keinen systematischen Anstieg der Arbeitslosigkeit in stark betroffenen Berufen. Die OECD sieht keine breite Verdrängung." },
          { t: "Urteilskraft wird Kernkompetenz", d: "Wenn Entwürfe billig werden, zählt, wer gut auswählt, prüft und verantwortet." },
          { t: "Einstieg neu denken", d: "Bei 22- bis 25-Jährigen in betroffenen Berufen sinkt die Rate neuer Jobs um etwa 14 %, knapp signifikant. Ausbildung und Mentoring gewinnen an Gewicht." },
          { t: "Lernen gehört zur Arbeit", d: "Fehlende digitale Kompetenzen sind laut OECD das größte Hindernis. In der EU ist {{ai-act|KI-Kompetenz}} seit 2025 Pflicht." },
          { t: "Neue Rollen entstehen", d: "KI-Verantwortliche, Gestalter von Arbeitsabläufen, Prüferinnen und Prüfer, Wissenspflege." },
          { t: "Führen mit Leitplanken", d: "Klare Freigaben und Werkzeuge verhindern Schatten-KI besser als Verbote." }
        ],
        source: "Quellen: " + a(SRC.labor, "Anthropic, Labor market impacts, März 2026") + ", " + a("https://fortune.com/2026/06/03/oecd-economic-outlook-scarring-effects-recession-ai-labour-displacement/", "OECD Economic Outlook Juni 2026 (Bericht Fortune)") + "."
      },
      en: {
        nav: "What it means for organisations and employees",
        kicker: "What this means",
        h: "For organisations and employees",
        items: [
          { t: "Tasks change before jobs do", d: "Anthropic finds no systematic rise in unemployment in highly exposed occupations since late 2022. The OECD sees no widespread displacement." },
          { t: "Judgement becomes a core skill", d: "When drafts become cheap, what counts is who selects, checks and takes responsibility well." },
          { t: "Rethink entry-level work", d: "For 22- to 25-year-olds in exposed occupations, the job-finding rate is down about 14 %, barely significant. Training and mentoring matter more." },
          { t: "Learning is part of work", d: "The OECD names missing digital skills as the main barrier. In the EU, {{ai-act|AI literacy}} has been mandatory since 2025." },
          { t: "New roles emerge", d: "AI leads, workflow designers, reviewers, knowledge curators." },
          { t: "Lead with guardrails", d: "Clear approvals and tools prevent shadow AI better than bans." }
        ],
        source: "Sources: " + a(SRC.labor, "Anthropic, Labor market impacts, March 2026") + ", " + a("https://fortune.com/2026/06/03/oecd-economic-outlook-scarring-effects-recession-ai-labour-displacement/", "OECD Economic Outlook June 2026 (Fortune report)") + "."
      }
    },

    /* ---------------- Pflichtfragen ---------------- */
    {
      id: "fragen", type: "faq", chapter: 11,
      jens: {
        de: "Diese zehn Fragen stellen Datenschutz, IT und Einkauf zu Recht. Wer sie beantworten kann, hat die Hälfte der Einführung geschafft.",
        en: "Data protection, IT and procurement rightly ask these ten questions. Answer them and you’re halfway through the rollout."
      },
      de: {
        nav: "Pflichtfragen an den Trainer",
        kicker: "Pflichtfragen",
        h: "Zehn Fragen, zehn Antworten",
        lead: "Stand 2. November 2026, für die kommerziellen Angebote Claude Team, Enterprise und API.",
        qa: [
          { q: "Wo werden Kundendaten gespeichert?", a: ["In den USA. Anthropic verarbeitet bei mehreren Cloud-Anbietern; für die API ist als Speicherort derzeit nur „us“ wählbar.", "Wer EU-Speicherung braucht, nutzt Claude über Amazon Bedrock oder Google Vertex AI in einer EU-Region.", "Quellen: " + a(SRC.location, "Privacy Center") + ", " + a(SRC.residency, "Data Residency")] },
          { q: "Verlassen Daten UK oder EU?", a: ["Bei direkter Nutzung ja. Standardmäßig kann in den USA, Europa, Asien oder Australien verarbeitet werden; gespeichert wird in den USA. Eine EU- oder UK-Region bietet Anthropic direkt nicht an.", "Über Bedrock (EU-Profil inklusive London) oder Vertex AI (EU-Multiregion, ohne UK) bleiben Anfragen in Europa."] },
          { q: "Werden Daten in die USA übertragen?", a: ["Ja, bei direkter Nutzung. Grundlage ist der {{avv}} mit {{scc}} (Module 2 und 3) sowie UK- und Schweizer Addendum.", "Ihr Unternehmen sollte eine {{tia}} dokumentieren. Eine Teilnahme Anthropics am EU-US Data Privacy Framework haben wir in den öffentlichen Unterlagen nicht bestätigt gefunden."] },
          { q: "Welche Drittdienste oder KI-Modelle werden genutzt?", a: ["Antworten erzeugen Anthropics eigene Claude-Modelle. Rechenleistung und Speicher kommen u. a. von AWS, Google Cloud und Microsoft Azure.", "Für Zusatzfunktionen wie Websuche, Sprachausgabe, Support oder Zahlungen setzt Anthropic weitere Dienstleister ein. Verbindlich ist die " + a(SRC.subproc, "Liste der Unterauftragsverarbeiter") + "; Änderungen werden angekündigt, Widerspruch binnen 15 Tagen."] },
          { q: "Werden hochgeladene Dokumente zum Training genutzt?", a: ["Bei Team, Enterprise und API nein, außer Sie nehmen freiwillig am Development Partner Program teil. Achtung: Bewertungen per Daumen hoch oder runter dürfen für Training genutzt werden.", "Bei privaten Konten (Free, Pro, Max) entscheiden Nutzer selbst; wer zustimmt, dessen Daten werden bis zu fünf Jahre gespeichert. Deshalb keine Firmendaten in privaten Konten. Quelle: " + a(SRC.training, "Privacy Center")] },
          { q: "Welche Aufbewahrungsfristen gelten?", a: ["API: Löschung von Ein- und Ausgaben binnen 30 Tagen. Gelöschte Chats verschwinden binnen 30 Tagen aus dem Backend.", "Enterprise: Standard unbegrenzt, eigene Fristen ab 30 Tagen. Als Richtlinienverstoß markierte Inhalte bis zu 2 Jahre, Klassifizierungswerte bis zu 7 Jahre, Feedback 5 Jahre.", "{{zdr}} gibt es auf Anfrage für die API, nicht für die Team- und Enterprise-Apps. Quellen: " + a(SRC.retention, "Aufbewahrung") + ", " + a(SRC.zdr, "API-Aufbewahrung")] },
          { q: "Wie werden Kundendaten geschützt?", a: ["Verschlüsselung mit AES-256 im Ruhezustand und TLS 1.2+ bei der Übertragung, Zugriff nach dem Prinzip der minimalen Rechte, Mehrfaktor-Anmeldung, Endpoint-Überwachung, jährliche externe Audits und Penetrationstests.", "Für Enterprise optional {{cmek|kundenverwaltete Schlüssel}}. Quellen: " + a(SRC.dpa, "DPA") + ", " + a(SRC.cmek, "CMEK")] },
          { q: "Welche Zertifizierungen liegen vor?", a: ["SOC 2 Typ I und II, ISO/IEC 27001:2022, ISO/IEC 42001:2023 und eine HIPAA-fähige Konfiguration. Prüfberichte stellt Anthropic über das Trust Center bereit. Quelle: " + a(SRC.certs, "Zertifizierungen")] },
          { q: "Welche Kontrollen verhindern unangemessene Nutzung?", a: ["Bei Ihnen: {{sso}}, Rollen und Gruppen, Konnektoren erlauben, freigeben lassen oder sperren, Modellfreigaben, IP-Allowlist, Audit-Logs, Compliance-API und Löschfristen.", "Bei Anthropic: die {{aup}}, durchgesetzt mit automatischen Klassifikatoren und menschlicher Prüfung. Dazu Ihre Regeln: Datenklassen, Einsatzkatalog, Schulung."] },
          { q: "Welche Governance empfehlen Sie für den Unternehmenseinsatz?", a: ["Ein KI-Gremium mit Fachbereich, IT, Datenschutz und Informationssicherheit; ein Einsatzkatalog; Zuordnung der Datenklassen zu Werkzeugen; nur Firmenkonten mit SSO und SCIM; menschliche Prüfung in Hochrisikobereichen; Pilotphasen mit Messung; Schulung aller Nutzer (in der EU als {{ai-act|KI-Kompetenz}} vorgeschrieben); ein Meldeweg für Vorfälle; jährliche Überprüfung."] }
        ],
        deep: "quellen"
      },
      en: {
        nav: "Mandatory questions for the trainer",
        kicker: "Mandatory questions",
        h: "Ten questions, ten answers",
        lead: "As of 2 November 2026, for the commercial offerings Claude Team, Enterprise and API.",
        qa: [
          { q: "Where is customer data stored?", a: ["In the US. Anthropic processes data with several cloud providers; for the API, the only storage location currently available is “us”.", "If you need EU storage, use Claude via Amazon Bedrock or Google Vertex AI in an EU region.", "Sources: " + a(SRC.location, "Privacy Center") + ", " + a(SRC.residency, "data residency")] },
          { q: "Does any data leave the UK or EU?", a: ["With direct use, yes. By default processing can happen in the US, Europe, Asia or Australia; storage is in the US. Anthropic offers no EU or UK region directly.", "Via Bedrock (EU profile including London) or Vertex AI (EU multi-region, excluding the UK), requests stay in Europe."] },
          { q: "Is data transferred to the US?", a: ["Yes, with direct use. The basis is the {{avv|DPA}} with {{scc|SCCs}} (modules 2 and 3) and UK and Swiss addenda.", "Your organisation should document a {{tia}}. We did not find Anthropic’s participation in the EU-US Data Privacy Framework confirmed in its public documents."] },
          { q: "What third-party services or AI models are used?", a: ["Answers are generated by Anthropic’s own Claude models. Compute and storage come from AWS, Google Cloud and Microsoft Azure, among others.", "For additional features such as web search, voice output, support or payments, Anthropic uses further providers. The binding reference is the " + a(SRC.subproc, "sub-processor list") + "; changes are announced, with 15 days to object."] },
          { q: "Are uploaded documents used for model training?", a: ["On Team, Enterprise and API, no, unless you voluntarily join the Development Partner Program. Note: thumbs-up/down ratings may be used for training.", "On personal accounts (Free, Pro, Max), users decide; if they opt in, data is kept for up to five years. So no company data in personal accounts. Source: " + a(SRC.training, "Privacy Center")] },
          { q: "What retention policies apply?", a: ["API: inputs and outputs deleted within 30 days. Deleted chats are removed from the backend within 30 days.", "Enterprise: unlimited by default, custom periods from 30 days. Content flagged for policy violations up to 2 years, classification scores up to 7 years, feedback 5 years.", "{{zdr}} is available on request for the API, not for the Team and Enterprise apps. Sources: " + a(SRC.retention, "retention") + ", " + a(SRC.zdr, "API retention")] },
          { q: "How is customer data secured?", a: ["AES-256 encryption at rest and TLS 1.2+ in transit, least-privilege access, multi-factor sign-in, endpoint monitoring, annual external audits and penetration tests.", "Optional {{cmek|customer-managed keys}} for Enterprise. Sources: " + a(SRC.dpa, "DPA") + ", " + a(SRC.cmek, "CMEK")] },
          { q: "What compliance certifications are held?", a: ["SOC 2 Type I and II, ISO/IEC 27001:2022, ISO/IEC 42001:2023 and a HIPAA-ready configuration. Anthropic provides audit reports through its Trust Center. Source: " + a(SRC.certs, "certifications")] },
          { q: "What controls prevent inappropriate data use?", a: ["On your side: {{sso}}, roles and groups, connectors set to allow, approval or block, model entitlements, IP allowlisting, audit logs, Compliance API and retention periods.", "At Anthropic: the {{aup|Usage Policy}}, enforced through automated classifiers and human review. Plus your rules: data classes, use case catalogue, training."] },
          { q: "What governance do you recommend for enterprise adoption?", a: ["An AI board with business, IT, data protection and information security; a use case catalogue; mapping of data classes to tools; company accounts only with SSO and SCIM; human review in high-risk areas; pilots with measurement; training for all users (required in the EU as {{ai-act|AI literacy}}); an incident reporting route; annual review."] }
        ],
        deep: "quellen"
      }
    },

    /* ---------------- Kurzreferenz & Abschluss ---------------- */
    {
      id: "kurzreferenz", type: "points", chapter: 12, cols: 2, alt_bg: true,
      jens: {
        de: "Wenn Sie heute nur eine Folie fotografieren, dann diese.",
        en: "If you photograph just one slide today, make it this one."
      },
      de: {
        nav: "Kurzreferenz: zehn Regeln",
        kicker: "Kurzreferenz",
        h: "Zehn Regeln für den Alltag",
        items: [
          { t: "Nur Firmenkonten", d: "Nie private KI-Konten für Unternehmensdaten." },
          { t: "Erst klassifizieren", d: "Vor jedem Upload die Datenklasse prüfen." },
          { t: "Keine Geheimnisse", d: "Keine Passwörter, Schlüssel oder Zugangsdaten." },
          { t: "Personendaten sparsam", d: "Minimieren und pseudonymisieren, Zweck festhalten." },
          { t: "Belege verlangen", d: "Zitate und Quellen anfordern und nachschlagen." },
          { t: "Nachrechnen", d: "Zahlen, Daten und Fakten gegenprüfen." },
          { t: "Menschen entscheiden", d: "Keine Entscheidungen über Personen ohne menschliche Prüfung." },
          { t: "Offen kennzeichnen", d: "KI-Einsatz offenlegen, wo Leser es wissen sollten." },
          { t: "Konnektoren mit Bedacht", d: "Nur freigegebene, auf versteckte Anweisungen achten ({{prompt-injection}})." },
          { t: "Vorfälle melden", d: "Fehler sofort melden, nicht verstecken. Schnell gemeldet ist halb gelöst." }
        ]
      },
      en: {
        nav: "Quick reference: ten rules",
        kicker: "Quick reference",
        h: "Ten rules for every day",
        items: [
          { t: "Company accounts only", d: "Never personal AI accounts for company data." },
          { t: "Classify first", d: "Check the data class before every upload." },
          { t: "No secrets", d: "No passwords, keys or credentials." },
          { t: "Go easy on personal data", d: "Minimise and pseudonymise, record the purpose." },
          { t: "Ask for evidence", d: "Request citations and sources and look them up." },
          { t: "Recalculate", d: "Cross-check figures, dates and facts." },
          { t: "People decide", d: "No decisions about people without human review." },
          { t: "Label openly", d: "Disclose AI use where readers should know." },
          { t: "Connectors with care", d: "Approved ones only; watch for hidden instructions ({{prompt-injection}})." },
          { t: "Report incidents", d: "Report mistakes immediately, don’t hide them. Reported quickly is half solved." }
        ]
      }
    },
    {
      id: "abschluss", type: "closing", chapter: 12, img: "qa",
      alt: { de: "Eine offene Fragerunde in einem hellen Raum", en: "An open Q&A round in a bright room" },
      jens: {
        de: "Danke für Ihre Offenheit. Sie haben heute nicht nur ein Werkzeug kennengelernt, sondern eine Haltung. Jetzt freue ich mich auf Ihre Fragen.",
        en: "Thank you for your openness. Today you’ve learned not just a tool, but an attitude. Now I look forward to your questions."
      },
      de: {
        nav: "Abschluss und Fragen",
        kicker: "Abschluss",
        h: "Was Sie heute mitnehmen",
        list: [
          "Sie kennen Möglichkeiten und Grenzen von Claude.",
          "Sie verstehen die Datenrisiken Ihres Unternehmens.",
          "Sie erkennen Daten, die nicht hochgeladen werden dürfen.",
          "Sie wissen, wann Daten UK und EU verlassen und welche Wege es gibt, das zu vermeiden.",
          "Sie prüfen Ergebnisse, bevor Sie sie weitergeben, und kennen Freigabe- und Eskalationswege."
        ],
        note: "Unterlagen: diese Präsentation, die Kurzreferenz, die Pflichtfragen als FAQ und die Vertiefungen. Faktenstand 2. November 2026; Produkte, Regionen und Verträge ändern sich, vor Entscheidungen bitte die verlinkten Quellen prüfen. Keine Rechtsberatung. Bilder: KI-generiert, Porträts von Jens Sattler sind Platzhalter. " + a("https://kairos-mannheim.de", "kairos-mannheim.de")
      },
      en: {
        nav: "Wrap-up and questions",
        kicker: "Wrap-up",
        h: "What you take away today",
        list: [
          "You know what Claude can do and where its limits are.",
          "You understand your organisation’s data risks.",
          "You can identify data that must not be uploaded.",
          "You know when data leaves the UK and EU, and which routes avoid it.",
          "You check results before passing them on and know the approval and escalation routes."
        ],
        note: "Materials: this presentation, the quick reference, the mandatory questions as an FAQ and the deep dives. Facts as of 2 November 2026; products, regions and contracts change, so please check the linked sources before making decisions. Not legal advice. Images: AI-generated; portraits of Jens Sattler are placeholders. " + a("https://kairos-mannheim.de", "kairos-mannheim.de")
      }
    }
  ];
})(window.KAIROS);
