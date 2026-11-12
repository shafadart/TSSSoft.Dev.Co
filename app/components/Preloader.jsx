'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800; // 1.8s elegant luxury pacing

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(rawProgress);

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
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
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#050916] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Ambient Ethereal Mist Clouds */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div 
              className="absolute -top-[10%] left-[10%] w-[1000px] h-[700px] opacity-75 mix-blend-screen animate-cloud-drift-1"
              style={{
                backgroundImage: "url('/clouds/cloud-1.webp')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                filter: 'contrast(125%) brightness(120%)',
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-blue-700/25 via-blue-500/20 to-sky-400/10 rounded-full blur-[140px] animate-cloud-drift-2" />
            <div className="absolute inset-0 fluted-glass-pattern opacity-80" />
          </div>

          {/* Centered Brand Presentation */}
          <div className="relative flex flex-col items-center justify-center z-10 px-6">
            
            {/* The New Horizontal TSS Soft Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
              }}
              className="relative w-64 sm:w-80 h-24 sm:h-28 flex items-center justify-center mb-8"
            >
              {/* Soft Ambient Logo Aura */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl -z-10" />

              {/* High-res White/Blue Crisp Logo */}
              <img
                src="/brand/logo-white-cropped.png"
                alt="TSS Soft."
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]"
              />
            </motion.div>

            {/* Editorial Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.7 } }}
              className="text-xs sm:text-sm font-light tracking-[0.25em] text-slate-300 uppercase mb-8"
            >
              Digital Systems &amp; Software Architecture
            </motion.p>

            {/* Hairline Minimalist Luxury Progress Bar */}
            <div className="w-48 sm:w-60 flex flex-col items-center">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Pure Numeric Percentage Counter */}
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
