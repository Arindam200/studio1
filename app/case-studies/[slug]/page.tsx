import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getCaseStudyBySlug,
  getCaseStudyCoverAlt,
  getCaseStudySlugs,
  getRelatedCaseStudies,
} from "@/lib/case-studies";
import { CaseStudyLayout } from "@/components/case-studies/case-study-layout";
import { caseStudyMdxComponents } from "@/components/case-studies/mdx";
import {
  absoluteImageUrl,
  articlePageMetadata,
  baseUrl,
  localizedBreadcrumbJsonLd,
} from "@/lib/seo";
import { headers } from "next/headers";
import { getSafeLocale } from "@/lib/i18n-messages";
import { localizedUrl } from "@/lib/i18n";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));
  const study = getCaseStudyBySlug(slug, locale);
  if (!study) {
    return { title: "Not found" };
  }

  return articlePageMetadata({
    title: study.title,
    description: study.description,
    path: `/case-studies/${slug}`,
    locale,
    keywords: study.tags,
    image: study.cover,
    imageAlt: getCaseStudyCoverAlt(study),
    publishedTime: study.date,
    tags: study.tags,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const headerStore = await headers();
  const locale = getSafeLocale(headerStore.get("x-studio1-locale"));
  const study = getCaseStudyBySlug(slug, locale);
  if (!study) notFound();

  const related = getRelatedCaseStudies(slug, 3, locale);

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
      "@id": localizedUrl(`/case-studies/${slug}`, locale, baseUrl),
    },
    image: {
      "@type": "ImageObject",
      url: absoluteImageUrl(study.cover),
      caption: getCaseStudyCoverAlt(study),
    },
    keywords: study.tags.join(", "),
    articleSection: "Case Studies",
  };

  const breadcrumbSchema = localizedBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: study.title, path: `/case-studies/${slug}` },
  ], locale);

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
      <CaseStudyLayout study={study} related={related}>
        <MDXRemote
          source={study.content}
          components={caseStudyMdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </CaseStudyLayout>
    </>
  );
}
