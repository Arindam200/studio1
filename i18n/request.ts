import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import { getMessages, getSafeLocale } from "@/lib/i18n-messages";

export default getRequestConfig(async () => {
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));

  return {
    locale,
    messages: await getMessages(locale),
  };
});
