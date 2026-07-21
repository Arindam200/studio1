"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SelectTheme } from "../theme-toggler";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import Logo from "../ui/svgs/logo";
import { EnvelopeOpen } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true); // Show navbar when scrolling up
      } else {
        setIsVisible(false); // Hide navbar when scrolling down
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 py-2 z-[550] border-b border-border/50 bg-background/40 backdrop-blur-2xl transition-transform duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <nav className="flex z-20 max-w-7xl mx-auto h-16 px-4 rounded-2xl justify-between items-center">
          <Link href={"/"} className="flex justify-between gap-2 items-center">
            <Logo className="size-8" />
            <span className="text-2xl font-medium">Studio1</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex  justify-between gap-8 font-medium items-center">
            {navItems.map((item) => (
              <div key={item.title} className="relative group/nav">
                <Link
                  href={item.path}
                  className={cn(
                    "relative flex items-center text-sm justify-center px-2 py-1 transition-colors duration-200 hover:text-primary group-hover/nav:text-primary",
                    "after:absolute after:-bottom-0.5 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-primary after:to-primary1 after:transition-transform after:duration-300 hover:after:scale-x-100 group-hover/nav:after:scale-x-100",
                  )}
                >
                  {item.title}
                  {item.children && (
                    <IconChevronDown className="ml-1 size-4 mt-0.5 transition-transform duration-300 group-hover/nav:rotate-180" />
                  )}
                </Link>
                {item.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 pt-4 origin-top",
                      "opacity-0 -translate-y-1 scale-95 pointer-events-none",
                      "transition-all duration-300 ease-out",
                      "group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:scale-100 group-hover/nav:pointer-events-auto",
                    )}
                  >
                    <div className="bg-background/95 backdrop-blur-xl shadow-lg border rounded-lg py-1.5 px-1 min-w-[17rem]">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.path}
                          className="flex group/item items-start px-3 py-2.5 w-full gap-2.5 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                        >
                          <child.icon
                            weight="duotone"
                            className="mt-0.5 size-5 shrink-0 transition-colors duration-200 group-hover/item:text-primary"
                          />
                          <span className="flex flex-col gap-0.5">
                            <span className="text-sm font-medium">
                              {child.title}
                            </span>
                            {"description" in child && child.description ? (
                              <span className="text-xs leading-snug text-muted-foreground/80">
                                {child.description}
                              </span>
                            ) : null}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex justify-between gap-4 items-center">
            <SelectTheme />
            <Button variant="gradient" asChild>
              <a href="mailto:contact@studio1hq.com">
                Contact Us <EnvelopeOpen className="ml-2" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IconMenu2 className="size-6" />
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden bg-background border shadow-2xl pb-6 transition-all duration-300 overflow-hidden",
            isMenuOpen ? "max-h-[1000px] block translate-y-4" : "hidden ",
          )}
        >
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <div key={item.title} className="space-y-2">
                <Link
                  href={!item.children ? item.path : ""}
                  className="flex items-center justify-between px-4 py-2 hover:bg-accent rounded-md"
                  onClick={() =>
                    item.children &&
                    setHoveredItem(
                      hoveredItem === item.title ? null : item.title,
                    )
                  }
                >
                  {item.title}
                  {item.children && (
                    <IconChevronDown
                      className={cn(
                        "size-4 transition-transform duration-200",
                        hoveredItem === item.title && "rotate-180",
                      )}
                    />
                  )}
                </Link>
                {item.children && hoveredItem === item.title && (
                  <div className="pl-4 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.path}
                        className="flex items-start px-3 py-2.5 group gap-2.5 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      >
                        <child.icon
                          weight="duotone"
                          className="mt-0.5 size-5 shrink-0 transition-colors duration-200 group-hover:text-primary"
                        />
                        <span className="flex flex-col gap-0.5">
                          <span className="text-sm font-medium">
                            {child.title}
                          </span>
                          {"description" in child && child.description ? (
                            <span className="text-xs leading-snug text-muted-foreground/80">
                              {child.description}
                            </span>
                          ) : null}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center justify-between p-2 bg-accent/50 pr-2 pl-4 rounded-3xl mt-4">
              <SelectTheme />
              <Button variant="gradient" asChild>
                <a href="mailto:contact@studio1hq.com">
                  Contact Us <EnvelopeOpen className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
