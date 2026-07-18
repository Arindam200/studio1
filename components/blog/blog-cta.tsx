import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconPhoneFilled } from "@tabler/icons-react";
import { PencilLine } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function BlogCta() {
  return (
    <aside
      className={cn(
        "group/card not-prose relative mt-14 flex flex-col gap-7 overflow-hidden rounded-xl border-2 p-6 sm:p-8",
        "bg-accent dark:bg-muted-foreground/5",
        "transition-transform duration-300 hover:-translate-y-1",
      )}
      aria-labelledby="blog-cta-heading"
    >
      <header className="flex items-center gap-3.5">
        <span
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-lg",
            "bg-background text-foreground",
            "dark:bg-background/80",
          )}
          aria-hidden
        >
          <PencilLine weight="regular" className="size-6" />
        </span>
        <h2
          id="blog-cta-heading"
          className="font-inter text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]"
        >
          Need help with technical content?
        </h2>
      </header>

      <div className="h-px w-full bg-border/80" />

      <p className="font-secondary text-[0.9375rem] leading-relaxed text-foreground/80">
        Studio1 helps devtool and SaaS teams ship documentation, blogs, and
        DevRel programs that convert developers. Tell us about your product, and
        we will suggest a practical plan.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button variant="gradient" size="cta" asChild>
          <a
            href="https://cal.com/studio1/collab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a call <IconPhoneFilled className="size-4" />
          </a>
        </Button>
        <Link
          href="mailto:contact@studio1hq.com"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Email us at contact@studio1hq.com
        </Link>
      </div>
    </aside>
  );
}
