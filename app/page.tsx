import Hero from "@/components/landing/hero";
import Trustedby from "@/components/landing/trustedby";
import Services from "@/components/landing/services";
import Features from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
import CaseStudyCards from "@/components/landing/case-study-cards";
import DeveloperJourney from "@/components/landing/developer-journey";
import GlobalReach from "@/components/landing/global-reach";
import TechnicalDomains from "@/components/landing/domains";
import RotatingPeople from "@/components/landing/rotating-people";
import { homePageMetadata, websiteJsonLd } from "@/lib/seo";

export const metadata = homePageMetadata();

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
        <Services />
        <CaseStudyCards />
        <DeveloperJourney />
        <GlobalReach />
        <Features />
        <Testimonials />
      </div>
    </>
  );
}
