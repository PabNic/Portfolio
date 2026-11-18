import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { hasLocale, locales } from "@/lib/i18n";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: "#08090a" };

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getContent(lang);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://pablobottoni.vercel.app"),
    title: { default: meta.title, template: "%s · Pablo Bottoni" },
    description: meta.description,
    keywords: [
      "AI Product Engineer",
      "Technical Product Manager",
      "Product Owner",
      "Full Stack Developer",
      "LLM",
      "AI agents",
      "Vercel AI SDK",
      "Next.js",
      "TypeScript",
      "Remote",
    ],
    authors: [{ name: "Pablo Bottoni" }],
    alternates: { languages: { en: "/en", es: "/es" } },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: lang === "es" ? "es_AR" : "en_US",
      images: [{ url: "/og.png", width: 1200, height: 627, alt: meta.title }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: ["/og.png"] },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
