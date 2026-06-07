"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronsDownUp, Filter, Inbox, X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import ProjectCard, { type Project } from "./ProjectCard";

type Props = {
  projects: Project[];
  categories: readonly string[];
};

const ALL = "All" as const;
const RESULTS_ID = "project-results";

export default function ProjectsExplorer({ projects, categories }: Props) {
  const [active, setActive] = useState<string>(ALL);
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  const counts = useMemo(() => {
    const map: Record<string, number> = { [ALL]: projects.length };
    for (const cat of categories) {
      map[cat] = projects.filter((p) => p.categories?.includes(cat)).length;
    }
    return map;
  }, [projects, categories]);

  const visible = useMemo(() => {
    if (active === ALL) return projects;
    return projects.filter((p) => p.categories?.includes(active));
  }, [active, projects]);

  const scrollToResults = useCallback(() => {
    document.getElementById(RESULTS_ID)?.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  }, [prefersReduced]);

  const handleFilter = (cat: string) => {
    setActive(cat);
    setOpenTitle(null);
    requestAnimationFrame(scrollToResults);
  };

  const toggleProject = (title: string) => {
    setOpenTitle((prev) => (prev === title ? null : title));
  };

  return (
    <div>
      {/* Sticky filter */}
      <div className="sticky top-[4.25rem] z-20 -mx-5 border-b border-border/40 bg-background/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:top-[4.5rem] sm:px-8 sm:py-4 lg:-mx-16 lg:px-16 xl:-mx-24 xl:px-24">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent-brand">
                <Filter className="h-4 w-4" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-emphasis">
                  Filter projects
                </p>
                <p
                  aria-live="polite"
                  className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle"
                >
                  {visible.length} projects · tap to expand
                </p>
              </div>
            </div>

            <div className="flex flex-shrink-0 gap-2">
              {openTitle && (
                <button
                  type="button"
                  onClick={() => setOpenTitle(null)}
                  className="touch-target hidden items-center gap-1 rounded-lg border border-border bg-surface/70 px-3 text-xs font-semibold text-muted hover:text-accent-brand sm:inline-flex"
                  aria-label="Collapse all"
                >
                  <ChevronsDownUp className="h-3.5 w-3.5" aria-hidden />
                  Collapse
                </button>
              )}
              {active !== ALL && (
                <button
                  type="button"
                  onClick={() => handleFilter(ALL)}
                  className="touch-target inline-flex items-center gap-1 rounded-lg border border-border bg-surface/70 px-3 text-xs font-semibold text-body hover:text-accent-brand"
                  aria-label="Clear filter"
                >
                  <X className="h-3.5 w-3.5" aria-hidden />
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:hidden"
            />
            <div
              role="tablist"
              aria-label="Filter by category"
              className="filter-scroll"
            >
              {[ALL, ...categories].map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleFilter(cat)}
                    className={[
                      "touch-target inline-flex flex-shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-all",
                      isActive
                        ? "border-accent/60 bg-accent/15 text-accent-100"
                        : "border-border bg-surface/60 text-body hover:border-accent/40",
                    ].join(" ")}
                  >
                    {cat}
                    <span
                      className={[
                        "rounded-full px-1.5 py-0.5 font-mono text-[10px]",
                        isActive
                          ? "bg-accent/30 text-accent-50"
                          : "bg-surface-2 text-subtle",
                      ].join(" ")}
                    >
                      {counts[cat] ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="font-mono text-[10px] text-faint sm:hidden">
            Swipe to see more filters →
          </p>
        </div>
      </div>

      {/* FAQ accordion list */}
      <div
        id={RESULTS_ID}
        className="scroll-mt-28 pt-4 sm:scroll-mt-32 sm:pt-5"
      >
        {visible.length > 0 ? (
          <ul className="faq-list" role="list" aria-label="Project case studies">
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <motion.li
                  key={p.title}
                  layout={!prefersReduced}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, delay: Math.min(i, 6) * 0.03 }}
                  role="listitem"
                >
                  <ProjectCard
                    project={p}
                    variant="catalogue"
                    index={i}
                    isOpen={openTitle === p.title}
                    onToggle={() => toggleProject(p.title)}
                  />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        ) : (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-border/60 bg-surface/30 px-6 py-12 text-center">
            <Inbox className="h-8 w-8 text-subtle" aria-hidden />
            <p className="mt-4 font-medium text-emphasis">No projects found</p>
            <p className="mt-1 text-sm text-subtle">Try a different filter.</p>
            <button
              type="button"
              onClick={() => handleFilter(ALL)}
              className="btn-primary touch-target mt-5 w-full max-w-xs justify-center sm:w-auto"
            >
              Show all
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
