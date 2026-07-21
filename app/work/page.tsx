import React, { Suspense } from "react";
import Searchbar from "@/components/ui/searchbar";
import Hero from "./hero";
import { Metadata } from "next";
import { FloatingTags } from "@/components/ui/floating-tags";
import { SectionEyebrow } from "@/components/landing/section-eyebrow";
import { sideBeamGlowLeftFixed, sideBeamGlowRightFixed } from "@/lib/shadows";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Client Work",
  description:
    "Technical tutorials, guides, and developer content Studio1 creates for client teams across AI, cloud, DevOps, and web development.",
  path: "/work",
});

export default async function Page(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;

  const query =
    typeof searchParams?.query === "string" ? searchParams.query : "";

  let tags: string[] = ["All"];
  if (searchParams?.tags) {
    if (Array.isArray(searchParams.tags)) {
      tags = searchParams.tags.flatMap((t) => t.split(","));
    } else {
      tags = searchParams.tags.split(",");
    }
  }

  return (
    <section className="relative overflow-x-hidden">
      <div className="relative mx-auto mt-24 flex max-h-fit w-full max-w-7xl flex-col px-4 pb-24">
        <div aria-hidden className={sideBeamGlowLeftFixed} />
        <div aria-hidden className={sideBeamGlowRightFixed} />

        <div className="relative z-20 mx-auto mt-16 flex w-full max-w-3xl flex-col items-center text-center md:mt-20">
          <SectionEyebrow className="mb-5">
            Published for our clients
          </SectionEyebrow>

          <h1 className="font-inter text-4xl font-normal tracking-tight text-foreground max-sm:text-3xl sm:text-5xl md:text-6xl">
            Client Work
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tutorials, guides, and developer content we create for the teams we
            partner with.
          </p>

          <div className="mt-8 flex w-full justify-center">
            <Suspense
              fallback={
                <div className="h-12 w-full max-w-2xl animate-pulse rounded-lg bg-muted/40" />
              }
            >
              <Searchbar />
            </Suspense>
          </div>

          <div className="mt-6 flex w-full items-center justify-center">
            <Suspense fallback={null}>
              <FloatingTags />
            </Suspense>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="mt-16 h-40 w-full animate-pulse rounded-xl bg-muted/30" />
          }
        >
          <Hero query={query} tags={tags} />
        </Suspense>
      </div>
    </section>
  );
}
