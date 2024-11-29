"use client"

import React from 'react'
import Allblogs from './allblogs';
import { Suspense } from 'react';
// import { useSearchParams } from 'next/navigation';

interface AllblogsProps {
    query: string;
  }

export default function Hero({ query }: AllblogsProps) {
    // const query = searchParams?.query || "";
    console.log(query);
  return (
    <div className="sm:px-20 px-1.5">
      <Suspense fallback={<div>Loading...</div>}>  
        <Allblogs query={query || ""} />
      </Suspense>
    </div>
  )
}
