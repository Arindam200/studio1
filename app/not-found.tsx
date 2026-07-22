import Link from "next/link";
import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  BookOpenText,
  Home,
  MessageCircle,
  Search,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

import { SectionEyebrow } from "@/components/landing/section-eyebrow";
import { Button } from "@/components/ui/button";
import {
  elevatedCardShadow,
  glassCardEdgeHighlight,
  glassCardFrame,
  glassCardHoverWash,
  sideBeamGlowLeftSubtle,
  sideBeamGlowRightSubtle,
} from "@/lib/shadows";
import { cn } from "@/lib/utils";
import { getSafeLocale } from "@/lib/i18n-messages";
import { localizePathname } from "@/lib/i18n";

const quickLinks = [
  {
    href: "/developer-documentation-dx-audit",
    icon: BookOpenText,
    titleKey: "quickLinks.docs.title",
    descriptionKey: "quickLinks.docs.description",
  },
  {
    href: "/case-studies",
    icon: Waypoints,
    titleKey: "quickLinks.caseStudies.title",
    descriptionKey: "quickLinks.caseStudies.description",
  },
  {
    href: "https://cal.com/studio1/collab",
    icon: MessageCircle,
    titleKey: "quickLinks.contact.title",
    descriptionKey: "quickLinks.contact.description",
    external: true,
  },
] satisfies Array<{
  href: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  external?: boolean;
}>;

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));

  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div aria-hidden className={sideBeamGlowLeftSubtle} />
      <div aria-hidden className={sideBeamGlowRightSubtle} />

      <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>

        <div
          className={cn(
            "mt-8 flex size-24 items-center justify-center rounded-2xl border border-primary/20 bg-[color-mix(in_hsl,hsl(var(--primary-surface))_86%,hsl(var(--primary))_14%)] text-white shadow-floating-tile dark:border-white/15 dark:bg-primary/15 dark:text-primary sm:size-28",
            elevatedCardShadow,
          )}
          aria-hidden
        >
          <Search className="size-10 sm:size-12" strokeWidth={1.7} />
        </div>

        <p className="mt-8 font-numeric text-sm font-semibold uppercase tracking-[0.28em] text-primary">
          404
        </p>
        <h1 className="mt-4 max-w-3xl font-primary text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-6xl">
          {t("titlePrefix")}{" "}
          <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent italic text-transparent">
            {t("titleHighlight")}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
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

      <div className="relative z-20 mx-auto mt-16 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        {quickLinks.map((item) => {
          const Icon = item.icon;
          const href = item.external
            ? item.href
            : localizePathname(item.href, locale);

          return (
            <Link
              key={item.titleKey}
              href={href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                "group relative min-h-40 overflow-hidden rounded-xl p-5 text-left transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                glassCardFrame,
              )}
            >
              <div className={glassCardHoverWash} />
              <div className={glassCardEdgeHighlight} />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex size-11 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.08] text-primary">
                  <Icon className="size-5" strokeWidth={1.8} />
                </div>
                <h2 className="font-secondary text-base font-medium text-foreground">
                  {t(item.titleKey)}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {t(item.descriptionKey)}
                </p>
                <ArrowRight className="mt-auto size-4 translate-x-0 text-primary opacity-70 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
