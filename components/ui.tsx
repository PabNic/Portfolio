import Image from "next/image";
import type { ReactNode } from "react";
import { profile } from "@/lib/content";

export const hatStyles = {
  ai: "text-ai bg-ai/10 ring-ai/25",
  eng: "text-eng bg-eng/10 ring-eng/25",
  pm: "text-pm bg-pm/10 ring-pm/25",
} as const;

export function HatPill({ hat, label }: { hat: keyof typeof hatStyles; label: string }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ring-1 ring-inset ${hatStyles[hat]}`}>
      {label}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
      <span className="h-px w-6 bg-accent/60" />
      {children}
    </p>
  );
}

export function SectionTitle({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {lede && <p className="mt-4 text-pretty text-lg leading-relaxed text-fg-2">{lede}</p>}
    </div>
  );
}

export function BrowserFrame({
  src,
  alt,
  url,
  priority,
}: {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-strong bg-bg-card shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
        </span>
        {url && (
          <span className="mx-auto truncate rounded-md bg-white/5 px-3 py-0.5 font-mono text-[11px] text-fg-3">{url}</span>
        )}
      </div>
      <Image src={src} alt={alt} width={1440} height={900} priority={priority} className="h-auto w-full" />
    </div>
  );
}

export function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-2 font-mono text-[12px] leading-snug text-fg-2">
      {steps.map((s, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-px grid size-5 shrink-0 place-items-center rounded border border-line-strong text-[10px] text-fg-3">
            {i + 1}
          </span>
          <span>{s}</span>
        </li>
      ))}
    </ol>
  );
}

export const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const External = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export function Footer({ text }: { text: string }) {
  const links = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    { label: "Email", href: `mailto:${profile.email}` },
  ];
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-fg-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} Pablo Bottoni. {text}
        </p>
        <div className="flex gap-5">
          {links.map((l) => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:text-fg">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
