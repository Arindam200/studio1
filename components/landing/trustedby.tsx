"use client";
import React from "react";
import { Marquee } from "../ui/marquee";
import { trustedbyLogo } from "@/constants/data";
import Image from "next/image";
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
        <h2 className="text-xl font-medium">Trusted by companies</h2>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Marquee>
          {trustedbyLogo.map((item) => (
            <div className="flex items-center justify-center" key={item.name}>
              <Image
                src={item.image}
                className={`${item.isWhite ? "grayscale invert dark:invert-0" : "invert-0 grayscale dark:invert"} ${item.alt === "Eachlabs" ? "h-14" : "h-24"} opactiy-70 mx-10 w-fit  aspect-square object-contain`}
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
