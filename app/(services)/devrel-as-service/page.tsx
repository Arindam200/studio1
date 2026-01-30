import React from "react";
import Impact from "@/components/sections/devrel-as-service/impact";
import Services from "@/components/sections/devrel-as-service/services";
import Team from "@/components/sections/devrel-as-service/team";
import Process from "@/components/pages/devrel-as-a-service/process";
import DevRelPricing from "@/components/sections/devrel-as-service/pricing";
import { baseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import Hero from "@/components/pages/devrel-as-a-service/hero";
// import PricingSection from "@/components/pages/devrel-as-a-service/pricing";

export const metadata: Metadata = {
  title: "Devrel as Service",
  description:
    "We help you build and grow developer communities with DevRel strategies tailored to your product and audience.",
  openGraph: {
    title: "DevRel as Service | Studio1",
    description:
      "We help you build and grow developer communities with DevRel strategies tailored to your product and audience.",
    url: baseUrl + "/devrel-as-service",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Devrel as Service | Studio1",
    card: "summary_large_image",
    description:
      "We help you build and grow developer communities with DevRel strategies tailored to your product and audience.",
  },
};

export default function DevRel() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "DevRel as Service",
    description:
      "We help you build and grow developer communities with DevRel strategies tailored to your product and audience.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Developer Relations Consulting",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/devrel-as-service",
  };

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero />
      <Services />
      <Process />
      {/* <DevRelPricing /> */}
      {/* <PricingSection /> */}
      {/* <Team /> */}
    </div>
  );
}
