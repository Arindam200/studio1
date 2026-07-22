import React from "react";
import Impact from "@/components/sections/blog-as-service/impact";
import Process from "@/components/pages/blogs-as-a-service/process";
import MinimalCardDemo from "@/components/sections/blog-as-service/blogs";
import Team from "@/components/sections/blog-as-service/team";
import type { Metadata } from "next";
import Hero from "@/components/pages/blogs-as-a-service/hero";
import Services from "@/components/pages/blogs-as-a-service/services";
import PricingSection from "@/components/pages/blogs-as-a-service/pricing";
import BlogDeliverables from "./deliverables";
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
  const t = await getTranslations("Metadata.services.technicalContent");
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));

  return pageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/technical-content-marketing",
    locale,
  });
}

const blogFaqItems: FAQItem[] = [
  {
    question: "What types of technical content do you create?",
    answer:
      "We create developer-focused blog posts, step-by-step tutorials, integration guides, product walkthroughs, comparison articles, technical deep-dives, and campaign content built around real projects or repos. Every piece includes real technical context and is written by engineers or technical writers matched to the stack.",
  },
  {
    question: "Who writes the blog posts?",
    answer:
      "Our writers are experienced engineers and technical writers with backgrounds in AI/ML, DevOps, cloud computing, web development, and more. Each writer is matched to your product's stack so the content reads like it was written by someone on your team.",
  },
  {
    question: "How do you handle SEO for technical blog content?",
    answer:
      "We start with keyword research to identify high-intent developer queries, structure content for search engine visibility and AI citation, and distribute across high-authority platforms like Dev.to, Hashnode, and Medium to build backlinks and improve rankings.",
  },
  {
    question: "What is the typical turnaround time per blog post?",
    answer:
      "Individual blog posts and tutorials are typically delivered within 10 to 14 days from brief to publish. This includes topic research, writing, technical validation, peer review, and SEO optimization.",
  },
  {
    question: "Do you distribute the content after publishing?",
    answer:
      "Yes. Every piece is distributed across Dev.to, Hashnode, Reddit, LinkedIn, developer newsletters, and relevant community channels. Distribution is included with every engagement, not an upsell.",
  },
  {
    question: "How do you ensure technical accuracy?",
    answer:
      "Every article goes through a multi-step review process: the writer validates code examples, a technical reviewer checks accuracy and edge cases, and an editor ensures clarity. We also incorporate your team's feedback before publish.",
  },
  {
    question: "Can I provide topics or do you handle topic selection?",
    answer:
      "Both. We can work from your content calendar, or research and propose topics based on keyword data, competitor analysis, developer pain points, and your product roadmap. Most clients prefer a hybrid approach where Studio1 suggests topics and the client approves.",
  },
  {
    question: "What does the review workflow look like?",
    answer:
      "We usually start with a topic, then send an outline and overview for approval. After your team approves the direction, we write the draft, review it internally, send it for client review, revise, and then publish on the agreed channel.",
  },
  {
    question: "Can content publish from Studio1 or individual author profiles?",
    answer:
      "Yes. Depending on the goal, content can publish on your company blog, your Dev.to or Medium profile, Studio1 profiles, or individual author profiles. We also support social posts from either your channels or ours when that fits the campaign.",
  },
  {
    question: "How do you measure the success of blog content?",
    answer:
      "We track organic traffic growth, keyword ranking positions, backlink acquisition, content engagement metrics, and developer signups or conversions attributed to specific posts. Regular reports are provided for every engagement.",
  },
];

const contentWorkflow = [
  {
    title: "Topic strategy or topic handoff",
    description:
      "We can start from your product roadmap, your existing content calendar, or topics we research and propose from developer search intent.",
    points: [
      "High-intent developer queries",
      "Comparison and alternative topics",
      "Integration and use-case ideas",
      "Client-provided topics and briefs",
    ],
  },
  {
    title: "Outline before the draft",
    description:
      "Before writing, we prepare the angle, structure, examples, and technical flow so your team can review the direction early.",
    points: [
      "Draft outline and article overview",
      "Developer persona and use-case framing",
      "Code example plan",
      "Client review before full writing starts",
    ],
  },
  {
    title: "Technical draft and review",
    description:
      "Studio1 writes the full piece, checks the technical flow internally, then sends it through your product or engineering review.",
    points: [
      "Engineer-written blog draft",
      "Technical validation and editorial pass",
      "Client review and revision cycle",
      "Final polish for clarity and SEO",
    ],
  },
  {
    title: "Publishing on the right channel",
    description:
      "Content can ship on your company blog, Dev.to, Medium, or from Studio1/team profiles depending on the goal and audience.",
    points: [
      "Company blog publishing",
      "Studio1 or author profile publishing",
      "Dev.to and Medium syndication",
      "Canonical and attribution guidance",
    ],
  },
  {
    title: "Social posts and distribution",
    description:
      "For selected pieces, we turn the article into launch posts, short social copy, and developer-community distribution.",
    points: [
      "X and LinkedIn post copy",
      "Reddit/community positioning",
      "Newsletter and platform snippets",
      "Performance review after publish",
    ],
  },
  {
    title: "Content that teaches adoption",
    description:
      "The goal is not only traffic. We write technical content that helps developers understand, try, and trust your product.",
    points: [
      "Tutorials and implementation guides",
      "Product walkthroughs",
      "Integration guides",
      "Comparison and decision content",
    ],
  },
];

const permitProof = {
  company: "Permit.io",
  category: "Technical SEO & Adoption",
  href: "/case-studies/permit",
  heroValue: "2-track",
  heroLabel: "content engine shipped",
  proof:
    "Studio1 built a two-track content engine for Permit.io: growth articles plus deep implementation guides that ranked, taught adoption, and supported a Product Hunt launch.",
  stats: [
    { value: "2", label: "content tracks" },
    { value: "RBAC", label: "Supabase guide" },
    { value: "Dev.to", label: "distribution channel" },
  ],
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Technical Content Marketing Services",
    description:
      "Technical content marketing for developer products: tutorials, integration guides, SEO articles, and code-rich content that builds trust and drives adoption.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Technical Content Writing",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/technical-content-marketing",
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
                name: "Technical Content Marketing Services",
                path: "/technical-content-marketing",
              },
            ]),
          ),
        }}
      />
      <Hero />
      <Services />
      <MinimalCardDemo />
      <ServiceDetailSection
        eyebrow="How the content engine works"
        title="From topic idea to published technical content"
        description="We run technical content like a collaborative product workflow: choose the right topic, agree on the outline, write with real technical context, review with your team, then publish and distribute where developers actually read."
        items={contentWorkflow}
        columns="three"
      />
      <BlogDeliverables />
      <Process />
      <ServiceProofSection
        title="Technical content that ranks and teaches adoption"
        description="For Permit.io, the work was not generic blogging. It combined SEO strategy, implementation guides, ghostwriting, and developer-channel distribution."
        study={permitProof}
      />
      <FAQ
        subtitle="Common questions about our technical content marketing services."
        items={blogFaqItems}
      />
      <NonNegotiable
        headline="Every piece is written by engineers and technical writers matched to your stack, then technically validated before it ships."
        body="We produce developer-focused blogs, tutorials, and integration guides with real code examples. Each writer is matched to your product domain, every article goes through peer review and technical validation, and distribution across Dev.to, Hashnode, Reddit, and LinkedIn is included with the engagement."
      />
      {/* <Team /> */}
      {/* <PricingSection /> */}
    </div>
  );
}
