"use client";

import { Badge } from "@/components/ui/badge";
import { Cube } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { containerVariants, headerVariants } from "@/lib/animations";

export default function ProductHero() {
  return (
    <section className="relative px-4 pb-16 pt-24 sm:pt-28 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-6rem] z-[-1] h-[18rem] w-[14rem] -translate-x-1/2 rotate-[-20deg] rounded-md bg-gradient-to-t from-primary to-primary/50 opacity-50 blur-[8em] transition-all duration-700 ease-out dark:opacity-80 md:h-[22rem] md:w-[22rem]"
      />

      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={headerVariants}>
          <Badge className="flex items-center gap-2 bg-gradient-to-r from-primary via-primary1 to-primary1/20 pb-1 text-sm font-medium text-white shadow-md">
            <Cube weight="fill" className="size-4" />
            Built by Studio1
          </Badge>
        </motion.div>

        <motion.h1
          variants={headerVariants}
          className="font-primary text-4xl font-normal leading-[1.1] tracking-tight text-foreground/90 sm:text-5xl lg:text-[3.5rem]"
        >
          Our{" "}
          <span className="font-accent text-[1.08em] font-normal italic text-primary/75">
            Products
          </span>
        </motion.h1>

        <motion.p
          variants={headerVariants}
          className="mt-1 max-w-2xl text-balance font-secondary text-base text-muted-foreground sm:text-lg"
        >
          Tools we build for developers, designers, and SaaS teams—shipped by
          the same studio behind our DevRel work.
        </motion.p>
      </motion.div>
    </section>
  );
}
