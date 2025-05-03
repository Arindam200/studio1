"use client";
import React from "react";
import { IconBrandLinkedin, IconBrandX, IconNews } from "@tabler/icons-react";
import Logo from "../ui/svgs/logo";
import { motion } from "motion/react";
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
        duration: 0.3,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative max-h-fit  mt-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        className="top-[-10rem] md:top-[-30rem] z-[-1] left-[0%] absolute bg-gradient-to-t opacity-30 dark:opacity-100 from-primary dark:to-primary/80 to-primary/80 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] -rotate-[60deg]"
        variants={gradientVariants}
      />
      <motion.div
        className="top-[-10rem] md:top-[-30rem] z-[-1] right-[0%] absolute bg-gradient-to-t opacity-30 dark:opacity-80 from-primary dark:to-primary/80 to-primary/80 blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]"
        variants={gradientVariants}
      />

      <motion.footer
        className="border-t max-h-fit overflow-hidden bg-background mt-44 z-[101] relative pb-10"
        variants={itemVariants}
      >
        <div className="bg-gradient-to-b from-foreground/20 via-accent/80 to-transparent dark:from-accent/80 dark:via-accent/60 bg-clip-text text-transparent text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[17rem] leading-tight absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[5rem] z-20 font-extrabold">
          STUDIO1
        </div>

        {/* bottom-logo */}

        <div className="absolute hover:border-primary duration-500 drop-shadow-[0_0px_25px_hsl(var(--primary))] bottom-[6rem] md:bottom-[5rem] backdrop-blur-sm z-[30] rounded-3xl bg-background/60 left-1/2 border-2 border-accent/40 flex items-center justify-center p-3 -translate-x-1/2">
          <Logo className="size-12 sm:size-16 md:size-24" />
        </div>

        {/* bottom-line */}
        <div className="absolute bottom-[8rem] sm:bottom-[8.5rem] backdrop-blur-sm z-[25] h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full left-1/2 -translate-x-1/2"></div>

        {/* bottom shadow */}
        <div className="bg-gradient-to-t from-background via-background/80 blur-[1em] to-background/40 absolute bottom-[7rem] z-[22] w-full h-24"></div>

        <div className="max-w-7xl flex flex-col justify-between mx-auto h-[30rem] sm:h-[35rem] md:h-[40rem] z-[30] p-4 pt-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <motion.div
              className="w-full flex flex-col items-center"
              variants={itemVariants}
            >
              <motion.div
                className="space-y-2 flex flex-col items-center flex-1"
                variants={itemVariants}
              >
                <motion.div
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary text-3xl font-bold">
                    Studio1
                  </span>
                </motion.div>
                <motion.p
                  className="text-foreground/90 font-semibold text-center sm:w-96"
                  variants={itemVariants}
                >
                  Empowering tech companies with technical content and DevRel
                  services.
                </motion.p>
              </motion.div>
              <motion.div
                className="flex mb-8 mt-3 gap-4"
                variants={itemVariants}
              >
                <Link
                  href="https://x.com/Studio1HQ"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <IconBrandX className="size-6 hover:text-primary duration-300" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/studio1hq/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <IconBrandLinkedin className="size-6 hover:text-primary duration-300" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://dev.to/studio1hq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <IconNews className="size-6 hover:text-primary duration-300" />
                  <span className="sr-only">Blogs</span>
                </Link>
              </motion.div>
              <motion.div className="flex flex-wrap gap-4 text-sm font-medium text-neutral-500 dark:text-neutral-400 max-w-full">
                <Link
                  className="hover:text-foreground duration-300 hover:font-semibold"
                  href={"/devrel-as-a-service"}
                >
                  DevRel
                </Link>
                <Link
                  className="hover:text-foreground duration-300 hover:font-semibold"
                  href={"/careers"}
                >
                  Careers
                </Link>
                {/* <Link
                  className="hover:text-foreground duration-300 hover:font-semibold"
                  href={"/case-studies"}
                >
                  Case Studies
                </Link> */}
                <Link
                  className="hover:text-foreground duration-300 hover:font-semibold"
                  href={"/blog-as-service"}
                >
                  Blogs
                </Link>
              </motion.div>
            </motion.div>
            {/* <motion.div
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
            </motion.div> */}
          </div>
          <motion.div
            className="mt-44 md:mt-12 z-[25] flex flex-col gap-1 items-center justify-center md:flex-row md:items-center md:justify-between"
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
