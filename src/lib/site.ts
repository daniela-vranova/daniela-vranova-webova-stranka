/**
 * ---------------------------------------------------------------------------
 * ADRESA WEBU A STAV SPUŠTĚNÍ
 * ---------------------------------------------------------------------------
 * Nastavení domén pro českou a anglickou jazykovou mutaci:
 *   - Česká doména: soudni-anglictina.cz
 *   - Anglická doména: czech-translator.eu
 * ---------------------------------------------------------------------------
 */

/** Primární česká doména bez `www`. */
export const CS_DOMAIN = "soudni-anglictina.cz";

/** Anglická doména bez `www`. */
export const EN_DOMAIN = "czech-translator.eu";

/** Absolutní URL české domény. */
export const CS_SITE_URL = `https://${CS_DOMAIN}`;

/** Absolutní URL anglické domény. */
export const EN_SITE_URL = `https://${EN_DOMAIN}`;

/** Primární výchozí doména (česká). */
export const SITE_URL = CS_SITE_URL;

/** Produkční web je veřejný a připravený k indexaci. */
export const SITE_LAUNCHED = true;

/**
 * Absolutní URL dané cesty.
 * Pokud není doména určena, použije se výchozí česká doména.
 */
export function absoluteUrl(path: string, domain: "cs" | "en" = "cs"): string {
  const base = domain === "en" ? EN_SITE_URL : CS_SITE_URL;
  if (path === "/" || path === "") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
