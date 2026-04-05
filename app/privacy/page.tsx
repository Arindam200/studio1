import { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How STUDI01HQ PRIVATE LIMITED (Studio1) collects, uses, and protects personal information.",
  openGraph: {
    title: "Privacy Policy | Studio1",
    description:
      "How STUDI01HQ PRIVATE LIMITED (Studio1) collects, uses, and protects personal information.",
    url: baseUrl + "/privacy",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy | Studio1",
    card: "summary_large_image",
    description:
      "How STUDI01HQ PRIVATE LIMITED (Studio1) collects, uses, and protects personal information.",
  },
};

export default function PrivacyPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

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
          <strong>STUDI01HQ PRIVATE LIMITED</strong> (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) is the data controller for the
          processing described in this policy, unless we tell you otherwise. We
          may use the brand name <strong>Studio1</strong> on our website and in
          communications. This policy explains how we collect, use, and protect
          personal information when you use our website or engage with our
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Information We Collect
        </h2>
        <p className="text-muted-foreground mb-4">
          We collect information you provide directly, such as contact details
          when you inquire about our services, book a call, or communicate
          with us by email.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. How We Use Your Information
        </h2>
        <p className="text-muted-foreground mb-4">
          We use collected information to provide and improve our services,
          communicate with you, and fulfill contractual obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Information Sharing
        </h2>
        <p className="text-muted-foreground mb-4">
          We do not sell your personal information. We may share information
          with service providers who assist in our operations, subject to
          appropriate safeguards.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
        <p className="text-muted-foreground mb-4">
          We implement appropriate security measures to protect your personal
          information from unauthorized access or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
        <p className="text-muted-foreground mb-4">
          You may have the right to access, correct, or delete your personal
          information, or to object to or restrict certain processing, in line
          with applicable law. Contact us to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
        <p className="text-muted-foreground mb-4">
          For privacy-related questions or requests, contact{" "}
          <strong>STUDI01HQ PRIVATE LIMITED</strong> at{" "}
          <a href="mailto:contact@studio1hq.com">contact@studio1hq.com</a>.
        </p>
      </div>
    </section>
  );
}
