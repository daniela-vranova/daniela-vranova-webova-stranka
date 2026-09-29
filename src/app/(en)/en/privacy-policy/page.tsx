import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";
import { privacyPolicyEn } from "@/content/legal.en";
import { SITE_LAUNCHED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Daniela Vránová Translations",
  description:
    "How personal data submitted through this website is collected, used, protected and retained.",
  alternates: {
    canonical: "https://czech-translator.eu/privacy-policy",
    languages: {
      cs: "https://soudni-anglictina.cz/ochrana-osobnich-udaju",
      en: "https://czech-translator.eu/privacy-policy",
      "x-default": "https://soudni-anglictina.cz/ochrana-osobnich-udaju",
    },
  },
  robots: SITE_LAUNCHED ? undefined : { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage doc={privacyPolicyEn} locale="en" />;
}
