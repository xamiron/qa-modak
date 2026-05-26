import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Compass,
  Rocket,
  Sparkles,
  type LucideIcon,
  Fingerprint,
  Landmark,
  Network,
  ScanFace,
  ShoppingCart,
  Zap,
} from "lucide-react";
import BackToTop from "../components/BackToTop";
import CountUp from "../components/CountUp";
import Footer from "../components/Footer";
import JourneyChart from "../components/JourneyChart";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import ScrollProgress from "../components/ScrollProgress";
import { domains, stats } from "../data";

export const metadata: Metadata = {
  title: "Journey | Who I Am",
  description:
    "The story behind Sabuj Modak: who I am, the highs and lows of the journey, and the domains I've helped test, automate, and harden.",
  alternates: { canonical: "/journey" },
};

const domainIconMap: Record<string, LucideIcon> = {
  Landmark,
  Fingerprint,
  ShoppingCart,
  Network,
  ScanFace,
  Zap,
};

/** Domain-specific highlights surfaced on the journey page only. */
const domainHighlights: Record<string, string[]> = {
  "FinTech & Banking": [
    "200+ dynamic banking pages",
    "4,500+ admin product nodes",
    "API security & VAPT",
  ],
  "RegTech & Biometrics": [
    "Compliance-driven QA",
    "Identity verification flows",
    "Data integrity audits",
  ],
  "E-commerce Platforms": [
    "Cart-to-checkout flows",
    "Payment gateway QA",
    "Order management",
  ],
  "ERP Solutions": [
    "Permission matrices",
    "Module-level workflows",
    "Scrum boards & KPI",
  ],
  "Biometric Devices": [
    "Hardware integration QA",
    "Matching algorithm tests",
    "Production validation",
  ],
  "EV Charging & Smart Mobility": [
    "Real-time station data",
    "Mobile booking flows",
    "Billing accuracy",
  ],
};

const milestones = [
  {
    year: "2019",
    title: "The Spark",
    subtitle: "Higher Secondary, Bogura Govt. College",
    description:
      "Curiosity for how things break. Spent late nights breaking and fixing software, and found I cared more about why systems fail than just making them work.",
    icon: Sparkles,
  },
  {
    year: "2023",
    title: "B.Sc in IT + First Job Offer",
    subtitle: "University of Information Technology & Sciences",
    description:
      "Graduated B.Sc in Information Technology and received my first QA job offer. Years of CTFs, late-night labs, and self-driven test-case practice finally paid off.",
    icon: Compass,
  },
  {
    year: "2024 – 2025",
    title: "Jr. Software QA Engineer",
    subtitle: "Bdjobs.com Ltd",
    description:
      "First real product role at Bangladesh's largest job portal. Designed test cases, automated workflows with Selenium, and ran load tests with JMeter on a platform serving millions.",
    icon: Briefcase,
  },
  {
    year: "2025 – Present",
    title: "Software QA Engineer",
    subtitle: "Singularity Limited",
    description:
      "Switched to Singularity to take on bigger ownership across banking, EV, and ERP products. Penetration testing, API testing, and automation, shipping with confidence on production-critical platforms.",
    icon: Rocket,
  },
];

export default function JourneyPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative pt-24 md:pt-28" role="main">
        {/* HERO INTRO */}
        <section className="section-y relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[420px] w-[1100px] -translate-x-1/2 rounded-full bg-radial-fade blur-3xl opacity-70" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="container-max section-padding">
            <Reveal>
              <p className="section-heading">
                <span aria-hidden className="h-px w-8 bg-accent" /> My Journey
              </p>
              <h1 className="section-title text-balance">
                A QA story:{" "}
                <span className="gradient-text">curious, careful, relentless.</span>
              </h1>
              <p className="section-subtitle !max-w-3xl text-pretty">
                From late-night curiosity about how things break, to shipping
                quality across banking, EV, and enterprise platforms. This is
                the story, the highs, the lows, and the domains it touched.
              </p>
            </Reveal>
          </div>
        </section>

        {/* WHO I AM */}
        <section
          aria-labelledby="who-i-am-heading"
          className="section-y relative"
        >
          <div className="container-max section-padding">
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
              <Reveal className="lg:col-span-3">
                <p className="section-heading">
                  <span aria-hidden className="h-px w-8 bg-accent" /> Who I Am
                </p>
                <h2
                  id="who-i-am-heading"
                  className="section-title text-balance"
                >
                  An engineer who treats quality as a craft.
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-zinc-400 md:text-lg">
                  <p>
                    My approach blends manual testing discipline with automation
                    engineering and an offensive security mindset. I think like
                    a user, test like a hacker, and ship with confidence. Every
                    bug I find is a story about how a product can be better,
                    and I love telling those stories clearly.
                  </p>
                  <p>
                    Beyond the test cases, I&apos;m a continuous learner:
                    competing in CTFs, exploring new automation patterns, and
                    helping teams adopt quality as a habit rather than a phase.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="card card-hover group relative overflow-hidden p-5 sm:p-6"
                    >
                      <div
                        aria-hidden
                        className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100"
                      />
                      <div className="relative">
                        <p className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                          <CountUp value={s.value} />
                        </p>
                        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
                          {s.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* HIGHS & LOWS: animated journey arc */}
        <section
          aria-labelledby="arc-heading"
          className="section-y relative overflow-hidden"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/3 top-1/4 h-72 w-[600px] rounded-full bg-accent/5 blur-[140px]" />
          </div>

          <div className="container-max section-padding">
            <Reveal>
              <p className="section-heading">
                <span aria-hidden className="h-px w-8 bg-accent" /> Highs &amp;
                Lows
              </p>
              <h2 id="arc-heading" className="section-title text-balance">
                The journey hasn&apos;t been a straight line.
              </h2>
              <p className="section-subtitle !max-w-3xl">
                Confidence and momentum from{" "}
                <span className="text-zinc-200">2019</span> to{" "}
                <span className="text-zinc-200">today</span>. The peaks I
                fought for and the dips that taught me the most.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <JourneyChart />
            </Reveal>
          </div>
        </section>

        {/* DOMAINS: redesigned bento style */}
        <section
          aria-labelledby="domains-heading"
          className="section-y relative overflow-hidden"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-glow/5 blur-[120px]" />
            <div className="absolute left-0 bottom-1/4 h-60 w-60 rounded-full bg-accent/5 blur-[120px]" />
          </div>

          <div className="container-max section-padding">
            <Reveal>
              <p className="section-heading">
                <span aria-hidden className="h-px w-8 bg-accent" /> Domains
              </p>
              <h2 id="domains-heading" className="section-title text-balance">
                Industries I&apos;ve tested in.
              </h2>
              <p className="section-subtitle !max-w-3xl">
                Practical domain knowledge across regulated, transactional, and
                hardware-integrated products. Each industry sharpened a
                different instinct: risk, scale, edge cases, or trust.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {domains.map((d, i) => {
                const Icon = domainIconMap[d.icon] ?? Landmark;
                const highlights = domainHighlights[d.title] ?? [];
                const number = String(i + 1).padStart(2, "0");
                return (
                  <Reveal key={d.title} delay={Math.min(i, 5) * 0.06}>
                    <article className="card card-hover group relative h-full overflow-hidden p-6 sm:p-7">
                      {/* gradient halo */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl opacity-60 transition-all group-hover:opacity-100 group-hover:scale-110"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                      />

                      <header className="relative flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span
                            aria-hidden
                            className="font-mono text-3xl font-bold leading-none tracking-tight text-transparent sm:text-4xl"
                            style={{
                              WebkitTextStroke: "1px rgb(63 63 70 / 0.9)",
                            }}
                          >
                            {number}
                          </span>
                          <div className="grid h-12 w-12 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-300 transition-transform group-hover:-translate-y-0.5 sm:h-14 sm:w-14">
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                          </div>
                        </div>
                      </header>

                      <h3 className="relative mt-5 text-lg font-semibold text-zinc-100 sm:text-xl">
                        {d.title}
                      </h3>
                      <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">
                        {d.description}
                      </p>

                      {highlights.length > 0 && (
                        <ul className="relative mt-5 space-y-2 border-t border-border/60 pt-4">
                          {highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-xs text-zinc-300 sm:text-sm"
                            >
                              <span
                                aria-hidden
                                className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                              />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* TIMELINE: life journey concept */}
        <section
          aria-labelledby="timeline-heading"
          className="section-y relative"
        >
          <div className="container-max section-padding">
            <Reveal>
              <p className="section-heading">
                <span aria-hidden className="h-px w-8 bg-accent" /> The Path
              </p>
              <h2 id="timeline-heading" className="section-title text-balance">
                Milestones along the way.
              </h2>
              <p className="section-subtitle !max-w-3xl">
                Every chapter shaped a sharper instinct for quality.
              </p>
            </Reveal>

            <ol className="relative mt-12 ml-3 sm:ml-6">
              <div
                aria-hidden
                className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent"
              />
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <li
                    key={m.title}
                    className="relative pl-10 pb-10 last:pb-0 sm:pl-14"
                  >
                    <Reveal delay={i * 0.06}>
                      <span
                        aria-hidden
                        className="absolute -left-[14px] top-1 grid h-7 w-7 place-items-center rounded-full border border-accent/40 bg-background text-accent-300 shadow-glow-soft sm:-left-[18px] sm:h-9 sm:w-9"
                      >
                        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </span>

                      <div className="card card-hover p-5 sm:p-6">
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-400">
                          {m.year}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-zinc-100 sm:text-xl">
                          {m.title}
                        </h3>
                        <p className="mt-0.5 font-mono text-xs text-zinc-500">
                          {m.subtitle}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                          {m.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
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
                  Next chapter?
                </p>
                <h2 className="mt-3 text-balance text-2xl font-bold text-zinc-100 sm:text-3xl md:text-4xl">
                  Let&apos;s build something worth shipping.
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Open to QA, automation, and security roles where quality is
                  treated as a first-class concern.
                </p>

                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link href="/#contact" className="btn-primary group w-full sm:w-auto">
                    Get in Touch
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/projects"
                    className="btn-secondary w-full sm:w-auto"
                  >
                    Explore Projects
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
