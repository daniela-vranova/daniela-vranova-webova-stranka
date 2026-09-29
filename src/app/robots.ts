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
 * robots.txt (Next konvence `app/robots.ts`).
 *
 * Podle hlavičky Host vrátí adresu příslušné domény a odkaz na její vlastní sitemap.xml.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  if (!SITE_LAUNCHED) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  const headersList = await headers();
  const rawHost =
    headersList.get("x-forwarded-host") ?? headersList.get("host") ?? "";
  const host = rawHost.split(":")[0].replace(/^www\./, "");

  const isEn = host === EN_DOMAIN;
  const siteUrl = isEn ? EN_SITE_URL : CS_SITE_URL;

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
