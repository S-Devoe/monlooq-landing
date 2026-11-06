/**
 * Marketing copy. Every claim here is taken from the App Store listing or the
 * API's actual feature set; keep it that way. Search engines and AI answer
 * engines quote this text, so anything aspirational belongs nowhere near it.
 */

export const faqs: { q: string; a: string }[] = [
  {
    q: "What is MonlooQ?",
    a: "MonlooQ is a free fashion app for iPhone and Android that combines an AI stylist, a digital wardrobe and a fashion community. You can chat with Maya AI for outfit ideas, try looks on your own photo, organise your clothes in a digital closet, and discover what other people are wearing.",
  },
  {
    q: "Is MonlooQ free?",
    a: "Yes. MonlooQ is free to download on the App Store and on Google Play.",
  },
  {
    q: "Who is Maya AI?",
    a: "Maya is the personal stylist built into MonlooQ. In style chat she gives outfit ideas, fit, colour and fabric advice, and help planning what to wear for an occasion, including looks built from pieces already in your closet. In image mode she can generate outfit images, edit a photo, and dress you in a garment from another picture.",
  },
  {
    q: "How does virtual try-on work?",
    a: "Upload a photo of yourself and the piece or full look you want to try. Maya places the clothing on you while keeping your face, body proportions and pose, so you get a realistic sense of how it will look before you buy it.",
  },
  {
    q: "Can I organise my wardrobe in MonlooQ?",
    a: "Yes. Save your clothes into a digital closet you can browse and search, multi-select pieces to plan outfits, save favourites and revisit past looks at any time.",
  },
  {
    q: "What can I find in the MonlooQ community?",
    a: "Explore Looks, People, Communities and Hashtags. Join communities built around styles and trends, follow accounts that inspire you, scroll a vertical feed of fashion reels and message other members directly, including disappearing messages.",
  },
  {
    q: "Which phones does MonlooQ support?",
    a: "MonlooQ runs on iPhone with iOS 15.6 or later, available on the App Store, and on Android phones through Google Play.",
  },
  {
    q: "How does MonlooQ protect my privacy?",
    a: "You choose who can see your profile, manage your notification preferences, and can block or report any account at any time. Safety tips are built into the app. Our Privacy Policy explains what we collect and why.",
  },
  {
    q: "How do I contact MonlooQ support?",
    a: "Use the contact form on monlooq.com/contact or email support@monlooq.com. Signed-in members can also send a report from Report a Problem inside the app.",
  },
];

export const features = [
  {
    id: "try-on",
    eyebrow: "Virtual try-on",
    title: "See it on you before you buy it",
    body: "Try single pieces or full looks on your own photo. No more guessing how something will actually fit.",
  },
  {
    id: "closet",
    eyebrow: "Digital closet",
    title: "Your closet, organised",
    body: "Browse and search everything you own, multi-select pieces to plan outfits, and revisit past looks whenever you like.",
  },
  {
    id: "reels",
    eyebrow: "Reels",
    title: "A feed made for fashion",
    body: "Swipe through outfit inspiration, styling tips and community content in one vertical feed.",
  },
  {
    id: "chat",
    eyebrow: "Messages",
    title: "Chat and connect",
    body: "Message friends and fellow fashion lovers. Share photos, links and files, or send disappearing messages.",
  },
  {
    id: "privacy",
    eyebrow: "Privacy",
    title: "Built with privacy in mind",
    body: "Control who sees your profile and what notifies you. Block or report any account at any time.",
  },
  {
    id: "dark",
    eyebrow: "Light and dark",
    title: "Style the app, too",
    body: "Light or dark mode, your choice, the same way you choose your outfit.",
  },
] as const;
