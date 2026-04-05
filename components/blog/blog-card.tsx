import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group border relative overflow-hidden hover:border-primary hover:-translate-y-1 duration-500 rounded-lg flex flex-col items-start gap-0 bg-background/80 backdrop-blur-md"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b bg-muted">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 42rem"
        />
      </div>
      <div className="flex flex-col gap-2 w-full p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground font-medium">
          <time dateTime={post.date}>{post.date}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTimeMinutes} min read</span>
        </div>
        <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <span className="text-sm text-primary font-medium mt-auto pt-2">
          Read more →
        </span>
      </div>
    </Link>
  );
}
