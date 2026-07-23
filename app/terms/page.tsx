import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

const LAST_UPDATED = "January 15, 2025";

export const metadata: Metadata = pageMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and conditions for STUDI01HQ PRIVATE LIMITED (Studio1): technical content, DevRel, and related services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 font-inter tabular-nums [&_h1]:font-inter [&_h2]:font-inter [&_strong]:font-inter">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight">
        Terms and Conditions
      </h1>

      <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-inter prose-headings:font-semibold prose-headings:tracking-tight prose-strong:font-inter">
        <p className="mb-8 text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          1. Introduction
        </h2>
        <p className="mb-4 text-muted-foreground">
          These Terms and Conditions (&quot;Terms&quot;) govern your use of the
          website and services offered by{" "}
          <strong>STUDI01HQ PRIVATE LIMITED</strong>, a company incorporated in
          India. We may use the name <strong>Studio1</strong> as our trading
          name in marketing, on this site, and in communications. Unless the
          context requires otherwise, references to &quot;Studio1&quot;,
          &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; mean STUDI01HQ PRIVATE LIMITED.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          2. Agreement to Terms
        </h2>
        <p className="mb-4 text-muted-foreground">
          By accessing or using our services, you agree to be bound by these
          Terms. If you do not agree, please do not use our website or
          services.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          3. Services
        </h2>
        <p className="mb-4 text-muted-foreground">
          STUDI01HQ PRIVATE LIMITED provides technical content creation, DevRel
          consulting, and developer marketing services as described on this
          website and in separate agreements.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          4. Intellectual Property
        </h2>
        <p className="mb-4 text-muted-foreground">
          Content and deliverables are subject to the terms agreed in individual
          service contracts. Website content is owned by STUDI01HQ PRIVATE LIMITED or used under license unless stated otherwise.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          5. Limitation of Liability
        </h2>
        <p className="mb-4 text-muted-foreground">
          To the fullest extent permitted by applicable law, STUDI01HQ PRIVATE LIMITED shall not be liable for any indirect, incidental, or
          consequential damages arising from your use of this website or our
          services except as required by law or expressly agreed in writing.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          6. Contact
        </h2>
        <p className="mb-4 text-muted-foreground">
          For questions about these Terms, contact{" "}
          <strong>STUDI01HQ PRIVATE LIMITED</strong> at{" "}
          <a href="mailto:contact@studio1hq.com">contact@studio1hq.com</a>.
        </p>
      </div>
    </section>
  );
}
