"use client";

import { ShieldCheck } from "lucide-react";
import { personal } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/30">
      <div className="container-max section-padding flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-accent/30 bg-accent/10 text-accent-400">
            <ShieldCheck className="h-3.5 w-3.5" />
          </span>
          <span className="font-mono">
            sabuj<span className="text-accent-400">.qa</span>
          </span>
        </div>

        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} {personal.name}. Crafted with care.
        </p>

        <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
          Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
