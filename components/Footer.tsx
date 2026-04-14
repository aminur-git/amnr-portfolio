export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink text-bone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <span className="label text-ember">Colophon — Say hello</span>
            <h3 className="frx text-[13vw] md:text-[7vw] leading-[0.9] mt-4">
              Write to me,
              <br />
              <span className="frx-italic text-ember">slowly.</span>
            </h3>
            <p className="font-editorial text-[22px] italic text-bone/75 mt-6 max-w-[40ch]">
              I read every email. I answer most of them. Long letters preferred.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@aminur.dev"
                className="px-5 py-3 bg-ember text-bone label hover:bg-bone hover:text-ink transition"
              >
                hello@aminur.dev →
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
                Reading <em className="frx-italic">The Unreality of Time</em> — McTaggart.
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
              <div className="label text-bone/50 mb-2">Last updated</div>
              <div className="frx-italic text-[22px]">a quiet Tuesday</div>
            </div>
          </div>
        </div>

        <div className="rule mt-16 opacity-40" />

        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 label text-bone/55">
          <span>© {year} Aminur Rahman — all footnotes reserved</span>
          <span>Set in Fraunces, Instrument Serif & JetBrains Mono</span>
          <span>Made slowly, on purpose</span>
        </div>
      </div>
    </footer>
  );
}
