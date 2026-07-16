"use client";
import { Badge } from "@/components/ui/badge";
import { IconPackages, IconPhoneFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";
import { staggerChildren, itemVariants } from "@/lib/animations";
import { HeroStatsStrip } from "@/components/ui/hero-stats-strip";
import {
  serviceHeroContentClassName,
  serviceHeroOuterClassName,
  serviceHeroStatsWrapperClassName,
} from "@/components/pages/shared/service-hero-layout";
import { heroAccentGlow } from "@/lib/shadows";
import { ServiceHeroTiles } from "@/components/ui/service-hero-tiles";

export default function Hero() {
  return (
    <>
      <div id="stats" className={serviceHeroOuterClassName}>
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
            <Badge className="text-sm font-medium pb-1 flex gap-2 items-center">
              <IconPackages className="size-4" /> Services
            </Badge>
          </motion.div>

          <motion.h1
            className="md:text-7xl text-5xl font-medium text-center"
            variants={itemVariants}
          >
            Audit Services
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="md:text-xl text-balance w-full md:w-[60%] text-base font-medium text-center"
          >
            Transform your processes with data-driven insights. Identify gaps,
            streamline workflows, and enhance developer experience across all touchpoints.
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
                Book a Call <IconPhoneFilled className="size-10" />
              </a>
            </Button>
            <Button
              variant="outline-subtle"
              size="cta"
              className="w-full sm:w-auto"
            >
              Learn More <MagnifyingGlass className="size-10" weight="fill" />
            </Button>
          </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className={serviceHeroStatsWrapperClassName}
          >
            <HeroStatsStrip
              stats={[
                { value: "DX", label: "developer experience" },
                { value: "API", label: "usability review" },
                { value: "Docs", label: "quality audit" },
                { value: "UX", label: "onboarding analysis" },
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
