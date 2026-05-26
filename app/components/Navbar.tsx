"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/journey", label: "Journey", section: "journey" },
  { href: "/#experience", label: "Experience", section: "experience" },
  { href: "/projects", label: "Projects", section: "projects" },
  { href: "/#about", label: "About", section: "about" },
  { href: "/#skills", label: "Skills", section: "skills" },
  { href: "/#domains", label: "Domains", section: "domains" },
  { href: "/#education", label: "Education", section: "education" },
  { href: "/#contact", label: "Contact", section: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    links.forEach((l) => {
      if (l.href.startsWith("/#")) {
        const el = document.getElementById(l.section);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (link: (typeof links)[number]) => {
    if (link.href.startsWith("/") && !link.href.startsWith("/#")) {
      return pathname === link.href;
    }
    return pathname === "/" && active === link.section;
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/75 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container-max section-padding flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold text-zinc-100"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/50 bg-accent/15 text-accent-300 backdrop-blur-md transition-all group-hover:bg-accent/25 group-hover:shadow-glow-accent">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="hidden font-mono text-sm tracking-wide sm:inline">
            sabuj<span className="text-accent-400">.qa</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => {
            const active = isActive(l);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={clsx(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-accent-300"
                      : "text-zinc-400 hover:text-zinc-100"
                  )}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden xl:block">
          <Link href="/#contact" className="btn-primary">
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border/80 bg-surface/90 text-zinc-100 backdrop-blur-md transition-colors hover:border-accent/40 hover:text-accent-300 xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border/60 bg-background/95 backdrop-blur-xl xl:hidden"
          >
            <ul className="section-padding py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-surface hover:text-accent-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
