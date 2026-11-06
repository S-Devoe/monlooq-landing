import type { Metadata, Viewport } from "next";
import { Mona_Sans } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

/** Body face: Mona Sans, as in the mobile app and the console. */
const monaSans = Mona_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

/**
 * Heading face: Degular Display, as in the app's headers. Demo cuts (66
 * glyphs), so Mona Sans is the per-glyph fallback. Only the weights the site
 * uses are shipped; each file is about 8 KB.
 */
const degular = localFont({
  src: [
    {
      path: "./fonts/DegularDisplayDemo-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/DegularDisplayDemo-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/DegularDisplayDemo-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DegularDisplayDemo-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/DegularDisplayDemo-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/DegularDisplayDemo-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/DegularDisplayDemo-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-degular",
  display: "swap",
  adjustFontFallback: false,
});

const title = `${site.name}: AI stylist, virtual try-on and digital closet`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "MonlooQ",
    "Monlooq app",
    "AI stylist",
    "AI outfit generator",
    "virtual try-on app",
    "digital closet",
    "wardrobe app",
    "outfit planner",
    "fashion community",
    "fashion app",
    "what to wear",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Lifestyle",
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.description,
    url: "/",
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // iOS Smart App Banner: "Open" when installed, "View" in the App Store when not.
  itunes: { appId: site.appStoreId },
  appLinks: {
    ios: { url: site.url, app_store_id: site.appStoreId, app_name: site.name },
    android: { package: site.androidPackage, app_name: site.name },
    web: { url: site.url, should_fallback: true },
  },
  other: { "google-play-app": `app-id=${site.androidPackage}` },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8f8" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1916" },
  ],
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: absoluteUrl("/android-chrome-512x512.png"),
      email: site.email,
      sameAs: [
        site.socials.instagram,
        site.socials.tiktok,
        site.appStoreUrl,
        site.playStoreUrl,
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.email,
        url: absoluteUrl("/contact"),
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: site.name,
      url: site.url,
      inLanguage: "en",
      publisher: { "@id": absoluteUrl("/#organization") },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(monaSans.variable, degular.variable, "antialiased")}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-foreground px-4 py-2 text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="monlooq-theme"
          disableTransitionOnChange
        >
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
        <JsonLd data={organizationLd} />
      </body>
    </html>
  );
}
