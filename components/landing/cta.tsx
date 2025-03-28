"use client";
import React from "react";
import { IconPhoneFilled } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <motion.div
        className="px-4 relative mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="border bg-background max-w-4xl z-[101] mx-auto shadow-xl relative flex flex-col overflow-hidden items-center justify-center h-[20rem] rounded-3xl"
          variants={itemVariants}
        >
          <motion.div
            className="text-2xl md:text-4xl text-center font-bold"
            variants={itemVariants}
          >
            Ready to Skyrocket <br /> Your Developer Community?
          </motion.div>
          <motion.div
            className="text-center text-sm md:text-base w-[80%] md:w-full text-muted-foreground leading-tight mb-8 mt-4"
            variants={itemVariants}
          >
            Schedule a call with our team to learn{" "}
            <br className="hidden md:block" /> how we can help you grow your
            developer community.
          </motion.div>
          <div className="bottom-[-10rem] md:bottom-[-18rem] rotate-[65deg] right-[-14%] opacity-50 dark:opacity-100 z-[-1] absolute bg-gradient-to-t from-primary to-primary/90 blur-[4em] rounded-xl transition-all translate-x-[-50%] w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem]" />
          <div className="bottom-[-10rem] md:bottom-[-17rem] rotate-[-65deg] left-[-8%] opacity-50 dark:opacity-100 z-[-1] absolute bg-gradient-to-t from-primary to-primary/90 blur-[4em] rounded-xl transition-all translate-x-[-50%] w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem]" />

          <motion.div variants={itemVariants}>
            <Button className="h-12 min-w-32 px-4">
              Schedule a call <IconPhoneFilled />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
