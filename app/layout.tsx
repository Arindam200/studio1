import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Cta from "@/components/sections/cta";
import Foooter from "@/components/sections/footer";
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
  title: "Studio1",
  description: "Empowering Your Voice in the Developer Community",
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
    </html>
  );
}
