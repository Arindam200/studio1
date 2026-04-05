"use client";
import React from "react";
import { Marquee } from "../ui/marquee";
import { trustedbyLogo } from "@/constants/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { staggerChildren, fadeInUp } from "@/lib/animations";

export default function Trustedby() {
  return (
    <motion.div
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
          Trusted by 35+ devtool and SaaS teams
        </h2>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Marquee>
          {trustedbyLogo.map((item) => (
            <div className="flex items-center justify-center" key={item.name}>
              <Image
                src={item.image}
                className={cn(
                  item.isWhite
                    ? "grayscale invert dark:invert-0"
                    : "invert-0 grayscale dark:invert",
                  "opacity-70 mx-10 w-auto object-contain",
                  item.alt === "Eachlabs" && "h-14 aspect-square",
                  item.alt === "Memori" && "h-20 w-auto aspect-square",
                  item.alt === "LiteLLM" &&
                    "h-20 sm:h-24 md:h-24 w-auto max-w-[min(100vw-2rem,400px)] sm:max-w-[440px]",
                  item.alt !== "Eachlabs" &&
                    item.alt !== "Memori" &&
                    item.alt !== "LiteLLM" &&
                    "h-24 w-fit aspect-square",
                )}
                alt={item.name}
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
}
