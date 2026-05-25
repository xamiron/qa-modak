"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  durationMs?: number;
  className?: string;
};

/**
 * Animates the numeric portion of a value (e.g. "2.5+", "20+") from 0 to target
 * once the element scrolls into view. Non-numeric values (e.g. "OWASP") are
 * rendered as static text.
 */
export default function CountUp({
  value,
  durationMs = 1400,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const prefersReduced = useReducedMotion();

  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const isInteger = target !== null && Number.isInteger(target);

  const [display, setDisplay] = useState<string>(
    target === null ? value : "0" + suffix
  );

  useEffect(() => {
    if (target === null) return;
    if (!inView) return;

    if (prefersReduced) {
      setDisplay(
        (isInteger ? target.toString() : target.toFixed(1)) + suffix
      );
      return;
    }

    const controls = animate(0, target, {
      duration: durationMs / 1000,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        const formatted = isInteger
          ? Math.round(latest).toString()
          : latest.toFixed(1);
        setDisplay(formatted + suffix);
      },
    });

    return () => controls.stop();
  }, [inView, target, suffix, durationMs, isInteger, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
