"use client";

import { motion } from "motion/react";
import {
  containerVariants,
  headerVariants,
  staggerChildren,
  serviceItemVariants,
} from "@/lib/animations";
import { elevatedCardShadow, serviceCardHoverGlow } from "@/lib/shadows";
import { cn } from "@/lib/utils";
import { Compass, Rocket, Target, type Icon } from "@phosphor-icons/react";
import { SectionEyebrow } from "./section-eyebrow";
import { useTranslations } from "next-intl";

interface Stage {
  key: "discover" | "engage" | "adopt";
  number: string;
  title: string;
  description: string;
  icon: Icon;
}

const stageConfig = [
  {
    key: "discover",
    number: "01",
    icon: Compass,
  },
  {
    key: "engage",
    number: "02",
    icon: Target,
  },
  {
    key: "adopt",
    number: "03",
    icon: Rocket,
  },
] as const;

const journeyCardSurface = cn(
  "group relative flex h-full flex-col overflow-hidden rounded-lg border-2 dark:border",
  "bg-background/80 backdrop-blur-md",
  "transition-all duration-700",
  elevatedCardShadow,
);

function ServiceCardEffects() {
  return <div aria-hidden className={serviceCardHoverGlow} />;
}

export default function DeveloperJourney() {
  const t = useTranslations("DeveloperJourney");
  const stages: Stage[] = stageConfig.map((stage) => ({
    ...stage,
    title: t(`stages.${stage.key}.title`),
    description: t(`stages.${stage.key}.description`),
  }));

  return (
    <motion.section
      id="how-it-works"
      className="relative px-4 py-24 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <motion.div
        className="mb-14 flex flex-col items-center justify-center gap-4"
        variants={headerVariants}
      >
        <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
        <h2 className="max-sm:text-4xl text-center font-primary text-5xl font-normal tracking-tight">
          {t("titlePrefix")}{" "}
          <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-bold italic text-transparent">
            {t("titleHighlight")}
          </span>{" "}
          {t("titleSuffix")}
        </h2>
        <p className="mt-2 max-w-2xl text-center text-base text-muted-foreground max-sm:text-sm">
          {t("description")}
        </p>
      </motion.div>

      <motion.div
        className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-5"
        variants={staggerChildren}
      >
        {stages.map((stage) => {
          const StageIcon = stage.icon;

          return (
            <motion.article
              key={stage.number}
              className={journeyCardSurface}
              variants={serviceItemVariants}
            >
              <ServiceCardEffects />

              <div className="relative z-[1] flex h-full flex-col p-7">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-secondary text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                      {t("stageLabel")}
                    </span>
                    <span className="font-numeric text-5xl leading-none font-semibold tracking-tight text-primary tabular-nums">
                      {stage.number}
                    </span>
                  </div>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                    <StageIcon weight="duotone" className="size-6" />
                  </div>
                </div>

                <h3 className="mb-4 overflow-visible pb-1.5 font-inter text-2xl font-medium leading-normal tracking-tight text-foreground">
                  {stage.title}
                </h3>
                <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
