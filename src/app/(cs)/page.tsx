import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://soudni-anglictina.cz",
    languages: {
      cs: "https://soudni-anglictina.cz",
      en: "https://czech-translator.eu",
      "x-default": "https://soudni-anglictina.cz",
    },
  },
};

/** Česká mutace na kořeni webu. Skladbu sekcí drží `HomePage`. */
export default function CsHomePage() {
  return <HomePage locale="cs" />;
}
