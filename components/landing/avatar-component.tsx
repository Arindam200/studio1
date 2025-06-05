"use client";

import { cn } from "@/lib/utils";
import { SauravImg, JesseImg, MarketaImg, JuliaImg } from "@/constants/image";
import Image from "next/image";

export default function AvatarComponent({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-border bg-background p-1 shadow shadow-black/5",
        className,
      )}
    >
      <div className="flex -space-x-1.5">
        <Image
          className="rounded-full ring-1 ring-background"
          src={SauravImg}
          width={30}
          height={30}
          alt="Saurav"
        />
        <Image
          className="rounded-full ring-1 ring-background"
          src={JesseImg}
          width={30}
          height={30}
          alt="Jesse"
        />
        <Image
          className="rounded-full ring-1 ring-background"
          src={MarketaImg}
          width={30}
          height={30}
          alt="Marketa"
        />
        <Image
          className="rounded-full ring-1 ring-background"
          src={JuliaImg}
          width={30}
          height={30}
          alt="Julia"
        />
      </div>
      <p className="px-2 text-xs text-muted-foreground">
        Trusted by <strong className="font-medium text-foreground">15+</strong>{" "}
        DevTool Founders.
      </p>
    </div>
  );
}
