"use client";

import { useEffect, useState } from "react";
import type { Section } from "@/app/page";

const links: { id: Section; label: string; num: string }[] = [
  { id: "home", label: "Index", num: "00" },
  { id: "journey", label: "Journey", num: "01" },
  { id: "work", label: "Work", num: "02" },
  { id: "play", label: "Play", num: "03" },
];

export default function Navigation({
  section,
  setSection,
}: {
  section: Section;
  setSection: (s: Section) => void;
}) {
  const [open, setOpen] = useState(false);

  const go = (id: Section) => {
    setSection(id);
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // lock scroll while the mobile sheet is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-30 mix-blend-multiply">
      <div className="backdrop-blur-[2px] bg-bone/70 border-b border-ink/15">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-6">
          {/* logo */}
          <button
            onClick={() => go("home")}
            className="flex items-baseline gap-1.5 sm:gap-2 group shrink-0"
            aria-label="Aminur Rahman"
          >
            <span className="frx text-[22px] sm:text-[26px] md:text-[28px] leading-none">
              Aminur
            </span>
            <span className="frx-italic text-[22px] sm:text-[26px] md:text-[28px] leading-none text-ember">
              Rahman
            </span>
            <span className="label text-ink/50 ml-0.5 sm:ml-1 hidden sm:inline">
              ®
            </span>
          </button>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = section === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`group relative px-3 lg:px-4 py-2 flex items-center gap-2 transition ${
                    active ? "text-ink" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  <span className="label text-[10px] opacity-60">{l.num}</span>
                  <span className="font-editorial text-[17px] leading-none tracking-tight">
                    {l.label}
                  </span>
                  {active && (
                    <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-ember" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* desktop status pill */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ember opacity-60 blink" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
            </span>
            <span className="label text-ink/70">Open to wander</span>
          </div>

          {/* tiny status dot on tablet */}
          <span className="hidden sm:flex md:flex lg:hidden relative h-2 w-2 mx-1 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-ember opacity-60 blink" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
          </span>

          {/* mobile hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden relative inline-flex items-center gap-2 px-3 py-2 border border-ink/30 bg-bone/60 hover:bg-ink hover:text-bone transition"
          >
            <span className="label text-[10px]">
              {open ? "Close" : "Menu"}
            </span>
            <span className="relative w-4 h-3 shrink-0" aria-hidden>
              <span
                className={`absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[1.5px] bg-current top-1/2 -translate-y-1/2 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>

        {/* mobile sheet */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-400 ease-out ${
            open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-ink/15 bg-bone/95 backdrop-blur">
            <ul className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2">
              {links.map((l) => {
                const active = section === l.id;
                return (
                  <li key={l.id}>
                    <button
                      onClick={() => go(l.id)}
                      className={`w-full flex items-center justify-between gap-4 py-4 border-b border-ink/10 text-left transition ${
                        active ? "text-ink" : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="label text-ink/40 w-6">{l.num}</span>
                        <span className="frx text-[34px] leading-none tracking-tightest">
                          {l.label}
                        </span>
                        {active && (
                          <span className="frx-italic text-ember text-[20px]">
                            here
                          </span>
                        )}
                      </div>
                      <span
                        className={`label transition ${
                          active ? "text-ember" : "text-ink/40"
                        }`}
                      >
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-ember opacity-60 blink" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
                </span>
                <span className="label text-ink/70">Open to wander</span>
              </div>
              <a
                href="mailto:hello@aminur.dev"
                className="label underline-hand hover:text-ember transition"
              >
                Write to me →
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
