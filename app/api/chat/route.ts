import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  isStepCount,
  streamText,
  toUIMessageStream,
  tool,
  type UIMessage,
} from "ai";
import { z } from "zod";
import { getContent, getProject, profile, projectSlugs } from "@/lib/content";
import { hasLocale, type Locale } from "@/lib/i18n";

export const maxDuration = 30;

// Guardrails: keep every conversation short and cheap.
// Default works on the AI Gateway free tier. Override with PORTFOLIO_MODEL
// (e.g. "anthropic/claude-haiku-5.5") once the account has paid credits.
const MODEL = process.env.PORTFOLIO_MODEL || "google/gemini-2.5-flash";
const MAX_HISTORY = 8; // messages sent to the model
const MAX_USER_TURNS = 8; // per conversation
const MAX_CHARS = 500; // per user message
const RATE_LIMIT = { max: 20, windowMs: 10 * 60 * 1000 }; // per IP, per instance

const hits = new Map<string, { count: number; reset: number }>();
function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + RATE_LIMIT.windowMs });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT.max;
}

const textOf = (m: UIMessage) =>
  m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");

function instructions(lang: Locale) {
  return `You are the portfolio assistant of Pablo Bottoni, an AI Product Engineer who is also a full-stack developer and a technical PM / Product Owner. You talk to recruiters and hiring managers.

Rules:
- Answer ONLY from the data returned by your tools. Always call a tool before stating facts about Pablo. Never invent companies, metrics, dates, salaries or skills. If something isn't in the data, say you don't know and suggest emailing Pablo at ${profile.email}.
- For questions about how or why a project was built, call getProjects with that project's slug to read the full case study (decisions, architecture, outcome), and mention the concrete decisions.
- Speak about Pablo in the third person, warmly and confidently, but without exaggerating.
- Be concise: 2–5 short sentences or a short bullet list. No headings.
- When relevant, connect his experience to the role the user mentions (AI Product Engineer, Technical PM, Product Owner, full-stack).
- Politely decline anything unrelated to Pablo's professional profile.
- Reply in ${lang === "es" ? "Spanish (Rioplatense, using 'vos')" : "English"} unless the user writes in another language.`;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (rateLimited(ip)) return Response.json({ error: "rate_limited" }, { status: 429 });

  const body: { messages?: UIMessage[]; lang?: string } = await req.json();
  const messages = Array.isArray(body.messages) ? body.messages : [];
  const lang: Locale = body.lang && hasLocale(body.lang) ? body.lang : "en";

  const userTurns = messages.filter((m) => m.role === "user");
  const last = userTurns.at(-1);
  if (!last || textOf(last).length > MAX_CHARS || userTurns.length > MAX_USER_TURNS) {
    return Response.json({ error: "limit" }, { status: 400 });
  }

  const c = getContent(lang);

  const result = streamText({
    model: MODEL,
    instructions: instructions(lang),
    messages: await convertToModelMessages(messages.slice(-MAX_HISTORY)),
    maxOutputTokens: 450,
    stopWhen: isStepCount(4),
    tools: {
      getProfile: tool({
        description: "Pablo's headline, summary, location, languages, work authorization, contact links and the roles he is looking for.",
        inputSchema: z.object({}),
        execute: async () => ({
          name: profile.name,
          headline: c.hero.eyebrow,
          summary: c.hero.lede,
          details: c.hero.badges,
          lookingFor: c.contact.lede,
          roles: c.hats.items.map((h) => ({ role: h.title, what: h.body, proof: h.proof })),
          workingPrinciples: c.how.items,
          contact: { email: profile.email, linkedin: profile.linkedin, github: profile.github },
        }),
      }),
      getProjects: tool({
        description: "Pablo's projects. Without a slug returns a summary of all of them; with a slug returns the full case study.",
        inputSchema: z.object({
          slug: z.enum(projectSlugs as [string, ...string[]]).optional().describe("Project slug for the full case study"),
        }),
        execute: async ({ slug }) => {
          if (slug) return getProject(lang, slug) ?? { error: "not found" };
          return c.projects.map((p) => ({
            slug: p.slug,
            name: p.name,
            kind: p.kicker,
            summary: p.oneLiner,
            role: p.role,
            period: p.period,
            status: p.status,
            stack: p.stack,
            highlights: p.highlights,
            live: p.live,
          }));
        },
      }),
      getExperience: tool({
        description: "Pablo's work history, education and certifications.",
        inputSchema: z.object({}),
        execute: async () => ({ jobs: c.experience.items, education: c.experience.education.items }),
      }),
      getSkills: tool({
        description: "Pablo's skills grouped by AI/LLM, engineering, product & delivery, and tools.",
        inputSchema: z.object({}),
        execute: async () => c.skills.groups,
      }),
    },
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
