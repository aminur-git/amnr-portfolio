"use client";

import { useEffect, useState } from "react";

type Org = {
  login: string;
  name: string;
  blurb: string;
  url: string;
  avatar: string;
  role: string;
};

const ORGS: Org[] = [
  {
    login: "Sekkain",
    name: "Sekkain",
    blurb:
      "A production app on Next.js 16 + Supabase — a live rewrite of assumptions about the modern stack.",
    url: "https://github.com/Sekkain",
    avatar: "https://avatars.githubusercontent.com/u/271235910?v=4",
    role: "Building",
  },
  {
    login: "The-Cloud-Shadow",
    name: "CloudShadow",
    blurb:
      "Fleet management and analytics — Samsara telemetry, fuel analytics, nightly automations.",
    url: "https://github.com/The-Cloud-Shadow",
    avatar: "https://avatars.githubusercontent.com/u/229553442?v=4",
    role: "Building",
  },
  {
    login: "alpha-interview",
    name: "Alpha",
    blurb:
      "AI-native hiring platform — ATS, job board, and asynchronous interviews in one loop.",
    url: "https://github.com/alpha-interview",
    avatar: "https://avatars.githubusercontent.com/u/230657913?v=4",
    role: "Co-building",
  },
  {
    login: "Shoppin",
    name: "Shoppin",
    blurb:
      "A multi-tenant commerce platform — merchant settings, feature flags, and B2B/B2C parity under one roof.",
    url: "https://github.com/Shoppin",
    avatar: "https://avatars.githubusercontent.com/u/9998104?v=4",
    role: "Building",
  },
];

export default function Orgs() {
  const [repos, setRepos] = useState<Record<string, number>>({});

  useEffect(() => {
    let alive = true;
    Promise.all(
      ORGS.map((o) =>
        fetch(`https://api.github.com/orgs/${o.login}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((j) => [o.login, j?.public_repos ?? null] as const)
          .catch(() => [o.login, null] as const)
      )
    ).then((pairs) => {
      if (!alive) return;
      const m: Record<string, number> = {};
      pairs.forEach(([k, v]) => {
        if (v != null) m[k] = v;
      });
      setRepos(m);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section className="relative bg-ink text-bone border-y border-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-6 items-end mb-10">
          <div className="col-span-12 md:col-span-8">
            <span className="label text-ember">Appendix — In good company</span>
            <h2 className="frx text-[11vw] md:text-[5.8vw] leading-[0.92] mt-3">
              Orgs I&rsquo;m <span className="frx-italic text-ember">with.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="rule mb-4 opacity-40" />
            <p className="font-editorial text-[17px] leading-[1.5] text-bone/70">
              Three homes on GitHub, three kinds of work. Some open, some
              deliberately quiet.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/15 border border-bone/15">
          {ORGS.map((o, i) => (
            <a
              key={o.login}
              href={o.url}
              target="_blank"
              rel="noreferrer"
              className="group bg-ink p-6 md:p-8 flex flex-col gap-5 hover:bg-[#1f1b15] transition-colors relative"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="relative">
                  <img
                    src={o.avatar}
                    alt={`${o.name} avatar`}
                    className="w-16 h-16 rounded-full border border-bone/20 object-cover grayscale-[0.2] group-hover:grayscale-0 transition"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-ember text-bone flex items-center justify-center label text-[9px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="label text-bone/40 group-hover:text-ember transition">
                  ↗
                </span>
              </div>

              <div>
                <div className="label text-ember mb-1">{o.role}</div>
                <div className="frx text-[38px] md:text-[42px] leading-[0.95] tracking-tightest">
                  {o.name}
                </div>
                <div className="font-editorial italic text-[15px] text-bone/55 mt-1">
                  @{o.login}
                </div>
              </div>

              <p className="text-[15px] leading-[1.6] text-bone/75 max-w-[38ch]">
                {o.blurb}
              </p>

              <div className="mt-auto pt-4 border-t border-bone/10 flex items-center justify-between">
                <span className="label text-bone/50">Public repos</span>
                <span className="frx text-[22px] leading-none">
                  {repos[o.login] ?? "—"}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 text-bone/45">
          <span className="label">Collaborators welcome</span>
          <span className="flex-1 h-px bg-bone/20" />
          <span className="label italic frx-italic text-[15px]">
            drop me a letter
          </span>
        </div>
      </div>
    </section>
  );
}
