import { CaseStudyCardCompact } from "@/components/case-studies/case-study-card";
import type { CaseStudyMeta } from "@/lib/case-studies";

type RelatedCaseStudiesProps = {
  studies: CaseStudyMeta[];
};

/** "More case studies" strip shown after the article body. */
export function RelatedCaseStudies({ studies }: RelatedCaseStudiesProps) {
  if (studies.length === 0) return null;

  return (
    <section className="mt-16 max-w-4xl">
      <h2 className="font-inter text-2xl font-semibold tracking-tight">
        More{" "}
        <span className="bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent italic text-transparent">
          case studies
        </span>
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map((study) => (
          <CaseStudyCardCompact key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
