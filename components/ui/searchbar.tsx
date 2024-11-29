"use client";

import React, { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

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
    <div className="flex w-full max-sm:px-4 max-w-sm items-center space-x-2 relative">
      <Input
        type="text"
        placeholder="Search blogs..."
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="bg-black border-white/20 text-white placeholder-white/50 pr-10 py-5 pl-4 rounded-md w-full"
      />
      <Search className="h-4 w-4 absolute right-3 max-sm:right-8 top-1/2 transform -translate-y-1/2 text-white/50" />
    </div>
  );
}

