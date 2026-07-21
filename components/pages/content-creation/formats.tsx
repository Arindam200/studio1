"use client";

import { fadeInUp, staggerChildren } from "@/lib/animations";
import { motion } from "motion/react";

const formats = [
  {
    number: "01",
    meta: "Tutorials",
    title: "Long-form tutorials",
    detail:
      "Step-by-step videos that walk developers through a real workflow in your product.",
  },
  {
    number: "02",
    meta: "Demos",
    title: "Product deep dives",
    detail:
      "Feature demos and architecture explainers for people deciding whether to adopt you.",
  },
  {
    number: "03",
    meta: "Shorts",
    title: "Shorts and cutdowns",
    detail:
      "Short clips from the long videos, made to get new viewers into the full watch.",
  },
  {
    number: "04",
    meta: "Series",
    title: "Channel series",
    detail:
      "A repeating show with a clear topic each episode, so people know when to come back.",
  },
];

export default function Formats() {
  return (
    <section className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeInUp}
            className="font-secondary text-sm font-medium tracking-wide text-primary"
          >
            Formats
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-inter text-4xl font-medium tracking-tight md:text-5xl"
          >
            The videos we make most often
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base text-muted-foreground"
          >
            Pick what fits your product and audience. We handle scripting, edit,
            packaging, and publish.
          </motion.p>
        </motion.div>

        <motion.ul
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          role="list"
          aria-label="Video formats"
          className="mt-16 grid gap-10 sm:grid-cols-2 md:mt-20 md:gap-x-14 md:gap-y-14"
        >
          {formats.map((format) => (
            <motion.li
              key={format.title}
              variants={fadeInUp}
              className="min-w-0 border-l-2 border-primary/40 pl-6 md:pl-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-secondary text-sm font-semibold tabular-nums tracking-widest text-primary">
                  {format.number}
                </span>
                <span className="font-secondary text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {format.meta}
                </span>
              </div>
              <h3 className="mt-3 font-inter text-2xl font-medium tracking-tight md:text-3xl">
                {format.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
                {format.detail}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
