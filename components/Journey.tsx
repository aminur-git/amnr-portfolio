"use client";

const entries = [
  {
    year: "2011",
    title: "A borrowed laptop, a dial-up line",
    body: "First line of code was a <marquee> tag. My cousin&rsquo;s machine, my mother&rsquo;s patience. I thought I&rsquo;d invented movement.",
    tag: "origin",
  },
  {
    year: "2015",
    title: "The detour through physics",
    body: "I tried to study the universe and ended up modeling it in Python. The professors called it cheating. I called it a portal.",
    tag: "detour",
  },
  {
    year: "2018",
    title: "First real users, first real bugs",
    body: "Shipped a small tool for a small shop in Dhaka. Eleven humans used it on a Tuesday. I&rsquo;ve been chasing that feeling ever since.",
    tag: "shipping",
  },
  {
    year: "2021",
    title: "Remote, asynchronous, alive",
    body: "Started working across time zones. Learned that silence is a kind of collaboration too, if you trust the people inside it.",
    tag: "async",
  },
  {
    year: "2024",
    title: "Local-first, slow-web, hand-rolled",
    body: "Got tired of cloud-shaped problems. Started writing software that belongs to the person holding the device. Felt like coming home.",
    tag: "now",
  },
];

export default function Journey() {
  return (
    <section className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
      <div className="grid grid-cols-12 gap-6 items-end mb-14">
        <div className="col-span-12 md:col-span-7">
          <span className="label text-ember">Chapter 01 — The long way around</span>
          <h2 className="frx text-[13vw] md:text-[7.5vw] leading-[0.9] mt-4">
            A <span className="frx-italic">winding</span> road,
            <br />
            paved in footnotes.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <div className="rule mb-4" />
          <p className="font-editorial text-[19px] leading-[1.45] text-ink/80">
            The résumé version is boring. Here&rsquo;s the version with the margins still in it —
            the detours, the re-reads, the places I got lost on purpose.
          </p>
        </div>
      </div>

      <ol className="relative border-l border-ink/25 ml-2 md:ml-6">
        {entries.map((e, i) => (
          <li
            key={e.year}
            className="relative pl-8 md:pl-14 pb-14 group"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="absolute -left-[9px] top-1 w-[16px] h-[16px] rounded-full bg-bone border border-ink flex items-center justify-center">
              <span className="w-[6px] h-[6px] rounded-full bg-ember group-hover:scale-[2.2] transition-transform" />
            </span>

            <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
              <div className="col-span-12 md:col-span-2">
                <span className="frx text-[44px] md:text-[54px] leading-none">{e.year}</span>
                <div className="label text-ink/50 mt-2">— {e.tag}</div>
              </div>
              <div className="col-span-12 md:col-span-10">
                <h3 className="font-editorial text-[28px] md:text-[34px] leading-[1.1] text-ink">
                  {e.title}
                </h3>
                <p
                  className="mt-3 text-[17px] md:text-[18px] leading-[1.6] text-ink/75 max-w-[58ch]"
                  dangerouslySetInnerHTML={{ __html: e.body }}
                />
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex items-center gap-3 text-ink/60">
        <span className="label">End of chapter</span>
        <span className="flex-1 rule" />
        <span className="label italic frx-italic text-[16px]">to be continued</span>
      </div>
    </section>
  );
}
