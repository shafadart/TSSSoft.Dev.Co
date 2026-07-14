'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5-Second Loading Screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center"
        >
          {/* Sleek minimalist blue spinner */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-32 h-32 rounded-full border-t-4 border-primary border-r-4 border-transparent"
            />
            <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-primary/20" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute text-primary font-bold text-3xl tracking-[0.2em]"
            >
              TSS
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
