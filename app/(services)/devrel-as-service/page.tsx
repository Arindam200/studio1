import React from "react";
import Impact from "@/components/sections/devrel-as-service/impact";
import Services from "@/components/sections/devrel-as-service/services";
import Team from "@/components/sections/devrel-as-service/team";
import Process from "@/components/pages/devrel-as-a-service/process";
import DevRelPricing from "@/components/sections/devrel-as-service/pricing";
import { Metadata } from "next";
import Hero from "@/components/pages/devrel-as-a-service/hero";
import DevRelDeliverables from "./deliverables";
import FAQ, { type FAQItem } from "@/components/landing/faq";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "DevRel as Service",
  description:
    "We help you build and grow developer communities with DevRel strategies tailored to your product and audience.",
  path: "/devrel-as-service",
});

const devrelFaqItems: FAQItem[] = [
  {
    question: "What does DevRel as a Service include?",
    answer:
      "Our DevRel service covers community building, developer education (workshops, webinars, tutorials), technical content creation, developer advocacy (conference talks, meetups), video production, tool and DX audits, event management, and metrics reporting. We operate as an embedded extension of your team.",
  },
  {
    question: "How is this different from hiring an in-house DevRel team?",
    answer:
      "With Studio1, you get a full DevRel team (writers, engineers, community managers, and advocates) without the overhead of hiring, onboarding, and managing multiple roles. We ramp up fast, require minimal oversight, and cost roughly 50% less than building an equivalent in-house function.",
  },
  {
    question: "What kind of community building do you do?",
    answer:
      "We help set up, grow, and moderate developer communities on Discord, Slack, GitHub Discussions, and forums. This includes onboarding flows, engagement programs, answering developer questions, surfacing product feedback, and running community events like AMAs and hackathons.",
  },
  {
    question: "Do you handle conference talks and meetups?",
    answer:
      "Yes. We prepare and deliver conference talks, host meetup sessions, and represent your product at developer events. We also help with CFP (Call for Papers) submissions and speaker preparation for your internal team.",
  },
  {
    question: "How do you measure DevRel success?",
    answer:
      "We track community growth and engagement, content reach and performance, developer adoption rates, event attendance and feedback, GitHub activity (stars, issues, PRs), and product feedback surfaced from community conversations. Reports are delivered regularly.",
  },
  {
    question: "Can you work alongside our existing DevRel team?",
    answer:
      "Absolutely. Most of our DevRel engagements complement existing teams. Your team handles strategy and product positioning while we handle execution: content volume, community management, event logistics, and distribution at scale.",
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
];

export default function DevRel() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "DevRel as Service",
    description:
      "We help you build and grow developer communities with DevRel strategies tailored to your product and audience.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Developer Relations Consulting",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/devrel-as-service",
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
              { name: "DevRel as Service", path: "/devrel-as-service" },
            ]),
          ),
        }}
      />
      <Hero />
      <Services />
      <DevRelDeliverables />
      <Process />
      <FAQ
        subtitle="Common questions about our DevRel as a Service offering."
        items={devrelFaqItems}
      />
      {/* <DevRelPricing /> */}
      {/* <PricingSection /> */}
      {/* <Team /> */}
    </div>
  );
}
