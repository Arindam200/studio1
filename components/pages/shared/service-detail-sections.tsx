import { CaseStudyResult, type CaseStudyResultData } from "@/components/case-studies/case-study-result";
import { elevatedCardShadow, serviceCardHoverGlow } from "@/lib/shadows";
import { cn } from "@/lib/utils";

type ServiceDetailItem = {
  title: string;
  description: string;
  points?: string[];
};

type ServiceDetailSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceDetailItem[];
  columns?: "two" | "three";
};

const cardSurface = cn(
  "group relative overflow-hidden rounded-lg border bg-background/80 p-6 backdrop-blur-md",
  elevatedCardShadow,
);

export function ServiceDetailSection({
  eyebrow,
  title,
  description,
  items,
  columns = "three",
}: ServiceDetailSectionProps) {
  return (
    <section id="work" className="relative scroll-mt-28 px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="font-secondary text-sm font-medium tracking-wide text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-primary text-4xl font-normal tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div
          className={cn(
            "grid gap-5",
            columns === "two" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {items.map((item) => (
            <article key={item.title} className={cardSurface}>
              <div className={serviceCardHoverGlow} />
              <div className="relative z-[1]">
                <h3 className="font-inter text-xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {item.points?.length ? (
                  <ul className="mt-5 space-y-2 border-t border-border/60 pt-4">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-foreground/85"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceProofSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  study: CaseStudyResultData;
};

export function ServiceProofSection({
  eyebrow = "Proof",
  title,
  description,
  study,
}: ServiceProofSectionProps) {
  return (
    <section className="relative px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="font-secondary text-sm font-medium tracking-wide text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-primary text-4xl font-normal tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <CaseStudyResult study={study} variant="featured" />
      </div>
    </section>
  );
}
