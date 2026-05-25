"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { personal } from "../data";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 md:pt-28"
    >
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-30" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-radial-fade blur-3xl" />
        <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-cyan-glow/10 blur-[140px]" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="container-max section-padding mx-auto flex w-full max-w-3xl flex-col items-center text-center"
      >
        {/* Photo */}
        <motion.div variants={fadeUp} className="relative mb-7">
          <div
            aria-hidden
            className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-br from-accent/40 via-accent/10 to-cyan-glow/20 opacity-70 blur-xl"
          />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-accent/40 bg-surface sm:h-36 sm:w-36">
            <Image
              src="/sabuj.png"
              alt={`${personal.name} — ${personal.title}`}
              fill
              priority
              sizes="144px"
              className="object-cover object-top"
            />
          </div>
          <span
            aria-label="Online"
            className="absolute bottom-1 right-1 grid h-6 w-6 place-items-center rounded-full border-2 border-background bg-background"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
          </span>
        </motion.div>

        {/* Status pill */}
        <motion.div
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new opportunities
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-accent-400 sm:text-xs"
        >
          Software QA Engineer · Security Tester
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Sabuj Kumar <span className="gradient-text">Modak.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 md:text-lg"
        >
          Helping product teams ship reliable, secure software across{" "}
          <span className="text-zinc-200">fintech</span>,{" "}
          <span className="text-zinc-200">e-commerce</span>, and{" "}
          <span className="text-zinc-200">EV mobility</span> — through
          functional, API, security testing, and Selenium automation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            View My Work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail className="h-4 w-4" />
            Get in Touch
          </a>
        </motion.div>

        {/* Social row */}
        <motion.ul
          variants={fadeUp}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <li>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface/70 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent-300"
            >
              <Github className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface/70 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${personal.email}`}
              aria-label={`Email ${personal.name}`}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface/70 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent-300"
            >
              <Mail className="h-4 w-4" />
            </a>
          </li>
        </motion.ul>
      </motion.div>
    </section>
  );
}
