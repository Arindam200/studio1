import React from "react";
import { Metadata } from "next";
import Hero from "@/components/pages/organic-campaign/hero";
import Deliverables from "@/components/pages/organic-campaign/deliverables";
import Process from "@/components/pages/organic-campaign/process";
import Reach from "@/components/pages/organic-campaign/reach";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Organic Growth Campaign",
  description:
    "Comprehensive viral marketing campaign that creates buzz, drives adoption, and establishes your product in the developer community.",
  path: "/organic-campaign",
});

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Organic Growth Campaign",
    description:
      "Comprehensive viral marketing campaign that creates buzz, drives adoption, and establishes your product in the developer community.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Organic Developer Marketing",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/organic-campaign",
  };

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Organic Growth Campaign", path: "/organic-campaign" },
            ]),
          ),
        }}
      />
      <Hero />
      <Deliverables />
      <Process />
      <Reach />
    </div>
  );
}
