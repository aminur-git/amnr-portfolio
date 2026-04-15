"use client";

const steps = [
  { t: "00:00", h: "Cold water", b: "One cup. Room temperature. Heat on medium." },
  { t: "01:30", h: "Aromatics", b: "Crush three green cardamom pods, a thin slice of ginger, one small cinnamon shard." },
  { t: "03:00", h: "Tea", b: "Two teaspoons of loose black tea — Assam, strong, honest." },
  { t: "05:00", h: "Milk", b: "Half a cup of whole milk. Do not apologize for it." },
  { t: "07:30", h: "The lift", b: "Raise the pan just as it rises to the rim. Lower it. Do this three times. This is the ceremony." },
  { t: "08:30", h: "Sweeten", b: "Sugar to taste. I take mine at 1.5 teaspoons — about as sweet as a small mercy." },
  { t: "09:00", h: "Strain", b: "Pour through a fine sieve into a small steel cup. Hold it with both hands." },
];

export default function Recipe() {
  return (
    <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-36">
      <div className="grid grid-cols-12 gap-6 mb-12 items-end">
        <div className="col-span-12 md:col-span-8">
          <span className="label text-ember">Chapter 03 — Play / Appendix</span>
          <h2 className="frx text-[13vw] md:text-[7.5vw] leading-[0.9] mt-4">
            How to make
            <br />
            <span className="frx-italic">my chai.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-3 md:col-start-10">
          <div className="rule mb-4" />
          <p className="font-editorial text-[18px] leading-[1.45] text-ink/80">
            Included because a portfolio without a recipe is a résumé in a trench coat.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* left: the card */}
        <div className="col-span-12 md:col-span-5 relative">
          <div className="relative bg-bone border border-ink/25 p-5 sm:p-7 md:p-10 rotate-[-0.6deg] shadow-[6px_8px_0_rgba(21,18,14,0.12)]">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="label text-ember">Recipe card</div>
                <div className="frx text-[32px] sm:text-[42px] leading-none mt-1">Doodh Cha</div>
                <div className="font-editorial italic text-ink/65 text-[16px] sm:text-[18px] mt-1">
                  Dhaka winter, serves one
                </div>
              </div>
              <div className="text-right">
                <div className="label text-ink/50">Est.</div>
                <div className="frx text-[26px] leading-none">2013</div>
              </div>
            </div>

            <div className="rule my-5" />

            <ul className="space-y-3 text-[17px] leading-[1.55]">
              <li className="flex gap-3">
                <span className="label text-ink/50 w-20 shrink-0">Water</span>
                <span>1 cup · cold · tap, unbothered</span>
              </li>
              <li className="flex gap-3">
                <span className="label text-ink/50 w-20 shrink-0">Milk</span>
                <span>½ cup whole milk</span>
              </li>
              <li className="flex gap-3">
                <span className="label text-ink/50 w-20 shrink-0">Tea</span>
                <span>2 tsp loose Assam</span>
              </li>
              <li className="flex gap-3">
                <span className="label text-ink/50 w-20 shrink-0">Spice</span>
                <span>3 cardamom · 1 sliver ginger · cinnamon</span>
              </li>
              <li className="flex gap-3">
                <span className="label text-ink/50 w-20 shrink-0">Sugar</span>
                <span>1½ tsp · adjust downward, never up</span>
              </li>
            </ul>

            <svg
              className="absolute -top-4 -right-4 drift"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              aria-hidden
            >
              <path className="scribble" d="M10 54 C 22 36, 42 52, 54 10" />
              <circle cx="54" cy="10" r="3" fill="#C2410C" />
            </svg>
          </div>

          <div className="mt-6 pl-2 text-ink/60 font-editorial italic text-[17px]">
            Makes one small cup. Makes a slightly bigger Tuesday.
          </div>
        </div>

        {/* right: the timeline */}
        <div className="col-span-12 md:col-span-7">
          <ol className="relative">
            {steps.map((s, i) => (
              <li key={i} className="grid grid-cols-12 gap-3 sm:gap-4 py-4 sm:py-5 border-b border-ink/15">
                <div className="col-span-4 sm:col-span-3 md:col-span-2">
                  <div className="frx text-[22px] sm:text-[26px] md:text-[30px] leading-none">{s.t}</div>
                  <div className="label text-ink/50 mt-2 text-[10px]">Step {String(i + 1).padStart(2, "0")}</div>
                </div>
                <div className="col-span-8 sm:col-span-9 md:col-span-10">
                  <div className="font-editorial text-[20px] sm:text-[24px] leading-tight">{s.h}</div>
                  <p className="text-[15px] sm:text-[16px] leading-[1.65] text-ink/75 mt-1 max-w-[56ch]">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 p-5 sm:p-6 border border-dashed border-ink/30 bg-whisper/50">
            <div className="label text-ember mb-2">Margin note</div>
            <p className="font-editorial text-[18px] sm:text-[20px] italic leading-[1.5] text-ink/85">
              &ldquo;The best chai is the one you made for someone else, and then sat down beside
              them to drink.&rdquo;
            </p>
            <div className="label text-ink/50 mt-3">— my grandmother, approximately</div>
          </div>
        </div>
      </div>
    </section>
  );
}
