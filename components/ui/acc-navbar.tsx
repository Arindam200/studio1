"use client";
import React from "react";
import { Menu } from "@/components/ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";


export default function Navbar2({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 rounded-md py-2 gap-6 max-sm:gap-3 max-sm:mx-2.5 text-lg max-sm:text-sm", className)}
    >
      <Menu >        
        <Link href="#work" >
          <p className=" font-medium text-white">Work</p>
        </Link>
        <Link href="#services" >
          <p className=" font-medium text-white">Services</p>
        </Link>
        <Link href="#why-us" >
          <p className=" font-medium text-white">Why Us</p>
        </Link>
        <Link href="#testimonials" >
          <p className=" font-medium text-white">Testimonial</p>
        </Link>
      </Menu>
    </div>
  );
}
