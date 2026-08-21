import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { DEFAULT_LOCALE } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n-messages";
import { SiteChrome } from "@/components/site-chrome";

export default async function EnglishSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  setRequestLocale(DEFAULT_LOCALE);
  const messages = await getMessages(DEFAULT_LOCALE);

  return (
    <NextIntlClientProvider locale={DEFAULT_LOCALE} messages={messages}>
      <SiteChrome>{children}</SiteChrome>
    </NextIntlClientProvider>
  );
}
