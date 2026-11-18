import type { Locale } from "./i18n";

export const profile = {
  name: "Pablo Bottoni",
  email: "polches@gmail.com",
  linkedin: "https://www.linkedin.com/in/pablo-bottoni-3a5621255",
  github: "https://github.com/PabNic",
  cv: "/Pablo_Bottoni_CV.pdf",
  site: "https://thaskaandina.com.ar",
};

export type ProjectSlug =
  | "thaska-andina"
  | "snowride"
  | "travel-quote-agent"
  | "content-agent"
  | "nomad-locals";

export type Project = {
  slug: ProjectSlug;
  name: string;
  kicker: string;
  oneLiner: string;
  role: string;
  period: string;
  status: string;
  live?: string;
  repo?: string;
  hats: ("ai" | "eng" | "pm")[];
  stack: string[];
  cover?: string;
  highlights: string[];
  caseStudy: {
    metrics?: { value: string; label: string }[];
    context: string;
    problem: string;
    decisions: { title: string; body: string }[];
    architecture?: string[];
    outcome: string[];
    gallery?: { src: string; alt: string; caption: string; mobile?: boolean }[];
    learned: string;
  };
};

type Content = {
  meta: { title: string; description: string };
  nav: { work: string; about: string; experience: string; ask: string; contact: string; cv: string };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lede: string;
    ctaWork: string;
    ctaAsk: string;
    badges: string[];
    photoAlt: string;
    now: { label: string; text: string };
  };
  stats: { value: string; label: string }[];
  work: { eyebrow: string; title: string; lede: string; readCase: string; visit: string; featured: string };
  hats: {
    eyebrow: string;
    title: string;
    items: { key: "ai" | "eng" | "pm"; title: string; body: string; proof: string[] }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: { company: string; role: string; period: string; body: string[] }[];
    education: { title: string; items: string[] };
  };
  skills: { eyebrow: string; title: string; groups: { name: string; items: string[] }[] };
  how: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  ask: {
    eyebrow: string;
    title: string;
    lede: string;
    placeholder: string;
    suggestions: string[];
    disclaimer: string;
    send: string;
    error: string;
    limit: string;
    thinking: string;
    toolLabels: Record<string, string>;
  };
  contact: { eyebrow: string; title: string; lede: string; email: string; copied: string; copy: string };
  footer: string;
  hatLabels: Record<"ai" | "eng" | "pm", string>;
  caseLabels: {
    back: string;
    role: string;
    period: string;
    status: string;
    stack: string;
    context: string;
    problem: string;
    decisions: string;
    architecture: string;
    outcome: string;
    learned: string;
    next: string;
    visit: string;
    code: string;
    cta: string;
  };
  projects: Project[];
};

const en: Content = {
  meta: {
    title: "Pablo Bottoni — AI Product Engineer",
    description:
      "AI Product Engineer who ships LLM-powered products end to end and leads the teams that build them. Full-stack (TypeScript, Next.js, Node.js, PostgreSQL) + Product Owner / PM. Remote, EU work authorization.",
  },
  nav: { work: "Work", about: "What I do", experience: "Experience", ask: "Ask my AI", contact: "Contact", cv: "Download CV" },
  hero: {
    eyebrow: "AI Product Engineer · Full-Stack · Technical PM",
    title: "I turn messy business problems",
    titleAccent: "into AI products people use.",
    lede: "5 years building full-stack web apps and 2 leading product teams of 4–8. I design the product, write the code and ship it — like the AI shopping assistant running in production at thaskaandina.com.ar.",
    ctaWork: "See my work",
    ctaAsk: "Ask my AI about me",
    badges: ["Remote · GMT-3", "EU work authorization (Italian citizen)", "English C1 · Spanish native · Portuguese (professional)"],
    photoAlt: "Pablo Bottoni",
    now: { label: "Now in production", text: "AI shopping assistant · Thaska Andina" },
  },
  stats: [
    { value: "5 yrs", label: "full-stack development" },
    { value: "2 yrs", label: "leading teams of 4–8" },
    { value: "3", label: "AI agents shipped" },
    { value: "1", label: "AI assistant live in production" },
  ],
  work: {
    eyebrow: "Selected work",
    title: "Products I've shipped and led",
    lede: "Real products with real users. Each one has a case study with the problem, the decisions and the trade-offs.",
    readCase: "Read case study",
    visit: "Visit live site",
    featured: "Featured · In production",
  },
  hats: {
    eyebrow: "What I do",
    title: "One person, three roles that usually live in three people.",
    items: [
      {
        key: "ai",
        title: "AI Product Engineer",
        body: "I build LLM features that are useful and safe to run: tool-calling agents, streaming UIs and guardrails on behavior and token cost.",
        proof: ["Tool-calling shopping assistant in production", "Claude agent workflows with browser automation", "Model-swappable via AI Gateway"],
      },
      {
        key: "eng",
        title: "Full-Stack Developer",
        body: "TypeScript end to end. I take products from schema to deploy, with tests and continuous delivery from day one.",
        proof: ["Next.js · React · Node.js · PostgreSQL · Prisma", "22-entity data model, payments with webhooks", "Preview per PR, Vitest, Vercel CI/CD"],
      },
      {
        key: "pm",
        title: "Technical PM / Product Owner",
        body: "I own the roadmap and the backlog, align stakeholders and keep teams shipping — and I speak engineering fluently.",
        proof: ["Led cross-functional teams of 4–8 with Scrum", "Defined journeys, state machines and acceptance criteria", "Founder: I own outcomes, not just tasks"],
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've done it",
    items: [
      {
        company: "Thaska Andina",
        role: "Project Manager & Lead Developer",
        period: "2025 — Present",
        body: [
          "Launched a production e-commerce platform end to end: catalog, cart, accounts, checkout and order tracking.",
          "Shipped an AI shopping assistant: a tool-calling agent over the live catalog with streaming and cost guardrails.",
          "Integrated Mercado Pago Checkout Bricks with webhooks, and built the full back office on a 22-entity data model.",
        ],
      },
      {
        company: "SnowRide",
        role: "Product Owner / Project Manager",
        period: "2025 — Present",
        body: [
          "Own the product for a two-sided marketplace that books certified ski, snowboard and kitesurf instructors.",
          "Defined role journeys, instructor verification and the booking state machine the team implemented.",
          "Lead a cross-functional team of 4–8 through Scrum, keeping scope, risks and dependencies visible.",
        ],
      },
      {
        company: "PatagonLabs",
        role: "Founder & Product Lead",
        period: "2024 — Present",
        body: [
          "Product studio: set vision, roadmap and execution for each product, leading teams across design and development.",
          "Designed and shipped Claude agent workflows for a travel agency: trip quoting and daily content generation.",
        ],
      },
      {
        company: "Nomad Locals",
        role: "Full-Stack Developer & Team Coordinator",
        period: "Jun — Aug 2023",
        body: [
          "Built a social platform from scratch with third-party login, geolocation and real-time chat, and coordinated sprint planning.",
        ],
      },
    ],
    education: {
      title: "Education & certifications",
      items: [
        "Agile Project Management (PMI-ACP prep) — UTN-FRBA, 2026 · Grade: Excellent",
        "Full-Stack Web Development Bootcamp — Soy Henry",
        "EF SET English Certificate — C1 Advanced",
        "Medicine, 4 years completed — Universidad Adventista del Plata",
      ],
    },
  },
  skills: {
    eyebrow: "Toolbox",
    title: "What I work with",
    groups: [
      { name: "AI / LLM", items: ["Vercel AI SDK", "Claude", "Tool calling & agents", "Streaming UIs", "Prompt engineering", "AI Gateway", "Cost guardrails", "RAG (concepts)"] },
      { name: "Engineering", items: ["TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs", "Tailwind CSS", "Vitest", "Vercel CI/CD"] },
      { name: "Product & Delivery", items: ["Product ownership", "Roadmapping", "Backlog management", "User stories & AC", "Scrum", "Kanban", "Stakeholder management", "KPI tracking", "Risk management"] },
      { name: "Tools", items: ["Jira", "ClickUp", "Notion", "Trello", "Postman", "GitHub"] },
    ],
  },
  how: {
    eyebrow: "How I work",
    title: "Principles I bring to a team",
    items: [
      { title: "Problem first", body: "I spend time understanding the user and the business before writing a ticket or a line of code." },
      { title: "Ship, then sharpen", body: "Small slices in production beat big plans. Every PR gets a preview, every merge goes live." },
      { title: "AI with guardrails", body: "Agents recommend, humans decide. I cap cost, scope tools tightly and test the behavior." },
      { title: "Translate both ways", body: "I turn business goals into clear stories for engineers, and technical trade-offs into decisions for stakeholders." },
    ],
  },
  ask: {
    eyebrow: "Live demo",
    title: "Don't take my word for it. Ask my AI.",
    lede: "This is a tool-calling agent I built with the Vercel AI SDK. It answers from my real experience — the same pattern I shipped in production.",
    placeholder: "Ask about my experience, projects or skills…",
    suggestions: [
      "What AI products has Pablo shipped?",
      "Is he a fit for a Technical PM role?",
      "How did he build the shopping assistant?",
      "What's his tech stack?",
    ],
    disclaimer: "AI-generated answers based on my CV. Short conversations to keep costs low.",
    send: "Send",
    error: "Something went wrong. Try again, or email me directly.",
    limit: "Conversation limit reached — let's continue by email!",
    thinking: "Thinking…",
    toolLabels: {
      getProfile: "Reading profile",
      getProjects: "Looking up projects",
      getExperience: "Checking experience",
      getSkills: "Checking skills",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something people actually use.",
    lede: "Open to AI Product Engineer, Technical PM / Product Owner and full-stack roles. Remote, with EU work authorization.",
    email: "Email me",
    copied: "Copied!",
    copy: "Copy email",
  },
  footer: "Designed and built by Pablo Bottoni with Next.js, Tailwind and the Vercel AI SDK.",
  hatLabels: { ai: "AI", eng: "Full-Stack", pm: "Product" },
  caseLabels: {
    back: "All work",
    role: "Role",
    period: "Period",
    status: "Status",
    stack: "Stack",
    context: "Context",
    problem: "The problem",
    decisions: "Key decisions",
    architecture: "How it works",
    outcome: "Outcome",
    learned: "What I'd tell the next team",
    next: "Next case study",
    visit: "Visit live site",
    code: "View the code",
    cta: "Want this kind of work on your team?",
  },
  projects: [
    {
      slug: "thaska-andina",
      name: "Thaska Andina",
      kicker: "E-commerce + AI shopping assistant",
      oneLiner: "A production e-commerce platform for a Patagonian aroma brand, with an AI assistant that recommends from the live catalog.",
      role: "Project Manager & Lead Developer",
      period: "2025 — Present",
      status: "Live in production",
      live: "https://thaskaandina.com.ar",
      hats: ["ai", "eng", "pm"],
      stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Vercel AI SDK", "AI Gateway", "Mercado Pago", "Vitest", "Vercel"],
      cover: "/work/thaska-home.png",
      highlights: [
        "Tool-calling AI assistant with real price and stock",
        "Mercado Pago Checkout Bricks + webhooks",
        "Back office on a 22-entity data model",
      ],
      caseStudy: {
        context:
          "Thaska Andina makes perfumes, home fragrances and candles by hand in Bariloche. The business was running on social media DMs and spreadsheets: no online store, no single view of orders, stock or costs.",
        problem:
          "They needed to sell online without adding staff — and customers kept asking the same question: \"which scent is right for me?\". The catalog has dozens of products that are hard to choose between without smelling them.",
        decisions: [
          {
            title: "An assistant that recommends, never buys",
            body: "The agent has three narrow tools — list categories, search products with live price and stock, recommend products — and renders product cards with add-to-cart. Purchases stay a customer action, which removes a whole class of risk.",
          },
          {
            title: "Cost guardrails by design",
            body: "Conversation history and message length are capped, so a chatty user can't run up the token bill. The model sits behind an AI gateway, so we can swap it for a cheaper or better one without touching code.",
          },
          {
            title: "Payments that never lose an order",
            body: "Mercado Pago Checkout Bricks with webhooks: a failed payment no longer cancels the order, and every order shows its full payment trail in the admin.",
          },
          {
            title: "One back office for the whole business",
            body: "Orders, customers, POS, stock, costs, cash, supplies, recipes and production on a single 22-entity data model — replacing the spreadsheets.",
          },
        ],
        architecture: [
          "Next.js App Router + React + TypeScript storefront and admin",
          "PostgreSQL with Prisma (22 entities)",
          "AI SDK tool-calling agent with streaming responses, routed through AI Gateway",
          "Mercado Pago Checkout Bricks + payment webhooks",
          "Vercel: preview deployment per pull request, production on merge, Vitest in CI",
        ],
        outcome: [
          "Store live at thaskaandina.com.ar with catalog, accounts, checkout and order tracking",
          "AI assistant answering customers 24/7 with recommendations from real stock",
          "The business runs orders, stock and production from one admin instead of spreadsheets",
        ],
        gallery: [
          { src: "/work/thaska-assistant.png", alt: "Thaska Andina AI assistant recommending perfumes with product cards", caption: "The assistant asks a clarifying question, then searches the live catalog and renders product cards with add-to-cart.", mobile: true },
          { src: "/work/thaska-perfumes.png", alt: "Thaska Andina perfume catalog page", caption: "Catalog with search and sorting, served from PostgreSQL." },
          { src: "/work/thaska-mobile.png", alt: "Thaska Andina home on mobile", caption: "Mobile-first storefront.", mobile: true },
        ],
        learned:
          "The most valuable AI decision wasn't the model — it was the scope. Three narrow tools and a hard rule (the agent never buys) made the assistant trustworthy enough to ship.",
      },
    },
    {
      slug: "snowride",
      name: "SnowRide",
      kicker: "Two-sided marketplace",
      oneLiner: "Book certified ski, snowboard and kitesurf instructors in real time across Patagonian and Chilean resorts.",
      role: "Product Owner / Project Manager",
      period: "2025 — Present",
      status: "Built · launch paused to control infra costs",
      hats: ["pm", "eng"],
      stack: ["React Native", "Expo", "NestJS", "Prisma", "PostgreSQL", "JWT", "Docker", "Playwright"],
      highlights: [
        "Three role journeys: client, instructor, admin",
        "Booking state machine + instructor verification",
        "Led a team of 4–8 with Scrum",
      ],
      caseStudy: {
        context:
          "Ski schools in Bariloche, Chapelco, Las Leñas and Chile book instructors by phone and WhatsApp. Independent certified instructors have no way to be discovered, and clients can't see who is available.",
        problem:
          "Build a marketplace where trust is the product: clients need to know instructors are certified, instructors need predictable bookings, and the business needs an admin view of everything.",
        decisions: [
          {
            title: "Three journeys, designed separately",
            body: "I defined the client, instructor and admin journeys as distinct products sharing one backend, so each role got a focused experience instead of one cluttered app.",
          },
          {
            title: "An explicit booking state machine",
            body: "Pending → confirmed → completed, with cancelled and rejected branches. Writing it down before coding removed ambiguity between mobile, API and admin, and made edge cases testable.",
          },
          {
            title: "Verification before visibility",
            body: "Instructors only appear in map-based discovery after the admin verifies their certification — trust over growth speed.",
          },
          {
            title: "Cost-aware launch",
            body: "We paused the launch to control cloud infrastructure costs instead of burning budget before the season. A product call, not an engineering one.",
          },
        ],
        architecture: [
          "React Native / Expo mobile app",
          "NestJS + Prisma + PostgreSQL REST API with JWT auth",
          "Docker for environments, Playwright end-to-end tests",
          "Map-based discovery, availability, bookings, reviews and admin panel",
        ],
        outcome: [
          "Complete product built: discovery, availability, booking, reviews and admin",
          "Roadmap and backlog owned end to end, with user stories and acceptance criteria",
          "Visual direction chosen across three alternative design systems",
        ],
        learned:
          "In a marketplace, the state machine is the product spec. Once everyone agreed on it, design, mobile and API work could move in parallel.",
      },
    },
    {
      slug: "travel-quote-agent",
      name: "Travel Quote Agent",
      kicker: "AI agent with guardrails and evals",
      oneLiner: "An agent that turns a client's messy trip request into a checked, ready-to-send quote. It's 3× faster on custom trips, and the seller stays in control of prices and bookings.",
      role: "Founder & Product Lead · PatagonLabs",
      period: "2026",
      status: "In daily use · open source",
      repo: "https://github.com/PabNic/travel-quote-agent",
      hats: ["ai", "eng", "pm"],
      stack: ["Claude Code", "Browser automation", "TypeScript", "Vercel AI SDK", "AI Gateway", "Zod", "Evals", "node:test"],
      highlights: [
        "Custom-trip quotes: 8–15 min → 3–5 min",
        "Rules enforced in code, not only in the prompt",
        "Eval suite: 77/78 checks across 8 real scenarios",
      ],
      caseStudy: {
        metrics: [
          { value: "8–15 → 3–5 min", label: "per custom-trip quote" },
          { value: "~5 → <1 min", label: "to find a package with seats" },
          { value: "77/78", label: "eval checks passed (8 cases × 3 runs)" },
        ],
        context:
          "At a travel agency in Argentina, every client request starts on WhatsApp and ends in the agency's booking platform. I built this agent for that sales flow, and I use it every day as a seller.",
        problem:
          "A custom-trip quote took 8 to 15 minutes of searching and cross-checking, and the platform is full of traps. Some results land in another city's airport. Some flights arrive at dawn with small children on board. Some rooms are too small for the family, and some packages look available but have no seats. On top of that, the seller must never quote a price that isn't theirs to give.",
        decisions: [
          {
            title: "If a rule can be code, it's code",
            body: "The prompt explains each rule, and the code enforces it. Catalog search only returns packages that are for sale and have seats. A package can't be offered until its seats are checked. The client message is rejected if it includes prices for a custom trip, budget comparisons, links or personal data.",
          },
          {
            title: "The safest guardrail is a missing tool",
            body: "The agent has no tool to book and no tool that accepts passenger data. If it's asked to book, the only thing it can do is hand that step back to the seller.",
          },
          {
            title: "Humans approve every write",
            body: "Saving a quote goes through tool approval, so it happens only when the seller says yes. Every turn ends in a structured hand-off: either a question for the seller or a proposal that has passed the checks.",
          },
          {
            title: "QA in code on every trip",
            body: "Nine deterministic checks run every time a trip is built: wrong airport, a check-in that doesn't match the arrival, a dawn arrival, long layovers, room capacity, non-refundable rates and more. The agent has to fix the warnings and build the trip again.",
          },
        ],
        architecture: [
          "Seller pastes the client's request → agent asks for anything critical that's missing",
          "Ready-made packages first, with a live seat check before offering",
          "Otherwise: flights + hotels → trip builder → QA checks → fix and rebuild",
          "Quote saved only after the seller approves",
          "Proposal checked by guardrails → internal notes + client message",
        ],
        outcome: [
          "In daily production use, built as a Claude Code skill on the agency's real booking platform",
          "Custom-trip quotes take 3–5 min instead of 8–15, and package searches take under 1 min instead of ~5",
          "Open-source TypeScript version with a simulated backoffice, unit tests and an eval suite at 77/78",
        ],
        learned:
          "The evals made the agent better, not the prompt. Each failure pointed to a fix in code: first a structured hand-off, then a smarter search. The one failure left is already the next fix on the list. A rule you can test beats one you can only ask for.",
      },
    },
    {
      slug: "content-agent",
      name: "Social Content Agent",
      kicker: "Scheduled Claude workflow",
      oneLiner: "A daily agent that turns live travel inventory into on-brand Instagram posts and stories.",
      role: "Founder & Product Lead · PatagonLabs",
      period: "2026",
      status: "Runs every weekday",
      hats: ["ai"],
      stack: ["Claude", "Scheduled agents", "Image rendering", "Brand guidelines"],
      highlights: [
        "Pulls packages with live availability",
        "Renders feed and story images on brand",
        "Writes captions, hashtags and posting times",
      ],
      caseStudy: {
        context:
          "The agency needed consistent Instagram content, but nobody had time to design posts every day — and posts about sold-out packages were worse than no posts.",
        problem:
          "Create daily content that is always about inventory that's actually available, and always follows the brand manual.",
        decisions: [
          {
            title: "Grounded in live inventory",
            body: "The agent starts from packages with real availability in the back office, so it never promotes something that can't be sold.",
          },
          {
            title: "The brand manual as the spec",
            body: "Layouts, tone, hashtags and posting rules are encoded from the brand manual — the agent follows them every time, unlike a rushed human.",
          },
          {
            title: "Ready to publish, human approves",
            body: "Output is final PNGs for feed (1080×1440) and stories (1080×1920) with captions — a person reviews and posts.",
          },
        ],
        architecture: [
          "Weekday schedule → Claude agent",
          "Fetch packages with availability from the back office",
          "Source royalty-free photos",
          "Render on-brand feed + story images, write captions, hashtags and posting times",
        ],
        outcome: [
          "Daily, on-brand content with zero design hours",
          "Every post promotes inventory that is actually available",
        ],
        learned: "Scheduling turns an AI demo into an operation. The value came from it running every day without anyone remembering to.",
      },
    },
    {
      slug: "nomad-locals",
      name: "Nomad Locals",
      kicker: "Social platform",
      oneLiner: "A social platform for travelers built from scratch, with real-time chat and geolocation.",
      role: "Full-Stack Developer & Team Coordinator",
      period: "Jun — Aug 2023",
      status: "Delivered",
      hats: ["eng", "pm"],
      stack: ["React", "Vite", "Redux", "Tailwind", "Node.js", "PostgreSQL"],
      highlights: ["Third-party login", "Geolocation", "Real-time chat"],
      caseStudy: {
        context: "A team project to connect travelers with locals, built from an early-stage idea in a short timeframe.",
        problem: "Turn a loose idea into a working product with a small team and a fixed deadline.",
        decisions: [
          {
            title: "Scope to the core loop",
            body: "We focused on sign-up, discovering people nearby and chatting — and cut everything else.",
          },
          {
            title: "Short sprints with visible priorities",
            body: "I coordinated sprint planning so the team always knew what mattered this week, while building features myself.",
          },
        ],
        architecture: ["React + Vite + Redux + Tailwind frontend", "Node.js + PostgreSQL backend", "OAuth login, geolocation and real-time chat"],
        outcome: ["Working product delivered on time with login, geolocation and real-time chat"],
        learned: "This is where I realized I enjoy coordinating the team as much as writing the code — and that I'm good at both.",
      },
    },
  ],
};

const es: Content = {
  meta: {
    title: "Pablo Bottoni — AI Product Engineer",
    description:
      "AI Product Engineer que lleva productos con IA de punta a punta y lidera los equipos que los construyen. Full-stack (TypeScript, Next.js, Node.js, PostgreSQL) + Product Owner / PM. Remoto, ciudadanía europea.",
  },
  nav: { work: "Proyectos", about: "Qué hago", experience: "Experiencia", ask: "Preguntale a mi IA", contact: "Contacto", cv: "Descargar CV" },
  hero: {
    eyebrow: "AI Product Engineer · Full-Stack · Technical PM",
    title: "Convierto problemas de negocio difusos",
    titleAccent: "en productos con IA que la gente usa.",
    lede: "5 años desarrollando aplicaciones full-stack y 2 liderando equipos de producto de 4 a 8 personas. Diseño el producto, escribo el código y lo pongo en producción — como el asistente de compras con IA que funciona hoy en thaskaandina.com.ar.",
    ctaWork: "Ver proyectos",
    ctaAsk: "Preguntale a mi IA",
    badges: ["Remoto · GMT-3", "Ciudadanía europea (italiana)", "Inglés C1 · Español nativo · Portugués (profesional)"],
    photoAlt: "Pablo Bottoni",
    now: { label: "Hoy en producción", text: "Asistente de compras con IA · Thaska Andina" },
  },
  stats: [
    { value: "5 años", label: "de desarrollo full-stack" },
    { value: "2 años", label: "liderando equipos de 4–8" },
    { value: "3", label: "agentes de IA entregados" },
    { value: "1", label: "asistente IA en producción" },
  ],
  work: {
    eyebrow: "Proyectos",
    title: "Productos que construí y lideré",
    lede: "Productos reales con usuarios reales. Cada uno tiene su caso de estudio: el problema, las decisiones y los trade-offs.",
    readCase: "Ver caso de estudio",
    visit: "Ver sitio en vivo",
    featured: "Destacado · En producción",
  },
  hats: {
    eyebrow: "Qué hago",
    title: "Una persona, tres roles que suelen ser tres personas.",
    items: [
      {
        key: "ai",
        title: "AI Product Engineer",
        body: "Construyo funcionalidades con LLMs que son útiles y seguras de operar: agentes con tool calling, interfaces con streaming y guardrails de comportamiento y costo.",
        proof: ["Asistente de compras con tool calling en producción", "Agentes con Claude y automatización de navegador", "Modelo intercambiable vía AI Gateway"],
      },
      {
        key: "eng",
        title: "Full-Stack Developer",
        body: "TypeScript de punta a punta. Llevo productos del esquema de datos al deploy, con tests y entrega continua desde el día uno.",
        proof: ["Next.js · React · Node.js · PostgreSQL · Prisma", "Modelo de 22 entidades, pagos con webhooks", "Preview por PR, Vitest, CI/CD en Vercel"],
      },
      {
        key: "pm",
        title: "Technical PM / Product Owner",
        body: "Soy dueño del roadmap y el backlog, alineo stakeholders y mantengo al equipo entregando — y hablo el idioma de los ingenieros.",
        proof: ["Lideré equipos multidisciplinarios de 4–8 con Scrum", "Definí journeys, máquinas de estado y criterios de aceptación", "Founder: me hago cargo de resultados, no solo de tareas"],
      },
    ],
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Dónde lo hice",
    items: [
      {
        company: "Thaska Andina",
        role: "Project Manager & Lead Developer",
        period: "2025 — Actualidad",
        body: [
          "Lancé una plataforma de e-commerce en producción de punta a punta: catálogo, carrito, cuentas, checkout y seguimiento de pedidos.",
          "Puse en producción un asistente de compras con IA: agente con tool calling sobre el catálogo real, con streaming y control de costos.",
          "Integré Mercado Pago Checkout Bricks con webhooks y construí todo el back office sobre un modelo de 22 entidades.",
        ],
      },
      {
        company: "SnowRide",
        role: "Product Owner / Project Manager",
        period: "2025 — Actualidad",
        body: [
          "Dueño del producto de un marketplace de dos lados para reservar instructores certificados de ski, snowboard y kitesurf.",
          "Definí los journeys por rol, la verificación de instructores y la máquina de estados de reservas que implementó el equipo.",
          "Lidero un equipo multidisciplinario de 4–8 con Scrum, con alcance, riesgos y dependencias visibles.",
        ],
      },
      {
        company: "PatagonLabs",
        role: "Founder & Product Lead",
        period: "2024 — Actualidad",
        body: [
          "Estudio de producto: defino visión, roadmap y ejecución de cada producto, liderando equipos de diseño y desarrollo.",
          "Diseñé y entregué flujos de agentes con Claude para una agencia de viajes: cotización de viajes y contenido diario.",
        ],
      },
      {
        company: "Nomad Locals",
        role: "Full-Stack Developer & Team Coordinator",
        period: "Jun — Ago 2023",
        body: [
          "Construí desde cero una plataforma social con login de terceros, geolocalización y chat en tiempo real, y coordiné la planificación de sprints.",
        ],
      },
    ],
    education: {
      title: "Formación y certificaciones",
      items: [
        "Gestión Ágil de Proyectos (preparación PMI-ACP) — UTN-FRBA, 2026 · Calificación: Excelente",
        "Bootcamp Full-Stack Web Development — Soy Henry",
        "EF SET English Certificate — C1 Advanced",
        "Medicina, 4 años cursados — Universidad Adventista del Plata",
      ],
    },
  },
  skills: {
    eyebrow: "Herramientas",
    title: "Con qué trabajo",
    groups: [
      { name: "IA / LLM", items: ["Vercel AI SDK", "Claude", "Tool calling y agentes", "Interfaces con streaming", "Prompt engineering", "AI Gateway", "Control de costos", "RAG (conceptos)"] },
      { name: "Ingeniería", items: ["TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "APIs REST", "Tailwind CSS", "Vitest", "CI/CD en Vercel"] },
      { name: "Producto y delivery", items: ["Product ownership", "Roadmap", "Gestión de backlog", "Historias de usuario y CA", "Scrum", "Kanban", "Gestión de stakeholders", "Seguimiento de KPIs", "Gestión de riesgos"] },
      { name: "Herramientas", items: ["Jira", "ClickUp", "Notion", "Trello", "Postman", "GitHub"] },
    ],
  },
  how: {
    eyebrow: "Cómo trabajo",
    title: "Lo que le aporto a un equipo",
    items: [
      { title: "Primero el problema", body: "Entiendo al usuario y al negocio antes de escribir un ticket o una línea de código." },
      { title: "Entregar y después pulir", body: "Partes chicas en producción le ganan a planes grandes. Cada PR tiene su preview, cada merge sale a producción." },
      { title: "IA con guardrails", body: "Los agentes recomiendan, las personas deciden. Limito el costo, acoto las herramientas y testeo el comportamiento." },
      { title: "Traduzco en los dos sentidos", body: "Convierto objetivos de negocio en historias claras para ingeniería, y trade-offs técnicos en decisiones para stakeholders." },
    ],
  },
  ask: {
    eyebrow: "Demo en vivo",
    title: "No me creas a mí. Preguntale a mi IA.",
    lede: "Es un agente con tool calling que construí con el Vercel AI SDK. Responde con mi experiencia real — el mismo patrón que puse en producción.",
    placeholder: "Preguntá por mi experiencia, proyectos o skills…",
    suggestions: [
      "¿Qué productos con IA entregó Pablo?",
      "¿Encaja en un rol de Technical PM?",
      "¿Cómo construyó el asistente de compras?",
      "¿Cuál es su stack técnico?",
    ],
    disclaimer: "Respuestas generadas por IA a partir de mi CV. Conversaciones cortas para cuidar costos.",
    send: "Enviar",
    error: "Algo falló. Probá de nuevo o escribime por mail.",
    limit: "Llegamos al límite de la conversación — ¡sigamos por mail!",
    thinking: "Pensando…",
    toolLabels: {
      getProfile: "Leyendo perfil",
      getProjects: "Buscando proyectos",
      getExperience: "Revisando experiencia",
      getSkills: "Revisando skills",
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Construyamos algo que la gente realmente use.",
    lede: "Abierto a roles de AI Product Engineer, Technical PM / Product Owner y full-stack. Remoto, con ciudadanía europea.",
    email: "Escribime",
    copied: "¡Copiado!",
    copy: "Copiar email",
  },
  footer: "Diseñado y desarrollado por Pablo Bottoni con Next.js, Tailwind y el Vercel AI SDK.",
  hatLabels: { ai: "IA", eng: "Full-Stack", pm: "Producto" },
  caseLabels: {
    back: "Todos los proyectos",
    role: "Rol",
    period: "Período",
    status: "Estado",
    stack: "Stack",
    context: "Contexto",
    problem: "El problema",
    decisions: "Decisiones clave",
    architecture: "Cómo funciona",
    outcome: "Resultado",
    learned: "Lo que le diría al próximo equipo",
    next: "Siguiente caso",
    visit: "Ver sitio en vivo",
    code: "Ver el código",
    cta: "¿Querés este tipo de trabajo en tu equipo?",
  },
  projects: [
    {
      ...en.projects[0],
      kicker: "E-commerce + asistente de compras con IA",
      oneLiner: "Plataforma de e-commerce en producción para una marca patagónica de aromas, con un asistente IA que recomienda desde el catálogo real.",
      status: "En producción",
      highlights: [
        "Asistente IA con tool calling, precio y stock reales",
        "Mercado Pago Checkout Bricks + webhooks",
        "Back office sobre un modelo de 22 entidades",
      ],
      caseStudy: {
        ...en.projects[0].caseStudy,
        context:
          "Thaska Andina elabora perfumes, aromas para el hogar y velas de forma artesanal en Bariloche. El negocio funcionaba con mensajes por redes y planillas: sin tienda online, sin una vista única de pedidos, stock o costos.",
        problem:
          "Necesitaban vender online sin sumar personal — y los clientes repetían la misma pregunta: \"¿qué aroma es para mí?\". El catálogo tiene decenas de productos difíciles de elegir sin olerlos.",
        decisions: [
          {
            title: "Un asistente que recomienda, nunca compra",
            body: "El agente tiene tres herramientas acotadas — listar categorías, buscar productos con precio y stock reales, recomendar — y muestra tarjetas de producto con agregar al carrito. La compra sigue siendo del cliente, lo que elimina toda una categoría de riesgo.",
          },
          {
            title: "Control de costos desde el diseño",
            body: "El historial y el largo de los mensajes están limitados, así un usuario charlatán no dispara la factura de tokens. El modelo pasa por un AI gateway: se puede cambiar por uno más barato o mejor sin tocar código.",
          },
          {
            title: "Pagos que nunca pierden un pedido",
            body: "Mercado Pago Checkout Bricks con webhooks: un pago fallido ya no cancela el pedido, y cada pedido muestra su historial de pagos en el admin.",
          },
          {
            title: "Un back office para todo el negocio",
            body: "Pedidos, clientes, punto de venta, stock, costos, caja, insumos, recetas y producción en un único modelo de 22 entidades — reemplazando las planillas.",
          },
        ],
        architecture: [
          "Tienda y admin en Next.js App Router + React + TypeScript",
          "PostgreSQL con Prisma (22 entidades)",
          "Agente con tool calling del AI SDK, con streaming, vía AI Gateway",
          "Mercado Pago Checkout Bricks + webhooks de pago",
          "Vercel: preview por pull request, producción en cada merge, Vitest en CI",
        ],
        outcome: [
          "Tienda en vivo en thaskaandina.com.ar con catálogo, cuentas, checkout y seguimiento de pedidos",
          "Asistente IA atendiendo clientes 24/7 con recomendaciones sobre stock real",
          "El negocio gestiona pedidos, stock y producción desde un solo admin en lugar de planillas",
        ],
        gallery: [
          { src: "/work/thaska-assistant.png", alt: "Asistente IA de Thaska Andina recomendando perfumes con tarjetas de producto", caption: "El asistente repregunta, busca en el catálogo real y muestra tarjetas con agregar al carrito.", mobile: true },
          { src: "/work/thaska-perfumes.png", alt: "Catálogo de perfumes de Thaska Andina", caption: "Catálogo con búsqueda y orden, servido desde PostgreSQL." },
          { src: "/work/thaska-mobile.png", alt: "Home de Thaska Andina en mobile", caption: "Tienda pensada mobile-first.", mobile: true },
        ],
        learned:
          "La decisión de IA más valiosa no fue el modelo — fue el alcance. Tres herramientas acotadas y una regla firme (el agente nunca compra) lo hicieron lo bastante confiable para salir a producción.",
      },
    },
    {
      ...en.projects[1],
      kicker: "Marketplace de dos lados",
      oneLiner: "Reservá instructores certificados de ski, snowboard y kitesurf en tiempo real en centros de Patagonia y Chile.",
      status: "Construido · lanzamiento en pausa para controlar costos de infraestructura",
      highlights: [
        "Tres journeys: cliente, instructor, admin",
        "Máquina de estados de reservas + verificación de instructores",
        "Lideré un equipo de 4–8 con Scrum",
      ],
      caseStudy: {
        ...en.projects[1].caseStudy,
        context:
          "Las escuelas de ski de Bariloche, Chapelco, Las Leñas y Chile reservan instructores por teléfono y WhatsApp. Los instructores certificados independientes no tienen forma de ser encontrados, y los clientes no ven quién está disponible.",
        problem:
          "Construir un marketplace donde la confianza es el producto: el cliente necesita saber que el instructor está certificado, el instructor necesita reservas previsibles y el negocio una vista de todo.",
        decisions: [
          { title: "Tres journeys, diseñados por separado", body: "Definí los journeys de cliente, instructor y admin como productos distintos sobre un mismo backend, para que cada rol tenga una experiencia enfocada." },
          { title: "Una máquina de estados explícita", body: "Pendiente → confirmada → completada, con ramas de cancelada y rechazada. Escribirla antes de codear eliminó ambigüedad entre mobile, API y admin, e hizo testeables los casos borde." },
          { title: "Verificación antes de visibilidad", body: "Los instructores aparecen en el mapa solo después de que el admin verifica su certificación — confianza antes que crecimiento." },
          { title: "Lanzamiento consciente del costo", body: "Pausamos el lanzamiento para controlar costos de infraestructura cloud en lugar de quemar presupuesto antes de la temporada. Una decisión de producto, no de ingeniería." },
        ],
        architecture: [
          "App mobile en React Native / Expo",
          "API REST en NestJS + Prisma + PostgreSQL con auth JWT",
          "Docker para entornos, tests end-to-end con Playwright",
          "Descubrimiento en mapa, disponibilidad, reservas, reseñas y panel de admin",
        ],
        outcome: [
          "Producto completo: descubrimiento, disponibilidad, reservas, reseñas y admin",
          "Roadmap y backlog de punta a punta, con historias de usuario y criterios de aceptación",
          "Dirección visual elegida entre tres design systems alternativos",
        ],
        learned: "En un marketplace, la máquina de estados es la especificación del producto. Una vez acordada, diseño, mobile y API pudieron avanzar en paralelo.",
      },
    },
    {
      ...en.projects[2],
      name: "Agente de Cotización de Viajes",
      kicker: "Agente de IA con guardrails y evals",
      oneLiner: "Un agente que convierte el pedido desordenado de un cliente en una cotización revisada y lista para enviar. En viajes a medida es 3 veces más rápido, y el vendedor mantiene el control de los precios y las reservas.",
      status: "En uso diario · código abierto",
      highlights: [
        "Viajes a medida: de 8–15 min a 3–5 min",
        "Reglas que se cumplen en el código, no solo en el prompt",
        "Evals: 77/78 checks en 8 escenarios reales",
      ],
      caseStudy: {
        ...en.projects[2].caseStudy,
        metrics: [
          { value: "8–15 → 3–5 min", label: "por cotización de viaje a medida" },
          { value: "~5 → <1 min", label: "para encontrar un paquete con cupos" },
          { value: "77/78", label: "checks de evals aprobados (8 casos × 3 corridas)" },
        ],
        context: "En una agencia de viajes de Argentina, cada pedido de un cliente empieza en WhatsApp y termina en la plataforma de reservas de la agencia. Construí este agente para ese flujo de ventas, y lo uso todos los días como vendedor.",
        problem: "Una cotización de viaje a medida llevaba entre 8 y 15 minutos de búsqueda y verificación, y la plataforma está llena de trampas. Algunos resultados aterrizan en el aeropuerto de otra ciudad. Algunos vuelos llegan de madrugada con niños pequeños. Algunas habitaciones no alcanzan para la familia, y algunos paquetes parecen disponibles pero no tienen cupos. Además, el vendedor nunca puede pasar un precio que no le corresponde dar.",
        decisions: [
          { title: "Si una regla puede ser código, es código", body: "El prompt explica cada regla y el código la hace cumplir. La búsqueda de paquetes solo devuelve los que están a la venta y tienen cupos. Un paquete no se puede ofrecer sin verificar sus cupos. El mensaje al cliente se rechaza si lleva precios de un viaje a medida, comparaciones con su presupuesto, links o datos personales." },
          { title: "El guardrail más seguro es la herramienta que no existe", body: "El agente no tiene ninguna herramienta para reservar ni para cargar datos de pasajeros. Si le piden reservar, lo único que puede hacer es devolverle ese paso al vendedor." },
          { title: "Una persona aprueba cada escritura", body: "Guardar una cotización pasa por una aprobación, así que solo se guarda cuando el vendedor dice que sí. Cada turno termina con una entrega estructurada: una pregunta al vendedor o una propuesta que pasó los controles." },
          { title: "Controles de calidad en código para cada viaje", body: "Cada vez que se arma un viaje corren 9 controles deterministas: aeropuerto equivocado, check-in que no coincide con la llegada, llegada de madrugada, escalas largas, capacidad de la habitación, tarifas no reembolsables y más. El agente tiene que resolver las alertas y volver a armar el viaje." },
        ],
        architecture: [
          "El vendedor pega el pedido → el agente pregunta los datos críticos que falten",
          "Primero, paquetes armados, verificando los cupos en vivo antes de ofrecerlos",
          "Si no hay: vuelos + hoteles → armado del viaje → controles de calidad → corregir y rearmar",
          "La cotización se guarda solo con la aprobación del vendedor",
          "Los guardrails revisan la propuesta → notas internas + mensaje para el cliente",
        ],
        outcome: [
          "En uso diario en producción, como skill de Claude Code sobre la plataforma de reservas real de la agencia",
          "Un viaje a medida lleva 3–5 min en lugar de 8–15, y encontrar un paquete lleva menos de 1 min en lugar de ~5",
          "Versión open source en TypeScript con backoffice simulado, tests unitarios y evals en 77/78",
        ],
        learned: "Lo que mejoró al agente fueron las evals, no el prompt. Cada falla señaló un arreglo en el código: primero una entrega estructurada, después una búsqueda más inteligente. La única falla que queda ya es el próximo arreglo de la lista. Una regla que se puede testear vale más que una que solo se puede pedir.",
      },
    },
    {
      ...en.projects[3],
      name: "Agente de Contenido para Redes",
      kicker: "Flujo programado con Claude",
      oneLiner: "Un agente diario que convierte el inventario real de viajes en posteos e historias de Instagram fieles a la marca.",
      status: "Corre cada día hábil",
      highlights: ["Toma paquetes con disponibilidad real", "Genera placas de feed e historias según la marca", "Escribe captions, hashtags y horarios"],
      caseStudy: {
        ...en.projects[3].caseStudy,
        context: "La agencia necesitaba contenido constante en Instagram, pero nadie tenía tiempo de diseñar todos los días — y publicar paquetes agotados era peor que no publicar.",
        problem: "Generar contenido diario siempre sobre inventario disponible y siempre fiel al manual de marca.",
        decisions: [
          { title: "Anclado en inventario real", body: "El agente parte de paquetes con disponibilidad real en el back office, así nunca promociona algo que no se puede vender." },
          { title: "El manual de marca como especificación", body: "Diseños, tono, hashtags y reglas de publicación salen del manual de marca — el agente los respeta siempre." },
          { title: "Listo para publicar, una persona aprueba", body: "Entrega PNGs finales para feed (1080×1440) e historias (1080×1920) con captions — una persona revisa y publica." },
        ],
        architecture: [
          "Programación en días hábiles → agente con Claude",
          "Trae paquetes con disponibilidad del back office",
          "Busca fotos libres de derechos",
          "Genera placas de feed e historias, captions, hashtags y horarios",
        ],
        outcome: ["Contenido diario y fiel a la marca sin horas de diseño", "Cada posteo promociona inventario realmente disponible"],
        learned: "La programación convierte una demo de IA en una operación. El valor vino de que corre todos los días sin que nadie tenga que acordarse.",
      },
    },
    {
      ...en.projects[4],
      kicker: "Plataforma social",
      oneLiner: "Una plataforma social para viajeros construida desde cero, con chat en tiempo real y geolocalización.",
      status: "Entregado",
      highlights: ["Login con terceros", "Geolocalización", "Chat en tiempo real"],
      caseStudy: {
        ...en.projects[4].caseStudy,
        context: "Un proyecto en equipo para conectar viajeros con locales, construido desde una idea temprana en poco tiempo.",
        problem: "Convertir una idea suelta en un producto funcionando, con un equipo chico y fecha fija.",
        decisions: [
          { title: "Acotar al ciclo central", body: "Nos enfocamos en registrarse, descubrir gente cerca y chatear — y recortamos todo lo demás." },
          { title: "Sprints cortos con prioridades visibles", body: "Coordiné la planificación para que el equipo siempre supiera qué importaba esa semana, mientras desarrollaba features." },
        ],
        architecture: ["Frontend en React + Vite + Redux + Tailwind", "Backend en Node.js + PostgreSQL", "Login OAuth, geolocalización y chat en tiempo real"],
        outcome: ["Producto entregado a tiempo con login, geolocalización y chat en tiempo real"],
        learned: "Acá me di cuenta de que disfruto coordinar al equipo tanto como escribir código — y que hago bien las dos cosas.",
      },
    },
  ],
};

const content: Record<Locale, Content> = { en, es };

export const getContent = (locale: Locale) => content[locale];
export const getProject = (locale: Locale, slug: string) =>
  content[locale].projects.find((p) => p.slug === slug);
export const projectSlugs = en.projects.map((p) => p.slug);
