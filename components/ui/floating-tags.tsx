"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      <AnimatePresence>
        {tags.map((tag) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              size="sm"
              onClick={() => handleTagClick(tag)}
              className={`rounded-md min-w-7 ${
                selectedTags.includes(tag)
                  ? "bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:border-orange-600"
                  : "bg-black text-white border-white/20 hover:bg-orange-500 hover:text-white hover:border-orange-500"
              }`}
            >
              {tag}
              {selectedTags.includes(tag) && tag !== "All" && (
                <X
                  className="ml-2 h-4 w-4 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(tag);
                  }}
                />
              )}
            </Button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
