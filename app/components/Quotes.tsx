"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { quotes } from "../data";

const ROTATE_MS = 6500;

export default function Quotes() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();

  const goTo = useCallback((i: number) => {
    setIndex(((i % quotes.length) + quotes.length) % quotes.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, [paused]);

  const current = quotes[index];

  return (
    <section
      id="philosophy"
      aria-label="Philosophy and testing quotes"
      className="section-y relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade blur-3xl opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div
        className="container-max section-padding"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-heading-center">
            <span aria-hidden className="h-px w-8 bg-accent" /> Philosophy
            <span aria-hidden className="h-px w-8 bg-accent" />
          </p>

          <div className="relative mt-8 min-h-[260px] sm:min-h-[240px] md:min-h-[220px]">
            <Quote
              aria-hidden
              className="mx-auto h-10 w-10 text-accent-400/60 md:h-12 md:w-12"
            />

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-6"
              >
                <p className="text-balance text-xl font-medium leading-relaxed text-zinc-100 sm:text-2xl md:text-3xl md:leading-snug">
                  <span aria-hidden className="text-accent-400">&ldquo;</span>
                  {current.text}
                  <span aria-hidden className="text-accent-400">&rdquo;</span>
                </p>

                <footer className="mt-6 flex flex-col items-center gap-0.5">
                  <cite className="not-italic text-sm font-semibold tracking-wide text-accent-300">
                    {current.author}
                  </cite>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    {current.role}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div
            role="tablist"
            aria-label="Select a quote"
            className="mt-10 flex items-center justify-center gap-1"
          >
            {quotes.map((q, i) => {
              const active = i === index;
              return (
                <button
                  key={q.author + i}
                  role="tab"
                  aria-selected={active}
                  aria-label={`Quote ${i + 1} by ${q.author}`}
                  onClick={() => goTo(i)}
                  className="group inline-flex h-8 items-center justify-center px-2"
                >
                  <span
                    aria-hidden
                    className={[
                      "block h-1.5 rounded-full transition-all duration-500",
                      active
                        ? "w-8 bg-accent shadow-glow-accent"
                        : "w-1.5 bg-zinc-700 group-hover:bg-zinc-500",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
