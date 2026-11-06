import type { MetadataRoute } from "next";

import { absoluteUrl, site } from "@/lib/site";

/**
 * Open to search engines and to AI answer engines alike: being quotable by
 * ChatGPT, Claude, Perplexity and Google's AI features is part of the point.
 * They are named explicitly so a future blanket rule cannot shut them out by
 * accident.
 */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: site.url,
  };
}
