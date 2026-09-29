import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://czech-translator.eu",
    languages: {
      cs: "https://soudni-anglictina.cz",
      en: "https://czech-translator.eu",
      "x-default": "https://soudni-anglictina.cz",
    },
  },
};

/** Anglická mutace pod `/en`. Stejné sekce, jen jiný obsahový slovník. */
export default function EnHomePage() {
  return <HomePage locale="en" />;
}
