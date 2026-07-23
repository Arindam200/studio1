"use client";

import { useEffect, useState } from "react";
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
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
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
  "group relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-border/80 dark:border",
  "bg-background/80 backdrop-blur-md",
  "transition-[border-color,box-shadow,transform] duration-500 ease-out",
  "hover:-translate-y-1 hover:border-primary/35 dark:hover:border-primary/40",
  elevatedCardShadow,
);

function JourneyCardEffects({ active }: { active: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (active) {
      setMounted(true);
      return;
    }

    const timeout = window.setTimeout(() => setMounted(false), 450);
    return () => window.clearTimeout(timeout);
  }, [active]);

  return (
    <>
      <div aria-hidden className={serviceCardHoverGlow} />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-lg opacity-0 transition-opacity duration-500 ease-out motion-reduce:transition-none",
          active && "opacity-100",
        )}
      >
        {mounted ? (
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-transparent"
            colors={[
              [234, 88, 12],
              [249, 115, 22],
            ]}
            dotSize={2}
            showGradient={false}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent" />
      </div>
    </>
  );
}

function JourneyStageCard({
  stage,
  stageLabel,
}: {
  stage: Stage;
  stageLabel: string;
}) {
  const [hovered, setHovered] = useState(false);
  const StageIcon = stage.icon;

  return (
    <motion.article
      className={journeyCardSurface}
      variants={serviceItemVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <JourneyCardEffects active={hovered} />

      <div className="relative z-[1] flex h-full flex-col p-7">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-secondary text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              {stageLabel}
            </span>
            <span className="font-numeric text-5xl leading-none font-semibold tracking-tight text-primary tabular-nums transition-transform duration-500 group-hover:scale-[1.04]">
              {stage.number}
            </span>
          </div>
          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
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
        {stages.map((stage) => (
          <JourneyStageCard
            key={stage.number}
            stage={stage}
            stageLabel={t("stageLabel")}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
