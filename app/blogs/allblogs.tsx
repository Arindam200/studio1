"use client";

import React from "react";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardFooter,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-cards";
import Link from "next/link";
import { Data } from "@/data";
import { Version1 } from "@/components/sections/blog-as-service/blog-thubmnail-version/version-1";
import { motion } from "framer-motion";

const cards = Data.Allblogs;

interface AllblogsProps {
  query: string;
  tags: string[];
}

export default function Allblogs({ query, tags }: AllblogsProps) {
  const filteredCards = cards.filter((card) => {
    const searchContent = `${card.title} ${card.description}`.toLowerCase();
    const matchesSearch = searchContent.includes(query.toLowerCase());
    const matchesTags =
      tags.includes("All") || tags.some((tag) => card.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div>
      <div className="min-h-[200px] p-4 flex flex-col justify-center rounded-md space-y-4">
        {filteredCards.length === 0 ? (
          <div className="text-center text-white text-xl">
            No articles found matching your search.
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCards.map((item, index) => {
              switch (item.version) {
                case 1:
                  return (
                    <Version1
                      key={index}
                      title={item.title}
                      description={item.description}
                      hrefLink={item.link}
                      tags={item.tags}
                      animationDelay={(index * 10).toString()}
                    />
                  );
              }
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
}
