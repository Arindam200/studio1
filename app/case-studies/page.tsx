import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Target, ChartLineUp } from "@phosphor-icons/react/dist/ssr";
import { getAllCaseStudies, getFeaturedCaseStudy } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { FeaturedCaseStudy } from "@/components/case-studies/featured-case-study";
import { getClientLogo } from "@/components/case-studies/client-logos";
import {
  sideBeamGlowLeftSubtle,
  sideBeamGlowRightSubtle,
} from "@/lib/shadows";
import { baseUrl } from "@/app/sitemap";

const measures = [
  "Search visibility for high-intent and category keywords",
  "Content performance: views, engagement, and backlinks",
  "Developer adoption signals: docs usage, sign-ups, workflows",
  "Community reach across DEV, Medium, Product Hunt, and social",
  "Product-led outcomes tied to content and distribution",
];

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();
  const featuredStudy = getFeaturedCaseStudy();
  const remainingStudies = studies.filter((s) => s.slug !== featuredStudy?.slug);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Studio1 Case Studies",
    description:
      "Real-world examples of how Studio1 helps devtool and SaaS companies drive growth, rankings, and developer adoption through technical content and distribution.",
    url: `${baseUrl}/case-studies`,
    isPartOf: {
      "@type": "WebSite",
      name: "Studio1",
      url: baseUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: studies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${baseUrl}/case-studies/${study.slug}`,
        name: study.title,
      })),
    },
  };

  return (
    <section className="relative mx-auto mt-24 flex max-w-7xl flex-col px-4 pb-24">
      <div aria-hidden className={sideBeamGlowLeftSubtle} />
      <div aria-hidden className={sideBeamGlowRightSubtle} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* Hero */}
      <div className="z-20 mt-20 text-center">
        <Badge className="mx-auto mb-6 flex w-fit items-center gap-2 pb-1">
          <Trophy className="size-5" weight="fill" />
          Case Studies
        </Badge>
        <h1 className="mb-4 text-4xl font-bold sm:text-6xl">
          Results developers can{" "}
          <span className="bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent italic text-transparent">
            verify
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          How Studio1 partners with developer-first companies — docs, content,
          community, and launches — with outcomes you can check: GitHub stars,
          rankings, reach, and public endorsements.
        </p>
      </div>

      {/* Client logo row */}
      <div className="z-20 mt-12 flex flex-wrap items-center justify-center gap-3">
        {studies.map((study) => {
          const logo = getClientLogo(study.slug);
          if (!logo) return null;
          return (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              aria-label={study.client}
              className="flex items-center gap-2.5 rounded-full border bg-background/80 px-4 py-2 backdrop-blur-md transition-colors duration-300 hover:border-primary/50 hover:text-primary"
            >
              <Image
                src={logo.icon}
                alt=""
                className="size-5 rounded object-contain"
              />
              <span className="text-sm font-medium">{study.client}</span>
            </Link>
          );
        })}
      </div>

      {/* Featured study */}
      {featuredStudy ? (
        <div className="z-20 mt-16">
          <FeaturedCaseStudy />
        </div>
      ) : null}

      {/* Cards */}
      <div className="z-20 mt-14 grid w-full min-w-0 grid-cols-1 gap-6 md:grid-cols-2">
        {remainingStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      {/* Approach + What we measure */}
      <div className="z-20 mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-background/80 p-8 backdrop-blur-md">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <Target className="size-5" weight="fill" />
            <h2 className="text-lg font-semibold text-foreground">
              Our Approach
            </h2>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            Studio1 works as an embedded DevRel and technical content partner.
            Every engagement is built around a two-track execution model,
            supported by distribution-first thinking across developer platforms.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="font-medium text-foreground">
                  Growth content
                </strong>{" "}
                to capture demand, rankings, and discovery.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="font-medium text-foreground">
                  Technical and use-case content
                </strong>{" "}
                to activate developers and drive real product adoption.
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-background/80 p-8 backdrop-blur-md">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <ChartLineUp className="size-5" weight="fill" />
            <h2 className="text-lg font-semibold text-foreground">
              What We Measure
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {measures.map((measure) => (
              <li key={measure} className="flex gap-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{measure}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="z-20 mt-20 flex flex-col items-center gap-5 rounded-2xl border bg-background/80 p-10 text-center backdrop-blur-md sm:p-14">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Want results like these?
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
          Share your ICP and competitors — we&apos;ll outline a growth +
          technical content strategy for your product.
        </p>
        <Button variant="gradient" size="cta" asChild>
          <a
            href="https://cal.com/studio1/collab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book an intro call
          </a>
        </Button>
      </div>
    </section>
  );
}
