"use client";

import { useState } from "react";

export function CopyEmail({ email, copy, copied }: { email: string; copy: string; copied: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
      className="rounded-lg px-5 py-3 text-sm font-medium text-fg ring-1 ring-line-strong transition hover:bg-white/5"
    >
      {done ? copied : copy}
    </button>
  );
}
