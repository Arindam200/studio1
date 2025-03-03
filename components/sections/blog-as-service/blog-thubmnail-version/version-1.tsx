"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Pencil, Tag } from "@phosphor-icons/react";
import Link from "next/link";

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
    <>
      <Link
        href={hrefLink}
        className="border-2 group hover:-translate-y-1 transition-all duration-500 flex items-center overflow-hidden relative flex-col justify-center px-8 bg-accent/20 h-[16rem] rounded-lg"
      >
        <div
          className={cn(
            "bottom-[-29rem] group-hover:opacity-100 opacity-0 z-[-1] absolute bg-gradient-to-t from-primary/10 dark:from-primary to-orange-200 dark:to-primary/90 blur-[4em] rounded-3xl transition-all duration-700 ease-out w-[10rem] md:w-[30rem] h-[20rem] md:h-[30rem] rotate-[54deg]",
            "left-[50%] translate-x-[-50%]"
          )}
        />
        {/* <div className="bg-primary absolute w-full h-10 z-10 top-0"></div> */}
        <Badge className="flex items-center gap-1 mb-4 py-1 rounded-md">
          <Pencil weight="fill" className="size-4" />
          Blog
        </Badge>
        <div className="text-center font-semibold text-base">{title}</div>

        <div className="flex flex-wrap-gap-2 mt-4 gap-2">
          {tags.map((item) => {
            return (
              <Badge
                key={item}
                className="flex items-center bg-accent hover:bg-accent text-foreground gap-1 mb-2 py-1 rounded-md"
              >
                <Tag weight="fill" className="size-4" />
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

        {/* <div className="absolute top-[-3rem] gap-6 flex items-center">
          {[1, 2, 3, 4].map((_, index) => {
            return (
              <div className="flex rotate-45 shadow-2xl items-center justify-center size-20 rounded-[1.7rem] bg-white">
                <div className="size-14 rounded-full bg-accent"></div>
              </div>
            );
          })}
        </div> */}
        {/* <div>{description}</div> */}
      </Link>
    </>
  );
};
