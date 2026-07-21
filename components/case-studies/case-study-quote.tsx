import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { NumericText } from "@/components/ui/num";
import { cn } from "@/lib/utils";

export type CaseStudyQuoteProps = {
  children: ReactNode;
  author?: string;
  role?: string;
  source?: string;
  /** Larger treatment for hero-style pull quotes. */
  variant?: "inline" | "pull";
  className?: string;
};

/**
 * Attributed client quote for case study pages and MDX.
 * One focal quote per use: serif accent mark, quiet attribution footer.
 */
export function CaseStudyQuote({
  children,
  author,
  role,
  source,
  variant = "inline",
  className,
}: CaseStudyQuoteProps) {
  const isPull = variant === "pull";

  const quoteBody =
    typeof children === "string" ? (
      <NumericText>{children}</NumericText>
    ) : (
      children
    );

  const attribution =
    author || role ? (
      <footer
        className={cn(
          "mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t pt-5",
          isPull
            ? "border-primary/15 dark:border-primary/20"
            : "border-border/50 dark:border-white/[0.06]",
        )}
      >
        {author ? (
          <cite className="font-primary text-sm font-medium not-italic text-foreground">
            {author}
          </cite>
        ) : null}
        {role ? (
          <span className="font-secondary text-sm text-muted-foreground">
            {author ? "· " : null}
            <span className="serif-accent font-accent italic text-foreground/75">
              {role}
            </span>
          </span>
        ) : null}
        {source ? (
          <Link
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-auto inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            View source
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
          </Link>
        ) : null}
      </footer>
    ) : null;

  return (
    <blockquote
      className={cn(
        "not-prose relative border-none p-0",
        isPull ? "max-w-none" : "my-8",
        className,
      )}
    >
      <span
        className={cn(
          "font-accent pointer-events-none select-none leading-none",
          isPull
            ? "block text-7xl text-primary/45 md:text-8xl dark:text-primary/30"
            : "relative text-[2.75rem] text-primary/35 dark:text-primary/20",
        )}
        aria-hidden
      >
        &ldquo;
      </span>

      <p
        className={cn(
          "relative font-secondary text-foreground/90",
          isPull
            ? "-mt-5 pl-0.5 text-[1.35rem] font-medium leading-snug md:-mt-6 md:text-[1.625rem] lg:text-[1.75rem]"
            : "-mt-1 text-base leading-relaxed sm:text-[1.0625rem] md:leading-[1.65]",
        )}
      >
        {quoteBody}
      </p>

      {attribution}
    </blockquote>
  );
}
