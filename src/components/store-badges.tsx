import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function AppleGlyph(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayGlyph(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <path
        fill="#00d7fe"
        d="M47 22c-9 5-15 15-15 28v412c0 13 6 23 15 28l236-234z"
      />
      <path fill="#ffce00" d="m362 335-79-79 79-79 95 54c27 15 27 40 0 55z" />
      <path fill="#ff3a44" d="M47 490c8 5 19 5 31-2l284-153-79-79z" />
      <path fill="#00f076" d="M78 24C66 17 55 17 47 22l236 234 79-79z" />
    </svg>
  );
}

type Props = {
  className?: string;
  size?: "md" | "lg";
  /** "inverse" for use on an ink background. */
  tone?: "default" | "inverse";
};

/**
 * Store links. Real anchors with the platform named in the accessible text, so
 * crawlers and screen readers see "Download MonlooQ on the App Store" rather
 * than an image badge.
 */
export function StoreBadges({
  className,
  size = "md",
  tone = "default",
}: Props) {
  const inv = tone === "inverse";
  const base =
    "group inline-flex items-center gap-3 rounded-2xl border transition-[transform,background-color,border-color] duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2";
  const pad = size === "lg" ? "px-5 py-3.5" : "px-4 py-3";
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={site.appStoreUrl}
        target="_blank"
        rel="noopener"
        className={cn(
          base,
          pad,
          inv
            ? "border-background bg-background text-foreground hover:bg-background/90"
            : "border-foreground bg-foreground text-background hover:bg-foreground/90",
        )}
      >
        <AppleGlyph className="size-6 shrink-0" />
        <span className="flex flex-col leading-none">
          <span className="text-[0.65rem] opacity-75">
            Download on the
            <span className="sr-only"> {site.name} app from the</span>
          </span>
          <span className="mt-1 text-base font-semibold">App Store</span>
        </span>
      </a>
      <a
        href={site.playStoreUrl}
        target="_blank"
        rel="noopener"
        className={cn(
          base,
          pad,
          inv
            ? "border-background/50 bg-transparent text-background hover:border-background"
            : "border-foreground/80 bg-card text-foreground hover:border-foreground",
        )}
      >
        <PlayGlyph className="size-6 shrink-0" />
        <span className="flex flex-col leading-none">
          <span className="text-[0.65rem] opacity-75">
            Get it on<span className="sr-only"> {site.name} from</span>
          </span>
          <span className="mt-1 text-base font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
