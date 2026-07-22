import React from "react";
import { Metadata } from "next";
import Hero from "@/components/pages/docs-as-a-service/hero";
import Services from "@/components/pages/docs-as-a-service/services";
import Process from "@/components/pages/docs-as-a-service/process";
import NonNegotiable from "@/components/sections/non-negotiable";
import FAQ, { type FAQItem } from "@/components/landing/faq";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Docs as Service",
  description:
    "Docs audits, documentation, and DX improvements for AI and DevTool products: onboarding reviews, API clarity, quickstarts, reference docs, and a clearer path to first success.",
  path: "/docs-as-service",
  keywords: [
    "docs as a service",
    "docs audit",
    "developer documentation",
    "DX improvements",
    "API documentation",
    "developer experience audit",
  ],
});

const docsFaqItems: FAQItem[] = [
  {
    question: "What does Docs as a Service include?",
    answer:
      "Three connected workstreams: docs audit (onboarding, API usability, and documentation quality), documentation production (quickstarts, how-tos, reference, and concept guides), and DX improvements (fixing friction in flows, IA, examples, and error paths). You can start with any one or run them together.",
  },
  {
    question: "What does a docs audit deliver?",
    answer:
      "A findings report with prioritized friction points, evidence from walking the product as a new developer, and a practical roadmap for what to write, rewrite, or improve first. The goal is faster time-to-first-success.",
  },
  {
    question: "Who writes the documentation?",
    answer:
      "Engineers and technical writers matched to your stack. Every page includes real code examples, goes through technical review, and incorporates your team's feedback before it is considered done.",
  },
  {
    question: "What counts as a DX improvement?",
    answer:
      "Anything that shortens or clarifies the path to first success: reordered flows, better examples and error paths, docs site structure, contribution habits, and follow-up reviews tied to support deflection or activation signals.",
  },
  {
    question: "Can you work inside our existing docs site?",
    answer:
      "Yes. We write for Mintlify, Docusaurus, GitBook, custom Next.js docs, and similar setups. We match your information architecture and contribution process rather than forcing a new tool.",
  },
  {
    question: "How is this different from Blog as a Service?",
    answer:
      "Blog content is for discovery on the open web. Docs are product surfaces: onboarding, reference, and task completion. We treat them as product work with activation and support metrics, not just traffic.",
  },
  {
    question: "How long does an engagement take?",
    answer:
      "A focused docs audit typically lands in 2 to 3 weeks. Documentation and DX improvements then ship against the roadmap on a steady cadence. Scope depends on product surface area.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We look at time-to-first-success, docs usefulness and search, support ticket themes, and activation steps tied to documented flows. Reports stay tied to the friction you asked us to remove.",
  },
];

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Docs as Service",
    description:
      "Docs audits, documentation, and DX improvements for AI and DevTool products: onboarding reviews, API clarity, quickstarts, reference docs, and a clearer path to first success.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Developer Documentation, Docs Audit, and DX Improvements",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/docs-as-service",
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
              { name: "Docs as Service", path: "/docs-as-service" },
            ]),
          ),
        }}
      />
      <Hero />
      <Services />
      <Process />
      <FAQ
        subtitle="Common questions about our Docs as a Service offering."
        items={docsFaqItems}
      />
      <NonNegotiable
        headline="We audit the docs, write what is missing, and improve the path until first success is obvious."
        body="Docs audits surface friction in onboarding, APIs, and workflows. Documentation and DX improvements turn those findings into shippable guides, clearer flows, and a roadmap your team can keep executing against."
      />
    </div>
  );
}
