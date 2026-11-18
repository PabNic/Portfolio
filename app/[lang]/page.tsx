import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AskPablo } from "@/components/AskPablo";
import { CopyEmail } from "@/components/CopyEmail";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Arrow, BrowserFrame, External, Flow, Footer, HatPill, SectionTitle, hatStyles } from "@/components/ui";
import { getContent, profile } from "@/lib/content";
import { hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const c = getContent(lang);
  const [featured, ...rest] = c.projects;

  return (
    <>
      <Nav lang={lang} labels={c.nav} cv={profile.cv} />
      <main>
        {/* HERO */}
        <section className="relative overflow-clip">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />
          <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 sm:pb-28 sm:pt-44">
            <Reveal>
              <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-elev/80 px-3.5 py-1.5 font-mono text-xs text-fg-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {c.hero.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="max-w-4xl text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                {c.hero.title} <span className="text-fg-3">{c.hero.titleAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-fg-2 sm:text-xl">{c.hero.lede}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition hover:brightness-110">
                  {c.hero.ctaWork} <Arrow />
                </a>
                <a href="#ask" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium ring-1 ring-line-strong transition hover:bg-white/5">
                  <span className="text-ai">✦</span> {c.hero.ctaAsk}
                </a>
                <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-fg-2 transition hover:text-fg">
                  {c.nav.cv} ↓
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-3">
                {c.hero.badges.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-fg-3" />
                    {b}
                  </li>
                ))}
                <li className="flex items-center gap-4">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">LinkedIn ↗</a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-fg">GitHub ↗</a>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* STATS */}
          <div className="relative border-y border-line bg-bg-elev/50">
            <dl className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
              {c.stats.map((s, i) => (
                <div key={s.label} className={`flex flex-col px-4 py-7 sm:px-6 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t sm:border-t-0" : ""} ${i === 2 ? "sm:border-l" : ""} border-line`}>
                  <dt className="order-2 mt-1 text-sm text-fg-3">{s.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <Reveal>
            <SectionTitle eyebrow={c.work.eyebrow} title={c.work.title} lede={c.work.lede} />
          </Reveal>

          <Reveal>
            <article className="group relative overflow-hidden rounded-2xl border border-line bg-bg-elev">
              <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.25fr] lg:items-center">
                <div>
                  <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">{c.work.featured}</p>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{featured.name}</h3>
                  <p className="mt-1 text-fg-3">{featured.kicker}</p>
                  <p className="mt-5 text-lg leading-relaxed text-fg-2">{featured.oneLiner}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.hats.map((h) => (
                      <HatPill key={h} hat={h} label={c.hatLabels[h]} />
                    ))}
                  </div>
                  <ul className="mt-6 space-y-2.5 text-[15px] text-fg-2">
                    {featured.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href={`/${lang}/work/${featured.slug}`} className="inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2.5 text-sm font-medium text-bg transition hover:bg-white">
                      {c.work.readCase} <Arrow />
                    </Link>
                    {featured.live && (
                      <a href={featured.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium ring-1 ring-line-strong transition hover:bg-white/5">
                        {c.work.visit} <External />
                      </a>
                    )}
                  </div>
                </div>
                <div className="relative pb-10 sm:pb-0 sm:pr-16">
                  <BrowserFrame src="/work/thaska-perfumes.png" alt={featured.caseStudy.gallery?.[1]?.alt ?? featured.name} url="thaskaandina.com.ar" />
                  <div className="absolute -bottom-2 right-0 w-[42%] max-w-[220px] overflow-hidden rounded-xl border border-line-strong shadow-2xl shadow-black/70 sm:-bottom-8">
                    <Image src="/work/thaska-assistant.png" alt={featured.caseStudy.gallery?.[0]?.alt ?? ""} width={399} height={599} className="h-auto w-full" />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.06}>
                <Link
                  href={`/${lang}/work/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-bg-elev p-6 transition hover:border-line-strong hover:bg-bg-card sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {p.hats.map((h) => (
                      <HatPill key={h} hat={h} label={c.hatLabels[h]} />
                    ))}
                    <span className="ml-auto font-mono text-[11px] text-fg-3">{p.period}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="text-sm text-fg-3">{p.kicker}</p>
                  <p className="mt-4 leading-relaxed text-fg-2">{p.oneLiner}</p>
                  <div className="mt-6 rounded-xl border border-line bg-bg/60 p-4">
                    <Flow steps={p.caseStudy.architecture?.slice(0, 4) ?? p.highlights} />
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-6 text-sm">
                    <span className="text-fg-3">{p.status}</span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-fg transition group-hover:gap-2.5">
                      {c.work.readCase} <Arrow />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* THREE HATS */}
        <section id="about" className="border-t border-line bg-bg-elev/40">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
            <Reveal>
              <SectionTitle eyebrow={c.hats.eyebrow} title={c.hats.title} />
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
              {c.hats.items.map((h, i) => (
                <Reveal key={h.key} delay={i * 0.06} className="bg-bg">
                  <div className="h-full p-7 sm:p-8">
                    <span className={`inline-block rounded-md px-2 py-1 font-mono text-[11px] ring-1 ring-inset ${hatStyles[h.key]}`}>
                      0{i + 1}
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">{h.title}</h3>
                    <p className="mt-3 leading-relaxed text-fg-2">{h.body}</p>
                    <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-sm text-fg-2">
                      {h.proof.map((p) => (
                        <li key={p} className="flex gap-2.5">
                          <span className="text-accent">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ASK */}
        <section id="ask" className="relative overflow-clip border-t border-line">
          <div className="pointer-events-none absolute right-[-200px] top-20 h-[400px] w-[600px] rounded-full bg-ai/[0.08] blur-[120px]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionTitle eyebrow={c.ask.eyebrow} title={c.ask.title} lede={c.ask.lede} />
              <div className="-mt-6 flex flex-wrap gap-2 font-mono text-[11px] text-fg-3">
                {["Vercel AI SDK", "Tool calling", "Streaming", "AI Gateway", "Cost guardrails"].map((t) => (
                  <span key={t} className="rounded-md border border-line px-2 py-1">{t}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <AskPablo lang={lang} labels={c.ask} />
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
            <Reveal>
              <SectionTitle eyebrow={c.experience.eyebrow} title={c.experience.title} />
            </Reveal>
            <ol className="divide-y divide-line border-y border-line">
              {c.experience.items.map((e) => (
                <Reveal key={e.company}>
                  <li className="grid gap-4 py-8 md:grid-cols-[220px_1fr] md:gap-10">
                    <div>
                      <p className="font-mono text-xs text-fg-3">{e.period}</p>
                      <p className="mt-2 text-lg font-semibold">{e.company}</p>
                    </div>
                    <div>
                      <p className="font-medium text-fg">{e.role}</p>
                      <ul className="mt-3 space-y-2 text-fg-2">
                        {e.body.map((b) => (
                          <li key={b} className="flex gap-3 leading-relaxed">
                            <span className="mt-2.5 h-px w-3 shrink-0 bg-fg-3" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <div className="mt-12 grid gap-10 md:grid-cols-[220px_1fr]">
                <p className="font-mono text-xs uppercase tracking-widest text-fg-3">{c.experience.education.title}</p>
                <ul className="grid gap-3 text-fg-2 sm:grid-cols-2">
                  {c.experience.education.items.map((e) => (
                    <li key={e} className="rounded-xl border border-line px-4 py-3 text-sm leading-relaxed">{e}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS + HOW */}
        <section className="border-t border-line bg-bg-elev/40">
          <div className="mx-auto grid max-w-6xl gap-20 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2">
            <Reveal>
              <SectionTitle eyebrow={c.skills.eyebrow} title={c.skills.title} />
              <div className="-mt-4 space-y-7">
                {c.skills.groups.map((g) => (
                  <div key={g.name}>
                    <p className="mb-3 font-mono text-xs uppercase tracking-widest text-fg-3">{g.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <span key={s} className="rounded-md border border-line bg-bg px-2.5 py-1 text-sm text-fg-2">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <SectionTitle eyebrow={c.how.eyebrow} title={c.how.title} />
              <div className="-mt-4 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
                {c.how.items.map((h, i) => (
                  <div key={h.title} className="flex gap-5 bg-bg p-6">
                    <span className="font-mono text-sm text-accent">0{i + 1}</span>
                    <div>
                      <p className="font-medium">{h.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-fg-2">{h.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative overflow-clip border-t border-line">
          <div className="grid-bg pointer-events-none absolute inset-0 rotate-180" />
          <div className="relative mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 sm:py-36">
            <Reveal>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">{c.contact.eyebrow}</p>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">{c.contact.title}</h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-fg-2">{c.contact.lede}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition hover:brightness-110">
                  {c.contact.email} <Arrow />
                </a>
                <CopyEmail email={profile.email} copy={c.contact.copy} copied={c.contact.copied} />
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-lg px-5 py-3 text-sm font-medium ring-1 ring-line-strong transition hover:bg-white/5">
                  LinkedIn ↗
                </a>
              </div>
              <p className="mt-6 font-mono text-sm text-fg-3">{profile.email}</p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer text={c.footer} />
    </>
  );
}
