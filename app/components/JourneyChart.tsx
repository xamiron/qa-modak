"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Minus, TrendingDown, TrendingUp } from "lucide-react";
import { useMemo, useRef } from "react";

type Mood = "up" | "down" | "neutral";

type Point = {
  year: number;
  level: number;
  label: string;
  detail: string;
  mood: Mood;
};

const data: Point[] = [
  {
    year: 2019,
    level: 7,
    label: "Started University",
    detail: "Fresh out of HSC. Curious about how things break.",
    mood: "up",
  },
  {
    year: 2020,
    level: 3.5,
    label: "Pandemic Hit",
    detail:
      "Online classes, no campus, lost direction. The lowest point in confidence.",
    mood: "down",
  },
  {
    year: 2021,
    level: 5,
    label: "Self-Learning",
    detail:
      "Found a rhythm: programming basics, security tutorials, late-night labs.",
    mood: "neutral",
  },
  {
    year: 2022,
    level: 7,
    label: "First CTF Rank",
    detail: "Ranked 14th at National Cyber Drill 2022. First real validation.",
    mood: "up",
  },
  {
    year: 2023,
    level: 9,
    label: "Graduated + Job Offer",
    detail:
      "Finished B.Sc in IT and landed my first QA job offer. Years of late-night practice paid off.",
    mood: "up",
  },
  {
    year: 2024,
    level: 8.5,
    label: "Joined Bdjobs",
    detail:
      "Started as Jr. Software QA Engineer at Bdjobs.com. First real product role on a platform serving millions.",
    mood: "up",
  },
  {
    year: 2025,
    level: 7,
    label: "Switched to Singularity",
    detail:
      "Moved to Singularity Limited. Banking, EV, and ERP: steep learning curve, bigger ownership.",
    mood: "down",
  },
  {
    year: 2026,
    level: 9.5,
    label: "Today",
    detail:
      "Hitting stride at Singularity. Owning end-to-end QA on production-critical platforms.",
    mood: "up",
  },
];

const VIEWBOX_W = 900;
const VIEWBOX_H = 380;
const PAD_L = 56;
const PAD_R = 36;
const PAD_T = 60;
const PAD_B = 52;
const PLOT_W = VIEWBOX_W - PAD_L - PAD_R;
const PLOT_H = VIEWBOX_H - PAD_T - PAD_B;
const Y_MIN = 0;
const Y_MAX = 10;
const Y_GRID = [0, 2.5, 5, 7.5, 10];

const xMin = data[0].year;
const xMax = data[data.length - 1].year;

const xScale = (year: number) =>
  PAD_L + ((year - xMin) / (xMax - xMin)) * PLOT_W;
const yScale = (level: number) =>
  PAD_T + (1 - (level - Y_MIN) / (Y_MAX - Y_MIN)) * PLOT_H;

const points = data.map((d) => ({ x: xScale(d.year), y: yScale(d.level), ...d }));

function buildSmoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let path = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    path += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return path;
}

const linePath = buildSmoothPath(points);
const areaPath = `${linePath} L ${points[points.length - 1].x} ${PAD_T + PLOT_H} L ${points[0].x} ${PAD_T + PLOT_H} Z`;

const TODAY_INDEX = points.length - 1;

function moodColor(mood: Mood) {
  if (mood === "up") return "#34d399";
  if (mood === "down") return "#fb7185";
  return "#a1a1aa";
}

function MoodIcon({ mood, className }: { mood: Mood; className?: string }) {
  if (mood === "up") return <TrendingUp className={className} />;
  if (mood === "down") return <TrendingDown className={className} />;
  return <Minus className={className} />;
}

export default function JourneyChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const prefersReduced = useReducedMotion();

  const drawDuration = prefersReduced ? 0 : 1.8;
  const dotsAfter = prefersReduced ? 0 : drawDuration - 0.4;

  /** Header summary: peak, lowest, net change (computed once). */
  const summary = useMemo(() => {
    const peak = data.reduce((a, b) => (b.level > a.level ? b : a), data[0]);
    const low = data.reduce((a, b) => (b.level < a.level ? b : a), data[0]);
    const first = data[0];
    const last = data[data.length - 1];
    const delta = last.level - first.level;
    return { peak, low, first, last, delta };
  }, []);

  return (
    <div ref={ref} className="card relative overflow-hidden p-4 sm:p-6 md:p-8">
      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
      >
        <div className="absolute left-1/2 top-1/2 h-72 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade blur-3xl" />
      </div>

      {/* === Header === */}
      <header className="flex flex-col gap-4 sm:gap-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px]">
              <span aria-hidden className="h-px w-6 bg-accent" />
              Confidence &amp; Momentum
            </p>
            <h3 className="mt-2 text-base font-semibold leading-snug text-zinc-100 sm:text-lg md:text-xl">
              The arc from{" "}
              <span className="font-mono text-accent-300">{xMin}</span>
              {" → "}
              <span className="font-mono text-accent-300">today</span>
            </h3>
          </div>

          {/* Legend */}
          <ul className="flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-400 sm:gap-2 sm:text-xs">
            <li className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-2.5 py-1">
              <span className="h-2 w-2 rounded-full bg-accent shadow-glow-accent" />
              Peak
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/30 bg-rose-400/5 px-2.5 py-1">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              Dip
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-surface-2/50 px-2.5 py-1">
              <span className="h-2 w-2 rounded-full bg-zinc-500" />
              Neutral
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-accent-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 inline-flex animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Today
            </li>
          </ul>
        </div>

        {/* Quick stats strip */}
        <dl className="grid grid-cols-2 gap-2 rounded-xl border border-border/60 bg-surface/40 p-2 sm:grid-cols-4 sm:gap-3 sm:p-3">
          <div className="min-w-0 flex flex-col gap-0.5 rounded-lg bg-surface/60 px-3 py-2.5">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Highest Point
            </dt>
            <dd className="truncate text-xs font-semibold text-accent-200 sm:text-sm">
              {summary.peak.label}
            </dd>
            <p className="font-mono text-[10px] text-zinc-500">
              {summary.peak.year}
            </p>
          </div>
          <div className="min-w-0 flex flex-col gap-0.5 rounded-lg bg-surface/60 px-3 py-2.5">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Lowest Point
            </dt>
            <dd className="truncate text-xs font-semibold text-rose-300 sm:text-sm">
              {summary.low.label}
            </dd>
            <p className="font-mono text-[10px] text-zinc-500">
              {summary.low.year}
            </p>
          </div>
          <div className="min-w-0 flex flex-col gap-0.5 rounded-lg bg-surface/60 px-3 py-2.5">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Years Tracked
            </dt>
            <dd className="text-xs font-semibold text-zinc-200 sm:text-sm">
              {xMax - xMin + 1} years
            </dd>
            <p className="font-mono text-[10px] text-zinc-500">
              {xMin} – {xMax}
            </p>
          </div>
          <div className="min-w-0 flex flex-col gap-0.5 rounded-lg bg-surface/60 px-3 py-2.5">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Net Growth
            </dt>
            <dd className="inline-flex items-center gap-1 text-xs font-semibold text-accent-300 sm:text-sm">
              <ArrowUpRight className="h-3.5 w-3.5" />
              +{summary.delta.toFixed(1)} pts
            </dd>
            <p className="font-mono text-[10px] text-zinc-500">
              {summary.first.level} → {summary.last.level}
            </p>
          </div>
        </dl>
      </header>

      {/* === Chart === */}
      <div className="relative mt-5 sm:mt-6">
        <svg
          role="img"
          aria-label="Journey arc: confidence and momentum from 2019 to 2026"
          viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
          preserveAspectRatio="xMidYMid meet"
          className="block w-full select-none"
        >
          <defs>
            <linearGradient id="jc-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="jc-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
            <filter id="jc-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Mood zone bands: subtle context, single-hue family */}
          <g>
            <rect
              x={PAD_L}
              y={yScale(10)}
              width={PLOT_W}
              height={yScale(7) - yScale(10)}
              fill="#10b981"
              opacity={0.06}
            />
            <rect
              x={PAD_L}
              y={yScale(7)}
              width={PLOT_W}
              height={yScale(3) - yScale(7)}
              fill="#a1a1aa"
              opacity={0.025}
            />
            <rect
              x={PAD_L}
              y={yScale(3)}
              width={PLOT_W}
              height={yScale(0) - yScale(3)}
              fill="#fb7185"
              opacity={0.06}
            />
          </g>

          {/* Zone divider lines: clean horizontal markers */}
          <g>
            <line
              x1={PAD_L}
              y1={yScale(7)}
              x2={VIEWBOX_W - PAD_R}
              y2={yScale(7)}
              stroke="#10b981"
              strokeWidth={1}
              strokeDasharray="2 6"
              opacity={0.25}
            />
            <line
              x1={PAD_L}
              y1={yScale(3)}
              x2={VIEWBOX_W - PAD_R}
              y2={yScale(3)}
              stroke="#fb7185"
              strokeWidth={1}
              strokeDasharray="2 6"
              opacity={0.25}
            />
          </g>

          {/* Subtle grid lines */}
          <g stroke="currentColor" className="text-zinc-800">
            {[0, 5, 10].map((g) => (
              <line
                key={g}
                x1={PAD_L}
                y1={yScale(g)}
                x2={VIEWBOX_W - PAD_R}
                y2={yScale(g)}
                strokeWidth={1}
                strokeDasharray="1 6"
                opacity={0.4}
              />
            ))}
          </g>

          {/* Zone labels: refined pills anchored to left gutter */}
          <g className="font-mono" fontSize="11">
            <text
              x={PAD_L + 10}
              y={yScale(8.5) + 4}
              className="fill-accent-400"
              opacity={0.55}
              letterSpacing="0.18em"
            >
              THRIVING
            </text>
            <text
              x={PAD_L + 10}
              y={yScale(5) + 4}
              className="fill-zinc-500"
              opacity={0.5}
              letterSpacing="0.18em"
            >
              GROWING
            </text>
            <text
              x={PAD_L + 10}
              y={yScale(1.5) + 4}
              className="fill-rose-400"
              opacity={0.5}
              letterSpacing="0.18em"
            >
              SURVIVING
            </text>
          </g>

          {/* Y-axis range markers */}
          <g className="fill-zinc-500 font-mono" fontSize="13">
            {[
              { v: 10, label: "10" },
              { v: 5, label: "5" },
              { v: 0, label: "0" },
            ].map(({ v, label }) => (
              <text key={label} x={PAD_L - 10} y={yScale(v) + 4} textAnchor="end">
                {label}
              </text>
            ))}
          </g>

          {/* X-axis years */}
          <g className="font-mono" fontSize="14">
            {data.map((d, i) => (
              <text
                key={d.year}
                x={xScale(d.year)}
                y={VIEWBOX_H - PAD_B + 26}
                textAnchor="middle"
                className={
                  i === TODAY_INDEX
                    ? "fill-accent-300 font-semibold"
                    : "fill-zinc-500"
                }
              >
                {d.year}
              </text>
            ))}
          </g>

          {/* Subtle drop lines from each dot to x-axis: anchors each year */}
          <g>
            {points.map((p) => (
              <motion.line
                key={`drop-${p.year}`}
                x1={p.x}
                y1={p.y + 6}
                x2={p.x}
                y2={VIEWBOX_H - PAD_B}
                stroke={moodColor(p.mood)}
                strokeWidth={1}
                strokeDasharray="1 5"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.18 } : { opacity: 0 }}
                transition={{ delay: drawDuration * 0.85, duration: 0.6 }}
              />
            ))}
          </g>

          {/* Area under curve */}
          <motion.path
            d={areaPath}
            fill="url(#jc-area)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: drawDuration * 0.6, duration: 0.6 }}
          />

          {/* Smooth line */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="url(#jc-line)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#jc-glow)"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: drawDuration, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Data points + score labels */}
          {points.map((p, i) => {
            const isToday = i === TODAY_INDEX;
            const color = moodColor(p.mood);
            const above = p.level >= 6;
            const labelY = above ? p.y - 16 : p.y + 24;
            const isFirst = i === 0;
            const isLast = i === points.length - 1;
            const labelAnchor: "start" | "middle" | "end" = isFirst
              ? "start"
              : isLast
              ? "end"
              : "middle";
            const labelDx = isFirst ? -4 : isLast ? 4 : 0;

            return (
              <motion.g
                key={p.year}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{
                  delay: dotsAfter + i * 0.08,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
              >
                {/* Permanent Today pulse: larger, brighter */}
                {isToday && (
                  <>
                    <motion.circle
                      cx={p.x}
                      cy={p.y}
                      r={18}
                      fill={color}
                      animate={
                        prefersReduced
                          ? undefined
                          : { scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }
                      }
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                    />
                    <motion.circle
                      cx={p.x}
                      cy={p.y}
                      r={12}
                      fill={color}
                      animate={
                        prefersReduced
                          ? undefined
                          : { scale: [1, 1.4, 1], opacity: [0.6, 0.1, 0.6] }
                      }
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                    />
                  </>
                )}

                {/* Soft halo */}
                <circle cx={p.x} cy={p.y} r={9} fill={color} opacity={0.22} />

                {/* Core dot */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isToday ? 6 : 5}
                  fill={color}
                  stroke="#0a0a0a"
                  strokeWidth={2}
                />

                {/* Score label above/below each dot */}
                <text
                  x={p.x + labelDx}
                  y={labelY}
                  textAnchor={labelAnchor}
                  className={
                    isToday
                      ? "fill-accent-200 font-semibold"
                      : p.mood === "down"
                      ? "fill-rose-300"
                      : p.mood === "neutral"
                      ? "fill-zinc-400"
                      : "fill-accent-300"
                  }
                  fontSize="14"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {p.level}
                </text>

                {/* "Today" annotation for the last dot */}
                {isToday && (
                  <g>
                    <rect
                      x={p.x - 30}
                      y={labelY - 32}
                      width={60}
                      height={20}
                      rx={10}
                      fill="#10b981"
                      fillOpacity={0.12}
                      stroke="#10b981"
                      strokeOpacity={0.5}
                      strokeWidth={1}
                    />
                    <text
                      x={p.x}
                      y={labelY - 18}
                      textAnchor="middle"
                      className="fill-accent-200 font-semibold"
                      fontSize="11"
                      letterSpacing="0.15em"
                      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      TODAY
                    </text>
                  </g>
                )}
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* === Moments: premium static cards with full detail === */}
      <ol className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((d, i) => {
          const isToday = i === TODAY_INDEX;
          const moodBorder =
            d.mood === "down"
              ? "border-rose-400/25"
              : d.mood === "neutral"
              ? "border-zinc-700/70"
              : "border-accent/25";
          const moodBg =
            d.mood === "down"
              ? "bg-rose-400/[0.04]"
              : d.mood === "neutral"
              ? "bg-surface-2/40"
              : "bg-accent/[0.04]";
          const moodIconCls =
            d.mood === "down"
              ? "border-rose-400/30 bg-rose-400/10 text-rose-300"
              : d.mood === "neutral"
              ? "border-zinc-700 bg-surface-2 text-zinc-300"
              : "border-accent/30 bg-accent/10 text-accent-300";

          return (
            <motion.li
              key={d.year}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                delay: prefersReduced ? 0 : 0.6 + i * 0.05,
                duration: 0.5,
              }}
              className={[
                "relative flex flex-col gap-3 rounded-xl border p-4",
                moodBorder,
                moodBg,
                isToday ? "ring-1 ring-accent/40 shadow-glow-soft" : "",
              ].join(" ")}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={[
                    "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border",
                    moodIconCls,
                  ].join(" ")}
                >
                  <MoodIcon mood={d.mood} className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    {d.year}
                    {isToday && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-accent-200">
                        Now
                      </span>
                    )}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold leading-tight text-zinc-100">
                    {d.label}
                  </p>
                </div>
              </div>
              <p className="text-[12px] leading-relaxed text-zinc-400 sm:text-[13px]">
                {d.detail}
              </p>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
