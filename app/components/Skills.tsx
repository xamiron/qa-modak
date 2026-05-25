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

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? ShieldCheck;
            return (
              <Reveal key={group.title} delay={i * 0.08}>
                <div className="card card-hover group h-full p-6 md:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-300 transition-all group-hover:bg-accent/20 group-hover:shadow-glow-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
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
