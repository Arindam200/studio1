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
    title: "Clear preview packaging",
    body: "Readable titles, thumbnails, and descriptions that set the right expectation before a developer presses play.",
  },
  {
    icon: IconSearch,
    title: "Search-friendly context",
    body: "Titles, descriptions, tags, and chapters written around the topic, product, and developer problem being explained.",
  },
  {
    icon: IconClick,
    title: "A strong technical opening",
    body: "Cold opens and demo beats that get to the technical point quickly instead of starting with a long brand intro.",
  },
  {
    icon: IconDeviceMobile,
    title: "Shorts from the same idea",
    body: "Short clips and vertical cuts that reuse the strongest explanation without pretending every topic needs a full campaign.",
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
            <h2 className="mt-4 max-w-md font-inter text-4xl font-normal tracking-tight md:text-5xl">
              Make the technical idea clear before{" "}
              <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-normal italic text-transparent">
                play
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              We support the practical details around a video: title, thumbnail,
              description, chapters, clips, and upload-ready assets when needed.
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
