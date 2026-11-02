/* KAIROS AI Campus – Vertiefungen (DE/EN). Technische Einzelheiten, die auf den Folien nur angerissen werden. */
(function (K) {
  var S = K.src, a = K.a;

  K.deep = {
    "wie-llm": {
      de: {
        title: "Wie ein Sprachmodell arbeitet",
        html:
          "<p>Ein {{llm|Sprachmodell}} zerlegt Text in {{token|Token}}, Wortteile von meist drei bis vier Zeichen. Beim Antworten berechnet es Token für Token, welche Fortsetzung am wahrscheinlichsten zu Ihrer Anfrage und dem bisherigen Text passt.</p>" +
          "<h3>Training und Wissensstand</h3><p>Das Modell lernt aus sehr großen Textmengen und wird anschließend darauf trainiert, hilfreich, ehrlich und sicher zu antworten. Was nach dem {{wissensstand}} (bei den aktuellen Modellen Juni 2026) passiert ist, kennt es nur, wenn Sie es mitgeben oder die Websuche aktiv ist.</p>" +
          "<h3>Das Kontextfenster</h3><p>Alles, was Claude in einer Unterhaltung berücksichtigt, muss in das {{kontextfenster}} passen: Anweisungen, Dokumente, bisherige Antworten. Die aktuellen Modelle fassen bis zu einer Million Token, grob mehrere tausend Seiten. Was nicht im Kontext steht, „weiß“ Claude in diesem Moment nicht.</p>" +
          "<h3>Warum Antworten variieren</h3><p>Die Ausgabe ist wahrscheinlichkeitsbasiert. Dieselbe Frage kann unterschiedlich formulierte, gelegentlich auch inhaltlich abweichende Antworten liefern. Darum sind Belege und Prüfungen wichtiger als eine einzelne Antwort.</p>" +
          "<h3>Gedächtnis</h3><p>Ohne Zusatzfunktion merkt sich Claude nichts zwischen Unterhaltungen. Projekte und die Memory-Funktion stellen bewusst Wissen bereit; Administratoren können Memory für Gruppen steuern.</p>" +
          '<p class="source">Quelle: ' + a(S.models, "Claude-Dokumentation, Modellübersicht") + "</p>"
      },
      en: {
        title: "How a language model works",
        html:
          "<p>A {{llm|language model}} splits text into {{token|tokens}}, word pieces of usually three to four characters. When answering, it calculates token by token which continuation most likely fits your request and the text so far.</p>" +
          "<h3>Training and knowledge cutoff</h3><p>The model learns from very large amounts of text and is then trained to answer helpfully, honestly and safely. Anything after its {{wissensstand|knowledge cutoff}} (June 2026 for the current models) it only knows if you provide it or web search is on.</p>" +
          "<h3>The context window</h3><p>Everything Claude considers in a conversation has to fit in the {{kontextfenster|context window}}: instructions, documents, previous answers. The current models hold up to one million tokens, roughly several thousand pages. Whatever is not in context, Claude does not “know” at that moment.</p>" +
          "<h3>Why answers vary</h3><p>Output is probability-based. The same question can produce differently worded and occasionally different answers. That is why evidence and checks matter more than any single answer.</p>" +
          "<h3>Memory</h3><p>Without an extra feature, Claude remembers nothing between conversations. Projects and the memory feature deliberately provide knowledge; admins can control memory per group.</p>" +
          '<p class="source">Source: ' + a(S.models, "Claude documentation, models overview") + "</p>"
      }
    },

    "modelle": {
      de: {
        title: "Die aktuelle Modellfamilie",
        html:
          "<p>Alle vier allgemein verfügbaren Modelle haben ein {{kontextfenster}} von einer Million Token, bis zu 128.000 Token Ausgabe und den {{wissensstand}} Juni 2026. Preise je Million Token Eingabe/Ausgabe über die API.</p>" +
          "<table><thead><tr><th>Modell</th><th>Erschienen</th><th>Wofür</th><th>Preis</th></tr></thead><tbody>" +
          "<tr><td>Claude Opus 5.5</td><td>22.09.2026</td><td>Empfohlener Standard für lange, anspruchsvolle Wissens- und Entwicklungsarbeit</td><td>4 / 20 USD</td></tr>" +
          "<tr><td>Claude Fable 5.1</td><td>01.09.2026</td><td>Besonders anspruchsvolles Denken, lange Agenten-Aufgaben</td><td>10 / 50 USD</td></tr>" +
          "<tr><td>Claude Sonnet 5.5</td><td>28.09.2026</td><td>Beste Mischung aus Tempo und Intelligenz</td><td>2 / 10 USD</td></tr>" +
          "<tr><td>Claude Haiku 5.5</td><td>07.10.2026</td><td>Schnell, für große Mengen</td><td>ab 0,10 / 0,50 USD</td></tr>" +
          "</tbody></table>" +
          "<p>Claude Mythos 5.1 ist nur eingeschränkt zugänglich. Für Fable- und Mythos-Modelle gilt eine verpflichtende Aufbewahrung von 30 Tagen; {{zdr}} ist dafür nicht möglich.</p>" +
          "<h3>Welche Oberfläche wofür</h3><ul><li><strong>Claude-Apps</strong> (Web, Desktop, Mobil): Chat, {{projekte}}, {{artifact|Artifacts}}, Memory, Skills, Konnektoren.</li><li><strong>{{cowork}}</strong>: eigenständige, längere Aufgaben, seit April 2026 allgemein verfügbar.</li><li><strong>{{claude-code}}</strong>: Softwareentwicklung.</li><li><strong>Claude Developer Platform</strong>: {{api}} und Managed Agents.</li><li><strong>Claude in Chrome, Excel, PowerPoint</strong>; Word in der Beta für Team und Enterprise.</li></ul>" +
          '<p class="source">Quellen: ' + a(S.models, "Modellübersicht") + ", " + a("https://support.claude.com/en/articles/15425695", "Covered Models") + "</p>"
      },
      en: {
        title: "The current model family",
        html:
          "<p>All four generally available models have a {{kontextfenster|context window}} of one million tokens, up to 128,000 output tokens and a {{wissensstand|knowledge cutoff}} of June 2026. Prices per million input/output tokens via the API.</p>" +
          "<table><thead><tr><th>Model</th><th>Released</th><th>Best for</th><th>Price</th></tr></thead><tbody>" +
          "<tr><td>Claude Opus 5.5</td><td>22 Sep 2026</td><td>Recommended default for long, demanding knowledge and development work</td><td>$4 / $20</td></tr>" +
          "<tr><td>Claude Fable 5.1</td><td>1 Sep 2026</td><td>Especially demanding reasoning, long agentic tasks</td><td>$10 / $50</td></tr>" +
          "<tr><td>Claude Sonnet 5.5</td><td>28 Sep 2026</td><td>Best balance of speed and intelligence</td><td>$2 / $10</td></tr>" +
          "<tr><td>Claude Haiku 5.5</td><td>7 Oct 2026</td><td>Fast, high volume</td><td>from $0.10 / $0.50</td></tr>" +
          "</tbody></table>" +
          "<p>Claude Mythos 5.1 has limited access. Fable and Mythos models require 30-day retention; {{zdr}} is not available for them.</p>" +
          "<h3>Which surface for what</h3><ul><li><strong>Claude apps</strong> (web, desktop, mobile): chat, {{projekte|projects}}, {{artifact|artifacts}}, memory, skills, connectors.</li><li><strong>{{cowork}}</strong>: longer independent tasks, generally available since April 2026.</li><li><strong>{{claude-code}}</strong>: software development.</li><li><strong>Claude Developer Platform</strong>: {{api}} and Managed Agents.</li><li><strong>Claude in Chrome, Excel, PowerPoint</strong>; Word in beta for Team and Enterprise.</li></ul>" +
          '<p class="source">Sources: ' + a(S.models, "models overview") + ", " + a("https://support.claude.com/en/articles/15425695", "Covered Models") + "</p>"
      }
    },

    "integration": {
      de: {
        title: "Integration: API, MCP und Cloud-Plattformen",
        html:
          "<h3>API und Agenten</h3><p>Über die {{api}} senden Anwendungen Anfragen an Claude und erhalten Antworten, auch mit Werkzeugaufrufen, Dateien und Code-Ausführung. Managed Agents übernehmen den Betrieb von {{agent|Agenten}}, die mehrere Schritte selbstständig erledigen. Beispiel: Qonto hat einen ersten Banking-Agenten nach sechs Wochen live gebracht.</p>" +
          "<h3>Model Context Protocol</h3><p>{{mcp}} ist ein offener Standard. Ein MCP-Server stellt Werkzeuge und Daten eines Systems bereit, etwa „Ticket anlegen“ oder „Dokument suchen“. Administratoren fügen Server für die Organisation hinzu und legen je {{konnektor}} fest: immer erlauben, Freigabe nötig oder gesperrt, auch einzeln je Werkzeug.</p>" +
          "<h3>Sicherheitsregeln für Konnektoren</h3><ul><li>Nur vertrauenswürdige Server anbinden.</li><li>Angeforderte Berechtigungen prüfen, Schreibrechte sparsam vergeben.</li><li>Auf {{prompt-injection}} achten: Inhalte aus E-Mails, Webseiten oder Dokumenten können versteckte Anweisungen enthalten.</li><li>Nicht benötigte Werkzeuge sperren.</li></ul>" +
          "<h3>Cloud-Plattformen</h3><p>Über {{bedrock}}, {{vertex}} und {{foundry}} schließen Sie den Vertrag mit Ihrem Cloud-Anbieter, nutzen dessen Abrechnung, Netzwerk- und Berechtigungskonzepte. Welche Modelle in welcher Region verfügbar sind, unterscheidet sich je Plattform und ändert sich laufend.</p>" +
          "<h3>Identität</h3><p>{{sso}} per {{saml}}, Benutzerpflege per {{scim}} oder automatisch bei der ersten Anmeldung. Gruppen aus dem Identitätsanbieter steuern in Enterprise die Rechte.</p>" +
          '<p class="source">Quellen: ' + a("https://claude.com/docs/remote-mcp", "Remote MCP") + ", " + a(S.sso, "SSO") + ", " + a(S.roles, "Rollen") + "</p>"
      },
      en: {
        title: "Integration: API, MCP and cloud platforms",
        html:
          "<h3>API and agents</h3><p>Through the {{api}}, applications send requests to Claude and receive answers, including tool calls, files and code execution. Managed Agents run {{agent|agents}} that complete multiple steps on their own. Example: Qonto put its first banking agent live after six weeks.</p>" +
          "<h3>Model Context Protocol</h3><p>{{mcp}} is an open standard. An MCP server exposes a system’s tools and data, such as “create ticket” or “search document”. Admins add servers for the organisation and set each {{konnektor|connector}} to always allow, needs approval or blocked, even per tool.</p>" +
          "<h3>Security rules for connectors</h3><ul><li>Connect trusted servers only.</li><li>Review requested permissions, grant write access sparingly.</li><li>Watch for {{prompt-injection}}: content from emails, web pages or documents can contain hidden instructions.</li><li>Block tools you don’t need.</li></ul>" +
          "<h3>Cloud platforms</h3><p>Via {{bedrock}}, {{vertex}} and {{foundry}}, you contract with your cloud provider and use its billing, network and permission models. Which models are available in which region differs by platform and changes constantly.</p>" +
          "<h3>Identity</h3><p>{{sso}} via {{saml}}, user provisioning via {{scim}} or automatically at first sign-in. In Enterprise, groups from the identity provider control permissions.</p>" +
          '<p class="source">Sources: ' + a("https://claude.com/docs/remote-mcp", "Remote MCP") + ", " + a(S.sso, "SSO") + ", " + a(S.roles, "roles") + "</p>"
      }
    },

    "dsgvo-ki": {
      de: {
        title: "DSGVO und KI: die Pflichten Ihres Unternehmens",
        html:
          "<p>Sobald {{pii|personenbezogene Daten}} in Claude verarbeitet werden, gilt die {{dsgvo}}. Ihr Unternehmen ist {{verantwortlicher}}, Anthropic oder der Cloud-Anbieter {{auftragsverarbeiter}}.</p>" +
          "<h3>Checkliste vor dem Einsatz</h3><ol>" +
          "<li><strong>Zweck und Rechtsgrundlage</strong> festlegen (z. B. Vertrag, berechtigtes Interesse) und im Verarbeitungsverzeichnis eintragen.</li>" +
          "<li><strong>{{avv}}</strong>: bei Anthropic automatisch Teil der kommerziellen Bedingungen. Bei privaten Konten gibt es ihn nicht.</li>" +
          "<li><strong>Drittlandübermittlung</strong>: {{scc}} (Module 2 und 3, irisches Recht), {{uk-addendum}} und Schweizer Addendum sind im DPA enthalten. Ergänzend eine {{tia}} dokumentieren.</li>" +
          "<li><strong>{{dsfa}}</strong> prüfen, besonders bei Beschäftigtendaten, {{art9|besonderen Kategorien}}, Profiling oder neuen Technologien in großem Umfang.</li>" +
          "<li><strong>Datenminimierung</strong>: nur nötige Daten, möglichst {{pseudonymisierung|pseudonymisiert}}.</li>" +
          "<li><strong>Betroffenenrechte</strong>: Auskunft und Löschung müssen auch für Daten in Claude möglich sein; Exporte und Löschfristen helfen dabei.</li>" +
          "<li><strong>Information</strong>: Datenschutzhinweise und, wo nötig, Betriebsrat einbinden.</li></ol>" +
          "<h3>Unterauftragsverarbeiter</h3><p>Anthropic veröffentlicht die Liste im " + a(S.subproc, "Trust Center") + ". Neue Einträge werden angekündigt; Sie können binnen 15 Tagen widersprechen.</p>" +
          "<h3>Vereinigtes Königreich</h3><p>Für Organisationen im UK gilt die UK GDPR mit vergleichbaren Pflichten. Übermittlungen aus dem UK sichert das UK-Addendum ab. Beachten Sie: Die EU-Multiregion von Google Vertex AI schließt das UK nicht ein; das EU-Profil von Amazon Bedrock enthält London.</p>" +
          '<p class="source">Quelle: ' + a(S.dpa, "Anthropic Data Processing Addendum") + ". Diese Übersicht ersetzt keine Rechtsberatung.</p>"
      },
      en: {
        title: "GDPR and AI: your organisation’s obligations",
        html:
          "<p>As soon as {{pii|personal data}} is processed in Claude, the {{dsgvo|GDPR}} applies. Your organisation is the {{verantwortlicher|controller}}; Anthropic or the cloud provider is the {{auftragsverarbeiter|processor}}.</p>" +
          "<h3>Checklist before rollout</h3><ol>" +
          "<li><strong>Purpose and legal basis</strong> defined (e.g. contract, legitimate interest) and recorded in the record of processing.</li>" +
          "<li><strong>{{avv|DPA}}</strong>: part of Anthropic’s commercial terms automatically. Personal accounts have none.</li>" +
          "<li><strong>International transfer</strong>: {{scc|SCCs}} (modules 2 and 3, Irish law), the {{uk-addendum}} and a Swiss addendum are included in the DPA. Also document a {{tia}}.</li>" +
          "<li><strong>{{dsfa|DPIA}}</strong>: assess, especially for employee data, {{art9|special categories}}, profiling or new technology at scale.</li>" +
          "<li><strong>Data minimisation</strong>: only what is needed, {{pseudonymisierung|pseudonymised}} where possible.</li>" +
          "<li><strong>Data subject rights</strong>: access and erasure must also work for data in Claude; exports and retention periods help.</li>" +
          "<li><strong>Transparency</strong>: privacy notices and, where required, the works council.</li></ol>" +
          "<h3>Sub-processors</h3><p>Anthropic publishes the list in its " + a(S.subproc, "Trust Center") + ". New entries are announced; you can object within 15 days.</p>" +
          "<h3>United Kingdom</h3><p>UK organisations are subject to the UK GDPR with comparable duties. Transfers from the UK are covered by the UK Addendum. Note: Google Vertex AI’s EU multi-region does not include the UK; Amazon Bedrock’s EU profile includes London.</p>" +
          '<p class="source">Source: ' + a(S.dpa, "Anthropic Data Processing Addendum") + ". This overview is not legal advice.</p>"
      }
    },

    "aufbewahrung": {
      de: {
        title: "Aufbewahrung und Löschung im Detail",
        html:
          "<table><thead><tr><th>Daten</th><th>Frist</th></tr></thead><tbody>" +
          "<tr><td>API: Ein- und Ausgaben</td><td>Löschung binnen 30 Tagen</td></tr>" +
          "<tr><td>API mit {{zdr}}</td><td>Keine Speicherung nach der Verarbeitung (auf Anfrage; nicht für Dateien, Batch, Code-Ausführung, Skills, MCP-Konnektor und nicht für Fable- und Mythos-Modelle)</td></tr>" +
          "<tr><td>Enterprise-Chats, Projekte, Artifacts</td><td>Standard unbegrenzt; eigene Frist ab 30 Tagen einstellbar</td></tr>" +
          "<tr><td>Gelöschte Chats</td><td>Sofort unsichtbar, binnen 30 Tagen aus dem Backend gelöscht</td></tr>" +
          "<tr><td>Als Richtlinienverstoß markierte Inhalte</td><td>Bis zu 2 Jahre; Klassifizierungswerte bis zu 7 Jahre</td></tr>" +
          "<tr><td>Feedback (Daumen hoch/runter)</td><td>5 Jahre</td></tr>" +
          "<tr><td>Aktivitätsprotokoll, Sitzungsprotokolle von Cowork und Claude Code</td><td>Standard 6 Jahre</td></tr>" +
          "<tr><td>Nach Vertragsende</td><td>Rückgabe oder Löschung binnen 30 Tagen</td></tr>" +
          "<tr><td>Private Konten mit Trainingszustimmung</td><td>Bis zu 5 Jahre; ohne Zustimmung 30 Tage</td></tr>" +
          "</tbody></table>" +
          "<p>Ausnahmen von eigenen Löschfristen: markierte Inhalte, rechtliche Aufbewahrungspflichten (Legal Hold), Managed Agents und Cloud-Sitzungen von Claude Code.</p>" +
          '<p class="source">Quellen: ' + a(S.retention, "Aufbewahrung") + ", " + a(S.zdr, "API und Aufbewahrung") + ", " + a("https://support.claude.com/en/articles/10440198-custom-data-retention-controls-for-claude-enterprise", "Eigene Löschfristen in Enterprise") + ", " + a(S.dpa, "DPA") + "</p>"
      },
      en: {
        title: "Retention and deletion in detail",
        html:
          "<table><thead><tr><th>Data</th><th>Period</th></tr></thead><tbody>" +
          "<tr><td>API inputs and outputs</td><td>Deleted within 30 days</td></tr>" +
          "<tr><td>API with {{zdr}}</td><td>Not stored after processing (on request; not for Files, Batch, code execution, Skills, MCP connector, and not for Fable and Mythos models)</td></tr>" +
          "<tr><td>Enterprise chats, projects, artifacts</td><td>Unlimited by default; custom period from 30 days</td></tr>" +
          "<tr><td>Deleted chats</td><td>Hidden immediately, removed from the backend within 30 days</td></tr>" +
          "<tr><td>Content flagged for policy violations</td><td>Up to 2 years; classification scores up to 7 years</td></tr>" +
          "<tr><td>Feedback (thumbs up/down)</td><td>5 years</td></tr>" +
          "<tr><td>Activity feed, Cowork and Claude Code session transcripts</td><td>6 years by default</td></tr>" +
          "<tr><td>After contract end</td><td>Returned or deleted within 30 days</td></tr>" +
          "<tr><td>Personal accounts that allow training</td><td>Up to 5 years; 30 days otherwise</td></tr>" +
          "</tbody></table>" +
          "<p>Exceptions to custom retention: flagged content, legal holds, Managed Agents and cloud Claude Code sessions.</p>" +
          '<p class="source">Sources: ' + a(S.retention, "retention") + ", " + a(S.zdr, "API and data retention") + ", " + a("https://support.claude.com/en/articles/10440198-custom-data-retention-controls-for-claude-enterprise", "custom retention in Enterprise") + ", " + a(S.dpa, "DPA") + "</p>"
      }
    },

    "regionen": {
      de: {
        title: "Regionen und Datenresidenz technisch",
        html:
          "<h3>Claude API direkt</h3><ul><li><strong>Workspace-Geo</strong> bestimmt den Speicherort. Einziger Wert derzeit: „us“, nach Anlage nicht änderbar.</li><li><strong>{{inference-geo}}</strong>: „global“ (Standard, Berechnung überall möglich) oder „us“ (nur USA, Faktor 1,1 auf den Preis, ab Claude 4.6).</li><li>Eine EU- oder UK-Option ist nicht dokumentiert.</li></ul>" +
          "<h3>Claude Team und Enterprise</h3><p>Speicherung in den USA. Anfragen können zur Berechnung in die USA, nach Europa, Asien oder Australien geleitet werden. Für Enterprise mit nutzungsbasierter Abrechnung ist das Routing einstellbar, die Speicherung bleibt in den USA.</p>" +
          "<h3>Amazon Bedrock</h3><ul><li>EU-Inferenzprofil (Präfix „eu.“) mit Regionen in Frankfurt, Zürich, Stockholm, Mailand, Spanien, Irland, London und Paris.</li><li>Aufrufe aus London können in EU-Regionen und London laufen; Aufrufe aus Frankfurt nicht nach London oder Zürich.</li><li>Daten, die regionsübergreifend verarbeitet werden, liegen nur im Arbeitsspeicher und werden dort nicht gespeichert.</li><li>Regionale Endpunkte kosten rund 10 % mehr als globale. Nicht jedes Modell hat überall einen regionalen Endpunkt.</li></ul>" +
          "<h3>Google Cloud Vertex AI</h3><ul><li>EU-Multiregion (nur EU-Mitgliedstaaten, ohne UK), europe-west1 (Belgien), europe-west4 (Niederlande).</li><li>Globale Endpunkte geben keine Standortzusage.</li><li>Modellverfügbarkeit je Region vor dem Einsatz in der Google-Dokumentation prüfen.</li></ul>" +
          "<h3>Microsoft Foundry</h3><p>„Hosted on Azure“: Global Standard oder Data Zone Standard (USA). „Hosted on Anthropic“ kann außerhalb der gewählten Region verarbeiten. Anthropic bleibt dort unabhängiger Auftragsverarbeiter. Eine EU-Datenzone ist angekündigt, aber nicht verfügbar.</p>" +
          '<p class="source">Quellen: ' + a(S.residency, "Claude Data Residency") + ", " + a(S.location, "Privacy Center") + ", " + a(S.bedrock, "Bedrock") + ", " + a("https://aws.amazon.com/blogs/alps/unlocking-ai-flexibility-in-switzerland-a-guide-to-cross-region-inference-for-eu-data-processing-and-model-access", "AWS-Blog zur EU-Inferenz") + ", " + a(S.vertex, "Vertex AI") + ", " + a(S.foundry, "Foundry") + ", " + a("https://claude.com/regional-compliance", "claude.com/regional-compliance") + "</p>"
      },
      en: {
        title: "Regions and data residency, technically",
        html:
          "<h3>Claude API direct</h3><ul><li><strong>Workspace geo</strong> sets the storage location. The only value today is “us”, fixed after creation.</li><li><strong>{{inference-geo|Inference geo}}</strong>: “global” (default, computation can run anywhere) or “us” (US only, 1.1× price, Claude 4.6 and later).</li><li>No EU or UK option is documented.</li></ul>" +
          "<h3>Claude Team and Enterprise</h3><p>Stored in the US. Requests may be routed for computation to the US, Europe, Asia or Australia. For Enterprise on usage-based billing routing can be configured; storage remains in the US.</p>" +
          "<h3>Amazon Bedrock</h3><ul><li>EU inference profile (prefix “eu.”) with regions in Frankfurt, Zurich, Stockholm, Milan, Spain, Ireland, London and Paris.</li><li>Calls from London may run in EU regions and London; calls from Frankfurt do not route to London or Zurich.</li><li>Data processed cross-region exists in memory only and is not stored there.</li><li>Regional endpoints cost about 10 % more than global ones. Not every model has a regional endpoint everywhere.</li></ul>" +
          "<h3>Google Cloud Vertex AI</h3><ul><li>EU multi-region (EU member states only, excludes the UK), europe-west1 (Belgium), europe-west4 (Netherlands).</li><li>Global endpoints carry no location guarantee.</li><li>Check model availability per region in Google’s documentation before rollout.</li></ul>" +
          "<h3>Microsoft Foundry</h3><p>“Hosted on Azure”: Global Standard or Data Zone Standard (US). “Hosted on Anthropic” may process outside the selected region. Anthropic remains an independent processor there. An EU data zone is announced but not available.</p>" +
          '<p class="source">Sources: ' + a(S.residency, "Claude data residency") + ", " + a(S.location, "Privacy Center") + ", " + a(S.bedrock, "Bedrock") + ", " + a("https://aws.amazon.com/blogs/alps/unlocking-ai-flexibility-in-switzerland-a-guide-to-cross-region-inference-for-eu-data-processing-and-model-access", "AWS blog on EU inference") + ", " + a(S.vertex, "Vertex AI") + ", " + a(S.foundry, "Foundry") + ", " + a("https://claude.com/regional-compliance", "claude.com/regional-compliance") + "</p>"
      }
    },

    "sicherheit-technik": {
      de: {
        title: "Sicherheitskontrollen technisch",
        html:
          "<h3>Anmeldung</h3><ul><li>{{sso}} für Team, Enterprise und Console, mit Domain-Verifizierung.</li><li>„Organisationserstellung einschränken“ verhindert, dass Beschäftigte auf Ihrer Domain eigene Organisationen anlegen.</li><li>Benutzer per JIT bei der ersten Anmeldung oder per {{scim}} aus dem Verzeichnis.</li><li>IP-Allowlist (nur Enterprise) beschränkt den Zugriff auf Firmennetze.</li></ul>" +
          "<h3>Rollen und Gruppen (Enterprise, seit April 2026)</h3><p>Gruppen aus dem Identitätsanbieter steuern: Funktionen (Chat, Cowork, Claude Code, Websuche, Memory u. a.), Admin-Bereiche, jeden {{konnektor}} (immer erlauben, Freigabe nötig, gesperrt, auch je Werkzeug), einzelne Modelle samt Aufwandsgrenzen und Ausgabenlimits je Gruppe.</p>" +
          "<h3>Nachvollziehbarkeit</h3><ul><li>{{audit-log|Audit-Logs}} (Enterprise): rund 40 Ereignistypen, Export über 180 Tage.</li><li>{{compliance-api}}: Aktivitäten, Chats und Dateien; nur der Primary Owner kann sie aktivieren. Anbindungen an Sicherheitswerkzeuge seit Mai 2026.</li><li>Export der Organisationsdaten durch den Primary Owner.</li></ul>" +
          "<h3>Verschlüsselung und Schlüssel</h3><p>AES-256 im Ruhezustand, TLS 1.2+ bei der Übertragung. {{cmek}} für Enterprise und die Claude Platform über AWS KMS, Google Cloud KMS oder Azure Key Vault.</p>" +
          "<h3>Betrieb bei Anthropic</h3><p>Zugriff nach minimalen Rechten, Mehrfaktor-Anmeldung, Endpoint Detection and Response, jährliche externe Audits und Penetrationstests. Mitarbeitende sehen Unterhaltungen standardmäßig nicht.</p>" +
          "<h3>Ihr Incident-Prozess</h3><p>Ergänzen Sie Ihren Vorfallprozess um KI-Fälle: versehentlich hochgeladene vertrauliche Daten (Chat löschen, melden, Löschfrist prüfen), Fehlinformationen in versendeten Ergebnissen, auffällige Konnektor-Aktionen. Für Datenpannen gilt die 72-Stunden-Meldefrist der DSGVO an die Aufsichtsbehörde.</p>" +
          '<p class="source">Quellen: ' + a(S.sso, "SSO") + ", " + a(S.roles, "Rollen") + ", " + a(S.audit, "Audit-Logs") + ", " + a("https://support.claude.com/en/articles/13015708", "Compliance-API") + ", " + a("https://support.claude.com/en/articles/13200993", "IP-Allowlist") + ", " + a(S.cmek, "CMEK") + ", " + a(S.dpa, "DPA") + "</p>"
      },
      en: {
        title: "Security controls, technically",
        html:
          "<h3>Sign-in</h3><ul><li>{{sso}} for Team, Enterprise and Console, with domain verification.</li><li>“Restrict organization creation” stops staff creating their own organisations on your domain.</li><li>Users provisioned just-in-time at first sign-in or via {{scim}} from the directory.</li><li>IP allowlisting (Enterprise only) limits access to company networks.</li></ul>" +
          "<h3>Roles and groups (Enterprise, since April 2026)</h3><p>Groups from the identity provider control features (chat, Cowork, Claude Code, web search, memory and more), admin areas, each {{konnektor|connector}} (always allow, needs approval, blocked, even per tool), individual models with effort caps, and spend limits per group.</p>" +
          "<h3>Traceability</h3><ul><li>{{audit-log|Audit logs}} (Enterprise): around 40 event types, exports covering 180 days.</li><li>{{compliance-api}}: activity, chats and files; only the Primary Owner can enable it. Security tool integrations since May 2026.</li><li>Organisation data export by the Primary Owner.</li></ul>" +
          "<h3>Encryption and keys</h3><p>AES-256 at rest, TLS 1.2+ in transit. {{cmek|CMEK}} for Enterprise and the Claude Platform via AWS KMS, Google Cloud KMS or Azure Key Vault.</p>" +
          "<h3>Operations at Anthropic</h3><p>Least-privilege access, multi-factor sign-in, endpoint detection and response, annual external audits and penetration tests. Staff do not see conversations by default.</p>" +
          "<h3>Your incident process</h3><p>Extend your incident process to AI cases: confidential data uploaded by mistake (delete the chat, report, check retention), misinformation in results already sent, unusual connector actions. For personal data breaches, the GDPR’s 72-hour notification deadline to the supervisory authority applies.</p>" +
          '<p class="source">Sources: ' + a(S.sso, "SSO") + ", " + a(S.roles, "roles") + ", " + a(S.audit, "audit logs") + ", " + a("https://support.claude.com/en/articles/13015708", "Compliance API") + ", " + a("https://support.claude.com/en/articles/13200993", "IP allowlisting") + ", " + a(S.cmek, "CMEK") + ", " + a(S.dpa, "DPA") + "</p>"
      }
    },

    "ip": {
      de: {
        title: "Geistiges Eigentum und Vertraulichkeit",
        html:
          "<h3>Ihre Inhalte</h3><p>Kommerzielle Daten (Team, Enterprise, API) nutzt Anthropic nicht zum Training. Damit fließen Ihre Unterlagen nicht in künftige Modelle ein. Ausnahme: Feedback, das Nutzer bewusst per Daumen abgeben, und die freiwillige Teilnahme am Development Partner Program. Regeln Sie intern, ob Feedback-Bewertungen erlaubt sind.</p>" +
          "<h3>Fremde Inhalte</h3><ul><li>Nur hochladen, was Sie nutzen dürfen: Lizenzen, Geheimhaltungsvereinbarungen und Kundenverträge prüfen.</li><li>Manche NDAs verbieten die Weitergabe an Dienstleister. Dann ist auch der Upload in ein Unternehmenskonto unzulässig.</li></ul>" +
          "<h3>Ergebnisse</h3><ul><li>Ergebnisse auf übernommene Passagen prüfen, bevor sie veröffentlicht werden.</li><li>Für Code: Lizenzen von Abhängigkeiten und übernommene Fragmente wie bei jedem Code-Review prüfen.</li><li>Rechte an Ergebnissen regeln die kommerziellen Bedingungen von Anthropic beziehungsweise Ihres Cloud-Anbieters. Lassen Sie diese von Ihrer Rechtsabteilung bewerten.</li></ul>" +
          '<p class="source">Quelle: ' + a(S.training, "Privacy Center, Training") + ". Keine Rechtsberatung.</p>"
      },
      en: {
        title: "Intellectual property and confidentiality",
        html:
          "<h3>Your content</h3><p>Anthropic does not train on commercial data (Team, Enterprise, API), so your documents do not flow into future models. Exceptions: feedback users deliberately submit via thumbs, and voluntary participation in the Development Partner Program. Decide internally whether feedback ratings are allowed.</p>" +
          "<h3>Third-party content</h3><ul><li>Only upload what you are entitled to use: check licences, NDAs and customer contracts.</li><li>Some NDAs forbid sharing with service providers. Then uploading to a company account is not allowed either.</li></ul>" +
          "<h3>Outputs</h3><ul><li>Check outputs for copied passages before publishing.</li><li>For code: check dependency licences and copied fragments as in any code review.</li><li>Rights in outputs are governed by the commercial terms of Anthropic or your cloud provider. Have your legal team assess them.</li></ul>" +
          '<p class="source">Source: ' + a(S.training, "Privacy Center, training") + ". Not legal advice.</p>"
      }
    },

    "halluzinationen": {
      de: {
        title: "Halluzinationen verringern: Techniken",
        html:
          "<p>Anthropic empfiehlt mehrere Techniken und betont: Sie verringern {{halluzination|Halluzinationen}}, beseitigen sie aber nicht. Kritische Informationen immer prüfen, besonders bei wichtigen Entscheidungen.</p>" +
          "<h3>Grundtechniken</h3><ol><li><strong>Nichtwissen erlauben</strong>: „Wenn du dir nicht sicher bist oder die Unterlagen es nicht hergeben, sag das.“</li><li><strong>Erst zitieren, dann antworten</strong>: Bei langen Dokumenten zuerst wörtliche Zitate herausziehen lassen und die Antwort darauf stützen.</li><li><strong>Belege verlangen und zurückziehen</strong>: Claude jede Aussage mit einem Zitat belegen lassen; Aussagen ohne Beleg streichen.</li></ol>" +
          "<h3>Fortgeschritten</h3><ul><li>Auf die bereitgestellten Dokumente beschränken: „Nutze nur die beigefügten Unterlagen, kein Allgemeinwissen.“</li><li>Die Begründung prüfen, bevor die Antwort übernommen wird.</li><li>Mehrfach ausführen und vergleichen: Weichen Antworten voneinander ab, ist Vorsicht geboten.</li><li>Schrittweise verfeinern: Ergebnis prüfen lassen, Fehler benennen, erneut erzeugen.</li></ul>" +
          "<h3>Zitate-Funktion</h3><p>Mit {{zitate|Citations}} verweist Claude auf genau die Sätze in Ihren Dokumenten, auf die es sich stützt. Ein Kunde (Endex) senkte damit Quellenfehler laut Anthropic von 10 % auf 0 %.</p>" +
          "<h3>Menschliche Prüfung in Hochrisikobereichen</h3><p>Ab 12. November 2026 verlangt die {{aup}}: Empfehlungen in elf Hochrisikobereichen, darunter Recht, Finanzen, Versicherung und Beschäftigung, muss eine qualifizierte Person sinnvoll prüfen, mit der Befugnis, sie zu ändern, bevor sie weitergegeben oder umgesetzt werden. Betroffene sind über den KI-Einsatz zu informieren. Interne Entwürfe, Recherche oder Zusammenfassungen sind ausgenommen, solange sie nicht die endgültige Empfehlung sind.</p>" +
          '<p class="source">Quellen: ' + a(S.halluc, "Reduce hallucinations") + ", " + a("https://claude.com/resources/articles/introducing-citations-api", "Citations API") + ", " + a(S.aup, "Usage Policy") + "</p>"
      },
      en: {
        title: "Reducing hallucinations: techniques",
        html:
          "<p>Anthropic recommends several techniques and stresses: they reduce {{halluzination|hallucinations}} but do not eliminate them. Always validate critical information, especially for important decisions.</p>" +
          "<h3>Basic techniques</h3><ol><li><strong>Allow “I don’t know”</strong>: “If you’re not sure or the documents don’t support it, say so.”</li><li><strong>Quote first, then answer</strong>: for long documents, have Claude extract word-for-word quotes first and base the answer on them.</li><li><strong>Require evidence, retract claims</strong>: have Claude back each claim with a quote; drop claims without support.</li></ol>" +
          "<h3>Advanced</h3><ul><li>Restrict to the documents provided: “Use only the attached documents, not general knowledge.”</li><li>Review the reasoning before accepting the answer.</li><li>Run it several times and compare: if answers diverge, be careful.</li><li>Refine iteratively: have the result checked, name errors, regenerate.</li></ul>" +
          "<h3>Citations</h3><p>With {{zitate|citations}}, Claude points to exactly the sentences in your documents it relied on. One customer (Endex) cut source errors from 10 % to 0 %, according to Anthropic.</p>" +
          "<h3>Human review in high-risk areas</h3><p>From 12 November 2026 the {{aup|Usage Policy}} requires that recommendations in eleven high-risk areas, including legal, finance, insurance and employment, are meaningfully reviewed by a qualified person with authority to change them before they are delivered or acted on. People affected must be told AI was used. Internal drafting, research or summaries are excluded as long as they are not the final recommendation.</p>" +
          '<p class="source">Sources: ' + a(S.halluc, "Reduce hallucinations") + ", " + a("https://claude.com/resources/articles/introducing-citations-api", "Citations API") + ", " + a(S.aup, "Usage Policy") + "</p>"
      }
    },

    "governance-modell": {
      de: {
        title: "Ein Governance-Modell für Claude",
        html:
          "<h3>Rollen</h3><table><tbody>" +
          "<tr><th>KI-Gremium</th><td>Fachbereiche, IT, Datenschutz, Informationssicherheit, ggf. Betriebsrat. Gibt Einsätze frei, pflegt den Katalog, entscheidet bei Eskalationen.</td></tr>" +
          "<tr><th>Fachverantwortliche</th><td>Je Einsatz eine Person, die Nutzen, Qualität und Einhaltung der Regeln verantwortet.</td></tr>" +
          "<tr><th>Administration</th><td>SSO, SCIM, Gruppen, Konnektoren, Modelle, Löschfristen, Protokolle.</td></tr>" +
          "<tr><th>Nutzerinnen und Nutzer</th><td>Halten Ampel und Prüfroutine ein, melden Vorfälle.</td></tr>" +
          "</tbody></table>" +
          "<h3>Eskalationswege</h3><ol><li>Unsicher, ob etwas hochgeladen werden darf: Vorgesetzte oder Datenschutzbeauftragte fragen, nicht raten.</li><li>Versehentlich Vertrauliches hochgeladen: Chat löschen, sofort an Informationssicherheit melden.</li><li>Fehlerhaftes Ergebnis bereits verschickt: Empfänger informieren, Fachverantwortliche einbinden.</li><li>Neuer Einsatz mit Personendaten oder Automatisierung: Antrag an das KI-Gremium.</li></ol>" +
          "<h3>Datenklassen und Werkzeuge</h3><p>Ordnen Sie jeder Klasse Ihrer {{datenklassifizierung}} erlaubte Werkzeuge zu und hinterlegen Sie das technisch über Gruppen und Konnektor-Freigaben.</p>" +
          "<h3>Rechtlicher Rahmen</h3><ul><li>EU: {{ai-act}}, Art. 4 verlangt seit 2. Februar 2025 ausreichende KI-Kompetenz der Beschäftigten. Dieser Workshop ist ein Baustein dafür.</li><li>{{aup}}: menschliche Prüfung in Hochrisikobereichen ab 12. November 2026.</li><li>{{dsgvo}} und gegebenenfalls Mitbestimmung bei der Einführung technischer Einrichtungen.</li></ul>" +
          "<h3>Vorgehen nach Anthropic</h3><p>Der Enterprise AI Transformation Guide empfiehlt drei Phasen: Fundament (Unterstützung der Geschäftsleitung, Steuerungsgremium, klare Governance), Piloten mit sichtbarem Nutzen in 30 bis 60 Tagen, Verbreitung über strukturierte Schulung. Gemessen werden Nutzung, Effizienz, Qualität und Zufriedenheit.</p>" +
          '<p class="source">Quellen: ' + a("https://resources.anthropic.com/enterprise-ai-transformation-guide", "Enterprise AI Transformation Guide") + ", " + a(S.aup, "Usage Policy") + ", " + a(S.roles, "Rollen und Gruppen") + "</p>"
      },
      en: {
        title: "A governance model for Claude",
        html:
          "<h3>Roles</h3><table><tbody>" +
          "<tr><th>AI board</th><td>Business units, IT, data protection, information security, works council where relevant. Approves uses, maintains the catalogue, decides escalations.</td></tr>" +
          "<tr><th>Use case owners</th><td>One person per use case accountable for benefit, quality and compliance.</td></tr>" +
          "<tr><th>Administration</th><td>SSO, SCIM, groups, connectors, models, retention, logs.</td></tr>" +
          "<tr><th>Users</th><td>Follow the traffic light and review routine, report incidents.</td></tr>" +
          "</tbody></table>" +
          "<h3>Escalation routes</h3><ol><li>Unsure whether something may be uploaded: ask your manager or the data protection officer, don’t guess.</li><li>Confidential data uploaded by mistake: delete the chat, report to information security immediately.</li><li>Incorrect result already sent: inform recipients, involve the use case owner.</li><li>New use involving personal data or automation: apply to the AI board.</li></ol>" +
          "<h3>Data classes and tools</h3><p>Map each class of your {{datenklassifizierung|data classification}} to permitted tools and enforce it technically through groups and connector approvals.</p>" +
          "<h3>Legal framework</h3><ul><li>EU: the {{ai-act}}, Art. 4, has required sufficient AI literacy among staff since 2 February 2025. This workshop is one building block.</li><li>{{aup|Usage Policy}}: human review in high-risk areas from 12 November 2026.</li><li>{{dsgvo|GDPR}} and, where applicable, co-determination when introducing technical systems.</li></ul>" +
          "<h3>Anthropic’s approach</h3><p>The Enterprise AI Transformation Guide recommends three phases: foundation (executive support, steering committee, clear governance), pilots showing value in 30 to 60 days, adoption through structured training. Measure adoption, efficiency, quality and satisfaction.</p>" +
          '<p class="source">Sources: ' + a("https://resources.anthropic.com/enterprise-ai-transformation-guide", "Enterprise AI Transformation Guide") + ", " + a(S.aup, "Usage Policy") + ", " + a(S.roles, "roles and groups") + "</p>"
      }
    },

    "demo-skript": {
      de: {
        title: "Skript für die Live-Demo",
        html:
          "<p>Dauer etwa 30 Minuten. Material: ein öffentlicher Mustervertrag oder ein anonymisierter Lieferantenvertrag, ein Firmenkonto mit Claude Team oder Enterprise.</p>" +
          "<h3>1. Workspace einrichten</h3><p>Projekt „Vertragsprüfung Einkauf“ anlegen. Projektanweisung:</p><p><em>„Du unterstützt den Einkauf bei der Prüfung von Lieferantenverträgen. Antworte auf Deutsch, sachlich, mit Tabelle. Stütze jede Aussage auf ein wörtliches Zitat mit Abschnittsnummer. Wenn der Vertrag etwas nicht regelt, schreibe ‚nicht geregelt‘.“</em></p>" +
          "<h3>2. Dokument hochladen</h3><p>Vorher laut prüfen: Datenklasse? Personendaten? Geheimhaltungsklausel? Namen von Ansprechpartnern bei Bedarf schwärzen.</p>" +
          "<h3>3. Analysieren und prüfen</h3><p><em>„Liste Laufzeit, Kündigungsfristen, Haftungsbegrenzung, Gerichtsstand und Preisanpassung auf. Markiere Abweichungen von üblichen Standards und begründe sie mit Zitat.“</em> Danach zwei Stichproben gemeinsam im Original nachschlagen. Anschließend: <em>„Welche deiner Aussagen ist am unsichersten und warum?“</em></p>" +
          "<h3>4. Governance anwenden</h3><p>In der Administration zeigen: Gruppen, freigegebene Konnektoren, Löschfrist, Audit-Log-Eintrag des Uploads. Teilen nur mit dem Projektteam.</p>" +
          "<h3>5. Sicher exportieren</h3><p>Tabelle als Dokument exportieren, Vermerk „Mit KI erstellt, fachlich geprüft von …“ ergänzen, in der freigegebenen Ablage speichern.</p>"
      },
      en: {
        title: "Live demo script",
        html:
          "<p>About 30 minutes. Material: a public sample contract or an anonymised supplier contract, a company account on Claude Team or Enterprise.</p>" +
          "<h3>1. Set up the workspace</h3><p>Create the project “Procurement contract review”. Project instructions:</p><p><em>“You support procurement in reviewing supplier contracts. Answer in English, factually, as a table. Back every statement with a verbatim quote and section number. If the contract does not cover something, write ‘not covered’.”</em></p>" +
          "<h3>2. Upload the document</h3><p>Check out loud first: data class? Personal data? Confidentiality clause? Redact contact names if needed.</p>" +
          "<h3>3. Analyse and review</h3><p><em>“List term, notice periods, limitation of liability, jurisdiction and price adjustment. Flag deviations from common standards and justify them with a quote.”</em> Then look up two samples together in the original. Follow with: <em>“Which of your statements is least certain, and why?”</em></p>" +
          "<h3>4. Apply governance</h3><p>Show in the admin console: groups, approved connectors, retention period, audit log entry for the upload. Share with the project team only.</p>" +
          "<h3>5. Export safely</h3><p>Export the table as a document, add a note “Created with AI, reviewed by …”, save it to the approved repository.</p>"
      }
    },

    "prompt-beispiele": {
      de: {
        title: "Prompt-Beispiele für typische Aufgaben",
        html:
          "<h3>Vertragsanalyse</h3><p><em>„Prüfe den beigefügten Vertrag gegen unser Muster. Liste jede Abweichung mit Fundstelle, Risiko (niedrig, mittel, hoch) und einem Formulierungsvorschlag. Zitiere wörtlich.“</em></p>" +
          "<h3>Anforderungen extrahieren</h3><p><em>„Extrahiere aus der Ausschreibung alle Anforderungen als Tabelle: ID, Anforderung, Muss oder Kann, Fundstelle. Markiere widersprüchliche oder unklare Anforderungen gesondert.“</em></p>" +
          "<h3>Zusammenfassen</h3><p><em>„Fasse das Protokoll für die Geschäftsführung auf einer halben Seite zusammen: Entscheidungen, offene Punkte mit Verantwortlichen, Risiken. Keine Interpretation über den Text hinaus.“</em></p>" +
          "<h3>Risiken erkennen</h3><p><em>„Welche Risiken für Termin, Kosten und Qualität enthält der Statusbericht? Begründe jedes mit einem Zitat und schlage eine Frage vor, die ich dem Projektleiter stellen sollte.“</em></p>" +
          "<h3>Wissen finden</h3><p><em>„Beantworte die Frage nur auf Basis der Reiserichtlinie im Projekt. Nenne Abschnitt und Wortlaut. Wenn die Richtlinie die Frage nicht beantwortet, sag das.“</em></p>" +
          "<h3>Gegenprobe</h3><p><em>„Spiele die kritischste Person im Lenkungsausschuss. Welche drei Einwände hätte sie gegen deine Empfehlung?“</em></p>"
      },
      en: {
        title: "Prompt examples for typical tasks",
        html:
          "<h3>Contract analysis</h3><p><em>“Check the attached contract against our template. List each deviation with its location, risk (low, medium, high) and a suggested wording. Quote verbatim.”</em></p>" +
          "<h3>Requirement extraction</h3><p><em>“Extract all requirements from the tender as a table: ID, requirement, must or may, location. Flag contradictory or unclear requirements separately.”</em></p>" +
          "<h3>Summarisation</h3><p><em>“Summarise the minutes for the executive team in half a page: decisions, open items with owners, risks. No interpretation beyond the text.”</em></p>" +
          "<h3>Risk identification</h3><p><em>“Which schedule, cost and quality risks does the status report contain? Justify each with a quote and suggest a question I should ask the project lead.”</em></p>" +
          "<h3>Knowledge retrieval</h3><p><em>“Answer only based on the travel policy in this project. Give section and wording. If the policy doesn’t answer the question, say so.”</em></p>" +
          "<h3>Counter-check</h3><p><em>“Play the most critical member of the steering committee. What three objections would they raise to your recommendation?”</em></p>"
      }
    },

    "quellen": {
      de: {
        title: "Quellen",
        html:
          "<p>Alle Angaben wurden am 2. November 2026 auf den folgenden Seiten geprüft. Produkte, Regionen und Verträge ändern sich; vor Entscheidungen bitte erneut prüfen.</p>" +
          "<h3>Datenschutz, Verträge, Sicherheit</h3><ul>" +
          "<li>" + a(S.location, "Anthropic Privacy Center: Speicherort und Verarbeitung") + "</li>" +
          "<li>" + a(S.residency, "Claude-Dokumentation: Data Residency") + "</li>" +
          "<li>" + a(S.training, "Privacy Center: Nutzung für Training") + "</li>" +
          "<li>" + a(S.retention, "Privacy Center: Aufbewahrung") + "</li>" +
          "<li>" + a(S.zdr, "Claude-Dokumentation: API und Aufbewahrung") + "</li>" +
          "<li>" + a(S.dpa, "Data Processing Addendum") + "</li>" +
          "<li>" + a(S.subproc, "Unterauftragsverarbeiter (Trust Center)") + "</li>" +
          "<li>" + a(S.certs, "Zertifizierungen") + "</li>" +
          "<li>" + a(S.sso, "SSO") + ", " + a(S.roles, "Rollen") + ", " + a(S.audit, "Audit-Logs") + ", " + a(S.cmek, "CMEK") + "</li>" +
          "<li>" + a(S.bedrock, "Claude in Amazon Bedrock") + ", " + a(S.vertex, "Google Cloud Data Residency") + ", " + a(S.foundry, "Microsoft Foundry") + "</li>" +
          "<li>" + a(S.aup, "Anthropic Usage Policy") + "</li></ul>" +
          "<h3>Forschung und Beispiele</h3><ul>" +
          "<li>" + a(S.eiJan, "Anthropic Economic Index, Januar 2026") + "</li>" +
          "<li>" + a(S.eiJun, "Anthropic Economic Index, Juni 2026") + "</li>" +
          "<li>" + a(S.prod, "Anthropic: Estimating AI productivity gains, November 2025") + "</li>" +
          "<li>" + a(S.labor, "Anthropic: Labor market impacts, März 2026") + "</li>" +
          "<li>" + a(S.wef, "World Economic Forum: Future of Jobs Report 2025") + "</li>" +
          "<li>" + a(S.halluc, "Claude-Dokumentation: Reduce hallucinations") + "</li>" +
          "<li>" + a("https://claude.com/customers", "Kundenbeispiele auf claude.com") + ", " + a("https://allianz.com/en/mediacenter/news/media-releases/260109-allianz-and-anthropic-forge-global-partnership.html", "Allianz-Pressemitteilung") + "</li></ul>" +
          "<h3>Nicht bestätigt</h3><p>Die Teilnahme Anthropics am EU-US Data Privacy Framework und die vertragschließende Gesellschaft für EU-Unternehmenskunden ließen sich in den öffentlichen Unterlagen nicht bestätigen. Für Endnutzer in EWR, UK und Schweiz nennt die Datenschutzerklärung Anthropic Ireland, Limited als Verantwortliche.</p>"
      },
      en: {
        title: "Sources",
        html:
          "<p>All statements were checked on the following pages on 2 November 2026. Products, regions and contracts change; please check again before making decisions.</p>" +
          "<h3>Data protection, contracts, security</h3><ul>" +
          "<li>" + a(S.location, "Anthropic Privacy Center: storage and processing") + "</li>" +
          "<li>" + a(S.residency, "Claude docs: data residency") + "</li>" +
          "<li>" + a(S.training, "Privacy Center: model training") + "</li>" +
          "<li>" + a(S.retention, "Privacy Center: retention") + "</li>" +
          "<li>" + a(S.zdr, "Claude docs: API and data retention") + "</li>" +
          "<li>" + a(S.dpa, "Data Processing Addendum") + "</li>" +
          "<li>" + a(S.subproc, "Sub-processors (Trust Center)") + "</li>" +
          "<li>" + a(S.certs, "Certifications") + "</li>" +
          "<li>" + a(S.sso, "SSO") + ", " + a(S.roles, "roles") + ", " + a(S.audit, "audit logs") + ", " + a(S.cmek, "CMEK") + "</li>" +
          "<li>" + a(S.bedrock, "Claude in Amazon Bedrock") + ", " + a(S.vertex, "Google Cloud data residency") + ", " + a(S.foundry, "Microsoft Foundry") + "</li>" +
          "<li>" + a(S.aup, "Anthropic Usage Policy") + "</li></ul>" +
          "<h3>Research and examples</h3><ul>" +
          "<li>" + a(S.eiJan, "Anthropic Economic Index, January 2026") + "</li>" +
          "<li>" + a(S.eiJun, "Anthropic Economic Index, June 2026") + "</li>" +
          "<li>" + a(S.prod, "Anthropic: Estimating AI productivity gains, November 2025") + "</li>" +
          "<li>" + a(S.labor, "Anthropic: Labor market impacts, March 2026") + "</li>" +
          "<li>" + a(S.wef, "World Economic Forum: Future of Jobs Report 2025") + "</li>" +
          "<li>" + a(S.halluc, "Claude docs: reduce hallucinations") + "</li>" +
          "<li>" + a("https://claude.com/customers", "Customer stories on claude.com") + ", " + a("https://allianz.com/en/mediacenter/news/media-releases/260109-allianz-and-anthropic-forge-global-partnership.html", "Allianz press release") + "</li></ul>" +
          "<h3>Not confirmed</h3><p>Anthropic’s participation in the EU-US Data Privacy Framework and the contracting entity for EU business customers could not be confirmed in public documents. For end users in the EEA, UK and Switzerland, the privacy policy names Anthropic Ireland, Limited as controller.</p>"
      }
    }
  };
})(window.KAIROS);
