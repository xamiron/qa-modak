"use client";

import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section-y relative">
      <div className="container-max section-padding">
        <Reveal>
          <span className="section-heading">
            <span className="h-px w-8 bg-accent" /> Projects
          </span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            Real platforms I&apos;ve helped ship and harden — from large banking
            websites to mobile EV apps and automation suites.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => {
            const isLink = Boolean(p.link);
            const Wrapper: React.ElementType = isLink ? "a" : "div";
            const wrapperProps = isLink
              ? {
                  href: p.link,
                  target: "_blank",
                  rel: "noreferrer",
                }
              : {};

            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <Wrapper
                  {...wrapperProps}
                  className="card card-hover group relative flex h-full flex-col p-6 md:p-7"
                >
                  <header className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent-300">
                        <FolderGit2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-100">
                          {p.title}
                        </h3>
                        <p className="font-mono text-xs text-zinc-500">
                          {p.org}
                        </p>
                      </div>
                    </div>
                    {isLink && (
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface/70 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent/50 group-hover:text-accent-300">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    )}
                  </header>

                  <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
