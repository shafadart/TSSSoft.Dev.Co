'use client';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full bg-surface/50 dark:bg-surface/50 backdrop-blur-md border border-white/10 shadow-xl z-50 flex justify-between items-center px-8 py-4">
        <a href="/" className="text-headline-lg-mobile font-headline-lg-mobile font-bold text-on-surface dark:text-on-surface">T.S.S. Soft.</a>
        <div className="hidden md:flex items-center space-x-8 font-body-md text-body-md">
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/">Home</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/about">About</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/services">Services</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/portfolio">Portfolio</a>
        </div>
        <a className="text-on-surface-variant font-bold border-b-2 border-transparent pb-1 hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-transform duration-200 hover:scale-95 font-body-md text-body-md" href="/contact">Contact</a>
      </nav>

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-slate-950"
      >
        <h1 className="font-heading text-8xl md:text-[10rem] font-black text-white/5 drop-shadow-[0_0_15px_rgba(37,99,235,0.2)]">
          404
        </h1>
        <h2 className="font-heading text-subheading sm:text-3xl font-bold text-white mt-8 tracking-[-0.015em]">
          Lost in the digital void?
        </h2>
        <p className="font-body text-body-p text-slate-400 mt-4 leading-[1.7]">
          The page you are looking for does not exist or has been moved.
        </p>
        <a href="/" className="font-heading font-semibold text-[15px] bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full mt-10 hover:scale-105 transition-all duration-300 tracking-[-0.01em]">
          Return to Homepage
        </a>
      </motion.main>
    </>
  );
}
