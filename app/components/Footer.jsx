import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#040816]/90 border-t border-white/10 pt-20 pb-20 md:pb-12 overflow-hidden z-10 mt-20">
      
      {/* Background Volumetric Mist */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="h-8 relative flex items-center">
                <img
                  src="/brand/logo-white-cropped.png"
                  alt="TSS Soft."
                  className="h-full w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6 font-light">
              Crafting high-performance digital systems, custom web architectures, and native mobile platforms. From Kushtia to global enterprise scale.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/15 hover:text-white transition-all group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/15 hover:text-white transition-all group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/15 hover:text-white transition-all group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/15 hover:text-white transition-all group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2">Careers <span className="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded-full uppercase tracking-wider">Hiring</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-wider">Capabilities</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Mobile Platforms</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Web Architectures</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Design Systems</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy &amp; Terms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-wider">Direct Contact</h3>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-start gap-2.5 text-slate-300">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <a href="mailto:hello@tsssoft.com" className="hover:text-white transition-colors font-mono text-xs">hello@tsssoft.com</a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="text-xs">Kushtia, Bangladesh<br/><span className="text-slate-500">Operating Worldwide</span></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-light">
          <p>© {new Date().getFullYear()} TSS Soft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="flex items-center gap-1.5 text-slate-400 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Crafted in Kushtia, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
