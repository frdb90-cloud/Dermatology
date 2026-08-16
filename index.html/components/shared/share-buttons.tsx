"use client";

import { useState } from "react";
import { Link2, Check, Send } from "lucide-react";

/*
  Lightweight share row: native Web Share API when available (mobile
  browsers), graceful fallback to copy-link otherwise. No external
  share-widget dependency added — matches Phase constraint against
  unnecessary new packages.
*/
export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* user cancelled share — no action needed */
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;

  return (
    <div className="flex items-center gap-2">
      <a
        href={telegramShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="اشتراک‌گذاری در تلگرام"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
      </a>
      <button
        type="button"
        onClick={handleShare}
        aria-label="کپی لینک مقاله"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        {copied ? (
          <Check className="h-4 w-4 text-success" aria-hidden="true" />
        ) : (
          <Link2 className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}