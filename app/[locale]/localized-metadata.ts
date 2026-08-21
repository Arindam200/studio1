import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  DEFAULT_LOCALE,
  isLocale,
  type Locale,
} from "@/lib/i18n";
import { homePageMetadata, pageMetadata } from "@/lib/seo";

export type LocaleRouteProps = {
  params: Promise<{ locale: string }>;
};

export async function getRouteLocale(
  params: LocaleRouteProps["params"],
): Promise<Locale> {
  const { locale } = await params;

  if (!isLocale(locale) || locale === DEFAULT_LOCALE) {
    notFound();
  }

  return locale;
}

export async function localizedHomeMetadata(
  params: LocaleRouteProps["params"],
): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  const t = await getTranslations({
    locale,
    namespace: "Metadata.home",
  });

  return homePageMetadata({
    title: t("title"),
    description: t("description"),
    locale,
  });
}

export async function localizedPageMetadata({
  params,
  namespace,
  path,
  keywords,
}: LocaleRouteProps & {
  namespace: string;
  path: string;
  keywords?: string[];
}): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  const t = await getTranslations({
    locale,
    namespace,
  });

  return pageMetadata({
    title: t("title"),
    description: t("description"),
    path,
    locale,
    keywords,
  });
}
