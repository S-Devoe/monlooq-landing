"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Light / dark switch. Both icons are rendered and swapped in CSS off the
 * `.dark` class, so there is no hydration mismatch and no flash while
 * next-themes resolves the stored preference.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      aria-label="Toggle dark mode"
    >
      <Sun className="size-[1.1rem] dark:hidden" aria-hidden="true" />
      <Moon className="hidden size-[1.1rem] dark:block" aria-hidden="true" />
    </button>
  );
}
