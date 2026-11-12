'use client';

import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  MapPin, 
  Sparkles, 
  Smartphone, 
  Globe, 
  Palette, 
  Cloud, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      {/* ========================================================
          HERO SECTION (Modeled directly after the reference image)
          ======================================================== */}
      <section className="min-h-[88vh] flex flex-col justify-between px-4 sm:px-8 max-w-7xl mx-auto pt-8 pb-12 relative z-10">
        
        {/* Main Grid: Headline & Subtitle on Left, Floating Frosted Widget on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto pt-6 pb-12">
          
          {/* Left Column: Big Editorial Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Subtle Agency Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.07] border border-white/10 text-xs text-slate-300 font-medium mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span>TSS Soft • Digital Engineering Agency</span>
            </div>

            {/* Headline - Pure Luxury Editorial (Reference: "Weekends that feel like a month.") */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.4rem] font-bold text-white tracking-tight leading-[1.08] mb-6 font-display-xl">
              Software that <br className="hidden sm:block" />
              scales beyond <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
                horizons.
              </span>
            </h1>

            {/* Subtitle - Poetic, Direct, Professional */}
            <p className="text-base sm:text-lg text-slate-300/85 max-w-xl font-light leading-relaxed mb-10">
              Bespoke web architectures, native mobile platforms, and resilient cloud systems. 
              Engineered with boutique craft in Kushtia, delivering high-impact solutions for enterprise partners globally.
            </p>

            {/* Action Buttons (Matching Reference: Crisp White Pill + Ghost Link) */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <Link
                href="/contact"
                className="bg-white text-slate-950 font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-slate-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-2 group active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/portfolio"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group py-2"
              >
                <span>See selected works</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-400 group-hover:text-white" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Floating Frosted Glass Card (Matching the Reference Widget) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-[#0a122e]/60 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.55)] relative overflow-hidden group hover:border-white/25 transition-all duration-300">
              
              {/* Subtle Ambient Card Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header (Reference: "Point Reyes, two hours north") */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Kushtia, BD • Global Delivery</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Sprint Active</span>
                </div>
              </div>

              {/* Card Row 1: Featured Project / Architecture */}
              <div className="bg-white/[0.04] border border-white/5 hover:border-white/15 rounded-2xl p-4 mb-3 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold text-sm">Tutors Kushtia Platform</h4>
                  <span className="text-[11px] font-mono text-slate-400">4.98 Rating ★</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-500">Architecture</span>
                    <span className="text-slate-200 font-medium">Next.js &amp; Edge API</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-500">Performance</span>
                    <span className="text-blue-400 font-semibold">99.98% Uptime</span>
                  </div>
                </div>
              </div>

              {/* Card Row 2: Digital Wellness Mobile App */}
              <div className="bg-white/[0.04] border border-white/5 hover:border-white/15 rounded-2xl p-4 mb-5 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold text-sm">Anti Dopamine Engine</h4>
                  <span className="text-[11px] font-mono text-slate-400">4.95 Rating ★</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-500">Platform</span>
                    <span className="text-slate-200 font-medium">iOS &amp; Android</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-slate-500">Encryption</span>
                    <span className="text-blue-400 font-semibold">Zero-Knowledge</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Metric */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                <span className="text-slate-400 font-light">Response Guarantee</span>
                <span className="text-white font-medium">&lt; 12 Hours Onboarding</span>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom Horizontal Feature Strip (Direct match to reference image bottom row) */}
        <div className="pt-8 border-t border-white/10 w-full mt-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 text-left">
            
            {/* Feature 1 */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Bespoke Code</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light leading-snug">
                Handcrafted from first principles
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span>Sub-50ms Speed</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light leading-snug">
                Edge runtime optimized deployments
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Zero-Trust Security</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light leading-snug">
                Enterprise confidentiality standards
              </p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Global Reach</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light leading-snug">
                Built in Kushtia, scaled worldwide
              </p>
            </div>

            {/* Feature 5 */}
            <div className="space-y-1 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>100% IP Handover</span>
              </div>
              <p className="text-[11px] text-slate-400 font-light leading-snug">
                Clean ownership &amp; documentation
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* ========================================================
          SERVICES SECTION (Clean, Frosted Glass, Professional)
          ======================================================== */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10" id="services">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 block">Our Capabilities</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Engineered with Precision.</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-light">
            We focus on core domains where architectural excellence directly impacts revenue and user loyalty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#09112a]/50 backdrop-blur-xl border border-white/10 hover:border-white/25 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Mobile Applications</h3>
              <p className="text-slate-300/80 text-sm leading-relaxed mb-6">
                Native and cross-platform solutions built with Flutter and React Native. Engineered for fluid 60fps interaction and offline resilience.
              </p>
            </div>
            <div className="text-xs font-mono text-blue-300/80 pt-4 border-t border-white/5">
              FLUTTER • REACT NATIVE • SWIFT
            </div>
          </motion.div>

          {/* Card 2: Modern Web */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#09112a]/50 backdrop-blur-xl border border-white/10 hover:border-white/25 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group shadow-lg md:col-span-2"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Full-Stack Web Architectures</h3>
              <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                Lightning-fast, SEO-dominant web platforms engineered on Next.js, Node.js, and modern distributed databases. Built to handle heavy global workloads with effortless responsiveness.
              </p>
            </div>
            <div className="text-xs font-mono text-blue-300/80 pt-4 border-t border-white/5">
              NEXT.JS • REACT • TYPESCRIPT • POSTGRESQL • TAILWIND
            </div>
          </motion.div>

          {/* Card 3: UI/UX */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-[#09112a]/50 backdrop-blur-xl border border-white/10 hover:border-white/25 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group shadow-lg md:col-span-2"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Bespoke Design Systems</h3>
              <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                High-end modern interfaces focused on cognitive ease, typography, and purposeful motion. We eliminate visual noise to highlight what matters most to your users.
              </p>
            </div>
            <div className="text-xs font-mono text-blue-300/80 pt-4 border-t border-white/5">
              FIGMA • INTERACTIVE PROTOTYPES • DESIGN TOKENS
            </div>
          </motion.div>

          {/* Card 4: Cloud */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#09112a]/50 backdrop-blur-xl border border-white/10 hover:border-white/25 rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Cloud &amp; DevOps</h3>
              <p className="text-slate-300/80 text-sm leading-relaxed mb-6">
                Automated continuous integration, Docker containerization, and zero-downtime edge deployments.
              </p>
            </div>
            <div className="text-xs font-mono text-blue-300/80 pt-4 border-t border-white/5">
              DOCKER • AWS • CLOUDFLARE • CI/CD
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================
          SELECTED WORKS
          ======================================================== */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative z-10" id="projects">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 block">Case Studies</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Recent Deliveries.</h2>
          </div>
          <Link href="/portfolio" className="text-sm font-medium text-white flex items-center gap-1 group">
            <span>Explore full portfolio</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#081026]/60 backdrop-blur-2xl border border-white/10 hover:border-white/20 rounded-3xl overflow-hidden group transition-all duration-300"
          >
            <div className="relative overflow-hidden aspect-[16/10] bg-[#040816]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVZYso5zhowu7yT_E-_ToLB1TYRgY-avJDxlRfJ_PEui1z7VEFfdZsvVftxe6tTm4gBoVnSnV4zeC2f12rlxP5wCZgiKb9SS0dPxnSIOXGVbToNbq9-bmZfdSLdEEzPzdH3Z9Vhf06Ah9iXwzLsR5t7LzOP6GrqxPgDi79TeOJFqg4ysYYTd6THrdOKiAzNtjUv1E-69uza-YaicpVNlUEq6py1g3Z9jx2mRVc9tPJzOBkHHqRYRXr302EanjpamebcLz0YEk7TSre" 
                alt="Tutors Kushtia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081026] via-transparent to-transparent opacity-90" />
            </div>
            <div className="p-8">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest block mb-2">EdTech Platform</span>
              <h3 className="text-2xl font-bold text-white mb-3">Tutors Kushtia</h3>
              <p className="text-slate-300/80 text-sm leading-relaxed mb-6 font-light">
                A localized marketplace connecting students with certified educators, complete with real-time scheduling, verified credentials, and instant billing.
              </p>
              <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                <span>View platform study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-[#081026]/60 backdrop-blur-2xl border border-white/10 hover:border-white/20 rounded-3xl overflow-hidden group transition-all duration-300"
          >
            <div className="relative overflow-hidden aspect-[16/10] bg-[#040816]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAktAzyLsv4V3WIcFMWxRfLCIvW7UP9Gcrfsz7WVXqE_GJgcqSyesmOKCewCsvLBYuzCBu3h-RNYQ6QUGjZyX8KJH7PsppyAcdj0bpWmGVl6aBws4ZVO-DqW2kamE_UXXXXO-e5_oguafewk-Y43ahv_GxRL5yHpXf26K5XZRCpibB-unNoi7Uj_pghmdPkdn08nIqNZOlXXjdZjzzp7uOjdx55P7K6iAkBQ4_Plq-CDFnFKiqUagmoBBZKYy_CPgifb38ahl6pqN8e" 
                alt="Anti Dopamine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081026] via-transparent to-transparent opacity-90" />
            </div>
            <div className="p-8">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest block mb-2">Mobile Wellness</span>
              <h3 className="text-2xl font-bold text-white mb-3">Anti Dopamine</h3>
              <p className="text-slate-300/80 text-sm leading-relaxed mb-6 font-light">
                A behavioral digital detox platform designed to break compulsive app usage loops via cryptographic offline delays and cognitive friction.
              </p>
              <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                <span>View platform study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================
          LEADERSHIP & ROOTS
          ======================================================== */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 block">Our Origin</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Born in Kushtia.<br />
              <span className="text-slate-400 font-normal">Built for the World.</span>
            </h2>
            <p className="text-slate-300/85 text-base leading-relaxed font-light mb-6">
              TSS Soft. was founded by uniting the visionary drive of three technologists: <strong>Tahsin, Shafaur, and Sawon</strong>. 
              We operate on the conviction that high-end software does not belong solely to Silicon Valley—world-class systems can be built from anywhere with technical discipline.
            </p>
            <Link href="/about" className="text-sm font-semibold text-white flex items-center gap-1.5 hover:text-blue-300 transition-colors">
              <span>Read the full story</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* Founder 1: Tahsin */}
            <div className="bg-[#081026]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center hover:border-white/20 transition-all">
              <div className="w-24 h-24 mx-auto mb-4">
                <img src="/team/tahsin.svg" alt="K. M. Tahsin Ahmmed" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-white font-bold text-sm">K. M. Tahsin Ahmmed</h4>
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block mt-1">CEO</span>
            </div>

            {/* Founder 2: Shafaur */}
            <div className="bg-[#081026]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center hover:border-white/20 transition-all">
              <div className="w-24 h-24 mx-auto mb-4">
                <img src="/team/shafaur.svg" alt="MD. Shafaur Rahman Sabbir" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-white font-bold text-sm">MD. Shafaur Rahman</h4>
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block mt-1">COO</span>
            </div>

            {/* Founder 3: Sawon */}
            <div className="bg-[#081026]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center hover:border-white/20 transition-all">
              <div className="w-24 h-24 mx-auto mb-4">
                <img src="/team/sawon.svg" alt="Mohammad Sawon" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-white font-bold text-sm">Mohammad Sawon</h4>
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block mt-1">CMO</span>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          LUXURY CALL TO ACTION CARD
          ======================================================== */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 mb-12">
        <div className="bg-gradient-to-b from-[#091332]/80 via-[#070e24]/90 to-[#040816] backdrop-blur-2xl border border-white/15 rounded-[2.5rem] p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-300 mb-4 block">Initiate Engagement</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Let's engineer something extraordinary together.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light mb-10 leading-relaxed">
              We accept a limited number of client engagements each quarter to preserve our standard of deep technical immersion.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-950 font-semibold px-8 py-4 rounded-full text-sm hover:bg-slate-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.45)] transition-all duration-300 active:scale-95"
            >
              <span>Schedule Initial Briefing</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
