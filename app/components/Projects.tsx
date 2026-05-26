"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Clock,
  FolderGit2,
  Layers,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import RichText from "./RichText";
import { projects } from "../data";

const HOME_PROJECT_LIMIT = 6;

export default function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1, HOME_PROJECT_LIMIT);
  const hasMore = projects.length > HOME_PROJECT_LIMIT;

  const summaryStats = [
    {
      icon: Briefcase,
      value: `${projects.length}+`,
      label: "Projects Shipped",
    },
    { icon: Layers, value: "6+", label: "Industries" },
    { icon: Clock, value: "2.5+", label: "Years Active" },
  ];

  const featuredIsLink = Boolean(featured.link);
  const FeaturedWrapper: React.ElementType = featuredIsLink ? "a" : "div";
  const featuredWrapperProps = featuredIsLink
    ? { href: featured.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-y relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute right-0 top-10 h-60 w-60 rounded-full bg-cyan-glow/5 blur-[120px]" />
      </div>

      <div className="container-max section-padding">
        {/* Heading */}
        <Reveal>
          <p className="section-heading">
            <span aria-hidden className="h-px w-8 bg-accent" /> Projects
          </p>
          <h2 id="projects-heading" className="section-title text-balance">
            Selected work
          </h2>
          <p className="section-subtitle">
            Real platforms I&apos;ve helped ship and harden, from large banking
            websites to mobile EV apps and automation suites.
          </p>
        </Reveal>

        {/* Stats summary strip */}
        <Reveal delay={0.05}>
          <div className="mt-8 grid grid-cols-3 gap-1.5 rounded-2xl border border-border/60 bg-surface/40 p-1.5 backdrop-blur-sm sm:gap-3 sm:p-3">
            {summaryStats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center gap-1 rounded-xl bg-surface/60 px-2 py-3 text-center sm:flex-row sm:gap-2.5 sm:px-4 sm:py-4 sm:text-left"
                >
                  <span className="hidden h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent-300 sm:grid">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-lg font-bold leading-none text-zinc-100 sm:text-2xl">
                      {s.value}
                    </p>
                    <p className="mt-1 font-mono text-[9px] leading-tight uppercase tracking-[0.15em] text-zinc-500 sm:text-[11px] sm:tracking-[0.18em]">
                      {s.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Featured project hero */}
        <Reveal delay={0.1}>
          <FeaturedWrapper
            {...featuredWrapperProps}
            className="card card-hover group relative mt-6 block overflow-hidden p-6 sm:p-8 md:p-10"
          >
            {/* Decorative gradient border accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl transition-all group-hover:scale-110 group-hover:bg-accent/25"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-glow/10 blur-3xl"
            />

            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-start md:gap-8">
              <div className="min-w-0">
                {/* Eyebrow badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-300">
                  <Sparkles aria-hidden className="h-3 w-3" />
                  Featured
                </div>

                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent-300 transition-transform group-hover:-translate-y-0.5 sm:h-12 sm:w-12">
                    <FolderGit2 className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold leading-tight text-zinc-100 sm:text-2xl md:text-3xl">
                      {featured.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-zinc-500">
                      {featured.org}
                    </p>
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-[1.7]">
                  <RichText text={featured.description} />
                </p>

                {featured.keyTakeaway && (
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/[0.08] p-4">
                    <Sparkles
                      aria-hidden
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-300"
                    />
                    <p className="text-sm leading-relaxed text-zinc-200">
                      <span className="font-semibold uppercase tracking-wider text-accent-300">
                        Impact
                      </span>
                      <span className="mx-2 text-zinc-600">·</span>
                      {featured.keyTakeaway}
                    </p>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                {featuredIsLink && (
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 transition-all group-hover:gap-2.5">
                    Visit live site
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                )}
              </div>

              {/* Decorative right-side icon */}
              <div
                aria-hidden
                className="relative hidden md:block"
              >
                <div className="grid h-32 w-32 place-items-center rounded-2xl border border-accent/30 bg-accent/5 backdrop-blur-sm transition-all group-hover:border-accent/50 group-hover:bg-accent/10 lg:h-40 lg:w-40">
                  <FolderGit2 className="h-14 w-14 text-accent-300/80 lg:h-16 lg:w-16" />
                </div>
                <div
                  aria-hidden
                  className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-cyan-glow/10 blur-xl"
                />
              </div>
            </div>
          </FeaturedWrapper>
        </Reveal>

        {/* Remaining projects grid */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {rest.map((p, i) => {
            const isLast = i === rest.length - 1;
            const isOrphan = isLast && rest.length % 2 === 1;
            return (
              <Reveal
                key={p.title}
                delay={0.15 + i * 0.06}
                className={isOrphan ? "md:col-span-2" : ""}
              >
                <ProjectCard project={p} />
              </Reveal>
            );
          })}
        </div>

        {/* View All button */}
        {hasMore && (
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-2">
              <Link
                href="/projects"
                className="btn-primary group"
                aria-label="View all projects"
              >
                View All Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                {projects.length - HOME_PROJECT_LIMIT}+ more case studies
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
