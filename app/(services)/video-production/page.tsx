import React from "react";
import { baseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import Hero from "@/components/pages/video-production/hero";
import Services from "@/components/pages/video-production/services";
import Process from "@/components/pages/video-production/process";

export const metadata: Metadata = {
  title: "Tech Video Production",
  description:
    "We create high-quality videos for AI & DevTool startups, including product demos, how-to guides, integration videos, and tutorials.",
  openGraph: {
    title: "Tech Video Production | Studio1",
    description:
      "We create high-quality videos for AI & DevTool startups, including product demos, how-to guides, integration videos, and tutorials.",
    url: baseUrl + "/video-production",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Tech Video Production | Studio1",
    card: "summary_large_image",
    description:
      "We create high-quality videos for AI & DevTool startups, including product demos, how-to guides, integration videos, and tutorials.",
  },
};

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
    serviceType: "Video Production",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/video-production",
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
