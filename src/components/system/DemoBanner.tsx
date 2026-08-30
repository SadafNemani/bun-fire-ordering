"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Sparkles } from "lucide-react";
import { useHasMounted } from "@/hooks/useHasMounted";

const STORAGE_KEY = "bun-and-fire-demo-banner-dismissed";

function readDismissed(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(STORAGE_KEY) === "true";
}

export default function DemoBanner() {
  const hasMounted = useHasMounted();
  const [dismissed, setDismissed] = useState<boolean>(() => readDismissed());

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setDismissed(true);
  };

  if (!hasMounted || dismissed) return null;

  return (
    <div className="bg-charcoal relative z-70 flex items-center justify-center gap-3 px-4 py-2.5 text-center">
      <Sparkles className="text-accent hidden h-4 w-4 shrink-0 sm:block" />
      <p className="font-body text-surface text-[13px]">
        <span className="font-semibold">This is a concept demo</span> - no real orders are placed.{" "}
        <span className="hidden sm:inline">Like what you see?</span>{" "}
        <Link
          href="https://sadafnemani.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 font-bold underline underline-offset-2"
        >
          Let&apos;s talk
        </Link>
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="rounded-button text-surface/70 hover:bg-surface/10 hover:text-surface absolute right-4 flex h-6 w-6 shrink-0 items-center justify-center transition-colors"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
