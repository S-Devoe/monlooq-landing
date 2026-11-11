import {
  ArrowUpRight,
  Clapperboard,
  Hash,
  MessageCircle,
  Moon,
  ShieldCheck,
  Shirt,
  Sparkles,
  UserRound,
  Users,
  Wand2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PhoneMockup } from "@/components/home/phone-mockup";
import crewPortrait from "@/components/monlooq-images/monlooq-eight.jpeg";
import collageTribe from "@/components/monlooq-images/monlooq-five.jpeg";
import friendsLaughing from "@/components/monlooq-images/monlooq-four.jpeg";
import communityCard from "@/components/monlooq-images/monlooq-nine.jpeg";
import collageEditorial from "@/components/monlooq-images/monlooq-one.jpeg";
import mayaScreen from "@/components/monlooq-images/monlooq-seven.jpeg";
import couplePhone from "@/components/monlooq-images/monlooq-three.jpeg";
import collageFeatures from "@/components/monlooq-images/monlooq-two.jpeg";
import { StoreBadges } from "@/components/store-badges";
import { faqs, features } from "@/lib/content";

/* ------------------------------------------------------------------ Hero */

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="grain relative overflow-hidden"
    >
      {/* Warm wash behind the phone; pure CSS, no image. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-[radial-gradient(closest-side,var(--brand-soft),transparent)] blur-2xl"
      />
      <div className="container-x relative grid items-center gap-14 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pt-24 lg:pb-28">
        <div>
          <p className="eyebrow animate-rise flex items-center gap-2 text-brand">
            <span className="h-px w-8 bg-brand" />
            Free on iPhone and Android
          </p>
          <h1
            id="hero-title"
            className="animate-rise stagger-1 mt-6 text-[clamp(2.9rem,8.5vw,6.4rem)] leading-[0.92] font-semibold tracking-[-0.035em]"
          >
            Your stylist,
            <br />
            closet and
            <br />
            <span className="font-light text-brand italic">community</span>
            <span className="text-brand">.</span>
          </h1>
          <p className="animate-rise stagger-2 mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
            MonlooQ turns your phone into a personal styling assistant. Ask Maya
            AI what to wear, try outfits on your own photo, organise your
            wardrobe, and find your people in a fashion community.
          </p>
          <StoreBadges className="animate-rise stagger-3 mt-9" size="lg" />
          <dl className="animate-rise stagger-4 mt-12 grid max-w-lg grid-cols-3 gap-6 border-t pt-6">
            {[
              ["Maya AI", "Stylist on call"],
              ["Try-on", "On your photo"],
              ["Free", "No paywall to start"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-heading text-xl font-semibold">{k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-rise stagger-3 relative">
          {/* Editorial photos tucked behind the phone. Decorative here; the
              same people appear with real alt text further down the page. */}
          <div
            aria-hidden="true"
            className="absolute top-4 right-0 hidden w-[50%] rotate-[5deg] overflow-hidden rounded-[2rem] shadow-2xl sm:block lg:right-[-6%]"
          >
            <Image
              src={crewPortrait}
              alt=""
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 hidden w-[42%] rotate-[-6deg] overflow-hidden rounded-[1.75rem] shadow-2xl sm:block lg:left-[-4%]"
          >
            <Image
              src={friendsLaughing}
              alt=""
              placeholder="blur"
              sizes="(min-width: 1024px) 18vw, 38vw"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
          <div className="animate-float relative z-10">
            <PhoneMockup />
          </div>
          {/* Editorial sticker */}
          <div
            aria-hidden="true"
            className="absolute top-6 left-[4%] z-20 hidden rotate-[-8deg] rounded-full border border-foreground bg-background px-4 py-2 font-heading text-sm font-semibold shadow-lg sm:block lg:left-[-2%]"
          >
            Meet Maya
          </div>
          <div
            aria-hidden="true"
            className="absolute right-[2%] bottom-16 z-20 hidden rotate-[6deg] rounded-2xl bg-brand px-4 py-3 text-brand-foreground shadow-xl sm:block lg:right-[-4%]"
          >
            <p className="eyebrow opacity-80">Try it on me</p>
            <p className="mt-1 font-heading text-lg font-semibold">
              See the fit first
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Marquee */

const strip = [
  "AI stylist",
  "Virtual try-on",
  "Digital closet",
  "Outfit planning",
  "Fashion reels",
  "Communities",
  "Hashtags",
  "Direct messages",
];

export function Marquee() {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {strip.map((s) => (
        <li
          key={s}
          className="flex items-center gap-10 font-heading text-2xl font-medium whitespace-nowrap sm:text-3xl"
        >
          {s}
          <span className="size-2 rounded-full bg-brand" />
        </li>
      ))}
    </ul>
  );
  return (
    <section
      aria-label="What MonlooQ does"
      className="overflow-hidden border-y bg-foreground py-5 text-background"
    >
      <div className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Maya */

const mayaModes = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Style chat",
    body: "Outfit ideas, fit advice, colour and fabric questions, occasion planning and capsule wardrobes. Ask her to build a look from your own closet.",
  },
  {
    n: "02",
    icon: Wand2,
    title: "Image mode",
    body: "Describe an outfit and watch it come together. Generate new looks, change a colour, swap an accessory or restyle a photo.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Try it on me",
    body: "Add your photo and the piece you want. Maya dresses you in it and keeps your face, proportions and pose exactly as they are.",
  },
];

export function Maya() {
  return (
    <section
      id="maya"
      aria-labelledby="maya-title"
      className="container-x py-24 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-brand">Meet Maya, your AI stylist</p>
          <h2
            id="maya-title"
            className="mt-5 text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl"
          >
            An honest opinion on what to wear{" "}
            <span className="font-light italic">today</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
            Maya is a personal style assistant inside MonlooQ. She is specific
            about colour, silhouette, fabric and occasion, not generic, and she
            works with the clothes you already own.
          </p>
          <Image
            src={mayaScreen}
            alt="Maya AI in the MonlooQ app asking what you are dressing for, with looks for work, date night, travel and events"
            placeholder="blur"
            sizes="(min-width: 1024px) 28rem, (min-width: 640px) 28rem, 100vw"
            className="mt-10 aspect-square h-auto w-full max-w-md rounded-3xl object-cover shadow-xl"
          />
        </div>

        <ol className="divide-y border-y">
          {mayaModes.map((m) => (
            <li
              key={m.n}
              className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 py-9 sm:grid-cols-[5rem_1fr_auto]"
            >
              <span className="font-heading text-sm font-medium text-muted-foreground">
                {m.n}
              </span>
              <div>
                <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-brand">
                  {m.title}
                </h3>
                <p className="mt-3 max-w-lg leading-7 text-muted-foreground">
                  {m.body}
                </p>
              </div>
              <m.icon
                aria-hidden="true"
                className="hidden size-7 text-brand sm:block"
                strokeWidth={1.5}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Features */

const featureIcons = {
  "try-on": Sparkles,
  closet: Shirt,
  reels: Clapperboard,
  chat: MessageCircle,
  privacy: ShieldCheck,
  dark: Moon,
} as const;

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="border-t bg-card py-24 lg:py-32"
    >
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-brand">Everything in one app</p>
            <h2
              id="features-title"
              className="mt-5 max-w-2xl text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl"
            >
              Plan it, try it, wear it, share it
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-muted-foreground">
            A digital wardrobe, a try-on studio and a social feed, built to work
            together so your next outfit finds you.
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = featureIcons[f.id];
            const lead = i === 0;
            return (
              <li
                key={f.id}
                className={
                  lead
                    ? "flex flex-col bg-brand p-8 text-brand-foreground lg:p-10"
                    : "flex flex-col bg-card p-8 lg:p-10"
                }
              >
                <Icon
                  aria-hidden="true"
                  className={lead ? "size-7" : "size-7 text-brand"}
                  strokeWidth={1.5}
                />
                <p
                  className={
                    lead
                      ? "eyebrow mt-10 opacity-80"
                      : "eyebrow mt-10 text-muted-foreground"
                  }
                >
                  {f.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl leading-tight font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p
                  className={
                    lead
                      ? "mt-3 leading-7 opacity-90"
                      : "mt-3 leading-7 text-muted-foreground"
                  }
                >
                  {f.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Lookbook */

export function Lookbook() {
  return (
    <section
      id="lookbook"
      aria-labelledby="lookbook-title"
      className="container-x py-24 lg:py-32"
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow text-brand">Lookbook</p>
          <h2
            id="lookbook-title"
            className="mt-5 max-w-3xl text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl"
          >
            Style that starts in your{" "}
            <span className="font-light text-brand italic">pocket</span>
          </h2>
        </div>
        <p className="max-w-sm leading-7 text-muted-foreground">
          Build your closet, ask Maya for a look and share it with people who
          dress like you.
        </p>
      </div>

      <figure className="mt-14 overflow-hidden rounded-[2rem] border">
        <Image
          src={collageEditorial}
          alt="MonlooQ lookbook: tailored neutrals, a rust overcoat, outfits arranged on a phone, a clothing rail and the closet on laptop and phone"
          placeholder="blur"
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="h-auto w-full"
        />
      </figure>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <figure className="overflow-hidden rounded-[2rem] border">
          <Image
            src={collageFeatures}
            alt="MonlooQ features: build your digital closet, an AI stylist for every occasion, outfit inspiration and a global fashion community"
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-auto w-full"
          />
        </figure>
        <figure className="overflow-hidden rounded-[2rem] border">
          <Image
            src={collageTribe}
            alt="MonlooQ screens: your digital wardrobe, an AI stylist in your pocket and style communities such as streetwear, luxury, Afrocentric and minimalist"
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Community */

const discover = [
  { icon: Shirt, label: "Looks", body: "Trending outfits from the community" },
  {
    icon: UserRound,
    label: "People",
    body: "Accounts whose style inspires you",
  },
  {
    icon: Users,
    label: "Communities",
    body: "Built around styles, trends and interests",
  },
  { icon: Hash, label: "Hashtags", body: "Follow a vibe, not just a person" },
];

const tags = [
  "#streetstyle",
  "#capsulewardrobe",
  "#ootd",
  "#thriftfinds",
  "#weddingguest",
  "#officewear",
  "#y2k",
  "#minimal",
];

export function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-title"
      className="container-x py-24 lg:py-32"
    >
      <p className="eyebrow text-brand">Discover</p>
      <h2
        id="community-title"
        className="mt-5 max-w-4xl text-5xl leading-[0.95] font-semibold tracking-tight sm:text-7xl"
      >
        Looks, people and communities that{" "}
        <span className="font-light text-brand italic">get your style</span>
      </h2>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        <Image
          src={communityCard}
          alt="A group of friends laughing together, with a MonlooQ prompt to join a community and share looks"
          placeholder="blur"
          sizes="(min-width: 640px) 50vw, 100vw"
          className="aspect-square h-auto w-full rounded-[2rem] object-cover"
        />
        <Image
          src={couplePhone}
          alt="Two friends browsing outfits together on a phone"
          placeholder="blur"
          sizes="(min-width: 640px) 50vw, 100vw"
          className="aspect-square h-auto w-full rounded-[2rem] object-cover"
        />
      </div>

      <ul className="mt-16 grid border-t sm:grid-cols-2 lg:grid-cols-4">
        {discover.map((d) => (
          <li
            key={d.label}
            className="border-b py-8 sm:pr-8 lg:border-r lg:border-b-0 lg:pl-8 lg:first:pl-0 lg:last:border-r-0"
          >
            <d.icon
              aria-hidden="true"
              className="size-6 text-brand"
              strokeWidth={1.5}
            />
            <h3 className="mt-6 text-3xl font-semibold tracking-tight">
              {d.label}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {d.body}
            </p>
          </li>
        ))}
      </ul>

      <ul
        aria-label="Popular hashtags"
        className="mt-12 flex flex-wrap gap-2.5"
      >
        {tags.map((t) => (
          <li
            key={t}
            className="rounded-full border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-brand"
          >
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------- FAQ */

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-t bg-card py-24 lg:py-32"
    >
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <p className="eyebrow text-brand">Questions</p>
          <h2
            id="faq-title"
            className="mt-5 text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl"
          >
            Frequently asked
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-muted-foreground">
            Cannot find what you need?{" "}
            <Link
              href="/contact"
              className="font-medium text-foreground underline decoration-brand underline-offset-4"
            >
              Send us a message
            </Link>
            .
          </p>
        </div>

        {/* Native disclosure: answers are in the HTML for crawlers and work without JS. */}
        <div className="divide-y border-y">
          {faqs.map((f, i) => (
            <details key={f.q} className="group py-1" open={i === 0}>
              <summary className="flex list-none items-center justify-between gap-6 py-5 text-left text-lg font-medium [&::-webkit-details-marker]:hidden">
                <h3 className="font-sans">{f.q}</h3>
                <span
                  aria-hidden="true"
                  className="relative size-5 shrink-0 text-brand before:absolute before:top-1/2 before:left-0 before:h-px before:w-5 before:bg-current after:absolute after:top-0 after:left-1/2 after:h-5 after:w-px after:bg-current after:transition-transform after:duration-300 group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-2xl pb-6 leading-7 text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Download */

export function Download() {
  return (
    <section
      id="download"
      aria-labelledby="download-title"
      className="container-x py-24 lg:py-32"
    >
      <div className="grain relative overflow-hidden rounded-[2rem] bg-foreground px-6 py-16 text-background sm:px-12 lg:px-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-40 size-[30rem] rounded-full bg-brand/40 blur-3xl"
        />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow text-brand">Download MonlooQ</p>
            <h2
              id="download-title"
              className="mt-5 text-5xl leading-[0.95] font-semibold tracking-tight sm:text-7xl"
            >
              Let your next outfit{" "}
              <span className="font-light italic">find you</span>
            </h2>
            <p className="mt-6 max-w-lg leading-7 opacity-75">
              Free on the App Store and Google Play. Set up your closet in a few
              minutes and ask Maya for your first look.
            </p>
          </div>
          <StoreBadges size="lg" tone="inverse" className="lg:justify-end" />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Contact teaser */

export function ContactTeaser() {
  return (
    <section aria-labelledby="contact-teaser" className="container-x pb-24">
      <Link
        href="/contact"
        className="group flex flex-col justify-between gap-6 border-t pt-10 sm:flex-row sm:items-center"
      >
        <div>
          <p className="eyebrow text-muted-foreground">Support</p>
          <h2
            id="contact-teaser"
            className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Need a hand? Talk to us
          </h2>
        </div>
        <span className="inline-flex size-16 items-center justify-center rounded-full border transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground">
          <ArrowUpRight className="size-6" aria-hidden="true" />
          <span className="sr-only">Go to the contact page</span>
        </span>
      </Link>
    </section>
  );
}
