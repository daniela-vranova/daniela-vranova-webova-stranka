"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";

const scriptUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL;
const productionHost = new URL(SITE_URL).hostname;

/** Plausible poskytuje každému webu vlastní URL skriptu v nastavení účtu. */
export function Analytics() {
  const [onProductionDomain, setOnProductionDomain] = useState(false);

  useEffect(() => {
    setOnProductionDomain(window.location.hostname === productionHost);
  }, []);

  if (!scriptUrl || !onProductionDomain) return null;

  return (
    <>
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
      </Script>
      <Script src={scriptUrl} strategy="afterInteractive" />
    </>
  );
}
