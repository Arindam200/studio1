import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getCaseStudyBySlug,
  getCaseStudySlugs,
} from "@/lib/case-studies";
import { CaseStudyLayout } from "@/components/case-studies/case-study-layout";
import { caseStudyMdxComponents } from "@/components/case-studies/mdx";
import {
  absoluteImageUrl,
  articlePageMetadata,
  baseUrl,
  breadcrumbJsonLd,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return { title: "Not found" };
  }

  return articlePageMetadata({
    title: study.title,
    description: study.description,
    path: `/case-studies/${slug}`,
    keywords: study.tags,
    image: study.cover,
    publishedTime: study.date,
    tags: study.tags,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    datePublished: study.date,
    about: study.client,
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
        url: `${baseUrl}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/case-studies/${slug}`,
    },
    image: absoluteImageUrl(study.cover),
    keywords: study.tags.join(", "),
    articleSection: "Case Studies",
  };

  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: study.title, path: `/case-studies/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudyLayout study={study}>
        <MDXRemote
          source={study.content}
          components={caseStudyMdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </CaseStudyLayout>
    </>
  );
}
