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

const cards = Data.Allblogs;

interface AllblogsProps {
  query: string;
}

export default function Allblogs({ query }: AllblogsProps) {
  const filteredCards = cards.filter((card) => {
    const searchContent = `${card.title} ${card.description}`.toLowerCase();
    return searchContent.includes(query.toLowerCase());
  });

  return (
    <div>
      <div className="min-h-[200px] p-4 flex flex-col justify-center rounded-md space-y-4">
        {filteredCards.length === 0 ? (
          <div className="text-center text-white text-xl">
            No articles found matching your search.
          </div>
        ) : (
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card) => (
              <MinimalCard key={card.title}>
                <Link href={card.link}>
                  <MinimalCardImage
                    src={card.image || "default-image-url"}
                    alt={card.title}
                  />
                  <MinimalCardTitle>{card.title}</MinimalCardTitle>
                  <MinimalCardDescription>
                    {card.description}
                  </MinimalCardDescription>
                  <MinimalCardFooter></MinimalCardFooter>
                </Link>
              </MinimalCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
