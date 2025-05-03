"use client";
import { Data } from "@/data";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export const Companies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-80 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]"></div>
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-80 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]"></div>
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

        <div className="grid max-w-4xl z-20 mx-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Data.Companies.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index % 3), duration: 0.7 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="border-2 bg-accent px-3 z-20 backdrop-blur-2xl dark:bg-muted-foreground/5 flex-col w-full h-fit py-10 md:aspect-square rounded-xl flex items-center justify-center cursor-pointer"
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
                  <div className="text-sm text-balance text-center text-muted-foreground">
                    {item.description}
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
