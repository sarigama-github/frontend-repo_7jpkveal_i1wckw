import { ExternalLink, Link as LinkIcon, Boxes } from "lucide-react";

const projects = [
  {
    title: "Veritas Protocol",
    description: "Professional identity with zero‑knowledge attestations and Soulbound Tokens for verifiable credentials.",
    tech: ["Solidity", "ZK", "SBT", "Next.js", "Ethers.js"],
    links: { demo: "#", repo: "#" },
  },
  {
    title: "Avashray",
    description: "Transparent micro‑finance protocol on an Avalanche subnet enabling compliant, community‑driven lending.",
    tech: ["Avalanche", "Solidity", "Subnets", "Node", "React"],
    links: { demo: "#", repo: "#" },
  },
  {
    title: "LegiWise AI",
    description: "Multilingual legal‑intelligence SaaS for search, summarization, and drafting with domain‑tuned models.",
    tech: ["Next.js", "FastAPI", "LLMs", "MongoDB"],
    links: { demo: "#", repo: "#" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 p-5 hover:border-sky-300/60 dark:hover:border-sky-700/60 transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <Boxes className="w-5 h-5 text-sky-500" />
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.links.demo} className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 text-sm">
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
                <a href={p.links.repo} className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white text-sm">
                  <LinkIcon className="w-4 h-4" /> Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
