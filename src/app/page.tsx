import {
  Community,
  ContactTeaser,
  Download,
  Faq,
  Features,
  Hero,
  Marquee,
  Maya,
} from "@/components/home/sections";
import { JsonLd } from "@/components/json-ld";
import { faqs } from "@/lib/content";
import { absoluteUrl, site } from "@/lib/site";

const appFeatures = [
  "Maya AI stylist chat",
  "AI outfit image generation and editing",
  "Virtual try-on on your own photo",
  "Digital closet and outfit planning",
  "Fashion communities, people and hashtags",
  "Vertical fashion reels feed",
  "Direct messages with disappearing messages",
  "Profile privacy controls, block and report",
  "Light and dark mode",
];

const homeLd = [
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": absoluteUrl("/#app"),
    name: site.name,
    description: site.description,
    url: site.url,
    applicationCategory: "LifestyleApplication",
    applicationSubCategory: "Fashion",
    operatingSystem: "iOS 15.6 or later, Android",
    contentRating: "13+",
    inLanguage: "en",
    image: absoluteUrl("/opengraph-image"),
    downloadUrl: [site.appStoreUrl, site.playStoreUrl],
    installUrl: [site.appStoreUrl, site.playStoreUrl],
    featureList: appFeatures,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": absoluteUrl("/#organization") },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Maya />
      <Features />
      <Community />
      <Faq />
      <Download />
      <ContactTeaser />
      <JsonLd data={homeLd} />
    </>
  );
}
