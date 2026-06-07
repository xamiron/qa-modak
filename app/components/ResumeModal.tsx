"use client";

import { Download, ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import { personal } from "../data";

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <button
        type="button"
        aria-label="Close resume viewer"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="card relative z-10 flex h-[min(90vh,820px)] w-full max-w-4xl flex-col overflow-hidden shadow-glow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
          <div>
            <h2
              id="resume-modal-title"
              className="text-sm font-semibold text-zinc-100 sm:text-base"
            >
              {personal.name} — Resume
            </h2>
            <p className="text-xs text-zinc-500">QA Engineer CV</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-3 py-2 text-xs sm:text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Tab
            </a>
            <a
              href={personal.resume}
              download="Sabuj_Kumar_Modak_QA.pdf"
              className="btn-primary px-3 py-2 text-xs sm:text-sm"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface/70 text-zinc-400 transition-colors hover:border-accent/50 hover:text-accent-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <iframe
          src={`${personal.resume}#view=FitH`}
          title={`${personal.name} resume`}
          className="min-h-0 flex-1 bg-white"
        />
      </div>
    </div>
  );
}
