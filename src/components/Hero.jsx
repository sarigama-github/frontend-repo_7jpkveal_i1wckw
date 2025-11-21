import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-30 bg-gradient-to-b from-sky-400/40 via-cyan-500/30 to-indigo-500/20" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-white/40 dark:bg-slate-900/40 px-3 py-1 text-xs text-sky-700 dark:text-sky-300 mb-5">
              Web3-Entrepreneur & Full-Stack Developer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Manov <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-400">Goswami</span>
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl">
              Building trustworthy digital identity and decentralized products. I craft modern web apps, smart contracts, and AI-driven experiences.
            </p>
          </div>

          <div className="h-[380px] sm:h-[460px] md:h-[520px] rounded-2xl overflow-hidden ring-1 ring-slate-200/60 dark:ring-slate-800/60 bg-white/30 dark:bg-slate-900/30">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
