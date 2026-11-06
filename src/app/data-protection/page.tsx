import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

const description =
  "Your data protection rights with MonlooQ under GDPR and CCPA, how we secure your data and how to make a request.";

export const metadata: Metadata = {
  title: "Data Protection",
  description,
  alternates: { canonical: "/data-protection" },
};

export default function DataProtectionPage() {
  return (
    <LegalPage
      title="Data Protection"
      path="/data-protection"
      description={description}
      updated="2025-01-01"
    >
      <p>
        Monlooq is committed to protecting your personal data in accordance with
        applicable laws including GDPR and CCPA.
      </p>

      <h2>1. Data Controller</h2>
      <p>
        Monlooq Inc. acts as the data controller. Contact our Data Protection
        Officer at{" "}
        <a href="mailto:monlooq.app@gmail.com">monlooq.app@gmail.com</a>.
      </p>

      <h2>2. Your Rights</h2>
      <ul>
        <li>
          <strong>Right of Access:</strong> Request a copy of the personal data
          we hold about you.
        </li>
        <li>
          <strong>Right to Rectification:</strong> Ask us to correct inaccurate
          or incomplete data.
        </li>
        <li>
          <strong>Right to Erasure:</strong> Request deletion of your personal
          data.
        </li>
        <li>
          <strong>Right to Data Portability:</strong> Receive your data in a
          structured, machine-readable format.
        </li>
        <li>
          <strong>Right to Object:</strong> Object to processing for direct
          marketing at any time.
        </li>
      </ul>

      <h2>3. Data Security</h2>
      <p>
        We use end-to-end encryption in transit, AES-256 encryption at rest,
        regular penetration testing, and strict access controls. In the event of
        a breach, we notify the relevant authority within 72 hours.
      </p>

      <h2>4. California Privacy Rights (CCPA)</h2>
      <p>
        California residents may request to know, delete, or opt out of the sale
        of their data. Monlooq does not sell personal information.
      </p>

      <h2>5. Contact</h2>
      <p>
        Reach our Data Protection Officer at{" "}
        <a href="mailto:monlooq.app@gmail.com">monlooq.app@gmail.com</a>. We
        respond to all verified requests within 30 days.
      </p>
    </LegalPage>
  );
}
