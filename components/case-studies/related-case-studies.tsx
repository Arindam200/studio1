import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { NumericText } from "@/components/ui/num";
import { getClientLogo } from "@/components/case-studies/client-logos";
import type { CaseStudyMeta } from "@/lib/case-studies";

type RelatedCaseStudiesProps = {
  studies: CaseStudyMeta[];
};

/** "More case studies" strip shown after the article body. */
export function RelatedCaseStudies({ studies }: RelatedCaseStudiesProps) {
  if (studies.length === 0) return null;

  return (
    <section className="mt-16 max-w-4xl">
      <h2 className="font-primary text-2xl font-semibold tracking-tight">
        More{" "}
        <span className="bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent italic text-transparent">
          case studies
        </span>
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map((study) => (
          <RelatedCaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}

function RelatedCaseStudyCard({ study }: { study: CaseStudyMeta }) {
  const logo = getClientLogo(study.slug);

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border bg-background/80 p-5 backdrop-blur-md transition-colors hover:border-foreground/20 dark:hover:border-white/20"
    >
      <div className="flex min-w-0 items-center gap-2.5">
        {logo ? (
          <Image
            src={logo.icon}
            alt=""
            className="h-6 w-auto shrink-0 rounded-md object-contain"
          />
        ) : null}
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">
            {study.client}
          </p>
          <p className="truncate text-[11px] font-medium uppercase tracking-wide text-primary">
            {study.category}
          </p>
        </div>
      </div>

      <h3 className="line-clamp-2 font-primary text-base font-semibold leading-snug text-foreground">
        <NumericText>{study.title}</NumericText>
      </h3>

      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
        Read case study
        <ArrowRight
          weight="bold"
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
