"use client";

import {
  Fingerprint,
  Landmark,
  Network,
  ScanFace,
  ShoppingCart,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { domains } from "../data";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Fingerprint,
  ShoppingCart,
  Network,
  ScanFace,
  Zap,
};

export default function Domains() {
  return (
    <section
      id="domains"
      aria-labelledby="domains-heading"
      className="section-y relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-glow/5 blur-[120px]" />
      </div>

      <div className="container-max section-padding">
        <Reveal>
          <p className="section-heading">
            <span aria-hidden className="h-px w-8 bg-accent" /> Domains
          </p>
          <h2 id="domains-heading" className="section-title">
            Industries I&apos;ve tested in
          </h2>
          <p className="section-subtitle">
            Practical domain knowledge across regulated, transactional, and
            hardware-integrated products.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => {
            const Icon = iconMap[d.icon] ?? Landmark;
            return (
              <Reveal key={d.title} delay={i * 0.06}>
                <div className="card card-hover group relative h-full overflow-hidden p-6">
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  />

                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-300 transition-transform group-hover:-translate-y-0.5">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {d.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
