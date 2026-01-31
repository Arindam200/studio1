import React from "react";
import Searchbar from "@/components/ui/searchbar";
import { Suspense } from "react";
import Hero from "./hero";
import { baseUrl } from "@/app/sitemap";
import { Metadata } from "next";
import { FloatingTags } from "@/components/ui/floating-tags";
import { Badge } from "@/components/ui/badge";
import { Users } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical tutorials, DevRel insights, and developer content from Studio1. Explore AI, cloud, DevOps, and web development guides written by experienced developers.",
  openGraph: {
    title: "Blogs | Studio1",
    description:
      "Technical tutorials, DevRel insights, and developer content from Studio1. Explore AI, cloud, DevOps, and web development guides written by experienced developers.",
    url: baseUrl + "/blogs",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Blog | Studio1",
    card: "summary_large_image",
    description:
      "Technical tutorials, DevRel insights, and developer content from Studio1. Explore AI, cloud, DevOps, and web development guides written by experienced developers.",
  },
};

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
        <div className="top-[-10rem] md:top-[-18rem] z-[-1] left-[-80%] md:left-[-20%] fixed bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]"></div>
        <div className="top-[-10rem] md:top-[-18rem] z-[-1] right-[-80%] md:right-[-20%] fixed bg-gradient-to-t opacity-50 dark:opacity-100 from-primary dark:to-primary to-primary blur-[8em] rounded-md transition-all translate-x-[-50%] duration-700 ease-out  h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]"></div>
        {/* <Navbar /> */}
        <div className="text-4xl w-full sm:text-7xl font-bold relative z-20 pt-8 py-4 text-center">
          <Badge className="w-fit mx-auto mb-10 flex items-center pb-1">
            <Users className="size-6 inline-block mr-2" />
            Written by top experienced developers
          </Badge>
          <span className="font-bold"> All Blogs </span>
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
