import type { Metadata } from "next";

import { OpenInAppButton } from "@/components/deeplink/open-in-app-button";
import { LooqMark } from "@/components/logo";
import { StoreBadges } from "@/components/store-badges";
import { absoluteUrl, site } from "@/lib/site";

/** The app-link paths in apple-app-site-association and the Android manifest. */
export type DeepLinkKind = "post" | "community" | "user";

const copy: Record<DeepLinkKind, { title: string; body: string }> = {
  post: {
    title: "This look lives on MonlooQ",
    body: "Open the app to see the full post, the outfit details and what the community is saying.",
  },
  community: {
    title: "You are invited to a MonlooQ community",
    body: "Open the app to join, see the latest looks and talk style with people who share your taste.",
  },
  user: {
    title: "See this profile on MonlooQ",
    body: "Open the app to browse their looks, follow them and send a message.",
  },
};

/** Paths come from the URL; keep them to safe characters before reuse. */
export function deepLinkPath(prefix: string, slug: string[]) {
  const safe = slug.map((s) => {
    try {
      return encodeURIComponent(decodeURIComponent(s));
    } catch {
      return encodeURIComponent(s);
    }
  });
  return `/${prefix}/${safe.join("/")}`;
}

/**
 * Shared links are previewed in chats and social apps, but the pages are thin
 * placeholders for content that lives in the app, so they are kept out of the
 * index: noindex, follow.
 */
export function deepLinkMetadata(kind: DeepLinkKind, path: string): Metadata {
  const { title, body } = copy[kind];
  return {
    title,
    description: body,
    robots: { index: false, follow: true },
    alternates: { canonical: path },
    itunes: { appId: site.appStoreId, appArgument: absoluteUrl(path) },
    openGraph: { title, description: body, url: path, siteName: site.name },
    twitter: { card: "summary_large_image", title, description: body },
  };
}

export function DeepLinkPage({
  kind,
  path,
}: {
  kind: DeepLinkKind;
  path: string;
}) {
  const { title, body } = copy[kind];
  return (
    <section className="grain relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,var(--brand-soft),transparent)]"
      />
      <div className="container-x relative flex min-h-[70dvh] flex-col items-center justify-center py-20 text-center">
        <span className="grid size-20 place-items-center rounded-3xl bg-foreground text-background shadow-xl">
          <LooqMark className="size-10" aria-hidden="true" />
        </span>
        <h1 className="mt-10 max-w-2xl text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
          {body}
        </p>
        <div className="mt-10 flex flex-col items-center gap-6">
          <OpenInAppButton path={path} />
          <p className="eyebrow text-muted-foreground">
            Do not have MonlooQ yet? It is free
          </p>
          <StoreBadges className="justify-center" />
        </div>
      </div>
    </section>
  );
}
