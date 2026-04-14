"use client";

import { useState } from "react";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: "alpha",
    num: "001",
    year: "2025",
    title: "Alpha",
    kicker: "AI-native hiring, end to end",
    tag: "Platform · 3 products",
    hue: "#C2410C",
    blurb:
      "An AI-powered hiring platform made of three products that move as one — an ATS, a public job board, and an asynchronous AI interviewer.",
    long: [
      "Alpha ATS is the control center. Alpha Job Board is the candidate-facing portal. Alpha Interview conducts structured video interviews with AI, evaluates answers, and sends a report back into the ATS. Jobs flow through the whole system without a copy-paste in sight.",
      "The hardest problem isn&rsquo;t the AI — it&rsquo;s the handoff between the three surfaces. Every state has to make sense from three different angles.",
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "LLM orchestration"],
    link: "#",
  },
  {
    id: "cloudshadow",
    num: "002",
    year: "2025",
    title: "CloudShadow",
    kicker: "Fleets, made legible",
    tag: "Platform · Samsara",
    hue: "#556052",
    blurb:
      "A fleet management and analytics platform built on top of the Samsara API — fuel analytics, cost tracking, and a standalone dashboard for ops teams.",
    long: [
      "Two halves in one system: a React + TypeScript app for the public surface and a Samsara-powered dashboard for the ops view. Data lives in AWS — Lambda for processing, S3 for storage, API Gateway between them.",
      "There&rsquo;s a companion automation service that quietly pulls service logs out of Samsara every night, converts them, and lands them in Supabase Storage. Nobody sees it work. That&rsquo;s the goal.",
    ],
    stack: ["React", "TypeScript", "AWS Lambda", "Supabase", "Samsara API"],
    link: "#",
  },
  {
    id: "sekkain",
    num: "003",
    year: "2026",
    title: "Sekkain",
    kicker: "Built on the new Next.js",
    tag: "App · Next 16",
    hue: "#8C2E05",
    blurb:
      "A production app on Next.js 16 + Supabase — a live rewrite of assumptions, leaning into the new caching model and cache-components.",
    long: [
      "Most of what I know about Next.js stopped applying here. `use cache`, `cacheLife`, `cacheTag`, `updateTag`. No `cache()` from React, no stale patterns.",
      "Writing it has been equal parts thrilling and humbling. Every guide online is slightly wrong. The docs inside `node_modules/next/dist/docs` are the only source of truth.",
    ],
    stack: ["Next.js 16", "Supabase", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    id: "fieldflo",
    num: "004",
    year: "2025",
    title: "Fieldflo Automation",
    kicker: "An inbox that files its own paperwork",
    tag: "Automation · Lambda",
    hue: "#C2410C",
    blurb:
      "An email-to-report automation service. A lead email arrives, the lead ID is parsed, a FieldFlo report is downloaded and delivered — no human in the loop.",
    long: [
      "Runs on AWS Lambda behind API Gateway. Accepts raw email bodies from Zapier (JSON or text/plain), extracts lead IDs, authenticates against FieldFlo, fetches the report, and mails it onward.",
      "The kind of tool whose best review is silence. It saves a team I know a couple of hours every day.",
    ],
    stack: ["Node.js", "AWS Lambda", "API Gateway", "Docker"],
    link: "#",
  },
  {
    id: "aqren",
    num: "005",
    year: "2025",
    title: "Aqren",
    kicker: "Ship fast, scale further",
    tag: "Studio · Brand",
    hue: "#15120E",
    blurb:
      "A small studio for full-stack MVPs — the thing I wish existed when I first started freelancing. Launch in weeks, scale without refactoring.",
    long: [
      "Aqren is positioned around one idea: most MVPs get thrown out because they were built as throwaways. We try to write them like they&rsquo;re going to last — because, every now and then, they do.",
      "The site itself is a statement — typography-led, deliberately un-loud, no stock illustrations.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Cloudflare Pages"],
    link: "#",
  },
  {
    id: "quran",
    num: "006",
    year: "2024",
    title: "The Quran Circle",
    kicker: "Study, slowly, together",
    tag: "Community",
    hue: "#556052",
    blurb:
      "A small corner of the internet for reading the Quran together — verses, commentary, and a room for the questions you were told not to ask.",
    long: [
      "Designed around conversation, not consumption. No feed. No streaks. Just a table, a book, and the people who showed up tonight.",
      "React + TypeScript + Vite. Light stack, long hours. The kind of project I&rsquo;d keep running even if nobody else used it.",
    ],
    stack: ["React", "TypeScript", "Vite"],
    link: "#",
  },
];

export default function Projects() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="relative bg-parchment/50 border-y border-ink/15">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-12 gap-6 mb-12 items-end">
          <div className="col-span-12 md:col-span-8">
            <span className="label text-ember">Chapter 02 — The Work</span>
            <h2 className="frx text-[13vw] md:text-[7.5vw] leading-[0.9] mt-4">
              Things I made,
              <br />
              <span className="frx-italic">on purpose.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10">
            <div className="rule mb-4" />
            <p className="font-editorial text-[18px] leading-[1.45] text-ink/80">
              Click a row. Some rooms have furniture inside.
            </p>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-12 gap-4 label text-ink/50 pb-3 border-b border-ink/25">
          <div className="col-span-1">N°</div>
          <div className="col-span-5">Project</div>
          <div className="col-span-3">Kind</div>
          <div className="col-span-2">Year</div>
          <div className="col-span-1 text-right">↗</div>
        </div>

        <div>
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              open={open === p.id}
              onToggle={() => setOpen(open === p.id ? null : p.id)}
            />
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4 text-ink/60">
          <span className="label">Archive</span>
          <span className="flex-1 rule" />
          <span className="label italic frx-italic text-[16px]">
            most of the rest lives behind NDAs
          </span>
        </div>
      </div>
    </section>
  );
}
