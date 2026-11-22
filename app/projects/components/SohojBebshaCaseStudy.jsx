'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Globe, 
  Package, 
  Truck, 
  Users, 
  BarChart3, 
  PhoneCall, 
  FileText, 
  Check, 
  Search, 
  SlidersHorizontal, 
  TrendingUp, 
  AlertCircle, 
  Clock, 
  Lock, 
  ExternalLink,
  Laptop,
  CheckCircle2,
  RefreshCw,
  Bell,
  ChevronDown,
  Activity,
  Boxes,
  Store,
  DollarSign,
  Share2
} from 'lucide-react';

export default function SohojBebshaCaseStudy({ project, relatedProjects }) {
  const [activeShowcaseTab, setActiveShowcaseTab] = useState('dashboard');

  const showcaseTabs = [
    { id: 'dashboard', label: 'Business Dashboard', icon: BarChart3 },
    { id: 'orders', label: 'Order Management', icon: Package },
    { id: 'inventory', label: 'Inventory & Stock', icon: Boxes },
    { id: 'store', label: 'Store & Website Sync', icon: Store },
    { id: 'courier', label: 'Courier Logistics', icon: Truck },
    { id: 'employees', label: 'Employee Roster', icon: Users },
    { id: 'marketing', label: 'Meta Pixel & CAPI', icon: Share2 },
    { id: 'aicalling', label: 'AI Voice Calling', icon: PhoneCall },
    { id: 'aireports', label: 'AI Business Reports', icon: FileText },
  ];

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 pb-28 relative overflow-hidden transition-colors duration-200">
      
      {/* Background Ambient Glow (Enterprise Electric Blue) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] rounded-full blur-[180px] pointer-events-none -z-10 opacity-20 dark:opacity-30"
        style={{ background: '#2563eb' }}
      />

      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <Link 
          href="/portfolio" 
          className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors bg-white/80 dark:bg-white/[0.05] border border-slate-200/90 dark:border-white/10 hover:border-blue-400 px-4 py-2 rounded-full backdrop-blur-md group shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* =================================================================== */}
      {/* 1. PROJECT HERO (SaaS Desktop Product Hero)                          */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 text-center">
        
        {/* Eyebrow & Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/25 text-xs font-mono font-semibold text-blue-700 dark:text-blue-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>BUSINESS MANAGEMENT WEB APPLICATION</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200/90 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-200 shadow-sm">
            <Laptop className="w-3.5 h-3.5 text-blue-600" />
            <span>Desktop Web Application (SaaS)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/25 text-xs font-mono text-emerald-700 dark:text-emerald-300 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Developed by TSS Soft</span>
          </div>
        </div>

        {/* Brand Logo & Name */}
        <div className="flex items-center justify-center gap-3.5 mb-5">
          <img 
            src="/projects/sohoj-bebsha-icon.png" 
            alt="Sohoj Bebsha Logo" 
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-contain border border-blue-100 dark:border-white/15 shadow-md bg-white p-1.5"
          />
          <div className="text-left">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sohoj Bebsha
            </h2>
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
              "Your Entire Business. One Smart Platform."
            </p>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="font-heading text-hero font-extrabold text-slate-900 dark:text-white tracking-[-0.035em] leading-[1.08] mb-6 max-w-4xl mx-auto">
          Run Your Business. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
            Control Everything.
          </span>
        </h1>

        {/* Hero Description */}
        <p className="font-body text-body-p text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-[1.7] mb-10">
          Manage your entire business from one centralized web application. From orders and inventory to courier operations, employee management, marketing tracking and AI-powered reporting — everything is connected in one smart platform.
        </p>

        {/* Quick Tech Architecture Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 mb-12">
          {['Next.js 14 Architecture', 'PostgreSQL Cloud Database', 'Multi-Carrier Logistics API', 'Meta Conversions API (CAPI)', 'AI Voice Verification', 'Role-Based Access Control'].map((spec, idx) => (
            <span 
              key={idx}
              className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 px-3.5 py-1.5 rounded-lg shadow-sm"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Large Desktop Browser Window Mockup (Main Visual Showcase) */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-2xl bg-slate-950 group text-left">
          {/* Top Browser Bar */}
          <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-mono text-slate-400 max-w-md w-full justify-center">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span className="text-slate-300 font-semibold">https://app.sohojbebsha.com</span>
              <span className="text-slate-500">/dashboard</span>
              <span className="ml-auto text-[10px] text-blue-400 font-semibold hidden sm:inline">TSS Cloud 256-bit</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">Desktop App Live</span>
            </div>
          </div>

          {/* Banner Graphic Showcase */}
          <div className="relative">
            <img 
              src="/projects/sohoj-bebsha-banner.jpg" 
              alt="Sohoj Bebsha Desktop Web Application" 
              className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-slate-950/90 backdrop-blur-md border border-white/15 px-4 py-2 rounded-2xl text-xs font-mono text-slate-200 flex items-center gap-2 shadow-xl">
              <Laptop className="w-4 h-4 text-blue-400" />
              <span className="font-semibold text-white">Centralized Desktop Web Platform</span>
              <span className="text-slate-400 hidden sm:inline">• Enterprise SaaS</span>
            </div>
          </div>
        </div>

        <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 text-center mt-3">
          *Illustrative Web Application Interface Mockup • Architecture Engineered by TSS Soft
        </p>

      </section>

      {/* =================================================================== */}
      {/* 2. BUSINESS CHALLENGES & 3. OUR SOLUTION                            */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Section 2: Business Challenges */}
          <div className="bg-white dark:bg-[#070e24]/90 border border-rose-200 dark:border-rose-500/20 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-4 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 px-3.5 py-1.5 rounded-full font-semibold">
                <span>Section 02 • The Operational Crisis</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Fragmented Systems Drain Business Growth
              </h3>
              <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7] mb-6">
                Modern retail and e-commerce companies in Bangladesh face critical operational chaos. When a business scales, managing orders and stock across disjointed tools creates severe friction:
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-600 flex items-center justify-center font-bold text-xs mt-0.5">✕</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Disconnected Inventory &amp; Overselling:</strong> Stock counts kept on manual spreadsheets lead to selling out-of-stock items and customer complaints.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-600 flex items-center justify-center font-bold text-xs mt-0.5">✕</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Manual Courier Booking Hell:</strong> Copy-pasting addresses into Steadfast, Pathao, or RedX one-by-one consumes hours and causes delivery failures.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-600 flex items-center justify-center font-bold text-xs mt-0.5">✕</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">High Return Rates &amp; Fake Orders:</strong> Unverified phone orders and delayed verification lead to expensive parcel returns and lost revenue.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-600 flex items-center justify-center font-bold text-xs mt-0.5">✕</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Missing Meta Pixel Tracking:</strong> iOS restrictions and ad blockers break browser-based pixel tracking, causing blind marketing spend.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Our Solution */}
          <div className="bg-white dark:bg-[#070e24]/90 border border-emerald-200 dark:border-emerald-500/20 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-3.5 py-1.5 rounded-full font-semibold">
                <span>Section 03 • The TSS Soft Engineering</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                One Centralized Web Application
              </h3>
              <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7] mb-6">
                TSS Soft engineered <strong>Sohoj Bebsha</strong> as an all-in-one desktop web platform. Instead of subscribing to 6 different software subscriptions, business owners and staff control their entire lifecycle from one browser window:
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Unified Order Hub:</strong> All website, social, and manual phone orders flow automatically into one centralized processing grid.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">1-Click Courier Waybills:</strong> Native API integrations with Steadfast, Pathao, and RedX for instant bulk consignment generation and live tracking.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Automated AI Calling System:</strong> Instant AI voice verification calls to confirm customer orders and delivery addresses before packing.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Server-Side Meta CAPI:</strong> Bulletproof server-to-server tracking with 9.4/10 Event Match Quality that bypasses ad blockers.
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. WEB APPLICATION OVERVIEW                                         */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-blue-50/80 via-white to-slate-50 dark:from-[#0b1739] dark:via-[#070e24] dark:to-[#040817] border border-blue-200 dark:border-blue-500/25 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-2">
              Section 04 • System Architecture
            </span>
            <h2 className="font-heading text-section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Engineered For Desktop High-Productivity
            </h2>
            <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7]">
              Sohoj Bebsha is intentionally crafted as a desktop-first web application. High-volume business operations demand dense information layouts, quick keyboard shortcuts, multi-tab workflows, and instantaneous responsiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 flex items-center justify-center mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white mb-2">Dual-Monitor Ergonomics</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Designed for large widescreen desktop monitors. Side-by-side order inspection, real-time live previewing, and zero unnecessary page reloading.
              </p>
            </div>

            <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white mb-2">Sub-100ms Live Sync</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Engineered with WebSocket event streams and Redis caching. When a customer places an order on your website, it appears in your desktop dashboard in under 120ms.
              </p>
            </div>

            <div className="bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-500/20 text-sky-600 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white mb-2">Enterprise RBAC Security</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Granular staff isolation. Delivery staff see delivery routes, salesmen see assigned customer leads, and sensitive revenue remains restricted to Master Admins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 5. BUSINESS DASHBOARD (Module Deep-Dive)                             */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-1">
                Section 05 • Core Module
              </span>
              <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">
                Business Dashboard
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Real-time executive cockpit displaying revenue velocity, order volumes, inventory alerts, and courier status at a single glance.
            </p>
          </div>

          {/* Desktop Browser Mockup: Dashboard */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 bg-white dark:bg-[#070e24] shadow-2xl">
            {/* Browser Top Chrome */}
            <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="bg-slate-950 px-4 py-1 rounded-full text-slate-300 font-mono text-[11px] flex items-center gap-1.5 border border-slate-800">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>app.sohojbebsha.com/dashboard</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Desktop Interface</span>
            </div>

            {/* Dashboard Content Container */}
            <div className="p-6 sm:p-8 space-y-6 bg-slate-50/50 dark:bg-[#060c20]/60">
              
              {/* Stat Cards Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-white/[0.04] p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-2">
                    <span>Total Orders</span>
                    <Package className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">1,248</div>
                  <div className="text-[11px] font-mono text-emerald-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+14.2% vs last month</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-white/[0.04] p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-2">
                    <span>Total Sales</span>
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">৳ 2,48,750</div>
                  <div className="text-[11px] font-mono text-emerald-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+22.8% monthly growth</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-white/[0.04] p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-2">
                    <span>Total Products</span>
                    <Boxes className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">854</div>
                  <div className="text-[11px] font-mono text-amber-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>12 SKUs low stock</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-white/[0.04] p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-2">
                    <span>Active Staff</span>
                    <Users className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">24</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-1">9 Sales • 15 Delivery</div>
                </div>
              </div>

              {/* Chart & Status Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Sales Velocity Chart */}
                <div className="lg:col-span-2 bg-white dark:bg-white/[0.04] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">Sales Performance Overview</h4>
                      <p className="text-xs text-slate-500">Continuous 30-day revenue acceleration</p>
                    </div>
                    <span className="text-xs font-mono bg-blue-50 dark:bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/20">
                      Live Streamed
                    </span>
                  </div>

                  {/* Illustrative Vector Chart */}
                  <div className="h-44 w-full flex items-end gap-2 pt-6">
                    {[38, 45, 52, 48, 60, 65, 58, 72, 80, 75, 88, 92, 85, 96, 110, 105, 118, 125, 120, 135].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                        <div 
                          className="w-full bg-gradient-to-t from-blue-600 to-sky-400 rounded-t-sm group-hover:brightness-110 transition-all"
                          style={{ height: `${(val / 140) * 100}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-white/5">
                    <span>Day 01</span>
                    <span>Day 10</span>
                    <span>Day 20</span>
                    <span>Day 30 (Today)</span>
                  </div>
                </div>

                {/* Order Status Breakdown */}
                <div className="bg-white dark:bg-white/[0.04] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-1">Order Pipeline Status</h4>
                    <p className="text-xs text-slate-500 mb-4">Breakdown of 1,248 active orders</p>
                    
                    <div className="space-y-3 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          <span>Delivered</span>
                        </span>
                        <span className="font-mono font-bold text-slate-900 dark:text-white">978 (78.4%)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                          <span>In Processing</span>
                        </span>
                        <span className="font-mono font-bold text-slate-900 dark:text-white">184 (14.7%)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <span>Pending Verification</span>
                        </span>
                        <span className="font-mono font-bold text-slate-900 dark:text-white">42 (3.4%)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <span>Returned / Cancelled</span>
                        </span>
                        <span className="font-mono font-bold text-slate-900 dark:text-white">44 (3.5%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-xl border border-blue-200 dark:border-blue-500/20 text-[11px] text-blue-700 dark:text-blue-300">
                    <strong>AI Note:</strong> Return rate dropped from 11.2% to 3.5% after enabling Sohoj Bebsha AI Voice Calling.
                  </div>
                </div>
              </div>

            </div>

            {/* Mockup Footer Caption */}
            <div className="bg-slate-100 dark:bg-slate-900/80 px-6 py-2.5 border-t border-slate-200 dark:border-white/10 text-center">
              <span className="text-[11px] font-mono text-slate-500">
                *Illustrative UI Mockup • Dashboard Aggregates Sales, Orders, Stock, and Real-Time Staff Metrics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 6. ORDER MANAGEMENT & 7. INVENTORY MANAGEMENT (Modules 2 & 3)       */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        
        {/* Module 6: Order Management */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-1">
                Section 06 • Core Module
              </span>
              <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">
                Order Management
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Centralized order processing grid. Filter by status, assign couriers in bulk, inspect customer records, and print standard shipping invoices.
            </p>
          </div>

          {/* Desktop Table Mockup */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 bg-white dark:bg-[#070e24] shadow-xl">
            {/* Table Header Filter Bar */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1.5 overflow-x-auto">
                <span className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium">All (1,248)</span>
                <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">Pending (42)</span>
                <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">Processing (184)</span>
                <span className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">Delivered (978)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-medium flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Assign to Courier</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-200 font-medium">
                  Print Invoices
                </span>
              </div>
            </div>

            {/* Order Table Rows */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-white/[0.03] text-slate-500 font-mono text-[11px] uppercase border-b border-slate-200 dark:border-white/10">
                  <tr>
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Source</th>
                    <th className="p-4">Deliverable</th>
                    <th className="p-4">Total</th>
                    <th className="p-4">Courier</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5 font-sans">
                  {[
                    { id: '#SB-9104', customer: 'Tanvir Hasan', city: 'Dhaka (Uttara)', source: 'Online Store', item: '2x Wireless ANC Headphones', total: '৳ 4,850', courier: 'Steadfast • In Hub', status: 'Processing', color: 'blue' },
                    { id: '#SB-9103', customer: 'Nusrat Jahan', city: 'Chattogram', source: 'Facebook Shop', item: '1x Smart Leather Messenger Bag', total: '৳ 2,400', courier: 'Pathao • Delivered', status: 'Delivered', color: 'emerald' },
                    { id: '#SB-9102', customer: 'Shafiqul Islam', city: 'Kushtia Sadar', source: 'Direct Website', item: '1x Mechanical Gaming Keyboard', total: '৳ 3,650', courier: 'RedX • Out for Delivery', status: 'In Transit', color: 'sky' },
                    { id: '#SB-9101', customer: 'Mahmudur Rahman', city: 'Sylhet', source: 'WhatsApp / Call', item: '3x Premium Cotton Polo', total: '৳ 2,850', courier: 'Steadfast • Verified', status: 'Pending Courier', color: 'amber' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-mono font-bold text-blue-600 dark:text-blue-400">{row.id}</td>
                      <td className="p-4">
                        <div className="font-semibold text-slate-900 dark:text-white">{row.customer}</div>
                        <div className="text-[10px] text-slate-500">{row.city}</div>
                      </td>
                      <td className="p-4 text-slate-600 dark:text-slate-400">{row.source}</td>
                      <td className="p-4 text-slate-700 dark:text-slate-300 font-medium">{row.item}</td>
                      <td className="p-4 font-mono font-bold text-slate-900 dark:text-white">{row.total}</td>
                      <td className="p-4 font-mono text-[11px] text-slate-600 dark:text-slate-300">{row.courier}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold ${
                          row.color === 'emerald' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300' :
                          row.color === 'blue' ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300' :
                          row.color === 'sky' ? 'bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300' :
                          'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Module 7: Inventory Management */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-1">
                Section 07 • Core Module
              </span>
              <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">
                Inventory &amp; Stock Monitoring
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Multi-variant product catalog, real-time stock deduction on checkout, automated low-stock warnings, and warehouse health monitoring.
            </p>
          </div>

          {/* Desktop Inventory Mockup */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 bg-white dark:bg-[#070e24] shadow-xl p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-white/[0.04] rounded-2xl border border-slate-200 dark:border-white/10">
                <span className="text-xs text-slate-500 font-medium">Total Inventory Value</span>
                <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">৳ 14,82,500</div>
                <span className="text-[11px] font-mono text-emerald-600">854 active SKUs</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.04] rounded-2xl border border-slate-200 dark:border-white/10">
                <span className="text-xs text-slate-500 font-medium">Low Stock Alerts</span>
                <div className="text-2xl font-bold font-mono text-amber-600 mt-1">12 Products</div>
                <span className="text-[11px] font-mono text-slate-500">&lt; 10 units remaining</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.04] rounded-2xl border border-slate-200 dark:border-white/10">
                <span className="text-xs text-slate-500 font-medium">Out of Stock Protection</span>
                <div className="text-2xl font-bold font-mono text-blue-600 mt-1">Enabled ✦</div>
                <span className="text-[11px] font-mono text-slate-500">Auto-lock on connected website</span>
              </div>
            </div>

            {/* Inventory Items Sample List */}
            <div className="space-y-3">
              {[
                { name: 'Active Noise Cancelling Wireless Headphones', sku: 'SKU-AUD-891', stock: 142, max: 200, status: 'Healthy', price: '৳ 2,425', cost: '৳ 1,650' },
                { name: 'Full-Grain Genuine Leather Laptop Bag', sku: 'SKU-BAG-204', stock: 8, max: 50, status: 'Low Stock', price: '৳ 2,400', cost: '৳ 1,450' },
                { name: 'Wireless Bluetooth Ergonomic Mouse', sku: 'SKU-ACC-091', stock: 86, max: 150, status: 'Healthy', price: '৳ 1,250', cost: '৳ 780' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</div>
                    <div className="font-mono text-[11px] text-slate-500">SKU: {item.sku} • Cost: {item.cost} • Retail: {item.price}</div>
                  </div>
                  <div className="flex items-center gap-4 sm:w-64">
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between font-mono text-[11px]">
                        <span>Stock: {item.stock}</span>
                        <span className={item.stock < 10 ? 'text-amber-500 font-bold' : 'text-emerald-500'}>{item.status}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${item.stock < 10 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                          style={{ width: `${(item.stock / item.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* =================================================================== */}
      {/* 8. STORE & WEBSITE INTEGRATION & 9. COURIER MANAGEMENT             */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        
        {/* Module 8: Store & Website Integration */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-1">
                Section 08 • Core Module
              </span>
              <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">
                Store &amp; Website Integration
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Seamless 2-way synchronization with Next.js, WooCommerce, and custom web stores. Orders sync instantly into Sohoj Bebsha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#070e24] p-6 rounded-3xl border border-slate-200 dark:border-white/15 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-blue-600 font-bold">Channel 01</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono">Live Sync</span>
              </div>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">Next.js Headless Store</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Direct Webhook &amp; GraphQL integration. High-speed checkout orders populate within 24ms.
              </p>
            </div>

            <div className="bg-white dark:bg-[#070e24] p-6 rounded-3xl border border-slate-200 dark:border-white/15 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-indigo-600 font-bold">Channel 02</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono">Connected</span>
              </div>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">WooCommerce &amp; WordPress</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Bi-directional REST API connector synchronizing stock counts and pushing updated order tracking back to the user.
              </p>
            </div>

            <div className="bg-white dark:bg-[#070e24] p-6 rounded-3xl border border-slate-200 dark:border-white/15 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-sky-600 font-bold">Channel 03</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-mono">Catalog Synced</span>
              </div>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">Facebook &amp; Social Shops</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Automated Meta product catalog XML feed generation ensuring social store pricing matches warehouse reality.
              </p>
            </div>
          </div>
        </div>

        {/* Module 9: Courier Management */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-1">
                Section 09 • Core Module
              </span>
              <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">
                Courier Management &amp; COD Reconciliation
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Direct API bridge for Steadfast Courier, Pathao Courier, and RedX. 1-click bulk consignment creation, PDF waybills, and cash settlement.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 bg-white dark:bg-[#070e24] shadow-xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 font-mono text-xs font-semibold">
                  Steadfast Courier API
                </span>
                <span className="px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-600 font-mono text-xs font-semibold">
                  Pathao Express API
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-600 font-mono text-xs font-semibold">
                  RedX Logistics
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Bulk Waybill Generation Enabled</span>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200/80 dark:border-white/10">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Ready to Dispatch</span>
                <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">68 parcels</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200/80 dark:border-white/10">
                <span className="text-[11px] font-mono text-slate-500 uppercase">In Hub Transit</span>
                <div className="text-2xl font-bold font-mono text-blue-600 mt-1">210 parcels</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200/80 dark:border-white/10">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Delivered &amp; Paid</span>
                <div className="text-2xl font-bold font-mono text-emerald-600 mt-1">978 parcels</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200/80 dark:border-white/10">
                <span className="text-[11px] font-mono text-slate-500 uppercase">COD Reconciled</span>
                <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">৳ 2,14,500</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =================================================================== */}
      {/* 10. EMPLOYEE MANAGEMENT & 11. META PIXEL INTEGRATION                */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        
        {/* Module 10: Employee Management */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-1">
                Section 10 • Core Module
              </span>
              <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">
                Employee Management &amp; Role Access
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Track salesmen closing rates, delivery agent cash handovers, and assign role-based permissions with locked security barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#070e24] p-6 rounded-3xl border border-slate-200 dark:border-white/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold">
                  SR
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">Salesmen &amp; Tele-agents</h4>
                  <p className="text-xs text-slate-500">Call quotas, lead conversion tracking, and commission calculations</p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl space-y-2 text-xs">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Assigned Inbound Orders:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">42 orders/day</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Average Closing Success Rate:</span>
                  <span className="font-mono font-bold text-emerald-600">88.4%</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Permission Level:</span>
                  <span className="font-mono text-blue-600">Selective: Customer Calls Only</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#070e24] p-6 rounded-3xl border border-slate-200 dark:border-white/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold">
                  DP
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">In-House Delivery Riders</h4>
                  <p className="text-xs text-slate-500">Assigned zones, pending cash handovers, and route status</p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl space-y-2 text-xs">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Daily Dispatch Route:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">Kushtia Sadar &amp; Mirpur</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Cash on Delivery to Reconcile:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">৳ 24,800 pending</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Permission Level:</span>
                  <span className="font-mono text-emerald-600">Selective: Delivery Run Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 11: Marketing & Meta Pixel */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-1">
                Section 11 • Core Module
              </span>
              <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">
                Meta Pixel &amp; Server-Side CAPI Analytics
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              High-precision Conversions API (CAPI) integration. Ensures 100% of purchases and add-to-carts are attributed even on iOS and ad-blockers.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 bg-white dark:bg-[#070e24] shadow-xl p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-blue-50/50 dark:bg-blue-500/10 rounded-2xl border border-blue-200 dark:border-blue-500/20">
                <span className="text-xs font-mono uppercase text-blue-700 dark:text-blue-300 font-bold">Event Match Quality</span>
                <div className="text-3xl font-extrabold font-mono text-blue-600 dark:text-blue-400 mt-1">9.4 / 10</div>
                <span className="text-[11px] text-slate-500">Highest Facebook attribution rating</span>
              </div>
              <div className="p-5 bg-emerald-50/50 dark:bg-emerald-500/10 rounded-2xl border border-emerald-200 dark:border-emerald-500/20">
                <span className="text-xs font-mono uppercase text-emerald-700 dark:text-emerald-300 font-bold">Server CAPI Deduplication</span>
                <div className="text-3xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 mt-1">100% Clean</div>
                <span className="text-[11px] text-slate-500">Zero double-counted purchases</span>
              </div>
              <div className="p-5 bg-purple-50/50 dark:bg-purple-500/10 rounded-2xl border border-purple-200 dark:border-purple-500/20">
                <span className="text-xs font-mono uppercase text-purple-700 dark:text-purple-300 font-bold">Tracked Events</span>
                <div className="text-3xl font-extrabold font-mono text-purple-600 dark:text-purple-400 mt-1">5 Core Events</div>
                <span className="text-[11px] text-slate-500">PageView, Content, Cart, Checkout, Purchase</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =================================================================== */}
      {/* 12. AI CALLING & 13. AI REPORTS                                     */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        
        {/* Module 12: AI Calling */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-1">
                Section 12 • Intelligent Automation
              </span>
              <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">
                AI Calling System &amp; Voice Verification
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Automated outbound voice workflow in natural Bengali/English. Instantly verifies customer intent, delivery address, and eliminates fake COD orders.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 bg-white dark:bg-[#070e24] shadow-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-white/10">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 flex items-center justify-center">
                <PhoneCall className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">
                  Automated Customer Verification Flow
                </h4>
                <p className="text-xs text-slate-500 font-mono">Triggered 60 seconds after website order placement</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 space-y-1.5">
                <span className="font-mono text-[10px] text-blue-600 font-bold">Step 01</span>
                <div className="font-bold text-slate-900 dark:text-white">Order Ingestion</div>
                <p className="text-slate-500 text-[11px]">Customer submits checkout on online store</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 space-y-1.5">
                <span className="font-mono text-[10px] text-indigo-600 font-bold">Step 02</span>
                <div className="font-bold text-slate-900 dark:text-white">AI Voice Outbound</div>
                <p className="text-slate-500 text-[11px]">AI initiates conversational call in natural tone</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 space-y-1.5">
                <span className="font-mono text-[10px] text-purple-600 font-bold">Step 03</span>
                <div className="font-bold text-slate-900 dark:text-white">Intent Validation</div>
                <p className="text-slate-500 text-[11px]">Confirms customer presence and delivery address</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 space-y-1.5">
                <span className="font-mono text-[10px] text-emerald-600 font-bold">Step 04</span>
                <div className="font-bold text-slate-900 dark:text-white">Auto-Update Status</div>
                <p className="text-slate-500 text-[11px]">Flagged as "Confirmed" and ready for packaging</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50/60 dark:bg-blue-500/10 rounded-2xl border border-blue-200 dark:border-blue-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-slate-700 dark:text-slate-200 font-mono">
                  Sample Log: "Order #SB-9104 confirmed via AI Voice at 14:32:08 — Call duration: 38s"
                </span>
              </div>
              <span className="font-mono text-emerald-600 font-bold">Return Risk Reduced by 74%</span>
            </div>
          </div>
        </div>

        {/* Module 13: AI Reports */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-1">
                Section 13 • Intelligent Automation
              </span>
              <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">
                AI Business Reports &amp; Automated Insights
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              AI-generated executive briefings. Analyzes daily profit margins, courier return anomalies, and inventory replenishment forecasting.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 bg-white dark:bg-[#070e24] shadow-xl p-6 sm:p-8 space-y-6">
            <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl border border-blue-200 dark:border-blue-500/25 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-blue-300 font-bold uppercase">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Executive Intelligence Briefing</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic">
                “This week’s total revenue surged by 22.8% to ৳ 2,48,750, driven primarily by high conversion in the Audio category. Recommendation: Restock 50 units of Wireless ANC Headphones before Friday evening to avoid stock-out losses.”
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10">
                <div className="text-slate-500 font-medium">Gross Profit Margin</div>
                <div className="text-xl font-bold font-mono text-emerald-600 mt-1">38.4%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">After packaging &amp; courier fees</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10">
                <div className="text-slate-500 font-medium">Top Courier Efficiency</div>
                <div className="text-xl font-bold font-mono text-blue-600 mt-1">Steadfast (96.2%)</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Fastest regional dispatch in Khulna</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10">
                <div className="text-slate-500 font-medium">Customer Repeat Rate</div>
                <div className="text-xl font-bold font-mono text-purple-600 mt-1">26.8%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Tracked via customer phone records</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =================================================================== */}
      {/* 14. INTERFACE SHOWCASE (Interactive Desktop Viewer)                 */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block">
              Section 14 • Visual Showcase
            </span>
            <h2 className="font-heading text-section-title font-extrabold text-slate-900 dark:text-white tracking-tight">
              Explore Every Module of Sohoj Bebsha
            </h2>
            <p className="font-body text-body-p text-slate-600 dark:text-slate-300">
              Click through the tabs below to inspect how each operational module functions within the same cohesive enterprise desktop web application.
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {showcaseTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeShowcaseTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveShowcaseTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-heading font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105' 
                      : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-400'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dedicated Active Module Preview Window */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 bg-white dark:bg-[#070e24] shadow-2xl">
            {/* Browser Top Chrome */}
            <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="bg-slate-950 px-4 py-1.5 rounded-full text-slate-300 font-mono text-xs flex items-center gap-2 border border-slate-800 max-w-sm w-full justify-center">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white font-semibold">https://app.sohojbebsha.com</span>
                <span className="text-blue-400">/{activeShowcaseTab}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">Desktop Application</span>
            </div>

            {/* Active Content Showcase */}
            <div className="p-8 sm:p-12 min-h-[380px] flex flex-col justify-center">
              {activeShowcaseTab === 'dashboard' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Business Dashboard Overview</h3>
                      <p className="text-xs text-slate-500 font-mono">Consolidated KPIs: Orders, Sales, Inventory, and Active Team</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    The Business Dashboard serves as the command center for enterprise leadership. It aggregates daily cash velocity, order status pipelines, low stock warnings, and real-time courier statuses across all connected digital touchpoints in sub-second latency.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 font-mono text-center">
                      <div className="text-xs text-slate-500">Orders Today</div>
                      <div className="text-2xl font-bold text-blue-600 mt-1">1,248</div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 font-mono text-center">
                      <div className="text-xs text-slate-500">Revenue Month</div>
                      <div className="text-2xl font-bold text-emerald-600 mt-1">৳ 2,48,750</div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 font-mono text-center">
                      <div className="text-xs text-slate-500">Products Active</div>
                      <div className="text-2xl font-bold text-purple-600 mt-1">854</div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 font-mono text-center">
                      <div className="text-xs text-slate-500">Staff Shift</div>
                      <div className="text-2xl font-bold text-sky-600 mt-1">24</div>
                    </div>
                  </div>
                </div>
              )}

              {activeShowcaseTab === 'orders' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Package className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Centralized Order Processing</h3>
                      <p className="text-xs text-slate-500 font-mono">Status Filters, Bulk Courier Dispatch, and Waybill Export</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Eliminates fragmented orders arriving from websites, Facebook pages, WhatsApp, and phone calls. Every order is unified into a responsive desktop data table with batch printing, automatic courier assignment, and customer history inspection.
                  </p>
                  <div className="p-4 bg-blue-50/60 dark:bg-blue-500/10 rounded-2xl border border-blue-200 dark:border-blue-500/20 text-xs font-mono text-blue-700 dark:text-blue-300">
                    ✦ Features: Centralized Orders • Order Processing • Live Order Status • Customer Order Records
                  </div>
                </div>
              )}

              {activeShowcaseTab === 'inventory' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Boxes className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Multi-Warehouse Inventory Tracking</h3>
                      <p className="text-xs text-slate-500 font-mono">SKU Management, Automated Low-Stock Alerting, and Stock Sync</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Maintains strict inventory health. Automatically reduces stock upon order confirmation and pushes live availability to connected web stores to prevent embarrassing overselling.
                  </p>
                  <div className="p-4 bg-emerald-50/60 dark:bg-emerald-500/10 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-300">
                    ✦ Features: Product Management • Real-Time Stock Tracking • Inventory Overview • Automated Low-Stock Triggers
                  </div>
                </div>
              )}

              {activeShowcaseTab === 'store' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Store className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Connected Store &amp; Website Management</h3>
                      <p className="text-xs text-slate-500 font-mono">Bi-Directional High-Speed Webhook Connectors</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Connect multiple digital storefronts (Next.js, WooCommerce, Shopify, or custom APIs) into a single master inventory and order dispatch brain.
                  </p>
                  <div className="p-4 bg-sky-50/60 dark:bg-sky-500/10 rounded-2xl border border-sky-200 dark:border-sky-500/20 text-xs font-mono text-sky-700 dark:text-sky-300">
                    ✦ Features: Website Connection • Online Store Connection • Connected Store Management • Website Order Synchronization
                  </div>
                </div>
              )}

              {activeShowcaseTab === 'courier' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Truck className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Integrated Courier Operations</h3>
                      <p className="text-xs text-slate-500 font-mono">Direct API Handshake: Steadfast, Pathao, RedX, and Paperfly</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Generate hundreds of delivery waybills with one click. Real-time webhook callbacks pull courier parcel status directly into your order table without logging into external websites.
                  </p>
                  <div className="p-4 bg-amber-50/60 dark:bg-amber-500/10 rounded-2xl border border-amber-200 dark:border-amber-500/20 text-xs font-mono text-amber-700 dark:text-amber-300">
                    ✦ Features: Courier Integration • Shipment Processing • Delivery Tracking • Real-Time COD Settlement
                  </div>
                </div>
              )}

              {activeShowcaseTab === 'employees' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Employee Roster &amp; Access Controls</h3>
                      <p className="text-xs text-slate-500 font-mono">Salesmen Metrics, Delivery Cash Tracking, and Selective RBAC</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Empower your workforce with specialized tools while preserving company secrets. Each employee receives a custom locked interface showing only the data necessary to execute their daily tasks.
                  </p>
                  <div className="p-4 bg-indigo-50/60 dark:bg-indigo-500/10 rounded-2xl border border-indigo-200 dark:border-indigo-500/20 text-xs font-mono text-indigo-700 dark:text-indigo-300">
                    ✦ Features: Salesman Management • Delivery Man Management • Employee Records • Activity &amp; Cash Monitoring
                  </div>
                </div>
              )}

              {activeShowcaseTab === 'marketing' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Share2 className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Meta Pixel &amp; Server-Side CAPI</h3>
                      <p className="text-xs text-slate-500 font-mono">9.4/10 Event Match Quality, iOS 14+ Resilience, and Ad ROAS</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Sends conversion data straight from your server to Meta Ads API. Eliminates signal loss caused by browser ad-blockers and privacy filters, supercharging advertising return on investment.
                  </p>
                  <div className="p-4 bg-purple-50/60 dark:bg-purple-500/10 rounded-2xl border border-purple-200 dark:border-purple-500/20 text-xs font-mono text-purple-700 dark:text-purple-300">
                    ✦ Features: Meta Pixel Integration • Conversion Tracking • Marketing Analytics • Server-to-Server Event Monitoring
                  </div>
                </div>
              )}

              {activeShowcaseTab === 'aicalling' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">AI Calling &amp; Voice Verification</h3>
                      <p className="text-xs text-slate-500 font-mono">Natural Language Bengali/English Voice Call Bot</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Immediately calls customers to verify delivery address and confirm COD purchase intent. Reduces expensive delivery parcel returns by over 70% without burning staff time.
                  </p>
                  <div className="p-4 bg-emerald-50/60 dark:bg-emerald-500/10 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-300">
                    ✦ Features: AI Calling System • Automated Calling Workflow • Customer Communication • Speech-to-Intent Verification
                  </div>
                </div>
              )}

              {activeShowcaseTab === 'aireports' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">AI Business Reports &amp; Forecasting</h3>
                      <p className="text-xs text-slate-500 font-mono">Predictive Restocking, Profit Margin Auditing, and Executive Briefs</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Transforms raw rows of database records into actionable business strategies. Generates weekly executive summaries, flags underperforming delivery zones, and forecasts inventory depletion.
                  </p>
                  <div className="p-4 bg-blue-50/60 dark:bg-blue-500/10 rounded-2xl border border-blue-200 dark:border-blue-500/20 text-xs font-mono text-blue-700 dark:text-blue-300">
                    ✦ Features: AI-Generated Business Reports • Automated Reporting • Sales Analysis • Actionable Growth Insights
                  </div>
                </div>
              )}
            </div>

            <div className="bg-slate-100 dark:bg-slate-900 px-6 py-3 border-t border-slate-200 dark:border-white/10 text-center">
              <span className="text-[11px] font-mono text-slate-500">
                *Illustrative UI Showcase • All Modules Form One Integrated Desktop SaaS Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 15. DEVELOPMENT APPROACH                                            */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white dark:bg-[#070e24] border border-slate-200 dark:border-white/15 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-2">
              Section 15 • Engineering Standards
            </span>
            <h2 className="font-heading text-section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              The TSS Soft Development Methodology
            </h2>
            <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7]">
              Building a high-load business management platform requires rigorous enterprise discipline. We engineered Sohoj Bebsha from the ground up using modern cloud architecture:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono text-blue-600 font-bold">01 / Frontend</span>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white">Next.js 14 App Router</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                React Server Components with dense desktop-first CSS grid layouts for zero layout shifts and instant navigation.
              </p>
            </div>

            <div className="p-5 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono text-indigo-600 font-bold">02 / Persistence</span>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white">PostgreSQL ACID Engine</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Transactional row-locking preventing concurrent overselling when high-velocity flash sales occur.
              </p>
            </div>

            <div className="p-5 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono text-purple-600 font-bold">03 / Streaming</span>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white">WebSocket &amp; Redis Bus</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Asynchronous event queues ensuring third-party courier and webhook delays never block staff dashboard responsiveness.
              </p>
            </div>

            <div className="p-5 bg-slate-50 dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono text-emerald-600 font-bold">04 / Security</span>
              <h4 className="font-heading font-bold text-slate-900 dark:text-white">Encrypted Multi-Tenancy</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Strict database isolation, encrypted API keys, and session-gated tokens safeguarding sensitive business accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 16. PROJECT OBJECTIVE                                               */}
      {/* =================================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <div className="bg-white dark:bg-[#070e24] border border-blue-200 dark:border-blue-500/25 rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
          <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest font-bold">
            Section 16 • Core Mission &amp; Impact
          </span>
          <p className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white italic leading-relaxed">
            “Empowering modern businesses with an all-in-one web platform that automates operations, unites sales channels, and replaces dozens of disconnected tools.”
          </p>
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>✦ Engineered, Architected &amp; Maintained by TSS Soft</span>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* RELATED PROJECTS                                                    */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-200 dark:border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest font-bold">
              More Case Studies
            </span>
            <h3 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-[-0.025em]">
              Explore Other Flagship Work
            </h3>
          </div>
          <Link 
            href="/portfolio" 
            className="text-xs font-heading font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 group"
          >
            <span>View All Projects in Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((rel) => (
            <Link 
              key={rel.id} 
              href={`/projects/${rel.slug}`}
              className="bg-white dark:bg-[#070e28]/70 border border-slate-200/90 dark:border-white/10 hover:border-blue-500 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 group flex flex-col shadow-sm hover:shadow-xl"
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-950">
                <img 
                  src={rel.banner} 
                  alt={rel.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {rel.name}
                  </h4>
                  <p className="font-body text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {rel.tagline}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-heading font-semibold">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
