import { NextResponse } from "next/server";

type ApiParams = {
  params: Promise<{
    path?: string[];
  }>;
};

function apiNotFound(path?: string[]) {
  const requestedPath = `/api/${path?.join("/") ?? ""}`.replace(/\/$/, "");

  return NextResponse.json(
    {
      error: {
        code: "API_NOT_FOUND",
        message: "No public Studio1 API endpoint exists at this path.",
        path: requestedPath || "/api",
        hint: "Use /sitemap.xml for crawlable URLs and /llms.txt for an agent-readable site overview.",
        links: {
          sitemap: "/sitemap.xml",
          llms: "/llms.txt",
          homepage: "/",
        },
      },
    },
    {
      status: 404,
      headers: {
        "Cache-Control": "public, max-age=300",
      },
    },
  );
}

export async function GET(_: Request, { params }: ApiParams) {
  return apiNotFound((await params).path);
}

export async function POST(_: Request, { params }: ApiParams) {
  return apiNotFound((await params).path);
}

export async function PUT(_: Request, { params }: ApiParams) {
  return apiNotFound((await params).path);
}

export async function PATCH(_: Request, { params }: ApiParams) {
  return apiNotFound((await params).path);
}

export async function DELETE(_: Request, { params }: ApiParams) {
  return apiNotFound((await params).path);
}
