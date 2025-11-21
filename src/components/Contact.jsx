import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Failed');
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-6 bg-white/40 dark:bg-slate-900/40">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input required name="name" placeholder="Your name" className="w-full rounded-lg border border-slate-300/60 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <input required type="email" name="email" placeholder="Your email" className="w-full rounded-lg border border-slate-300/60 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <input required name="subject" placeholder="Subject" className="w-full rounded-lg border border-slate-300/60 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <textarea required name="message" placeholder="Message" rows={5} className="w-full rounded-lg border border-slate-300/60 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <button disabled={loading} className="inline-flex items-center justify-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 disabled:opacity-60">
                {loading ? 'Sending...' : 'Send'}
              </button>
              {status && (
                <p className={`${status.type === 'success' ? 'text-green-600' : 'text-rose-600'} text-sm`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
          <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-6 bg-white/40 dark:bg-slate-900/40">
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>Email: <a href="mailto:manov@example.com" className="text-sky-600">manov@example.com</a></p>
              <p>GitHub: <a href="https://github.com/yourgithub" className="text-sky-600" target="_blank" rel="noreferrer">github.com/yourgithub</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/yourlinkedin" className="text-sky-600" target="_blank" rel="noreferrer">linkedin.com/in/yourlinkedin</a></p>
              <p>Twitter: <a href="https://twitter.com/yourtwitter" className="text-sky-600" target="_blank" rel="noreferrer">@yourtwitter</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
