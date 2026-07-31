import { navItems } from "@/constants/data";
import { getAllPosts } from "@/lib/blog";
import { getAllCaseStudies } from "@/lib/case-studies";
import { getJobOpenings } from "@/lib/careers";

export type SearchItemGroup =
  | "pages"
  | "services"
  | "content"
  | "blog"
  | "caseStudies"
  | "careers"
  | "legal";

export type SearchItem = {
  id: string;
  title: string;
  titleKey?: string;
  description?: string;
  descriptionKey?: string;
  href: string;
  group: SearchItemGroup;
  keywords?: string[];
};

const navTitleKeys: Record<string, string> = {
  "About Us": "about",
  "Case Studies": "caseStudies",
  "Client Work": "clientWork",
  "Developer Relations & Growth": "devrel",
  "Developer Video Production": "video",
  "Documentation & DX Audits": "docs",
  "Our Blog": "blog",
  "Technical Content Marketing": "technicalContent",
  Content: "content",
  Home: "home",
  Overview: "overview",
  Process: "process",
  Product: "product",
  Proof: "proof",
  Results: "results",
  Services: "services",
};

const navDescriptionKeys: Record<string, string> = {
  "Tutorials and guides we write for clients": "clientWork",
  "Proof from docs, DevRel, launch, and content work": "caseStudies",
  "Articles and insights from the Studio1 team": "blog",
};

function navItemGroup(title: string): SearchItemGroup {
  if (title === "Services") return "services";
  if (title === "Content") return "content";
  return "pages";
}

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const item of navItems) {
    if (item.path && item.path !== "#") {
      items.push({
        id: `nav-${item.title}`,
        title: item.title,
        titleKey: navTitleKeys[item.title],
        href: item.path,
        group: navItemGroup(item.title),
      });
    }

    if (item.children) {
      for (const child of item.children) {
        items.push({
          id: `nav-${child.title}`,
          title: child.title,
          titleKey: navTitleKeys[child.title],
          description:
            "description" in child ? child.description : undefined,
          descriptionKey:
            "description" in child && child.description
              ? navDescriptionKeys[child.description]
              : undefined,
          href: child.path,
          group: navItemGroup(item.title),
        });
      }
    }
  }

  items.push(
    {
      id: "page-careers",
      title: "Careers",
      titleKey: "careers",
      description: "Open roles at Studio1",
      href: "/careers",
      group: "pages",
    },
    {
      id: "legal-terms",
      title: "Terms of Service",
      titleKey: "terms",
      href: "/terms",
      group: "legal",
    },
    {
      id: "legal-privacy",
      title: "Privacy Policy",
      titleKey: "privacy",
      href: "/privacy",
      group: "legal",
    },
  );

  for (const post of getAllPosts()) {
    items.push({
      id: `blog-${post.slug}`,
      title: post.title,
      description: post.description,
      href: `/blog/${post.slug}`,
      group: "blog",
      keywords: post.tags,
    });
  }

  for (const study of getAllCaseStudies()) {
    items.push({
      id: `case-study-${study.slug}`,
      title: study.title,
      description: study.summary || study.description,
      href: `/case-studies/${study.slug}`,
      group: "caseStudies",
      keywords: [study.client, study.category, ...study.tags],
    });
  }

  for (const job of getJobOpenings()) {
    items.push({
      id: `career-${job.id}`,
      title: job.title,
      description: job.description,
      href: `/careers/${job.id}`,
      group: "careers",
      keywords: [job.department, job.location, job.type],
    });
  }

  return items;
}
