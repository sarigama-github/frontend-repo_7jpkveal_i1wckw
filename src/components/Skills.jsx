import { Cpu, Code2, Database, Boxes, Cloud, Wrench, ShieldCheck, Layers, GitBranch } from "lucide-react";

const skills = [
  { title: "Blockchain", items: ["Solidity", "Hardhat", "Foundry", "Ethers.js", "ZK basics", "SBTs"], icon: Cpu },
  { title: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"], icon: Code2 },
  { title: "Backend", items: ["Node.js", "Express", "FastAPI", "GraphQL"], icon: Database },
  { title: "Data & Storage", items: ["MongoDB", "PostgreSQL", "IPFS", "Redis"], icon: Boxes },
  { title: "DevOps", items: ["Docker", "GitHub Actions", "Vercel", "AWS"], icon: Cloud },
  { title: "Utilities", items: ["Git", "Jest", "Playwright", "Swagger"], icon: Wrench },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-5 bg-white/40 dark:bg-slate-900/40">
              <div className="flex items-center gap-3">
                <s.icon className="w-5 h-5 text-sky-500" />
                <h3 className="font-medium text-slate-900 dark:text-white">{s.title}</h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
