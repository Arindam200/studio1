"use client";

import * as React from "react";
import { useTheme } from "@wrksz/themes/client";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function SelectTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // Controlled usage: the theme provider owns persistence, the toggler just drives
  // the View Transitions animation and reports the next theme back to us. Guard
  // with `mounted` so the server/first-client render agree (avoids hydration mismatch).
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <AnimatedThemeToggler
      theme={isDark ? "dark" : "light"}
      onThemeChange={setTheme}
      aria-label="Toggle theme"
      className="flex cursor-pointer items-center justify-center text-foreground transition-colors hover:text-primary [&_svg]:size-4"
    />
  );
}
