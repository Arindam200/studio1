import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "@phosphor-icons/react/dist/ssr";
import { getAllCaseStudies, getFeaturedCaseStudy } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { FeaturedCaseStudy } from "@/components/case-studies/featured-case-study";
import { getClientLogo } from "@/components/case-studies/client-logos";
import {
  sideBeamGlowLeftSubtle,
  sideBeamGlowRightSubtle,
} from "@/lib/shadows";
import { baseUrl } from "@/app/sitemap";
import { absoluteImageUrl } from "@/lib/seo";

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
        image: absoluteImageUrl(study.cover),
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
        <Badge className="mx-auto mb-6 flex w-fit items-center gap-2 bg-[color-mix(in_hsl,hsl(var(--primary-surface))_85%,hsl(var(--primary))_15%)] pb-1 hover:bg-[color-mix(in_hsl,hsl(var(--primary-surface))_85%,hsl(var(--primary))_15%)] dark:hover:bg-primary">
          <Trophy className="size-5" weight="fill" />
          Case Studies
        </Badge>
        <h1 className="mb-5 font-inter text-4xl font-bold tracking-tight sm:text-6xl">
          Results developers can{" "}
          <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent italic text-transparent">
            verify
          </span>
        </h1>
        <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
          Real outcomes from technical content, DevRel, and distribution work.
        </p>
      </div>

      {/* Featured */}
      {featuredStudy ? (
        <div className="z-20 mt-16">
          <FeaturedCaseStudy />
        </div>
      ) : null}

      {/* Grid */}
      <div className="z-20 mt-8 grid w-full min-w-0 grid-cols-1 gap-8 md:grid-cols-2">
        {remainingStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      {/* Closing logo wall */}
      <div className="z-20 mt-24 flex flex-col items-center">
        <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by developer-first teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {studies.map((study) => {
            const logo = getClientLogo(study.slug);
            if (!logo) return null;
            return (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                aria-label={study.client}
                className="flex items-center gap-2.5 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={logo.icon}
                  alt=""
                  className="size-6 rounded object-contain"
                />
                <span className="text-sm font-medium">{study.client}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
