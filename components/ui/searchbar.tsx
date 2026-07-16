"use client";

import React, { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Searchbar() {
  const [search, setSearch] = useState<string>("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);

    setSearch(term);
    console.log(search);
  }, 300);

  return (
    <div className="flex max-w-2xl w-full max-sm:px-4 py-1 pl-2 pr-4 rounded-lg items-center space-x-2 relative">
      <Input
        type="text"
        placeholder="Search work..."
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="border-transparent font-medium bg-transparent ring-1 ring-primary text-foreground focus:outline-none"
      />
      <div className="bg-gradient-to-b from-primary via-primary to-primary1 dark:from-primary/90 dark:via-primary/75 dark:to-primary1/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),inset_0_-1px_0_0_rgba(0,0,0,0.12)] h-full w-12 py-2 flex items-center justify-center rounded-lg cursor-pointer transition-all hover:brightness-[1.03]">
        <MagnifyingGlass className="size-6 text-white" />
      </div>
    </div>
  );
}
