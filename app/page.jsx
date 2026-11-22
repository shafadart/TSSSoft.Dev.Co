'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Globe, 
  Smartphone, 
  Code2, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Sparkles, 
  Terminal, 
  Check, 
  Zap, 
  Server, 
  Lock, 
  Clock, 
  Users, 
  Activity,
  Laptop
} from 'lucide-react';

export default function HomePage() {
  // State for active FAQ accordion
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="space-y-24 sm:space-y-36 pb-24 overflow-x-hidden">

      {/* =================================================================== */}
      {/* 1. HERO SECTION: GotMyHost-inspired Human-Crafted Hero              */}
      {/* =================================================================== */}
      <section className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-8 max-w-7xl mx-auto pt-6 sm:pt-12 relative z-10">
        
        {/* Main Header Text */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          
          {/* Eyebrow Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
              bg-blue-50 border border-blue-200/90 text-blue-700 shadow-sm
              dark:bg-blue-950/70 dark:border-blue-800/80 dark:text-blue-300
              text-xs font-semibold mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            <span className="font-mono uppercase tracking-wider text-[11px]">
              TSS Soft • Full-Cycle Software Architecture &amp; Development
            </span>
          </motion.div>

          {/* Master Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-hero font-extrabold text-slate-900 dark:text-white tracking-[-0.035em] leading-[1.08] mb-6"
          >
            Engineering Scalable Software.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-sky-200 dark:to-emerald-300">
              Built For Market Leaders.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-body-p text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-[1.7] mb-10"
          >
            We partner with ambitious enterprises and high-growth innovators to design, build, and deploy production-grade web platforms, mobile applications, and resilient cloud systems.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-10"
          >
            {/* Primary Action Button */}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold text-[15px] px-8 py-3.5 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200 flex items-center gap-2 active:scale-95 tracking-[-0.01em]"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            {/* Secondary Action Button */}
            <a
              href="#showcase"
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 shadow-sm
                dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-white/15
                font-heading font-medium text-[15px] px-7 py-3.5 rounded-full backdrop-blur-xl transition-all duration-200 flex items-center gap-2 active:scale-95 tracking-[-0.01em]"
            >
              <span>Explore Selected Works</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </a>
          </motion.div>

          {/* Value Guarantee Badges Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>100% IP &amp; Code Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>99.98% High-Availability SLA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
              <span>6+ Years Engineering Experience</span>
            </div>
          </motion.div>

        </div>

        {/* ----------------------------------------------------------------- */}
        {/* Hero Interactive Device / Live Agency Showcase Frame              */}
        {/* ----------------------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative max-w-5xl mx-auto w-full"
        >
          {/* Outer Glass Card */}
          <div className="bg-white/90 dark:bg-[#070e24]/90 border border-slate-200/90 dark:border-white/15 rounded-3xl p-4 sm:p-7 shadow-2xl backdrop-blur-2xl relative overflow-hidden transition-all duration-300">
            
            {/* Window Chrome Header Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/80 dark:border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 font-mono text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline-block">
                  https://tsssoft.com/systems/core
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 font-mono text-[11px] border border-emerald-200/70 dark:border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Latency: 38ms Edge
                </span>
              </div>
            </div>

            {/* 3 Real Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Product 1: TSS PC Controller (Flagship Live Screen Control) */}
              <Link 
                href="/projects/tss-pc-controller"
                className="group p-5 rounded-2xl bg-slate-50/90 dark:bg-[#091436] border border-slate-200/90 dark:border-blue-400/30 hover:border-blue-500 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <img src="/projects/tss-pc-controller-logo.jpg" alt="TSS PC Controller" className="w-7 h-7 rounded-lg object-contain bg-white shadow-sm" />
                      <span className="text-xs font-mono uppercase font-bold text-blue-600 dark:text-blue-300">Remote Tool</span>
                    </div>
                    <span className="text-[10px] font-mono bg-blue-600 text-white px-2 py-0.5 rounded-full">Flagship</span>
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors mb-1.5">
                    TSS PC Controller
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Live Windows PC screen streaming directly onto smartphones. Remote mouse, keyboard, shutdown, and sleep control.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-heading font-semibold text-blue-600 dark:text-blue-300">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Product 2: Tutors Kushtia (EdTech Platform) */}
              <Link 
                href="/projects/tutors-kushtia"
                className="group p-5 rounded-2xl bg-slate-50/90 dark:bg-[#091436] border border-slate-200/90 dark:border-purple-400/30 hover:border-purple-500 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <img src="/projects/tutors-kushtia-logo.jpg" alt="Tutors Kushtia" className="w-7 h-7 rounded-lg object-contain bg-white shadow-sm" />
                      <span className="text-xs font-mono uppercase font-bold text-purple-600 dark:text-purple-300">EdTech</span>
                    </div>
                    <span className="text-[10px] font-mono bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">Live</span>
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors mb-1.5">
                    Tutors Kushtia
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Digital tuition marketplace connecting tutors and guardians across Kushtia with verified matching and role dashboards.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-heading font-semibold text-purple-600 dark:text-purple-300">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Product 3: Cholo Jai (Mobility / Ride Sharing) */}
              <Link 
                href="/projects/cholo-jai"
                className="group p-5 rounded-2xl bg-slate-50/90 dark:bg-[#091436] border border-slate-200/90 dark:border-emerald-400/30 hover:border-emerald-500 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <img src="/projects/cholo-jai-logo.jpg" alt="Cholo Jai" className="w-7 h-7 rounded-lg object-contain bg-white shadow-sm" />
                      <span className="text-xs font-mono uppercase font-bold text-emerald-600 dark:text-emerald-300">Mobility</span>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">Live</span>
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors mb-1.5">
                    Cholo Jai (চলো যায়)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Local ride-sharing and designated transit booking platform for Kushtia and connected routes with dual customer-rider apps.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-heading font-semibold text-emerald-600 dark:text-emerald-300">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

            </div>

          </div>
        </motion.div>

      </section>

      {/* =================================================================== */}
      {/* 2. TRUSTED PARTNERS & REAL IMPACT: Bangladesh Reach                 */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10"
      >
        <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200/90 dark:border-white/15 rounded-3xl p-8 sm:p-14 shadow-xl backdrop-blur-2xl text-center space-y-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200/80 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>PROVEN DIGITAL ENGINEERING</span>
            </div>
            
            <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-[-0.025em] leading-[1.15]">
              Engineering software for ambitious businesses.
            </h2>
            
            <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7] max-w-2xl mx-auto">
              From high-growth local innovators to expanding enterprise partners, we engineer high-resilience digital systems and custom software that drive measurable growth.
            </p>
          </div>

          {/* Regional Reach Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/15 text-xs text-slate-700 dark:text-slate-200 shadow-sm">
            <span className="text-base">🇧🇩</span>
            <span className="font-mono text-[11px] ml-1">
              ✦ Delivering production-grade software across Bangladesh
            </span>
          </div>

          {/* Client Brand Tags Row (Real Partners: AFC, Cholo Jai, etc.) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              'AFC',
              'Cholo Jai',
              'GramAlo Solar Solution',
              'Tutors Kushtia',
              'Apex Global Technologies',
              'TSS Systems',
              'and growing partners...'
            ].map((client, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-blue-500/50 text-xs font-medium text-slate-800 dark:text-slate-200 transition-colors shadow-sm"
              >
                {client}
              </span>
            ))}
          </div>

          {/* Stat Counter Grid (6+ yrs experience, 5+ flagship products) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200/80 dark:border-white/10 max-w-4xl mx-auto text-left">
            
            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight mb-1">
                6+ yrs
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Experience</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Deep software engineering &amp; architecture</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400 font-mono tracking-tight mb-1">
                10x
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Peak Growth</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Average throughput scale for client systems</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-sky-400 font-mono tracking-tight mb-1">
                5+
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Flagship Platforms</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Engineered production web, mobile &amp; systems</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-cyan-600 dark:text-indigo-400 font-mono tracking-tight mb-1">
                99.98%
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Uptime SLA</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Fault-tolerant distributed edge uptime</p>
            </div>

          </div>

          {/* Marquee Ticker Strip */}
          <div className="pt-2 border-t border-slate-200/80 dark:border-white/10 overflow-hidden relative">
            <div className="flex gap-8 whitespace-nowrap text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 py-1">
              <span>• Next.js 14 Architecture</span>
              <span>• Distributed Cloud Infrastructure</span>
              <span>• Flutter &amp; React Native Mobile</span>
              <span>• Custom Enterprise Software</span>
              <span>• Zero-Trust Data Confidentiality</span>
              <span>• 100% Full IP Handover</span>
            </div>
          </div>

        </div>
      </motion.section>

      {/* =================================================================== */}
      {/* 3. CORE SERVICES: GotMyHost-style 6-Card Grid                       */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10" 
        id="services"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200/80 dark:border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200/80 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest mb-3">
              <span>Capabilities &amp; Core Disciplines</span>
            </div>
            <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-[-0.025em] leading-[1.15]">
              What we do, and do exceptionally well.
            </h2>
          </div>
          <p className="font-body text-body-p text-slate-600 dark:text-slate-300 max-w-md leading-[1.7]">
            We reject fragile templates. Every architecture and UI component is precision-engineered to deliver reliable, long-term business value.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Web Architecture */}
          <div className="bg-white dark:bg-[#070e24]/80 border border-slate-200/90 dark:border-white/10 hover:border-blue-500 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/15 border border-blue-200/80 dark:border-blue-400/25 flex items-center justify-center text-blue-600 dark:text-blue-300 mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">Web Platform</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Custom Web Platforms &amp; Architecture</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                SEO-dominant, high-concurrency web flagships engineered on Next.js 14, Node.js, and PostgreSQL. Engineered to handle traffic spikes with sub-50ms responsiveness.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Next.js 14 Server Actions &amp; SSR</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Sub-50ms Global Edge Performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Enterprise Security &amp; RBAC Auth</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Next.js</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">TypeScript</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">PostgreSQL</span>
            </div>
          </div>

          {/* Card 2: Mobile Apps */}
          <div className="bg-white dark:bg-[#070e24]/80 border border-slate-200/90 dark:border-white/10 hover:border-emerald-500 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200/80 dark:border-emerald-400/25 flex items-center justify-center text-emerald-600 dark:text-emerald-300 mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">Cross-Platform</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Mobile Applications (iOS &amp; Android)</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Fluid 60fps mobile applications engineered with Flutter and React Native. Offline-first data caching, biometric verification, and real-time push alerts.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Flutter &amp; React Native Core</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Offline-First Data Synchronization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>App Store &amp; Play Store Deployment</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Flutter</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">React Native</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">iOS / Android</span>
            </div>
          </div>

          {/* Card 3: Enterprise Cloud & APIs */}
          <div className="bg-white dark:bg-[#070e24]/80 border border-slate-200/90 dark:border-white/10 hover:border-indigo-500 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200/80 dark:border-indigo-400/25 flex items-center justify-center text-indigo-600 dark:text-indigo-300 mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">Backend &amp; DevOps</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Enterprise Backend &amp; Cloud APIs</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                High-throughput microservices, REST &amp; GraphQL APIs, automated cloud pipelines (Docker, Kubernetes), and fault-tolerant multi-region replication.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>High-Concurrency Microservices</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Automated CI/CD DevOps Pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Real-time WebSocket Streaming</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Docker</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Node.js</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Redis</span>
            </div>
          </div>

          {/* Card 4: UI/UX & Design Systems */}
          <div className="bg-white dark:bg-[#070e24]/80 border border-slate-200/90 dark:border-white/10 hover:border-purple-500 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-500/15 border border-purple-200/80 dark:border-purple-400/25 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400 uppercase tracking-wider block mb-1">Design System</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">UI/UX Design Systems &amp; Strategy</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Conversion-focused digital experience design. Modular Figma component systems, accessible typography hierarchy, and effortless checkout flows.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Figma Design Tokens &amp; Components</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Conversion-Driven User Journeys</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>Pixel-Perfect Component Handover</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Figma</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Design Tokens</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Storybook</span>
            </div>
          </div>

          {/* Card 5: Intelligent Automation & AI */}
          <div className="bg-white dark:bg-[#070e24]/80 border border-slate-200/90 dark:border-white/10 hover:border-sky-500 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-500/15 border border-sky-200/80 dark:border-sky-400/25 flex items-center justify-center text-sky-600 dark:text-sky-300 mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-1">Automation &amp; AI</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Intelligent Automation &amp; System Integration</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Custom API integrations, workflow automation, payment gateways (bKash, Nagad, SSLCommerz, Stripe), and AI-augmented task pipelines.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  <span>Payment Gateway &amp; MFS Integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  <span>Custom CRM &amp; ERP Workflow Hooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  <span>LLM &amp; Intelligent Data Processing</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">MFS APIs</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Webhooks</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">AI Pipelines</span>
            </div>
          </div>

          {/* Card 6: Dedicated Pods & Maintenance */}
          <div className="bg-white dark:bg-[#070e24]/80 border border-slate-200/90 dark:border-white/10 hover:border-amber-500 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200/80 dark:border-amber-400/25 flex items-center justify-center text-amber-600 dark:text-amber-300 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1">Ongoing SLA</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Dedicated Engineering Pods &amp; SLA Support</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Continuous software maintenance, 24/7 uptime monitoring, security patching, and on-demand feature expansion with dedicated senior developers.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Guaranteed SLA Incident Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Proactive Security &amp; Dependency Audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Direct Communication via Slack / WhatsApp</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">24/7 SLA</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Direct Access</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Dev Pods</span>
            </div>
          </div>

        </div>

      </motion.section>

      {/* =================================================================== */}
      {/* 4. FEATURED CASE STUDIES: Real Flagship Products Showcase           */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10" 
        id="showcase"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200/80 dark:border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200/80 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest mb-3">
              <span>SELECTED WORK — 2025–2026</span>
            </div>
            <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-[-0.025em] leading-[1.15]">
              Turning Ideas Into Digital Products.
            </h2>
          </div>
          <p className="font-body text-body-p text-slate-600 dark:text-slate-300 max-w-md leading-[1.7]">
            From local mobility systems to live PC streaming tools, we design and engineer proprietary software that solves real-world challenges.
          </p>
        </div>

        {/* 3 Featured Products Showcase */}
        <div className="space-y-12">
          
          {/* Showcase Item 1: TSS PC Controller */}
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200/90 dark:border-white/15 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:shadow-2xl">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-slate-950 flex items-center justify-center">
              <img 
                src="/projects/tss-pc-controller-banner.jpg" 
                alt="TSS PC Controller Banner" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-mono px-3 py-1 rounded-full shadow-md">
                Live Screen Control
              </div>
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-wider mb-2">
                  <span>System Utility</span>
                  <span>•</span>
                  <span>Low Latency</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  TSS PC Controller
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                  "Your PC. Your Control. Anywhere."
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Engineered to stream live Windows PC screens directly to smartphones over Wi-Fi. Features low-latency touchpad mouse, virtual keyboard, shutdown, sleep, and system commands.
                </p>
                <div className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Real-Time Screen Mirroring (&lt; 50ms)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Remote Windows Power &amp; Command Controls</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <Link
                  href="/projects/tss-pc-controller"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Desktop + Mobile</span>
              </div>
            </div>
          </div>

          {/* Showcase Item 2: Tutors Kushtia */}
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200/90 dark:border-white/15 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:shadow-2xl">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-slate-950 flex items-center justify-center">
              <img 
                src="/projects/tutors-kushtia-banner.jpg" 
                alt="Tutors Kushtia Banner" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-mono px-3 py-1 rounded-full shadow-md">
                EdTech Platform
              </div>
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-mono uppercase tracking-wider mb-2">
                  <span>Education Technology</span>
                  <span>•</span>
                  <span>Active Ecosystem</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Tutors Kushtia
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                  "Connecting Tutors, Guardians &amp; Opportunities."
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  A centralized tuition connection platform designed to organize education opportunities in Kushtia. Guardians post requirements while verified mentors offer teaching services.
                </p>
                <div className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-500" />
                    <span>Dedicated Tutor &amp; Guardian Dashboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-500" />
                    <span>Structured Tuition Post &amp; Booking Pipeline</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <Link
                  href="/projects/tutors-kushtia"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Web App Platform</span>
              </div>
            </div>
          </div>

          {/* Showcase Item 3: Cholo Jai */}
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200/90 dark:border-white/15 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:shadow-2xl">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-slate-950 flex items-center justify-center">
              <img 
                src="/projects/cholo-jai-app-banner.jpg" 
                alt="Cholo Jai Banner" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-mono px-3 py-1 rounded-full shadow-md">
                Mobility &amp; Transit
              </div>
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
                  <span>Ride Sharing</span>
                  <span>•</span>
                  <span>Regional Transit</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Cholo Jai (চলো যায়)
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                  "Your Journey, Made Simpler."
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Developed by TSS Soft to make transportation convenient, predictable, and fair in Kushtia and its surrounding designated routes with dual passenger and rider applications.
                </p>
                <div className="space-y-2 mb-6 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Real-Time Route &amp; Pickup Selection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Transparent Fare Estimation &amp; Rider Dispatch</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <Link
                  href="/projects/cholo-jai"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Mobile + Backend</span>
              </div>
            </div>
          </div>

        </div>

      </motion.section>

      {/* =================================================================== */}
      {/* 5. COMPARISON MATRIX: Why TSS Soft (GotMyHost-style Table)          */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10"
      >
        <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200/90 dark:border-white/15 rounded-3xl p-8 sm:p-12 shadow-xl backdrop-blur-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200/80 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest mb-3">
              <span>THE TSS ADVANTAGE</span>
            </div>
            <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-[-0.025em] leading-[1.15] mb-4">
              Why Leaders Build With TSS Soft.
            </h2>
            <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7]">
              Compare our dedicated engineering approach against legacy agencies and unpredictable freelance platforms.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <th className="py-4 px-4 sm:px-6">Critical Deliverables</th>
                  <th className="py-4 px-4 sm:px-6 bg-blue-50/60 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-bold rounded-t-xl">TSS Soft</th>
                  <th className="py-4 px-4 sm:px-6">Traditional Agencies</th>
                  <th className="py-4 px-4 sm:px-6">Freelance Marketplaces</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-sm">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">IP &amp; Source Code Ownership</td>
                  <td className="py-4 px-4 sm:px-6 bg-blue-50/40 dark:bg-blue-900/10 font-bold text-blue-600 dark:text-blue-400">✓ 100% Unrestricted Handover</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Often proprietary lock-in</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Variable / Unverified</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Engineering Talent</td>
                  <td className="py-4 px-4 sm:px-6 bg-blue-50/40 dark:bg-blue-900/10 font-bold text-blue-600 dark:text-blue-400">✓ Senior Architects Only</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Junior dev delegation</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Unknown skill level</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Performance Guarantee</td>
                  <td className="py-4 px-4 sm:px-6 bg-blue-50/40 dark:bg-blue-900/10 font-bold text-blue-600 dark:text-blue-400">✓ Sub-50ms SLA Uptime</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Standard shared hosting</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">No guarantee</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Direct Communication</td>
                  <td className="py-4 px-4 sm:px-6 bg-blue-50/40 dark:bg-blue-900/10 font-bold text-blue-600 dark:text-blue-400">✓ Direct Slack &amp; Phone Access</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Through account managers</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Time-zone friction</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Post-Launch Warranty</td>
                  <td className="py-4 px-4 sm:px-6 bg-blue-50/40 dark:bg-blue-900/10 font-bold text-blue-600 dark:text-blue-400">✓ Continuous Maintenance &amp; SLA</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Expensive add-on fees</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Disappears after payment</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </motion.section>

      {/* =================================================================== */}
      {/* 6. ENGINEERING WORKFLOW: 5-Step Delivery Lifecycle                  */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200/80 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest mb-3">
            <span>ENGINEERING PROCESS</span>
          </div>
          <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-[-0.025em] leading-[1.15] mb-4">
            From Architecture Concept to Production Launch.
          </h2>
          <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7]">
            A disciplined, transparent 5-step development lifecycle engineered for zero surprises and rapid delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          {[
            { step: '01', title: 'Discovery & Scope', desc: 'Domain analysis, technical architecture, and system specifications before touching code.' },
            { step: '02', title: 'Prototyping', desc: 'Figma interactive component tokens, user journeys, and architectural wireframes.' },
            { step: '03', title: 'High-Velocity Dev', desc: 'Rapid 2-week agile sprints with continuous GitHub commits and live staging previews.' },
            { step: '04', title: 'Rigorous QA', desc: 'Automated unit tests, load stress benchmarks, and zero-defect security validation.' },
            { step: '05', title: 'Launch & SLA', desc: 'Zero-downtime deployment, DNS configuration, and 24/7 SLA production monitoring.' },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-[#070e24]/80 border border-slate-200/90 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-mono font-bold text-blue-600 dark:text-blue-400 block mb-3">{item.step}</span>
                <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2">{item.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </motion.section>

      {/* =================================================================== */}
      {/* 7. TRANSPARENT FAQ: GotMyHost-style Accordion                       */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200/80 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest mb-3">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-[-0.025em] leading-[1.15] mb-3">
            Everything You Need To Know.
          </h2>
          <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7]">
            Clear, transparent answers about our engineering agreements, IP ownership, timelines, and support.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'Do we own 100% of the source code and intellectual property?',
              a: 'Yes, absolutely. Once final deliverables are approved, complete intellectual property, git repositories, design assets, and database schemas are transferred to your organization with zero proprietary licensing lock-ins.'
            },
            {
              q: 'How long does a typical software project take from start to launch?',
              a: 'A focused MVP or production web platform typically ships in 4 to 8 weeks. Comprehensive mobile ecosystems or enterprise architectures with complex integrations usually range between 8 to 14 weeks, structured in bi-weekly agile review sprints.'
            },
            {
              q: 'What technologies and frameworks does TSS Soft specialize in?',
              a: 'Our core technology stack focuses on high-performance frameworks: Next.js 14, React, Node.js, TypeScript, PostgreSQL, Redis, Flutter, and React Native. We deploy on distributed cloud providers like AWS, Vercel, and Cloudflare with containerized Docker infrastructure.'
            },
            {
              q: 'How do you handle client communication during engineering sprints?',
              a: 'You receive a private Slack or WhatsApp channel directly connected to your lead software architects. You also get 24/7 access to live staging environments so you can test features as they are built.'
            },
            {
              q: 'Do you provide post-launch maintenance and SLA support?',
              a: 'Yes. We offer continuous SLA agreements covering 24/7 server monitoring, security patching, database optimization, and on-demand feature expansion.'
            },
            {
              q: 'How do we get started on our project?',
              a: 'Simply click "Start a Project" or call us directly. We will schedule a 30-minute discovery consultation to understand your business objectives, review your technical scope, and provide an honest estimate.'
            }
          ].map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-[#070e24]/90 border border-slate-200/90 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-semibold text-slate-900 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                >
                  <span>{item.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-blue-600" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-slate-400" />}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* =================================================================== */}
      {/* 8. BOTTOM CONVERSION CTA: GotMyHost-style Deep Blue Banner          */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10"
      >
        <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center space-y-8">
          
          {/* Subtle Ambient Radial Rings */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-400/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-mono uppercase tracking-widest border border-white/20">
              LET'S BUILD TOGETHER
            </span>
            <h2 className="font-heading text-section-title font-extrabold tracking-[-0.025em] leading-[1.15]">
              Ready to turn your vision into production-ready software?
            </h2>
            <p className="font-body text-body-p text-blue-100 leading-[1.7] max-w-2xl mx-auto">
              Schedule a discovery session directly with our lead software architects. Clear scope, realistic timelines, and zero sales fluff.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-100 text-slate-950 font-heading font-semibold text-[15px] px-8 py-3.5 rounded-full shadow-xl transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              <span>Schedule a Discovery Call</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
            <a
              href="tel:+8801870955900"
              className="bg-white/15 hover:bg-white/20 text-white border border-white/25 font-heading font-medium text-[15px] px-7 py-3.5 rounded-full backdrop-blur-xl transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              <span>Call: +880 1870 955 900</span>
            </a>
          </div>

          <div className="relative z-10 pt-4 text-xs font-mono text-blue-200 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Currently onboarding new client partners for Q1/Q2 2026</span>
          </div>

        </div>
      </motion.section>

    </div>
  );
}
