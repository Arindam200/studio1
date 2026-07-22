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
  serviceHeroOuterClassName,
  serviceHeroStatsWrapperClassName,
} from "@/components/pages/shared/service-hero-layout";
import { heroAccentGlow } from "@/lib/shadows";
import { ServiceHeroTiles } from "@/components/ui/service-hero-tiles";

export default function Hero() {
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
              <IconPackages className="size-4" /> Services
            </Badge>
          </motion.div>

          <motion.h1
            className="md:text-7xl text-5xl font-medium text-center"
            variants={itemVariants}
          >
            <span className="serif-accent font-accent text-[1.08em] font-normal italic text-primary/75">
              DevRel
            </span>{" "}
            as a Service
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="md:text-xl text-base font-medium text-center"
          >
            We build and grow developer communities with DevRel programs <br />
            tailored to your product: content, video, audits, launches, and
            campaigns.
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
                Book a Call <IconPhoneFilled className="size-10" />
              </Link>
            </Button>
            <Button
              variant="outline-subtle"
              size="cta"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="#work">
                Explore Services <IconPackages className="size-10" />
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
                { value: "10+", label: "high-impact events" },
                { value: "5+", label: "teams helped" },
                { value: "50%", label: "cost savings" },
                { value: "#1", label: "Product Hunt launch" },
              ]}
            />
          </motion.div>
        </motion.div>

        <div className={heroAccentGlow}></div>
      </div>
    </section>
  );
}
