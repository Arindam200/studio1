"use client";

import { motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import { containerVariants, headerVariants, fadeInUp } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      className="relative px-4 py-24 md:py-32 mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <FAQSchema items={faqItems} />

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:gap-20 xl:gap-28">
        <motion.aside
          className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start"
          variants={headerVariants}
        >
          <p className="font-secondary text-xs font-medium tracking-[0.18em] text-primary uppercase">
            FAQ
          </p>
          <h2 className="font-primary text-4xl font-normal tracking-tight text-foreground max-sm:text-3xl md:text-5xl">
            Frequently Asked{" "}
            <span className="font-accent italic font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Questions
            </span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground max-sm:text-sm">
            {subtitle ??
              "Everything you need to know about working with Studio1."}
          </p>
          <div className="mt-2 flex flex-col items-start">
            <p className="-mt-2 text-sm text-muted-foreground">
              Still deciding? We&apos;re happy to walk through fit and scope.
            </p>
            <Button variant="gradient" size="cta" className="mt-5" asChild>
              <a
                href="https://cal.com/studio1/collab"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </Button>
          </div>
        </motion.aside>

        <motion.div className="min-w-0" variants={fadeInUp}>
          <Accordion
            type="single"
            collapsible
            className="w-full border-t border-border/70"
          >
            {faqItems.map((item, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="border-b border-border/70"
                >
                  <AccordionTrigger
                    className={cn(
                      "group gap-4 py-6 text-left hover:no-underline sm:gap-6 sm:py-7",
                      "[&>svg]:hidden",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    )}
                  >
                    <span className="font-numeric w-8 shrink-0 pt-0.5 text-sm font-semibold tabular-nums text-muted-foreground transition-colors group-data-[state=open]:text-primary sm:w-10">
                      {number}
                    </span>
                    <span className="min-w-0 flex-1 pr-2 font-primary text-base font-medium leading-snug tracking-tight text-foreground sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-border/80 text-muted-foreground",
                        "transition-colors duration-200",
                        "group-hover:border-primary/40 group-hover:text-primary",
                        "group-data-[state=open]:border-primary/50 group-data-[state=open]:bg-primary/10 group-data-[state=open]:text-primary",
                      )}
                    >
                      <Plus
                        weight="bold"
                        className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-45"
                      />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-12 pr-14 text-[15px] leading-relaxed text-muted-foreground sm:pl-16 sm:pr-16 sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
