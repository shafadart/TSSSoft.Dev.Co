'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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
      <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between transition-all duration-300">
        
        {/* Brand: Dual-mode Logo (Blue in Light, White in Dark) */}
        <Link href="/" className="flex items-center gap-2 group relative z-10">
          <div className="h-8 sm:h-9 relative flex items-center">
            {/* Light Mode Logo */}
            <img
              src="/brand/logo-blue-cropped.png"
              alt="TSS Soft."
              className="h-full w-auto object-contain block dark:hidden transition-opacity group-hover:opacity-90"
            />
            {/* Dark Mode Logo */}
            <img
              src="/brand/logo-white-cropped.png"
              alt="TSS Soft."
              className="h-full w-auto object-contain hidden dark:block transition-opacity group-hover:opacity-90 filter drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
            />
          </div>
        </Link>

        {/* Center: Frosted Floating Nav Pill */}
        <nav 
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-white/90 dark:bg-[#080d22]/85 backdrop-blur-2xl border-slate-200/90 dark:border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
              : 'bg-white/75 dark:bg-[#09112a]/60 backdrop-blur-xl border-slate-200/70 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          }`}
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-[14px] font-heading font-medium tracking-[-0.01em] transition-all duration-200 flex items-center gap-1.5 ${
                  active
                    ? 'text-blue-700 dark:text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/[0.06]'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className="absolute inset-0 rounded-full bg-blue-50 dark:bg-white/15 border border-blue-200/70 dark:border-white/20 -z-10 shadow-sm dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Theme Toggle & Start Project CTA */}
        <div className="flex items-center gap-2 sm:gap-3 relative z-10">
          
          {/* Light / Dark Mode Toggle Button */}
          <ThemeToggle />

          {/* Start Project Pill Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-heading font-semibold text-[14px] leading-tight tracking-[-0.01em] px-5 py-2.5 rounded-full shadow-md shadow-blue-500/25 dark:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-200 active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/80 dark:bg-white/10 border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 bg-white/95 dark:bg-[#080d24]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/15 rounded-3xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-base font-heading font-medium flex items-center justify-between transition-colors ${
                      active
                        ? 'bg-blue-50 dark:bg-white/15 text-blue-700 dark:text-white font-semibold border border-blue-200/60 dark:border-white/20'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Appearance</span>
                <ThemeToggle />
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white dark:bg-white dark:text-slate-950 font-heading font-semibold text-center shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
