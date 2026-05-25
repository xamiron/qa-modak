"use client";

import {
  Bug,
  ShieldCheck,
  Workflow,
  Users,
} from "lucide-react";
import Reveal from "./Reveal";
import { personal } from "../data";

const highlights = [
  {
    icon: Bug,
    title: "End-to-End QA Ownership",
    text: "From requirement analysis to release sign-off — test plans, cases, execution, and bug reports.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Mindset",
    text: "OWASP TOP 10, pen-testing, and vulnerability assessments on real production banking platforms.",
  },
  {
    icon: Workflow,
    title: "Automation that Scales",
    text: "Selenium + Java for stable, maintainable web automation. API testing with structured Postman collections.",
  },
  {
    icon: Users,
    title: "Agile Collaboration",
    text: "Comfortable in scrum teams, working closely with developers, designers, and product owners.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-y relative">
      <div className="container-max section-padding">
        <Reveal>
          <span className="section-heading">
            <span className="h-px w-8 bg-accent" /> About
          </span>
          <h2 className="section-title">Quality is not an afterthought.</h2>
          <p className="section-subtitle">{personal.about}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="card card-hover h-full p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-300">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-zinc-100">
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {h.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
