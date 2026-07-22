"use client";

import { Code, Scissors, YoutubeLogo } from "@phosphor-icons/react";
import {
  ServiceOfferCards,
  type ServiceOfferCard,
} from "@/components/pages/shared/service-offer-cards";

const offerings: ServiceOfferCard[] = [
  {
    id: "tech-video-production",
    icon: YoutubeLogo,
    badges: ["YouTube", "Demos"],
    accent: "Technical",
    rest: "Videos",
    description:
      "Long-form tutorials, product walkthroughs, and architecture explainers built around real developer workflows.",
    features: [
      "Developer tutorials",
      "Product demos",
      "Architecture explainers",
      "Script, edit, and publishing support",
    ],
  },
  {
    id: "content-creation",
    icon: Scissors,
    badges: ["Shorts", "Social"],
    accent: "Shorts",
    rest: "Cutdowns",
    description:
      "Short-form clips and social-ready assets that keep the technical point clear while fitting fast-moving channels.",
    features: [
      "Launch teasers",
      "Feature clips",
      "Captioned social cuts",
      "Thumbnail and title options",
    ],
  },
  {
    icon: Code,
    badges: ["Repos", "Series"],
    accent: "Demo",
    rest: "Production",
    description:
      "Repo-led videos, recurring channel series, and campaign assets that give developers something concrete to try.",
    features: [
      "Demo project builds",
      "GitHub repo packaging",
      "Channel series planning",
      "Blog and social asset support",
    ],
  },
];

export default function Services() {
  return (
    <ServiceOfferCards
      subtitle="Three connected video workstreams for developer brands: teach the workflow, cut it for social, and package demos developers can inspect."
      cards={offerings}
    />
  );
}
