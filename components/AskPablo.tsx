"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

type Labels = {
  placeholder: string;
  suggestions: string[];
  disclaimer: string;
  send: string;
  error: string;
  limit: string;
  thinking: string;
  toolLabels: Record<string, string>;
};

const MAX_TURNS = 8;
const MAX_CHARS = 500;

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
    chunk.startsWith("**") && chunk.endsWith("**") ? (
      <strong key={i} className="font-medium text-fg">
        {chunk.slice(2, -2)}
      </strong>
    ) : (
      chunk
    ),
  );
}

function Markdownish({ text }: { text: string }) {
  const blocks = text.trim().split(/\n{2,}/);
  return (
    <div className="space-y-2.5">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        if (lines.every((l) => /^\s*[-*•]\s+/.test(l))) {
          return (
            <ul key={i} className="space-y-1.5">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  <span>{inline(l.replace(/^\s*[-*•]\s+/, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{inline(block.replace(/^#+\s*/gm, ""))}</p>;
      })}
    </div>
  );
}

export function AskPablo({ lang, labels }: { lang: Locale; labels: Labels }) {
  const [input, setInput] = useState("");
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat", body: { lang } }), [lang]);
  const { messages, sendMessage, status, error } = useChat({ transport });
  const scroller = useRef<HTMLDivElement>(null);

  const turns = messages.filter((m) => m.role === "user").length;
  const atLimit = turns >= MAX_TURNS;
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const send = (text: string) => {
    const value = text.trim().slice(0, MAX_CHARS);
    if (!value || busy || atLimit) return;
    sendMessage({ text: value });
    setInput("");
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-bg-elev shadow-[0_0_0_1px_rgb(255_255_255/0.02),0_30px_80px_-20px_rgb(0_0_0/0.6)]">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs text-fg-2">ask-pablo · tool-calling agent</span>
        </div>
        <span className="font-mono text-[11px] text-fg-3">
          {turns}/{MAX_TURNS}
        </span>
      </div>

      <div ref={scroller} className="h-[380px] overflow-y-auto px-4 py-5 sm:px-5" aria-live="polite">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col justify-end gap-2">
            {labels.suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                className="w-fit rounded-full border border-line px-3.5 py-2 text-left text-sm text-fg-2 transition hover:border-line-strong hover:text-fg"
              >
                {s}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            {messages.map((m) =>
              m.role === "user" ? (
                <div key={m.id} className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-md bg-fg px-4 py-2.5 text-sm text-bg">
                    {m.parts.map((p, i) => (p.type === "text" ? <span key={i}>{p.text}</span> : null))}
                  </div>
                </div>
              ) : (
                <div key={m.id} className="space-y-2 text-[15px] leading-relaxed text-fg-2">
                  {m.parts.map((p, i) => {
                    if (p.type === "text") return <Markdownish key={i} text={p.text} />;
                    if (p.type.startsWith("tool-")) {
                      const name = p.type.slice(5);
                      return (
                        <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-fg-3">
                          <span className="text-ai">ƒ</span>
                          {name}()
                          <span className="text-fg-3/70">· {labels.toolLabels[name] ?? name}</span>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              ),
            )}
            {status === "submitted" && <div className="font-mono text-xs text-fg-3">{labels.thinking}</div>}
            {error && <div className="text-sm text-red-400">{labels.error}</div>}
            {atLimit && !busy && <div className="text-sm text-fg-3">{labels.limit}</div>}
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex gap-2 border-t border-line p-3"
      >
        <label htmlFor="ask-input" className="sr-only">
          {labels.placeholder}
        </label>
        <input
          id="ask-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={labels.placeholder}
          maxLength={MAX_CHARS}
          disabled={atLimit}
          className="min-w-0 flex-1 rounded-lg bg-transparent px-3 py-2 text-sm text-fg placeholder:text-fg-3 focus:outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={busy || atLimit || !input.trim()}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition hover:brightness-110 disabled:opacity-40"
        >
          {labels.send}
        </button>
      </form>
      <p className="border-t border-line px-4 py-2.5 text-[11px] text-fg-3">{labels.disclaimer}</p>
    </div>
  );
}
