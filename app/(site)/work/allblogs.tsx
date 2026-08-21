"use client";

import React from "react";
import { clientWorkCards } from "@/data/client-work";
import { Version1 } from "@/components/sections/blog-as-service/blog-thubmnail-version/version-1";
import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import {
  sideBeamGlowLeftCentered,
  sideBeamGlowRightCentered,
} from "@/lib/shadows";

const cards = clientWorkCards;

function getActiveTags(searchParams: URLSearchParams) {
  const tagParam = searchParams.get("tags");
  return tagParam ? tagParam.split(",") : ["All"];
}

export default function Allblogs() {
  const searchParams = useSearchParams();
  const tags = getActiveTags(searchParams);

  const filteredCards = cards.filter((card) => {
    const matchesTags =
      tags.includes("All") || tags.some((tag) => card.tags.includes(tag));
    return matchesTags;
  });

  return (
    <div>
      <div className="relative min-h-[200px] p-4 flex flex-col justify-center rounded-md space-y-4">
        <div className={sideBeamGlowLeftCentered}></div>
        <div className={sideBeamGlowRightCentered}></div>
        {filteredCards.length === 0 ? (
          <div className="py-16 text-center font-inter text-base text-muted-foreground">
            No articles found for this tag.
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.05 }}
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
