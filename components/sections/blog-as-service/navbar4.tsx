"use client";
import React, {useState} from "react";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar3({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 rounded-md py-2 gap-6 max-sm:gap-3 max-sm:mx-2.5 text-lg max-sm:text-sm",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <Link href="#impact">
          <p className=" font-medium text-white">Stats</p>
        </Link>
        <Link href="#blogs">
          <p className=" font-medium text-white">Blogs</p>
        </Link>
        {/* <Link href="#services">
          <p className=" font-medium text-white">Services</p>
        </Link> */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/devrel-as-service">DevRel as Service</HoveredLink>
            <HoveredLink href="/blog-as-service">Blog as Service</HoveredLink>
          </div>
        </MenuItem>
        <Link href="#process">
          <p className=" font-medium text-white">Process</p>
        </Link>
        <Link href="#team">
          <p className=" font-medium text-white">Team</p>
        </Link>
      </Menu>
    </div>
  );
}