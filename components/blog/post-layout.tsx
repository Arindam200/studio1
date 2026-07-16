import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PostShare } from "@/components/blog/post-share";
import { TableOfContents } from "@/components/case-studies/table-of-contents";
import { Num } from "@/components/ui/num";

type PostLayoutProps = {
  title: string;
  date: string;
  author: string;
  tags: string[];
  coverImage?: string;
  readingTimeMinutes?: number;
  shareUrl: string;
  children: ReactNode;
};

export function PostLayout({
  title,
  date,
  author,
  tags,
  coverImage,
  readingTimeMinutes,
  shareUrl,
  children,
}: PostLayoutProps) {
  return (
    <article className="relative mx-auto max-w-7xl px-4 py-12 md:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>

      <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_220px]">
        <div className="max-w-3xl">
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-3">
              <time dateTime={date}>{date}</time>
              {readingTimeMinutes != null ? (
                <>
                  <span aria-hidden>·</span>
                  <span>
                    <Num>{readingTimeMinutes}</Num> min read
                  </span>
                </>
              ) : null}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground text-sm mb-4">By {author}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-xl border bg-muted">
            <Image
              src={coverImage ?? "/opengraph-image.png"}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42rem"
              priority
            />
          </div>

          <div
            data-mdx-content
            className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-p:leading-relaxed prose-li:leading-relaxed"
          >
            {children}
          </div>

          <div className="xl:hidden">
            <PostShare url={shareUrl} title={title} />
          </div>
        </div>

        <aside className="hidden xl:block">
          <div className="sticky top-28 flex flex-col gap-10">
            <TableOfContents sticky={false} />
            <PostShare url={shareUrl} title={title} variant="sidebar" />
          </div>
        </aside>
      </div>
    </article>
  );
}
