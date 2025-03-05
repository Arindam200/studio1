"use client";
import { Data } from "@/data";
import Image from "next/image";
import { motion } from "motion/react";

export const Companies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 md:text-5xl">
            Partnered{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
              Companies
            </span>{" "}
          </h2>
          <p className="text-muted-foreground ">
            We empower tech brands to build thriving <br /> developer
            communities through DevRel and high-impact content.
          </p>
        </motion.div>

        <div className="grid max-w-4xl mx-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Data.Companies.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (index % 3), duration: 0.7 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="border-2 bg-accent dark:bg-muted-foreground/5 flex-col aspect-square rounded-xl flex items-center justify-center"
              >
                <div className="w-32">
                  <Image
                    className="rounded-lg"
                    src={item.image}
                    width={1000}
                    height={1000}
                    alt={item.name}
                  />
                </div>
                <div className="h-16 flex items-center justify-center text-lg font-semibold">
                  {item.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
