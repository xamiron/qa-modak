"use client";

import { Fragment } from "react";

type Props = {
  /** Plain string with `**bold**` segments, rendered as `<strong>` with accent color. */
  text: string;
  className?: string;
};

/**
 * Lightweight inline renderer that turns `**word**` segments into emphasized
 * `<strong>` tags. Intentionally minimal: no nested or unbalanced markers.
 */
export default function RichText({ text, className }: Props) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong
              key={i}
              className="font-semibold text-zinc-100"
            >
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </span>
  );
}
