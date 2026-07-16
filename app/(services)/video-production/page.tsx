import React from "react";
import { Metadata } from "next";
import Hero from "@/components/pages/video-production/hero";
import Services from "@/components/pages/video-production/services";
import Process from "@/components/pages/video-production/process";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tech Video Production",
  description:
    "We create high-quality videos for AI & DevTool startups, including product demos, how-to guides, integration videos, and tutorials.",
  path: "/video-production",
});

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tech Video Production",
    description:
      "We create high-quality videos for AI & DevTool startups, including product demos, how-to guides, integration videos, and tutorials.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Technical Video Production",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/video-production",
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
              { name: "Tech Video Production", path: "/video-production" },
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
