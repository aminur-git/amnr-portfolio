"use client";

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
  const go = (id: Section) => {
    setSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-30 mix-blend-multiply">
      <div className="backdrop-blur-[2px] bg-bone/70 border-b border-ink/15">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-6">
          <button
            onClick={() => go("home")}
            className="flex items-baseline gap-2 group"
            aria-label="Aminur Rahman"
          >
            <span className="frx text-[28px] leading-none">Aminur</span>
            <span className="frx-italic text-[28px] leading-none text-ember">Rahman</span>
            <span className="label text-ink/50 ml-1">®</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = section === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`group relative px-4 py-2 flex items-center gap-2 transition ${
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

          <div className="hidden md:flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ember opacity-60 blink" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
            </span>
            <span className="label text-ink/70">Open to wander</span>
          </div>
        </div>
      </div>
    </header>
  );
}
