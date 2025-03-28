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
    <div className="mt-20 px-1.5 max-w-7xl mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <Allblogs query={query || ""} tags={tags || "All"} />
      </Suspense>
    </div>
  );
}
