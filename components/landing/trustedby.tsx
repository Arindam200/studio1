"use client";
import React from "react";
import { Marquee } from "../ui/marquee";
import { trustedbyLogo } from "@/constants/data";
import Image from "next/image";

export default function Trustedby() {
  return (
    <div className="max-w-7xl mt-20 mb-12 mx-auto">
      <div className="flex justify-center w-full items-center">
        <h2 className="text-xl font-medium">Trusted by companies</h2>
      </div>
      <Marquee>
        {trustedbyLogo.map((item) => (
          <Image
            src={item.image}
            key={item.name}
            className="invert grayscale dark:invert-0 opacity-70 dark:opacity-50 mx-10 w-fit h-28 aspect-square object-contain"
            alt={item.name}
            width={100}
            height={100}
          />
        ))}
      </Marquee>
    </div>
  );
}
