"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import type { ProductMedia as ProductMediaType } from "@/constants/products";
import { cn } from "@/lib/utils";

const mediaFrameClassName = cn(
  "relative w-full min-w-0 overflow-hidden rounded-lg border border-border/60 bg-muted/20",
  "h-[11rem] sm:h-[13rem] lg:h-auto lg:aspect-[16/10]",
);

type ProductMediaProps = {
  media: ProductMediaType;
  className?: string;
};

export default function ProductMedia({ media, className }: ProductMediaProps) {
  const prefersReducedMotion = useReducedMotion();
  const isGif = media.kind === "image" && media.src.endsWith(".gif");
  const showVideo =
    media.kind === "video" && !prefersReducedMotion;

  return (
    <div className={cn(mediaFrameClassName, className)}>
      {showVideo ? (
        <video
          className="h-full w-full object-cover object-top"
          src={media.src}
          poster={media.poster}
          autoPlay
          loop
          muted
          playsInline
          aria-label={media.alt}
        />
      ) : (
        <Image
          src={media.kind === "video" ? media.poster : media.src}
          alt={media.alt}
          fill
          unoptimized={isGif}
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      )}
    </div>
  );
}
