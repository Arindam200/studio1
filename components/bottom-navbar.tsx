"use client";

import { serviceNavItems } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { elevatedCardShadow } from "@/lib/shadows";
import { cn } from "@/lib/utils";

type BottomNavItem = {
  title: string;
  path: string;
};

const VIDEO_SERVICE_NAV_ITEMS: BottomNavItem[] = [
  { title: "Overview", path: "#overview" },
  { title: "Services", path: "#work" },
  { title: "Demo", path: "#project-demo" },
];

const DEFAULT_SECTION = serviceNavItems[0]?.path ?? "#overview";
const BOTTOM_SCROLL_THRESHOLD_PX = 96;
const SERVICE_PAGE_PATHS = [
  "/technical-content-marketing",
  "/developer-documentation-dx-audit",
  "/developer-video-production",
  "/developer-relations-growth-campaigns",
] as const;

function withoutLocalePrefix(pathname: string) {
  return pathname.replace(/^\/(fr|es|hi|zh)(?=\/|$)/, "") || "/";
}

export default function BottomNavbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState(DEFAULT_SECTION);
  const visibilityRef = useRef(new Map<string, number>());
  const pathnameWithoutLocale = withoutLocalePrefix(pathname);

  const navItems =
    pathnameWithoutLocale === "/developer-video-production"
      ? VIDEO_SERVICE_NAV_ITEMS
      : serviceNavItems;
  const isBottomNavValidPage = SERVICE_PAGE_PATHS.some((path) =>
    pathnameWithoutLocale.startsWith(path),
  );

  useEffect(() => {
    if (!isBottomNavValidPage) return;

    const sectionIds = navItems.map((item) =>
      item.path.replace("#", ""),
    );
    const visibility = visibilityRef.current;
    visibility.clear();

    const pickMostVisibleSection = () => {
      const lastSectionId = sectionIds[sectionIds.length - 1];
      const { scrollY, innerHeight } = window;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY + innerHeight >= docHeight - BOTTOM_SCROLL_THRESHOLD_PX) {
        return `#${lastSectionId}`;
      }

      let bestId = sectionIds[0];
      let bestRatio = -1;

      for (const id of sectionIds) {
        const ratio = visibility.get(id) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }

      if (bestRatio <= 0) {
        const anchorY = scrollY + innerHeight * 0.35;
        let scrollActiveId = sectionIds[0];

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top + scrollY <= anchorY) {
            scrollActiveId = id;
          }
        }

        return `#${scrollActiveId}`;
      }

      return `#${bestId}`;
    };

    const applyActiveHash = (hash: string, syncUrl = false) => {
      setActiveHash(hash);
      if (syncUrl && window.location.hash !== hash) {
        history.replaceState(null, "", `${pathname}${hash}`);
      }
    };

    const hashFromUrl = window.location.hash;
    const hasValidHash = sectionIds.some((id) => hashFromUrl === `#${id}`);
    applyActiveHash(hasValidHash ? hashFromUrl : navItems[0]?.path ?? DEFAULT_SECTION);

    const onHashChange = () => {
      const hash = window.location.hash;
      if (sectionIds.some((id) => hash === `#${id}`)) {
        applyActiveHash(hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);

    const syncActiveSection = () => {
      applyActiveHash(pickMostVisibleSection(), true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.intersectionRatio);
        });

        syncActiveSection();
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", syncActiveSection, { passive: true });
    window.addEventListener("resize", syncActiveSection);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("scroll", syncActiveSection);
      window.removeEventListener("resize", syncActiveSection);
      observer.disconnect();
      visibility.clear();
    };
  }, [isBottomNavValidPage, navItems, pathname]);

  return (
    <nav className="fixed bottom-[5rem] z-[101] left-0 w-full">
      {isBottomNavValidPage && (
        <div className="absolute top-0 left-0 w-full">
          <nav
            className={cn(
              "mx-auto flex max-w-fit items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-background/95 px-1.5 py-1.5 backdrop-blur-md",
              elevatedCardShadow,
            )}
          >
            {navItems.map((item) => {
              const isActive = activeHash === item.path;

              return (
                <Button
                  key={item.title}
                  variant={isActive ? "gradient" : "outline-subtle"}
                  size="sm"
                  className="min-w-[5rem]"
                  asChild
                >
                  <Link href={item.path}>{item.title}</Link>
                </Button>
              );
            })}
          </nav>
        </div>
      )}
    </nav>
  );
}
