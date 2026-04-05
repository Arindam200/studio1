import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type PostLayoutProps = {
  title: string;
  date: string;
  author: string;
  tags: string[];
  coverImage?: string;
  readingTimeMinutes?: number;
  children: ReactNode;
};

export function PostLayout({
  title,
  date,
  author,
  tags,
  coverImage,
  readingTimeMinutes,
  children,
}: PostLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-3">
          <time dateTime={date}>{date}</time>
          {readingTimeMinutes != null ? (
            <>
              <span aria-hidden>·</span>
              <span>{readingTimeMinutes} min read</span>
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
      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-24">
        {children}
      </div>
    </article>
  );
}
