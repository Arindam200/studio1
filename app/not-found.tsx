import Link from "next/link";
import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NotFoundGlow } from "@/components/not-found-glow";
import { getSafeLocale } from "@/lib/i18n-messages";
import { localizePathname } from "@/lib/i18n";

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));

  return (
    <div className="relative -mb-10">
      <section className="relative z-10 flex min-h-[calc(100dvh-5rem-18rem)] items-center justify-center overflow-visible px-4 pt-24 pb-10 sm:px-6 sm:pt-28 sm:pb-12">
        <NotFoundGlow />

        <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
          <p className="font-numeric text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            {t("eyebrow")}
          </p>

          <h1 className="mt-6 text-balance font-inter text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-6xl">
            {t("titlePrefix")}{" "}
            <span className="bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h1>

          <p className="mt-6 max-w-md text-balance text-base leading-7 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Button variant="gradient" size="cta" className="w-full sm:w-auto" asChild>
              <Link href={localizePathname("/", locale)}>
                <Home className="size-5" />
                {t("homeCta")}
              </Link>
            </Button>
            <Button
              variant="outline-subtle"
              size="cta"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href={localizePathname("/technical-content-marketing", locale)}>
                {t("servicesCta")}
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
