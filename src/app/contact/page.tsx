import { Mail, MessageSquareWarning, Timer } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/app/contact/contact-form";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, site } from "@/lib/site";

const description =
  "Get help with the MonlooQ app, your account, privacy, partnerships or press. Send the MonlooQ team a message and we will reply by email.";

export const metadata: Metadata = {
  title: "Contact and support",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact and support | ${site.name}`,
    description,
    url: "/contact",
  },
};

const ways = [
  {
    icon: Mail,
    title: "Email",
    body: (
      <a
        href={`mailto:${site.email}`}
        className="font-medium text-foreground underline decoration-brand underline-offset-4"
      >
        {site.email}
      </a>
    ),
  },
  {
    icon: MessageSquareWarning,
    title: "Inside the app",
    body: "Signed in? Use Report a Problem in the app and attach a screenshot.",
  },
  {
    icon: Timer,
    title: "Reply time",
    body: "Usually within two working days, by email.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="container-x grid gap-14 py-16 lg:grid-cols-[1fr_1.35fr] lg:gap-20 lg:py-24">
        <div>
          <p className="eyebrow text-brand">Contact and support</p>
          <h1 className="mt-5 text-5xl leading-[0.95] font-semibold tracking-tight sm:text-7xl">
            Talk to the{" "}
            <span className="font-light text-brand italic">MonlooQ</span> team
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
            Questions about the app, trouble signing in, a privacy request or a
            partnership idea. Send it here and a real person will get back to
            you.
          </p>

          <ul className="mt-12 divide-y border-y">
            {ways.map((w) => (
              <li key={w.title} className="flex gap-4 py-5">
                <w.icon
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-brand"
                  strokeWidth={1.6}
                />
                <div>
                  <h2 className="font-sans text-sm font-semibold">{w.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {w.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:pt-4">
          <ContactForm />
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${site.name}`,
          url: absoluteUrl("/contact"),
          description,
          about: { "@id": absoluteUrl("/#organization") },
        }}
      />
    </>
  );
}
