"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Recipe from "@/components/Recipe";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import GithubGraph from "@/components/GithubGraph";
import Orgs from "@/components/Orgs";
import Tribute from "@/components/Tribute";
import Marginalia from "@/components/Marginalia";

export type Section = "home" | "journey" | "work" | "play";

export default function Page() {
  const [section, setSection] = useState<Section>("home");

  return (
    <main className="relative z-10">
      <Navigation section={section} setSection={setSection} />

      <div id="home" className="section-wrap">
        <Hero setSection={setSection} />
      </div>

      {/* whisper — between home and the tech-stack marquee */}
      <Marginalia variant="whisper" />

      <Marquee />

      <div id="journey" className="section-wrap">
        <Journey />
      </div>

      {/* the held page — sits deep in the middle, not at the end */}
      <Tribute />

      <div id="work" className="section-wrap">
        <Projects />
      </div>

      {/* whisper — between work and the receipts */}
      <Marginalia variant="quote" />

      <GithubGraph />

      <Orgs />

      {/* whisper — last breath before play */}
      <Marginalia variant="date" tone="dark" />

      <div id="play" className="section-wrap">
        <Recipe />
      </div>

      <Footer />
    </main>
  );
}
