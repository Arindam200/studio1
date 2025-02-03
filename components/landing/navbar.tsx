"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { SelectTheme } from "../theme-toggler";
import Image from "next/image";
import { IconMailFilled, IconChevronDown, IconBook } from "@tabler/icons-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, serviceNavItems } from "@/constants/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [sublistHover, setSublistHover] = useState<number | null>(null);

  return (
    <>
      <nav className="flex border max-w-7xl mx-auto h-16 mt-4 px-4 rounded-2xl justify-between items-center">
        <div className="flex justify-between gap-2 items-center">
          <Image
            src="https://www.studio1hq.com/_next/static/media/logo.8f907c3e.png"
            className="rounded-sm"
            alt="Studio1"
            width={32}
            height={32}
          />
          <span className="text-2xl font-bold">Studio1</span>
        </div>
        <div className="flex justify-between gap-8 font-medium items-center">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.title)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.path}
                className="flex items-center transition-all duration-300 hover:text-primary1"
              >
                {item.title}
                {item.children && (
                  <IconChevronDown className="ml-1 size-4 mt-1" />
                )}
              </Link>
              {item.children && hoveredItem === item.title && (
                <div className="pt-8 absolute top-full left-0">
                  <div className="bg-background border rounded-md p-2 min-w-[12rem] max-w-[30rem] z-10">
                    {item.children.map((child, index) => (
                      <Link
                        key={child.title}
                        href={child.path}
                        className="flex group items-center p-2 w-fit hover:bg-accent/50 rounded-md gap-3"
                        onMouseEnter={() => setSublistHover(index)}
                        onMouseLeave={() => setSublistHover(null)}
                      >
                        <div
                          className={cn(
                            "flex group justify-center items-center w-14 h-14 border rounded-md",
                            sublistHover === index && "bg-primary"
                          )}
                        >
                          {
                            <child.icon
                              className={cn(
                                "size-6 text-foreground",
                                sublistHover === index && "text-white"
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

        <div className="flex justify-between gap-4 items-center">
          <SelectTheme />
          <Button>
            Contact Us <IconMailFilled className="ml-2" />
          </Button>
        </div>
      </nav>
    </>
  );
}
