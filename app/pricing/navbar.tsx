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
        "fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 rounded-md py-2 gap-6 max-sm:gap-0 max-sm:mx-2 text-lg max-sm:text-sm",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/team">
          <p className=" font-medium text-white">Team</p>
        </Link>
        <Link href="/blog-as-service">
          <p className="font-medium text-white">Blogs Service</p>
        </Link>
        <Link href="/devrel-as-service">
          <p className=" font-medium text-white">DevRel Service</p>
        </Link>
        <Link href="mailto:studioone.tech@gmail.com">
          <p className=" font-medium text-white">Contact Us</p>
        </Link>
      </Menu>
    </div>
  );
}
