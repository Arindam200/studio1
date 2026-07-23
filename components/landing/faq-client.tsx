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

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQClientProps {
  items: FAQItem[];
  subtitle?: string;
}

export default function FAQClient({ items, subtitle }: FAQClientProps) {
  return (
    <motion.section
      id="faq"
      className="relative px-4 py-24 md:py-32 mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
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
            <span className="serif-accent font-accent italic font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
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
            {items.map((item, index) => {
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
                    <span className="min-w-0 flex-1 pr-2 font-inter text-base font-medium leading-snug tracking-tight text-foreground sm:text-lg">
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
