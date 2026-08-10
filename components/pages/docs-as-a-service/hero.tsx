"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { IconPackages, IconPhoneFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
  const t = useTranslations("ServiceHero.docs");

  return (
    <section id="documentation-dx-audits" className="overflow-x-hidden max-h-fit">
      <div id="stats" className={serviceHeroOuterClassName}>
        <ServiceHeroTiles />
        <motion.div
          className="w-full"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={serviceHeroContentClassName}>
            <motion.div variants={itemVariants}>
              <Badge className="text-sm font-medium pb-1 flex gap-2 items-center">
                <IconPackages className="size-4" /> {t("badge")}
              </Badge>
            </motion.div>

            <motion.h1
              className="text-center font-inter text-5xl font-medium tracking-tight md:text-7xl"
              variants={itemVariants}
            >
              <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-bold italic text-transparent">
                {t("titleAccent")}
              </span>
              <br />
              {t("titleRest")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={serviceHeroDescriptionClassName}
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
                <Link href="https://cal.com/studio1/collab">
                  {t("primaryCta")} <IconPhoneFilled className="size-10" />
                </Link>
              </Button>
              <Button
                variant="outline-subtle"
                size="cta"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="#work">
                  {t("secondaryCta")} <IconPackages className="size-10" />
                </Link>
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
                { value: "25+", label: t("stats.audits") },
                { value: "150+", label: t("stats.pages") },
                { value: "3", label: t("stats.tracks") },
              ]}
            />
          </motion.div>
        </motion.div>

        <div className={heroAccentGlow}></div>
      </div>
    </section>
  );
}
