import React from "react";
import { Metadata } from "next";
import Hero from "@/components/pages/content-creation/hero";
import Packaging from "@/components/pages/content-creation/packaging";
import Formats from "@/components/pages/content-creation/formats";
import Cadence from "@/components/pages/content-creation/cadence";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Content Creation",
  description:
    "End-to-end YouTube for AI and DevTool startups: channel strategy, scripts, edits, thumbnails, SEO titles, Shorts, and a publishing cadence built for growth.",
  path: "/content-creation",
  keywords: [
    "content creation",
    "YouTube for developers",
    "DevTool YouTube channel",
    "technical YouTube videos",
    "YouTube thumbnails and SEO",
  ],
});

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Content Creation",
    description:
      "End-to-end YouTube for AI and DevTool startups: channel strategy, scripts, edits, thumbnails, SEO titles, Shorts, and a publishing cadence built for growth.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Content Creation",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/content-creation",
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
              {
                name: "Content Creation",
                path: "/content-creation",
              },
            ]),
          ),
        }}
      />
      <Hero />
      <Packaging />
      <Formats />
      <Cadence />
    </div>
  );
}
