import Hero from "@/components/landing/hero";
import Trustedby from "@/components/landing/trustedby";
import { homePageMetadata, websiteJsonLd } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { getSafeLocale } from "@/lib/i18n-messages";

const TechnicalDomains = dynamic(() => import("@/components/landing/domains"), {
  loading: () => <SectionSkeleton />,
});
const Features = dynamic(() => import("@/components/landing/features"), {
  loading: () => <SectionSkeleton />,
});
const Testimonials = dynamic(
  () => import("@/components/landing/testimonials"),
  {
    loading: () => <SectionSkeleton />,
  },
);
const GlobalReach = dynamic(() => import("@/components/landing/global-reach"), {
  loading: () => <SectionSkeleton />,
});
const DeveloperJourney = dynamic(
  () => import("@/components/landing/developer-journey"),
  {
    loading: () => <SectionSkeleton />,
  },
);
const CaseStudyCards = dynamic(
  () => import("@/components/landing/case-study-cards"),
  {
    loading: () => <SectionSkeleton />,
  },
);

function SectionSkeleton() {
  return <div className="mx-auto h-64 w-full max-w-7xl px-6 sm:px-8" />;
}

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));
  const t = await getTranslations("Metadata.home");

  return homePageMetadata({
    title: t("title"),
    description: t("description"),
    locale,
  });
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <div className="overflow-x-hidden h-fit !max-h-fit">
        <Hero />
        <Trustedby />
        <TechnicalDomains />
        <Features />
        <Testimonials />
        <GlobalReach />
        <DeveloperJourney />
        <CaseStudyCards />
      </div>
    </>
  );
}
