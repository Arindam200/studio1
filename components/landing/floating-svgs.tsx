"use client";
import { Code, Pen } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { iconVariants, createFloatingAnimation } from "@/lib/animations";
import { floatingTileSurface } from "@/lib/shadows";
import { cn } from "@/lib/utils";

export { floatingTileSurface };

export default function FloatingSvgs() {
  return (
    <>
      <motion.div
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        animate={createFloatingAnimation(0, -12)}
        viewport={{ once: false, amount: 0.2 }}
        className={cn(
          floatingTileSurface,
          "absolute top-[3rem] z-[201] flex size-14 items-center justify-center rounded-2xl left-[0.25rem] sm:left-[0.5rem] md:top-[6rem] md:left-[1rem] lg:top-[7rem] lg:left-[2rem] xl:top-[8rem] xl:left-[4rem]"
        )}
      >
        <Code className="size-6 drop-shadow-sm" weight="bold" />
      </motion.div>
      <motion.div
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        animate={createFloatingAnimation(1, 12)}
        viewport={{ once: false, amount: 0.2 }}
        className={cn(
          floatingTileSurface,
          "absolute top-[5rem] z-[201] flex size-14 items-center justify-center rounded-2xl right-[0.25rem] sm:right-[0.5rem] md:top-[8rem] md:right-[1rem] lg:top-[9rem] lg:right-[2rem] xl:top-[10rem] xl:right-[4rem]"
        )}
      >
        <Pen className="size-6 drop-shadow-sm" weight="bold" />
      </motion.div>
    </>
  );
}
