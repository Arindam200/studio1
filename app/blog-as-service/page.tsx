import React from "react";
import Impact from "@/components/sections/blog-as-service/impact";
import Process from "@/components/sections/blog-as-service/process";
import MinimalCardDemo from "@/components/sections/blog-as-service/blogs";
import Team from "@/components/sections/blog-as-service/team";
import { baseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import Hero from "@/components/pages/blogs-as-a-service/hero";

export const metadata: Metadata = {
  title: "Blog as Service",
  description:
    "Creating developer-focused content that builds trust and drives technical adoption",
  openGraph: {
    title: "Blogs | Studio1",
    description:
      "Creating developer-focused content that builds trust and drives technical adoption",
    url: baseUrl + "/blog-as-service",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Blog as Service | Studio1",
    card: "summary_large_image",
    description:
      "Creating developer-focused content that builds trust and drives technical adoption",
  },
};

export default function Page() {
  return (
    <div className="">
      <Hero />
      <MinimalCardDemo />
      <Process />
      <Team />
    </div>
  );
}
