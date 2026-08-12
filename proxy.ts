import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  isLocale,
  localizePathname,
  shouldBypassLocale,
  splitLocaleFromPathname,
  type Locale,
} from "@/lib/i18n";

const legacyRedirects: Record<string, string> = {
  "/blog-as-service": "/technical-content-marketing",
  "/docs-as-service": "/developer-documentation-dx-audit",
  "/content-creation": "/developer-video-production",
  "/devrel-as-service": "/developer-relations-growth-campaigns",
  "/audit-services": "/developer-documentation-dx-audit",
  "/video-production": "/developer-video-production",
  "/product-launch": "/developer-relations-growth-campaigns",
  "/organic-campaign": "/developer-relations-growth-campaigns",
  "/influencer-management": "/developer-relations-growth-campaigns",
};

function requestHeaders(
  request: NextRequest,
  locale: Locale,
  pathname: string,
) {
  const headers = new Headers(request.headers);
  headers.set("x-studio1-locale", locale);
  headers.set("x-studio1-pathname", pathname);
  return headers;
}

export function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const { pathname } = nextUrl;

  if (shouldBypassLocale(pathname)) {
    return NextResponse.next();
  }

  const { locale, pathname: unprefixedPathname } =
    splitLocaleFromPathname(pathname);
  const activeLocale = locale ?? DEFAULT_LOCALE;
  const redirectTarget = legacyRedirects[unprefixedPathname];

  if (redirectTarget) {
    const url = nextUrl.clone();
    url.pathname = localizePathname(redirectTarget, activeLocale);
    return NextResponse.redirect(url, 308);
  }

  if (locale && isLocale(locale)) {
    if (
      unprefixedPathname === "/blog" ||
      unprefixedPathname.startsWith("/blog/") ||
      unprefixedPathname === "/case-studies" ||
      unprefixedPathname.startsWith("/case-studies/") ||
      unprefixedPathname === "/careers" ||
      unprefixedPathname.startsWith("/careers/") ||
      unprefixedPathname === "/terms" ||
      unprefixedPathname === "/privacy"
    ) {
      const url = nextUrl.clone();
      url.pathname = "/__localized-not-found";

      return NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders(request, locale, pathname),
        },
      });
    }

    const url = nextUrl.clone();
    url.pathname = unprefixedPathname;

    const response = NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders(request, locale, pathname),
      },
    });
    response.cookies.set("studio1-locale", locale, {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders(request, DEFAULT_LOCALE, pathname),
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
