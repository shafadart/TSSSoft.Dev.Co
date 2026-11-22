'use client';

import { motion } from 'framer-motion';
import { Sparkles, Calendar, Rocket, Award, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex-grow relative z-10 px-4 sm:px-8 max-w-7xl mx-auto pb-24">
      
      {/* Hero */}
      <section className="pt-8 pb-16 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-4 bg-blue-50 dark:bg-white/[0.06] border border-blue-200/80 dark:border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" /> Our Heritage &amp; Mission
        </div>
        <h1 className="font-heading text-hero font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.08]">
          Built in Kushtia.<br/>
          <span className="text-slate-500 dark:text-slate-400 font-normal">Engineered for Ambitious Businesses.</span>
        </h1>
        <p className="font-body text-body-p text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-[1.7] font-normal">
          We are TSS Soft. — A team of passionate technologists on a mission to build premier enterprise digital platforms and modern software architectures.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-12 max-w-3xl mx-auto">
        <div className="relative border-l border-slate-300 dark:border-white/15 ml-4 md:ml-0 md:pl-10 space-y-12">
          <div className="relative pl-6 md:pl-0">
            <div className="absolute left-[-29px] md:left-[-45px] top-1.5 h-3.5 w-3.5 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-[#f8fafc] dark:ring-[#050916]"></div>
            <span className="font-mono text-xs text-blue-600 dark:text-blue-300 uppercase tracking-widest block mb-1">May 06, 2025</span>
            <h3 className="font-heading text-card-title font-bold text-slate-900 dark:text-white mb-2">The Inception</h3>
            <p className="font-body text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-[1.7] font-normal">
              The agency was founded by unifying the first letters of our founders: <strong>Tahsin, Shafaur, and Sawon</strong> — establishing TSS Soft. with a commitment to engineering high-performance software.
            </p>
          </div>

          <div className="relative pl-6 md:pl-0">
            <div className="absolute left-[-29px] md:left-[-45px] top-1.5 h-3.5 w-3.5 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-[#f8fafc] dark:ring-[#050916]"></div>
            <span className="font-mono text-xs text-blue-600 dark:text-blue-300 uppercase tracking-widest block mb-1">July 16, 2025</span>
            <h3 className="font-heading text-card-title font-bold text-slate-900 dark:text-white mb-2">Formal Foundation</h3>
            <p className="font-body text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-[1.7] font-normal">
              Official agency agreement formalized. We united our visions to build high-performance software, mobile applications, and web platforms with uncompromising architectural quality.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white mb-3">The Minds Behind The Code</h2>
          <p className="font-body text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal">Multidisciplinary leadership driving precision engineering and reliable delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-[#070e24]/80 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 hover:border-blue-500 rounded-3xl p-8 text-center transition-all duration-300 group shadow-sm hover:shadow-xl">
            <div className="w-28 h-28 mx-auto mb-6 relative flex items-center justify-center">
              <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" alt="K. M. Tahsin Ahmmed" src="/team/tahsin.svg"/>
            </div>
            <h3 className="font-heading text-card-title font-bold text-slate-900 dark:text-white mb-1">K. M. Tahsin Ahmmed</h3>
            <p className="font-mono text-xs text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider font-semibold">Chief Executive Officer</p>
            <p className="font-body text-slate-600 dark:text-slate-400 text-sm leading-[1.6] font-normal">Leading strategic vision and enterprise client architecture with a relentless focus on innovation.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white dark:bg-[#070e24]/80 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 hover:border-blue-500 rounded-3xl p-8 text-center transition-all duration-300 group shadow-sm hover:shadow-xl">
            <div className="w-28 h-28 mx-auto mb-6 relative flex items-center justify-center">
              <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" alt="MD. Shafaur Rahman Sabbir" src="/team/shafaur.svg"/>
            </div>
            <h3 className="font-heading text-card-title font-bold text-slate-900 dark:text-white mb-1">MD. Shafaur Rahman Sabbir</h3>
            <p className="font-mono text-xs text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider font-semibold">Chief Operating Officer</p>
            <p className="font-body text-slate-600 dark:text-slate-400 text-sm leading-[1.6] font-normal">Architecting operational excellence and ensuring flawless execution across all technical deliveries.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white dark:bg-[#070e24]/80 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 hover:border-blue-500 rounded-3xl p-8 text-center transition-all duration-300 group shadow-sm hover:shadow-xl">
            <div className="w-28 h-28 mx-auto mb-6 relative flex items-center justify-center">
              <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" alt="Mohammad Sawon" src="/team/sawon.svg"/>
            </div>
            <h3 className="font-heading text-card-title font-bold text-slate-900 dark:text-white mb-1">Mohammad Sawon</h3>
            <p className="font-mono text-xs text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider font-semibold">Chief Marketing Officer</p>
            <p className="font-body text-slate-600 dark:text-slate-400 text-sm leading-[1.6] font-normal">Crafting market communication and connecting our high-performance solutions with industry partners.</p>
          </motion.div>

        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="mt-8 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-heading font-semibold text-[15px] leading-tight tracking-[-0.01em] px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
        >
          <span>Get in Touch with Founders</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </Link>
      </section>

    </main>
  );
}
