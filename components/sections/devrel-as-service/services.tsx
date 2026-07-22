"use client";

import { Rocket, UsersThree, ShareNetwork } from "@phosphor-icons/react";
import {
  ServiceOfferCards,
  type ServiceOfferCard,
} from "@/components/pages/shared/service-offer-cards";

const offerings: ServiceOfferCard[] = [
  {
    id: "developer-advocacy",
    icon: UsersThree,
    badges: ["Advocacy", "Community"],
    accent: "DevRel",
    rest: "Execution",
    description:
      "Embedded support across developer education, community replies, open-source maintenance, and feedback loops.",
    features: [
      "Developer advocacy and education",
      "Community support across social and forums",
      "Open-source maintenance support",
      "Product feedback surfaced from developers",
    ],
  },
  {
    id: "organic-growth-campaign",
    anchorIds: ["product-launch-support"],
    icon: Rocket,
    badges: ["Launches", "Campaigns"],
    accent: "Growth",
    rest: "Campaigns",
    description:
      "Month-long developer campaigns built around one strong technical story: repo, blog, video, and social distribution.",
    features: [
      "Product launch support",
      "Demo project or GitHub repo",
      "Technical blog and video assets",
      "Hackathon and event collaboration support",
    ],
  },
  {
    id: "influencer-management",
    icon: ShareNetwork,
    badges: ["Creators", "Partnerships"],
    accent: "Influencer",
    rest: "Management",
    description:
      "End-to-end creator campaigns for developer audiences, from shortlisting and outreach to pricing and reporting.",
    features: [
      "X, LinkedIn, YouTube, and newsletter creators",
      "Creator discovery and vetting",
      "Pricing, briefs, and deliverable management",
      "Campaign reporting and follow-up",
    ],
  },
];

export default function Services() {
  return (
    <ServiceOfferCards
      subtitle="Three connected workstreams for developer growth: run the DevRel motion, package launches into campaigns, and manage creator partnerships end to end."
      cards={offerings}
    />
  );
}
