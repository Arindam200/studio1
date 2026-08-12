"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import {
  containerVariants,
  fadeInUp,
  headerVariants,
} from "@/lib/animations";
import { cn } from "@/lib/utils";
import { SectionEyebrow } from "./section-eyebrow";
import { useTranslations } from "next-intl";

const offeringLinks = [
  {
    href: "/technical-content-marketing#technical-content-writing",
  },
  {
    href: "/developer-relations-growth-campaigns#developer-advocacy",
  },
  {
    href: "/developer-video-production#tech-video-production",
  },
  {
    href: "/developer-video-production#content-creation",
  },
  {
    href: "/developer-documentation-dx-audit#documentation-dx-audits",
  },
  {
    href: "/developer-relations-growth-campaigns#organic-growth-campaign",
  },
  {
    href: "/developer-relations-growth-campaigns#product-launch-support",
  },
  {
    href: "/developer-relations-growth-campaigns#influencer-management",
  },
] as const;

type OfferingCopy = {
  label: string;
  description: string;
};

export default function TechnicalDomains() {
  const t = useTranslations("HomeDomains");
  const offeringCopy = t.raw("offerings") as OfferingCopy[];
  const offerings = offeringLinks.map((offering, index) => ({
    ...offering,
    ...offeringCopy[index],
  }));
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % offerings.length);
    }, 3200);

    return () => window.clearInterval(id);
  }, [paused]);

  const activeOffering = offerings[active];

  return (
    <motion.section
      id="service-offerings"
      className="relative px-4 py-24 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] md:gap-16 lg:gap-20">
        <motion.div
          className="flex flex-col gap-6 md:sticky md:top-28 md:self-start"
          variants={headerVariants}
        >
          <div className="flex flex-col gap-5">
            <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
            <h2 className="max-w-md font-primary text-4xl font-normal tracking-tight text-foreground max-sm:text-3xl md:text-5xl">
              {t("titlePrefix")}{" "}
              <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-normal italic text-transparent">
                {t("titleHighlight")}
              </span>
            </h2>
            <p className="max-w-sm font-secondary text-base leading-relaxed text-muted-foreground max-sm:text-sm">
              {t("description")}
            </p>
          </div>

          {/* Active offering detail: desktop presence for each service */}
          <div
            className="relative mt-2 hidden min-h-[11rem] border-t border-border/70 pt-6 md:block"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffering.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="flex flex-col gap-4 motion-reduce:transition-none"
              >
                <span className="font-numeric text-sm font-semibold tracking-tight text-primary tabular-nums">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="font-primary text-2xl font-medium tracking-tight text-foreground">
                  {activeOffering.label}
                </h3>
                <p className="max-w-sm font-secondary text-sm leading-relaxed text-muted-foreground">
                  {activeOffering.description}
                </p>
                <Link
                  href={activeOffering.href}
                  className="group inline-flex w-fit items-center gap-2 font-secondary text-sm font-medium text-primary transition-colors hover:text-primary1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {t("explore")}
                  <ArrowRight
                    weight="bold"
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="min-w-0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <ul className="flex flex-col" role="list">
            {offerings.map((offering, index) => {
              const isActive = index === active;

              return (
                <li
                  key={offering.label}
                  className="border-b border-border/60 first:border-t"
                >
                  <Link
                    href={offering.href}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className={cn(
                      "group relative flex w-full flex-col gap-2 py-4 text-left transition-colors duration-300 ease-out md:py-5",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      "motion-reduce:transition-none",
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-y-3 left-0 w-0.5 rounded-full bg-primary transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />

                    <span
                      className={cn(
                        "pl-4 font-inter text-xl font-medium tracking-tight transition-colors duration-300 md:text-2xl",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground/55 group-hover:text-foreground/80",
                      )}
                    >
                      {offering.label}
                    </span>

                    {/* Mobile: expand description under the active item */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          key={`${offering.label}-detail`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden pl-4 md:hidden"
                        >
                          <span className="block pb-1 font-secondary text-sm leading-relaxed text-muted-foreground">
                            {offering.description}
                          </span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
