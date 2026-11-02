/* KAIROS AI Campus – Oberfläche und Begriffe (DE/EN)
   Begriffe werden im Text mit {{id}} oder {{id|eigener Text}} markiert und zeigen beim Überfahren eine Erklärung. */
window.KAIROS = {
  ui: {
    de: {
      docTitle: "KAIROS AI Campus – Claude verstehen und sicher nutzen",
      skip: "Zum Inhalt springen",
      overview: "Übersicht",
      close: "Schließen",
      deepKicker: "Vertiefung",
      deepOpen: "Vertiefung",
      chapter: "Kapitel",
      fullscreen: "Vollbild",
      prev: "Vorherige Folie",
      next: "Nächste Folie",
      tools: "Werkzeuge",
      home: "KAIROS AI Campus – zum Anfang",
      voiceToggle: "Feld von Jens Sattler ein- oder ausklappen",
      keys: "Tasten: ↓ oder → weiter, ↑ oder ← zurück, O Übersicht, F Vollbild, D Deutsch, E Englisch.",
      chapters: [
        "Prolog",
        "Einführung",
        "Kapitel 1: Claude kennenlernen",
        "Kapitel 2: Anwendungsfälle",
        "Kapitel 3: Datenschutz",
        "Kapitel 4: Datenstandorte",
        "Kapitel 5: Sicherheit",
        "Kapitel 6: Verantwortungsvoll einsetzen",
        "Kapitel 7: Governance",
        "Kapitel 8: Praxis",
        "Kapitel 9: Zukunft der Arbeit",
        "Pflichtfragen",
        "Abschluss"
      ]
    },
    en: {
      docTitle: "KAIROS AI Campus – Understanding and using Claude safely",
      skip: "Skip to content",
      overview: "Overview",
      close: "Close",
      deepKicker: "Deep dive",
      deepOpen: "Deep dive",
      chapter: "Chapter",
      fullscreen: "Full screen",
      prev: "Previous slide",
      next: "Next slide",
      tools: "Tools",
      home: "KAIROS AI Campus – back to start",
      voiceToggle: "Show or hide Jens Sattler’s panel",
      keys: "Keys: ↓ or → next, ↑ or ← back, O overview, F full screen, D German, E English.",
      chapters: [
        "Prologue",
        "Introduction",
        "Chapter 1: Meet Claude",
        "Chapter 2: Use cases",
        "Chapter 3: Data protection",
        "Chapter 4: Data residency",
        "Chapter 5: Security",
        "Chapter 6: Responsible use",
        "Chapter 7: Governance",
        "Chapter 8: Hands-on",
        "Chapter 9: Future of work",
        "Mandatory questions",
        "Wrap-up"
      ]
    }
  },

  glossary: {
    "llm": {
      de: ["Großes Sprachmodell (LLM)", "Ein KI-Modell, das an sehr vielen Texten trainiert wurde und daraus Wahrscheinlichkeiten für das nächste Wort ableitet. Es versteht und erzeugt Sprache, ist aber keine Datenbank mit geprüften Fakten."],
      en: ["Large language model (LLM)", "An AI model trained on vast amounts of text that predicts the most likely next word. It understands and produces language, but it is not a database of verified facts."]
    },
    "token": {
      de: ["Token", "Die Einheit, in der ein Sprachmodell Text liest und schreibt: Wortteile von meist 3 bis 4 Zeichen. Abrechnung und Kontextgrenzen werden in Token gemessen."],
      en: ["Token", "The unit a language model reads and writes: word pieces of usually 3 to 4 characters. Pricing and context limits are measured in tokens."]
    },
    "kontextfenster": {
      de: ["Kontextfenster", "Wie viel Text Claude in einer Unterhaltung gleichzeitig berücksichtigen kann: Ihre Fragen, Dokumente und seine Antworten. Bei den aktuellen Modellen bis zu 1 Million Token."],
      en: ["Context window", "How much text Claude can take into account at once in a conversation: your questions, documents and its own answers. Up to 1 million tokens for the current models."]
    },
    "halluzination": {
      de: ["Halluzination", "Eine Antwort, die überzeugend klingt, aber falsch oder erfunden ist, etwa eine nicht existierende Quelle. Entsteht, weil das Modell Wahrscheinlichkeiten erzeugt, nicht Wissen nachschlägt."],
      en: ["Hallucination", "An answer that sounds convincing but is wrong or made up, such as a source that does not exist. It happens because the model generates probabilities rather than looking up facts."]
    },
    "prompt": {
      de: ["Prompt", "Die Anweisung oder Frage, die Sie Claude geben. Je klarer Aufgabe, Kontext und gewünschtes Ergebnis beschrieben sind, desto besser die Antwort."],
      en: ["Prompt", "The instruction or question you give Claude. The clearer the task, context and expected result, the better the answer."]
    },
    "wissensstand": {
      de: ["Wissensstand", "Der Zeitpunkt, bis zu dem die Trainingsdaten eines Modells reichen. Bei den aktuellen Claude-Modellen Juni 2026. Neueres weiß Claude nur über Websuche oder Ihre Dokumente."],
      en: ["Knowledge cutoff", "The date up to which a model’s training data reaches. June 2026 for the current Claude models. Claude only knows newer things through web search or your documents."]
    },
    "mcp": {
      de: ["Model Context Protocol (MCP)", "Ein offener Standard, über den Claude an andere Systeme angebunden wird, etwa Dokumentablagen, Ticketsysteme oder Datenbanken. Jede Anbindung ist ein Konnektor."],
      en: ["Model Context Protocol (MCP)", "An open standard for connecting Claude to other systems such as document stores, ticketing tools or databases. Each such link is a connector."]
    },
    "konnektor": {
      de: ["Konnektor", "Eine Anbindung, über die Claude Daten aus einem anderen System lesen oder dort handeln kann. Administratoren können Konnektoren erlauben, freigeben lassen oder sperren."],
      en: ["Connector", "A link that lets Claude read data from another system or act in it. Admins can allow connectors, require approval or block them."]
    },
    "api": {
      de: ["API", "Programmierschnittstelle. Darüber binden Entwickler Claude in eigene Anwendungen und Abläufe ein, ohne die Chat-Oberfläche zu nutzen."],
      en: ["API", "Application programming interface. Developers use it to build Claude into their own applications and workflows without the chat interface."]
    },
    "agent": {
      de: ["KI-Agent", "Claude arbeitet dabei mehrere Schritte selbstständig ab: plant, nutzt Werkzeuge, prüft Zwischenergebnisse. Je mehr Eigenständigkeit, desto wichtiger sind klare Grenzen und Kontrollen."],
      en: ["AI agent", "Claude works through several steps on its own: planning, using tools, checking intermediate results. The more autonomy, the more important clear limits and controls become."]
    },
    "projekte": {
      de: ["Projekte", "Arbeitsbereiche in Claude mit eigenen Anweisungen und Dokumenten. Alle Unterhaltungen im Projekt greifen auf dieses Wissen zu. Im Team teilbar."],
      en: ["Projects", "Workspaces in Claude with their own instructions and documents. Every conversation in the project can use that knowledge. Shareable within a team."]
    },
    "artifact": {
      de: ["Artifact", "Ein eigenständiges Ergebnis, das Claude neben dem Chat erstellt, etwa ein Dokument, eine Tabelle, ein Diagramm oder eine kleine Anwendung, und das man weiterbearbeiten und teilen kann."],
      en: ["Artifact", "A standalone output Claude creates next to the chat, such as a document, table, diagram or small app, which you can keep editing and share."]
    },
    "skill": {
      de: ["Skill", "Ein Paket aus Anweisungen und Vorlagen, das Claude für eine bestimmte Aufgabe nutzt, zum Beispiel Berichte im Firmenformat erstellen. Unternehmen können eigene Skills bereitstellen."],
      en: ["Skill", "A package of instructions and templates Claude uses for a specific task, for example producing reports in the company format. Organisations can provide their own skills."]
    },
    "cowork": {
      de: ["Cowork", "Arbeitsmodus, in dem Claude längere Aufgaben selbstständig erledigt, etwa Dateien auswerten, Dokumente erstellen oder mehrere Schritte über Anwendungen hinweg."],
      en: ["Cowork", "A mode in which Claude completes longer tasks on its own, such as analysing files, producing documents or working through several steps across applications."]
    },
    "claude-code": {
      de: ["Claude Code", "Claude als Entwicklungswerkzeug: liest Code, schreibt und testet Änderungen, erledigt Migrationen. Läuft im Terminal, in der Entwicklungsumgebung oder im Web."],
      en: ["Claude Code", "Claude as a development tool: it reads code, writes and tests changes, and handles migrations. Runs in the terminal, in the IDE or on the web."]
    },
    "sso": {
      de: ["Single Sign-on (SSO)", "Anmeldung mit dem Firmenkonto über den zentralen Identitätsanbieter, etwa Microsoft Entra ID oder Okta. Mehrfaktor-Anmeldung und Sperren laufen dann zentral."],
      en: ["Single sign-on (SSO)", "Sign-in with the company account through the central identity provider, for example Microsoft Entra ID or Okta. Multi-factor sign-in and blocking are then managed centrally."]
    },
    "saml": {
      de: ["SAML", "Ein Standardprotokoll, über das der Identitätsanbieter einer Anwendung bestätigt, wer sich anmeldet. Grundlage vieler SSO-Lösungen."],
      en: ["SAML", "A standard protocol through which the identity provider confirms to an application who is signing in. The basis of many SSO setups."]
    },
    "scim": {
      de: ["SCIM", "Standard zur automatischen Benutzerverwaltung: Wer im Firmenverzeichnis angelegt, verschoben oder entfernt wird, wird in Claude automatisch angelegt, umgruppiert oder gesperrt."],
      en: ["SCIM", "A standard for automatic user management: whoever is added, moved or removed in the company directory is automatically created, regrouped or disabled in Claude."]
    },
    "rbac": {
      de: ["Rollenbasierte Zugriffskontrolle (RBAC)", "Rechte hängen an Rollen und Gruppen statt an einzelnen Personen. In Claude Enterprise steuern Gruppen, welche Funktionen, Konnektoren und Modelle jemand nutzen darf."],
      en: ["Role-based access control (RBAC)", "Permissions attach to roles and groups rather than individuals. In Claude Enterprise, groups control which features, connectors and models someone may use."]
    },
    "audit-log": {
      de: ["Audit-Log", "Protokoll, wer wann was getan hat, etwa Anmeldungen, Freigaben, Einstellungsänderungen. In Claude Enterprise als Export für 180 Tage abrufbar."],
      en: ["Audit log", "A record of who did what and when, such as sign-ins, sharing and settings changes. Exportable for 180 days in Claude Enterprise."]
    },
    "compliance-api": {
      de: ["Compliance-API", "Schnittstelle, über die Compliance- und Sicherheitsteams Aktivitäten, Chats und Dateien in eigene Prüf- und Archivsysteme übernehmen können."],
      en: ["Compliance API", "An interface through which compliance and security teams can pull activity, chats and files into their own review and archiving systems."]
    },
    "cmek": {
      de: ["Kundenverwaltete Schlüssel (CMEK)", "Die Daten werden mit einem Schlüssel verschlüsselt, den Ihr Unternehmen in seinem eigenen Schlüsseldienst verwaltet (AWS KMS, Google Cloud KMS, Azure Key Vault) und jederzeit entziehen kann."],
      en: ["Customer-managed encryption keys (CMEK)", "Data is encrypted with a key your organisation manages in its own key service (AWS KMS, Google Cloud KMS, Azure Key Vault) and can revoke at any time."]
    },
    "zdr": {
      de: ["Zero Data Retention (ZDR)", "Vereinbarung für die API, nach der Ein- und Ausgaben nach der Verarbeitung nicht gespeichert werden. Auf Anfrage, nicht für alle Funktionen und Modelle verfügbar."],
      en: ["Zero Data Retention (ZDR)", "An API arrangement under which inputs and outputs are not stored after processing. Available on request, not for every feature or model."]
    },
    "dsgvo": {
      de: ["DSGVO", "Datenschutz-Grundverordnung der EU. Regelt, wann und wie personenbezogene Daten verarbeitet werden dürfen. Im Vereinigten Königreich gilt die inhaltlich ähnliche UK GDPR."],
      en: ["GDPR", "The EU General Data Protection Regulation. It governs when and how personal data may be processed. The UK applies the very similar UK GDPR."]
    },
    "avv": {
      de: ["Auftragsverarbeitungsvertrag (AVV, engl. DPA)", "Vertrag nach Art. 28 DSGVO, der regelt, wie ein Dienstleister personenbezogene Daten in Ihrem Auftrag verarbeitet. Bei Anthropic ist er Teil der kommerziellen Bedingungen."],
      en: ["Data processing agreement (DPA)", "The Article 28 GDPR contract governing how a provider processes personal data on your behalf. At Anthropic it is part of the commercial terms."]
    },
    "scc": {
      de: ["Standardvertragsklauseln (SCC)", "Von der EU-Kommission vorgegebene Vertragsklauseln, mit denen personenbezogene Daten rechtmäßig in Länder außerhalb der EU übermittelt werden können, etwa in die USA."],
      en: ["Standard contractual clauses (SCCs)", "Contract clauses issued by the European Commission that allow personal data to be transferred lawfully to countries outside the EU, such as the US."]
    },
    "uk-addendum": {
      de: ["UK-Addendum", "Ergänzung zu den Standardvertragsklauseln, mit der sie auch für Übermittlungen aus dem Vereinigten Königreich gelten."],
      en: ["UK Addendum", "An addendum that makes the standard contractual clauses valid for transfers from the United Kingdom as well."]
    },
    "verantwortlicher": {
      de: ["Verantwortlicher", "Wer über Zweck und Mittel einer Datenverarbeitung entscheidet. Beim Einsatz von Claude im Unternehmen ist das Ihre Organisation."],
      en: ["Controller", "Whoever decides on the purpose and means of processing personal data. When Claude is used in a company, that is your organisation."]
    },
    "auftragsverarbeiter": {
      de: ["Auftragsverarbeiter", "Ein Dienstleister, der personenbezogene Daten nur nach Ihren Weisungen verarbeitet. Für kommerzielle Claude-Produkte ist das Anthropic, über Cloud-Marktplätze auch der Cloud-Anbieter."],
      en: ["Processor", "A provider that processes personal data only on your instructions. For commercial Claude products that is Anthropic, and via cloud marketplaces also the cloud provider."]
    },
    "unterauftragsverarbeiter": {
      de: ["Unterauftragsverarbeiter", "Weitere Dienstleister, die der Auftragsverarbeiter einsetzt, etwa Rechenzentrumsbetreiber. Anthropic veröffentlicht die Liste und informiert über neue Einträge."],
      en: ["Sub-processor", "Further providers the processor uses, such as data centre operators. Anthropic publishes the list and gives notice of new entries."]
    },
    "drittland": {
      de: ["Drittlandübermittlung", "Weitergabe personenbezogener Daten in ein Land außerhalb von EU und EWR. Nur mit besonderer Grundlage zulässig, etwa Standardvertragsklauseln."],
      en: ["International transfer", "Sending personal data to a country outside the EU/EEA. Only permitted on a specific legal basis, such as standard contractual clauses."]
    },
    "tia": {
      de: ["Transfer-Folgenabschätzung (TIA)", "Prüfung, ob die Daten im Zielland trotz Standardvertragsklauseln ausreichend geschützt sind, etwa vor behördlichem Zugriff."],
      en: ["Transfer impact assessment (TIA)", "An assessment of whether data remains adequately protected in the destination country despite standard contractual clauses, for example against government access."]
    },
    "dsfa": {
      de: ["Datenschutz-Folgenabschätzung (DSFA)", "Pflicht nach Art. 35 DSGVO, wenn eine Verarbeitung voraussichtlich ein hohes Risiko für Betroffene hat. Bei KI-Einsatz mit Personendaten oft angebracht."],
      en: ["Data protection impact assessment (DPIA)", "Required by Article 35 GDPR when processing is likely to pose a high risk to individuals. Often appropriate when AI processes personal data."]
    },
    "pii": {
      de: ["Personenbezogene Daten", "Alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen: Name, E-Mail, Personalnummer, aber auch eine Kombination aus Merkmalen."],
      en: ["Personal data (PII)", "Any information relating to an identified or identifiable person: name, email, employee number, but also a combination of attributes."]
    },
    "art9": {
      de: ["Besondere Kategorien (Art. 9 DSGVO)", "Besonders schutzbedürftige Daten: Gesundheit, Herkunft, Religion, politische Meinung, Gewerkschaftszugehörigkeit, Sexualleben, genetische und biometrische Daten."],
      en: ["Special categories (Art. 9 GDPR)", "Particularly sensitive data: health, ethnic origin, religion, political opinions, trade union membership, sex life, genetic and biometric data."]
    },
    "pseudonymisierung": {
      de: ["Pseudonymisierung", "Namen und direkte Kennungen werden durch Platzhalter ersetzt. Die Zuordnung ist nur mit getrennt aufbewahrten Zusatzinformationen möglich."],
      en: ["Pseudonymisation", "Names and direct identifiers are replaced with placeholders. Re-identification is only possible with additional information kept separately."]
    },
    "inference-geo": {
      de: ["Inferenz-Region", "Einstellung der Claude-API, wo die Berechnung einer Antwort stattfindet: global (Standard) oder nur in den USA. Eine EU-Option bietet Anthropic direkt derzeit nicht."],
      en: ["Inference geography", "A Claude API setting for where an answer is computed: global (default) or US only. Anthropic does not currently offer an EU option directly."]
    },
    "inferenz": {
      de: ["Inferenz", "Der Moment, in dem das Modell eine Antwort berechnet. Wo das geschieht, kann sich vom Speicherort der Daten unterscheiden."],
      en: ["Inference", "The moment the model computes an answer. Where this happens can differ from where data is stored."]
    },
    "bedrock": {
      de: ["Amazon Bedrock", "KI-Plattform von AWS, über die Claude-Modelle in AWS-Regionen genutzt werden, auch in der EU. Vertragspartner und Auftragsverarbeiter ist dann AWS."],
      en: ["Amazon Bedrock", "AWS’s AI platform for using Claude models in AWS regions, including the EU. AWS is then the contracting party and processor."]
    },
    "vertex": {
      de: ["Google Cloud Vertex AI", "KI-Plattform von Google Cloud. Claude ist dort als Partnermodell verfügbar, auch in einer EU-Multiregion und einzelnen EU-Regionen."],
      en: ["Google Cloud Vertex AI", "Google Cloud’s AI platform. Claude is available there as a partner model, including an EU multi-region and individual EU regions."]
    },
    "foundry": {
      de: ["Microsoft Foundry", "KI-Plattform in Microsoft Azure, über die auch Claude-Modelle angeboten werden. Eine EU-Datenzone für Claude ist dort noch nicht verfügbar."],
      en: ["Microsoft Foundry", "The AI platform in Microsoft Azure that also offers Claude models. An EU data zone for Claude is not yet available there."]
    },
    "soc2": {
      de: ["SOC 2 Typ II", "Prüfbericht unabhängiger Wirtschaftsprüfer, dass Sicherheitskontrollen nicht nur existieren, sondern über einen längeren Zeitraum wirksam waren."],
      en: ["SOC 2 Type II", "An independent auditor’s report that security controls not only exist but operated effectively over an extended period."]
    },
    "iso27001": {
      de: ["ISO/IEC 27001", "Internationaler Standard für Informationssicherheits-Managementsysteme. Die Zertifizierung belegt ein geprüftes, gelebtes Sicherheitsmanagement."],
      en: ["ISO/IEC 27001", "The international standard for information security management systems. Certification shows audited, operating security management."]
    },
    "iso42001": {
      de: ["ISO/IEC 42001", "Erster internationaler Standard für KI-Managementsysteme: verantwortungsvolle Entwicklung, Risikobewertung und Kontrolle von KI."],
      en: ["ISO/IEC 42001", "The first international standard for AI management systems: responsible development, risk assessment and control of AI."]
    },
    "hipaa": {
      de: ["HIPAA", "US-Gesetz zum Schutz von Gesundheitsdaten. Für Europa nicht maßgeblich, zeigt aber, dass besonders strenge Konfigurationen möglich sind."],
      en: ["HIPAA", "US law protecting health information. Not decisive in Europe, but it shows that particularly strict configurations are possible."]
    },
    "bias": {
      de: ["Bias (Verzerrung)", "Systematische Schieflage in Antworten, etwa weil Trainingsdaten bestimmte Gruppen oder Sichtweisen über- oder unterrepräsentieren."],
      en: ["Bias", "A systematic skew in answers, for example because training data over- or under-represents certain groups or viewpoints."]
    },
    "zitate": {
      de: ["Zitate (Citations)", "Claude belegt Aussagen mit den genauen Textstellen aus Ihren Dokumenten. So lässt sich jede Aussage an der Quelle prüfen."],
      en: ["Citations", "Claude backs statements with the exact passages from your documents, so every claim can be checked against its source."]
    },
    "ai-act": {
      de: ["EU AI Act", "Die KI-Verordnung der EU. Seit 2. Februar 2025 müssen Unternehmen, die KI einsetzen, für ausreichende KI-Kompetenz ihrer Beschäftigten sorgen (Art. 4)."],
      en: ["EU AI Act", "The EU’s AI regulation. Since 2 February 2025, organisations that deploy AI must ensure sufficient AI literacy among their staff (Art. 4)."]
    },
    "aup": {
      de: ["Nutzungsrichtlinie (Usage Policy)", "Regeln von Anthropic, wofür Claude nicht genutzt werden darf. Die Fassung ab 12. November 2026 verlangt in Hochrisikobereichen eine echte Prüfung durch eine qualifizierte Person."],
      en: ["Usage Policy", "Anthropic’s rules on what Claude may not be used for. The version effective 12 November 2026 requires meaningful review by a qualified person in high-risk areas."]
    },
    "augmentation": {
      de: ["Augmentation", "Claude unterstützt einen Menschen, der mitdenkt, prüft und entscheidet. Gegenstück zur Automatisierung, bei der Claude eine Aufgabe weitgehend allein erledigt."],
      en: ["Augmentation", "Claude supports a person who thinks along, checks and decides. The counterpart to automation, where Claude completes a task largely on its own."]
    },
    "wissensbasis": {
      de: ["Wissensbasis", "Die Dokumente, Anweisungen und Beispiele, die Sie Claude zu einer Aufgabe mitgeben. Sie entscheidet oft mehr über die Qualität als die Frage selbst."],
      en: ["Knowledge base", "The documents, instructions and examples you give Claude for a task. It often matters more for quality than the question itself."]
    },
    "datenklassifizierung": {
      de: ["Datenklassifizierung", "Einstufung von Informationen nach Schutzbedarf, typischerweise öffentlich, intern, vertraulich und streng vertraulich. Bestimmt, welches Werkzeug genutzt werden darf."],
      en: ["Data classification", "Grading information by protection need, typically public, internal, confidential and strictly confidential. It determines which tool may be used."]
    },
    "prompt-injection": {
      de: ["Prompt Injection", "Versteckte Anweisungen in Dokumenten, Webseiten oder E-Mails, die versuchen, Claude zu etwas anderem zu bewegen, als Sie wollten. Relevant, sobald Claude fremde Inhalte liest oder handelt."],
      en: ["Prompt injection", "Hidden instructions in documents, web pages or emails that try to make Claude do something other than what you intended. Relevant whenever Claude reads external content or takes actions."]
    }
  }
};
