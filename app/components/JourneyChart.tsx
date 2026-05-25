"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useRef } from "react";

type Point = {
  year: number;
  level: number;
  label: string;
  detail: string;
  /** "up" = peak / win, "down" = dip / struggle, "neutral" = stable */
  mood: "up" | "down" | "neutral";
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
      "Found a rhythm — programming basics, security tutorials, late-night labs.",
    mood: "neutral",
  },
  {
    year: 2022,
    level: 7,
    label: "First CTF Rank",
    detail: "Ranked 14th — National Cyber Drill 2022. First real validation.",
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
      "Started as Jr. Software QA Engineer at Bdjobs.com — first real product role on a platform serving millions.",
    mood: "up",
  },
  {
    year: 2025,
    level: 7,
    label: "Switched to Singularity",
    detail:
      "Moved to Singularity Limited. Banking, EV, and ERP — steep learning curve, bigger ownership.",
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
const VIEWBOX_H = 360;
const PAD_L = 56;
const PAD_R = 32;
const PAD_T = 36;
const PAD_B = 56;
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

/** Catmull-Rom → cubic Bezier path for a smooth curve through the points. */
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

export default function JourneyChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const prefersReduced = useReducedMotion();

  const drawDuration = prefersReduced ? 0 : 2.2;
  const dotsAfter = prefersReduced ? 0 : drawDuration - 0.4;

  return (
    <div ref={ref} className="card relative overflow-hidden p-3 sm:p-6 md:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
      >
        <div className="absolute left-1/2 top-1/2 h-72 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade blur-3xl" />
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
          <span aria-hidden className="h-px w-6 bg-accent" />
          Confidence &amp; Momentum
        </div>
        <div className="flex items-center gap-3 text-[11px] text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent shadow-glow-accent" />
            Peak
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
            Dip
          </span>
        </div>
      </div>

      <svg
        role="img"
        aria-label="Journey arc — confidence and momentum from 2019 to 2026"
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        preserveAspectRatio="xMidYMid meet"
        className="block w-full"
      >
        <defs>
          <linearGradient id="jc-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="jc-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.25" />
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

        {/* Grid lines */}
        <g stroke="currentColor" className="text-zinc-800">
          {Y_GRID.map((g) => (
            <line
              key={g}
              x1={PAD_L}
              y1={yScale(g)}
              x2={VIEWBOX_W - PAD_R}
              y2={yScale(g)}
              strokeWidth={1}
              strokeDasharray="2 4"
              opacity={0.6}
            />
          ))}
        </g>

        {/* Y-axis labels (subtle markers) — larger font for mobile readability */}
        <g className="fill-zinc-600 font-mono" fontSize="16">
          {[
            { v: 10, label: "Peak" },
            { v: 5, label: "Mid" },
            { v: 0, label: "Low" },
          ].map(({ v, label }) => (
            <text
              key={label}
              x={PAD_L - 10}
              y={yScale(v) + 5}
              textAnchor="end"
            >
              {label}
            </text>
          ))}
        </g>

        {/* X-axis years — larger font so they render legibly when SVG scales down */}
        <g className="fill-zinc-400 font-mono" fontSize="20">
          {data.map((d) => (
            <text
              key={d.year}
              x={xScale(d.year)}
              y={VIEWBOX_H - PAD_B + 30}
              textAnchor="middle"
            >
              {d.year}
            </text>
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

        {/* Data points + labels */}
        {points.map((p, i) => {
          const isPeak = p.mood === "up";
          const isDip = p.mood === "down";
          const dotColor = isDip ? "#fbbf24" : isPeak ? "#34d399" : "#a1a1aa";
          const labelAbove = p.level >= 6;
          const labelY = labelAbove ? p.y - 14 : p.y + 22;

          return (
            <motion.g
              key={p.year}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                inView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0 }
              }
              transition={{
                delay: dotsAfter + i * 0.08,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: `${p.x}px ${p.y}px` }}
            >
              {(isPeak || isDip) && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={9}
                  fill={dotColor}
                  opacity={0.18}
                />
              )}
              <circle
                cx={p.x}
                cy={p.y}
                r={5}
                fill={dotColor}
                stroke="#0a0a0a"
                strokeWidth={2}
              />
              {/* Inline label hidden on mobile (the moments list below carries this info) */}
              <text
                x={p.x}
                y={labelY}
                textAnchor="middle"
                className="hidden fill-zinc-200 font-mono sm:block"
                fontSize="14"
              >
                {p.label}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Legend / detail moments */}
      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((d, i) => {
          const isDip = d.mood === "down";
          const Icon = isDip ? TrendingDown : TrendingUp;
          const colorCls = isDip
            ? "border-amber-400/30 bg-amber-400/5 text-amber-300"
            : "border-accent/30 bg-accent/5 text-accent-300";
          return (
            <motion.li
              key={d.year}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                delay: prefersReduced ? 0 : 0.6 + i * 0.05,
                duration: 0.5,
              }}
              className="rounded-xl border border-border/60 bg-surface/40 p-3"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-lg border ${colorCls}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    {d.year}
                  </p>
                  <p className="truncate text-xs font-semibold text-zinc-100">
                    {d.label}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-zinc-400">
                {d.detail}
              </p>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
