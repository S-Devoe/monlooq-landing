import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";

const description =
  "How MonlooQ uses cookies and similar technologies on monlooq.com and in the MonlooQ app, and how to manage them.";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description,
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookies"
      description={description}
      updated="2025-01-01"
    >
      <p>
        This Cookie Policy explains how Monlooq uses cookies and similar
        tracking technologies when you visit our website or use our mobile
        application.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device to help us recognise
        you, remember your preferences, and improve your overall experience.
      </p>

      <h2>2. Types of Cookies We Use</h2>
      <p>
        <strong>Strictly Necessary:</strong> Essential for the app to function.
        Cannot be opted out.
      </p>
      <p>
        <strong>Performance &amp; Analytics:</strong> Collect anonymous usage
        data to improve our services.
      </p>
      <p>
        <strong>Functional:</strong> Remember your preferences and
        personalisation choices.
      </p>
      <p>
        <strong>Marketing &amp; Targeting:</strong> Track browsing habits to
        deliver relevant ads.
      </p>
      <p>
        <strong>Social Media:</strong> Set by social platforms when you use
        sharing features.
      </p>

      <h2>3. Managing Cookies</h2>
      <p>
        You can manage cookies through your browser settings or via{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Google Analytics opt-out
        </a>
        . In the app, go to Settings &gt; Privacy.
      </p>

      <h2>4. Contact Us</h2>
      <p>
        Questions about cookies? Email{" "}
        <a href="mailto:monlooq.app@gmail.com">monlooq.app@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
