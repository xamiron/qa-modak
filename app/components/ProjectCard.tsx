"use client";

import {
  ArrowUpRight,
  Building2,
  ChevronDown,
  ExternalLink,
  FolderGit2,
  Globe,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId } from "react";
import RichText from "./RichText";

export type Project = {
  title: string;
  org: string;
  description: string;
  keyTakeaway?: string;
  tags: string[];
  categories?: string[];
  link?: string;
};

type ProjectCardProps = {
  project: Project;
  variant?: "default" | "catalogue";
  index?: number;
  isOpen?: boolean;
  onToggle?: () => void;
};

const CATEGORY_BORDER: Record<string, string> = {
  FinTech: "border-l-emerald-400/60",
  Mobile: "border-l-cyan-400/60",
  Web: "border-l-accent/60",
  ERP: "border-l-violet-400/60",
  Automation: "border-l-amber-400/60",
  "API & Security": "border-l-rose-400/60",
};

function getBorder(categories?: string[]) {
  return CATEGORY_BORDER[categories?.[0] ?? "Web"] ?? "border-l-accent/60";
}

function DefaultProjectCard({ project }: { project: Project }) {
  const isLink = Boolean(project.link);
  const Wrapper: React.ElementType = isLink ? "a" : "div";
  const wrapperProps = isLink
    ? {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${project.title}, open in new tab`,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="card card-hover group relative flex h-full min-w-0 flex-col p-4 sm:p-6 md:p-7"
    >
      <header className="mb-3 flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent-brand">
            <FolderGit2 className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <h3 className="text-balance text-base font-semibold text-heading transition-colors group-hover:text-accent-brand sm:text-lg">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-subtle">{project.org}</p>
          </div>
        </div>
        {isLink && (
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface/70 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent/50 group-hover:text-accent-brand"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        )}
      </header>

      <p className="flex-1 text-sm leading-relaxed text-muted">
        <RichText text={project.description} />
      </p>

      {project.keyTakeaway && (
        <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-accent/20 bg-accent/[0.06] p-3">
          <Sparkles
            aria-hidden
            className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-brand"
          />
          <p className="text-xs leading-relaxed text-emphasis">
            <span className="font-semibold uppercase tracking-wider text-accent-brand">
              Impact
            </span>
            <span className="mx-1.5 text-faint">·</span>
            {project.keyTakeaway}
          </p>
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}

function CatalogueProjectCard({
  project,
  index,
  isOpen = false,
  onToggle,
}: {
  project: Project;
  index?: number;
  isOpen?: boolean;
  onToggle?: () => void;
}) {
  const panelId = useId();
  const prefersReduced = useReducedMotion();
  const hasLink = Boolean(project.link);
  const category = project.categories?.[0];

  return (
    <article
      className={["faq-card border-l-[3px]", getBorder(project.categories)].join(
        " ",
      )}
      data-open={isOpen}
    >
      <button
        type="button"
        className="faq-trigger touch-target group/trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {index !== undefined && (
          <span
            aria-hidden
            className="hidden w-5 flex-shrink-0 font-mono text-[10px] tabular-nums text-faint sm:block"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        )}

        <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent-brand">
          <FolderGit2 className="h-3.5 w-3.5" />
        </span>

        <span className="min-w-0 flex-1 text-left">
          <span className="flex items-center gap-2">
            <span className="line-clamp-1 text-sm font-semibold text-heading group-hover/trigger:text-accent-brand sm:text-[15px]">
              {project.title}
            </span>
            {hasLink && (
              <span className="inline-flex flex-shrink-0 items-center gap-0.5 rounded border border-accent/20 bg-accent/10 px-1.5 py-px text-[9px] font-bold uppercase text-accent-brand">
                <Globe className="h-2.5 w-2.5" aria-hidden />
                Live
              </span>
            )}
          </span>
          <span className="mt-0.5 flex items-center gap-2 text-[11px] text-subtle">
            <Building2 className="h-3 w-3 flex-shrink-0" aria-hidden />
            <span className="truncate">{project.org}</span>
            {category && (
              <>
                <span aria-hidden className="text-faint">
                  ·
                </span>
                <span className="flex-shrink-0 font-mono uppercase tracking-wider text-faint">
                  {category}
                </span>
              </>
            )}
          </span>
        </span>

        <span
          className={[
            "grid h-7 w-7 flex-shrink-0 place-items-center rounded-md border border-border/80 bg-surface/60 text-subtle transition-all duration-200",
            isOpen
              ? "rotate-180 border-accent/40 bg-accent/10 text-accent-brand"
              : "group-hover/trigger:text-accent-brand",
          ].join(" ")}
          aria-hidden
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-label={`${project.title} details`}
            initial={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={
              prefersReduced ? { opacity: 1 } : { height: "auto", opacity: 1 }
            }
            exit={
              prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }
            }
            transition={{
              duration: prefersReduced ? 0.12 : 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="faq-panel space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="card-inner p-3">
                  <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
                    Overview
                  </p>
                  <p className="text-sm leading-relaxed text-body">
                    <RichText text={project.description} />
                  </p>
                </div>

                {project.keyTakeaway && (
                  <div className="rounded-lg border border-accent/20 bg-accent/[0.06] p-3">
                    <p className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-brand">
                      <Sparkles className="h-3 w-3" aria-hidden />
                      Impact
                    </p>
                    <p className="text-sm leading-relaxed text-emphasis">
                      {project.keyTakeaway}
                    </p>
                  </div>
                )}
              </div>

              {project.categories && project.categories.length > 1 && (
                <div className="flex flex-wrap gap-1.5">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded border border-border/60 bg-surface/50 px-2 py-0.5 font-mono text-[10px] uppercase text-subtle"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span key={t} className="chip py-0.5 text-[11px]">
                    {t}
                  </span>
                ))}
              </div>

              {hasLink && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary touch-target inline-flex w-full justify-center sm:w-auto"
                  aria-label={`${project.title}, visit live site`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  Visit live site
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function ProjectCard({
  project,
  variant = "default",
  index,
  isOpen,
  onToggle,
}: ProjectCardProps) {
  if (variant === "catalogue") {
    return (
      <CatalogueProjectCard
        project={project}
        index={index}
        isOpen={isOpen}
        onToggle={onToggle}
      />
    );
  }

  return <DefaultProjectCard project={project} />;
}
