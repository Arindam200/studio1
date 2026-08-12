import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";

const loaders = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  fr: () => import("@/messages/fr.json").then((module) => module.default),
  es: () => import("@/messages/es.json").then((module) => module.default),
  hi: () => import("@/messages/hi.json").then((module) => module.default),
  zh: () => import("@/messages/zh.json").then((module) => module.default),
} satisfies Record<Locale, () => Promise<IntlMessages>>;

export async function getMessages(locale: string | null | undefined) {
  const safeLocale = locale && isLocale(locale) ? locale : DEFAULT_LOCALE;
  return loaders[safeLocale]();
}

export function getSafeLocale(locale: string | null | undefined): Locale {
  return locale && isLocale(locale) ? locale : DEFAULT_LOCALE;
}
