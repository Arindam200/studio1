import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NumericText } from "@/components/ui/num";
import { getClientLogo } from "@/components/case-studies/client-logos";
import { getFeaturedCaseStudy } from "@/lib/case-studies";

export function FeaturedCaseStudy() {
  const study = getFeaturedCaseStudy();
  if (!study) return null;

  const logo = getClientLogo(study.slug);
  const metrics = study.metrics.slice(0, 3);
  const outcomes = study.outcomes.slice(0, 3);

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group relative grid min-w-0 grid-cols-1 overflow-hidden rounded-2xl border bg-background/80 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 md:grid-cols-2"
    >
      <div className="flex min-w-0 flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
        <div>
          <div className="flex items-center gap-2.5">
            {logo ? (
              <Image
                src={logo.icon}
                alt=""
                width={28}
                height={28}
                className="size-7 shrink-0 rounded object-contain"
              />
            ) : null}
            <span className="text-sm font-medium text-foreground">
              {study.client}
            </span>
            <Badge variant="secondary" className="text-[11px] uppercase tracking-wide">
              {study.category}
            </Badge>
          </div>

          <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            <NumericText>{study.title}</NumericText>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            {study.summary}
          </p>
        </div>

        {metrics.length > 0 ? (
          <dl className="grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="min-w-0">
                <dt className="sr-only">{metric.label}</dt>
                <dd className="font-numeric text-2xl font-semibold tabular-nums leading-none text-primary md:text-3xl">
                  <NumericText>{metric.value}</NumericText>
                </dd>
                <span className="mt-1.5 block text-[11px] leading-snug text-muted-foreground">
                  {metric.label}
                </span>
              </div>
            ))}
          </dl>
        ) : outcomes.length > 0 ? (
          <ul className="space-y-2.5 border-t border-border/60 pt-6">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2">
                <CheckCircle
                  weight="fill"
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span className="text-sm leading-snug text-muted-foreground">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        ) : null}

        <Button
          variant="gradient"
          size="cta"
          className="w-fit"
          tabIndex={-1}
          asChild
        >
          <span>
            Read the case study
            <ArrowUpRight
              weight="bold"
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </Button>
      </div>

      <div className="min-w-0 border-t p-6 sm:p-8 md:border-l md:border-t-0 md:p-8 lg:p-10">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-muted md:aspect-auto md:h-full md:min-h-[16rem]">
          <Image
            src={study.cover}
            alt={`${study.client} case study`}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 40rem"
            priority
          />
        </div>
      </div>
    </Link>
  );
}
