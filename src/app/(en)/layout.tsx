import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import { EN_SITE_URL, SITE_LAUNCHED } from "@/lib/site";
import "../globals.css";

/**
 * Kořenový layout ANGLICKÉ mutace (`/en`). Proč dva kořenové layouty místo
 * jednoho sdíleného, viz `app/(cs)/layout.tsx`.
 */
const description =
  "Certified English translations and interpreting in Prague since 2004. Hard-copy and electronic certified translations. Free, no-obligation quote.";

const title = "English Translator & Interpreter in Prague | Daniela Vránová";

export const metadata: Metadata = {
  metadataBase: new URL(EN_SITE_URL),
  title,
  description,
  alternates: {
    canonical: "https://czech-translator.eu",
    languages: {
      cs: "https://soudni-anglictina.cz",
      en: "https://czech-translator.eu",
      "x-default": "https://soudni-anglictina.cz",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: "cs_CZ",
    siteName: "Daniela Vránová Translations",
    url: "https://czech-translator.eu",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  /* Indexace se řídí jedním vypínačem v `lib/site.ts` (viz `app/(cs)/layout.tsx`). */
  robots: SITE_LAUNCHED ? undefined : { index: false, follow: false },
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootShell locale="en">{children}</RootShell>;
}
