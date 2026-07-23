import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

const LAST_UPDATED = "January 15, 2025";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How STUDI01HQ PRIVATE LIMITED (Studio1) collects, uses, and protects personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 font-inter tabular-nums [&_h1]:font-inter [&_h2]:font-inter [&_strong]:font-inter">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight">
        Privacy Policy
      </h1>

      <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-inter prose-headings:font-semibold prose-headings:tracking-tight prose-strong:font-inter">
        <p className="mb-8 text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          1. Introduction
        </h2>
        <p className="text-muted-foreground mb-4">
          <strong>STUDI01HQ PRIVATE LIMITED</strong> (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) is the data controller for the
          processing described in this policy, unless we tell you otherwise. We
          may use the brand name <strong>Studio1</strong> on our website and in
          communications. This policy explains how we collect, use, and protect
          personal information when you use our website or engage with our
          services.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          2. Information We Collect
        </h2>
        <p className="text-muted-foreground mb-4">
          We collect information you provide directly, such as contact details
          when you inquire about our services, book a call, or communicate
          with us by email.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          3. How We Use Your Information
        </h2>
        <p className="text-muted-foreground mb-4">
          We use collected information to provide and improve our services,
          communicate with you, and fulfill contractual obligations.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          4. Information Sharing
        </h2>
        <p className="text-muted-foreground mb-4">
          We do not sell your personal information. We may share information
          with service providers who assist in our operations, subject to
          appropriate safeguards.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          5. Data Security
        </h2>
        <p className="text-muted-foreground mb-4">
          We implement appropriate security measures to protect your personal
          information from unauthorized access or disclosure.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          6. Your Rights
        </h2>
        <p className="text-muted-foreground mb-4">
          You may have the right to access, correct, or delete your personal
          information, or to object to or restrict certain processing, in line
          with applicable law. Contact us to exercise these rights.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold tracking-tight">
          7. Contact Us
        </h2>
        <p className="text-muted-foreground mb-4">
          For privacy-related questions or requests, contact{" "}
          <strong>STUDI01HQ PRIVATE LIMITED</strong> at{" "}
          <a href="mailto:contact@studio1hq.com">contact@studio1hq.com</a>.
        </p>
      </div>
    </section>
  );
}
