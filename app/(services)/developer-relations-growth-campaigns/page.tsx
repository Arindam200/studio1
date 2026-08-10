import React from "react";
import Impact from "@/components/sections/devrel-as-service/impact";
import Services from "@/components/sections/devrel-as-service/services";
import Team from "@/components/sections/devrel-as-service/team";
import Process from "@/components/pages/devrel-as-a-service/process";
import DevRelPricing from "@/components/sections/devrel-as-service/pricing";
import type { Metadata } from "next";
import Hero from "@/components/pages/devrel-as-a-service/hero";
import NonNegotiable from "@/components/sections/non-negotiable";
import FAQ, { type FAQItem } from "@/components/landing/faq";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import {
  ServiceDetailSection,
  ServiceProofSection,
} from "@/components/pages/shared/service-detail-sections";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { getSafeLocale } from "@/lib/i18n-messages";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.services.devrel");
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));

  return pageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/developer-relations-growth-campaigns",
    locale,
  });
}

const devrelFaqItems: FAQItem[] = [
  {
    question: "What do Developer Relations & Growth Campaigns include?",
    answer:
      "Our developer relations and growth service covers community building, developer education, advocacy, product launches, organic distribution, creator collaborations, event support, and metrics reporting. We operate as an embedded extension of your team.",
  },
  {
    question: "How is this different from hiring an in-house DevRel team?",
    answer:
      "With Studio1, you get a hands-on DevRel team with writers, engineers, community managers, and advocates without the overhead of hiring, onboarding, and managing multiple roles. We ramp up fast, require minimal oversight, and stay leaner than building every function in-house.",
  },
  {
    question: "What kind of community building do you do?",
    answer:
      "We help set up, grow, and support developer communities on Discord, Slack, GitHub Discussions, forums, Reddit, X, LinkedIn, and event channels. This includes onboarding flows, engagement programs, developer replies, feedback loops, AMAs, hackathons, and community partnerships.",
  },
  {
    question: "Do you handle conference talks and meetups?",
    answer:
      "Yes. We prepare and deliver talks, host meetup sessions, represent your product at developer events, and support event partnerships. We can also help with hackathon, student community, and tech community collaborations in India.",
  },
  {
    question: "How do you measure DevRel success?",
    answer:
      "We track community growth and engagement, content reach and performance, developer adoption rates, event attendance and feedback, GitHub activity (stars, issues, PRs), and product feedback surfaced from community conversations. Reports are delivered regularly.",
  },
  {
    question: "Can you work alongside our existing DevRel team?",
    answer:
      "Absolutely. Most of our engagements complement existing DevRel or marketing teams. Your team handles product positioning while we handle execution: community programs, campaign coordination, launch support, creator management, and distribution at scale.",
  },
  {
    question: "What is the onboarding process like?",
    answer:
      "We start with a Discovery phase where we audit your existing developer programs, analyze community engagement, and identify growth opportunities. Within the first two weeks, we deliver an actionable assessment and a tailored DevRel roadmap aligned to your goals.",
  },
  {
    question: "Do you support Product Hunt launches?",
    answer:
      "Yes. We provide end-to-end Product Hunt launch support including pre-launch strategy, community activation, content preparation, launch-day execution, and post-launch amplification. Our past launches have achieved #1 Product of the Day.",
  },
  {
    question: "Do you run growth campaigns and influencer programs?",
    answer:
      "Yes. We run multi-channel organic campaigns across X, LinkedIn, Reddit, YouTube, newsletters, and developer communities. For influencer management, we handle creator discovery, outreach, pricing, briefs, coordination, and reporting across X, LinkedIn, YouTube, and other relevant channels.",
  },
  {
    question: "What does a one-month campaign include?",
    answer:
      "A typical campaign can include a demo project or GitHub repo, one technical blog, one video, and multiple social posts. The goal is to tell one strong technical story across channels instead of publishing isolated assets.",
  },
];

const devrelScope = [
  {
    title: "Embedded DevRel execution",
    description:
      "We can operate as a hands-on DevRel partner for product teams that need execution across content, community, open source, and developer support.",
    points: [
      "Developer docs and technical content",
      "Open-source maintenance support",
      "Community replies and feedback loops",
      "Developer-facing social management",
    ],
  },
  {
    title: "Integrations and partnerships",
    description:
      "We help identify integration opportunities, reach out to partner companies, coordinate collaboration, and turn ecosystem work into developer-facing content.",
    points: [
      "Potential integration partner research",
      "Partner outreach and coordination",
      "Co-marketing and co-built examples",
      "Integration content and launch support",
    ],
  },
  {
    title: "Community and hackathon partnerships",
    description:
      "We can support tech event, hackathon, student community, and developer community partnerships, especially across India where we have strong community access.",
    points: [
      "Hackathon collaboration support",
      "Student developer communities in India",
      "Meetup and event partnership outreach",
      "Community activation and follow-up",
    ],
  },
  {
    title: "Influencer management",
    description:
      "We manage developer creator campaigns end to end, from shortlisting creators to pricing, briefs, deliverables, and reporting.",
    points: [
      "X, LinkedIn, YouTube, and newsletter creators",
      "Creator discovery and vetting",
      "Pricing and negotiation support",
      "Campaign management and reporting",
    ],
  },
  {
    title: "One-month growth campaigns",
    description:
      "For launches or awareness pushes, we can run a campaign around one concrete technical story: a project, repo, blog, video, and social distribution.",
    points: [
      "Demo project or GitHub repo",
      "One technical blog",
      "One product/demo video",
      "Social posts across relevant channels",
    ],
  },
  {
    title: "Developer relations leadership support",
    description:
      "We help teams decide what to do next: which communities to enter, which partners to approach, what content to ship, and what signals to track.",
    points: [
      "DevRel roadmap and prioritization",
      "Community and channel strategy",
      "Partner and ecosystem mapping",
      "Growth and adoption reporting",
    ],
  },
];

const memoriProof = {
  company: "Memori",
  category: "Open-source Growth & DevRel",
  href: "/case-studies/memori",
  heroValue: "12,000+",
  heroLabel: "GitHub stars from launch",
  proof:
    "Studio1 supported Memori with community-led launches, thought leadership, demo content, live developer education, feedback loops, and targeted influencer management.",
  stats: [
    { value: "50K+", label: "Reddit launch impressions" },
    { value: "100+", label: "developer comments" },
    { value: "150+", label: "meetup attendees" },
  ],
};

export default function DevRel() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Developer Relations & Growth Campaigns",
    description:
      "Developer relations and growth campaigns for developer products: advocacy, community programs, product launches, organic distribution, and influencer management.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Developer Relations and Growth Campaigns",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/developer-relations-growth-campaigns",
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
                name: "Developer Relations & Growth Campaigns",
                path: "/developer-relations-growth-campaigns",
              },
            ]),
          ),
        }}
      />
      <Hero />
      <Services />
      <ServiceDetailSection
        eyebrow="DevRel and growth scope"
        title="The execution layer behind developer adoption"
        description="We support docs, content, social, open-source, partnerships, hackathons, creator campaigns, launches, and feedback loops."
        items={devrelScope}
        columns="three"
      />
      <Process />
      <ServiceProofSection
        title="Open-source growth through community, demos, and creator partnerships"
        description="Memori combined demos, communities, live education, feedback, and developer creators."
        study={memoriProof}
      />
      <FAQ
        subtitle="Common questions about our developer relations and growth campaign services."
        items={devrelFaqItems}
      />
      <NonNegotiable
        headline="We operate as an embedded developer relations and growth team: advocacy, community, launches, organic campaigns, and creator programs tied to product goals."
        body="From Discord and workshops to product launches, organic distribution, and developer creator programs, Studio1 runs growth programs with writers, engineers, community managers, and advocates. You get measurable developer adoption without the overhead of building a full in-house team."
      />
      {/* <DevRelPricing /> */}
      {/* <PricingSection /> */}
      {/* <Team /> */}
    </div>
  );
}
