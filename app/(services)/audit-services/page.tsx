import React from "react";
import { Metadata } from "next";
import Hero from "@/components/pages/audit-services/hero";
import Services from "@/components/pages/audit-services/services";
import Process from "@/components/pages/audit-services/process";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Audit Services",
  description:
    "Transform your processes with data-driven insights and enhance developer experience across all your processes.",
  path: "/audit-services",
});

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Audit Services", path: "/audit-services" },
            ]),
          ),
        }}
      />
      <Hero />
      <Services />
      <Process />
    </div>
  );
}
