'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';
import CloudBackground from './CloudBackground';

export default function ClientShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

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
