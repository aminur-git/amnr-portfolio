"use client";

import { useEffect, useMemo, useState } from "react";

type Contribution = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

type ApiResp = {
  total: Record<string, number>;
  contributions: Contribution[];
};

const USER = "aminur-git";

// ember tints for the 5 intensity levels — empty → darkest
const TINT = ["#E8DFC9", "#F3C9A8", "#E89968", "#C2410C", "#7A2705"];

export default function GithubGraph() {
  const [data, setData] = useState<Contribution[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`)
      .then((r) => r.json() as Promise<ApiResp>)
      .then((j) => {
        if (!alive) return;
        setData(j.contributions);
      })
      .catch((e) => alive && setErr(String(e)));
    return () => {
      alive = false;
    };
  }, []);

  const { weeks, total, streak, busiest } = useMemo(() => {
    if (!data) return { weeks: [] as Contribution[][], total: 0, streak: 0, busiest: null as Contribution | null };
    // last 52 weeks — pad front so columns align to Sunday
    const tail = data.slice(-371);
    const first = new Date(tail[0].date);
    const pad = first.getDay(); // 0 = Sunday
    const cells: (Contribution | null)[] = [
      ...Array(pad).fill(null),
      ...tail,
    ];
    const w: (Contribution | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) w.push(cells.slice(i, i + 7));
    const total = tail.reduce((a, c) => a + c.count, 0);
    let s = 0;
    for (let i = tail.length - 1; i >= 0; i--) {
      if (tail[i].count > 0) s++;
      else break;
    }
    const busiest = tail.reduce(
      (a, c) => (c.count > (a?.count ?? -1) ? c : a),
      null as Contribution | null
    );
    return { weeks: w as Contribution[][], total, streak: s, busiest };
  }, [data]);

  const CELL = 12;
  const GAP = 3;
  const W = weeks.length * (CELL + GAP);
  const H = 7 * (CELL + GAP);

  return (
    <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28">
      <div className="grid grid-cols-12 gap-6 items-end mb-10">
        <div className="col-span-12 md:col-span-8">
          <span className="label text-ember">Interlude — Receipts</span>
          <h2 className="frx text-[11vw] md:text-[5.8vw] leading-[0.92] mt-3">
            A year in <span className="frx-italic">commits.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="rule mb-4" />
          <p className="font-editorial text-[17px] leading-[1.5] text-ink/80">
            Pulled live from GitHub. Most real work lives in private repos, but
            the rhythm is honest.
          </p>
        </div>
      </div>

      <figure className="relative border border-ink/20 bg-bone p-4 sm:p-5 md:p-8 shadow-[6px_8px_0_rgba(21,18,14,0.08)]">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-ember blink" />
            <span className="label text-ink/70">github.com/{USER}</span>
          </div>
          <span className="label text-ink/50">last 12 months</span>
        </div>

        <div className="overflow-x-auto">
          {err ? (
            <div className="h-[120px] flex items-center justify-center label text-ink/50">
              couldn&rsquo;t reach GitHub just now
            </div>
          ) : !data ? (
            <div className="h-[120px] flex items-center justify-center label text-ink/40 fade">
              fetching commits…
            </div>
          ) : (
            <svg
              width={W}
              height={H}
              viewBox={`0 0 ${W} ${H}`}
              className="min-w-[720px]"
              role="img"
              aria-label="GitHub contribution graph"
            >
              {weeks.map((col, x) =>
                col.map((cell, y) =>
                  cell ? (
                    <rect
                      key={`${x}-${y}`}
                      x={x * (CELL + GAP)}
                      y={y * (CELL + GAP)}
                      width={CELL}
                      height={CELL}
                      rx={2}
                      fill={TINT[cell.level]}
                    >
                      <title>{`${cell.date}: ${cell.count} contribution${cell.count === 1 ? "" : "s"}`}</title>
                    </rect>
                  ) : null
                )
              )}
            </svg>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 label text-ink/55">
            <span>less</span>
            {TINT.map((c, i) => (
              <span
                key={i}
                className="inline-block w-3 h-3 rounded-[2px] border border-ink/10"
                style={{ background: c }}
              />
            ))}
            <span>more</span>
          </div>
          <a
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noreferrer"
            className="label underline-hand hover:text-ember transition"
          >
            Visit profile →
          </a>
        </div>

        <figcaption className="mt-3 font-editorial italic text-[16px] text-ink/55">
          quiet weeks are for thinking
        </figcaption>
      </figure>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
        {[
          { k: "Contributions · yr", v: data ? total.toLocaleString() : "—" },
          { k: "Current streak", v: data ? `${streak}d` : "—" },
          {
            k: "Busiest day",
            v: busiest ? `${busiest.count}` : "—",
            note: busiest ? busiest.date : "",
          },
          { k: "Public repos", v: "39+" },
        ].map((s, i) => (
          <div key={i} className="bg-bone p-5 flex flex-col gap-1">
            <span className="label text-ink/50">{s.k}</span>
            <span className="frx text-[26px] leading-none">{s.v}</span>
            {"note" in s && s.note ? (
              <span className="font-editorial italic text-[14px] text-ink/55">
                {s.note}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
