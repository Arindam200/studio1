"use client";

import React from "react";
import Allblogs from "./allblogs";
import { Suspense } from "react";
// import { useSearchParams } from 'next/navigation';

interface AllblogsProps {
  query: string;
  tags: string[];
}

export default function Hero({ query, tags }: AllblogsProps) {
  return (
    <div className="relative z-20 mx-auto mt-16 w-full max-w-7xl md:mt-20">
      <Suspense
        fallback={
          <div className="h-40 w-full animate-pulse rounded-xl bg-muted/30" />
        }
      >
        <Allblogs query={query || ""} tags={tags.length ? tags : ["All"]} />
      </Suspense>
    </div>
  );
}
