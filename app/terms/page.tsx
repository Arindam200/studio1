import { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions for using Studio1's services, including technical content creation and DevRel consulting.",
  openGraph: {
    title: "Terms and Conditions | Studio1",
    description:
      "Read the terms and conditions for using Studio1's services, including technical content creation and DevRel consulting.",
    url: baseUrl + "/terms",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Terms and Conditions | Studio1",
    card: "summary_large_image",
    description:
      "Read the terms and conditions for using Studio1's services, including technical content creation and DevRel consulting.",
  },
};

export default function TermsPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        {/* TODO: Add your legal terms and conditions content below */}

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
        <p className="text-muted-foreground mb-4">
          By accessing or using Studio1&apos;s services, you agree to be bound by these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
        <p className="text-muted-foreground mb-4">
          Studio1 provides technical content creation, DevRel consulting, and developer marketing services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
        <p className="text-muted-foreground mb-4">
          Content created by Studio1 is subject to the terms agreed upon in individual service contracts.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
        <p className="text-muted-foreground mb-4">
          Studio1 shall not be liable for any indirect, incidental, or consequential damages.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact</h2>
        <p className="text-muted-foreground mb-4">
          For questions about these Terms, please contact us at hello@studio1hq.com.
        </p>
      </div>
    </section>
  );
}
