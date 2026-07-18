"use client";

import { GlobeHemisphereWest } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { WorldMap, type WorldMapDot } from "@/components/ui/world-map";
import { CTA_GLOBE_MARKERS } from "@/components/landing/globe-pulse";
import {
  containerVariants,
  fadeInUp,
  headerVariants,
} from "@/lib/animations";
import { elevatedCardShadow } from "@/lib/shadows";
import { cn } from "@/lib/utils";

const LOCATION_LABELS: Record<string, string> = {
  australia: "Australia",
  india: "India",
  netherlands: "Netherlands",
  us: "USA",
  israel: "Israel",
  singapore: "Singapore",
  vietnam: "Vietnam",
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
  };
}

/** Same hubs as the CTA globe, connected as reach arcs. */
const GLOBAL_REACH_DOTS: WorldMapDot[] = [
  { start: markerPoint("india"), end: markerPoint("us") },
  { start: markerPoint("india"), end: markerPoint("netherlands") },
  { start: markerPoint("india"), end: markerPoint("singapore") },
  { start: markerPoint("singapore"), end: markerPoint("australia") },
  { start: markerPoint("singapore"), end: markerPoint("vietnam") },
  { start: markerPoint("netherlands"), end: markerPoint("israel") },
  { start: markerPoint("us"), end: markerPoint("netherlands") },
];

export default function GlobalReach() {
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
        <Badge className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary1 text-sm font-medium">
          <GlobeHemisphereWest weight="fill" className="size-4" /> Global Reach
        </Badge>
        <h2 className="max-sm:text-4xl text-center font-inter text-5xl font-normal tracking-tight">
          Building With Teams{" "}
          <span className="bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text pr-2 font-accent font-bold italic text-transparent">
            Worldwide
          </span>
        </h2>
        <p className="mt-2 max-w-2xl text-center text-base text-muted-foreground max-sm:text-sm">
          From India to the USA, Netherlands to Singapore: the same hubs on our
          globe, mapped as the places we ship developer content and DevRel.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className={cn(
          "relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-border/50 bg-background p-3 sm:p-5 md:p-6",
          elevatedCardShadow,
        )}
      >
        <WorldMap
          dots={GLOBAL_REACH_DOTS}
          lineColor="#f97316"
          showLabels
          animationDuration={2}
          loop
        />
      </motion.div>
    </motion.section>
  );
}
