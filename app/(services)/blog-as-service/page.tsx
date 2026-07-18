import React from "react";
import Impact from "@/components/sections/blog-as-service/impact";
import Process from "@/components/pages/blogs-as-a-service/process";
import MinimalCardDemo from "@/components/sections/blog-as-service/blogs";
import Team from "@/components/sections/blog-as-service/team";
import { Metadata } from "next";
import Hero from "@/components/pages/blogs-as-a-service/hero";
import PricingSection from "@/components/pages/blogs-as-a-service/pricing";
import BlogDeliverables from "./deliverables";
import NonNegotiable from "@/components/sections/non-negotiable";
import FAQ, { type FAQItem } from "@/components/landing/faq";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog as Service",
  description:
    "We create developer-focused content that builds trust, boosts product visibility and drives technical adoption.",
  path: "/blog-as-service",
});

const blogFaqItems: FAQItem[] = [
  {
    question: "What types of technical content do you create?",
    answer:
      "We create developer-focused blog posts, step-by-step tutorials, integration guides, product walkthroughs, comparison articles, and technical deep-dives. Every piece includes real code examples and is written by engineers who have worked in the relevant stack.",
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
      "Both. We can work from your content calendar, or we can research and propose topics based on keyword data, competitor analysis, and your product roadmap. Most clients prefer a hybrid approach where we suggest topics and they approve.",
  },
  {
    question: "How do you measure the success of blog content?",
    answer:
      "We track organic traffic growth, keyword ranking positions, backlink acquisition, content engagement metrics, and developer signups or conversions attributed to specific posts. Regular reports are provided for every engagement.",
  },
];

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Blog as Service",
    description:
      "We create developer-focused content that builds trust, boosts product visibility and drives technical adoption.",
    provider: {
      "@type": "Organization",
      name: "Studio1",
      url: "https://studio1hq.com",
    },
    serviceType: "Technical Content Writing",
    areaServed: "Worldwide",
    url: "https://studio1hq.com/blog-as-service",
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
              { name: "Blog as Service", path: "/blog-as-service" },
            ]),
          ),
        }}
      />
      <Hero />
      <MinimalCardDemo />
      <BlogDeliverables />
      <Process />
      <FAQ
        subtitle="Common questions about our Blog as a Service offering."
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
