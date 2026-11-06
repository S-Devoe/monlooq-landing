"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { site } from "@/lib/site";

/**
 * "Open in MonlooQ". When an app link reaches the browser the app either is
 * not installed or the OS skipped verification, so the best we can do differs:
 *
 * - Android: an intent:// URL for the same https path opens the app when it is
 *   installed and falls back to the Play Store when it is not.
 * - iOS: a page cannot open its own universal link, so the Smart App Banner
 *   (set in metadata) offers "Open"; the button goes to the App Store.
 * - Desktop: show both stores, handled by the page around this button.
 */
export function OpenInAppButton({ path }: { path: string }) {
  const [href, setHref] = useState<string | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      const host = new URL(site.url).host;
      const fallback = encodeURIComponent(site.playStoreUrl);
      setHref(
        `intent://${host}${path}#Intent;scheme=https;package=${site.androidPackage};S.browser_fallback_url=${fallback};end`,
      );
    } else if (
      /iphone|ipad|ipod/i.test(ua) ||
      (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)
    ) {
      setHref(site.appStoreUrl);
    }
  }, [path]);

  if (!href) return null;

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-medium text-brand-foreground transition-transform hover:-translate-y-0.5"
    >
      Open in MonlooQ
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}
