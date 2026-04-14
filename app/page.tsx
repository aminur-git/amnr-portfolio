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

export type Section = "home" | "journey" | "work" | "play";

export default function Page() {
  const [section, setSection] = useState<Section>("home");

  return (
    <main className="relative z-10">
      <Navigation section={section} setSection={setSection} />

      <div id="home" className="section-wrap">
        <Hero setSection={setSection} />
      </div>

      <Marquee />

      <div id="journey" className="section-wrap">
        <Journey />
      </div>

      <div id="work" className="section-wrap">
        <Projects />
      </div>

      <GithubGraph />

      <Orgs />

      <div id="play" className="section-wrap">
        <Recipe />
      </div>

      <Footer />
    </main>
  );
}
