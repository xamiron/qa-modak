"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

const DURATION_MS = 1800;

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
          className="fixed inset-0 z-[100] grid place-items-center bg-background px-5"
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
            <div className="flex items-center justify-between border-b border-border/60 bg-surface-2/60 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[11px] text-zinc-500">
                initializing_qa_profile.sh
              </span>
              <span aria-hidden className="w-10" />
            </div>

            {/* Body */}
            <div className="space-y-4 px-5 py-5 font-mono text-sm sm:px-6 sm:py-6">
              <p className="leading-relaxed text-zinc-200">
                <span className="text-accent-400">root@qa:~$</span>{" "}
                <span className="text-zinc-100">
                  ./initialize_portfolio.sh
                </span>
                <span
                  aria-hidden
                  className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 animate-pulse bg-accent"
                />
              </p>

              <div>
                <p className="mb-2.5 flex items-center justify-between gap-3 text-cyan-glow">
                  <span>
                    Loading QA Engineer Profile
                    <span className="inline-block animate-pulse">...</span>
                  </span>
                  <span className="text-[11px] tabular-nums text-zinc-500">
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
