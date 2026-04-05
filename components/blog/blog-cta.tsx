import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconPhoneFilled } from "@tabler/icons-react";

export function BlogCta() {
  return (
    <aside
      className="not-prose mt-14 rounded-2xl border bg-gradient-to-br from-primary/10 to-primary/5 p-6 md:p-8"
      aria-labelledby="blog-cta-heading"
    >
      <h2
        id="blog-cta-heading"
        className="text-xl md:text-2xl font-bold mb-3 text-foreground"
      >
        Need help with technical content?
      </h2>
      <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-xl">
        Studio1 helps devtool and SaaS teams ship documentation, blogs, and
        DevRel programs that convert developers. Tell us about your product—we
        will suggest a practical plan.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <Button className="h-11" asChild>
          <a
            href="https://cal.com/studio1/collab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a call <IconPhoneFilled className="size-4 ml-1" />
          </a>
        </Button>
        <Link
          href="mailto:contact@studio1hq.com"
          className="text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          Email us at contact@studio1hq.com
        </Link>
      </div>
    </aside>
  );
}
