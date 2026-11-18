import type { MetadataRoute } from "next";
import { projectSlugs } from "@/lib/content";
import { locales } from "@/lib/i18n";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pablobottoni.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) => [
    { url: `${base}/${lang}`, priority: 1 },
    ...projectSlugs.map((slug) => ({ url: `${base}/${lang}/work/${slug}`, priority: 0.8 })),
  ]);
}
