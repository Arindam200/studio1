"use client";

import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Data } from "@/data";
import TestimonialCard from "./testimonial-card";
import { SectionEyebrow } from "./section-eyebrow";
import { motion, AnimatePresence } from "motion/react";
import { staggerContainer, itemVariants, headerVariants } from "@/lib/animations";
import { sideBeamGlowLeft, sideBeamGlowRight } from "@/lib/shadows";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const [showAll, setShowAll] = useState(false);
  const initialTestimonials = Data.Testimonials.slice(0, 6);
  const remainingTestimonials = Data.Testimonials.slice(6);
  const containerRef = useRef(null);

  return (
    <section id="testimonials" className="pt-12 pb-20 relative overflow-hidden">
      <div className={sideBeamGlowLeft}></div>
      <div className={sideBeamGlowRight}></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          className="flex flex-col items-center gap-4 justify-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={headerVariants}>
            <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
          </motion.div>
          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-5xl font-normal text-center"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-center text-base mt-2 max-w-2xl"
          >
            {t("description")}
          </motion.p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {initialTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="h-full"
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
                    key={testimonial.name}
                    className="h-full"
                    initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                    transition={{
                      type: "spring" as const,
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
            <Button variant="gradient" size="cta" onClick={() => setShowAll(true)}>
              {t("seeMore")}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
