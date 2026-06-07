"use client";

import { ArrowUpRight, Award, BadgeCheck, BookOpen, Trophy } from "lucide-react";
import Reveal from "./Reveal";
import { achievements, certifications, publication } from "../data";

export default function Recognition() {
  return (
    <section
      id="recognition"
      aria-labelledby="recognition-heading"
      className="section-y relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container-max section-padding">
        <Reveal>
          <p className="section-heading">
            <span aria-hidden className="h-px w-8 bg-accent" /> Recognition
          </p>
          <h2 id="recognition-heading" className="section-title">
            Certifications, awards &amp; publications
          </h2>
          <p className="section-subtitle">
            Continuously learning and competing in QA, API testing, and
            cyber security.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Reveal>
            <div className="card card-hover h-full p-4 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-brand">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-heading">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c.name}
                    className="card-inner flex flex-col gap-0.5 p-3"
                  >
                    <span className="text-sm font-medium text-emphasis">
                      {c.name}
                    </span>
                    <span className="text-xs text-muted">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card card-hover h-full p-4 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-brand">
                  <Trophy className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-heading">
                  Achievements
                </h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li key={a.title} className="card-inner p-3">
                    <div className="flex items-start gap-2">
                      <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-brand" />
                      <div>
                        <p className="text-sm font-medium text-emphasis">
                          {a.title}
                        </p>
                        <p className="mt-0.5 text-xs text-muted">
                          {a.venue} · {a.year}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="card card-hover h-full p-4 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-brand">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-heading">
                  Publication
                </h3>
              </div>
              <div className="card-inner p-3">
                <p className="text-sm font-medium leading-relaxed text-emphasis">
                  {publication.title}
                </p>

                {publication.abstract && (
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {publication.abstract}
                  </p>
                )}

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    {publication.status}
                  </span>

                  {publication.abstractLink && (
                    <a
                      href={publication.abstractLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-surface/70 px-2.5 py-0.5 text-[11px] font-semibold text-emphasis transition-colors hover:border-accent/50 hover:text-accent-brand"
                      aria-label="Read abstract of upcoming publication"
                    >
                      Read Abstract
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
