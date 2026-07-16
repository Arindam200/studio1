import type { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export { baseUrl };

export const DEFAULT_OG_IMAGE = "/opengraph-image.png";
export const DEFAULT_OG_IMAGE_ALT =
  "Studio1 - Technical Content & DevRel Services";

const defaultOgImageUrl = `${baseUrl}${DEFAULT_OG_IMAGE}`;

export const defaultOgImages = [
  {
    url: defaultOgImageUrl,
    width: 1200,
    height: 630,
    alt: DEFAULT_OG_IMAGE_ALT,
  },
];

export function absoluteImageUrl(image?: string): string {
  if (!image) return defaultOgImageUrl;
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  return `${baseUrl}${image.startsWith("/") ? "" : "/"}${image}`;
}

function normalizePath(path: string): string {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function pageUrl(path: string): string {
  const normalized = normalizePath(path);
  return normalized === "" ? baseUrl : `${baseUrl}${normalized}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
}: PageMetadataOptions): Metadata {
  const url = pageUrl(path);
  const brandedTitle = `${title} | Studio1`;

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: "Studio1",
      locale: "en_US",
      type,
      images: [...defaultOgImages],
    },
    twitter: {
      title: brandedTitle,
      card: "summary_large_image",
      description,
      images: [defaultOgImageUrl],
      creator: "@Studio1HQ",
    },
  };
}

const HOME_TITLE = "Technical Content & DevRel Agency for DevTools";
const HOME_DESCRIPTION =
  "Studio1 is a technical content and DevRel partner for SaaS and devtool teams. We produce tutorials, docs, and developer programs that drive adoption. Book a call.";

export function homePageMetadata(): Metadata {
  const brandedTitle = `${HOME_TITLE} | Studio1`;

  return {
    title: {
      absolute: brandedTitle,
    },
    description: HOME_DESCRIPTION,
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: brandedTitle,
      description: HOME_DESCRIPTION,
      url: baseUrl,
      siteName: "Studio1",
      locale: "en_US",
      type: "website",
      images: [...defaultOgImages],
    },
    twitter: {
      title: brandedTitle,
      card: "summary_large_image",
      description: HOME_DESCRIPTION,
      images: [defaultOgImageUrl],
      creator: "@Studio1HQ",
    },
  };
}

export function articlePageMetadata({
  title,
  description,
  path,
  keywords,
  image,
  publishedTime,
  tags,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  publishedTime?: string;
  tags?: string[];
}): Metadata {
  const url = pageUrl(path);
  const ogImage = absoluteImageUrl(image);
  const brandedTitle = `${title} | Studio1`;

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: "Studio1",
      type: "article",
      ...(publishedTime ? { publishedTime } : {}),
      ...(tags?.length ? { tags } : {}),
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [ogImage],
      creator: "@Studio1HQ",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Studio1",
    url: baseUrl,
    description: HOME_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: "Studio1",
      url: baseUrl,
      logo: `${baseUrl}/icon.png`,
    },
  };
}

export function softwareApplicationJsonLd(product: {
  name: string;
  description: string;
  url: string;
  category: string;
  statusLabel: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    url: product.url,
    applicationCategory: product.category,
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability:
        product.statusLabel === "Upcoming"
          ? "https://schema.org/PreOrder"
          : "https://schema.org/InStock",
    },
    publisher: {
      "@type": "Organization",
      name: "Studio1",
      url: baseUrl,
    },
  };
}
