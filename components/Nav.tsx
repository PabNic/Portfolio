"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

type NavLabels = { work: string; about: string; experience: string; ask: string; contact: string; cv: string };

export function Nav({ lang, labels, cv }: { lang: Locale; labels: NavLabels; cv: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const other: Locale = lang === "en" ? "es" : "en";
  const switchHref = pathname.replace(/^\/(en|es)/, `/${other}`) || `/${other}`;
  const links = [
    { href: `/${lang}#work`, label: labels.work },
    { href: `/${lang}#about`, label: labels.about },
    { href: `/${lang}#experience`, label: labels.experience },
    { href: `/${lang}#ask`, label: labels.ask },
    { href: `/${lang}#contact`, label: labels.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${lang}`} className="flex items-center gap-2.5 font-medium tracking-tight">
          <span className="grid size-7 place-items-center rounded-md bg-accent text-[13px] font-semibold text-accent-ink">
            PB
          </span>
          <span className="hidden sm:inline">Pablo Bottoni</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-fg-2 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={switchHref}
            hrefLang={other}
            className="rounded-md px-2.5 py-1.5 font-mono text-xs uppercase text-fg-2 ring-1 ring-line transition hover:text-fg hover:ring-line-strong"
            aria-label={other === "es" ? "Ver en español" : "View in English"}
          >
            {other}
          </Link>
          <a
            href={cv}
            download
            className="hidden rounded-md bg-fg px-3.5 py-1.5 text-sm font-medium text-bg transition hover:bg-white sm:inline-block"
          >
            {labels.cv}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-md ring-1 ring-line md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-4 pb-5 pt-3 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-fg-2 hover:text-fg">
              {l.label}
            </a>
          ))}
          <a href={cv} download className="mt-3 block rounded-md bg-fg px-4 py-2.5 text-center text-sm font-medium text-bg">
            {labels.cv}
          </a>
        </div>
      )}
    </header>
  );
}
