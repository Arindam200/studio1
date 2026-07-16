"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { List } from "@phosphor-icons/react";

type TocEntry = {
  id: string;
  text: string;
  level: number;
};

type TableOfContentsProps = {
  sticky?: boolean;
};

export function TableOfContents({ sticky = true }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocEntry[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("[data-mdx-content]");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const entries: TocEntry[] = Array.from(elements)
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent ?? "",
        level: el.tagName === "H2" ? 2 : 3,
      }));

    setHeadings(entries);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting);
        if (vis.length > 0) {
          setActiveId(vis[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const tocContent = (
    <>
      <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
        <List className="size-4" weight="bold" />
        On this page
      </div>
      <ul className="space-y-1 border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(heading.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveId(heading.id);
                }
              }}
              className={cn(
                "block py-1 text-[13px] leading-snug transition-colors",
                heading.level === 2 ? "pl-4" : "pl-7",
                activeId === heading.id
                  ? "border-l-2 -ml-px border-primary text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <nav
      aria-label="Table of contents"
      className={cn("hidden xl:block", sticky && "h-full")}
    >
      {sticky ? (
        <div className="sticky top-28">{tocContent}</div>
      ) : (
        tocContent
      )}
    </nav>
  );
}
