"use client";

import { fadeInUp, staggerChildren } from "@/lib/animations";
import {
  IconCalendarEvent,
  IconChartBar,
  IconRefresh,
} from "@tabler/icons-react";
import { motion } from "motion/react";

const loop = [
  {
    icon: IconCalendarEvent,
    title: "Plan the calendar",
    body: "Series themes, publish days, and playlist structure locked before you record a frame.",
  },
  {
    icon: IconChartBar,
    title: "Ship for discovery",
    body: "Upload with SEO metadata, end screens, and cards that pull people into the next video.",
  },
  {
    icon: IconRefresh,
    title: "Read the signals",
    body: "CTR, average view duration, and subscriber growth decide what we double down on next.",
  },
];

export default function Cadence() {
  return (
    <section className="relative py-28 md:py-36">
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
            Cadence and growth
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-inter text-4xl font-medium tracking-tight md:text-5xl"
          >
            Consistency beats{" "}
            <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-bold italic text-transparent">
              one-off drops
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base text-muted-foreground"
          >
            A single polished video is a demo. A weekly channel is a growth
            engine. We run the loop with you.
          </motion.p>
        </motion.div>

        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-6"
        >
          <div
            aria-hidden
            className="absolute left-7 top-7 hidden h-px -translate-y-1/2 bg-border md:block md:right-[calc((100%-3rem)/3-1.75rem)]"
          />
          {loop.map((step, index) => (
            <motion.li
              key={step.title}
              variants={fadeInUp}
              className="relative flex flex-col items-start"
            >
              <div className="relative z-10 flex size-14 items-center justify-center rounded-full border bg-background shadow-sm">
                <step.icon className="size-6 text-primary" aria-hidden="true" />
              </div>
              <p className="mt-5 font-secondary text-xs font-medium tracking-widest text-muted-foreground">
                Step {index + 1}
              </p>
              <h3 className="mt-2 font-inter text-xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                {step.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
