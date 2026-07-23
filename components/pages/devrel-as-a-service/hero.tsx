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
  const t = useTranslations("ServiceHero.devrel");

  return (
    <section className="overflow-x-hidden max-h-fit">
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
            className="md:text-7xl text-5xl font-medium text-center"
            variants={itemVariants}
          >
            <span className="serif-accent font-accent text-[1.08em] font-normal italic text-primary/75">
              {t("titleAccent")}
            </span>{" "}
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
              stats={[
                { value: "10+", label: t("stats.events") },
                { value: "5+", label: t("stats.teams") },
                { value: "50%", label: t("stats.savings") },
                { value: "#1", label: t("stats.launch") },
              ]}
            />
          </motion.div>
        </motion.div>

        <div className={heroAccentGlow}></div>
      </div>
    </section>
  );
}
