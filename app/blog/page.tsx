import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { Badge } from "@/components/ui/badge";
import { Newspaper } from "@phosphor-icons/react/dist/ssr";
import { baseUrl } from "@/app/sitemap";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Studio1 Blog",
    description:
      "Explore articles on developer tools, technical writing, DevRel strategies, API documentation, and developer marketing from Studio1.",
    url: `${baseUrl}/blog`,
    isPartOf: {
      "@type": "WebSite",
      name: "Studio1",
      url: baseUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${baseUrl}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <section className="relative max-w-7xl mx-auto flex flex-col mt-24 pb-24 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd),
        }}
      />
      <div className="text-center mb-14 z-20">
        <Badge className="w-fit mx-auto mb-6 flex items-center gap-2 pb-1">
          <Newspaper className="size-5" weight="fill" />
          Blog
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Articles</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Explore articles on developer tools, technical writing, DevRel
          strategies, API documentation, and developer marketing from Studio1.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-20 max-w-5xl mx-auto w-full">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
