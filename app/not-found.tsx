"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, HouseSimple } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { itemVariants, staggerChildren } from "@/lib/animations";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-24 pt-28 text-center sm:px-6 lg:px-8"
      >
        <motion.h1
          variants={itemVariants}
          className="font-inter text-7xl font-medium leading-none tracking-tight sm:text-8xl md:text-9xl"
        >
          <span className="bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text text-transparent">
            404
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="mt-8 max-w-2xl font-inter text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl"
        >
          Page not found
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg"
        >
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <Button
            variant="gradient"
            size="cta"
            className="w-full sm:w-auto"
            asChild
          >
            <Link href="/">
              <HouseSimple className="size-5" weight="fill" />
              Back to home
            </Link>
          </Button>

          <Button
            variant="outline-subtle"
            size="cta"
            className="w-full sm:w-auto"
            asChild
          >
            <Link href="/case-studies">
              Browse case studies
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
