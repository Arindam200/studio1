"use client";

import { Badge } from "@/components/ui/badge";
import { Cube } from "@phosphor-icons/react";
import { motion } from "motion/react";
import {
  containerVariants,
  headerVariants,
  productHeroGlowAmbient,
} from "@/lib/animations";
import { productHeroGlow } from "@/lib/shadows";

export default function ProductHero() {
  return (
    <section className="relative overflow-x-hidden px-4 pb-12 pt-20 sm:pb-16 sm:pt-24 md:pb-20 md:pt-28">
      <motion.div
        aria-hidden
        className={productHeroGlow}
        animate={productHeroGlowAmbient}
      />

      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={headerVariants}>
          <Badge className="flex items-center gap-2 bg-gradient-to-r from-primarySurface via-primary1 to-primary1/20 pb-1 text-sm font-medium text-white shadow-md dark:from-primary dark:via-primary1 dark:to-primary1/60">
            <Cube weight="fill" className="size-4" />
            Built by <span className="font-primary">Studio1</span>
          </Badge>
        </motion.div>

        <motion.h1
          variants={headerVariants}
          className="font-primary text-3xl font-normal leading-[1.12] tracking-tight text-foreground/90 sm:text-4xl md:text-5xl lg:text-[3.5rem]"
        >
          Our{" "}
          <span className="serif-accent font-accent text-[1.08em] font-normal italic text-primary/75">
            Products
          </span>
        </motion.h1>

        <motion.p
          variants={headerVariants}
          className="mt-1 max-w-2xl px-1 text-balance font-secondary text-sm text-muted-foreground sm:px-0 sm:text-base md:text-lg"
        >
          Tools we build and ship for developers, designers, and teams.
        </motion.p>
      </motion.div>
    </section>
  );
}
