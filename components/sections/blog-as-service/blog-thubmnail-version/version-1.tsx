"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Pencil, Tag } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const Version1 = ({
  title,
  description,
  tags,
  hrefLink,
  animationDelay = "0",
}: {
  title: string;
  description?: string;
  tags: string[];
  hrefLink: string;
  animationDelay?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: parseInt(animationDelay) / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        href={hrefLink}
        className="border-2 group py-6 hover:-translate-y-1 transition-all duration-500 flex items-center overflow-hidden relative flex-col justify-center px-8 bg-accent/20 h-[16rem] rounded-lg"
      >
        <div
          className={cn(
            "bottom-[-29rem] group-hover:opacity-100 opacity-0 z-[-1] absolute bg-gradient-to-t from-primary/10 dark:from-primary to-orange-200 dark:to-primary/90 blur-[4em] rounded-3xl transition-all duration-700 ease-out w-[10rem] md:w-[30rem] h-[20rem] md:h-[30rem] rotate-[54deg]",
            "left-[50%] translate-x-[-50%]",
          )}
        />
        <Badge className="flex items-center gap-1 mb-4 py-1 rounded-md">
          <Pencil className="size-4" />
          Blog
        </Badge>
        <div className="text-center font-bold text-lg">{title}</div>
        {/* <div className="text-center mt-2 flex-1 font-semibold text-xs text-muted-foreground">
          {description?.slice(0, 100)}...
        </div> */}

        <div className="flex flex-wrap-gap-2 mt-4 gap-2">
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
    </motion.div>
  );
};
