"use client";
import React, { useState } from "react";
import { Menu } from "@/components/ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar5({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 max-w-4xl mx-auto z-50 rounded-md py-2 gap-6 max-sm:gap-0 max-sm:mx-2 text-base max-sm:text-sm",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/about-us">
          <p className=" font-medium text-white">About</p>
        </Link>
        <Link href="/case-studies">
          <p className=" font-medium text-white">Case Studies</p>
        </Link>
        <Link href="/technical-content-marketing">
          <p className="font-medium text-white">Content</p>
        </Link>
        <Link href="mailto:contact@studio1hq.com">
          <p className=" font-medium text-white">Contact Us</p>
        </Link>
      </Menu>
    </div>
  );
}
