import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(800px_400px_at_90%_30%,rgba(165,180,252,0.12),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Manov Goswami — All rights reserved.
      </footer>
    </div>
  )
}

export default App