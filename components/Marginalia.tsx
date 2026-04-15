"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Variant = "whisper" | "date" | "name" | "quote";

const CONTENT: Record<Variant, { big: string; small: string }> = {
  whisper: { big: "ইনকিলাব জিন্দাবাদ", small: "a voice, still carrying" },
  date: { big: "১৯৯৩ — ২০২৫", small: "held close" },
  name: { big: "শহীদ ওসমান হাদি", small: "remembered, quietly" },
  quote: {
    big: "কথা বলা বন্ধ হয় না",
    small: "words do not stop",
  },
};

export default function Marginalia({
  variant = "whisper",
  tone = "light",
}: {
  variant?: Variant;
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  const { big, small } = CONTENT[variant];

  const isDark = tone === "dark";

  return (
    <div
      ref={ref}
      aria-hidden
      className={`relative overflow-hidden border-y ${
        isDark ? "bg-ink border-bone/10" : "bg-parchment/40 border-ink/10"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-5 md:py-6 flex items-center justify-between gap-3 sm:gap-4">
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <span
            className={`w-6 h-px ${isDark ? "bg-bone/30" : "bg-ink/25"}`}
          />
          <span
            className={`label ${isDark ? "text-bone/50" : "text-ink/50"}`}
          >
            for Hadi
          </span>
        </div>

        <motion.div
          className="flex-1 flex items-center justify-center gap-4 overflow-hidden"
          style={{ x, opacity }}
        >
          <span
            className={`frx-italic text-[22px] sm:text-[28px] md:text-[34px] leading-none whitespace-nowrap ${
              isDark ? "text-bone/85" : "text-ink/80"
            }`}
          >
            {big}
          </span>
          <span className="text-ember text-[20px] md:text-[22px] leading-none">
            ✦
          </span>
          <span
            className={`font-editorial italic text-[15px] md:text-[17px] leading-none whitespace-nowrap ${
              isDark ? "text-bone/55" : "text-ink/55"
            }`}
          >
            {small}
          </span>
        </motion.div>

        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <span
            className={`label ${isDark ? "text-bone/50" : "text-ink/50"}`}
          >
            1993 — 2025
          </span>
          <span
            className={`w-6 h-px ${isDark ? "bg-bone/30" : "bg-ink/25"}`}
          />
        </div>
      </div>
    </div>
  );
}
