"use client";

import { Briefcase, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import RichText from "./RichText";
import { experience } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-y relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-[700px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container-max section-padding">
        <Reveal>
          <p className="section-heading">
            <span aria-hidden className="h-px w-8 bg-accent" /> Experience
          </p>
          <h2 id="experience-heading" className="section-title">
            A track record across QA roles
          </h2>
          <p className="section-subtitle">
            Two years of full-cycle testing in fintech, enterprise, and mobile
            products, from manual cases to security audits.
          </p>
        </Reveal>

        <div className="relative mt-8">
          <div
            aria-hidden
            className="absolute left-[15px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:block"
          />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.1}>
                <div className="relative md:pl-16">
                  <div className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-surface text-accent-300 shadow-glow-soft md:flex">
                    <Briefcase aria-hidden className="h-4 w-4" />
                  </div>

                  <article className="card card-hover p-4 sm:p-6 md:p-7">
                    <header className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-balance text-lg font-semibold text-zinc-100 sm:text-xl">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-accent-300">
                          {exp.company}
                        </p>
                      </div>
                      <div className="sm:text-right">
                        <p className="font-mono text-xs text-zinc-400">
                          {exp.period}
                        </p>
                        <p className="mt-1 inline-flex items-center gap-1 text-xs text-zinc-500">
                          <MapPin aria-hidden className="h-3 w-3" />
                          {exp.location}
                        </p>
                      </div>
                    </header>

                    <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                          <RichText text={b} />
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.stack.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
