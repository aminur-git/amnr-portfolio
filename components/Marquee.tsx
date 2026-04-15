import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGraphql,
  SiSupabase,
  SiVercel,
  SiGooglecloud,
  SiFirebase,
} from "react-icons/si";

export default function Marquee() {
  const items = [
    {
      text: "TypeScript",
      icon: <SiTypescript className="inline-block mr-2" />,
    },
    { text: "✦" },
    { text: "React", icon: <SiReact className="inline-block mr-2" /> },
    { text: "✦" },
    { text: "Next.js", icon: <SiNextdotjs className="inline-block mr-2" /> },
    { text: "✦" },
    {
      text: "Tailwind CSS",
      icon: <SiTailwindcss className="inline-block mr-2" />,
    },
    { text: "✦" },
    { text: "Node.js", icon: <SiNodedotjs className="inline-block mr-2" /> },
    { text: "✦" },
    {
      text: "PostgreSQL",
      icon: <SiPostgresql className="inline-block mr-2" />,
    },
    { text: "✦" },
    { text: "GraphQL", icon: <SiGraphql className="inline-block mr-2" /> },
    { text: "✦" },
    { text: "Supabase", icon: <SiSupabase className="inline-block mr-2" /> },
    { text: "✦" },
    { text: "Vercel", icon: <SiVercel className="inline-block mr-2" /> },
    { text: "✦" },
    {
      text: "Google Cloud",
      icon: <SiGooglecloud className="inline-block mr-2" />,
    },
    { text: "✦" },
    { text: "Firebase", icon: <SiFirebase className="inline-block mr-2" /> },
    { text: "✦" },
  ];

  const row = [...items, ...items];

  return (
    <section
      aria-hidden
      className="relative border-y border-ink/20 bg-ink text-bone overflow-hidden"
    >
      <div className="flex items-center marquee whitespace-nowrap py-4">
        {row.map((item, i) => (
          <span
            key={i}
            className={`flex items-center frx-italic text-[28px] md:text-[38px] px-6 ${
              item.text === "✦" ? "text-ember not-italic" : ""
            }`}
          >
            {item.icon}
            {item.text}
          </span>
        ))}
      </div>
    </section>
  );
}
