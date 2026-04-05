import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { PostLayout } from "@/components/blog/post-layout";
import { mdxComponents } from "@/mdx-components";
import { baseUrl } from "@/app/sitemap";

type Props = { params: Promise<{ slug: string }> };

const defaultOgImage = `${baseUrl}/opengraph-image.png`;

function absoluteImageUrl(image?: string): string {
  if (!image) return defaultOgImage;
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  return `${baseUrl}${image.startsWith("/") ? "" : "/"}${image}`;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Not found" };
  }
  const ogImage = absoluteImageUrl(post.image);
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Studio1`,
      description: post.description,
      url: `${baseUrl}/blog/${slug}`,
      siteName: "Studio1",
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Studio1`,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Studio1",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Studio1",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/icon`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`,
    },
    image: absoluteImageUrl(post.image),
    keywords: post.tags.join(", "),
    articleSection: "Blog",
    wordCount: post.content.split(/\s+/).filter(Boolean).length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostLayout
        title={post.title}
        date={post.date}
        author={post.author}
        tags={post.tags}
        coverImage={post.image}
        readingTimeMinutes={post.readingTimeMinutes}
        shareUrl={`${baseUrl}/blog/${slug}`}
      >
        <MDXRemote source={post.content} components={mdxComponents} />
      </PostLayout>
    </>
  );
}
