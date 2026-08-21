"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { type WorldMapDot } from "@/components/ui/world-map";
import { CTA_GLOBE_MARKERS } from "@/components/landing/globe-markers";
import { SectionEyebrow } from "@/components/landing/section-eyebrow";
import {
  containerVariants,
  fadeInUp,
  headerVariants,
} from "@/lib/animations";
import { elevatedCardShadow } from "@/lib/shadows";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const LazyWorldMap = dynamic(
  () => import("@/components/ui/world-map").then((module) => module.WorldMap),
  {
    ssr: false,
    loading: () => (
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-primary/[0.05] dark:bg-white/[0.03] md:aspect-[2.5/1] lg:aspect-[2/1]">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.16)_0%,transparent_64%)] dark:bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]"
        />
      </div>
    ),
  },
);

const LOCATION_LABELS: Record<string, string> = {
  australia: "Australia",
  brazil: "Brazil",
  france: "France",
  india: "India",
  israel: "Israel",
  netherlands: "Netherlands",
  us: "USA",
  singapore: "Singapore",
  vietnam: "Vietnam",
};

const LABEL_OFFSETS: Record<string, { x: number; y: number }> = {
  france: { x: -5, y: 3.8 },
  israel: { x: 6, y: 4.8 },
  netherlands: { x: 6, y: -5.2 },
};

function markerPoint(id: string) {
  const marker = CTA_GLOBE_MARKERS.find((m) => m.id === id);
  if (!marker) {
    throw new Error(`Missing globe marker: ${id}`);
  }

  const [lat, lng] = marker.location;
  return {
    lat,
    lng,
    label: LOCATION_LABELS[id] ?? id,
    labelOffset: LABEL_OFFSETS[id],
  };
}

/** Same hubs as the CTA globe; arcs flow out from India westward, in from the east. */
const HUB = "india";

/** West of India on the map — lines animate India → country. */
const WEST_SPOKE_IDS = [
  "us",
  "france",
  "netherlands",
  "israel",
  "brazil",
] as const;

/** East of India on the map — lines animate country → India. */
const EAST_SPOKE_IDS = ["singapore", "vietnam", "australia"] as const;

const GLOBAL_REACH_DOTS: WorldMapDot[] = [
  ...WEST_SPOKE_IDS.map((id) => ({
    start: markerPoint(HUB),
    end: markerPoint(id),
  })),
  ...EAST_SPOKE_IDS.map((id) => ({
    start: markerPoint(HUB),
    end: markerPoint(id),
    reverse: true,
  })),
];

export default function GlobalReach() {
  const t = useTranslations("GlobalReach");
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    const target = mapRef.current;
    if (!target || shouldLoadMap) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "650px 0px" },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [shouldLoadMap]);

  return (
    <motion.section
      id="global-reach"
      className="relative px-4 py-24 md:py-32"
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
        <h2 className="max-sm:text-4xl text-center font-inter text-5xl font-normal tracking-tight">
          {t("titlePrefix")}{" "}
          <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-normal italic text-transparent">
            {t("titleHighlight")}
          </span>
        </h2>
        <p className="mt-2 max-w-2xl text-center text-base text-muted-foreground max-sm:text-sm">
          {t("description")}
        </p>
      </motion.div>

      <motion.div
        ref={mapRef}
        variants={fadeInUp}
        className={cn(
          "relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-primary/15 bg-background p-3 dark:border-white/15 sm:p-5 md:p-6",
          elevatedCardShadow,
        )}
      >
        {shouldLoadMap ? (
          <LazyWorldMap
            dots={GLOBAL_REACH_DOTS}
            lineColor="#f97316"
            showLabels
            animationDuration={1.4}
            loop={false}
          />
        ) : (
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-primary/[0.05] dark:bg-white/[0.03] md:aspect-[2.5/1] lg:aspect-[2/1]">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.16)_0%,transparent_64%)] dark:bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]"
            />
          </div>
        )}
      </motion.div>
    </motion.section>
  );
}
