import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#040713] border-t border-blue-500/15 pt-20 pb-24 md:pb-10 overflow-hidden z-10 mt-16 md:mt-32">
      {/* Subtle Electric Blue Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 border-2 border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-all overflow-hidden">
                <img
                  src="/logo-icon-bg.png"
                  alt="TSS Soft."
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-xs font-bold text-blue-400">&lt;/&gt;</span>
                  <span className="text-2xl font-display-xl font-bold text-white tracking-tight">
                    TSS Soft<span className="text-blue-500">.</span>
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">
                  Software Agency
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm mb-8">
              Crafting the future of digital experiences. We build premium, high-performance software for enterprises worldwide, right from Kushtia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-bold mb-6 font-mono text-xs uppercase tracking-widest text-blue-400">Company</h3>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-blue-300 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-slate-400 hover:text-blue-300 transition-colors">Portfolio</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2">Careers <span className="text-[10px] bg-blue-600/30 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Hiring</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 font-mono text-xs uppercase tracking-widest text-blue-400">Resources</h3>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/blog" className="text-slate-400 hover:text-blue-300 transition-colors">Engineering Blog</Link></li>
              <li><Link href="/portfolio" className="text-slate-400 hover:text-blue-300 transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-blue-300 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-blue-300 transition-colors">Legal & Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 font-mono text-xs uppercase tracking-widest text-blue-400">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <a href="mailto:hello@tsssoft.com" className="hover:text-blue-300 transition-colors">hello@tsssoft.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <span>Kushtia, Bangladesh<br/><span className="text-slate-500 text-xs">Operating Worldwide</span></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-mono">
          <p>© {new Date().getFullYear()} TSS Soft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
          <p className="flex items-center gap-1.5 text-blue-400/80">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Crafted with precision in Kushtia
          </p>
        </div>
      </div>
    </footer>
  );
}
