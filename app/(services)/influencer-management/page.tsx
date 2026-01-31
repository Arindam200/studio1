import React from "react";
import { baseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import Hero from "@/components/pages/influencer-management/hero";
import Services from "@/components/pages/influencer-management/services";
import Benefits from "@/components/pages/influencer-management/benefits";

export const metadata: Metadata = {
  title: "Influencer Management",
  description:
    "We help you find relevant influencers, manage campaigns, and maximize results for your developer-focused brand visibility.",
  openGraph: {
    title: "Influencer Management | Studio1",
    description:
      "We help you find relevant influencers, manage campaigns, and maximize results for your developer-focused brand visibility.",
    url: baseUrl + "/influencer-management",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Influencer Management | Studio1",
    card: "summary_large_image",
    description:
      "We help you find relevant influencers, manage campaigns, and maximize results for your developer-focused brand visibility.",
  },
};

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
    serviceType: "Influencer Marketing",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/influencer-management",
  };

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero />
      <Services />
      <Benefits />
    </div>
  );
}
