'use client';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Code2, Cloud, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="w-full relative z-10 px-4 sm:px-8 max-w-7xl mx-auto pb-24">
      {/* Hero */}
      <section className="pt-8 pb-16 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" /> High-Performance Engineering
        </div>
        <div className="max-w-4xl mx-auto z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight leading-tight font-display-xl">
            World-Class Engineering.<br/>
            <span className="text-slate-400 font-normal">Tailored Solutions.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            From cross-platform mobile apps to scalable cloud platforms, we engineer high-impact digital systems that drive long-term value.
          </p>
        </div>
      </section>

      {/* Service 1: Mobile */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 font-mono text-xs text-blue-400 uppercase tracking-widest">
              ANDROID &amp; IOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Cross-Platform Mobile Applications
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              We engineer robust, high-performance mobile applications using frameworks like Flutter and React Native, alongside native Swift and Kotlin. Our approach ensures smooth 60fps animations, intuitive gesture handling, and offline-first data synchronization.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Immersive UI/UX Design &amp; Micro-Interactions</span>
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Robust API &amp; Realtime WebSocket Integration</span>
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>End-to-End App Store &amp; Play Store Deployment</span>
              </li>
            </ul>
          </div>
          <div className="relative w-full h-[400px] md:h-[450px] rounded-3xl overflow-hidden backdrop-blur-md border border-blue-500/30 bg-[#0a0f24] p-4 flex items-center justify-center group shadow-[0_0_30px_rgba(37,99,235,0.2)]">
            <img className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" alt="Mobile App Development" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsfS4TKGC3KNoTQXsDTbSkJ1dbWglPwikqDwv-wobRYt_jhvcrXBUma-fvEfSoMLpYdAXVe5B3iHLPkBYHBaOeiB9SiX7AuTvIpAeB_u7NfGVkNMGFoqD-Zskrl-4Qzlu5liI33ga_I0Q4ETd0nyo0RukjhkFMEWqDcDL1FwdOaVXx861diCSCPJMgBW1FBUiy5inb7xLH_xW8qbtF8ApxTE4uDLS-7E6VMdBOOVmAifphI65xqHpus_CHIC6dqYLzqfe1Zwehlab9"/>
          </div>
        </motion.div>
      </section>

      {/* Service 2: Web */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative w-full h-[400px] md:h-[450px] rounded-3xl overflow-hidden backdrop-blur-md border border-blue-500/30 bg-[#0a0f24] p-4 flex items-center justify-center group shadow-[0_0_30px_rgba(37,99,235,0.2)]">
            <img className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" alt="Web Application Development" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4ZFZ7ZMun1XzMcdT5xtTTmXQPiIKv2pGOAz7__FMnKeHCQJe2EpRsjOxkmmAaCz-YXrDRVfirBg1MJIYpd0STIdgGFhaxjqAhdWh804gj2tRnMZIpq-GV4akGKc1zwl5mOi2Di8PWSZafZKHANs3B17N_k4hdZIEG2vdUL7fNyKC94Ax8Ajjlc-89ONSyLWBEcluhx5v4yXPAV7lFSIEL9dXy8HcwU3jXctZHb1mDJnsvYMmrCCzH9T9VwhFnX0u7lBRsrm2YbGqP"/>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 font-mono text-xs text-blue-400 uppercase tracking-widest">
              MODERN WEB
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Scalable Web Platforms
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              Leveraging modern architectures like Next.js, React, Node.js, and TypeScript, we architect high-performance, SEO-optimized web applications designed for infinite scale.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-5 bg-[#0b1026] rounded-2xl border border-blue-500/20">
                <span className="font-mono text-xl text-blue-400 font-bold block mb-1">99.9%</span>
                <h4 className="font-bold text-white text-sm">High Performance SLA</h4>
              </div>
              <div className="p-5 bg-[#0b1026] rounded-2xl border border-blue-500/20">
                <span className="font-mono text-xl text-blue-400 font-bold block mb-1">Zero Trust</span>
                <h4 className="font-bold text-white text-sm">Enterprise Security</h4>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Service 3: Enterprise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 font-mono text-xs text-blue-400 uppercase tracking-widest">
              CUSTOM SYSTEMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Bespoke Software &amp; SaaS
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              We design and develop bespoke enterprise solutions, sophisticated SaaS products, and robust cloud architectures tailored to your operational requirements.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors group mt-2">
              <span>Start an enterprise consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative w-full h-[400px] md:h-[450px] rounded-3xl overflow-hidden backdrop-blur-md border border-blue-500/30 bg-[#0a0f24] p-4 flex items-center justify-center group shadow-[0_0_30px_rgba(37,99,235,0.2)]">
            <img className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" alt="Custom Software Solutions" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOlf9WCWlAf8MKUq8CjzdnlJaxQdRPgEgIVRs6IOLuweZCNnlqc30w6fX3mEl2UdAV13rj4Bz1XNawuV8t6lQV8i_31P7obdDVVDDeeI9wEzmlnlgM1VQi3xiRx-V_cFiQmqT5ErLhbByNWu-JCSbA_BDeSAsuJ60AjA1EJVLjThXj-OBKbUrX54OpcVW59280wc_GQy9IW_bavW5bbzP-HJabOeYp4_6myFWwXHoobag9ZLoEGXDcLWyO1vmeCCjtvAVoSqT99anz"/>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden p-8 sm:p-14 text-center backdrop-blur-xl bg-gradient-to-r from-blue-900/30 via-[#0a0f26] to-blue-900/30 border border-blue-500/40 shadow-[0_0_50px_rgba(37,99,235,0.25)]">
          <h2 className="text-3xl sm:text-5xl font-black text-white relative z-10 mb-6">
            Have a project in mind?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 relative z-10">
            Tell us about your technical goals and our team will prepare a comprehensive proposal.
          </p>
          <Link href="/contact" className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 px-8 py-4 rounded-full font-bold shadow-lg transform hover:-translate-y-1">
            <span>Talk to Our Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
