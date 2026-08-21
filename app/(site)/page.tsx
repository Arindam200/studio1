import Hero from "@/components/landing/hero";
import Trustedby from "@/components/landing/trustedby";
import TechnicalDomains from "@/components/landing/domains";
import Features from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
import GlobalReach from "@/components/landing/global-reach";
import DeveloperJourney from "@/components/landing/developer-journey";
import CaseStudyCards from "@/components/landing/case-study-cards";
import { homePageMetadata, websiteJsonLd } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { DEFAULT_LOCALE } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({
    locale: DEFAULT_LOCALE,
    namespace: "Metadata.home",
  });

  return homePageMetadata({
    title: t("title"),
    description: t("description"),
    locale: DEFAULT_LOCALE,
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
