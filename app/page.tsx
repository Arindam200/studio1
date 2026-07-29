import Hero from "@/components/landing/hero";
import Trustedby from "@/components/landing/trustedby";
import Features from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
import CaseStudyCards from "@/components/landing/case-study-cards";
import DeveloperJourney from "@/components/landing/developer-journey";
import GlobalReach from "@/components/landing/global-reach";
import TechnicalDomains from "@/components/landing/domains";
import { homePageMetadata, websiteJsonLd } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { getSafeLocale } from "@/lib/i18n-messages";

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
