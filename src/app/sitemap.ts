import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import {
  SITE_LAUNCHED,
  CS_SITE_URL,
  EN_SITE_URL,
  EN_DOMAIN,
} from "@/lib/site";

export const dynamic = "force-dynamic";

/**
 * sitemap.xml (Next konvence `app/sitemap.ts`).
 *
 * Každá doména potřebuje vlastní sitemap.xml. Podle hlavičky Host
 * vrátí adresu příslušné domény (česká: soudni-anglictina.cz, anglická: czech-translator.eu).
 * Web je jednostránkový, takže sitemapa má vždy jednu URL s hreflang alternatami.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!SITE_LAUNCHED) return [];

  const headersList = await headers();
  const rawHost =
    headersList.get("x-forwarded-host") ?? headersList.get("host") ?? "";
  const host = rawHost.split(":")[0].replace(/^www\./, "");

  const isEn = host === EN_DOMAIN;
  const url = isEn ? EN_SITE_URL : CS_SITE_URL;

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          cs: CS_SITE_URL,
          en: EN_SITE_URL,
          "x-default": CS_SITE_URL,
        },
      },
    },
  ];
}
