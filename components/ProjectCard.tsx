"use client";

import { motion, AnimatePresence } from "framer-motion";

export type Project = {
  id: string;
  num: string;
  year: string;
  title: string;
  kicker: string;
  tag: string;
  hue: string;
  blurb: string;
  long: string[];
  stack: string[];
  link: string;
};

export default function ProjectCard({
  project,
  open,
  onToggle,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-ink/20 group">
      <button
        onClick={onToggle}
        className="w-full text-left py-5 sm:py-6 md:py-7 grid grid-cols-12 gap-x-3 gap-y-2 sm:gap-4 items-center transition-colors hover:bg-bone/70"
      >
        <div className="col-span-2 md:col-span-1 label text-ink/50">{project.num}</div>

        <div className="col-span-10 md:col-span-5 flex flex-col md:flex-row md:items-baseline md:gap-4">
          <span
            className="frx text-[32px] sm:text-[38px] md:text-[54px] leading-[0.95] tracking-tightest"
            style={{ color: open ? project.hue : undefined }}
          >
            {project.title}
          </span>
          <span
            className="font-editorial italic text-[16px] md:text-[20px] text-ink/65 leading-snug"
            dangerouslySetInnerHTML={{ __html: project.kicker }}
          />
        </div>

        <div className="col-span-6 md:col-span-3">
          <span
            className="inline-flex items-center gap-2 px-2.5 py-1 border border-ink/30 label"
            style={{ color: project.hue }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: project.hue }}
            />
            {project.tag}
          </span>
        </div>

        <div className="col-span-4 md:col-span-2 label text-ink/60">{project.year}</div>

        <div className="col-span-2 md:col-span-1 text-right">
          <span
            className={`inline-flex w-9 h-9 items-center justify-center border border-ink/30 rounded-full transition-transform ${
              open ? "rotate-45 bg-ink text-bone" : ""
            }`}
            aria-hidden
          >
            +
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-6 pb-10 pt-2">
              <div
                className="col-span-12 md:col-span-5 relative h-[220px] sm:h-[260px] md:h-full min-h-[280px] rounded-sm overflow-hidden border border-ink/15"
                style={{
                  background: `radial-gradient(120% 80% at 20% 10%, ${project.hue}33, transparent 60%), linear-gradient(135deg, ${project.hue}14, ${project.hue}02)`,
                }}
              >
                <div className="absolute inset-0 dot-grid opacity-40" />
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="label text-ink/70">Case N° {project.num}</span>
                    <span className="label text-ink/70">{project.year}</span>
                  </div>
                  <div>
                    <div
                      className="frx text-[42px] sm:text-[54px] md:text-[76px] leading-[0.9] break-words"
                      style={{ color: project.hue }}
                    >
                      {project.title}
                    </div>
                    <div
                      className="font-editorial italic text-[20px] text-ink/75 mt-2"
                      dangerouslySetInnerHTML={{ __html: project.kicker }}
                    />
                  </div>
                </div>
                <svg
                  className="absolute bottom-5 right-5 drift"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  aria-hidden
                >
                  <path
                    className="scribble"
                    d="M8 52 C 20 30, 40 48, 52 8"
                    stroke={project.hue}
                  />
                </svg>
              </div>

              <div className="col-span-12 md:col-span-7 md:pl-4">
                <p className="font-editorial text-[19px] sm:text-[22px] md:text-[24px] leading-[1.4] text-ink/90">
                  {project.blurb}
                </p>
                <div className="rule my-5" />
                {project.long.map((p, i) => (
                  <p
                    key={i}
                    className="text-[16px] md:text-[17px] leading-[1.7] text-ink/75 mt-3 max-w-[62ch]"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="label px-2.5 py-1 bg-ink/5 border border-ink/15"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    className="px-4 py-2.5 bg-ink text-bone label hover:bg-ember transition-colors inline-flex items-center gap-2"
                  >
                    Open case file →
                  </a>
                  <a
                    href={project.link}
                    className="px-4 py-2.5 border border-ink/40 label hover:bg-ink hover:text-bone transition"
                  >
                    Read the notes
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
