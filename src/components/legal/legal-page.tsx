import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, site } from "@/lib/site";

const legalNav = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/data-protection", label: "Data Protection" },
];

export function LegalPage({
  title,
  path,
  description,
  updated,
  children,
}: {
  title: string;
  path: string;
  description: string;
  /** ISO date, e.g. 2025-01-01 */
  updated: string;
  children: React.ReactNode;
}) {
  const updatedLabel = new Date(updated).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  return (
    <div className="container-x grid gap-12 py-16 lg:grid-cols-[14rem_1fr] lg:gap-20 lg:py-24">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow text-muted-foreground">Legal</p>
        <nav aria-label="Legal" className="mt-5">
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={l.href === path ? "page" : undefined}
                  className="block rounded-full border px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:border-foreground aria-[current=page]:text-foreground lg:rounded-lg lg:border-transparent lg:px-3 lg:aria-[current=page]:border-border lg:aria-[current=page]:bg-card"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <article className="max-w-3xl">
        <header className="border-b pb-8">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated{" "}
            <time dateTime={updated} className="font-medium text-foreground">
              {updatedLabel}
            </time>
          </p>
        </header>
        <div className="prose-legal mt-8">{children}</div>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${title} | ${site.name}`,
          url: absoluteUrl(path),
          description,
          dateModified: updated,
          isPartOf: { "@id": absoluteUrl("/#website") },
          publisher: { "@id": absoluteUrl("/#organization") },
        }}
      />
    </div>
  );
}
