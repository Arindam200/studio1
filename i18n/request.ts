import { getRequestConfig } from "next-intl/server";
import { getMessages, getSafeLocale } from "@/lib/i18n-messages";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = getSafeLocale(await requestLocale);

  return {
    locale,
    messages: await getMessages(locale),
  };
});
