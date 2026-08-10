/// <reference types="react/canary" />

"use client";

import { type ReactNode, ViewTransition } from "react";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <ViewTransition key={pathname} default="page-content">
      {children}
    </ViewTransition>
  );
}
