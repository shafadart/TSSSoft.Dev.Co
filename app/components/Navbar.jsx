'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 transition-all duration-300">
        <nav 
          className={`w-full rounded-full backdrop-blur-xl border transition-all duration-300 flex justify-between items-center px-5 sm:px-8 py-3 sm:py-3.5 shadow-2xl ${
            scrolled 
              ? 'bg-[#050814]/85 border-blue-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)]' 
              : 'bg-[#070b1a]/70 border-white/10 hover:border-blue-500/25 shadow-[0_8px_30px_rgba(0,50,200,0.1)]'
          }`}
        >
          {/* Brand Logo with Icon + Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center p-1 border-2 border-blue-500 shadow-[0_0_16px_rgba(37,99,235,0.45)] group-hover:scale-105 transition-all duration-300 overflow-hidden">
              <img
                src="/logo-icon-bg.png"
                alt="TSS Soft."
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xs font-bold text-blue-400 tracking-tighter">&lt;/&gt;</span>
                <span className="font-headline-lg-mobile font-extrabold text-white text-lg sm:text-xl tracking-tight group-hover:text-blue-300 transition-colors">
                  TSS Soft<span className="text-blue-500">.</span>
                </span>
              </div>
              <span className="hidden sm:block text-[9px] font-mono tracking-[0.2em] text-slate-400 uppercase -mt-0.5">
                Software Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/80 to-blue-500/80 shadow-[0_0_16px_rgba(37,99,235,0.5)] border border-blue-400/40 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-blue-400/30"
            >
              <span>Start a Project</span>
              <span className="text-blue-200 font-bold">&rarr;</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 hover:text-white hover:border-blue-500/40 transition-colors"
              aria-label="Toggle Navigation"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden rounded-3xl bg-[#070b1a]/95 backdrop-blur-2xl border border-blue-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-5 py-3 rounded-2xl text-base font-semibold transition-all ${
                      active
                        ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-full font-semibold shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                >
                  Start a Project &rarr;
                </Link>
                <div className="text-center text-xs font-mono text-slate-400 mt-2">
                  hello@tsssoft.com // Kushtia, BD
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

