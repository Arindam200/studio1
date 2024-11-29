import React from "react";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardFooter,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-cards";
import Link from "next/link";
import { ArrowRight} from "lucide-react";
import { Data } from "@/data";

const cards = Data.Blogs;

export default function MinimalCardDemo() {
  return (
    <div id="blogs" className="sm:px-20 px-2.5 py-10 sm:py-20">
      <div className="sm:p-2">
        <div className="text-center mb-6 font-semibold lg:text-5xl text-2xl pb-4">
          Our{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
            Blogs
          </span>
        </div>
      </div>
      <div className="min-h-[600px] p-4 flex flex-col justify-center rounded-md space-y-4">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
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
      </div>
      <div className="flex justify-center py-4">
        <Link href="/blogs" className="inline-flex gap-3 h-12 animate-shimmer items-center justify-center rounded-md border border-orange-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-orange-50">
          Read More Blogs <ArrowRight size={24} />
        </Link>
      </div>
    </div>
  );
}
