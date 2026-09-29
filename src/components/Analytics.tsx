"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CS_DOMAIN, EN_DOMAIN } from "@/lib/site";

const scriptUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL;
const productionHosts = [CS_DOMAIN, EN_DOMAIN];

/** Plausible poskytuje každému webu vlastní URL skriptu v nastavení účtu. */
export function Analytics() {
  const [onProductionDomain, setOnProductionDomain] = useState(false);

  useEffect(() => {
    setOnProductionDomain(productionHosts.includes(window.location.hostname.replace(/^www\./, "")));
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
