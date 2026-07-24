import type { CaseStudyQuote as CaseStudyQuoteData } from "@/lib/case-studies";
import { cn } from "@/lib/utils";
import { CaseStudyQuote } from "@/components/case-studies/case-study-quote";

type CaseStudyHighlightQuotesProps = {
  quote: CaseStudyQuoteData;
  client: string;
  /** When true, eyebrow reflects outcome highlights instead of client quotes. */
  fromOutcomes?: boolean;
  className?: string;
};

/** Shared surface with CaseStudyHighlightStats — hero testimonial glass. */
export const caseStudyHighlightCardClassName =
  "rounded-2xl border border-border/50 bg-gradient-to-br from-background/95 via-background/90 to-primary/[0.06] px-5 py-5 backdrop-blur-xl shadow-elevated-card ring-1 ring-primary/10 text-foreground dark:border-white/[0.08] dark:from-white/[0.04] dark:to-white/[0.01] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] dark:ring-white/[0.04] md:px-6 md:py-6";

/**
 * Single editorial pull quote when a study has no verified metrics.
 */
export function CaseStudyHighlightQuotes({
  quote,
  client,
  fromOutcomes = false,
  className,
}: CaseStudyHighlightQuotesProps) {
  return (
    <section
      aria-label="Client highlight"
      className={cn(caseStudyHighlightCardClassName, className)}
    >
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-primary dark:text-primary/70">
        {fromOutcomes ? `Key outcome with ${client}` : `What ${client} said`}
      </p>

      <CaseStudyQuote
        variant="pull"
        author={quote.author}
        role={quote.role}
        source={quote.source}
        avatar={quote.avatar}
      >
        {quote.text}
      </CaseStudyQuote>
    </section>
  );
}
