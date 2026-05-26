import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Layers, Sparkles } from "lucide-react";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectsExplorer from "../components/ProjectsExplorer";
import Reveal from "../components/Reveal";
import ScrollProgress from "../components/ScrollProgress";
import { projectCategories, projects } from "../data";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "A complete catalogue of QA, automation, and security projects Sabuj Modak has worked on across fintech, EV, and enterprise products. Filter by category to explore.",
  alternates: { canonical: "/projects" },
};

const summaryStats = [
  {
    icon: Briefcase,
    value: `${projects.length}+`,
    label: "Projects Shipped",
  },
  {
    icon: Layers,
    value: `${projectCategories.length}`,
    label: "Categories",
  },
  {
    icon: Sparkles,
    value: "2.5+",
    label: "Years Active",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative pt-24 md:pt-28" role="main">
        {/* HERO */}
        <section
          aria-labelledby="all-projects-heading"
          className="relative overflow-hidden pt-8 sm:pt-10"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[420px] w-[1100px] -translate-x-1/2 rounded-full bg-radial-fade blur-3xl opacity-70" />
            <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[140px]" />
            <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-cyan-glow/10 blur-[140px]" />
          </div>

          <div className="container-max section-padding">
            <Reveal>
              <p className="section-heading">
                <span aria-hidden className="h-px w-8 bg-accent" /> Project
                Catalogue
              </p>
              <h1
                id="all-projects-heading"
                className="section-title text-balance"
              >
                Every product I&apos;ve helped{" "}
                <span className="gradient-text">test &amp; harden.</span>
              </h1>
              <p className="section-subtitle !max-w-3xl">
                The full list of QA, automation, and security work, from
                regulated banking platforms and EV mobile apps to in-house ERPs
                and personal automation experiments. Use the filters below to
                narrow by category.
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
          </div>
        </section>

        {/* EXPLORER: categories filter + grid */}
        <section
          aria-labelledby="explorer-heading"
          className="section-y relative"
        >
          <div className="container-max section-padding">
            <h2 id="explorer-heading" className="sr-only">
              Browse projects by category
            </h2>

            <Reveal delay={0.1}>
              <ProjectsExplorer
                projects={projects}
                categories={projectCategories}
              />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="section-y relative">
          <div className="container-max section-padding">
            <Reveal>
              <div className="card relative overflow-hidden p-8 text-center sm:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 opacity-60"
                >
                  <div className="absolute left-1/2 top-1/2 h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade blur-3xl" />
                </div>

                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-400">
                  {projects.length} projects shipped &amp; tested
                </p>
                <h2 className="mt-3 text-balance text-2xl font-bold text-zinc-100 sm:text-3xl md:text-4xl">
                  Have a project in mind? Let&apos;s talk.
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Open to QA, automation, and security roles where quality is
                  treated as a first-class concern.
                </p>

                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="btn-primary w-full sm:w-auto"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/journey"
                    className="btn-secondary w-full sm:w-auto"
                  >
                    Read My Journey
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
