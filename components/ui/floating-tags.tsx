"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Tag } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const tags = ["All", "general", "project-building", "growth"];

export function FloatingTags() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const tagParam = searchParams.get("tags");
    if (tagParam) {
      setSelectedTags(tagParam.split(","));
    } else {
      setSelectedTags(["All"]);
    }
  }, [searchParams]);

  const handleTagClick = (tag: string) => {
    let newSelectedTags: string[];

    if (tag === "All") {
      newSelectedTags = ["All"];
    } else {
      if (selectedTags.includes(tag)) {
        newSelectedTags = selectedTags.filter((t) => t !== tag && t !== "All");
      } else {
        newSelectedTags = [...selectedTags.filter((t) => t !== "All"), tag];
      }

      if (newSelectedTags.length === 0) {
        newSelectedTags = ["All"];
      }
    }

    setSelectedTags(newSelectedTags);
    updateURL(newSelectedTags);
  };

  const removeTag = (tag: string) => {
    const newSelectedTags = selectedTags.filter((t) => t !== tag);
    if (newSelectedTags.length === 0) {
      newSelectedTags.push("All");
    }
    setSelectedTags(newSelectedTags);
    updateURL(newSelectedTags);
  };

  const updateURL = (tags: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tags.length === 1 && tags[0] === "All") {
      params.delete("tags");
    } else {
      params.set("tags", tags.join(","));
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mx-auto mt-2 flex w-full flex-wrap items-center justify-center gap-2">
      <AnimatePresence>
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);

          return (
            <motion.button
              key={tag}
              type="button"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleTagClick(tag)}
              className={cn(
                "relative inline-flex h-9 items-center gap-2 rounded-full px-4 font-inter text-sm tracking-tight transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isSelected
                  ? "bg-primary/15 text-primary dark:bg-primary/20"
                  : "bg-transparent text-muted-foreground hover:bg-accent/50 hover:text-foreground",
              )}
            >
              <Tag weight="duotone" className="size-3.5 shrink-0" />
              <span className="capitalize">{tag === "All" ? "All" : tag.replace("-", " ")}</span>
              {isSelected && tag !== "All" ? (
                <X
                  className="size-3.5 shrink-0 opacity-70 transition-opacity hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(tag);
                  }}
                />
              ) : null}
            </motion.button>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
