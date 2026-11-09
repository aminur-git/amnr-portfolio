"use client";

import type { Section } from "@/app/page";
import PolaroidStack from "./PolaroidStack";

export default function Hero({
  setSection,
}: {
  setSection: (s: Section) => void;
}) {
  const go = (id: Section) => {
    setSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const bio = (
    <>
      I&rsquo;m Aminur, CTO of{" "}
      <a
        href="https://www.aqren.dev/en"
        className="underline decoration-ember underline-offset-4 hover:text-ember transition-colors"
      >
        Aqren Dev
      </a>
      . In the age of AI, building an app from a set of requirements is easier
      than ever. The harder, more valuable work is understanding a client&rsquo;s
      business and the problem they need to solve. That&rsquo;s why I start with
      the business perspective, lead teams through clear communication, and ship
      products that work for real people.
    </>
  );

  return (
    <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-32 overflow-hidden">
      {/* decorative corner ornament */}
      <svg
        className="absolute top-6 right-4 sm:top-10 sm:right-6 md:right-10 drift pointer-events-none"
        width="44"
        height="44"
        viewBox="0 0 48 48"
        aria-hidden
      >
        <path className="scribble" d="M6 24 C 14 6, 34 42, 42 24" />
        <circle cx="24" cy="24" r="2.2" fill="#C2410C" />
      </svg>

      {/* file label */}
      <div
        className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-10 rise"
        style={{ animationDelay: "100ms" }}
      >
        <span className="label text-ember">File 00 —</span>
        <span className="label text-ink/60">A self-portrait, softly</span>
        <span className="hidden sm:inline label text-ink/30">·</span>
        <span className="label text-ink/50">
          held, always, for Hadi{" "}
          <span className="text-ember">✦</span>{" "}
          <span className="text-ink/35">1993 — 2025</span>
        </span>
      </div>

      {/* portrait + blurb: stacked on mobile, side column on md+ */}
      <div className="grid grid-cols-12 gap-6 md:gap-10">
        {/* LEFT — headline */}
        <div className="col-span-12 md:col-span-8 lg:col-span-8 order-2 md:order-1">
          <h1
            className="frx rise text-[12vw] sm:text-[12vw] md:text-[9.5vw] lg:text-[8.8vw] leading-[0.88] tracking-tightest"
            style={{ animationDelay: "180ms" }}
          >
            Enterprise
            <br />
            software,{" "}
            <span className="relative inline-block">
              <span className="underline-hand">built from</span>
            </span>
            <br />
            <span className="frx-italic text-ember">business</span>{" "}
            <span className="frx-italic"> sense.</span>
          </h1>

          {/* bio paragraph — only on md+ under the headline for desktop breathing room */}
          <p
            className="hidden md:block mt-8 font-editorial text-[22px] lg:text-[26px] leading-[1.3] text-ink/85 max-w-3xl rise"
            style={{ animationDelay: "360ms" }}
          >
            {bio}
          </p>
        </div>

        {/* RIGHT — portrait + CTA column */}
        <div className="col-span-12 md:col-span-4 order-1 md:order-2 flex flex-col items-stretch ">
          <div className="md:flex-1 md:flex md:items-center md:justify-center">
            <PolaroidStack />
          </div>

          {/* mobile-only bio under portrait */}
          <p className="md:hidden mt-8 font-editorial text-[20px] sm:text-[22px] leading-[1.3] text-ink/85">
            {bio}
          </p>

          <div className="mt-8 md:mt-10">
            <div className="rule mb-4" />
            <p className="text-[14px] sm:text-[15px] leading-[1.65] text-ink/75">
              This is my side of the work: how I think, what I&rsquo;ve built
              with teams, and the business problems behind the software.
              Explore the work, or stay for chai.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:justify-center">
              <button
                onClick={() => go("work")}
                className="px-4 py-2.5 bg-ink text-bone label hover:bg-ember transition-colors"
              >
                See the work →
              </button>
              <button
                onClick={() => go("play")}
                className="px-4 py-2.5 border border-ink/40 label hover:bg-ink hover:text-bone transition"
              >
                Or skip to chai
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* index pill strip */}
      <div
        className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/15 border border-ink/15 rise"
        style={{ animationDelay: "520ms" }}
      >
        {[
          { k: "Public repos", v: "39+", note: "and shipping" },
          { k: "Stack", v: "React · TS", note: "Next, Tailwind, Node" },
          { k: "Based in", v: "Bangladesh", note: "remote-friendly" },
          { k: "Chai consumed", v: "∞ cups", note: "roughly" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-bone p-4 sm:p-5 md:p-6 flex flex-col gap-1.5 hover:bg-parchment/60 transition"
          >
            <span className="label text-ink/50">{s.k}</span>
            <span className="frx text-[24px] sm:text-[28px] md:text-[32px] leading-none">
              {s.v}
            </span>
            <span className="font-editorial italic text-ink/60 text-[14px] sm:text-[15px]">
              {s.note}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
