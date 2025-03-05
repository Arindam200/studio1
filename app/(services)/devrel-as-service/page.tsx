import React from "react";
import Impact from "@/components/sections/devrel-as-service/impact";
import Services from "@/components/sections/devrel-as-service/services";
import Team from "@/components/sections/devrel-as-service/team";
import Process from "@/components/pages/devrel-as-a-service/process";
import DevRelPricing from "@/components/sections/devrel-as-service/pricing";
import { baseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import Hero from "@/components/pages/devrel-as-a-service/hero";
import PricingSection from "@/components/pages/devrel-as-a-service/pricing";

export const metadata: Metadata = {
  title: "Devrel as Service",
  description:
    "Build and nurture your developer community with our expert DevRel strategies.",
  openGraph: {
    title: "DevRel as Service | Studio1",
    description:
      "Build and nurture your developer community with our expert DevRel strategies.",
    url: baseUrl + "/devrel-as-service",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Devrel as Service | Studio1",
    card: "summary_large_image",
    description:
      "Build and nurture your developer community with our expert DevRel strategies.",
  },
};

export default function DevRel() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Process />
      {/* <DevRelPricing /> */}
      <PricingSection />
      {/* <Team /> */}
    </div>
  );
}
