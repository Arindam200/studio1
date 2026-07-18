import React from "react";
import { Metadata } from "next";
import Hero from "@/components/pages/product-launch/hero";
import Services from "@/components/pages/product-launch/services";
import Process from "@/components/pages/product-launch/process";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Product Launch Support",
  description:
    "End-to-end strategy, content, and community activation to maximize your Product launch visibility and conversions.",
  path: "/product-launch",
});

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Product Launch Support", path: "/product-launch" },
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
