export default function Marquee() {
  const items = [
    "Field notes",
    "✦",
    "Local-first",
    "✦",
    "Quiet software",
    "✦",
    "Third cup of chai",
    "✦",
    "Dhaka ↔ Everywhere",
    "✦",
    "Non-linear",
    "✦",
    "Est. 2017",
    "✦",
    "Reluctant philosopher",
    "✦",
  ];

  const row = [...items, ...items];

  return (
    <section
      aria-hidden
      className="relative border-y border-ink/20 bg-ink text-bone overflow-hidden"
    >
      <div className="flex marquee whitespace-nowrap py-4">
        {row.map((t, i) => (
          <span
            key={i}
            className={`frx-italic text-[28px] md:text-[38px] px-6 ${
              t === "✦" ? "text-ember not-italic" : ""
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
