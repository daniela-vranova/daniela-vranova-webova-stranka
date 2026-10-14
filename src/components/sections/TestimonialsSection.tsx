import { Section } from "@/components/layout/Section";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { TrustindexWidget } from "@/components/ui/TrustindexWidget";
import { ReviewLinks } from "@/components/ui/ReviewLinks";
import { getContent, type Locale } from "@/content";

export function TestimonialsSection({ locale }: { locale: Locale }) {
  const { testimonials } = getContent(locale);

  return (
    <Section
      id="reference"
      tone="deep-light"
      labelledBy="testimonials-title"
      className="relative isolate overflow-hidden"
    >
      <TestimonialsBackdrop />
      <div className="max-w-text">
        <SectionLabel>{testimonials.label}</SectionLabel>
        <h2
          id="testimonials-title"
          className="mt-6 text-h2 text-ink [.on-deep_&]:text-on-deep"
        >
          {testimonials.title}
        </h2>
      </div>

      <div className="mt-12">
        <TrustindexWidget />
      </div>

      {/* Revize 2. kolo, bod 10.3 — cesta k ověřitelnému plnému znění. */}
      <p className="mt-8 text-small text-on-deep-2">
        {testimonials.reviewsNote.before} <ReviewLinks locale={locale} />
        {testimonials.reviewsNote.after}
      </p>
    </Section>
  );
}

/**
 * Pozadí sekce — sytá tmavá navy plocha s radial gradientem pro tekutý "navy liquid glassy" efekt.
 */
function TestimonialsBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-deep-light">
      <div className="absolute inset-0 section-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep via-deep/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep via-deep/50 to-transparent" />
    </div>
  );
}
