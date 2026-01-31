import React from "react";
import { baseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import Hero from "@/components/pages/organic-campaign/hero";
import Deliverables from "@/components/pages/organic-campaign/deliverables";
import Process from "@/components/pages/organic-campaign/process";
import Reach from "@/components/pages/organic-campaign/reach";

export const metadata: Metadata = {
  title: "Organic Growth Campaign",
  description:
    "Comprehensive viral marketing campaign that creates buzz, drives adoption, and establishes your product in the developer community.",
  openGraph: {
    title: "Organic Growth Campaign | Studio1",
    description:
      "Comprehensive viral marketing campaign that creates buzz, drives adoption, and establishes your product in the developer community.",
    url: baseUrl + "/organic-campaign",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Organic Growth Campaign | Studio1",
    card: "summary_large_image",
    description:
      "Comprehensive viral marketing campaign that creates buzz, drives adoption, and establishes your product in the developer community.",
  },
};

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
    serviceType: "Developer Marketing",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/organic-campaign",
  };

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero />
      <Deliverables />
      <Reach />
      <Process />
    </div>
  );
}
