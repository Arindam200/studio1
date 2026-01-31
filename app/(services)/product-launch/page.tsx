import React from "react";
import { baseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import Hero from "@/components/pages/product-launch/hero";
import Services from "@/components/pages/product-launch/services";
import Process from "@/components/pages/product-launch/process";

export const metadata: Metadata = {
  title: "Product Launch Support",
  description:
    "End-to-end strategy, content, and community activation to maximize your Product launch visibility and conversions.",
  openGraph: {
    title: "Product Launch Support | Studio1",
    description:
      "End-to-end strategy, content, and community activation to maximize your Product launch visibility and conversions.",
    url: baseUrl + "/product-launch",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Product Launch Support | Studio1",
    card: "summary_large_image",
    description:
      "End-to-end strategy, content, and community activation to maximize your Product launch visibility and conversions.",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Product Launch Support",
    description:
      "End-to-end strategy, content, and community activation to maximize your Product launch visibility and conversions.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Product Launch Marketing",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/product-launch",
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
