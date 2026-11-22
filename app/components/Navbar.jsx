'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 15);

      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          // Scrolling down -> hide navbar
          setVisible(false);
        } else if (lastScrollY - currentScrollY > 5) {
          // Scrolling up -> show navbar
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLogoClick = (e) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

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
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? 'bg-white/95 dark:bg-[#060b1e]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-white/10 shadow-sm'
            : 'bg-white dark:bg-[#070e24] border-b border-slate-200/80 dark:border-white/10 shadow-sm'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          
          {/* Brand: Dual-mode Logo (Click to navigate to home from anywhere) */}
          <Link 
            href="/" 
            onClick={handleLogoClick}
            className="flex items-center gap-2 group relative z-10 cursor-pointer"
            aria-label="TSS Soft Home"
          >
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

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-[14px] font-heading font-medium tracking-[-0.01em] transition-all duration-200 flex items-center gap-1.5 ${
                    active
                      ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50/80 dark:bg-white/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/[0.06]'
                  }`}
                >
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Theme Toggle & Start Project CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 relative z-10">
            
            {/* Light / Dark Mode Toggle Button */}
            <ThemeToggle />

            {/* Start Project Pill Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold text-[14px] leading-tight tracking-[-0.01em] px-5 py-2.5 rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

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
            className="fixed inset-x-4 top-24 z-40 bg-white/98 dark:bg-[#080d24]/98 backdrop-blur-2xl border border-slate-200 dark:border-white/15 rounded-3xl p-6 shadow-2xl md:hidden"
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
                className="mt-2 w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold text-center shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
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
