'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1600; // 1.6s smooth luxury pacing

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(rawProgress);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 250);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="tss-luxury-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#050916] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* 1. Silky Volumetric Ethereal Cloud Mist (NO grain, 100% smooth) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Luminous Soft Cloud Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-sky-400/35 via-blue-400/30 to-blue-700/20 rounded-full blur-[100px] animate-pulse" />
            
            {/* Upper Soft Drifting Cloud Glow */}
            <div className="absolute top-[25%] left-[35%] w-[520px] h-[360px] bg-sky-200/25 rounded-full blur-[95px] animate-cloud-drift-1" />

            {/* Vertical Fluted Glass Texture */}
            <div className="absolute inset-0 fluted-glass-pattern opacity-70 mix-blend-overlay" />
            
            {/* Clean Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_#050916_95%)] pointer-events-none" />
          </div>

          {/* 2. Centered Brand Presentation */}
          <div className="relative flex flex-col items-center justify-center z-10 px-6">
            
            {/* New Horizontal TSS Soft Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 8 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }}
              className="relative w-64 sm:w-80 h-24 sm:h-28 flex items-center justify-center mb-6"
            >
              {/* Soft Ambient Logo Aura */}
              <div className="absolute inset-0 bg-blue-500/25 rounded-full blur-2xl -z-10" />

              {/* High-res White Crisp Logo */}
              <img
                src="/brand/logo-white-cropped.png"
                alt="TSS Soft."
                className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(186,215,255,0.4)]"
              />
            </motion.div>

            {/* Clean Editorial Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
              className="text-xs sm:text-sm font-light tracking-[0.25em] text-slate-200 uppercase mb-8 drop-shadow-sm"
            >
              Digital Systems &amp; Software Architecture
            </motion.p>

            {/* Hairline Minimalist Progress Bar */}
            <div className="w-48 sm:w-60 flex flex-col items-center">
              <div className="w-full h-[2px] bg-white/15 rounded-full overflow-hidden relative shadow-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 via-sky-300 to-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Minimal Numeric Progress */}
              <div className="w-full flex justify-between items-center mt-3 text-[11px] font-mono text-slate-400">
                <span className="tracking-widest">KUSHTIA • GLOBAL</span>
                <span className="tabular-nums font-medium text-slate-200">{progress}%</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
