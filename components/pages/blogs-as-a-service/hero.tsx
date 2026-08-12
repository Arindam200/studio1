"use client";
import { Badge } from "@/components/ui/badge";
import { IconPackages, IconPhoneFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { staggerChildren, itemVariants } from "@/lib/animations";
import { HeroStatsStrip } from "@/components/ui/hero-stats-strip";
import {
  serviceHeroContentClassName,
  serviceHeroDescriptionClassName,
  serviceHeroOuterClassName,
  serviceHeroStatsWrapperClassName,
} from "@/components/pages/shared/service-hero-layout";
import { heroAccentGlow } from "@/lib/shadows";
import { ServiceHeroTiles } from "@/components/ui/service-hero-tiles";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("ServiceHero.technicalContent");

  return (
    <>
      <div id="overview" className={serviceHeroOuterClassName}>
        <div className={heroAccentGlow}></div>
        <ServiceHeroTiles />
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <div className={serviceHeroContentClassName}>
          <motion.div variants={itemVariants}>
            <Badge className="text-sm font-medium pb-1 shadow-md bg-gradient-to-r from-primarySurface via-primary1 to-primary1/20 text-white flex gap-2 items-center dark:from-primary dark:via-primary1 dark:to-primary1/60">
              <IconPackages className="size-4" /> {t("badge")}
            </Badge>
          </motion.div>

          <motion.h1
            className="text-center font-inter text-5xl font-normal tracking-tight md:text-7xl"
            variants={itemVariants}
          >
            <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-normal italic text-transparent">
              {t("titleAccent")}
            </span>{" "}
            {t("titleRest")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`${serviceHeroDescriptionClassName} text-balance`}
          >
            {t("description")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex md:flex-row mt-10 w-full gap-4 flex-col justify-center"
          >
            <Button
              variant="gradient"
              size="cta"
              className="w-full sm:w-auto"
              asChild
            >
              <a
                href="https://cal.com/studio1/collab"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("primaryCta")} <IconPhoneFilled className="size-10" />
              </a>
            </Button>
            <Button
              variant="outline-subtle"
              size="cta"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="#work">
                {t("secondaryCta")} <IconPackages className="size-10" />
              </a>
            </Button>
          </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className={serviceHeroStatsWrapperClassName}
          >
            <HeroStatsStrip
              highlightValues
              className="md:grid-cols-3"
              stats={[
                { value: "300+", label: t("stats.views") },
                { value: "25+", label: t("stats.teams") },
                { value: "<7 days", label: t("stats.reddit") },
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
