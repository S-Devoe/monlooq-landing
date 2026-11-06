import { Menu } from "lucide-react";
import Link from "next/link";

import { LooqWordmark } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "/#maya", label: "Maya AI" },
  { href: "/#features", label: "Features" },
  { href: "/#community", label: "Community" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 rounded-md text-foreground"
          aria-label="MonlooQ home"
        >
          <LooqWordmark className="h-[1.05rem]" aria-hidden="true" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link
            href="/#download"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Get the app
          </Link>

          {/* No-JS mobile menu: a native disclosure, closed by following a link. */}
          <details className="group relative md:hidden">
            <summary className="inline-flex size-10 list-none items-center justify-center rounded-full hover:bg-secondary [&::-webkit-details-marker]:hidden">
              <Menu className="size-5" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-2 w-56 rounded-2xl border bg-card p-2 shadow-xl"
            >
              <ul className="text-sm">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-xl px-3 py-2.5 hover:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="rule mt-1 pt-1">
                  <Link
                    href="/#download"
                    className="block rounded-xl px-3 py-2.5 font-medium text-brand hover:bg-secondary"
                  >
                    Get the app
                  </Link>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
