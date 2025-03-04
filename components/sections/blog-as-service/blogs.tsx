"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Data } from "@/data";
import { Version1 } from "./blog-thubmnail-version/version-1";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const cards = Data.Blogs;

export default function BlogSection() {
  return (
    <div id="work" className="sm:px-20 px-2.5 py-10 sm:py-20">
      <motion.div
        className="text-center my-10"
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="text-center font-semibold lg:text-5xl text-4xl mb-4">
          Our <span className="text-primary">Blogs</span>
        </div>
        <p className="mx-auto text-foreground/80 text-sm md:text-base">
          Everything you need to build and maintain a successful{" "}
          <br className="hidden md:block" /> developer relations program.
        </p>
      </motion.div>
      <div className="min-h-[600px] p-4 flex flex-col justify-center rounded-md space-y-4">
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
