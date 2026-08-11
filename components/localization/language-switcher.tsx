"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
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

function navigateToLocale(href: string) {
  if (typeof window === "undefined") return;
  if (window.location.pathname + window.location.search === href) return;
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
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && !containerRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleLocaleSelect = (href: string) => {
    setIsOpen(false);
    navigateToLocale(href);
  };

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
    const href = localeHref(pathname, search, locale);

    return (
      <a
        key={locale}
        href={href}
        hrefLang={meta.hreflang}
        aria-current={isActive ? "true" : undefined}
        className={optionClassName(isActive)}
        onClick={(event) => {
          event.preventDefault();
          handleLocaleSelect(href);
        }}
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
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={t("label")}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((open) => !open)}
        className={cn(
          "inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border/70 bg-background/70 px-3 text-sm font-medium text-foreground shadow-sm backdrop-blur transition-colors hover:border-primary/40 hover:text-primary",
          compact && "h-9 px-2.5",
          isOpen && "border-primary/40 text-primary",
        )}
      >
        <Globe className="size-4" weight="duotone" />
        <span className="text-base leading-none">{activeMeta.flag}</span>
        {!compact ? (
          <span className="hidden lg:inline">{activeMeta.nativeName}</span>
        ) : null}
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-full z-[570] origin-top pt-2">
          <div
            role="menu"
            className="min-w-[17rem] space-y-0.5 rounded-lg border bg-background px-1 py-1.5 shadow-lg backdrop-blur-xl"
          >
            {options}
          </div>
        </div>
      ) : null}
    </div>
  );
}
