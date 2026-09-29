import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { termsAndConditions } from "@/content/legal";
import { SITE_LAUNCHED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Obchodní podmínky – Překlady Vránová",
  description:
    "Podmínky objednávky, ceny a platby, dodání překladu, odstoupení od smlouvy a reklamace.",
  alternates: {
    canonical: "https://soudni-anglictina.cz/obchodni-podminky",
    languages: {
      cs: "https://soudni-anglictina.cz/obchodni-podminky",
      en: "https://czech-translator.eu/terms-and-conditions",
      "x-default": "https://soudni-anglictina.cz/obchodni-podminky",
    },
  },
  /* Stejný vypínač jako kořenový layout (`lib/site.ts`) – dokud web běží
     jako náhled, drží noindex spolu se zbytkem webu. */
  robots: SITE_LAUNCHED ? undefined : { index: false, follow: false },
};

/** Obchodní podmínky. Jen česká mutace, viz `content/legal.ts`. */
export default function TermsAndConditionsPage() {
  return <LegalDocumentPage doc={termsAndConditions} />;
}
