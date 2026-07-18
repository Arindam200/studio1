import React from "react";
import Searchbar from "@/components/ui/searchbar";
import { Suspense } from "react";
import Hero from "./hero";
import { Metadata } from "next";
import { FloatingTags } from "@/components/ui/floating-tags";
import { Badge } from "@/components/ui/badge";
import { Users } from "@phosphor-icons/react/dist/ssr";
import { sideBeamGlowLeftFixed, sideBeamGlowRightFixed } from "@/lib/shadows";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Technical tutorials, DevRel insights, and developer content from Studio1. Explore AI, cloud, DevOps, and web development guides written by experienced developers.",
  path: "/work",
});

export default async function Page(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;

  // Handle query param
  const query =
    typeof searchParams?.query === "string" ? searchParams.query : "";

  // Handle tags param (can be string, array, or undefined)
  let tags: string[] = ["All"];
  if (searchParams?.tags) {
    if (Array.isArray(searchParams.tags)) {
      tags = searchParams.tags.flatMap((t) => t.split(","));
    } else {
      tags = searchParams.tags.split(",");
    }
  }

  return (
    <section className="overflow-x-hidden">
      <div className=" max-h-fit w-full relative max-w-7xl mx-auto flex flex-col mt-24">
        <div className={sideBeamGlowLeftFixed}></div>
        <div className={sideBeamGlowRightFixed}></div>
        {/* <Navbar /> */}
        <div className="text-4xl w-full sm:text-7xl font-bold relative z-20 pt-8 py-4 text-center">
          <Badge className="w-fit mx-auto mb-10 flex items-center pb-1 text-sm font-medium shadow-md bg-gradient-to-r from-primary via-primary1 to-primary1/20 text-white">
            <Users className="size-6 inline-block mr-2" />
            Written by top experienced developers
          </Badge>
          <h1 className="font-bold">Our Work</h1>
          <p className="text-base font-semibold relative z-20 text-foreground py-4 text-center">
            We help you build and grow developer communities with <br /> DevRel
            strategies tailored to your product and audience.
          </p>
          <div className="flex justify-center text-lg px-4 w-full">
            <Suspense fallback={<div>Loading...</div>}>
              <Searchbar />
            </Suspense>
          </div>
          <div className="flex mt-10 w-full px-4 items-center justify-center text-lg">
            <Suspense fallback={<div>Loading...</div>}>
              <FloatingTags />
            </Suspense>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero query={query} tags={tags} />
        </Suspense>
      </div>
    </section>
  );
}
