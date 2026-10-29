import Image from "next/image";
import { getContent, type Locale } from "@/content";

/*
 * Jeden vodorovný pás, který pomalu a nekonečně jede doleva. Stavba i CSS
 * (`.marquee-stage` / `.marquee-row`) jsou stejné jako u dřívějšího karuselu:
 * karty jsou v DOM dvakrát za sebou, posun o −50 % končí přesně na začátku
 * klonu. Mezery jdou přes `margin`, ne `gap`, jinak by smyčka poskočila.
 */
export function GoogleReviews({ locale }: { locale: Locale }) {
  const { googleReviews } = getContent(locale);
  const uniqueCount = googleReviews.length;
  const cards = [...googleReviews, ...googleReviews];

  return (
    <div
      className="marquee-stage relative overflow-hidden [margin-inline:calc(var(--page-x)*-1)]"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <ul
        className="marquee-row py-1"
        style={{ "--marquee-duration": "120s" } as React.CSSProperties}
      >
        {cards.map((r, idx) => (
          <li
            key={`${r.name}-${idx}`}
            aria-hidden={idx >= uniqueCount || undefined}
            className="me-6 flex w-[290px] shrink-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-6 sm:w-[360px] lg:w-[400px]"
          >
            <div className="flex items-center gap-3">
              <Image
                src={r.avatar}
                alt=""
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-on-deep">{r.name}</p>
                <p className="text-small text-on-deep-2">
                  {r.when} · Google
                </p>
              </div>
            </div>
            <div
              role="img"
              aria-label={
                locale === "en" ? "5 out of 5 stars" : "5 z 5 hvězdiček"
              }
              className="mt-4 text-lg tracking-widest text-yellow-400"
            >
              ★★★★★
            </div>
            <blockquote className="mt-3 flex-1 text-body text-on-deep">
              {r.text}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
