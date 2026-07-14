'use client';

export default function TermsOfServicePage() {
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full bg-surface/50 dark:bg-surface/50 backdrop-blur-md border border-white/10 shadow-xl z-50 flex justify-between items-center px-8 py-4">
        <a href="/" className="text-headline-lg-mobile font-headline-lg-mobile font-bold text-on-surface dark:text-on-surface">T.S.S. Soft.</a>
        <div className="hidden md:flex items-center space-x-8 font-body-md text-body-md">
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/">Home</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/about">About</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/services">Services</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/portfolio">Portfolio</a>
        </div>
        <a className="text-on-surface-variant font-bold border-b-2 border-transparent pb-1 hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-transform duration-200 hover:scale-95 font-body-md text-body-md" href="/contact">Contact</a>
      </nav>

      <main className="max-w-4xl mx-auto pt-40 pb-20 px-4 min-h-screen">
        <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: July 2026</p>
        
        <div className="text-slate-400 text-lg leading-relaxed space-y-6">
          <p>By accessing and using the services of T.S.S. Soft, you accept and agree to be bound by the terms and provision of this agreement. Furthermore, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          
          <h2 className="text-white font-semibold text-2xl mt-10 mb-4">Intellectual Property Rights</h2>
          <p>Other than the content you own, under these Terms, T.S.S. Soft and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>

          <h2 className="text-white font-semibold text-2xl mt-10 mb-4">Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Publishing any Website material in any other media</li>
            <li>Selling, sublicensing and/or otherwise commercializing any Website material</li>
            <li>Using this Website in any way that is or may be damaging to this Website</li>
            <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity</li>
          </ul>

          <h2 className="text-white font-semibold text-2xl mt-10 mb-4">Limitation of Liability</h2>
          <p>In no event shall T.S.S. Soft, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. T.S.S. Soft, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
        </div>
      </main>

      
    </>
  );
}
