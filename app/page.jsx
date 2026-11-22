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
  Laptop,
  Building2,
  PhoneCall,
  MapPin,
  ExternalLink,
  Palette
} from 'lucide-react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="space-y-24 sm:space-y-36 pb-28 overflow-x-hidden bg-white dark:bg-[#050916] transition-colors duration-200">

      {/* =================================================================== */}
      {/* 1. HERO SECTION: Full-Width Deep Blue Banner (GotMyHost Caliber)   */}
      {/* =================================================================== */}
      <section className="relative w-full overflow-hidden">
        
        {/* Full-Width Deep Royal Blue Banner Container */}
        <div className="w-full bg-gradient-to-r from-[#031542] via-[#092978] to-[#041a4a] text-white pt-10 sm:pt-14 pb-28 sm:pb-36 relative overflow-hidden">
          
          {/* Subtle Ambient Tech Mesh & Radial Accents */}
          <div className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />
          <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-[500px] h-[400px] bg-sky-400/15 rounded-full blur-[130px] pointer-events-none" />

          {/* Banner Inner Content */}
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition & Action CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Notification Badge Pill (GotMyHost discount badge style) */}
              <motion.div 
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-mono text-sky-200 backdrop-blur-md shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Onboarding New Enterprise &amp; High-Growth Projects for 2026</span>
              </motion.div>

              {/* Master Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.035em] leading-[1.08]"
              >
                Custom Software &amp; High-Impact Digital Platforms{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-white">
                  Built For Scale.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-base sm:text-lg text-slate-200 max-w-2xl leading-[1.7] font-normal"
              >
                From high-growth mobile applications to resilient cloud architectures, TSS Soft designs, engineers, and deploys production-grade digital assets that solve real-world problems.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  href="/contact"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-heading font-semibold text-base px-8 py-4 rounded-xl shadow-xl shadow-blue-900/40 hover:shadow-blue-500/40 transition-all duration-200 flex items-center gap-2.5 active:scale-95"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Link>

                <a
                  href="#showcase"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/25 font-heading font-medium text-base px-7 py-4 rounded-xl backdrop-blur-xl transition-all duration-200 flex items-center gap-2 active:scale-95"
                >
                  <span>Explore Selected Works</span>
                  <ChevronDown className="w-4 h-4 text-slate-300" />
                </a>
              </motion.div>

              {/* Trust Guarantees */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-5 pt-3 text-xs sm:text-sm font-medium text-blue-100"
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% IP &amp; Code Ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 flex-shrink-0" />
                  <span>99.98% High-Availability SLA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>6+ Years Experience</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: High-End Technology & Systems Showcase Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              {/* Floating Technology Architecture Frame */}
              <div className="relative rounded-2xl bg-[#030c24]/90 border border-white/20 p-6 shadow-2xl backdrop-blur-2xl space-y-5">
                
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="ml-2 font-mono text-[11px] text-blue-200">
                      TSS Soft Core Architecture
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-400/30">
                    Live Cluster
                  </span>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Full-Stack Next.js 14</h4>
                        <p className="text-[11px] text-slate-300">Sub-45ms Edge Response</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-300">✓ Healthy</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Flutter &amp; React Native Mobile</h4>
                        <p className="text-[11px] text-slate-300">60 FPS Native Rendering</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-300">✓ Ready</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Distributed PostgreSQL &amp; Cloud</h4>
                        <p className="text-[11px] text-slate-300">Zero-Loss Automatic Failover</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-300">99.98% SLA</span>
                  </div>
                </div>

                {/* Footer Stat Row */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span>DELIVERY: BANGLADESH</span>
                  <span className="text-sky-300">ENTERPRISE GRADE</span>
                </div>

              </div>
            </motion.div>

          </div>

        </div>

        {/* ----------------------------------------------------------------- */}
        {/* Floating Overlapping Project Starter Card (Soft Shadow & Clean)   */}
        {/* ----------------------------------------------------------------- */}
        <div className="max-w-4xl mx-auto px-4 -mt-14 sm:-mt-20 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-white dark:bg-[#080e22] border border-slate-100 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-2xl text-center space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold inline-block">
                ✦ READY TO BRING YOUR VISION TO LIFE?
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Let's Engineer Your Next Digital Masterpiece.
              </h3>
              <p className="font-body text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Whether you need a cross-platform mobile application, high-concurrency web platform, or custom enterprise architecture — our software architects are ready to build with you.
              </p>
            </div>

            {/* Direct Project Start Button */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold text-base px-9 py-4 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 inline-flex items-center gap-2.5"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>

            {/* Service Discovery Pills */}
            <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-center gap-2.5">
              {[
                { icon: Smartphone, label: 'Mobile Applications (Flutter / React Native)', color: 'text-blue-600 dark:text-blue-400' },
                { icon: Globe, label: 'Next.js Web Platforms', color: 'text-cyan-600 dark:text-cyan-400' },
                { icon: Cloud, label: 'Enterprise Cloud & APIs', color: 'text-indigo-600 dark:text-indigo-400' },
                { icon: Laptop, label: 'Windows Desktop Systems', color: 'text-sky-600 dark:text-sky-400' },
                { icon: Palette, label: 'UI/UX Design Systems', color: 'text-violet-600 dark:text-violet-400' }
              ].map((service, idx) => {
                const IconComp = service.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium font-mono bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 transition-colors"
                  >
                    <IconComp className={`w-3.5 h-3.5 ${service.color} flex-shrink-0`} />
                    <span>{service.label}</span>
                  </span>
                );
              })}
            </div>

          </motion.div>
        </div>

      </section>

      {/* =================================================================== */}
      {/* 2. TRUSTED PARTNERS & METRICS: Bangladesh Reach                     */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-[1400px] mx-auto relative z-10"
      >
        <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/15 rounded-3xl p-8 sm:p-14 shadow-xl backdrop-blur-2xl text-center space-y-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest">
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
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-white/[0.05] border border-slate-200 dark:border-white/15 text-xs text-slate-700 dark:text-slate-200 shadow-sm">
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
                className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-blue-500 text-xs font-medium text-slate-800 dark:text-slate-200 transition-colors shadow-sm"
              >
                {client}
              </span>
            ))}
          </div>

          {/* Stat Counter Grid (6+ yrs experience, flagship products) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-white/10 max-w-4xl mx-auto text-left">
            
            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight mb-1">
                6+ yrs
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Experience</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Deep software engineering &amp; architecture</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400 font-mono tracking-tight mb-1">
                10x
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Peak Growth</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Average throughput scale for client systems</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-sky-400 font-mono tracking-tight mb-1">
                Multi-Stack
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Flagship Platforms</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Engineered production web, mobile &amp; systems</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-cyan-600 dark:text-indigo-400 font-mono tracking-tight mb-1">
                99.98%
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Uptime SLA</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Fault-tolerant distributed edge uptime</p>
            </div>

          </div>

        </div>
      </motion.section>

      {/* =================================================================== */}
      {/* 3. CORE SERVICES: 6-Card Grid (Full Screen Width + Blue Hover)      */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-[1400px] mx-auto relative z-10" 
        id="services"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200 dark:border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest mb-3">
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

        {/* 6-Card Services Grid with Powerful Blue Hover Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Web Architecture */}
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/10 hover:border-blue-600 hover:ring-2 hover:ring-blue-500/20 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-13 h-13 p-3 rounded-2xl bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-400/25 flex items-center justify-center text-blue-600 dark:text-blue-300 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1 font-semibold">Web Platform</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Custom Web Platforms &amp; Architecture
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                SEO-dominant, high-concurrency web flagships engineered on Next.js 14, Node.js, and PostgreSQL. Engineered to handle traffic spikes with sub-50ms responsiveness.
              </p>
              <ul className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Next.js 14 Server Actions &amp; SSR</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Sub-50ms Global Edge Performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Enterprise Security &amp; RBAC Auth</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">Next.js</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">TypeScript</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">PostgreSQL</span>
            </div>
          </div>

          {/* Card 2: Mobile Apps */}
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/10 hover:border-blue-600 hover:ring-2 hover:ring-blue-500/20 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-13 h-13 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-400/25 flex items-center justify-center text-emerald-600 dark:text-emerald-300 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1 font-semibold">Cross-Platform</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Mobile Applications (iOS &amp; Android)
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Fluid 60fps mobile applications engineered with Flutter and React Native. Offline-first data caching, biometric verification, and real-time push alerts.
              </p>
              <ul className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Flutter &amp; React Native Core</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Offline-First Data Synchronization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>App Store &amp; Play Store Deployment</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">Flutter</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">React Native</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">iOS / Android</span>
            </div>
          </div>

          {/* Card 3: Enterprise Cloud & APIs */}
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/10 hover:border-blue-600 hover:ring-2 hover:ring-blue-500/20 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-13 h-13 p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-400/25 flex items-center justify-center text-indigo-600 dark:text-indigo-300 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Server className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1 font-semibold">Backend &amp; DevOps</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Enterprise Backend &amp; Cloud APIs
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                High-throughput microservices, REST &amp; GraphQL APIs, automated cloud pipelines (Docker, Kubernetes), and fault-tolerant multi-region replication.
              </p>
              <ul className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>High-Concurrency Microservices</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Automated CI/CD DevOps Pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Real-time WebSocket Streaming</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">Docker</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">Node.js</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">Redis</span>
            </div>
          </div>

          {/* Card 4: UI/UX & Design Systems */}
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/10 hover:border-blue-600 hover:ring-2 hover:ring-blue-500/20 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-13 h-13 p-3 rounded-2xl bg-purple-50 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-400/25 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400 uppercase tracking-wider block mb-1 font-semibold">Design System</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                UI/UX Design Systems &amp; Strategy
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Conversion-focused digital experience design. Modular Figma component systems, accessible typography hierarchy, and effortless checkout flows.
              </p>
              <ul className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Figma Design Tokens &amp; Components</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Conversion-Driven User Journeys</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Pixel-Perfect Component Handover</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">Figma</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">Tokens</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">Storybook</span>
            </div>
          </div>

          {/* Card 5: Intelligent Automation & AI */}
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/10 hover:border-blue-600 hover:ring-2 hover:ring-blue-500/20 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-13 h-13 p-3 rounded-2xl bg-sky-50 dark:bg-sky-500/15 border border-sky-200 dark:border-sky-400/25 flex items-center justify-center text-sky-600 dark:text-sky-300 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-1 font-semibold">Automation &amp; AI</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Intelligent Automation &amp; System Integration
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Custom API integrations, workflow automation, payment gateways (bKash, Nagad, SSLCommerz, Stripe), and AI-augmented task pipelines.
              </p>
              <ul className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Payment Gateway &amp; MFS Integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Custom CRM &amp; ERP Workflow Hooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>LLM &amp; Intelligent Data Processing</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">MFS APIs</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">Webhooks</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">AI Pipelines</span>
            </div>
          </div>

          {/* Card 6: Dedicated Pods & Maintenance */}
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/10 hover:border-blue-600 hover:ring-2 hover:ring-blue-500/20 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-13 h-13 p-3 rounded-2xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-400/25 flex items-center justify-center text-amber-600 dark:text-amber-300 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider block mb-1 font-semibold">Ongoing SLA</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Dedicated Engineering Pods &amp; SLA Support
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Continuous software maintenance, 24/7 uptime monitoring, security patching, and on-demand feature expansion with dedicated senior developers.
              </p>
              <ul className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Guaranteed SLA Incident Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Proactive Security &amp; Dependency Audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>Direct Communication via Slack / WhatsApp</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">24/7 SLA</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">Direct Access</span>
              <span className="bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md">Dev Pods</span>
            </div>
          </div>

        </div>

      </motion.section>

      {/* =================================================================== */}
      {/* 4. FEATURED CASE STUDIES: 3 Highlighted Projects + "See More"       */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-[1400px] mx-auto relative z-10" 
        id="showcase"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200 dark:border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest mb-3">
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
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/15 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:shadow-2xl hover:border-blue-500">
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
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
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
                    <Check className="w-4 h-4 text-blue-600" />
                    <span>Real-Time Screen Mirroring (&lt; 50ms)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600" />
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
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/15 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:shadow-2xl hover:border-purple-500">
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
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
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
                    <Check className="w-4 h-4 text-purple-600" />
                    <span>Dedicated Tutor &amp; Guardian Dashboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-600" />
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
          <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/15 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 transition-all duration-300 hover:shadow-2xl hover:border-emerald-500">
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
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2 font-semibold">
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
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Real-Time Route &amp; Pickup Selection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
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

        {/* Clean, Prominent "Explore All Projects" Button (NO number '5' mentioned) */}
        <div className="pt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold text-base shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 hover:-translate-y-1 active:scale-95 transition-all duration-200"
          >
            <span>Explore All Projects in Portfolio</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
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
        className="px-4 sm:px-8 max-w-[1400px] mx-auto relative z-10"
      >
        <div className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/15 rounded-3xl p-8 sm:p-12 shadow-xl backdrop-blur-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest mb-3">
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
                  <th className="py-4 px-4 sm:px-6 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-bold rounded-t-xl">TSS Soft</th>
                  <th className="py-4 px-4 sm:px-6">Traditional Agencies</th>
                  <th className="py-4 px-4 sm:px-6">Freelance Marketplaces</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-sm">
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">IP &amp; Source Code Ownership</td>
                  <td className="py-4 px-4 sm:px-6 bg-blue-50/50 dark:bg-blue-900/10 font-bold text-blue-600 dark:text-blue-400">✓ 100% Unrestricted Handover</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Often proprietary lock-in</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Variable / Unverified</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Engineering Talent</td>
                  <td className="py-4 px-4 sm:px-6 bg-blue-50/50 dark:bg-blue-900/10 font-bold text-blue-600 dark:text-blue-400">✓ Senior Architects Only</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Junior dev delegation</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Unknown skill level</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Performance Guarantee</td>
                  <td className="py-4 px-4 sm:px-6 bg-blue-50/50 dark:bg-blue-900/10 font-bold text-blue-600 dark:text-blue-400">✓ Sub-50ms SLA Uptime</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Standard shared hosting</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">No guarantee</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Direct Communication</td>
                  <td className="py-4 px-4 sm:px-6 bg-blue-50/50 dark:bg-blue-900/10 font-bold text-blue-600 dark:text-blue-400">✓ Direct Slack &amp; Phone Access</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Through account managers</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Time-zone friction</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900 dark:text-white">Post-Launch Warranty</td>
                  <td className="py-4 px-4 sm:px-6 bg-blue-50/50 dark:bg-blue-900/10 font-bold text-blue-600 dark:text-blue-400">✓ Continuous Maintenance &amp; SLA</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Expensive add-on fees</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-500 dark:text-slate-400">Disappears after payment</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </motion.section>

      {/* =================================================================== */}
      {/* 6. ENGINEERING PROCESS: 5-Step Cards with Blue Lift Hover           */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-[1400px] mx-auto relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest mb-3">
            <span>ENGINEERING PROCESS</span>
          </div>
          <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-[-0.025em] leading-[1.15] mb-4">
            From Architecture Concept to Production Launch.
          </h2>
          <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7]">
            A disciplined, transparent 5-step development lifecycle engineered for zero surprises and rapid delivery.
          </p>
        </div>

        {/* 5-Step Cards with Interactive Blue Hover Lift (User's Image 2 feedback) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          
          {[
            { step: '01', title: 'Discovery & Scope', desc: 'Domain analysis, technical architecture, and system specifications before touching code.' },
            { step: '02', title: 'Prototyping', desc: 'Figma interactive component tokens, user journeys, and architectural wireframes.' },
            { step: '03', title: 'High-Velocity Dev', desc: 'Rapid 2-week agile sprints with continuous GitHub commits and live staging previews.' },
            { step: '04', title: 'Rigorous QA', desc: 'Automated unit tests, load stress benchmarks, and zero-defect security validation.' },
            { step: '05', title: 'Launch & SLA', desc: 'Zero-downtime deployment, DNS configuration, and 24/7 SLA production monitoring.' },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/10 hover:border-blue-600 hover:ring-2 hover:ring-blue-500/25 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-3 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Blue Glow Line on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <span className="text-3xl font-mono font-black text-blue-600 dark:text-blue-400 block mb-3 group-hover:translate-x-1 group-hover:scale-105 transition-transform duration-300">
                  {item.step}
                </span>
                <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 group-hover:-translate-y-0.5 transition-all duration-300">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span>Phase {item.step} Complete</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest mb-3">
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
                className="bg-white dark:bg-[#070e24]/90 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm transition-all"
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
      {/* 8. WORLD MAP SECTION: Direct on BG (No Card, Clean Ash, Blue BD)   */}
      {/* =================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="px-4 sm:px-8 max-w-[1400px] mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>PHYSICAL PRESENCE &amp; HEADQUARTERS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-[-0.025em]">
            Where We Are Located.
          </h2>
          <p className="font-body text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Headquartered physically in Kushtia, Bangladesh — engineering custom enterprise systems and scalable digital platforms for businesses across Bangladesh and worldwide.
          </p>
        </div>

        {/* Real Interactive Map Centered on Kushtia, Bangladesh (Default Satellite Mode) */}
        <div className="relative w-full max-w-5xl mx-auto my-6 rounded-3xl overflow-hidden border border-slate-200/90 dark:border-blue-500/25 shadow-xl bg-slate-100 dark:bg-[#070e24]">
          <div className="relative w-full h-[420px] sm:h-[480px]">
            <iframe
              title="TSS Soft Kushtia Headquarters Location"
              src="https://maps.google.com/maps?q=Kushtia,%20Bangladesh&t=k&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating TSS Soft Headquarters Card - Perfectly positioned at top-left, completely covering Google's default white card */}
            <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 w-[calc(100%-16px)] sm:w-[370px] p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#070e24] border border-slate-200/90 dark:border-blue-500/40 shadow-2xl pointer-events-auto z-20">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <span className="font-heading font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    TSS Soft Headquarters
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                  HQ Lab
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Kushtia Sadar, Khulna Division, Bangladesh</span>
              </p>

              <div className="mt-3.5 pt-2.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  23.9015° N, 89.1205° E
                </span>
                <a
                  href="https://maps.google.com/?q=Kushtia,+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Physical Office Footer Bar */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-semibold">
                PHYSICAL HEADQUARTERS
              </span>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">
                Kushtia, Bangladesh
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Walk-in meetings &amp; engineering lab
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-semibold">
                DIRECT PHONE &amp; WHATSAPP
              </span>
              <a href="tel:+8801870955900" className="font-heading font-bold text-slate-900 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                +880 1870 955 900
              </a>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                24/7 Client Support &amp; Emergency Response
              </p>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <Link
              href="/contact"
              className="w-full md:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Schedule an In-Person Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </motion.section>

    </div>
  );
}
