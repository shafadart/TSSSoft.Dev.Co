'use client';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Code2, Cloud, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="w-full relative z-10 px-4 sm:px-8 max-w-7xl mx-auto pb-24">
      {/* Hero */}
      <section className="pt-8 pb-16 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-4 bg-blue-50 dark:bg-white/[0.06] border border-blue-200/80 dark:border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" /> High-Performance Engineering
        </div>
        <div className="max-w-4xl mx-auto z-10">
          <h1 className="font-heading text-hero font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.08]">
            World-Class Engineering.<br/>
            <span className="text-slate-500 dark:text-slate-400 font-normal">Tailored Solutions.</span>
          </h1>
          <p className="font-body text-body-p text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-[1.7] font-normal">
            From cross-platform mobile apps to scalable cloud platforms, we engineer high-impact digital systems that drive long-term business value.
          </p>
        </div>
      </section>

      {/* Service 1: Mobile */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200/80 dark:border-blue-500/30 font-mono text-xs text-blue-700 dark:text-blue-400 uppercase tracking-widest">
              ANDROID &amp; IOS
            </span>
            <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">
              Cross-Platform Mobile Applications
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-300 leading-[1.7] text-base">
              We engineer robust, high-performance mobile applications using frameworks like Flutter and React Native, alongside native Swift and Kotlin. Our approach ensures smooth 60fps animations, intuitive gesture handling, and offline-first data synchronization.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-body text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>Immersive UI/UX Design &amp; Micro-Interactions</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-body text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>Robust API &amp; Realtime WebSocket Integration</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-body text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>End-to-End App Store &amp; Play Store Deployment</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-[#070e24]/80 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-sm dark:shadow-xl relative overflow-hidden group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-500/15 border border-blue-200/80 dark:border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
              <Smartphone className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-card-title font-bold text-slate-900 dark:text-white mb-4">Mobile Tech Stack</h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">Flutter</span>
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">React Native</span>
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">Swift</span>
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">Kotlin</span>
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">Firebase</span>
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">SQLite</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Service 2: Web */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-white dark:bg-[#070e24]/80 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-sm dark:shadow-xl relative overflow-hidden group">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200/80 dark:border-emerald-400/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-card-title font-bold text-slate-900 dark:text-white mb-4">Web Architecture Stack</h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">Next.js 14</span>
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">React</span>
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">TypeScript</span>
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">Tailwind CSS</span>
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">Node.js</span>
              <span className="bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-lg">PostgreSQL</span>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/80 dark:border-emerald-500/30 font-mono text-xs text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
              WEB ARCHITECTURE
            </span>
            <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">
              Bespoke Web Platforms &amp; Architecture
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-300 leading-[1.7] text-base">
              From high-converting corporate flagships to complex SaaS platforms, we architect resilient web systems with Next.js, modern state management, and edge-optimized infrastructure.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-body text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Server-Side Rendering &amp; Edge Optimization</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-body text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Deep Search Engine Optimization &amp; Sub-50ms TTFB</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-body text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Headless CMS &amp; Modular E-Commerce Integrations</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-heading font-semibold text-[15px] px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 active:scale-95"
        >
          <span>Discuss Your Architecture Needs</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
