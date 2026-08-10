import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/pages/content-creation/hero";
import Services from "@/components/pages/content-creation/services";
import Packaging from "@/components/pages/content-creation/packaging";
import Formats from "@/components/pages/content-creation/formats";
import Cadence from "@/components/pages/content-creation/cadence";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { ServiceDetailSection } from "@/components/pages/shared/service-detail-sections";
import FAQ, { type FAQItem } from "@/components/landing/faq";
import NonNegotiable from "@/components/sections/non-negotiable";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { getSafeLocale } from "@/lib/i18n-messages";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.services.video");
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));

  return pageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/developer-video-production",
    locale,
    keywords: [
      "content creation",
      "YouTube for developers",
      "DevTool YouTube channel",
      "technical YouTube videos",
      "YouTube thumbnails and SEO",
    ],
  });
}

const videoWorkstreams = [
  {
    title: "Long-form technical videos",
    description:
      "Product walkthroughs, tutorials, architecture explainers, and implementation videos that help developers understand how your product works.",
    points: [
      "Developer tutorials",
      "Product demos",
      "Project walkthroughs",
      "Architecture explainers",
    ],
  },
  {
    title: "Shorts and cutdowns",
    description:
      "We turn longer technical ideas into concise clips for social distribution without losing the technical point.",
    points: [
      "Short-form product clips",
      "Launch teasers",
      "Feature highlights",
      "Developer-friendly captions",
    ],
  },
  {
    title: "Channel series",
    description:
      "For teams investing in YouTube, we help plan recurring series with consistent packaging, topics, and publishing cadence.",
    points: [
      "Series planning",
      "Topic calendar",
      "Thumbnail and title system",
      "Publishing workflow",
    ],
  },
  {
    title: "Demo projects and repo-led videos",
    description:
      "We can build a small technical project, publish the repo, and create a video around the workflow so developers can inspect and try it.",
    points: [
      "Demo project build",
      "GitHub repo packaging",
      "Video script and walkthrough",
      "Supporting README or guide",
    ],
  },
  {
    title: "Campaign-ready video production",
    description:
      "For month-long campaigns, video can sit alongside a blog, repo, and social posts so the same technical story compounds across channels.",
    points: [
      "One technical video",
      "One supporting blog",
      "One demo repo",
      "Social distribution assets",
    ],
  },
  {
    title: "Packaging and publishing",
    description:
      "We handle the details that help technical videos perform: scripts, edits, thumbnails, titles, descriptions, chapters, and upload support.",
    points: [
      "Script and storyboard",
      "Editing and motion polish",
      "Thumbnail and title options",
      "SEO metadata and chapters",
    ],
  },
];

const videoFaqItems: FAQItem[] = [
  {
    question: "What kind of developer videos do you produce?",
    answer:
      "We produce long-form tutorials, product demos, project walkthroughs, architecture explainers, Shorts, cutdowns, and recurring channel series for developer products.",
  },
  {
    question: "Can you build a demo project for the video?",
    answer:
      "Yes. For repo-led videos or campaigns, we can build a demo project, package the GitHub repo, write the supporting README or guide, and produce the video around the workflow.",
  },
  {
    question: "Can video be part of a larger campaign?",
    answer:
      "Yes. A month-long campaign can pair one technical video with a blog, demo repo, and social posts so the same developer story reaches multiple channels.",
  },
  {
    question: "Do you handle packaging and publishing?",
    answer:
      "Yes. We support scripts, editing, thumbnails, titles, descriptions, chapters, SEO metadata, Shorts, and upload-ready publishing assets.",
  },
];

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Developer Video Production Services",
    description:
      "Developer video production services for AI and DevTool startups: technical demos, tutorials, scripts, edits, thumbnails, SEO titles, Shorts, and a publishing cadence built for growth.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Developer Video Production",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/developer-video-production",
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
                name: "Developer Video Production Services",
                path: "/developer-video-production",
              },
            ]),
          ),
        }}
      />
      <Hero />
      <Services />
      <ServiceDetailSection
        eyebrow="Video production scope"
        title="Technical videos that developers can actually learn from"
        description="We produce walkthroughs, shorts, demo projects, repo-led videos, and campaign assets for developer brands."
        items={videoWorkstreams}
        columns="three"
      />
      <Packaging />
      <Formats />
      <Cadence />
      <FAQ
        subtitle="Common questions about our developer video production services."
        items={videoFaqItems}
      />
      <NonNegotiable
        headline="Developer video should teach a real workflow, not just show a UI tour."
        body="We build videos around concrete use-cases, demos, repos, and product moments. That makes the content useful for developer education, launch campaigns, onboarding, and social distribution."
      />
    </div>
  );
}
