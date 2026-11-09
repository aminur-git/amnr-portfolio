"use client";

import { useState } from "react";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: "alpha",
    num: "002",
    year: "2025",
    title: "Alpha",
    kicker: "AI-native hiring, end to end",
    tag: "Platform · 3 products",
    hue: "#3B82F6",
    blurb:
      "An AI-powered hiring platform made of three products that move as one — an ATS, a public job board, and an asynchronous AI interviewer.",
    long: [
      "Alpha ATS is the control center. Alpha Job Board is the candidate-facing portal. Alpha Interview conducts structured video interviews with AI, evaluates answers, and sends a report back into the ATS. Jobs flow through the whole system without a copy-paste in sight.",
      "The hardest problem isn&rsquo;t the AI — it&rsquo;s the handoff between the three surfaces. Every state has to make sense from three different angles.",
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "LLM orchestration"],
    cover: "/projects/alpha/cover.png",
    coverAlt: "Alpha Interview website and hiring dashboard preview",
    logo: "/projects/alpha/logo.png",
    status: "delivered",
    siteUrl: "https://alphainterview.com/",
    link: "#",
  },
  {
    id: "cloudshadow",
    num: "001",
    year: "2025",
    title: "The Cloud Shadow LLC",
    kicker: "Lead Developer for AEG",
    tag: "Internal software · AEG",
    hue: "#2766A9",
    blurb:
      "As Lead Developer at The Cloud Shadow LLC, I manage 8+ internal applications for Alliance Environmental Group (AEG), including fleet management, a custom CRM, automations, and an LMS.",
    long: [
      "The Cloud Shadow provides internal software services to AEG. I lead development across its application portfolio, building tools around the needs of the people who use them every day.",
      "The work spans fleet operations, customer management, staff learning, and workflow automation. Fleet tools include Samsara integrations and reporting; the wider suite helps AEG teams run their day-to-day work.",
    ],
    stack: ["React", "TypeScript", "AWS Lambda", "Supabase", "Samsara API"],
    logo: "/projects/cloudshadow/logo.png",
    status: "working",
    siteUrl: "https://www.thecloudshadow.com/",
    link: "#",
  },
  {
    id: "sekkain",
    num: "003",
    year: "2026",
    title: "Sekkain",
    kicker: "A library built for listening",
    tag: "Audiobooks · Streaming",
    hue: "#8C2E05",
    blurb:
      "A live audiobook streaming platform my team and I delivered in a couple of months, with a custom library, memberships, and an admin management portal.",
    long: [
      "The client wanted people to enjoy audiobooks without exposing the original tracks as direct downloads. We built the listening library, membership experience, and admin portal to manage the catalog and its users.",
      "The fun part is the playback: M3U8 streams the audio while the platform controls access to the media. After a couple of months of work with my team, Sekkain is delivered and online.",
    ],
    stack: ["Next.js 16", "Supabase", "TypeScript", "Tailwind"],
    cover: "/projects/sekkain/cover.png",
    coverAlt: "Sekkain audiobook platform artwork",
    logo: "/projects/sekkain/logo.png",
    status: "delivered",
    siteUrl: "https://sekkain.com",
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
    status: "delivered",
    link: "#",
  },
  {
    id: "quran",
    num: "005",
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
    status: "delivered",
    link: "#",
  },
];

const currentProjects = projects.filter((project) => project.status !== "delivered");
const archivedProjects = projects.filter((project) => project.status === "delivered");

function ProjectTableHeader() {
  return (
    <div className="hidden md:grid grid-cols-12 gap-4 label text-ink/50 pb-3 border-b border-ink/25">
      <div className="col-span-1">N°</div>
      <div className="col-span-5">Project</div>
      <div className="col-span-3">Kind</div>
      <div className="col-span-2">Year</div>
      <div className="col-span-1 text-right">↗</div>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="relative bg-parchment/50 border-y border-ink/15">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-36">
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
              A selection of products I&rsquo;ve helped build with teams. Open a
              case to see the problem behind the software.
            </p>
          </div>
        </div>

        <div aria-labelledby="current-work-heading">
          <div className="flex items-center gap-4 mb-5">
            <h3 id="current-work-heading" className="label text-ember">Current work</h3>
            <span className="flex-1 rule" />
            <span className="label text-ink/60">{currentProjects.length} ongoing</span>
          </div>
          <ProjectTableHeader />
          <div>
            {currentProjects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                open={open === p.id}
                onToggle={() => setOpen(open === p.id ? null : p.id)}
              />
            ))}
          </div>
        </div>

        <div aria-labelledby="archive-heading" className="mt-16 md:mt-20">
          <div className="flex items-center gap-4 mb-5">
            <h3 id="archive-heading" className="frx text-[40px] sm:text-[52px] leading-none">Archive</h3>
            <span className="flex-1 rule" />
            <span className="label text-ink/60">{archivedProjects.length} delivered</span>
          </div>
          <ProjectTableHeader />
          <div>
            {archivedProjects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                open={open === p.id}
                onToggle={() => setOpen(open === p.id ? null : p.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
