import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full relative bg-surface-container-lowest border-t border-white/10 pt-20 pb-24 md:pb-10 overflow-hidden z-10 mt-16 md:mt-32">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-display-xl font-bold text-white tracking-tight inline-block mb-6">
              T.S.S. Soft.
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-8">
              Crafting the future of digital experiences. We build premium, high-performance software for enterprises worldwide, right from Kushtia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-bold mb-6 font-label-caps uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-white transition-colors">Careers <span className="ml-2 text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Hiring</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 font-label-caps uppercase tracking-wider text-sm">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Engineering Blog</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 font-label-caps uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail size={18} className="mt-1 flex-shrink-0 text-primary" />
                <a href="mailto:hello@tsssoft.com" className="hover:text-white transition-colors">hello@tsssoft.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-primary" />
                <span>Kushtia, Bangladesh<br/>Operating Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} T.S.S. Soft. Dev. Co. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="flex items-center gap-1">
            Crafted in Kushtia, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
