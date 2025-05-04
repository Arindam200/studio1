"use client";

import { useState, useRef } from "react";
import { ChatCenteredDots } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Data } from "@/data";
import TestimonialCard from "./testimonial-card";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const initialTestimonials = Data.Testimonials.slice(0, 6);
  const remainingTestimonials = Data.Testimonials.slice(6);
  const containerRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  const headerVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      filter: "blur(5px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-100 from-primary dark:to-primary to-primary blur-[7em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]"></div>
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-100 from-primary dark:to-primary to-primary blur-[7em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="flex flex-col items-center gap-4 justify-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={headerVariants}>
            <Badge className="text-sm font-medium bg-gradient-to-r from-primary to-primary1 flex gap-2 items-center">
              <ChatCenteredDots weight="fill" className="size-4" /> Testimonials
            </Badge>
          </motion.div>
          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-5xl font-medium text-center"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-center text-base mt-2 max-w-2xl"
          >
            Hear from the founders, CEOs and builders who trust our team to
            tell their product story.
          </motion.p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 mt-20 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {initialTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid"
              variants={itemVariants}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}

          <AnimatePresence>
            {showAll && (
              <>
                {remainingTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index + 6}
                    className="break-inside-avoid"
                    initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                    transition={{
                      type: "spring",
                      damping: 15,
                      stiffness: 100,
                      delay: index * 0.05,
                      duration: 0.6,
                    }}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {!showAll && remainingTestimonials.length > 0 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button onClick={() => setShowAll(true)}>See More</Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
