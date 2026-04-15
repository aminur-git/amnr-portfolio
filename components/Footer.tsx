export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink text-bone">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <span className="label text-ember">Colophon — Say hello</span>
            <h3 className="frx text-[14vw] sm:text-[11vw] md:text-[7vw] leading-[0.9] mt-4">
              Write to me,
              <br />
              <span className="frx-italic text-ember">slowly.</span>
            </h3>
            <p className="font-editorial text-[18px] sm:text-[22px] italic text-bone/75 mt-6 max-w-[40ch]">
              I read every email. I answer most of them. Long letters preferred.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:aminur@aqren.dev"
                className="px-5 py-3 bg-ember text-bone label hover:bg-bone hover:text-ink transition"
              >
                aminur@aqren.dev →
              </a>
              <a
                href="https://github.com/aminur-git"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 border border-bone/30 label hover:bg-bone hover:text-ink transition"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01e10ec4df578dbc27"
                target="_blank"
                rel="noreferrer"
                className="group relative px-5 py-3 border border-bone/30 label hover:bg-bone hover:text-ink transition inline-flex items-center gap-2"
              >
                <span>Upwork ↗</span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-ember text-bone text-[9px] leading-none tracking-[0.14em]">
                  ★ Top Rated
                </span>
              </a>
              <a
                href="#"
                className="px-5 py-3 border border-bone/30 label hover:bg-bone hover:text-ink transition"
              >
                Read.cv
              </a>
              <a
                href="#"
                className="px-5 py-3 border border-bone/30 label hover:bg-bone hover:text-ink transition"
              >
                Are.na
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:pl-6 md:border-l md:border-bone/15">
            <div className="label text-bone/50 mb-4">Now</div>
            <ul className="space-y-3 text-[16px] leading-[1.55] text-bone/85">
              <li>
                <span className="label text-ember mr-2">01</span>
                Reading <em className="frx-italic">The Unreality of Time</em> —
                McTaggart.
              </li>
              <li>
                <span className="label text-ember mr-2">02</span>
                Tinkering with local-first sync over Bluetooth LE.
              </li>
              <li>
                <span className="label text-ember mr-2">03</span>
                Learning to make proper biryani from my mother, finally.
              </li>
            </ul>

            <div className="mt-8">
              <div className="label text-bone/50 mb-3">On Upwork</div>
              <a
                href="https://www.upwork.com/freelancers/~01e10ec4df578dbc27"
                target="_blank"
                rel="noreferrer"
                className="block border border-bone/20 p-4 hover:border-ember transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 border border-ember rounded-full text-ember text-[18px] leading-none">
                    ♛
                  </div>
                  <div>
                    <div className="frx text-[22px] leading-none">100%</div>
                    <div className="label text-bone/60 mt-1">Job success</div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-bone/15 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-ember text-bone text-[16px]">
                    ★
                  </div>
                  <div>
                    <div className="frx-italic text-[18px] leading-none">
                      Top Rated
                    </div>
                    <div className="label text-bone/60 mt-1">
                      verified freelancer
                    </div>
                  </div>
                </div>
                <div className="mt-3 label text-bone/45 group-hover:text-ember transition">
                  View profile ↗
                </div>
              </a>
            </div>

            <div className="mt-8">
              <div className="label text-bone/50 mb-2">Last updated</div>
              <div className="frx-italic text-[22px]">a quiet Tuesday</div>
            </div>
          </div>
        </div>

        <div className="rule mt-16 opacity-40" />

        {/* permanent dedication — quietly, every visit */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-bone/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="text-ember text-[18px]">✦</span>
            <span className="font-editorial italic text-[18px] text-bone/85">
              Every page here is, quietly, for Hadi.
            </span>
          </div>
          <div className="label text-bone/55">
            শহীদ ওসমান হাদি · 1993 — 2025
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 label text-bone/55 text-[10px] sm:text-[11px]">
          <span>© {year} Aminur Rahman — all footnotes reserved</span>
          <span>Set in Fraunces, Instrument Serif & JetBrains Mono</span>
          <span>Made slowly, on purpose</span>
        </div>
      </div>
    </footer>
  );
}
