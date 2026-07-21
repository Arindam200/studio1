"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Searchbar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const urlQuery = searchParams.get("query") ?? "";
  const [value, setValue] = useState(urlQuery);
  const pendingUrlUpdate = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (pendingUrlUpdate.current === urlQuery) {
      pendingUrlUpdate.current = undefined;
      return;
    }

    setValue(urlQuery);
  }, [urlQuery]);

  const pushQueryToUrl = useDebouncedCallback((term: string) => {
    pendingUrlUpdate.current = term;

    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, 300);

  return (
    <div className="relative flex w-full max-w-xl items-center gap-2 rounded-xl border border-border/60 bg-background/80 p-1.5 shadow-sm backdrop-blur-md transition-colors focus-within:border-border dark:border-white/[0.08] dark:focus-within:border-white/20">
      <Input
        type="text"
        placeholder="Search work..."
        value={value}
        onChange={(e) => {
          const term = e.target.value;
          setValue(term);
          pushQueryToUrl(term);
        }}
        className="h-11 border-0 bg-transparent font-inter text-sm text-foreground shadow-none outline-none ring-0 ring-offset-0 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <div
        aria-hidden
        className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-primarySurface via-primarySurface to-primary1 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),inset_0_-1px_0_0_rgba(0,0,0,0.12)] dark:from-primary/90 dark:via-primary/75 dark:to-primary1/60"
      >
        <MagnifyingGlass className="size-5" weight="bold" />
      </div>
    </div>
  );
}
