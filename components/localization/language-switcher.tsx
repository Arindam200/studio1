"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import type { MouseEvent } from "react";
import { Globe } from "@phosphor-icons/react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  hasLocalizedAlternates,
  localeMeta,
  localizePathname,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

const translationKeys: Record<Locale, Parameters<ReturnType<typeof useTranslations>>[0]> = {
  en: "english",
  fr: "french",
  es: "spanish",
  hi: "hindi",
  zh: "chinese",
};

function localeHref(pathname: string, search: string, locale: Locale) {
  const sourcePath = hasLocalizedAlternates(pathname) ? pathname : "/";
  const localizedPath = localizePathname(sourcePath || "/", locale);
  return `${localizedPath}${sourcePath === "/" ? "" : search ? `?${search}` : ""}`;
}

function navigateToLocale(event: MouseEvent<HTMLAnchorElement>, locale: Locale) {
  event.preventDefault();
  const href = event.currentTarget.href;

  document.cookie = `studio1-locale=${locale}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
  window.location.assign(href);
}

export function LanguageSwitcher({
  compact = false,
  inline = false,
}: {
  compact?: boolean;
  inline?: boolean;
}) {
  const activeLocale = useLocale() as Locale;
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const t = useTranslations("LocaleSwitcher");
  const search = searchParams.toString();
  const activeMeta = localeMeta[activeLocale] ?? localeMeta[DEFAULT_LOCALE];

  const optionClassName = (isActive: boolean) =>
    cn(
      "group/item flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200",
      "text-muted-foreground hover:bg-primary/10 hover:text-foreground dark:hover:bg-primary/20",
      isActive &&
        "bg-primary/10 text-foreground dark:bg-primary/15 hover:bg-primary/15 dark:hover:bg-primary/25",
    );

  const options = LOCALES.map((locale) => {
    const meta = localeMeta[locale];
    const isActive = locale === activeLocale;

    return (
      <a
        key={locale}
        href={localeHref(pathname, search, locale)}
        hrefLang={meta.hreflang}
        className={optionClassName(isActive)}
        onClick={(event) => navigateToLocale(event, locale)}
      >
        <span className="text-base leading-none transition-transform duration-200 group-hover/item:scale-110">
          {meta.flag}
        </span>
        <span>{t(translationKeys[locale])}</span>
      </a>
    );
  });

  if (inline) {
    return (
      <div className="rounded-xl border border-border/70 bg-background/70 p-1.5 shadow-sm backdrop-blur">
        <div className="mb-1 flex items-center gap-2 px-2 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          <Globe className="size-3.5" weight="duotone" />
          {t("label")}
        </div>
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">{options}</div>
      </div>
    );
  }

  return (
    <div className="group/lang relative">
      <button
        type="button"
        aria-label={t("label")}
        className={cn(
          "inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border/70 bg-background/70 px-3 text-sm font-medium text-foreground shadow-sm backdrop-blur transition-colors hover:border-primary/40 hover:text-primary",
          compact && "h-9 px-2.5",
        )}
      >
        <Globe className="size-4" weight="duotone" />
        <span className="text-base leading-none">{activeMeta.flag}</span>
        {!compact ? (
          <span className="hidden lg:inline">{activeMeta.nativeName}</span>
        ) : null}
      </button>

      <div
        className={cn(
          "absolute right-0 top-full z-[570] origin-top pt-4",
          "opacity-0 -translate-y-1 scale-95 pointer-events-none",
          "transition-all duration-300 ease-out",
          "group-hover/lang:opacity-100 group-hover/lang:translate-y-0 group-hover/lang:scale-100 group-hover/lang:pointer-events-auto",
          "group-focus-within/lang:opacity-100 group-focus-within/lang:translate-y-0 group-focus-within/lang:scale-100 group-focus-within/lang:pointer-events-auto",
        )}
      >
        <div className="min-w-[17rem] space-y-0.5 rounded-lg border bg-background px-1 py-1.5 shadow-lg backdrop-blur-xl">
          {options}
        </div>
      </div>
    </div>
  );
}
