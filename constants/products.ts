import {
  ChartBar,
  Globe,
  Palette,
  Code,
  Eye,
  WifiHigh,
  Timer,
  Path,
  Browser,
  Swatches,
  Export,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

export type ProductStatus = "launched" | "live" | "upcoming";

export type Product = {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: { label: string; detail: string; icon: Icon }[];
  url: string;
  category: string;
  status: ProductStatus;
  statusLabel: string;
};

export const products: Product[] = [
  {
    name: "Raah",
    tagline: "Web analytics and network observability for real users",
    description:
      "Analytics and observability in one script tag. Track traffic, Web Vitals, API timing, errors, and ISP impact from a single dashboard.",
    longDescription:
      "Most analytics tools stop at pageviews. Most observability tools ignore the frontend. Raah bridges that gap. One script tag gives you user analytics, journey paths, Core Web Vitals, endpoint latency, browser errors, ISP diagnostics, and third-party script impact in a single dashboard. Built for developers and SaaS teams who need to understand real-user experience without stitching three tools together.",
    features: [
      {
        label: "User analytics & journeys",
        detail:
          "Pageviews, sessions, referrers, UTMs, geography, devices, and full journey paths from landing to conversion",
        icon: Path,
      },
      {
        label: "Real-user observability",
        detail:
          "Endpoint latency, error rates, DNS/TCP/TLS/TTFB timing, and browser-side failures from actual users",
        icon: WifiHigh,
      },
      {
        label: "ISP & network diagnostics",
        detail:
          "See which carriers and ISPs are hurting real users, broken down by city, country, and connection quality",
        icon: Globe,
      },
      {
        label: "Core Web Vitals",
        detail:
          "LCP, INP, and CLS from real users, segmented by page, geography, and device",
        icon: Timer,
      },
      {
        label: "One-line installation",
        detail:
          "Paste one script tag. No SDK sprawl, no build steps, no config files. Live in under a minute",
        icon: ChartBar,
      },
    ],
    url: "https://raah.dev",
    category: "Analytics & Observability",
    status: "launched",
    statusLabel: "Launched",
  },
  {
    name: "AssetSnip",
    tagline: "Website asset extraction for design research and handoff",
    description:
      "Chrome extension and library to extract colors, fonts, SVGs, videos, gradients, Lottie, and design values from any website.",
    longDescription:
      "Designers and developers waste hours inspecting websites through DevTools to capture design references. AssetSnip replaces that workflow. Browse any website, and AssetSnip automatically extracts colors, typography, SVGs, images, videos, gradients, Lottie animations, and UI sections. Save everything to a reusable library and export CSS, HTML, or Tailwind-ready code for direct handoff to your codebase.",
    features: [
      {
        label: "Extract from any website",
        detail:
          "Colors, fonts, SVGs, images, videos, gradients, Lottie files, and UI sections captured automatically",
        icon: Eye,
      },
      {
        label: "Reusable design library",
        detail:
          "Save captured assets into organized collections for inspiration boards, mood boards, and design systems",
        icon: Swatches,
      },
      {
        label: "Browser extension",
        detail:
          "Chrome extension that works on any live website without needing access to source code or Figma files",
        icon: Browser,
      },
      {
        label: "Color & font identification",
        detail:
          "Capture full color palettes, gradients, and typography stacks with exact values ready for use",
        icon: Palette,
      },
      {
        label: "Export-ready code",
        detail:
          "Export captured design values as CSS, HTML, or Tailwind utility classes directly into your project",
        icon: Export,
      },
    ],
    url: "https://assetsnip.com",
    category: "Design Tooling",
    status: "live",
    statusLabel: "Live",
  },
];
