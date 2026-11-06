import { ImageIcon, Send, Sparkles } from "lucide-react";

import { LooqMark } from "@/components/logo";

/**
 * A Maya AI conversation drawn in HTML rather than a screenshot: it costs no
 * image request, stays sharp at any density, follows the theme, and its text
 * is real text that crawlers can read. aria-hidden on the frame, since the
 * section copy around it already says what it shows.
 */
export function PhoneMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-[17.5rem] rounded-[2.75rem] border border-foreground/10 bg-foreground p-2.5 shadow-[0_40px_80px_-30px_oklch(0.3_0.1_36/0.45)] sm:w-[19rem]"
    >
      <div className="relative overflow-hidden rounded-[2.2rem] bg-background">
        {/* Status bar + notch */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[0.65rem] font-semibold">
          <span>9:41</span>
          <span className="absolute top-2 left-1/2 h-5 w-20 -translate-x-1/2 rounded-full bg-foreground" />
          <span className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-[2px] border border-current" />
          </span>
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-2.5 border-b px-4 py-3">
          <span className="grid size-8 place-items-center rounded-full bg-brand text-brand-foreground">
            <Sparkles className="size-4" />
          </span>
          <div className="leading-tight">
            <p className="font-heading text-sm font-semibold">Maya AI</p>
            <p className="text-[0.65rem] text-muted-foreground">
              Your personal stylist
            </p>
          </div>
          <LooqMark className="ml-auto size-4 text-muted-foreground" />
        </div>

        {/* Messages */}
        <div className="space-y-3 px-3.5 py-4 text-[0.72rem] leading-snug">
          <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-foreground px-3 py-2 text-background">
            Outdoor wedding on Saturday, 28 degrees. What should I wear?
          </p>
          <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-secondary px-3 py-2">
            <p>
              Go light and breezy. A sage linen midi, tan block heels so you do
              not sink into the lawn, and gold hoops.
            </p>
            <p className="mt-1.5">
              Your cream wrap from your closet works as the evening layer.
            </p>
          </div>

          {/* Look card */}
          <div className="max-w-[88%] rounded-2xl border bg-card p-2.5">
            <div className="grid grid-cols-3 gap-1.5">
              <span className="aspect-[3/4] rounded-lg bg-[oklch(0.78_0.05_150)]" />
              <span className="aspect-[3/4] rounded-lg bg-[oklch(0.72_0.08_60)]" />
              <span className="aspect-[3/4] rounded-lg bg-[oklch(0.93_0.03_85)]" />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="font-heading text-[0.75rem] font-semibold">
                Garden wedding look
              </p>
              <span className="rounded-full bg-brand px-2 py-0.5 text-[0.6rem] font-semibold text-brand-foreground">
                Try it on me
              </span>
            </div>
          </div>

          <p className="ml-auto max-w-[70%] rounded-2xl rounded-br-md bg-foreground px-3 py-2 text-background">
            Show it on me
          </p>
          <div className="flex w-14 items-center gap-1 rounded-2xl rounded-bl-md bg-secondary px-3 py-2.5">
            <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground" />
            <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground [animation-delay:150ms]" />
            <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground [animation-delay:300ms]" />
          </div>
        </div>

        {/* Composer */}
        <div className="flex items-center gap-2 border-t px-3 py-3">
          <ImageIcon className="size-4 text-muted-foreground" />
          <span className="flex-1 rounded-full bg-secondary px-3 py-1.5 text-[0.65rem] text-muted-foreground">
            Ask Maya anything about style
          </span>
          <span className="grid size-7 place-items-center rounded-full bg-brand text-brand-foreground">
            <Send className="size-3.5" />
          </span>
        </div>
        <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-foreground/80" />
      </div>
    </div>
  );
}
