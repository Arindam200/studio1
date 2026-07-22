"use client";

import { Code, PencilLine, ShareNetwork } from "@phosphor-icons/react";
import {
  ServiceOfferCards,
  type ServiceOfferCard,
} from "@/components/pages/shared/service-offer-cards";

const offerings: ServiceOfferCard[] = [
  {
    id: "technical-content-writing",
    icon: PencilLine,
    badges: ["Blogs", "Tutorials"],
    accent: "Technical",
    rest: "Writing",
    description:
      "Engineer-written articles, tutorials, and explainers that make complex developer products easier to understand and trust.",
    features: [
      "Technical blogs and deep-dives",
      "Step-by-step tutorials",
      "Product education articles",
      "Ghostwriting in your technical voice",
    ],
  },
  {
    icon: Code,
    badges: ["Repos", "Use cases"],
    accent: "Implementation",
    rest: "Guides",
    description:
      "Code-rich guides built around real workflows, integrations, and product use-cases developers can follow.",
    features: [
      "Integration walkthroughs",
      "Comparison and decision content",
      "Working code examples",
      "Review with your product team",
    ],
  },
  {
    icon: ShareNetwork,
    badges: ["SEO", "Distribution"],
    accent: "Content",
    rest: "Distribution",
    description:
      "Publishing and repurposing support so each piece reaches developer channels beyond your own blog.",
    features: [
      "Dev.to and Medium syndication",
      "X and LinkedIn post copy",
      "Reddit and community positioning",
      "Performance review after publish",
    ],
  },
];

export default function Services() {
  return (
    <ServiceOfferCards
      subtitle="Three connected workstreams for developer content: write technical pieces, build implementation guides, and distribute them where developers already read."
      cards={offerings}
    />
  );
}
