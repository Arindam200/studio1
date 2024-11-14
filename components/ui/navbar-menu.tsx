"use client";
import React from "react";

export const Menu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <nav
      className="relative rounded-md py-2.5 border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-8 px-8"
    >
      {children}
    </nav>
  );
};

