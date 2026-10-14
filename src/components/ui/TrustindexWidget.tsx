"use client";

import { useEffect, useRef } from "react";

/**
 * Trustindex loader se vykreslí přímo za značku <script>, ze které se
 * spustil, takže ho musíme přidat do kontejneru ručně — `next/script`
 * by widget umístil mimo sekci.
 *
 * Skript se přidá jen jednou a při úklidu se nemaže: loader si hlídá, že
 * běží jednou, takže by ve StrictMode (dvojí spuštění efektu) druhý
 * skript nic nevykreslil a první widget by úklid už smazal.
 */
export function TrustindexWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host || host.dataset.loaded) return;
    host.dataset.loaded = "true";
    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?2adf19b83d75504c2a6665a4ad4";
    script.async = true;
    script.defer = true;
    host.appendChild(script);
  }, []);

  return <div ref={ref} />;
}
