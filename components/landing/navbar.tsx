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
  const [sublistHover, setSublistHover] = useState<number | null>(null);
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
          "fixed left-0 right-0 top-0 py-2 z-[550] border-b bg-background/80 backdrop-blur-2xl transition-transform duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <nav className="flex z-20 max-w-7xl mx-auto h-16 px-4 rounded-2xl justify-between items-center">
          <Link href={"/"} className="flex justify-between gap-2 items-center">
            <Logo className="size-8" />
            <span className="text-2xl font-bold">Studio1</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex  justify-between gap-8 font-medium items-center">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.path}
                  className="flex items-center text-sm justify-center transition-all duration-300 hover:bg-accent rounded-sm px-2 py-1"
                >
                  {item.title}
                  {item.children && (
                    <IconChevronDown className="ml-1 size-4 mt-1" />
                  )}
                </Link>
                {item.children && hoveredItem === item.title && (
                  <div className="pt-8 absolute top-full left-0">
                    <div className="bg-background shadow-xl border rounded-md p-2 min-w-[12rem] max-w-[30rem] z-10">
                      {item.children.map((child, index) => (
                        <Link
                          key={child.title}
                          href={child.path}
                          className="flex group items-center p-2 w-fit hover:bg-accent rounded-md gap-3"
                          onMouseEnter={() => setSublistHover(index)}
                          onMouseLeave={() => setSublistHover(null)}
                        >
                          <div
                            className={cn(
                              "flex group justify-center  items-center w-14 h-14 border rounded-md",
                              sublistHover === index &&
                                "group-hover:bg-gradient-to-br group-hover:from-primary via-primary group-hover:to-primary1",
                            )}
                          >
                            {
                              <child.icon
                                weight="fill"
                                className={cn(
                                  "size-6 text-foreground",
                                  sublistHover === index && "text-white",
                                )}
                              />
                            }
                          </div>
                          <div className="w-44">{child.title}</div>
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
            <Button asChild>
              <a href="mailto:studioone.tech@gmail.com">
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
                  <div className="pl-4 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.path}
                        className="flex items-center p-2 group hover:bg-accent rounded-md gap-3"
                      >
                        <div className="flex justify-center items-center w-10 h-10 border rounded-md group-hover:bg-gradient-to-r group-hover:from-primary/50 group-hover:to-primary/50">
                          <child.icon
                            weight="fill"
                            className="size-5 group-hover:text-white"
                          />
                        </div>
                        <span>{child.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center justify-between p-2 bg-accent/50 pr-2 pl-4 rounded-3xl mt-4">
              <SelectTheme />
              <Button asChild>
                <a href="mailto:studioone.tech@gmail.com">
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
