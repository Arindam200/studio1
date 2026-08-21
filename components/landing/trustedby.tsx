"use client";
import React from "react";
import { Marquee } from "../ui/marquee";
import { trustedbyLogo } from "@/constants/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { staggerChildren, fadeInUp } from "@/lib/animations";
import { Num } from "@/components/ui/num";

export default function Trustedby() {
  return (
    <motion.div
      id="trusted-by"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
      className="max-w-7xl mt-40 mb-12 mx-auto"
    >
      <motion.div
        variants={fadeInUp}
        className="flex justify-center w-full items-center"
      >
        <h2 className="text-xl font-medium">
          Trusted by <Num>35+</Num> devtool and SaaS teams
        </h2>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Marquee fade={false}>
          {trustedbyLogo.map((item) => (
            <div
              className="mx-6 flex h-14 w-40 items-center justify-center sm:mx-8 sm:w-44"
              key={item.name}
            >
              {item.showNameBeside ? (
                <div className="flex max-w-full items-center justify-center gap-2.5 opacity-80">
                  <div className={cn("relative size-9 shrink-0", item.className)}>
                    <Image
                      src={item.image}
                      className={cn(
                        "object-contain",
                        !("noFilter" in item && item.noFilter) &&
                          (item.isWhite
                            ? "grayscale invert dark:invert-0"
                            : "invert-0 grayscale dark:invert"),
                      )}
                      alt=""
                      fill
                      sizes="48px"
                    />
                  </div>
                  <span className="truncate text-base font-medium tracking-tight sm:text-lg">
                    {item.name}
                  </span>
                </div>
              ) : (
                <Image
                  src={item.image}
                  className={cn(
                    !("noFilter" in item && item.noFilter) &&
                      (item.isWhite
                      ? "grayscale invert dark:invert-0"
                      : "invert-0 grayscale dark:invert"),
                    "h-auto max-h-9 w-auto max-w-36 object-contain opacity-70 sm:max-w-40",
                    item.name === "Novita AI" && "max-h-11 sm:max-h-12",
                  )}
                  alt={item.name}
                  width={220}
                  height={72}
                  sizes="176px"
                  style={{ width: "auto", height: "auto" }}
                />
              )}
            </div>
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
}
