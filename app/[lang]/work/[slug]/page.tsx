import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Arrow, BrowserFrame, External, Flow, Footer, HatPill } from "@/components/ui";
import { getContent, getProject, profile, projectSlugs } from "@/lib/content";
import { hasLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((lang) => projectSlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const p = getProject(lang, slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.kicker}`,
    description: p.oneLiner,
    alternates: { languages: { en: `/en/work/${slug}`, es: `/es/work/${slug}` } },
    openGraph: p.cover ? { images: [p.cover] } : undefined,
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="grid gap-4 border-t border-line py-12 md:grid-cols-[200px_1fr] md:gap-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-fg-3">{label}</h2>
        <div>{children}</div>
      </section>
    </Reveal>
  );
}

export default async function CaseStudy({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const c = getContent(lang);
  const p = getProject(lang, slug);
  if (!p) notFound();
  const L = c.caseLabels;
  const cs = p.caseStudy;
  const idx = c.projects.findIndex((x) => x.slug === p.slug);
  const next = c.projects[(idx + 1) % c.projects.length];
  const [first, ...gallery] = cs.gallery ?? [];

  return (
    <>
      <Nav lang={lang} labels={c.nav} cv={profile.cv} />
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6 sm:pt-36">
        <Reveal>
          <Link href={`/${lang}#work`} className="inline-flex items-center gap-2 text-sm text-fg-3 hover:text-fg">
            <span className="rotate-180"><Arrow /></span> {L.back}
          </Link>
          <div className="mt-8 flex flex-wrap gap-2">
            {p.hats.map((h) => (
              <HatPill key={h} hat={h} label={c.hatLabels[h]} />
            ))}
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">{p.name}</h1>
          <p className="mt-2 text-lg text-fg-3">{p.kicker}</p>
          <p className="mt-6 max-w-3xl text-pretty text-xl leading-relaxed text-fg-2">{p.oneLiner}</p>
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink transition hover:brightness-110">
              {L.visit} <External />
            </a>
          )}
        </Reveal>

        <Reveal>
          <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {[
              [L.role, p.role],
              [L.period, p.period],
              [L.status, p.status],
            ].map(([k, v]) => (
              <div key={k} className="bg-bg-elev p-5">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-fg-3">{k}</dt>
                <dd className="mt-2 text-sm text-fg">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {p.cover && (
          <Reveal>
            <div className="mt-12">
              <BrowserFrame src={p.cover} alt={p.name} url={p.live?.replace("https://", "")} priority />
            </div>
          </Reveal>
        )}

        <div className="mt-16">
          <Block label={L.context}>
            <p className="text-lg leading-relaxed text-fg-2">{cs.context}</p>
          </Block>
          <Block label={L.problem}>
            <p className="text-pretty text-xl font-medium leading-relaxed text-fg">{cs.problem}</p>
          </Block>
          <Block label={L.decisions}>
            <div className="grid gap-4 sm:grid-cols-2">
              {cs.decisions.map((d, i) => (
                <div key={d.title} className="rounded-xl border border-line bg-bg-elev p-5">
                  <p className="font-mono text-xs text-accent">0{i + 1}</p>
                  <p className="mt-2 font-medium">{d.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-2">{d.body}</p>
                </div>
              ))}
            </div>
          </Block>

          {first && (
            <Reveal>
              <figure className="grid items-center gap-8 border-t border-line py-12 md:grid-cols-[1fr_1.4fr]">
                <figcaption className="text-lg leading-relaxed text-fg-2">{first.caption}</figcaption>
                <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-line-strong shadow-2xl shadow-black/60">
                  <Image src={first.src} alt={first.alt} width={399} height={599} className="h-auto w-full" />
                </div>
              </figure>
            </Reveal>
          )}

          {cs.architecture && (
            <Block label={L.architecture}>
              <div className="rounded-xl border border-line bg-bg-elev p-5 sm:p-6">
                <Flow steps={cs.architecture} />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-fg-2">{s}</span>
                ))}
              </div>
            </Block>
          )}

          {gallery.length > 0 && (
            <Reveal>
              <div className="grid gap-6 border-t border-line py-12 md:grid-cols-[1.8fr_1fr] md:items-start">
                {gallery.map((g) => (
                  <figure key={g.src}>
                    {g.mobile ? (
                      <div className="mx-auto max-w-[260px] overflow-hidden rounded-[1.6rem] border-4 border-line-strong">
                        <Image src={g.src} alt={g.alt} width={390} height={844} className="h-auto w-full" />
                      </div>
                    ) : (
                      <BrowserFrame src={g.src} alt={g.alt} url={p.live?.replace("https://", "")} />
                    )}
                    <figcaption className="mt-3 text-center text-sm text-fg-3">{g.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          )}

          <Block label={L.outcome}>
            <ul className="space-y-3">
              {cs.outcome.map((o) => (
                <li key={o} className="flex gap-3 text-lg leading-relaxed text-fg">
                  <span className="mt-1 text-accent">✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </Block>
          <Block label={L.learned}>
            <blockquote className="border-l-2 border-accent pl-5 text-xl italic leading-relaxed text-fg-2">{cs.learned}</blockquote>
          </Block>
        </div>

        <Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link href={`/${lang}/work/${next.slug}`} className="group rounded-2xl border border-line bg-bg-elev p-6 transition hover:border-line-strong">
              <p className="font-mono text-xs uppercase tracking-widest text-fg-3">{L.next}</p>
              <p className="mt-3 flex items-center gap-2 text-xl font-semibold">
                {next.name} <span className="transition group-hover:translate-x-1"><Arrow /></span>
              </p>
              <p className="mt-1 text-sm text-fg-3">{next.kicker}</p>
            </Link>
            <div className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-6">
              <p className="font-medium">{L.cta}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a href={`mailto:${profile.email}`} className="rounded-lg bg-accent px-4 py-2 font-medium text-accent-ink">{c.contact.email}</a>
                <a href={profile.cv} download className="rounded-lg px-4 py-2 font-medium ring-1 ring-line-strong hover:bg-white/5">{c.nav.cv}</a>
              </div>
            </div>
          </div>
        </Reveal>
      </main>
      <Footer text={c.footer} />
    </>
  );
}
