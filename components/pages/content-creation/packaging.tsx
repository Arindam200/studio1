"use client";

import { fadeInUp, staggerChildren } from "@/lib/animations";
import {
  IconClick,
  IconPhoto,
  IconSearch,
  IconDeviceMobile,
} from "@tabler/icons-react";
import { motion } from "motion/react";

const layers = [
  {
    icon: IconPhoto,
    title: "Thumbnails that earn the click",
    body: "Readable on mobile, high contrast, and built for A/B tests. Packaging for developer curiosity, not stock faces and neon arrows.",
  },
  {
    icon: IconSearch,
    title: "Titles and SEO that surface",
    body: "Search-friendly titles, descriptions, tags, and chapters so the right engineers find the video when they are already looking.",
  },
  {
    icon: IconClick,
    title: "Hooks that hold retention",
    body: "Cold opens, demo beats, and CTAs paced for YouTube watch time, not a five-minute brand intro nobody finishes.",
  },
  {
    icon: IconDeviceMobile,
    title: "Shorts that feed the long form",
    body: "Cutdowns and vertical clips that pull viewers into playlists, series, and the full tutorial when they want depth.",
  },
];

export default function Packaging() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"
        >
          <motion.div
            variants={fadeInUp}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="font-secondary text-sm font-medium tracking-wide text-primary">
              The packaging layer
            </p>
            <h2 className="mt-4 max-w-md font-inter text-4xl font-medium tracking-tight md:text-5xl">
              Most channels lose before{" "}
              <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-bold italic text-transparent">
                play
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Great footage still fails with a weak title and thumbnail. We treat
              packaging as part of production, not an afterthought the day you
              upload.
            </p>
          </motion.div>

          <div className="divide-y border-y">
            {layers.map((layer) => (
              <motion.div
                key={layer.title}
                variants={fadeInUp}
                className="grid gap-4 py-10 sm:grid-cols-[auto_1fr] sm:gap-6 md:py-12"
              >
                <div className="flex size-11 items-center justify-center rounded-lg border bg-muted/50">
                  <layer.icon className="size-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-inter text-xl font-medium tracking-tight md:text-2xl">
                    {layer.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {layer.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
