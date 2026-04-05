import type { Metadata } from "next";
import { Raleway, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { baseUrl } from "./sitemap";
import Script from "next/script";
import { cn } from "@/lib/utils";
import BottomNavbar from "@/components/bottom-navbar";

import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import CTA from "@/components/landing/cta";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
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
      "Technical Content & DevRel Agency for DevTools | Studio1",
    template: "%s | Studio1",
  },
  description:
    "Studio1 is a technical content and DevRel partner for SaaS and devtool teams. We produce tutorials, docs, and developer programs that drive adoption. Book a call.",
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
  openGraph: {
    title: "Technical Content & DevRel Agency for DevTools | Studio1",
    description:
      "Studio1 is a technical content and DevRel partner for SaaS and devtool teams. We produce tutorials, docs, and developer programs that drive adoption. Book a call.",
    url: baseUrl,
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Studio1 - Technical Content & DevRel Services",
      },
    ],
  },
  twitter: {
    title: "Technical Content & DevRel Agency for DevTools | Studio1",
    card: "summary_large_image",
    description:
      "Studio1 is a technical content and DevRel partner for SaaS and devtool teams. We produce tutorials, docs, and developer programs that drive adoption. Book a call.",
    images: [`${baseUrl}/opengraph-image.png`],
    creator: "@Studio1HQ",
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
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          raleway.variable,
          jakarta.variable,
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
          <Navbar />
          {children}
          <CTA />
          <Footer />
          <BottomNavbar />
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
                "Studio1 is a technical content and DevRel partner for SaaS and devtool teams. We produce tutorials, docs, and developer programs that drive adoption.",
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
      </body>
    </html>
  );
}
