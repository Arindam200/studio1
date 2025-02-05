"use client";
import React from "react";
import { Marquee } from "../ui/marquee";
import { trustedbyLogo } from "@/constants/data";
import Image from "next/image";

export default function Trustedby() {
  return (
    <div className="max-w-7xl my-20 mx-auto">
      <div className="flex justify-center w-full items-center">
        <h2 className="text-xl font-medium">Trusted by companies</h2>
      </div>
      <Marquee>
        {trustedbyLogo.map((item) => (
          <Image
            key={item.name}
            src={item.image}
            className="invert dark:invert-0 mx-10 w-fit h-28 aspect-square object-contain"
            alt={item.name}
            width={100}
            height={100}
          />
        ))}
      </Marquee>
    </div>
  );
}
