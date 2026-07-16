"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Pencil, Tag } from "lucide-react";
import Link from "next/link";
import { cardHoverAccentGlow } from "@/lib/shadows";

export const Version1 = ({
  title,
  description,
  tags,
  hrefLink,
}: {
  title: string;
  description?: string;
  tags: string[];
  hrefLink: string;
}) => {
  return (
    <Link
      href={hrefLink}
      className="border dark:border-white/10 group w-full py-6 hover:-translate-y-1 transition-all duration-500 flex items-center overflow-hidden relative flex-col justify-center px-8 bg-gradient-to-b from-background to-accent/30 dark:from-accent/20 dark:to-background backdrop-blur-md shadow-[0_6px_20px_-6px_rgba(0,0,0,0.22)] hover:shadow-[0_14px_30px_-8px_rgba(0,0,0,0.3)] dark:shadow-lg dark:shadow-primary/10 dark:hover:shadow-xl dark:hover:shadow-primary/20 h-[16rem] rounded-lg"
    >
        <div
          className={cn(
            cardHoverAccentGlow,
            "bottom-[-29rem] left-[50%] translate-x-[-50%] rounded-3xl",
          )}
        />
        <Badge className="flex items-center gap-1 mb-4 py-1 rounded-md shadow-md bg-gradient-to-r from-primary via-primary1 to-primary1/40 text-white">
          <Pencil className="size-4" />
          Blog
        </Badge>
        <div className="text-center font-bold text-lg">{title}</div>
        {/* <div className="text-center mt-2 flex-1 font-semibold text-xs text-muted-foreground">
          {description?.slice(0, 100)}...
        </div> */}

        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {tags.map((item) => {
            return (
              <Badge
                key={item}
                className="flex items-center bg-accent hover:bg-accent text-foreground gap-1 mb-2 py-1 rounded-md"
              >
                <Tag className="size-4" />
                {item}
              </Badge>
            );
          })}
        </div>

        <div className="absolute bottom-[-6rem] -right-14 flex rotate-45 items-center justify-center size-36 rounded-[1.7rem] bg-gradient-to-bl from-primary via-primary/80 to-white/80">
          <div className="size-28 rounded-full bg-accent"></div>
        </div>
        <div className="absolute top-[-6rem] -left-14 flex rotate-45 items-center justify-center size-36 rounded-[1.7rem] bg-gradient-to-bl from-primary via-primary/80 to-white/80">
          <div className="size-28 rounded-full bg-accent"></div>
        </div>
    </Link>
  );
};
