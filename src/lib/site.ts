/** Single source of truth for brand facts used in copy, metadata and JSON-LD. */
export const site = {
  name: "MonlooQ",
  legalName: "Monlooq",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://monlooq.com").replace(
    /\/$/,
    "",
  ),
  tagline: "Your AI stylist, digital closet and fashion community",
  description:
    "MonlooQ is a free fashion app for iPhone and Android. Chat with Maya, your AI stylist, try outfits on your own photo, organise your wardrobe in a digital closet, and discover looks from a community of fashion lovers.",
  email: "support@monlooq.com",
  appStoreId: "6804466911",
  appStoreUrl: "https://apps.apple.com/us/app/monlooq/id6804466911",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.monlooq.app",
  androidPackage: "com.monlooq.app",
  socials: {
    instagram: "https://www.instagram.com/monlooq",
    tiktok: "https://www.tiktok.com/@monlooq",
  },
  locale: "en_US",
} as const;

export const absoluteUrl = (path = "/") =>
  `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
