"use client";

import { Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { personal } from "../data";

const navLinks = [
  { href: "/journey", label: "Journey" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-border/60 bg-surface/30"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container-max section-padding py-10">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/40 bg-accent/15 text-accent-300">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span className="font-mono text-sm tracking-wide text-zinc-100">
                sabuj<span className="text-accent-400">.qa</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              QA Engineer focused on quality, security, and automation. Open to
              new opportunities.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-zinc-400">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center transition-colors hover:text-accent-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Connect
            </p>
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/70 text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent-300"
                >
                  <Github className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/70 text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/70 text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent-300"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </li>
            </ul>
            <a
              href={`mailto:${personal.email}`}
              className="mt-3 inline-block text-sm text-zinc-400 transition-colors hover:text-accent-300"
            >
              {personal.email}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 text-center text-xs text-zinc-400">
          <p>
            © {year} <span className="text-zinc-200">{personal.name}</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
