"use client"
import React from "react"
import dynamic from "next/dynamic"
import { IconPhoneFilled } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { CTA_GLOBE_MARKERS } from "./globe-markers"
import { motion } from "motion/react"
import { containerVariants, cardVariants } from "@/lib/animations"
import {
  ctaCornerGlowLeft,
  ctaCornerGlowRight,
  elevatedCardShadow,
} from "@/lib/shadows"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

const GlobePulse = dynamic(
  () => import("./globe-pulse").then((module) => module.GlobePulse),
  { ssr: false },
)

export default function CTA() {
  const t = useTranslations("CTA")

  return (
    <motion.div
      className="px-4 relative mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className={cn(
          "border bg-background max-w-7xl z-[101] mx-auto relative overflow-hidden rounded-3xl",
          "grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12",
          "px-6 py-14 sm:px-10 md:px-12 md:py-16 lg:px-16",
          elevatedCardShadow,
        )}
        variants={cardVariants}
      >
        <div aria-hidden className={ctaCornerGlowRight} />
        <div aria-hidden className={ctaCornerGlowLeft} />

        {/* Previous CTA copy: left on desktop, first on mobile */}
        <div className="relative z-20 flex min-w-0 flex-col items-center text-center md:items-start md:text-left">
          <div className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
            {t("titleLine1")} <br /> {t("titleLine2")}
          </div>
          <div className="text-sm md:text-base w-[85%] md:w-full max-w-lg text-muted-foreground leading-tight mb-8 mt-4">
            {t("descriptionLine1")}{" "}
            <br className="hidden md:block" /> {t("descriptionLine2")}
          </div>

          <Button variant="gradient" size="cta" className="min-w-32" asChild>
            <a
              href="https://cal.com/studio1/collab"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("button")} <IconPhoneFilled />
            </a>
          </Button>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 mt-8 text-xs text-muted-foreground">
            <span>{t("bullets.savings")}</span>
            <span aria-hidden className="hidden sm:inline text-border">
              ·
            </span>
            <span>{t("bullets.lockIn")}</span>
            <span aria-hidden className="hidden sm:inline text-border">
              ·
            </span>
            <span>{t("bullets.content")}</span>
            <span aria-hidden className="hidden sm:inline text-border">
              ·
            </span>
            <span>{t("bullets.turnaround")}</span>
          </div>
        </div>

        {/* Globe: right on desktop, below on mobile */}
        <div className="relative z-10 flex items-center justify-center md:justify-end">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 m-auto size-[75%] bg-[radial-gradient(circle_at_center,hsl(var(--primary)_/_0.1)_0%,transparent_62%)] dark:bg-[radial-gradient(circle_at_center,hsl(var(--primary)_/_0.08)_0%,transparent_58%)]"
          />
          <div className="relative w-[min(18rem,78vw)] sm:w-[20rem] md:w-[22rem] lg:w-[26rem] touch-none">
            <GlobePulse
              markers={CTA_GLOBE_MARKERS}
              speed={0.0025}
              className="h-full w-full"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
