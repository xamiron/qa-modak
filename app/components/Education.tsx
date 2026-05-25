"use client";

import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { education } from "../data";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section-y relative"
    >
      <div className="container-max section-padding">
        <Reveal>
          <p className="section-heading">
            <span aria-hidden className="h-px w-8 bg-accent" /> Education
          </p>
          <h2 id="education-heading" className="section-title">
            Academic background
          </h2>
          <p className="section-subtitle">
            Formal IT education that grounds my testing and security work in
            fundamentals.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.08}>
              <div className="card card-hover h-full p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-300">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100">
                  {e.degree}
                </h3>
                <p className="mt-1 text-sm text-accent-300">{e.school}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                  <span className="font-mono">{e.period}</span>
                  <span>{e.grade}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
