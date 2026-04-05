import { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for STUDI01HQ PRIVATE LIMITED (Studio1) — technical content, DevRel, and related services.",
  openGraph: {
    title: "Terms and Conditions | Studio1",
    description:
      "Terms and conditions for STUDI01HQ PRIVATE LIMITED (Studio1) — technical content, DevRel, and related services.",
    url: baseUrl + "/terms",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Terms and Conditions | Studio1",
    card: "summary_large_image",
    description:
      "Terms and conditions for STUDI01HQ PRIVATE LIMITED (Studio1) — technical content, DevRel, and related services.",
  },
};

export default function TermsPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-8">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p className="text-muted-foreground mb-4">
          These Terms and Conditions (&quot;Terms&quot;) govern your use of the
          website and services offered by{" "}
          <strong>STUDI01HQ PRIVATE LIMITED</strong>, a company incorporated in
          India. We may use the name <strong>Studio1</strong> as our trading
          name in marketing, on this site, and in communications. Unless the
          context requires otherwise, references to &quot;Studio1&quot;,
          &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; mean STUDI01HQ PRIVATE LIMITED.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Agreement to Terms</h2>
        <p className="text-muted-foreground mb-4">
          By accessing or using our services, you agree to be bound by these
          Terms. If you do not agree, please do not use our website or
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Services</h2>
        <p className="text-muted-foreground mb-4">
          STUDI01HQ PRIVATE LIMITED provides technical content creation, DevRel
          consulting, and developer marketing services as described on this
          website and in separate agreements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Intellectual Property
        </h2>
        <p className="text-muted-foreground mb-4">
          Content and deliverables are subject to the terms agreed in individual
          service contracts. Website content is owned by STUDI01HQ PRIVATE LIMITED or used under license unless stated otherwise.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Limitation of Liability
        </h2>
        <p className="text-muted-foreground mb-4">
          To the fullest extent permitted by applicable law, STUDI01HQ PRIVATE LIMITED shall not be liable for any indirect, incidental, or
          consequential damages arising from your use of this website or our
          services except as required by law or expressly agreed in writing.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
        <p className="text-muted-foreground mb-4">
          For questions about these Terms, contact{" "}
          <strong>STUDI01HQ PRIVATE LIMITED</strong> at{" "}
          <a href="mailto:contact@studio1hq.com">contact@studio1hq.com</a>.
        </p>
      </div>
    </section>
  );
}
