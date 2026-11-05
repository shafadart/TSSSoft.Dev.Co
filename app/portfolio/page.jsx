'use client';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main className="flex-grow pt-16 md:pt-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> Proven Track Record
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
          Selected Masterpieces.
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
          A curated showcase of mobile applications, enterprise platforms, and digital products engineered by TSS Soft.
        </p>
      </section>

      {/* Featured Project */}
      <section className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0a0f24] border border-blue-500/30 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row backdrop-blur-xl shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:border-blue-500/60 transition-all duration-300">
          <div className="w-full lg:w-3/5 bg-[#050814] flex items-center justify-center overflow-hidden min-h-[22rem]">
            <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Tutors Kushtia" src="https://lh3.googleusercontent.com/aida/AP1WRLvh0sROD2UE6okz6Gb2G7n7l15A1ALz20VAZ7Lb1BYopaycCOFvzj651A82ZdBTvtY46kPVONMJdXHVAyE3IDTcXdwVpNRAxBjD7uJXcIfzsl9kzziwqzU1wuQoeBgPK3MxuWK-BZde4MBv9Yvj4iS2vSYATZDadv71eMM8Ta0NJzRmawibjJ5sBtbQ4rpt6LHiCAFvZsdnx_tGDKp4tg5WN5wjzdmNWYMY3_Pnvcyuu8qhSgkOdwWb12Q"/>
          </div>
          <div className="w-full lg:w-2/5 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-3">ED-TECH PLATFORM</span>
            <h2 className="text-3xl font-black text-white mb-4">Tutors Kushtia</h2>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              A comprehensive digital ecosystem connecting thousands of students and educators with smart matching algorithms and verified tutor credentials.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="bg-blue-600/10 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-mono text-blue-300">Next.js</span>
              <span className="bg-blue-600/10 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-mono text-blue-300">Tailwind</span>
              <span className="bg-blue-600/10 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-mono text-blue-300">Node.js</span>
              <span className="bg-blue-600/10 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-mono text-blue-300">PostgreSQL</span>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors w-max group">
              <span>Request Case Study Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Grid Projects */}
      <section className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0a0f24] border border-blue-500/20 rounded-3xl overflow-hidden flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300">
            <div className="h-72 overflow-hidden">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Anti Dopamine" src="https://lh3.googleusercontent.com/aida/AP1WRLvv3MGzV8LcsgQbW_dlfZ8pWBqsDupM0i86XUA9XqVtC2r-ARFVKVpc8jXzPCzVPTwkyIxYV4wUcjllzGs3IQiygw86zb4R9HZwJw1jOxCZkmB_BBHF_SOxcazRugYQbF-QqlWE05DvaGNQ-xmSO2_EBcYO72Ob_YzCFDNhzCs53RM_khgh9khFuE1zIJGaSRPDQaCxnRK8xPh3lbVRge5BAz9n8w2irDdh8q5got1Omjnnmtu93hRcKOw"/>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-2">MOBILE APPLICATION</span>
              <h3 className="text-2xl font-bold text-white mb-3">Anti Dopamine</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                A behavioral productivity and digital wellness tool engineered with offline unlock cryptographic keys and usage analytics.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-[#0a0f24] border border-blue-500/20 rounded-3xl overflow-hidden flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300">
            <div className="h-72 overflow-hidden relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfPlpW4LXSg0wz5Iik1f6IRiorWnJEDUIraD_ZU27XhE2lsixGOwfMPNmgXnnue8gpSyicYXSWDvfZ2b_0YCQfs3TIe9jNaiDQx1lGjMKkeNx9gDXwLZSa5TIttPyIcia-AyGToto0AGKy0JZAWsd4Z1mDKGkL4aFZficujQZGr8kYXYCdiE2binuJMIN07hGKyCRi55tCobDLcm02u1dbi9PPtPWsHU33uxznI6eMmM1Do96waVDmK9bE4qHCFcKVX4c58L5tro4r')", backgroundSize: "cover" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-transparent"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="font-mono text-xs uppercase tracking-widest text-blue-400 mb-2">FULL-STACK SAAS</span>
              <h3 className="text-2xl font-bold text-white mb-3">ShohojBebsha</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                An all-in-one business resource planning and invoicing SaaS engineered for growing enterprises.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
