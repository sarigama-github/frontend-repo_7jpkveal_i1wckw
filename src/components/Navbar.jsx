import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-slate-900/60 border-b border-slate-200/40 dark:border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-slate-900 dark:text-white text-lg">Manov</a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a aria-label="Email" href="mailto:hello@example.com" className="p-2 rounded-lg border border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition">
              <Mail className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            </a>
            <a aria-label="GitHub" href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition">
              <Github className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition">
              <Linkedin className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-slate-200/60 dark:border-slate-800" onClick={() => setOpen((o) => !o)}>
            <Menu className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 dark:border-slate-800">
          <nav className="mx-auto max-w-6xl px-4 py-4 grid gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-700 dark:text-slate-200">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
