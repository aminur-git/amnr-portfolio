"use client";

import type { Section } from "@/app/page";

export default function Hero({
  setSection,
}: {
  setSection: (s: Section) => void;
}) {
  const go = (id: Section) => {
    setSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative max-w-[1400px] mx-auto px-6 md:pb-40 overflow-hidden">
      {/* decorative side column */}

      <div className="grid grid-cols-8">
        <div className="grid grid-cols-12 gap-6 items-end col-span-6">
          <div className="col-span-12 md:col-span-10 md:col-start-2  mt-10">
            <div
              className="flex items-center gap-3 mb-6 rise"
              style={{ animationDelay: "100ms" }}
            >
              <span className="label text-ember">File 00 —</span>
              <span className="label text-ink/60">A self-portrait, softly</span>
            </div>

            <h1
              className="frx rise text-[16vw] md:text-[9vw] leading-[0.86] tracking-tightest"
              style={{ animationDelay: "180ms" }}
            >
              Building <span className="frx-italic text-ember">quiet</span>
              <br />
              software{" "}
              <span className="relative inline-block">
                <span className="underline-hand">with loud</span>
              </span>
              <br />
              <span className="frx-italic">intentions.</span>
            </h1>
          </div>
        </div>

        <div className="col-span-2 flex flex-col ">
          <div className="flex-1"></div>
          <div className="flex-1">
            <figure className="mb-7 mx-auto md:mx-0 w-[230px] md:w-[260px] rotate-[2.2deg] hover:rotate-0 transition-transform duration-500">
              <div className="bg-bone border border-ink/20 p-3 pb-5 shadow-[8px_10px_0_rgba(21,18,14,0.12)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
                  {/* swap this src for /portrait.jpg once added */}
                  <img
                    src="/portrait.jpg"
                    alt="Aminur, in available light"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.15] contrast-[1.02]"
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = "none";
                      (t.nextElementSibling as HTMLElement).style.display =
                        "flex";
                    }}
                  />
                  <div
                    className="absolute inset-0 hidden items-center justify-center label text-ink/40 bg-parchment"
                    style={{ display: "none" }}
                  >
                    drop portrait.jpg
                  </div>
                  <span className="absolute top-2 left-2 label text-ink/60 bg-bone/80 px-1.5 py-0.5">
                    N° 001
                  </span>
                </div>
                <figcaption className="mt-3 flex items-center justify-between px-1">
                  <span className="font-editorial italic text-[15px] text-ink/70">
                    somewhere, last spring
                  </span>
                  <span className="label text-ember">· A.R.</span>
                </figcaption>
              </div>
            </figure>
            <div className="rule mb-4" />
            <p className="text-[15px] leading-[1.65] text-ink/75">
              This is a slow page. A non-linear one. Wander between four rooms —
              pick up what you want, leave the rest. There&rsquo;s no correct
              door.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={() => go("work")}
                className="group px-4 py-2.5 bg-ink text-bone label hover:bg-ember transition-colors"
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

          {/* <div>
            <div
              className="mt-10 md:mt-14 gap-6 rise"
              style={{ animationDelay: "360ms" }}
            >
              <p className=" font-editorial text-[22px] md:text-[26px] leading-[1.3] text-ink/85">
                I&rsquo;m Aminur — a builder, tinkerer, and a reluctant
                philosopher who writes code like it&rsquo;s a letter. Sometimes
                I ship things. Sometimes I just brew chai and think.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* index pill strip */}
      <div
        className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/15 border border-ink/15 rise"
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
            className="bg-bone p-5 md:p-6 flex flex-col gap-2 hover:bg-parchment/60 transition"
          >
            <span className="label text-ink/50">{s.k}</span>
            <span className="frx text-[28px] md:text-[32px] leading-none">
              {s.v}
            </span>
            <span className="font-editorial italic text-ink/60 text-[15px]">
              {s.note}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
