"use client";

import { ArrowUpRight, FolderGit2 } from "lucide-react";

export type Project = {
  title: string;
  org: string;
  description: string;
  tags: string[];
  categories?: string[];
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const isLink = Boolean(project.link);
  const Wrapper: React.ElementType = isLink ? "a" : "div";
  const wrapperProps = isLink
    ? {
        href: project.link,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
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
              {project.title}
            </h3>
            <p className="font-mono text-xs text-zinc-500">{project.org}</p>
          </div>
        </div>
        {isLink && (
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface/70 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent/50 group-hover:text-accent-300">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        )}
      </header>

      <p className="flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

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
