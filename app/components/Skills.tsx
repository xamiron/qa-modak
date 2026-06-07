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
            const isWide = group.title === "Tools & Technologies";
            return (
              <Reveal
                key={group.title}
                delay={i * 0.08}
                className={isWide ? "md:col-span-2" : ""}
              >
                <div className="card card-hover group h-full p-5 sm:p-6 md:p-7">
                  <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-300 transition-all group-hover:bg-accent/20 group-hover:shadow-glow-accent sm:h-11 sm:w-11">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-zinc-100 sm:text-lg">
                        {group.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-border bg-surface/60 px-2.5 py-0.5 font-mono text-[10px] tabular-nums text-zinc-500">
                      {group.items.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={[
                          "chip text-[11px] sm:text-xs",
                          isWide ? "py-1" : "",
                        ].join(" ")}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
