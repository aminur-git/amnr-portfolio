"use client";

import { useState } from "react";

type Shot = {
  src: string;
  num: string;
  caption: string;
  accent?: string;
};

const SHOTS: Shot[] = [
  {
    src: "/portrait.jpg",
    num: "N° 000",
    caption: "somewhere, last spring",
  },
  {
    src: "/portrait-1.jpg",
    num: "N° 001",
    caption: "a kitchen, late",
  },
  {
    src: "/portrait-2.jpg",
    num: "N° 002",
    caption: "field notes, in progress",
  },
];

// per-card base rotation — small, uneven, intentional
const ROT = [2.2, -4.5, 6];

export default function PolaroidStack() {
  const [top, setTop] = useState(0);

  const next = () => setTop((t) => (t + 1) % SHOTS.length);

  return (
    <div
      className="relative mx-auto md:mx-0 w-[220px] sm:w-[240px] md:w-full md:max-w-[260px] h-[320px] sm:h-[340px] md:h-[360px] select-none"
      onClick={next}
      role="button"
      aria-label="Flip through photos"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && next()}
    >
      {SHOTS.map((s, i) => {
        // distance from the top card, going into the stack
        const depth = (i - top + SHOTS.length) % SHOTS.length;
        const isTop = depth === 0;
        const rot = ROT[i] + depth * -2.4;
        const translate = depth * 10;
        const scale = 1 - depth * 0.04;
        const z = SHOTS.length - depth;

        return (
          <figure
            key={s.src}
            className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
              isTop ? "cursor-pointer" : "cursor-pointer"
            }`}
            style={{
              transform: `translate(${translate}px, ${translate * 0.6}px) rotate(${rot}deg) scale(${scale})`,
              zIndex: z,
              opacity: depth >= 3 ? 0 : 1,
            }}
          >
            <div className="bg-bone border border-ink/20 p-3 pb-5 shadow-[8px_10px_0_rgba(21,18,14,0.12)] h-full flex flex-col">
              <div className="relative flex-1 overflow-hidden bg-parchment">
                <img
                  src={s.src}
                  alt={`Portrait ${s.num}`}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.15] contrast-[1.02]"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    (t.nextElementSibling as HTMLElement).style.display =
                      "flex";
                  }}
                  draggable={false}
                />
                <div
                  className="absolute inset-0 hidden items-center justify-center label text-ink/40 bg-parchment text-center px-3"
                  style={{ display: "none" }}
                >
                  drop {s.src.replace("/", "")}
                </div>
                <span className="absolute top-2 left-2 label text-ink/60 bg-bone/80 px-1.5 py-0.5">
                  {s.num}
                </span>
              </div>
              <figcaption className="mt-3 flex items-center justify-between px-1 shrink-0">
                <span className="font-editorial italic text-[14px] sm:text-[15px] text-ink/70 truncate pr-2">
                  {s.caption}
                </span>
                <span className="label text-ember shrink-0">· A.R.</span>
              </figcaption>
            </div>
          </figure>
        );
      })}

      {/* hint */}
      <div className="absolute -bottom-7 left-0 right-0 flex items-center justify-center gap-2 pointer-events-none">
        <span className="label text-ink/40">tap to flip</span>
        <span className="flex gap-1">
          {SHOTS.map((_, i) => (
            <span
              key={i}
              className={`h-[3px] w-4 transition-colors ${
                i === top ? "bg-ember" : "bg-ink/20"
              }`}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
