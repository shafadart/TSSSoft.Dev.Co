'use client';

import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const handleLogoClick = (e) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full relative bg-[#060a1a] dark:bg-[#030612] text-slate-300 border-t border-slate-200/10 dark:border-white/10 pt-20 pb-16 overflow-hidden z-10 transition-colors duration-300">
      
      {/* Background Volumetric Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link 
              href="/" 
              onClick={handleLogoClick}
              className="inline-block group cursor-pointer"
              aria-label="TSS Soft Home"
            >
              <div className="h-8 relative flex items-center">
                <img
                  src="/brand/logo-white-cropped.png"
                  alt="TSS Soft."
                  className="h-full w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-opacity group-hover:opacity-90"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              Engineering high-resilience digital systems, custom web architectures, and native mobile applications. Built with precision for ambitious businesses.
            </p>
            <div className="flex gap-2.5 pt-2">
              <a 
                href="https://facebook.com/tsssoft" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all group"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a 
                href="https://linkedin.com/company/tsssoft" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all group"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href="https://github.com/shafadart" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all group"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-5 text-xs uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About TSS Soft</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Services &amp; Stack</Link></li>
              <li><Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2">Careers <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full uppercase tracking-wider">Open</span></Link></li>
            </ul>
          </div>

          {/* Capabilities Column */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-5 text-xs uppercase tracking-wider">Capabilities</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Web Architecture</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Mobile Platforms</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Cloud &amp; APIs</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy &amp; Terms</Link></li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-5 text-xs uppercase tracking-wider">Direct Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-300">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <a href="mailto:hello@tsssoft.com" className="hover:text-white transition-colors font-mono text-xs tracking-wider">hello@tsssoft.com</a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <span className="material-symbols-outlined text-[16px] mt-0.5 text-blue-400">call</span>
                <a href="tel:+8801870955900" className="hover:text-white transition-colors font-mono text-xs tracking-wider">+880 1870 955 900</a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="text-xs">Kushtia, Bangladesh<br/><span className="text-slate-500 font-mono text-[11px]">Operating Worldwide</span></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-normal">
          <p>© {new Date().getFullYear()} TSS Soft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>All systems operational (99.98% SLA)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
