import React from "react";
import { Metadata } from "next";
import Hero from "@/components/pages/influencer-management/hero";
import Services from "@/components/pages/influencer-management/services";
import Benefits from "@/components/pages/influencer-management/benefits";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Influencer Management",
  description:
    "We help you find relevant influencers, manage campaigns, and maximize results for your developer-focused brand visibility.",
  path: "/influencer-management",
});

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Influencer Management",
    description:
      "We help you find relevant influencers, manage campaigns, and maximize results for your developer-focused brand visibility.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Developer Influencer Marketing",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/influencer-management",
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
              { name: "Influencer Management", path: "/influencer-management" },
            ]),
          ),
        }}
      />
      <Hero />
      <Services />
      <Benefits />
    </div>
  );
}
