import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

const description =
  "How MonlooQ collects, uses, shares and protects your personal information and wardrobe data when you use the MonlooQ app.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      description={description}
      updated="2025-01-01"
    >
      <p>
        At Monlooq, we take your privacy seriously. This Privacy Policy explains
        how we collect, use, disclose, and safeguard your information when you
        use our mobile application.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        <strong>Personal Information:</strong> Name, email address, profile
        photo, and style preferences.
      </p>
      <p>
        <strong>Wardrobe Data:</strong> Photos and descriptions of clothing
        items you upload.
      </p>
      <p>
        <strong>Usage Data:</strong> Features used, outfit combinations created,
        and time spent on the platform.
      </p>
      <p>
        <strong>Device Information:</strong> Device type, operating system, and
        unique device identifiers.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use collected information to provide and maintain our services,
        personalize your experience, improve our app, communicate updates, and
        ensure security.
      </p>

      <h2>3. Information Sharing</h2>
      <p>
        We do not sell your personal information. We may share it with service
        providers, law enforcement when required, or other users when you share
        content publicly.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement industry-standard security measures including encryption,
        secure servers, and regular security audits.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You have the right to access, correct, delete, and export your personal
        data, and to opt out of marketing communications.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        For privacy-related questions, contact us at{" "}
        <a href="mailto:monlooq.app@gmail.com">monlooq.app@gmail.com</a> or
        through our <a href="/contact">contact form</a>.
      </p>
    </LegalPage>
  );
}
