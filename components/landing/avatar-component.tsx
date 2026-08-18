"use client";

import { cn } from "@/lib/utils";
import { SauravImg, JesseImg, MarketaImg, JuliaImg } from "@/constants/image";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TRUSTED_AVATARS = [
  { src: SauravImg, alt: "Saurav" },
  { src: JesseImg, alt: "Jesse" },
  { src: MarketaImg, alt: "Marketa" },
  { src: JuliaImg, alt: "Julia" },
] as const;

export default function AvatarComponent({ className }: { className?: string }) {
  const t = useTranslations("Hero");

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 sm:flex-row sm:gap-5",
        className,
      )}
      role="group"
      aria-label={t("trustedAria")}
    >
      <div className="flex items-center -space-x-2.5 sm:-space-x-3" aria-hidden>
        {TRUSTED_AVATARS.map((avatar, index) => (
          <div
            key={avatar.alt}
            className="relative shrink-0"
            style={{ zIndex: TRUSTED_AVATARS.length - index }}
          >
            <Image
              className="size-8 rounded-full object-cover ring-2 ring-background sm:size-9"
              src={avatar.src}
              width={36}
              height={36}
              sizes="36px"
              alt=""
            />
          </div>
        ))}
      </div>

      <span
        className="hidden h-4 w-px shrink-0 bg-border/70 sm:block"
        aria-hidden
      />

      <p className="text-center text-sm leading-snug sm:text-left">
        <span className="font-secondary text-muted-foreground">
          {t("trustedPrefix")}
        </span>{" "}
        <span className="font-numeric text-[1.15em] font-semibold text-primary">
          35+
        </span>{" "}
        <span className="font-secondary text-foreground/85">
          {t("trustedSuffix")}
        </span>
      </p>
    </div>
  );
}
