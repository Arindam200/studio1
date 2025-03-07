"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="grid grid-cols-2 md:flex w-full mx-auto sm:justify-center sm:items-center gap-2 mt-4">
      <AnimatePresence>
        {tags.map((tag) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleTagClick(tag)}
            className={`rounded-md relative flex gap-2 text-foreground items-center justify-center h-10 px-8 w-full md:w-fit ${
              selectedTags.includes(tag)
                ? "bg-primary text-white"
                : "bg-accent text-foreground"
            }`}
          >
            <Tag
              weight="duotone"
              className={cn(
                "size-4",
                selectedTags.includes(tag) ? "text-white" : "text-foreground"
              )}
            />
            <div className="bg-transparent text-xs md:text-sm w-fit">
              {tag}
              {selectedTags.includes(tag) && tag !== "All" && (
                <X
                  className="ml-2 absolute top-1 right-1 h-4 w-4 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(tag);
                  }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
