export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-5 bg-white/40 dark:bg-slate-900/40">
            <h3 className="font-semibold text-slate-900 dark:text-white">Hackathon Wins</h3>
            <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-5">
              <li>Status Code 2 — TeamMate AI</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-5 bg-white/40 dark:bg-slate-900/40">
            <h3 className="font-semibold text-slate-900 dark:text-white">Publications</h3>
            <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-5">
              <li>“How‑To‑Hackathons — A Developer’s Handbook”</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-5 bg-white/40 dark:bg-slate-900/40">
            <h3 className="font-semibold text-slate-900 dark:text-white">Startup Outcomes</h3>
            <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-5">
              <li>Blueprints and validated concepts for Veritas, Avashray, and LegiWise AI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
