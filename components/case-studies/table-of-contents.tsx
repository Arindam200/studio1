"use client";

import { useEffect, useRef, useState } from "react";
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
  const listRef = useRef<HTMLUListElement>(null);
  const [indicator, setIndicator] = useState<{
    top: number;
    height: number;
  } | null>(null);

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

  // Track the heading closest above the reading line so the active item
  // always moves in document order, even on fast scrolls.
  useEffect(() => {
    if (headings.length === 0) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      let current = headings[0].id;
      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [headings]);

  // Position the sliding indicator over the active link.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !activeId) return;
    const link = list.querySelector(`a[href="#${CSS.escape(activeId)}"]`);
    if (link instanceof HTMLElement) {
      setIndicator({ top: link.offsetTop, height: link.offsetHeight });
    }
  }, [activeId, headings]);

  if (headings.length === 0) return null;

  const tocContent = (
    <>
      <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
        <List className="size-4" weight="bold" />
        On this page
      </div>
      <div className="relative">
        {indicator ? (
          <span
            aria-hidden
            className="absolute -left-px w-0.5 rounded-full bg-primary transition-all duration-300 ease-out"
            style={{ top: indicator.top, height: indicator.height }}
          />
        ) : null}
        <ul ref={listRef} className="space-y-1 border-l border-border">
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
                  "block py-1 text-[13px] leading-snug transition-colors duration-300",
                  heading.level === 2 ? "pl-4" : "pl-7",
                  activeId === heading.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
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
