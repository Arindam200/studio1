"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { itemVariants, staggerChildren } from "@/lib/animations";
import { IconPhoneFilled } from "@tabler/icons-react";
import { YoutubeLogo } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("ServiceHero.video");

  return (
    <section id="overview" className="relative scroll-mt-28 overflow-hidden border-b">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_55%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge className="gap-2 px-3 py-1 text-sm font-medium">
              <YoutubeLogo className="size-4" weight="fill" />
              {t("badge")}
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-xl font-inter text-5xl font-normal tracking-tight md:text-6xl lg:text-7xl"
          >
            {t("titlePrefix")}{" "}
            <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-normal italic text-transparent">
              {t("titleHighlight")}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg"
          >
            {t("description")}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <Button variant="gradient" size="cta" className="w-full sm:w-auto" asChild>
              <a
                href="https://cal.com/studio1/collab"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("primaryCta")} <IconPhoneFilled className="size-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border bg-background shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08),0_12px_36px_-14px_rgba(0,0,0,0.12),0_14px_36px_-10px_hsl(var(--primary)/0.15)] dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35),0_16px_48px_-16px_rgba(0,0,0,0.55),0_12px_32px_-8px_hsl(var(--primary)/0.14)]">
            <div className="relative aspect-video overflow-hidden bg-muted">
              <iframe
                src="https://www.youtube.com/embed/Um7sjLEhaQM"
                title="LLM Fine-Tuning & Model Iteration Loop"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <div className="space-y-4 border-t px-6 py-6 md:px-7 md:py-7">
              <p className="font-inter text-xl font-medium leading-snug tracking-tight md:text-2xl">
                {t("previewTitle")}
              </p>

              <p className="font-secondary text-sm text-muted-foreground">
                {t("previewSubtitle")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
