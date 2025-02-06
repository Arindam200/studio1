import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { baseUrl } from "./sitemap";
import Script from "next/script";
import { cn } from "@/lib/utils";
import BottomNavbar from "@/components/bottom-navbar";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import CTA from "@/components/landing/cta";

const aeonikRegular = localFont({
  src: "./fonts/Aeonik-Regular.ttf",
  variable: "--font-aeonik-regular",
});

const aeonikMedium = localFont({
  src: "./fonts/Aeonik-Medium.ttf",
  variable: "--font-aeonik-medium",
});

const aeonikBold = localFont({
  src: "./fonts/Aeonik-Bold.ttf",
  variable: "--font-aeonik-bold",
});

const aeonikLight = localFont({
  src: "./fonts/Aeonik-Light.ttf",
  variable: "--font-aeonik-light",
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
        className={cn(
          aeonikRegular.variable,
          aeonikMedium.variable,
          aeonikBold.variable,
          aeonikLight.variable,
          "antialiased overflow-x-hidden font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
          <CTA />
          <Footer />
          <BottomNavbar />
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
