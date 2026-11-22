'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Sparkles, 
  Smartphone, 
  Globe, 
  Palette, 
  Cloud, 
  ShieldCheck, 
  Zap, 
  Code2, 
  CheckCircle2, 
  Check, 
  X, 
  ChevronDown, 
  Star, 
  ExternalLink, 
  Cpu, 
  TrendingUp, 
  Users, 
  Layers,
  ArrowRight,
  Terminal,
  Monitor,
  Layout,
  Database
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  // State for Interactive Process Stepper (From Idea to Execution)
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  // State for Showcase Filter
  const [activeShowcaseFilter, setActiveShowcaseFilter] = useState('all');

  // State for FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // --------------------------------------------------------------------------
  // Process Steps Data (Matching "From Idea To Execution" in Video)
  // --------------------------------------------------------------------------
  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      subtitle: 'Research & Domain Architecture',
      description: 'Deep-dive analysis of business mechanics, user psychology, and market opportunities. We define the technological foundation and key performance vectors before laying a single line of code.',
      deliverables: ['Domain Analysis', 'Target Audience Modeling', 'Technical Feasibility Matrix'],
      badge: 'Step 01 • Strategy',
      previewTitle: 'Discovery & Domain Mapping',
      previewDetails: 'Defining data schemas, edge endpoints, and business rules.'
    },
    {
      step: '02',
      title: 'Flows',
      subtitle: 'System Architecture & User Journey Maps',
      description: 'Mapping end-to-end customer touchpoints, microservice orchestrations, and friction-free user paths. We eliminate unnecessary hurdles to maximize retention and conversion rates.',
      deliverables: ['Information Architecture', 'User Journey Maps', 'Interactive Sitemap'],
      badge: 'Step 02 • Blueprint',
      previewTitle: 'User Journey & Routing Flows',
      previewDetails: 'Zero-friction paths designed for effortless user adoption.'
    },
    {
      step: '03',
      title: 'Wireframes',
      subtitle: 'Low-Fidelity Interactive Scaffolding',
      description: 'Transforming architectural concepts into structural wireframes. We validate core functionality, information hierarchy, and layout responsiveness across mobile, tablet, and ultra-wide screens.',
      deliverables: ['Low-Fi Interactive Wireframes', 'Responsive Grid Scaffolding', 'UX Flow Validation'],
      badge: 'Step 03 • Structure',
      previewTitle: 'Structural Wireframe Matrix',
      previewDetails: 'Validating hierarchy and ergonomic component placement.'
    },
    {
      step: '04',
      title: 'Mockups & Engineering',
      subtitle: 'High-Fidelity UI & Resilient Code',
      description: 'Pixel-perfect visual design paired with production-grade Next.js and distributed backend engines. Crafted with bespoke animations, fluid typography, and sub-50ms server responses.',
      deliverables: ['Figma Design System', 'Clean Next.js 14 Codebase', 'Scalable Backend APIs'],
      badge: 'Step 04 • Craft',
      previewTitle: 'Pixel-Perfect Production Engineering',
      previewDetails: '60fps motion, bespoke styling, and enterprise API resilience.'
    },
    {
      step: '05',
      title: 'Prototyping & Launch',
      subtitle: 'Edge Deployment & Continuous Delivery',
      description: 'Rigorous end-to-end testing, zero-trust security audits, and automated CI/CD deployment to global edge CDN nodes. 100% intellectual property handover with comprehensive documentation.',
      deliverables: ['Zero-Downtime Edge Deployment', 'Lighthouse 98+ Optimization', 'Full IP & Code Handover'],
      badge: 'Step 05 • Go-Live',
      previewTitle: 'Global Edge Production Launch',
      previewDetails: 'Distributed serverless nodes with 99.98% SLA guarantees.'
    }
  ];

  // --------------------------------------------------------------------------
  // Showcase Projects Data (Matching "Websites That Make an Impression")
  // --------------------------------------------------------------------------
  const showcaseProjects = [
    {
      id: 1,
      title: 'Apex Global Ventures',
      category: 'web',
      categoryLabel: 'Web Platform',
      tagline: 'Enterprise Financial Clearing & Venture Portal',
      metrics: '+340% User Velocity • < 40ms Edge Latency',
      description: 'High-concurrency investment portal built on Next.js 14 with real-time financial telemetry, automated portfolio tracking, and sub-second global database replication.',
      tech: ['Next.js 14', 'PostgreSQL', 'Tailwind', 'Cloudflare Edge'],
      color: 'from-blue-600/30 via-sky-500/20 to-transparent',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 2,
      title: 'Willionaire Network',
      category: 'mobile',
      categoryLabel: 'Mobile App & SaaS',
      tagline: 'Global Network & Asset Management for Founders',
      metrics: '4.9★ Store Rating • 120k Active Sessions',
      description: 'Bespoke iOS and Android mobile ecosystem designed for high-net-worth entrepreneurs, private community networking, and instant deal syndication.',
      tech: ['React Native', 'TypeScript', 'Node.js', 'Redis Cache'],
      color: 'from-emerald-600/30 via-teal-500/20 to-transparent',
      borderColor: 'border-emerald-500/30'
    },
    {
      id: 3,
      title: 'ChinaSoko Logistics',
      category: 'cloud',
      categoryLabel: 'Cloud & Logistics',
      tagline: 'Real-Time Cross-Border Freight & Cargo Tracking',
      metrics: '15k Daily Waybills • Zero Lost Dispatches',
      description: 'Automated end-to-end container tracking dashboard featuring live GPS geofencing, multi-currency customs clearance, and instant client invoice delivery.',
      tech: ['Next.js', 'Docker', 'AWS ECS', 'Supabase SQL'],
      color: 'from-rose-600/30 via-orange-500/20 to-transparent',
      borderColor: 'border-rose-500/30'
    },
    {
      id: 4,
      title: 'Plutope Digital Capital',
      category: 'fintech',
      categoryLabel: 'Fintech & Web3',
      tagline: 'Empowering Communities with Frictionless Payments',
      metrics: '$42M+ Transacted • Bank-Grade Cryptography',
      description: 'Ultra-secure payment routing gateway featuring biometric authentication, zero-knowledge settlement protocols, and instant multi-fiat merchant payouts.',
      tech: ['Node.js', 'PostgreSQL', 'Next.js Core', 'Docker'],
      color: 'from-violet-600/30 via-purple-500/20 to-transparent',
      borderColor: 'border-violet-500/30'
    },
    {
      id: 5,
      title: 'Vero Italian Heritage',
      category: 'web',
      categoryLabel: 'E-Commerce Core',
      tagline: 'Luxury Milan Fashion & Direct-to-Consumer Engine',
      metrics: '2.8x Conversion Lift • 99 Lighthouse Score',
      description: 'Luxury digital storefront featuring 3D product previews, instant checkout orchestration, and multi-warehouse inventory synchronization across Europe.',
      tech: ['Next.js 14', 'Tailwind', 'Stripe API', 'Vercel Edge'],
      color: 'from-amber-600/30 via-yellow-500/20 to-transparent',
      borderColor: 'border-amber-500/30'
    },
    {
      id: 6,
      title: 'Tomahawk Power Tools',
      category: 'cloud',
      categoryLabel: 'Industrial SaaS',
      tagline: 'Heavy Machinery Dealer & Telemetry Portal',
      metrics: '850+ Enterprise Dealers • 100% SLA',
      description: 'Industrial-grade equipment telemetry portal handling automated warranty claims, dealer parts distribution, and scheduled field service dispatch.',
      tech: ['TypeScript', 'Tailwind', 'PostgreSQL', 'REST APIs'],
      color: 'from-cyan-600/30 via-blue-500/20 to-transparent',
      borderColor: 'border-cyan-500/30'
    }
  ];

  const filteredShowcase = activeShowcaseFilter === 'all'
    ? showcaseProjects
    : showcaseProjects.filter(p => p.category === activeShowcaseFilter);

  // --------------------------------------------------------------------------
  // FAQ Data (Matching "Questions? We've Got Answers" in Video)
  // --------------------------------------------------------------------------
  const faqs = [
    {
      q: 'How fast can TSS Soft begin work, and what is the typical delivery timeframe?',
      a: 'We can typically kick off within 48 to 72 hours of project alignment. A focused MVP or high-impact digital platform typically ships in 2 to 4 weeks, while complex enterprise distributed architectures range from 6 to 10 weeks with weekly staging demonstrations.'
    },
    {
      q: 'Do we own 100% of the source code, design systems, and intellectual property?',
      a: 'Yes, absolutely. From day one, you own 100% of the code, Figma design files, architectural documentation, and database schemas. We never enforce vendor lock-in or licensing fees.'
    },
    {
      q: 'What technology stack and frameworks does TSS Soft specialize in?',
      a: 'We specialize in Next.js 14/15, React, TypeScript, Node.js, PostgreSQL/Supabase, Flutter, React Native, Tailwind CSS, Docker, and distributed Cloudflare/AWS edge infrastructure. Everything is built bespoke without bloated page builders.'
    },
    {
      q: 'Can you integrate with our existing backend, ERP, or legacy database systems?',
      a: 'Yes. We frequently architect modern Next.js frontend platforms that seamlessly integrate with legacy SQL databases, third-party ERPs, CRM platforms, and payment gateways through secure, high-throughput REST or GraphQL APIs.'
    },
    {
      q: 'What kind of support and maintenance do you provide post-launch?',
      a: 'Every completed project includes dedicated post-launch support and warranty coverage. Additionally, we offer ongoing enterprise retainer agreements for active feature scaling, 24/7 server monitoring, and continuous performance optimization.'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-36 pb-20 overflow-x-hidden">

      {/* =================================================================== */}
      {/* 1. HERO SECTION: "Creative Intelligence in Every Pixel"            */}
      {/* =================================================================== */}
      <section className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-8 max-w-7xl mx-auto pt-6 sm:pt-10 relative z-10">
        
        {/* Main Hero Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-4 sm:pt-8 mb-12 sm:mb-16">
          
          {/* Subtle Agency Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081028]/90 border border-white/15 text-xs text-slate-200 font-medium mb-6 backdrop-blur-2xl shadow-[0_0_25px_rgba(59,130,246,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono uppercase tracking-wider text-[11px] text-slate-300">
              TSS Soft • Digital Systems &amp; Software Architecture
            </span>
          </motion.div>

          {/* Master Headline (Exact match to Reference Video) */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-hero font-extrabold text-white tracking-[-0.035em] leading-[1.08] mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
          >
            Creative Intelligence in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-200 to-emerald-300 drop-shadow-[0_0_40px_rgba(56,189,248,0.4)]">
              Every Pixel.
            </span>
          </motion.h1>

          {/* Subtitle (Exact match to Reference Video) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-body-p text-slate-300 max-w-2xl font-normal leading-[1.7] mb-10 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]"
          >
            No matter the industry you’re in, or the software asset you need, we design and engineer it for you with world-class craftsmanship.
          </motion.p>

          {/* High-Converting CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            {/* Primary Neon Pill Button (Matching Video's High-Energy Accent) */}
            <Link
              href="/contact"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-heading font-semibold text-[15px] px-8 py-3.5 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.45)] hover:shadow-[0_0_45px_rgba(34,197,94,0.7)] transition-all duration-300 flex items-center gap-2 group active:scale-95 tracking-[-0.01em]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Secondary Glass Pill Button */}
            <a
              href="#showcase"
              className="bg-white/10 hover:bg-white/15 text-white font-heading font-medium text-[15px] px-7 py-3.5 rounded-full border border-white/20 backdrop-blur-xl hover:border-white/35 transition-all duration-200 flex items-center gap-2 active:scale-95 tracking-[-0.01em]"
            >
              <span>Explore Selected Works</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </a>
          </motion.div>

        </div>

        {/* ----------------------------------------------------------------- */}
        {/* Hero Interactive Device / Showcase Trio (Matching Video frame 16s) */}
        {/* ----------------------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center max-w-6xl mx-auto w-full pt-4"
        >
          {/* Card 1: Mobile UI Mockup (Left) */}
          <div className="md:col-span-4 bg-[#070e28]/85 border border-white/15 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Mobile Ecosystem</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">60 FPS Native</span>
            </div>
            
            {/* Phone Frame Illustration */}
            <div className="bg-[#030612] border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-semibold text-white">CargoTrack Pro</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">LIVE GPS</span>
              </div>
              <div className="bg-white/[0.04] rounded-xl p-3 border border-white/5 space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Current Transit</span>
                  <span className="text-emerald-400 font-mono">In Transit</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-3/4 animate-pulse" />
                </div>
                <span className="text-[10px] text-slate-400 block pt-0.5">ETA: 4h 12m • Vessel MSC Oscar</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-3">Cross-platform iOS &amp; Android freight fleet tracking app.</p>
          </div>

          {/* Card 2: Hero Centerpiece Web Application (Center - Elevated) */}
          <div className="md:col-span-4 bg-gradient-to-b from-[#09143c] to-[#060c22] border border-blue-400/30 rounded-3xl p-6 shadow-[0_25px_70px_rgba(37,99,235,0.25)] backdrop-blur-2xl relative overflow-hidden group hover:border-blue-400/50 transition-all duration-300 scale-100 md:scale-105 z-10">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-300">FLAGSHIP CORE</span>
              </div>
              <span className="text-[10px] font-mono text-white bg-blue-600 px-2.5 py-0.5 rounded-full">Next.js 14</span>
            </div>

            <div className="bg-[#030614] border border-white/15 rounded-2xl p-4 space-y-3.5">
              <div className="flex items-center gap-1.5 pb-2 border-b border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">https://tsssoft.com/core</span>
              </div>
              <div className="space-y-2">
                <div className="text-xs font-bold text-white">Distributed Architecture Engine</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Sub-50ms edge computing with multi-region database caching and 99.98% uptime SLA.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">TypeScript</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">PostgreSQL</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">Tailwind</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-blue-200 font-semibold mt-3">High-concurrency enterprise web application architecture.</p>
          </div>

          {/* Card 3: SaaS Dashboard (Right) */}
          <div className="md:col-span-4 bg-[#070e28]/85 border border-white/15 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden group hover:border-white/30 transition-all duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Enterprise SaaS</span>
              <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">Realtime</span>
            </div>

            <div className="bg-[#030612] border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Revenue Telemetry</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">+148.6%</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/[0.04] p-2 rounded-lg border border-white/5">
                  <span className="text-[9px] text-slate-400 block">Total Volume</span>
                  <span className="text-xs font-mono font-bold text-white">৳ 2.48M</span>
                </div>
                <div className="bg-white/[0.04] p-2 rounded-lg border border-white/5">
                  <span className="text-[9px] text-slate-400 block">Active Users</span>
                  <span className="text-xs font-mono font-bold text-white">18,420</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-3">All-in-one financial clearing and client management dashboard.</p>
          </div>
        </motion.div>

      </section>

      {/* =================================================================== */}
      {/* 2. GLOBAL TRUST: "Working with ambitious businesses across borders"  */}
      {/*    (Exact match to Reference Video frame 28s)                      */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-b from-[#08102a]/90 via-[#060b1e]/90 to-[#040816]/95 border border-white/15 rounded-3xl p-8 sm:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-center space-y-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>A Growing Global Reach</span>
            </div>
            
            <h2 className="font-heading text-section-title font-bold text-white tracking-[-0.025em] leading-[1.15]">
              Working with ambitious businesses across borders.
            </h2>
            
            <p className="font-body text-body-p text-slate-300 leading-[1.7] max-w-2xl mx-auto">
              From high-growth local innovators to international corporate partners, we engineer high-resilience digital experiences that support exponential scale.
            </p>
          </div>

          {/* Country Flags & Geographic Reach Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/15 text-xs text-slate-200 shadow-md">
            <span className="flex items-center gap-1.5 text-base">
              <span>🇦🇪</span>
              <span>🇺🇸</span>
              <span>🇸🇦</span>
              <span>🇩🇪</span>
              <span>🇬🇧</span>
              <span>🇨🇦</span>
              <span>🇸🇬</span>
              <span>🇧🇩</span>
            </span>
            <span className="text-slate-400 font-mono text-[11px] ml-1">
              • Clients across 12+ countries worldwide
            </span>
          </div>

          {/* Client Brand Tags Row (Exact match to Video frame 28s) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              'Apex Global Ventures',
              'Gravity Xpeditions',
              'Vero Italy',
              'Bin Farash Group (UAE)',
              'Staincode Labs',
              'Mantara Cloud',
              'Prospers Global',
              'Dar Al Systems',
              'Bennex Media',
              'Atellex Enterprise',
              'Wittelsbach Digital',
              'and more...'
            ].map((client, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 text-xs font-medium text-slate-200 transition-colors shadow-sm"
              >
                {client}
              </span>
            ))}
          </div>

          {/* Stat Counter Grid (Matching Video Stats: 6+ yrs, 10x Peak Growth) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 max-w-4xl mx-auto text-left">
            
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight mb-1">
                6+ yrs
              </div>
              <div className="text-xs font-semibold text-white">Experience</div>
              <p className="text-[11px] text-slate-400">Deep software engineering &amp; architecture</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono tracking-tight mb-1">
                10x
              </div>
              <div className="text-xs font-semibold text-white">Peak Growth</div>
              <p className="text-[11px] text-slate-400">Average throughput scale for client systems</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-sky-400 font-mono tracking-tight mb-1">
                120+
              </div>
              <div className="text-xs font-semibold text-white">Platforms Deployed</div>
              <p className="text-[11px] text-slate-400">Production web &amp; mobile solutions</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5">
              <div className="text-3xl sm:text-4xl font-black text-indigo-400 font-mono tracking-tight mb-1">
                99.98%
              </div>
              <div className="text-xs font-semibold text-white">Uptime SLA</div>
              <p className="text-[11px] text-slate-400">Fault-tolerant distributed edge uptime</p>
            </div>

          </div>

          {/* Infinite Marquee Ticker Strip */}
          <div className="pt-2 border-t border-white/10 overflow-hidden relative">
            <div className="flex gap-8 whitespace-nowrap text-xs font-mono uppercase tracking-widest text-slate-400 py-1">
              <span>• Next.js 14 Architecture</span>
              <span>• Distributed Cloud Infrastructure</span>
              <span>• Flutter &amp; React Native Mobile</span>
              <span>• Custom Enterprise Software</span>
              <span>• Sub-50ms Global Edge Routing</span>
              <span>• Zero-Trust Data Confidentiality</span>
              <span>• 100% Full IP Handover</span>
              <span>• High-Concurrency SQL Replication</span>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. SERVICES: "What we do, and do well."                             */}
      {/*    (Exact match to Reference Video & brandyfy.in section 4)        */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10" id="services">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 uppercase tracking-widest mb-3">
              <span>Capabilities &amp; Core Disciplines</span>
            </div>
            <h2 className="font-heading text-section-title font-bold text-white tracking-[-0.025em] leading-[1.15]">
              What we do, and do well.
            </h2>
          </div>
          <p className="font-body text-body-p text-slate-300 max-w-md leading-[1.7]">
            We reject cookie-cutter templates. Every line of code and UI component is precision-engineered to drive tangible business metrics.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Service 1: Web Architecture */}
          <div className="bg-[#070e28]/70 border border-white/10 hover:border-white/25 rounded-3xl p-8 backdrop-blur-xl shadow-lg transition-all duration-300 group md:col-span-2">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-300 mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block mb-1">Flagship Discipline</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Website Design &amp; Full-Stack Architecture</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              Lightning-fast, SEO-dominant digital flagships engineered on Next.js 14, Node.js, and modern distributed databases. Engineered to handle intense global spikes with sub-50ms responsiveness.
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-300">
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">Next.js 14</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">TypeScript</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">PostgreSQL</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">Tailwind CSS</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">Server Actions</span>
            </div>
          </div>

          {/* Service 2: Mobile Ecosystems */}
          <div className="bg-[#070e28]/70 border border-white/10 hover:border-white/25 rounded-3xl p-8 backdrop-blur-xl shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center text-emerald-300 mb-6 group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">Native &amp; Cross-Platform</span>
            <h3 className="text-2xl font-bold text-white mb-3">Mobile Applications</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Fluid 60fps mobile platforms built with Flutter and React Native. Offline-first architecture, push notifications, and biometric verification.
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-300">
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">Flutter</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">React Native</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">iOS / Android</span>
            </div>
          </div>

          {/* Service 3: Branding & UI/UX Design Systems */}
          <div className="bg-[#070e28]/70 border border-white/10 hover:border-white/25 rounded-3xl p-8 backdrop-blur-xl shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-400/25 flex items-center justify-center text-purple-300 mb-6 group-hover:scale-110 transition-transform">
              <Palette className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block mb-1">Visual Identity</span>
            <h3 className="text-2xl font-bold text-white mb-3">Branding &amp; Design Systems</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Comprehensive brand architecture, typography standards, and modular Figma component libraries focused on effortless conversion.
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-300">
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">Figma Tokens</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">Design Systems</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">Interactive UX</span>
            </div>
          </div>

          {/* Service 4: Distributed Cloud & DevOps */}
          <div className="bg-[#070e28]/70 border border-white/10 hover:border-white/25 rounded-3xl p-8 backdrop-blur-xl shadow-lg transition-all duration-300 group md:col-span-2">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/25 flex items-center justify-center text-sky-300 mb-6 group-hover:scale-110 transition-transform">
              <Cloud className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block mb-1">Enterprise Resilience</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Cloud Infrastructure &amp; DevOps Pipelines</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              Automated continuous integration, Docker container orchestration, and zero-downtime edge caching. We engineer backends that never fall under traffic.
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-300">
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">Docker</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">Cloudflare Workers</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">AWS / GCP</span>
              <span className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">CI/CD Pipelines</span>
            </div>
          </div>

        </div>

      </section>

      {/* =================================================================== */}
      {/* 4. SHOWCASE: "Websites That Make an Impression"                    */}
      {/*    (Exact match to Reference Video frame 50s & 56s)                */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10" id="showcase">
        
        {/* Header with Filter Tabs */}
        <div className="space-y-6 mb-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 uppercase tracking-widest mb-3">
                <span>Selected Works &amp; Architecture</span>
              </div>
              <h2 className="font-heading text-section-title font-bold text-white tracking-[-0.025em] leading-[1.15]">
                Websites That Make an Impression.
              </h2>
            </div>
            <p className="font-body text-body-p text-slate-300 max-w-md leading-[1.7]">
              A curated showcase of bespoke digital platforms engineered for enterprise clients worldwide.
            </p>
          </div>

          {/* Filter Pills (Matching Video frame 50s) */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Architecture' },
              { id: 'web', label: 'Web Design' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'cloud', label: 'Cloud & SaaS' },
              { id: 'fintech', label: 'Fintech' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveShowcaseFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeShowcaseFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                    : 'bg-white/[0.05] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Showcase Grid (Matching Video frame 50s & 56s) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredShowcase.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={`bg-[#070e28]/85 border ${project.borderColor} rounded-3xl p-6 flex flex-col justify-between shadow-xl backdrop-blur-xl group hover:border-white/40 transition-all duration-300`}
              >
                <div>
                  
                  {/* Browser Chrome Mockup Frame */}
                  <div className="bg-[#030612] border border-white/10 rounded-2xl p-3 mb-5 shadow-inner">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 truncate max-w-[150px]">
                        {project.title.toLowerCase().replace(/\s+/g, '')}.com
                      </span>
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        SECURE
                      </span>
                    </div>

                    <div className={`h-36 rounded-xl bg-gradient-to-br ${project.color} p-4 flex flex-col justify-end border border-white/5 relative overflow-hidden`}>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 bg-black/40 px-2 py-0.5 rounded backdrop-blur-md w-fit mb-1">
                        {project.categoryLabel}
                      </span>
                      <h4 className="text-white text-base font-bold drop-shadow-md">{project.title}</h4>
                      <p className="text-[11px] text-slate-200 line-clamp-1">{project.tagline}</p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="text-[11px] font-mono text-emerald-400 font-semibold">
                      {project.metrics}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                </div>

                {/* Bottom Tech Tags & Action Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2 mt-2">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-slate-950 bg-[#22c55e] hover:bg-[#16a34a] px-3 py-1.5 rounded-full transition-all active:scale-95 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </section>

      {/* =================================================================== */}
      {/* 5. PROCESS: "From Idea To Execution"                                */}
      {/*    (Exact match to Reference Video frame 39s)                      */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-b from-[#08102a]/95 via-[#060b1e]/90 to-[#030612]/95 border border-white/15 rounded-3xl p-8 sm:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl space-y-12">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 uppercase tracking-widest">
              <span>Our Process, Your Advantage</span>
            </div>
            
            <h2 className="font-heading text-section-title font-bold text-white tracking-[-0.025em] leading-[1.15]">
              From Idea To Execution.
            </h2>
            
            <p className="font-body text-body-p text-slate-300 leading-[1.7]">
              We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do.
            </p>
          </div>

          {/* Interactive Stepper Layout: Left List + Right Interactive Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 5 Interactive Steps (Matching Video frame 39s) */}
            <div className="lg:col-span-6 space-y-3">
              {processSteps.map((step, idx) => {
                const isActive = activeProcessStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveProcessStep(idx)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
                      isActive
                        ? 'bg-white/[0.08] border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]'
                        : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`text-sm font-mono font-bold px-2 py-0.5 rounded-lg border ${
                        isActive 
                          ? 'bg-blue-600 text-white border-blue-400' 
                          : 'bg-white/5 text-slate-400 border-white/10'
                      }`}>
                        {step.step}
                      </span>
                      
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-base font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                            {step.title}
                          </h4>
                          {isActive && (
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                              Active Phase
                            </span>
                          )}
                        </div>

                        <p className="text-xs font-mono text-slate-400">{step.subtitle}</p>

                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="pt-2 text-xs text-slate-300 leading-relaxed space-y-2"
                          >
                            <p>{step.description}</p>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {step.deliverables.map((item, dIdx) => (
                                <span key={dIdx} className="text-[10px] font-mono bg-blue-500/15 border border-blue-400/20 text-blue-200 px-2 py-0.5 rounded">
                                  ✓ {item}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Process Visual Display (Matching Video frame 39s) */}
            <div className="lg:col-span-6 bg-[#030614] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              
              {/* Soft Ambient Internal Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Dynamic Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  {processSteps[activeProcessStep].badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {processSteps[activeProcessStep].step} of 05
                </span>
              </div>

              {/* Central Architectural Blueprint Mockup */}
              <div className="bg-[#050a1e] border border-white/10 rounded-2xl p-6 space-y-4 my-auto">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <h4 className="text-sm font-bold text-white">
                    {processSteps[activeProcessStep].previewTitle}
                  </h4>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {processSteps[activeProcessStep].previewDetails}
                </p>

                {/* Simulated Diagram / Architecture Nodes */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="bg-white/[0.04] p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-[10px] font-mono text-blue-300 block">System Scope</span>
                    <span className="text-xs font-bold text-white">100% Defined</span>
                  </div>
                  <div className="bg-white/[0.04] p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-[10px] font-mono text-emerald-300 block">SLA Target</span>
                    <span className="text-xs font-bold text-white">&lt; 50ms Edge</span>
                  </div>
                  <div className="bg-white/[0.04] p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-[10px] font-mono text-purple-300 block">IP Handover</span>
                    <span className="text-xs font-bold text-white">Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Enterprise Quality Guarantee</span>
                <span className="font-mono text-emerald-400">Production Ready</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. COMPARISON: "TSS Soft vs Alternatives — Think One More Time!"    */}
      {/*    (Exact match to Reference Video frame 45s & brandyfy.in)        */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 uppercase tracking-widest">
            <span>Competitive Matrix</span>
          </div>
          
          <h2 className="font-heading text-section-title font-bold text-white tracking-[-0.025em] leading-[1.15]">
            TSS Soft vs Alternatives? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-400">
              Think One More Time!
            </span>
          </h2>
          
          <p className="font-body text-body-p text-slate-300 leading-[1.7]">
            Why leading founders and enterprise teams choose TSS Soft instead of dealing with hiring overhead, sluggish agencies, or unpredictable freelancers.
          </p>
        </div>

        {/* Matrix Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px] bg-[#070e28]/80 border border-white/15 rounded-3xl overflow-hidden backdrop-blur-2xl shadow-2xl">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-5 sm:p-6 text-xs font-mono uppercase tracking-wider text-slate-400">Features &amp; Guarantees</th>
                <th className="p-5 sm:p-6 text-sm font-black text-emerald-400 bg-emerald-500/10 border-x border-emerald-500/20">
                  ✦ TSS Soft (Us)
                </th>
                <th className="p-5 sm:p-6 text-xs font-mono uppercase tracking-wider text-slate-400">In-House Team</th>
                <th className="p-5 sm:p-6 text-xs font-mono uppercase tracking-wider text-slate-400">Traditional Agencies</th>
                <th className="p-5 sm:p-6 text-xs font-mono uppercase tracking-wider text-slate-400">Freelancers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
              {[
                {
                  metric: 'Speed to Production',
                  tss: '2 - 4 Weeks Launch',
                  inhouse: '3 - 6 Months Hiring',
                  agency: '3 - 5 Months',
                  freelancer: 'Unpredictable'
                },
                {
                  metric: '100% Custom Architecture',
                  tss: 'Yes (Zero Templates)',
                  inhouse: 'Yes (High Salary Cost)',
                  agency: 'Often Recycled Templates',
                  freelancer: 'Varies Widely'
                },
                {
                  metric: 'Direct Access to Principal Engineers',
                  tss: 'Yes (Direct & Dedicated)',
                  inhouse: 'Yes',
                  agency: 'No (Layered Account Reps)',
                  freelancer: 'Yes (Single Point Failure)'
                },
                {
                  metric: 'Total IP & Full Code Handover',
                  tss: '100% Clean Ownership',
                  inhouse: '100%',
                  agency: 'Often Proprietary Lock-in',
                  freelancer: 'Disorganized Handover'
                },
                {
                  metric: '99.98% High-Concurrency SLA',
                  tss: 'Guaranteed in Writing',
                  inhouse: 'Internal Responsibility',
                  agency: 'Costly Add-On Retainer',
                  freelancer: 'No SLA Protection'
                },
                {
                  metric: 'Pricing Model',
                  tss: 'Fixed & Transparent',
                  inhouse: '$120k+/yr per engineer + tax',
                  agency: 'High Hourly Markups',
                  freelancer: 'Hidden Scope Creep'
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 sm:p-6 font-semibold text-white">{row.metric}</td>
                  <td className="p-5 sm:p-6 font-bold text-emerald-300 bg-emerald-500/[0.06] border-x border-emerald-500/20 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{row.tss}</span>
                  </td>
                  <td className="p-5 sm:p-6 text-slate-300">{row.inhouse}</td>
                  <td className="p-5 sm:p-6 text-slate-400">{row.agency}</td>
                  <td className="p-5 sm:p-6 text-slate-400">{row.freelancer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>

      {/* =================================================================== */}
      {/* 7. CLIENT TESTIMONIALS: "Don't Take Our Word For It"                */}
      {/*    (Exact match to Reference Video frame 45s & brandyfy.in)        */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 uppercase tracking-widest">
            <span>Client Stories &amp; Proof</span>
          </div>
          
          <h2 className="font-heading text-section-title font-bold text-white tracking-[-0.025em] leading-[1.15]">
            Don’t Take Our Word For It. <br />
            Hear From Our Clients.
          </h2>
          
          <p className="font-body text-body-p text-slate-300 leading-[1.7]">
            From web platforms and mobile ecosystems to high-availability distributed systems, see what founders say about working with TSS Soft.
          </p>
        </div>

        {/* Testimonials Grid (Exact match to Video frame 45s) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Review 1 */}
          <div className="bg-[#070e28]/80 border border-white/10 hover:border-white/25 rounded-3xl p-8 backdrop-blur-xl shadow-lg flex flex-col justify-between transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                  • Web Architecture
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed italic">
                “TSS Soft completely transformed our online platform and corporate infrastructure. The new website looks ultra-premium, loads in under 40 milliseconds, and has made our brand instantly credible to international partners.”
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-400/30 flex items-center justify-center font-bold text-blue-300 text-xs">
                MR
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Mahfuzur Rahman</h4>
                <p className="text-[10px] text-slate-400">Managing Director, Apex Global</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-[#070e28]/80 border border-white/10 hover:border-white/25 rounded-3xl p-8 backdrop-blur-xl shadow-lg flex flex-col justify-between transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  • Mobile &amp; Cloud
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed italic">
                “What stood out was their extraordinary attention to detail. From the brand identity to the final digital presence, everything was consistent, clean, and delivered ahead of our strict deadline.”
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-emerald-600/20 border border-emerald-400/30 flex items-center justify-center font-bold text-emerald-300 text-xs">
                ER
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Elena Rossi</h4>
                <p className="text-[10px] text-slate-400">Head of Digital, Vero Italy</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-[#070e28]/80 border border-white/10 hover:border-white/25 rounded-3xl p-8 backdrop-blur-xl shadow-lg flex flex-col justify-between transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                  • Enterprise Scaling
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed italic">
                “TSS Soft isn’t just an agency; they act as our principal technology architects. Our transaction handling scaled tenfold with zero downtime. Easily the most competent engineering partner we’ve hired.”
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-400/30 flex items-center justify-center font-bold text-purple-300 text-xs">
                TB
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Tariq Bin Farash</h4>
                <p className="text-[10px] text-slate-400">Founder, Bin Farash Group (Dubai)</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* =================================================================== */}
      {/* 8. FAQ: "Questions? We've Got Answers"                              */}
      {/*    (Exact match to Reference Video & brandyfy.in section 9)        */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-8 max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 uppercase tracking-widest">
            <span>Clarity &amp; Transparency</span>
          </div>
          <h2 className="font-heading text-section-title font-bold text-white tracking-[-0.025em] leading-[1.15]">
            Questions? We’ve Got Answers.
          </h2>
          <p className="font-body text-body-p text-slate-300">
            Everything you need to know about partnering with TSS Soft.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#070e28]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* =================================================================== */}
      {/* 9. BOTTOM CONVERSION CTA: "Have a project in mind? Let's make it"  */}
      {/*    (Exact match to Reference Video frame 61s & brandyfy.in)        */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-16 bg-gradient-to-r from-blue-900/60 via-[#0a1847]/80 to-[#04091c]/95 border border-white/20 shadow-[0_30px_90px_rgba(37,99,235,0.35)] backdrop-blur-2xl text-center space-y-8">
          
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-500/20 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for New Projects</span>
            </span>

            <h2 className="font-heading text-section-title font-bold text-white tracking-[-0.025em] leading-[1.15]">
              Have a project in mind? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-400">
                Let’s make it happen.
              </span>
            </h2>

            <p className="font-body text-body-p text-slate-300 leading-[1.7]">
              Book a direct architectural strategy session. We’ll review your vision, recommend optimal frameworks, and provide a fixed-price delivery roadmap within 24 hours.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-heading font-semibold text-[15px] px-8 py-4 rounded-full shadow-[0_0_35px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)] transition-all duration-300 flex items-center gap-2 group active:scale-95 tracking-[-0.01em]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/portfolio"
              className="bg-white/10 hover:bg-white/15 text-white font-heading font-medium text-[15px] px-7 py-4 rounded-full border border-white/20 backdrop-blur-xl transition-all duration-200 flex items-center gap-2 active:scale-95 tracking-[-0.01em]"
            >
              <span>Explore Selected Works</span>
            </Link>
          </div>

          <div className="relative z-10 pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <span>• Kushtia • Global Delivery</span>
            <span>• 100% IP Handover</span>
            <span>• Direct Principal Engineer Access</span>
          </div>

        </div>
      </section>

    </div>
  );
}
