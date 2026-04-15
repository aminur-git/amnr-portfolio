"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type Quote = {
  bn: string;
  en: string;
  date?: string;
  featured?: boolean;
};

const QUOTES: Quote[] = [
  {
    bn: "আমি তো ভীষণভাবে প্রত্যাশা করি, আমি তো ছোটোবেলা থেকে স্বপ্ন দেখি—একটা তুমুল মিছিল হচ্ছে অন্যায়ের বিরুদ্ধে, সেই মিছিলের সামনে আমি আছি, কোনো একটা বুলেট এসে হয়তো আমার বুকটা বিদ্ধ করে দিয়েছে! এবং সেই মিছিলে হাসতে হাসতে আমি শহীদ হয়ে গেছি।",
    en: "I have hoped, fiercely — since childhood I have dreamed of a massive march against injustice, and I am at its head, and perhaps a bullet has pierced my chest. And in that march, smiling, I have been martyred.",
    featured: true,
  },
  {
    bn: "বিপ্লবীর মৃত্যু ঘরের মধ্যে হতে পারে না, তার মৃত্যু হবে রাজপথে গ্লোরির মৃত্যু।",
    en: "A revolutionary cannot die inside a home. His death will be on the streets — a death of glory.",
  },
  {
    bn: "দাসত্বই যে জমিনের নিশ্চল নিয়তি, লড়াই-ই সেখানে সর্বোত্তম এবাদত।",
    en: "Where slavery is the still fate of the land, struggle itself is the highest act of worship.",
  },
  {
    bn: "সুযোগের ভয় দেখিয়ে লাভ নেই, লড়াই চলবে।",
    en: "There is no use threatening us with opportunity withheld — the fight goes on.",
    date: "4 September 2025",
  },
  {
    bn: "আমি শত্রুর সাথেও ইনসাফ করতে চাই।",
    en: "I want to stand for justice — even with my enemy.",
  },
];

const LINKS = [
  {
    label: "Wikipedia",
    desc: "the short version of a long life",
    href: "https://en.wikipedia.org/wiki/Osman_Hadi",
  },
  {
    label: "Al Jazeera",
    desc: "who he was, why the country stopped",
    href: "https://www.aljazeera.com/news/2025/12/19/who-was-osman-hadi-why-is-bangladesh-on-fire-over-his-death",
  },
  {
    label: "The Daily Star",
    desc: "\u201chis death will haunt us forever\u201d",
    href: "https://www.thedailystar.net/opinion/views/news/hadis-death-will-haunt-us-forever-4062726",
  },
  {
    label: "UN News",
    desc: "the call for calm, the night it happened",
    href: "https://news.un.org/en/story/2025/12/1166642",
  },
];

function QuoteCard({ q, index }: { q: Quote; index: number }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${q.bn}\n\n— Shaheed Sharif Osman Bin Hadi`,
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className={`relative group break-inside-avoid mb-5 p-6 md:p-7 border transition-colors ${
        q.featured
          ? "bg-[#fbf3e3] border-ink/15 text-ink"
          : "bg-bone/[0.04] border-bone/20 text-bone hover:bg-bone/[0.07]"
      }`}
    >
      <span
        className={`frx text-[56px] leading-[0.6] block mb-3 ${
          q.featured ? "text-ink/25" : "text-bone/25"
        }`}
        aria-hidden
      >
        &ldquo;
      </span>

      <blockquote
        className={`frx text-[21px] md:text-[24px] leading-[1.45] ${
          q.featured ? "text-ink" : "text-bone"
        }`}
        lang="bn"
        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 20, "wght" 420' }}
      >
        {q.bn}
      </blockquote>

      <p
        className={`mt-4 font-editorial italic text-[15px] md:text-[16px] leading-[1.5] ${
          q.featured ? "text-ink/70" : "text-bone/65"
        }`}
      >
        {q.en}
      </p>

      <div
        className={`mt-5 pt-4 border-t flex items-center justify-between gap-3 ${
          q.featured ? "border-ink/15" : "border-bone/15"
        }`}
      >
        <div className="flex items-center gap-2">
          {q.featured && (
            <span className="px-2.5 py-1 bg-[#b08a3a] text-bone label text-[10px] rounded-sm">
              Featured
            </span>
          )}
          {q.date && (
            <span
              className={`label ${q.featured ? "text-ink/55" : "text-bone/55"}`}
            >
              {q.date}
            </span>
          )}
          {!q.date && !q.featured && (
            <span className="label text-bone/45">— Hadi</span>
          )}
        </div>
        <button
          onClick={copy}
          aria-label="Copy quote"
          className={`text-[18px] transition ${
            q.featured
              ? "text-ink/40 hover:text-ink"
              : "text-bone/40 hover:text-bone"
          }`}
        >
          {copied ? (
            <span className="label text-ember">copied</span>
          ) : (
            <span aria-hidden>⎘</span>
          )}
        </button>
      </div>
    </motion.figure>
  );
}

export default function Tribute() {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animation frames setup
  const frameCount = 236;
  const currentFrame = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  // Preload and draw images
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Pad to 3 digits (e.g. 001)
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
      images.push(img);
      img.onload = () => {
        loaded++;
        if (loaded === 1) {
          // Set canvas size dynamically based on the first loaded frame
          canvas.width = images[0].naturalWidth;
          canvas.height = images[0].naturalHeight;
          // Draw the first frame once it's loaded as fallback
          context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
        }
      };
    }

    const render = (progress: number) => {
      if (images.length === 0) return;
      const frameIndex =
        Math.min(Math.max(1, Math.round(progress)), frameCount) - 1;
      if (images[frameIndex] && images[frameIndex].complete) {
        context.drawImage(
          images[frameIndex],
          0,
          0,
          canvas.width,
          canvas.height,
        );
      }
    };

    // Subscripe to motion value changes
    const unsubscribe = currentFrame.on("change", (latest) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => render(latest));
    });

    return () => unsubscribe();
  }, [currentFrame, frameCount]);

  const s = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.4,
  });
  const imgY = useTransform(s, [0, 1], ["6%", "-6%"]);
  const banglaY = useTransform(s, [0, 1], ["15%", "-25%"]);
  const banglaOpacity = useTransform(s, [0, 0.3, 0.7, 1], [0, 0.1, 0.1, 0]);

  return (
    <section
      ref={ref}
      aria-label="A page I keep for Shaheed Sharif Osman Bin Hadi"
      className="relative w-full bg-ink text-bone overflow-hidden"
    >
      {/* wash */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(55% 55% at 15% 15%, rgba(183,32,39,0.32) 0%, transparent 60%), radial-gradient(55% 65% at 100% 100%, rgba(122,155,160,0.22) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.22] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute left-[-6%] top-[4%] frx-italic text-[22vw] md:text-[13vw] leading-[0.85] text-bone whitespace-nowrap pointer-events-none select-none"
        style={{ y: banglaY, opacity: banglaOpacity }}
      >
        ইনকিলাব জিন্দাবাদ
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-20 md:py-28">
        {/* HEADER ROW */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-7 order-2 md:order-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-bone/60" />
              <span className="label text-bone/80">A page I keep</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="frx text-[12vw] md:text-[5.8vw] leading-[0.92] tracking-tightest"
            >
              for <span className="frx-italic text-ember">Hadi</span> bhai —
              <br />
              the brother I never met.
            </motion.h2>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 label text-bone/70">
              <span>Shaheed Sharif Osman Bin Hadi</span>
              <span className="text-bone/40">·</span>
              <span>30 জুন 1993 — 18 ডিসেম্বর 2025</span>
              <span className="text-bone/40 hidden sm:inline">·</span>
              <span>Spokesperson, Inqilab Mancha</span>
            </div>

            <div className="mt-7 space-y-4 max-w-[56ch]">
              <p className="font-editorial text-[18px] md:text-[21px] leading-[1.55] text-bone/90">
                I am writing this the way I&rsquo;d talk about an older brother
                — quietly, carefully, without trying to polish it. I never met
                him. But there are people who change you without ever learning
                your name, and he is one of them.
              </p>
              <p className="font-editorial text-[17px] md:text-[19px] leading-[1.55] text-bone/80">
                In July 2024 he stood in front of a crowd that was being asked
                to be silent, and refused on our behalf. On 12 December 2025
                they shot him in Paltan. He died in Singapore three days later.
                Our country stopped for a day. A part of it has not started
                again.
              </p>
              <p className="font-editorial italic text-[16px] md:text-[18px] leading-[1.55] text-bone/70">
                This tribute is not political. It is a son of the same soil
                saying <span className="text-bone">thank you</span>, and{" "}
                <span className="text-bone">I am still here</span>.
              </p>
            </div>
          </div>

          {/* image */}
          <div className="col-span-12 md:col-span-5 order-1 md:order-2 flex items-center justify-center">
            <motion.figure
              className="relative w-full max-w-[320px] md:max-w-[380px]"
              style={{ y: imgY }}
            >
              <div className="absolute -inset-2 md:-inset-3 bg-bone/95 shadow-[0_16px_48px_rgba(0,0,0,0.5)]" />
              <canvas
                ref={canvasRef}
                className="relative w-full h-auto block"
              />
              <figcaption className="relative mt-3 flex items-center justify-between label text-ink/70 bg-bone/90 px-3 py-1.5">
                <span>ঢাকা · Dhaka</span>
                <span className="text-ember">1993 — 2025</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>

        {/* QUOTES */}
        <div className="mt-20 md:mt-28">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="label text-ember">His words</span>
              <h3 className="frx text-[9vw] md:text-[4.2vw] leading-[0.95] mt-2 tracking-tightest">
                Kept here, so they{" "}
                <span className="frx-italic">keep going.</span>
              </h3>
            </div>
            <span className="label text-bone/45 max-w-[34ch] text-right">
              tap any card to copy · বাংলা original, with a gentle English
              reading below
            </span>
          </div>

          <div className="md:columns-2 md:gap-5">
            {QUOTES.map((q, i) => (
              <QuoteCard key={i} q={q} index={i} />
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div className="mt-20 md:mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="label text-ember">If you want to know him</span>
            <span className="flex-1 h-px bg-bone/15" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 border border-bone/10">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group bg-ink p-5 md:p-6 hover:bg-[#1f1b15] transition flex flex-col gap-2"
              >
                <div className="flex items-start justify-between">
                  <span className="label text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="label text-bone/40 group-hover:text-ember transition">
                    ↗
                  </span>
                </div>
                <div className="frx text-[26px] leading-none mt-2">
                  {l.label}
                </div>
                <div className="font-editorial italic text-[15px] text-bone/65 leading-[1.4]">
                  {l.desc}
                </div>
              </a>
            ))}
          </div>

          <p className="mt-8 font-editorial italic text-[17px] md:text-[19px] leading-[1.55] text-bone/75 max-w-[58ch]">
            If you knew him, or were touched by him the way I was — write to me.
            I am collecting small things: the good Tuesdays, the lines worth
            remembering, the people who keep going on his behalf.
          </p>

          <a
            href="mailto:amnr@aqren.dev?subject=For%20Hadi"
            className="inline-flex mt-4 items-center gap-2 px-5 py-3 bg-ember text-bone label hover:bg-bone hover:text-ink transition"
          >
            Write to me, for Hadi →
          </a>
        </div>
      </div>
    </section>
  );
}
