'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';
import CloudBackground from './CloudBackground';

export default function ClientShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  // Ensure refresh on any page (especially Home) resets scroll to top immediately
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-[#030612] text-slate-100 flex flex-col">
        {children}
      </div>
    );
  }

  return (
    <>
      <CloudBackground />
      <Preloader />
      <Navbar />
      <div className="flex-grow pt-24 md:pt-28">
        {children}
      </div>
      <Footer />
    </>
  );
}

