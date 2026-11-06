import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

const description =
  "The terms and conditions that govern your use of the MonlooQ app and services, including accounts, user content and acceptable use.";

export const metadata: Metadata = {
  title: "Terms of Service",
  description,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      description={description}
      updated="2025-01-01"
    >
      <p>
        Welcome to Monlooq. By accessing or using our mobile application and
        services, you agree to be bound by these Terms and Conditions. Please
        read them carefully before using our platform.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using the Monlooq app, you acknowledge
        that you have read, understood, and agree to be bound by these Terms and
        Conditions. If you do not agree, please do not use our services.
      </p>

      <h2>2. User Accounts</h2>
      <p>
        You must create an account to access certain features. You are
        responsible for maintaining the confidentiality of your account
        credentials and for all activities under your account. You agree to
        provide accurate and complete information during registration.
      </p>

      <h2>3. User Content</h2>
      <p>
        You retain ownership of any content you upload to Monlooq, including
        photos, outfit combinations, and style preferences. By uploading
        content, you grant us a worldwide, non-exclusive license to use,
        display, and distribute your content within the app.
      </p>

      <h2>4. Prohibited Activities</h2>
      <p>
        You agree not to: (a) violate any laws or regulations; (b) infringe on
        intellectual property rights; (c) upload harmful or offensive content;
        (d) attempt to hack or disrupt our services; (e) use the app for
        commercial purposes without authorization.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content, features, and functionality of Monlooq, including but not
        limited to text, graphics, logos, and software, are owned by Monlooq and
        protected by copyright, trademark, and other intellectual property laws.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        Monlooq is provided &ldquo;as is&rdquo; without warranties of any kind.
        We are not liable for any indirect, incidental, or consequential damages
        arising from your use of the app.
      </p>

      <h2>7. Modifications</h2>
      <p>
        We reserve the right to modify these Terms at any time. Continued use of
        the app after changes constitutes acceptance of the modified Terms.
      </p>

      <h2>8. Contact</h2>
      <p>
        For questions about these Terms, please contact us at{" "}
        <a href="mailto:monlooq.app@gmail.com">monlooq.app@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
