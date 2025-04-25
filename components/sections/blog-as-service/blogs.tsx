"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Data } from "@/data";
import { Version1 } from "./blog-thubmnail-version/version-1";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

const cards = Data.Blogs;

export default function BlogSection() {
  return (
    <div
      id="work"
      className="relative overflow-hidden sm:px-20 px-2.5 py-10 sm:py-20"
    >
      <div className="top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] absolute bg-gradient-to-t opacity-50 dark:opacity-60 dark:lg:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[42rem] w-[10rem] rotate-[40deg]"></div>

      <motion.div
        className="text-center my-10"
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p className="mx-auto text-foreground/80 text-sm md:text-base"></p>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 md:text-5xl">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary1 to-primary ">
              Blogs
            </span>
          </h2>
          <p className="text-muted-foreground ">
            Everything you need to build and maintain a successful{" "}
            <br className="hidden md:block" /> developer relations program.
          </p>
        </div>
      </motion.div>
      <div className="min-h-[600px] max-w-7xl mx-auto p-4 flex flex-col justify-center rounded-md space-y-4">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, index) => {
            switch (item.version) {
              case 1:
                return (
                  <Version1
                    key={index}
                    title={item.title}
                    description={item.description}
                    hrefLink={item.link}
                    tags={item.tags}
                    animationDelay={(index * 150).toString()}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Button
          asChild
          variant={"secondary"}
          className="flex w-fit mx-auto justify-center py-4"
        >
          <Link href="/blogs">
            Read More Blogs <ArrowRight className="ml-2" size={24} />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
