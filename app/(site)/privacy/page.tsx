import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getLegalPage } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const page = getLegalPage("privacy");

  return pageMetadata({
    title: page.title,
    description: page.description,
    path: "/privacy",
  });
}

export default async function PrivacyPage() {
  const page = getLegalPage("privacy");

  return (
    <section className="mx-auto max-w-4xl px-4 py-24 font-inter tabular-nums [&_h1]:font-inter [&_h2]:font-inter [&_strong]:font-inter">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight">
        {page.title}
      </h1>

      <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-inter prose-headings:font-semibold prose-headings:tracking-tight prose-strong:font-inter">
        <p className="mb-8 text-muted-foreground">
          Last updated: {page.lastUpdated}
        </p>
        <MDXRemote
          source={page.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>
    </section>
  );
}
