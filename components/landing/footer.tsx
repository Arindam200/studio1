"use client";
import React from "react";
import { IconBrandLinkedin, IconBrandX, IconNews } from "@tabler/icons-react";
import Logo from "../ui/svgs/logo";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const gradientVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 0.3,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative max-h-fit mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        className="top-[-10rem] md:top-[-30rem] z-[-1] left-[0%] absolute bg-gradient-to-t opacity-30 dark:opacity-80 from-primary dark:to-primary/80 to-primary/80 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] -rotate-[60deg]"
        variants={gradientVariants}
      />
      <motion.div
        className="top-[-10rem] md:top-[-30rem] z-[-1] right-[0%] absolute bg-gradient-to-t opacity-30 dark:opacity-80 from-primary dark:to-primary/80 to-primary/80 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]"
        variants={gradientVariants}
      />

      <motion.footer
        className="border-t bg-background mt-44 z-[101] relative pb-10"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div className="space-y-2" variants={itemVariants}>
                <motion.div
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <Logo className="size-8" />
                  <h2 className="text-2xl font-bold">Studio1</h2>
                </motion.div>
                <motion.p
                  className="text-muted-foreground sm:w-96"
                  variants={itemVariants}
                >
                  Empowering tech companies with technical content and DevRel
                  services.
                </motion.p>
              </motion.div>
              <motion.div className="flex gap-4" variants={itemVariants}>
                <Link
                  href="https://x.com/Studio1HQ"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <IconBrandX className="size-6 text-primary" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/studio1hq/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <IconBrandLinkedin className="size-6 text-primary" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://dev.to/studio1hq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <IconNews className="size-6 text-primary" />
                  <span className="sr-only">Blogs</span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
              variants={containerVariants}
            >
              <motion.div
                className="space-y-4 py-4 px-4 rounded-xl bg-accent/40"
                variants={itemVariants}
              >
                <h3 className="font-bold text-primary">Services</h3>
                <nav className="flex flex-col gap-2">
                  <Link
                    href="/blog-as-service"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Technical Content
                  </Link>
                  <Link
                    href="/devrel-as-service"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    DevRel Consulting
                  </Link>
                  <Link
                    href="/devrel-as-service"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Community Building
                  </Link>
                  <Link
                    href="/blog-as-service"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Developer Marketing
                  </Link>
                </nav>
              </motion.div>
              <motion.div
                className="space-y-4 py-4 px-4 rounded-xl bg-accent/40"
                variants={itemVariants}
              >
                <h3 className="font-bold text-primary">Agency</h3>
                <nav className="flex flex-col gap-2">
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="https://dev.to/studio1hq"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Community Blog
                  </Link>
                  <Link
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </nav>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="mt-12 flex flex-col gap-4 pt-8 md:flex-row md:items-center md:justify-between"
            variants={itemVariants}
          >
            <p className="text-base text-muted-foreground">
              ©{new Date().getFullYear()} Studio1. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms and Conditions
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </motion.div>
        </div>
      </motion.footer>
    </motion.section>
  );
}
