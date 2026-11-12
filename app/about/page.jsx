'use client';

import { motion } from 'framer-motion';
import { Sparkles, Calendar, Rocket, Award, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex-grow relative z-10 px-4 sm:px-8 max-w-7xl mx-auto pb-24">
      
      {/* Hero */}
      <section className="pt-8 pb-16 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" /> Our Heritage &amp; Mission
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight leading-tight font-display-xl">
          Built in Kushtia.<br/>
          <span className="text-slate-400 font-normal">Engineered for the World.</span>
        </h1>
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          We are TSS Soft. — A team of passionate technologists on a mission to build premier enterprise digital platforms and modern software architectures.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-12 max-w-3xl mx-auto">
        <div className="relative border-l border-white/15 ml-4 md:ml-0 md:pl-10 space-y-12">
          <div className="relative pl-6 md:pl-0">
            <div className="absolute left-[-29px] md:left-[-45px] top-1.5 h-3.5 w-3.5 rounded-full bg-blue-400 ring-4 ring-[#050916]"></div>
            <span className="text-xs font-mono text-blue-300 uppercase tracking-widest block mb-1">May 06, 2025</span>
            <h3 className="text-xl font-bold text-white mb-2">The Inception</h3>
            <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed font-light">
              The agency was founded by unifying the first letters of our founders: <strong>Tahsin, Shafaur, and Sawon</strong> — establishing TSS Soft. with a commitment to engineering high-performance software.
            </p>
          </div>

          <div className="relative pl-6 md:pl-0">
            <div className="absolute left-[-29px] md:left-[-45px] top-1.5 h-3.5 w-3.5 rounded-full bg-blue-400 ring-4 ring-[#050916]"></div>
            <span className="text-xs font-mono text-blue-300 uppercase tracking-widest block mb-1">July 16, 2025</span>
            <h3 className="text-xl font-bold text-white mb-2">Formal Foundation</h3>
            <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed font-light">
              Official agency agreement formalized. We united our visions to build high-performance software, mobile applications, and web platforms with uncompromising architectural quality.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">The Minds Behind The Code</h2>
          <p className="text-slate-400 text-sm font-light">Multidisciplinary leadership driving precision engineering and global delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#09112a]/55 backdrop-blur-2xl border border-white/10 hover:border-white/20 rounded-3xl p-8 text-center transition-all duration-300 group shadow-lg">
            <div className="w-28 h-28 mx-auto mb-6 relative flex items-center justify-center">
              <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" alt="K. M. Tahsin Ahmmed" src="/team/tahsin.svg"/>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">K. M. Tahsin Ahmmed</h3>
            <p className="text-xs font-mono text-blue-400 mb-4 uppercase tracking-wider">Chief Executive Officer</p>
            <p className="text-slate-400 text-sm leading-relaxed font-light">Leading strategic vision and enterprise client architecture with a relentless focus on innovation.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#09112a]/55 backdrop-blur-2xl border border-white/10 hover:border-white/20 rounded-3xl p-8 text-center transition-all duration-300 group shadow-lg">
            <div className="w-28 h-28 mx-auto mb-6 relative flex items-center justify-center">
              <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" alt="MD. Shafaur Rahman Sabbir" src="/team/shafaur.svg"/>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">MD. Shafaur Rahman Sabbir</h3>
            <p className="text-xs font-mono text-blue-400 mb-4 uppercase tracking-wider">Chief Operating Officer</p>
            <p className="text-slate-400 text-sm leading-relaxed font-light">Architecting operational excellence and ensuring flawless execution across all technical deliveries.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#09112a]/55 backdrop-blur-2xl border border-white/10 hover:border-white/20 rounded-3xl p-8 text-center transition-all duration-300 group shadow-lg">
            <div className="w-28 h-28 mx-auto mb-6 relative flex items-center justify-center">
              <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" alt="Mohammad Sawon" src="/team/sawon.svg"/>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Mohammad Sawon</h3>
            <p className="text-xs font-mono text-blue-400 mb-4 uppercase tracking-wider">Chief Marketing Officer</p>
            <p className="text-slate-400 text-sm leading-relaxed font-light">Crafting global communication and connecting our high-performance solutions with industry leaders.</p>
          </motion.div>

        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="mt-8 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-slate-950 font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-slate-100 transition-all duration-200"
        >
          <span>Get in Touch with Founders</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

    </main>
  );
}
