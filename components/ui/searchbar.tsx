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
        placeholder="Search blogs..."
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="border-transparent font-medium bg-transparent ring-1 ring-primary text-foreground focus:outline-none"
      />
      <div className="bg-primary h-full w-12 ring-1 ring-primary py-2 flex items-center justify-center rounded-lg">
        <MagnifyingGlass className="size-6 text-foreground" />
      </div>
    </div>
  );
}
