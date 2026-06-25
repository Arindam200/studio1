"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Package } from "@phosphor-icons/react";
import { products } from "@/constants/products";
import ProductCard from "@/components/product/product-card";
import { staggerChildren, fadeInUp, cardVariants } from "@/lib/animations";

export default function ProductPage() {
  return (
    <section className="overflow-x-hidden">
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] fixed bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-80 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]" />
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] fixed bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-80 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pb-20">
        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div variants={fadeInUp}>
            <Badge className="mb-6 flex items-center gap-2 pb-1">
              <Package className="size-5" weight="duotone" />
              Built by Studio1
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Products
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground"
          >
            Tools we build and ship for developers, designers, and SaaS teams.
          </motion.p>
        </motion.div>

        {/* Why we build */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
          className="max-w-3xl mx-auto mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-6 text-center"
          >
            Why We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary">
              Build
            </span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="text-foreground/80 leading-relaxed space-y-4 text-center"
          >
            <p>
              We are engineers and builders ourselves. Studio1 started as a
              services company helping devtool and SaaS teams with content and
              DevRel, but we never wanted to stop there. Working with developer
              products every day gives us firsthand experience with the gaps in
              existing tooling, the frustrations developers face, and the
              problems nobody is solving well.
            </p>
            <p>
              So we build. Not as side projects, but as real products we use,
              maintain, and ship to others. Each one comes from something we
              needed ourselves or saw teams struggle with repeatedly. We are not
              limiting ourselves to services. If we see a problem worth solving,
              we build the tool for it.
            </p>
          </motion.div>
        </motion.div>

        {/* Product cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerChildren}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products
              .filter((p) => p.status !== "upcoming")
              .map((product, i) => (
                <ProductCard key={product.name} product={product} index={i} />
              ))}
          </div>

          {/* Upcoming teaser */}
          <motion.div
            variants={cardVariants}
            className="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-background/40 backdrop-blur-sm px-6 sm:px-8 py-5"
          >
            <span className="size-2 rounded-full bg-amber-500" />
            <span className="text-sm text-muted-foreground">
              Something new is in the works. More details soon.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
