"use client";

type Plate = { src: string; caption: string };

const PLATES: Plate[] = [
  { src: "/portrait.jpg", caption: "available light" },
  { src: "/portrait-1.jpg", caption: "in transit" },
  { src: "/portrait-5.jpg", caption: "at the desk" },
  { src: "/portrait-6.jpg", caption: "the long read" },
  { src: "/portrait-7.jpg", caption: "chai hour" },
];

export default function ContactSheet() {
  return (
    <div className="relative my-10 md:my-14 py-8 px-4 sm:px-6 border-y border-ink/15 bg-parchment/40">
      <div className="flex items-center gap-3 mb-5">
        <span className="label text-ember">Contact sheet</span>
        <span className="flex-1 rule" />
        <span className="label text-ink/50">ROLL 02 · 2024–26</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
        {PLATES.map((p, i) => (
          <figure
            key={i}
            className="group relative bg-ink p-1.5 border border-ink/40 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-ink">
              <img
                src={p.src}
                alt={`Plate ${i + 1} — ${p.caption}`}
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.6] contrast-[1.05] group-hover:grayscale-0 transition duration-500"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  (t.nextElementSibling as HTMLElement).style.display = "flex";
                }}
                draggable={false}
              />
              <div
                className="absolute inset-0 hidden items-center justify-center label text-bone/30 text-center px-2 bg-ink"
                style={{ display: "none" }}
              >
                plate {String(i + 1).padStart(2, "0")}
              </div>
              <span className="absolute top-1.5 left-1.5 label text-[9px] text-bone/80">
                · {String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute bottom-1.5 right-1.5 label text-[9px] text-ember">
                ◉
              </span>
            </div>
            <figcaption className="mt-1.5 px-0.5 font-editorial italic text-[12px] sm:text-[13px] text-bone/80 truncate">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-5 text-[13px] text-ink/55 font-editorial italic">
        The in-between frames. None of them made the cover.
      </p>
    </div>
  );
}
