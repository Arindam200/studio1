"use client";

import { motion } from "motion/react";
import { containerVariants, headerVariants, fadeInUp } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqData: FAQItem[] = [
  {
    question: "What does Studio1 offer?",
    answer:
      "Studio1 offers a range of services designed to help tech companies grow their developer communities and increase product adoption. Our core offerings include DevRel as a Service (end-to-end developer relations strategies, community building, and event management), Blog as a Service (high-quality technical content like tutorials, guides, and blog posts), Organic Growth Campaigns (comprehensive marketing campaigns to create buzz and drive adoption), and Product Launch Support (strategic support for Product Hunt launches to maximize visibility and impact).",
  },
  {
    question:
      "Who creates the content, and how do you ensure technical accuracy?",
    answer:
      "Our content is created by a team of experienced engineers, technical writers, and DevRel professionals. We ensure technical accuracy through expert writers with deep backgrounds in AI/ML, DevOps, cloud computing, and web development, code-rich examples with practical, real-world use cases, and a thorough technical validation and peer review process for every piece.",
  },
  {
    question: "How does Studio1 help companies grow through content marketing?",
    answer:
      "We help companies grow by creating strategic content that builds trust, educates developers, and drives product adoption. Our approach includes developer-centric storytelling that turns technical complexity into clear, engaging content, SEO optimization to drive organic traffic, and multi-channel distribution across developer communities, social media, and industry blogs to maximize reach.",
  },
  {
    question: "How do you ensure SEO optimization in the content?",
    answer:
      "We ensure SEO optimization through keyword research to identify and target relevant terms for your industry and audience, content formatting structured for readability and search engine visibility, and strategic distribution by publishing on high-authority platforms to build backlinks and improve rankings.",
  },
  {
    question: "Can I see examples of Studio1's work?",
    answer:
      "Yes. You can explore our case studies at docs.studio1hq.com which showcase real-world examples of how we have helped companies like Memori (0 to 12,000+ GitHub stars), ScrapeGraph AI (265K+ total reach), and Permit.io (first-page Google rankings) build thriving developer communities and drive product adoption.",
  },
  {
    question:
      "What is the process for collaborating with your team on a content project?",
    answer:
      "Our collaboration process has four stages. Discovery: we start with a deep dive into your product, target audience, and goals. Strategy: we develop a customized content strategy and roadmap. Creation: our team produces the content, incorporating your feedback and ensuring technical accuracy. Distribution: we distribute the content across relevant channels to maximize reach and impact.",
  },
  {
    question: "What industries and verticals do you specialize in?",
    answer:
      "We specialize in AI and ML, DevOps and Cloud Platforms, Web Development, API Integration, Developer Tools, Security, Databases, and System Design. Our writers have hands-on experience shipping software in these domains.",
  },
  {
    question: "What is your typical turnaround time for content creation?",
    answer:
      "Our turnaround time varies depending on scope and complexity, but we are known for fast delivery without compromising quality. A typical organic growth campaign takes about 4 weeks from start to full distribution. Individual blog posts and tutorials are typically delivered within 10 to 14 days from brief to publish.",
  },
  {
    question: "How are success metrics measured?",
    answer:
      "We measure success through community growth and engagement, content performance and reach, developer adoption rates, brand awareness and trust, and lead generation and conversion. We provide regular reporting across all metrics for every engagement.",
  },
  {
    question: "Do you create technical explainer videos?",
    answer:
      "Yes. We create professional 5-10 minute explainer and tutorial videos with SEO-optimized titles, tags, and descriptions. Video production is available as a standalone service or as part of our Organic Growth Campaign packages.",
  },
  {
    question: "What happens after the content is published?",
    answer:
      "After publishing, we focus on strategic distribution to ensure the content reaches the right audience. This includes multi-platform promotion across social media and developer forums, active community engagement to answer questions and foster discussion, and performance tracking with regular reports on impact and recommendations for optimization.",
  },
];

function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQProps {
  items?: FAQItem[];
  subtitle?: string;
}

export default function FAQ({ items, subtitle }: FAQProps) {
  const faqItems = items ?? defaultFaqData;

  return (
    <motion.section
      id="faq"
      className="relative px-4 py-20 mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <FAQSchema items={faqItems} />

      <motion.div
        className="flex flex-col items-center gap-4 justify-center mb-12"
        variants={headerVariants}
      >
        <h2 className="font-primary text-5xl max-sm:text-4xl font-normal text-center">
          Frequently Asked{" "}
          <span className="font-accent italic font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
            Questions
          </span>
        </h2>
        <p className="text-center text-base max-sm:text-sm mt-2 max-w-2xl text-muted-foreground">
          {subtitle ?? "Everything you need to know about working with Studio1."}
        </p>
      </motion.div>

      <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border rounded-lg px-5 sm:px-6 bg-accent/30 dark:bg-accent/10 data-[state=open]:bg-accent/50 dark:data-[state=open]:bg-accent/20 transition-colors overflow-hidden"
            >
              <AccordionTrigger className="text-left text-[15px] font-medium hover:no-underline py-5 min-w-0">
                <span className="break-words pr-4">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-[14px] pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
}
