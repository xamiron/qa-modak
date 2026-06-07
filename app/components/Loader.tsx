"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

const DURATION_MS = 1100;

export default function Loader() {
  const prefersReduced = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (prefersReduced) {
      setVisible(false);
      return;
    }

    // Lock body scroll while loader is visible
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / DURATION_MS) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        // Brief hold at 100% before fading out
        setTimeout(() => setVisible(false), 250);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = original;
    };
  }, [prefersReduced]);

  // Restore scroll once hidden (in case timer was cancelled mid-run)
  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-background px-4 sm:px-5"
        >
          {/* Ambient background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade blur-3xl opacity-70" />
          </div>

          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-accent/5"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border/60 bg-surface-2/60 px-3 py-2.5 sm:px-4">
              <div className="flex flex-shrink-0 items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500 ring-1 ring-inset ring-rose-300/40 shadow-[0_0_6px_rgba(244,63,94,0.45)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400 ring-1 ring-inset ring-amber-200/40 shadow-[0_0_6px_rgba(251,191,36,0.45)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-1 ring-inset ring-emerald-300/40 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
              </div>
              <span className="flex-1 truncate text-center font-mono text-[10px] text-subtle sm:text-[11px]">
                <span className="sm:hidden">init.sh</span>
                <span className="hidden sm:inline">
                  initializing_qa_profile.sh
                </span>
              </span>
              <span aria-hidden className="w-6 flex-shrink-0 sm:w-10" />
            </div>

            {/* Body */}
            <div className="space-y-4 px-4 py-4 font-mono text-[13px] sm:px-6 sm:py-6 sm:text-sm">
              <p className="break-all leading-relaxed text-emphasis">
                <span className="text-accent-brand">root@qa:~$</span>{" "}
                <span className="text-heading">
                  ./initialize_portfolio.sh
                </span>
                <span
                  aria-hidden
                  className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 animate-pulse bg-accent"
                />
              </p>

              <div>
                <p className="mb-2.5 flex items-center justify-between gap-3 text-[12px] text-cyan-glow sm:text-sm">
                  <span className="truncate">
                    Loading QA Profile
                    <span className="inline-block animate-pulse">...</span>
                  </span>
                  <span className="flex-shrink-0 text-[11px] tabular-nums text-subtle">
                    {Math.floor(progress)}%
                  </span>
                </p>
                <div
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.floor(progress)}
                  className="relative h-1 w-full overflow-hidden rounded-full bg-surface-2/80"
                >
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent via-accent-300 to-cyan-glow shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.08, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
