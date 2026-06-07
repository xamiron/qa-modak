"use client";

import {
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Reveal from "./Reveal";
import { personal } from "../data";
import { openResumeInNewTabAndDownload } from "../utils/resume";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s|-|\(|\)/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-y relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-fade blur-3xl" />
      </div>

      <div className="container-max section-padding">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur-md sm:rounded-3xl sm:p-8 md:p-12 lg:p-16">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-grid opacity-30 mask-fade-b"
            />

            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="section-heading">
                  <span aria-hidden className="h-px w-8 bg-accent" /> Contact
                </p>
                <h2 id="contact-heading" className="section-title">
                  Let&apos;s build{" "}
                  <span className="gradient-text">reliable software</span>{" "}
                  together.
                </h2>
                <p className="section-subtitle">
                  Have a product that needs serious QA, automation, or security
                  testing? I&apos;m open to full-time roles, contract work, and
                  consulting engagements.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={`mailto:${personal.email}`}
                    className="btn-primary btn-mobile-full"
                  >
                    <Send className="h-4 w-4" />
                    Send a message
                  </a>
                  <button
                    type="button"
                    onClick={openResumeInNewTabAndDownload}
                    className="btn-secondary btn-mobile-full"
                    aria-label="View resume in new tab and download PDF"
                  >
                    <FileText className="h-4 w-4" />
                    View Resume
                  </button>
                </div>
              </div>

              <ul className="space-y-3">
                {contactItems.map((item) => {
                  const Inner = (
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          {item.label}
                        </p>
                        <p className="break-all text-xs font-medium text-zinc-200 sm:break-words sm:text-sm">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block rounded-xl border border-border bg-surface/60 p-4 transition-all hover:border-accent/40 hover:bg-surface-2"
                        >
                          {Inner}
                        </a>
                      ) : (
                        <div className="block rounded-xl border border-border bg-surface/60 p-4">
                          {Inner}
                        </div>
                      )}
                    </li>
                  );
                })}

                <li className="flex items-center gap-3 pt-2">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/60 text-zinc-300 transition-all hover:border-accent/50 hover:text-accent-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/60 text-zinc-300 transition-all hover:border-accent/50 hover:text-accent-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
