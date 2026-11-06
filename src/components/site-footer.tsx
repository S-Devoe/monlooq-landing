import Link from "next/link";

import { LooqWordmark } from "@/components/logo";
import { site } from "@/lib/site";

const columns = [
  {
    title: "App",
    links: [
      { href: "/#maya", label: "Maya AI stylist" },
      { href: "/#features", label: "Virtual try-on" },
      { href: "/#features", label: "Digital closet" },
      { href: "/#community", label: "Communities" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/contact", label: "Contact and support" },
      { href: "/#faq", label: "FAQ" },
      { href: `mailto:${site.email}`, label: site.email },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" },
      { href: "/data-protection", label: "Data Protection" },
    ],
  },
];

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.37-2.48V9.66a5.69 5.69 0 0 0-.77-.05 5.73 5.73 0 0 0-5.72 5.73A5.73 5.73 0 0 0 9.86 21a5.73 5.73 0 0 0 5.73-5.73V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.29-1.48Z" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t bg-card">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr]">
        <div className="max-w-sm">
          <LooqWordmark className="h-5 text-foreground" />
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            {site.tagline}. Free on iPhone and Android.
          </p>
          <div className="mt-6 flex gap-2">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener me"
              className="inline-flex size-10 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <InstagramIcon className="size-[1.1rem]" />
              <span className="sr-only">MonlooQ on Instagram</span>
            </a>
            <a
              href={site.socials.tiktok}
              target="_blank"
              rel="noopener me"
              className="inline-flex size-10 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <TikTokIcon className="size-[1.1rem]" />
              <span className="sr-only">MonlooQ on TikTok</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="eyebrow font-sans text-muted-foreground">
                {col.title}
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="break-words text-foreground/80 transition-colors hover:text-brand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="rule">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Made for people who love getting dressed.</p>
        </div>
      </div>
    </footer>
  );
}
