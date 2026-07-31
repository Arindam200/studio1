import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  DM_Sans,
  Instrument_Serif,
  Inter,
  Space_Grotesk,
  Syne,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { baseUrl } from "@/lib/site";
import Script from "next/script";
import { cn } from "@/lib/utils";
import BottomNavbar from "@/components/bottom-navbar";
import { NextIntlClientProvider } from "next-intl";

import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import CTA from "@/components/landing/cta";
import { SiteCommandPalette } from "@/components/site-command-palette";
import { LocalizedLinkRuntime } from "@/components/localization/localized-link-runtime";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import {
  DEFAULT_LOCALE,
  canonicalUrl,
  hasLocalizedAlternates,
  languageAlternates,
  localeMeta,
} from "@/lib/i18n";
import { getMessages, getSafeLocale } from "@/lib/i18n-messages";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-numeric",
  display: "swap",
  weight: ["500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));
  const pathname = headerStore.get("x-studio1-pathname") ?? "/";

  return {
    metadataBase: new URL(baseUrl),

    applicationName: "Studio1",
    appleWebApp: {
      title: "Studio1",
    },
    icons: {
      icon: [{ url: "/icon.png", type: "image/png" }],
      apple: [{ url: "/icon.png", type: "image/png" }],
    },

    title: {
      default:
        "Technical Content & Developer Growth Agency for DevTools | Studio1",
      template: "%s | Studio1",
    },
    description:
      "Studio1 is a technical content and developer growth partner for SaaS and devtool teams. We produce tutorials, docs, videos, launches, and developer programs that drive adoption.",
    keywords: [
      "technical content",
      "developer relations",
      "DevRel",
      "developer marketing",
      "technical writing",
      "API documentation",
      "technical blog",
      "developer community",
      "technical content agency",
      "devrel agency",
      "developer tutorials",
      "developer documentation",
      "developer advocacy",
      "technical tutorial writing",
      "content marketing for devtools",
    ],
    authors: [{ name: "Studio1" }],
    alternates: {
      canonical:
        locale === DEFAULT_LOCALE
          ? canonicalUrl(pathname, DEFAULT_LOCALE, baseUrl)
          : canonicalUrl(pathname, locale, baseUrl),
      ...(hasLocalizedAlternates(pathname)
        ? { languages: languageAlternates(pathname, baseUrl) }
        : {}),
    },
    openGraph: {
      title:
        "Technical Content & Developer Growth Agency for DevTools | Studio1",
      description:
        "Studio1 is a technical content and developer growth partner for SaaS and devtool teams. We produce tutorials, docs, videos, launches, and developer programs that drive adoption.",
      url: canonicalUrl(pathname, locale, baseUrl),
      siteName: "Studio1",
      locale: localeMeta[locale].htmlLang.replace("-", "_"),
      type: "website",
      images: [
        {
          url: `${baseUrl}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: "Studio1 - Technical Content and Developer Growth Services",
        },
      ],
    },
    twitter: {
      title:
        "Technical Content & Developer Growth Agency for DevTools | Studio1",
      card: "summary_large_image",
      description:
        "Studio1 is a technical content and developer growth partner for SaaS and devtool teams. We produce tutorials, docs, videos, launches, and developer programs that drive adoption.",
      images: [`${baseUrl}/opengraph-image.png`],
      creator: "@Studio1HQ",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));
  const messages = await getMessages(locale);

  return (
    <html
      lang={localeMeta[locale].htmlLang}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={cn(
          syne.variable,
          dmSans.variable,
          instrumentSerif.variable,
          spaceGrotesk.variable,
          inter.variable,
          "antialiased font-secondary",
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SiteCommandPalette>
              <Navbar />
              {children}
              <CTA />
              <Footer />
              <BottomNavbar />
              <ScrollToTopButton />
              <LocalizedLinkRuntime />
            </SiteCommandPalette>
          </NextIntlClientProvider>
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Studio1",
              url: baseUrl,
              logo: `${baseUrl}/icon.png`,
              description:
                "Studio1 is a technical content and developer growth partner for SaaS and devtool teams. We produce tutorials, docs, videos, launches, and developer programs that drive adoption.",
              sameAs: [
                "https://twitter.com/Studio1HQ",
                "https://linkedin.com/company/studio1hq",
                // Add other social profiles
              ],
            }),
          }}
        />

        <Script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id="d2503074-d887-4016-9be5-90629ed32e70"
        />

        <Script
          src="https://t.raah.dev/script.js"
          data-pid="proj_w60eqpxi5ax0dw36"
          data-domain="studio1hq.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
