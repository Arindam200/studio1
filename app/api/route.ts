import { NextResponse } from "next/server";

const apiNotFoundPayload = {
  error: {
    code: "API_NOT_FOUND",
    message: "Studio1 does not expose a public API at this endpoint.",
    hint: "Use /sitemap.xml for crawlable URLs and /llms.txt for an agent-readable site overview.",
    links: {
      sitemap: "/sitemap.xml",
      llms: "/llms.txt",
      homepage: "/",
    },
  },
};

function apiNotFound() {
  return NextResponse.json(apiNotFoundPayload, {
    status: 404,
    headers: {
      "Cache-Control": "public, max-age=300",
    },
  });
}

export function GET() {
  return apiNotFound();
}

export function POST() {
  return apiNotFound();
}

export function PUT() {
  return apiNotFound();
}

export function PATCH() {
  return apiNotFound();
}

export function DELETE() {
  return apiNotFound();
}
