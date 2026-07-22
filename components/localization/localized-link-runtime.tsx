"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import {
  DEFAULT_LOCALE,
  isLocale,
  localizePathname,
  shouldBypassLocale,
  splitLocaleFromPathname,
  type Locale,
} from "@/lib/i18n";

function shouldLocalizeAnchor(anchor: HTMLAnchorElement) {
  if (anchor.hasAttribute("hreflang")) return false;

  const href = anchor.getAttribute("href") ?? "";
  if (!href || href.startsWith("#")) return false;
  if (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  ) {
    return false;
  }

  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return false;
    if (shouldBypassLocale(url.pathname)) return false;
    return true;
  } catch {
    return false;
  }
}

function localizedHref(href: string, locale: Locale) {
  const url = new URL(href, window.location.origin);
  const { locale: hrefLocale, pathname } = splitLocaleFromPathname(url.pathname);

  if (hrefLocale && isLocale(hrefLocale) && hrefLocale === locale) {
    return href;
  }

  url.pathname = localizePathname(pathname, locale);
  return `${url.pathname}${url.search}${url.hash}`;
}

export function LocalizedLinkRuntime() {
  const locale = useLocale() as Locale;

  useEffect(() => {
    if (locale === DEFAULT_LOCALE) return;

    const localizeLinks = () => {
      for (const anchor of Array.from(
        document.querySelectorAll<HTMLAnchorElement>("a[href]"),
      )) {
        const rawHref = anchor.getAttribute("href");
        if (!rawHref || !shouldLocalizeAnchor(anchor)) continue;
        const nextHref = localizedHref(rawHref, locale);
        if (nextHref !== rawHref) {
          anchor.setAttribute("href", nextHref);
        }
      }
    };

    localizeLinks();

    const observer = new MutationObserver(localizeLinks);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href"],
    });

    return () => observer.disconnect();
  }, [locale]);

  return null;
}
