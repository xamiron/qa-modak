"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { personal, stats } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-radial-fade blur-3xl" />
        <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-cyan-glow/10 blur-[120px]" />
      </div>

      <div className="container-max section-padding grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for QA / Security Testing roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-xl font-medium text-zinc-300 sm:text-2xl"
          >
            <span>{personal.title}</span>
            <span className="mx-3 text-zinc-600">·</span>
            <span className="font-mono text-base text-accent-300 sm:text-lg">
              {personal.subtitle}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 md:text-lg"
          >
            I help teams ship reliable, secure software. From writing crisp test
            cases and running OWASP-based security checks to building Selenium
            automation that actually keeps regressions out — I own QA end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-400"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-400" />
              {personal.location}
            </span>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent-300"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent-300"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent-300"
            >
              <Mail className="h-4 w-4" />
              {personal.email}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-accent/20 via-accent/5 to-cyan-glow/10 blur-2xl" />

            <div className="card overflow-hidden p-1">
              <div className="rounded-[14px] bg-surface-2/80 p-6">
                <div className="flex items-center gap-2 border-b border-border/60 pb-4">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 font-mono text-xs text-zinc-500">
                    qa-profile.json
                  </span>
                </div>

                <pre className="mt-4 overflow-x-auto font-mono text-[12px] leading-relaxed text-zinc-300 sm:text-[13px]">
{`{
  "name": "Sabuj Kumar Modak",
  "role": "QA Engineer",
  "experience": "2+ years",
  "focus": [
    "Functional Testing",
    "API Testing",
    "Security Testing",
    "Selenium Automation"
  ],
  "domains": [
    "FinTech", "RegTech",
    "E-commerce", "ERP",
    "EV Charging"
  ],
  "status": "open_to_work"
}`}
                </pre>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-lg border border-border/70 bg-surface/60 px-3 py-2.5"
                    >
                      <div className="text-lg font-bold text-accent-300">
                        {s.value}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-zinc-500">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 -top-4 hidden rounded-xl border border-accent/30 bg-surface/90 px-3 py-2 text-xs font-medium text-accent-300 shadow-glow-accent backdrop-blur sm:flex sm:items-center sm:gap-2"
            >
              <Sparkles className="h-3.5 w-3.5" />
              OWASP-aware
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
