"use client";

import { Code2, Lock, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { skillGroups } from "../data";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Lock,
  Wrench,
  Code2,
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-y relative"
    >
      <div className="container-max section-padding">
        <Reveal>
          <p className="section-heading">
            <span aria-hidden className="h-px w-8 bg-accent" /> Skills
          </p>
          <h2 id="skills-heading" className="section-title">
            Toolbox &amp; technical strengths
          </h2>
          <p className="section-subtitle">
            A balanced mix of manual QA discipline, automation engineering, and
            offensive security skills.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? ShieldCheck;
            return (
              <Reveal key={group.title} delay={i * 0.08} className="h-full">
                <article className="card card-hover group relative flex h-full min-w-0 flex-col overflow-hidden p-4 sm:p-6 md:p-7">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-70"
                  />

                  <header className="mb-4 flex items-start justify-between gap-3 border-b border-border/40 pb-4 sm:mb-5">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-brand transition-all group-hover:-translate-y-0.5 group-hover:bg-accent/20 group-hover:shadow-glow-soft sm:h-11 sm:w-11">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-balance text-sm font-semibold leading-snug text-heading sm:text-lg">
                          {group.title}
                        </h3>
                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
                          {group.items.length} skills
                        </p>
                      </div>
                    </div>
                    <span
                      aria-hidden
                      className="rounded-lg border border-border/60 bg-surface/50 px-2 py-1 font-mono text-[11px] tabular-nums text-subtle"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </header>

                  <ul
                    className="flex flex-1 flex-wrap content-start gap-2"
                    aria-label={`${group.title} list`}
                  >
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="chip text-[11px] sm:text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
