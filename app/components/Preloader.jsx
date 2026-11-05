'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING CORE...');

  useEffect(() => {
    // Smooth progress counter over 2.2 seconds
    const startTime = Date.now();
    const duration = 2200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(rawProgress);

      if (rawProgress < 30) {
        setStatusText('INITIALIZING ARCHITECTURE...');
      } else if (rawProgress < 65) {
        setStatusText('SYNCHRONIZING MODULES...');
      } else if (rawProgress < 90) {
        setStatusText('CRAFTING DIGITAL EXPERIENCES...');
      } else {
        setStatusText('T.S.S. SOFT READY');
      }

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 350);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="tss-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#030611] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Ambient Lighting & Neon Aura */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Center Blue Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[750px] md:h-[750px] bg-gradient-to-tr from-blue-700/25 via-blue-500/20 to-indigo-600/10 rounded-full blur-[130px] animate-pulse" />
            
            {/* Cyber Grid Lines */}
            <div 
              className="absolute inset-0 opacity-[0.07]" 
              style={{
                backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          {/* Core Animation Stage */}
          <div className="relative flex flex-col items-center justify-center z-10 px-4">
            
            {/* Rotating Tech Circuit Rings behind logo */}
            <div className="relative w-48 h-48 md:w-60 md:h-60 flex items-center justify-center mb-6">
              {/* Outer pulsing ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-blue-500/25"
              />

              {/* Reverse spinning segmented ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full border-2 border-t-blue-500 border-r-transparent border-b-blue-600/30 border-l-transparent"
              />

              {/* Glowing Corner Accents */}
              <div className="absolute -inset-2 pointer-events-none">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-400" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-400" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400" />
              </div>

              {/* The TSS Emblem Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 15 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }}
                className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center"
              >
                {/* Logo Image with Drop Shadow & Blue Neon Glow */}
                <motion.div
                  animate={{ 
                    filter: [
                      'drop-shadow(0 0 16px rgba(0, 102, 255, 0.6)) drop-shadow(0 0 35px rgba(0, 80, 255, 0.35))',
                      'drop-shadow(0 0 28px rgba(37, 99, 235, 0.9)) drop-shadow(0 0 55px rgba(0, 102, 255, 0.6))',
                      'drop-shadow(0 0 16px rgba(0, 102, 255, 0.6)) drop-shadow(0 0 35px rgba(0, 80, 255, 0.35))'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  <img
                    src="/logo-icon.png"
                    alt="TSS Monogram"
                    className="w-full h-full object-contain filter contrast-125 brightness-110"
                  />
                  
                  {/* Holographic Laser Scanner Sweep */}
                  <motion.div
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_#38bdf8] opacity-75 pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Logo Brand Typography: </> TSS Soft. */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3, duration: 0.7, ease: 'easeOut' }
              }}
              className="flex flex-col items-center mb-8"
            >
              {/* Text graphic or crisp styled title */}
              <div className="relative">
                <img
                  src="/logo-text.png"
                  alt="TSS Soft."
                  className="h-9 md:h-11 object-contain filter drop-shadow-[0_0_14px_rgba(0,102,255,0.5)] contrast-125 brightness-110"
                />

                {/* Floating Tech Pixels (animating matching the 4 logo pixel squares) */}
                <motion.div
                  animate={{ 
                    y: [-2, 2, -2],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-blue-400 shadow-[0_0_8px_#38bdf8]"
                />
              </div>

              {/* Tagline / Subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6 } }}
                className="flex items-center gap-2 mt-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                <span className="text-[11px] font-mono tracking-[0.25em] text-blue-300/80 uppercase">
                  Software Agency
                </span>
              </motion.div>
            </motion.div>

            {/* High-Tech Progress Bar and Percentage Status */}
            <div className="w-64 md:w-80 flex flex-col items-center">
              {/* Progress Track */}
              <div className="w-full h-1.5 bg-slate-900/90 rounded-full border border-blue-500/20 overflow-hidden relative p-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Glowing Leading Edge */}
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white shadow-[0_0_10px_#ffffff] rounded-full" />
                </motion.div>
              </div>

              {/* Status Ticker & Live Percentage */}
              <div className="w-full flex justify-between items-center mt-3 text-xs font-mono">
                <span className="text-blue-400/90 tracking-wider flex items-center gap-1.5">
                  <span className="text-cyan-400">&gt;</span>
                  {statusText}
                </span>
                <span className="text-blue-200 font-bold tracking-widest tabular-nums">
                  {progress}%
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Copyright / Identity Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }}
            className="absolute bottom-6 text-[10px] font-mono tracking-widest text-slate-500/80 uppercase"
          >
            TSS Soft. // Kushtia to World
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
