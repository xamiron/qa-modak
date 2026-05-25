"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Filter, Inbox } from "lucide-react";
import { useMemo, useState } from "react";
import ProjectCard, { type Project } from "./ProjectCard";

type Props = {
  projects: Project[];
  categories: readonly string[];
};

const ALL = "All" as const;

export default function ProjectsExplorer({ projects, categories }: Props) {
  const [active, setActive] = useState<string>(ALL);
  const prefersReduced = useReducedMotion();

  /** Pre-computed counts so each chip can show how many projects match. */
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

  return (
    <div>
      {/* Filter bar */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap items-center gap-2"
      >
        <span className="mr-1 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          <Filter className="h-3.5 w-3.5" aria-hidden />
          Filter
        </span>

        {[ALL, ...categories].map((cat) => {
          const isActive = active === cat;
          const count = counts[cat] ?? 0;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={[
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all sm:text-sm",
                isActive
                  ? "border-accent/60 bg-accent/15 text-accent-200 shadow-glow-soft"
                  : "border-border bg-surface/60 text-zinc-300 hover:border-accent/40 hover:text-accent-300",
              ].join(" ")}
            >
              <span>{cat}</span>
              <span
                className={[
                  "rounded-full px-1.5 py-0.5 font-mono text-[10px] leading-none",
                  isActive
                    ? "bg-accent/30 text-accent-100"
                    : "bg-surface-2/70 text-zinc-500",
                ].join(" ")}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Result count */}
      <p
        aria-live="polite"
        className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500"
      >
        Showing{" "}
        <span className="text-zinc-200">{visible.length}</span> of{" "}
        <span className="text-zinc-200">{projects.length}</span>{" "}
        {visible.length === 1 ? "project" : "projects"}
        {active !== ALL && (
          <>
            {" "}
            in <span className="text-accent-300">{active}</span>
          </>
        )}
      </p>

      {/* Grid */}
      <div className="relative mt-6 min-h-[200px]">
        {visible.length > 0 ? (
          <motion.div
            layout={prefersReduced ? false : true}
            className="grid gap-5 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout={prefersReduced ? false : "position"}
                  initial={
                    prefersReduced
                      ? { opacity: 0 }
                      : { opacity: 0, y: 16, scale: 0.97 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={
                    prefersReduced
                      ? { opacity: 0 }
                      : { opacity: 0, y: -10, scale: 0.97 }
                  }
                  transition={{
                    duration: 0.45,
                    delay: prefersReduced ? 0 : Math.min(i, 5) * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 bg-surface/30 p-10 text-center"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-zinc-500">
              <Inbox className="h-5 w-5" aria-hidden />
            </span>
            <p className="mt-4 text-sm font-medium text-zinc-200">
              No projects in this category yet.
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              Try another filter — more case studies are on the way.
            </p>
            <button
              type="button"
              onClick={() => setActive(ALL)}
              className="mt-4 text-xs font-semibold text-accent-300 hover:text-accent-200"
            >
              ← Reset filter
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
