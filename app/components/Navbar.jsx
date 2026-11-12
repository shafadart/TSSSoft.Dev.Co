'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between transition-all duration-300">
        
        {/* Brand: New TSS Soft Main Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-10">
          <div className="h-8 sm:h-9 relative flex items-center">
            <img
              src="/brand/logo-white-cropped.png"
              alt="TSS Soft."
              className="h-full w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)] group-hover:opacity-90 transition-opacity"
            />
          </div>
        </Link>

        {/* Center: Frosted Glass Floating Nav Pill (Matching Reference) */}
        <nav 
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#080d22]/80 backdrop-blur-2xl border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
              : 'bg-[#09112a]/55 backdrop-blur-xl border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          }`}
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                  active
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className="absolute inset-0 rounded-full bg-white/15 border border-white/20 -z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Start Project CTA */}
        <div className="flex items-center gap-2.5 relative z-10">
          {/* Start Project Pill Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 bg-white text-slate-950 font-semibold px-4 sm:px-5 py-2 rounded-full text-xs hover:bg-slate-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-200 active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-3xl bg-[#070e24]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between ${
                      active
                        ? 'bg-white/15 text-white'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-white text-slate-950 py-3 rounded-full font-semibold text-sm shadow-lg flex items-center justify-center gap-1.5"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <div className="text-center text-xs font-mono text-slate-400 mt-1">
                  hello@tsssoft.com • Kushtia, Bangladesh
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
