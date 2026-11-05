'use client';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Rocket, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex-grow pt-16 md:pt-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <section className="pt-16 pb-12 md:pt-24 md:pb-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> Our Heritage & Mission
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
          Built in Kushtia.<br/>
          <span className="text-blue-400">Engineered for the World.</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          We are TSS Soft. — A team of passionate technologists on a mission to build premier enterprise digital platforms and modern software architectures.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative border-l-2 border-blue-500/40 ml-4 md:ml-0 md:pl-12 space-y-16 before:absolute before:inset-0 before:ml-[-1px] before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-blue-600/50 before:to-transparent">
          <div className="relative pl-8 md:pl-0">
            <div className="absolute left-[-41px] md:left-[-57px] top-1.5 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-[#050814] shadow-[0_0_12px_#3b82f6]"></div>
            <h3 className="text-xl font-bold text-blue-400 mb-2 font-mono">May 06, 2025 - The Inception</h3>
            <p className="text-slate-300 text-base leading-relaxed">The agency was founded by unifying the first letters of our founders: <strong>Tahsin, Shafaur, and Sawon</strong> — establishing TSS Soft with a dream to disrupt modern tech engineering.</p>
          </div>
          <div className="relative pl-8 md:pl-0">
            <div className="absolute left-[-41px] md:left-[-57px] top-1.5 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-[#050814] shadow-[0_0_12px_#3b82f6]"></div>
            <h3 className="text-xl font-bold text-blue-400 mb-2 font-mono">July 16, 2025 - The Foundation</h3>
            <p className="text-slate-300 text-base leading-relaxed">Official agency agreement formalized. We united our visions to build high-performance software, mobile applications, and web platforms with uncompromising quality.</p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white">The Minds Behind The Code</h2>
          <p className="text-slate-400 text-base mt-3">Leadership driving precision engineering and global delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0b1026] border border-blue-500/20 rounded-3xl p-8 sm:p-10 text-center backdrop-blur-md hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all duration-300 group">
            <div className="w-32 h-32 mx-auto mb-6 relative flex items-center justify-center">
              <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" alt="K. M. Tahsin Ahmmed" src="/team/tahsin.svg"/>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">K. M. Tahsin Ahmmed</h3>
            <p className="text-xs font-mono text-blue-400 mb-4 uppercase tracking-wider">Chief Executive Officer</p>
            <p className="text-slate-400 text-sm leading-relaxed">Leading the strategic vision and driving enterprise growth with a relentless focus on innovation.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#0b1026] border border-blue-500/20 rounded-3xl p-8 sm:p-10 text-center backdrop-blur-md hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all duration-300 group">
            <div className="w-32 h-32 mx-auto mb-6 relative flex items-center justify-center">
              <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" alt="MD. Shafaur Rahman Sabbir" src="/team/shafaur.svg"/>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">MD. Shafaur Rahman Sabbir</h3>
            <p className="text-xs font-mono text-blue-400 mb-4 uppercase tracking-wider">Chief Operating Officer</p>
            <p className="text-slate-400 text-sm leading-relaxed">Architecting operational excellence and ensuring flawless execution across all technical deliveries.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#0b1026] border border-blue-500/20 rounded-3xl p-8 sm:p-10 text-center backdrop-blur-md hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all duration-300 group">
            <div className="w-32 h-32 mx-auto mb-6 relative flex items-center justify-center">
              <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" alt="Mohammad Sawon" src="/team/sawon.svg"/>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Mohammad Sawon</h3>
            <p className="text-xs font-mono text-blue-400 mb-4 uppercase tracking-wider">Chief Marketing Officer</p>
            <p className="text-slate-400 text-sm leading-relaxed">Crafting our global narrative and connecting our high-performance solutions with industry leaders.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
