"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import Navbar from "@/components/sections/navbar";

export default function Page() {
  return (
    <div className="bg-black">
      <div className="h-[44rem] max-sm:h-[36rem] overflow-scroll w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center cursor-all-scroll">
        <Navbar />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Spotlight />
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>Don't Miss this Chance!</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8 py-4 text-center">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
            {" "}
            Blog as a Service
          </span>

          <p className="text-lg sm:w-[60rem] max-sm:mx-2.5 sm:text-2xl font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 text-center">
          Creating developer-focused content that builds trust and drives technical adoption
          </p>

          <div className="flex justify-center sm:py-8">
            <button className="px-10 gap-2 flex max-sm:px-4 max-sm:py-2.5 max-sm:text-base py-4 text-center text-xl font-semibold rounded-md bg-gradient-to-b from-orange-500 to-orange-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
