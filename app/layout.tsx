import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Cta from "@/components/sections/cta";
import Foooter from "@/components/sections/footer";
import { baseUrl } from "./sitemap";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Studio1 - Technical Content & DevRel Services",
    template: "%s | Studio1",
  },
  description: "Empowering Your Voice in the Developer Community",
  openGraph: {
    title: "Studio1 - Technical Content & DevRel Services",
    description: "Empowering Your Voice in the Developer Community",
    url: baseUrl,
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Studio1 - Technical Content & DevRel Services",
    card: "summary_large_image",
    description: "Empowering Your Voice in the Developer Community",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Cta />
          <Foooter />
        </ThemeProvider>
      </body>
      <Script
        async
        src="https://cloud.umami.is/script.js"
        data-website-id="d2503074-d887-4016-9be5-90629ed32e70"
      />
    </html>
  );
}
