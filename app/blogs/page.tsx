import React from "react";
import Navbar from "@/components/sections/navbar";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Searchbar from "@/components/ui/searchbar";
import { Suspense } from "react";
import Hero from "./hero";
import { baseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import { FloatingTags } from "@/components/ui/floating-tags";

export const metadata: Metadata = {
  title: "Blog",
  description: "All Blogs of Studio1.",
  openGraph: {
    title: "Blogs | Studio1",
    description: "All Blogs of Studio1.",
    url: baseUrl + "/blogs",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Blog | Studio1",
    card: "summary_large_image",
    description: "All Blogs of Studio1.",
  },
};

interface PageProps {
  searchParams?: {
    query?: string;
    tags?: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  const query = searchParams?.query || "";
  const tags = searchParams?.tags?.split(",") || ["All"];

  return (
    <>
      <div className="sm:h-[35rem] h-[28rem] relative flex flex-col justify-center items-center">
        <Navbar />
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
        <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8 py-4 text-center">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">
            {" "}
            All Blogs{" "}
          </span>

          <p className="text-lg sm:w-[60rem] max-sm:mx-2.5 sm:text-2xl font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 text-center">
            Build and nurture your developer community with our expert DevRel
            strategies.
          </p>
          <div className="flex justify-center text-lg">
            <Suspense fallback={<div>Loading...</div>}>
              <Searchbar />
            </Suspense>
          </div>
          <div className="flex mt-2 justify-center text-lg">
            <Suspense fallback={<div>Loading...</div>}>
              <FloatingTags />
            </Suspense>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero query={query} tags={tags} />
      </Suspense>
    </>
  );
}
