import React from "react";
import { baseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import Hero from "@/components/pages/audit-services/hero";
import Services from "@/components/pages/audit-services/services";
import Process from "@/components/pages/audit-services/process";

export const metadata: Metadata = {
  title: "Audit Services",
  description:
    "Transform your processes with data-driven insights and enhance developer experience across all your processes.",
  openGraph: {
    title: "Audit Services | Studio1",
    description:
      "Transform your processes with data-driven insights and enhance developer experience across all your processes.",
    url: baseUrl + "/audit-services",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Audit Services | Studio1",
    card: "summary_large_image",
    description:
      "Transform your processes with data-driven insights and enhance developer experience across all your processes.",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Audit Services",
    description:
      "Transform your processes with data-driven insights and enhance developer experience across all your processes.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Developer Experience Audit",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/audit-services",
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
    </div>
  );
}
