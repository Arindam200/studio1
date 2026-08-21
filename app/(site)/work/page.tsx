import React, { Suspense } from "react";
import Hero from "./hero";
import type { Metadata } from "next";
import { FloatingTags } from "@/components/ui/floating-tags";
import { SectionEyebrow } from "@/components/landing/section-eyebrow";
import { sideBeamGlowLeftFixed, sideBeamGlowRightFixed } from "@/lib/shadows";
import { pageMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { DEFAULT_LOCALE } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({
    locale: DEFAULT_LOCALE,
    namespace: "Metadata.pages.work",
  });

  return pageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/work",
    locale: DEFAULT_LOCALE,
  });
}

export default async function Page() {
  const t = await getTranslations("WorkPage");

  return (
    <section className="relative overflow-x-hidden">
      <div className="relative mx-auto mt-24 flex max-h-fit w-full max-w-7xl flex-col px-4 pb-24">
        <div aria-hidden className={sideBeamGlowLeftFixed} />
        <div aria-hidden className={sideBeamGlowRightFixed} />

        <div className="relative z-20 mx-auto mt-16 flex w-full max-w-3xl flex-col items-center text-center md:mt-20">
          <SectionEyebrow className="mb-5">
            {t("eyebrow")}
          </SectionEyebrow>

          <h1 className="font-inter text-4xl font-normal tracking-tight text-foreground max-sm:text-3xl sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("description")}
          </p>

          <div className="mt-8 flex w-full items-center justify-center">
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
          <Hero />
        </Suspense>
      </div>
    </section>
  );
}
