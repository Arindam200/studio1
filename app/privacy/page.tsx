import { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Studio1 collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
  openGraph: {
    title: "Privacy Policy | Studio1",
    description:
      "Learn how Studio1 collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
    url: baseUrl + "/privacy",
    siteName: "Studio1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy | Studio1",
    card: "summary_large_image",
    description:
      "Learn how Studio1 collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
  },
};

export default function PrivacyPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        {/* TODO: Add your privacy policy content below */}

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-muted-foreground mb-4">
          We collect information you provide directly, such as contact details when you inquire about our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-muted-foreground mb-4">
          We use collected information to provide and improve our services, communicate with you, and fulfill contractual obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
        <p className="text-muted-foreground mb-4">
          We do not sell your personal information. We may share information with service providers who assist in our operations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p className="text-muted-foreground mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
        <p className="text-muted-foreground mb-4">
          You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
        <p className="text-muted-foreground mb-4">
          For privacy-related questions, please contact us at hello@studio1hq.com.
        </p>
      </div>
    </section>
  );
}
