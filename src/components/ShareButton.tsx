"use client";

import { useState } from "react";

interface ShareButtonProps {
  /** Path or URL to share (resolved against the current origin). */
  url: string;
  /** Share sheet text. */
  text: string;
  label?: string;
  className?: string;
  disabled?: boolean;
}

export function ShareButton({ url, text, label = "Share with a friend 🔗", className, disabled }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  async function onShare() {
    if (disabled) return;
    const full =
      typeof window !== "undefined" ? new URL(url, window.location.origin).toString() : url;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "compareme", text, url: full });
        return;
      } catch {
        /* user cancelled or unsupported — fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(full);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1900);
    } catch {
      window.prompt("Copy this link:", full);
    }
  }

  return (
    <span className="relative inline-block">
      <button type="button" onClick={onShare} disabled={disabled} className={className ?? "btn-primary"}>
        {label}
      </button>
      {copied && (
        <span className="toast absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border-2 border-[var(--ink)] bg-white px-3 py-1 text-sm font-semibold text-[var(--ink)] shadow-[2px_2px_0_var(--ink)]">
          Link copied! ✅
        </span>
      )}
    </span>
  );
}
