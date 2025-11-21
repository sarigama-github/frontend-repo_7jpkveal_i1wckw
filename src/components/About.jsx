export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">About</h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a builder focused on Web3, full‑stack development, and AI‑enabled products. My current Web3 stack includes Solidity, Hardhat, Next.js, MERN, and IPFS. I enjoy turning complex ideas into elegant, secure, and scalable experiences.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/60 p-4">
                <h3 className="font-medium text-slate-900 dark:text-white">Core startup ideas</h3>
                <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-5">
                  <li>Veritas Protocol — professional identity via ZK proofs & SBTs</li>
                  <li>Avashray — transparent micro‑finance protocol on Avalanche subnet</li>
                  <li>LegiWise AI — multilingual legal‑intelligence SaaS platform</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200/60 dark:border-slate-800/60 p-4">
                <h3 className="font-medium text-slate-900 dark:text-white">Web3 stack</h3>
                <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc pl-5">
                  <li>Solidity, Hardhat, Foundry</li>
                  <li>Next.js, React, Tailwind CSS</li>
                  <li>MERN (MongoDB, Express, React, Node)</li>
                  <li>IPFS / Pinata, Ethers.js, WalletConnect</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
