'use client';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const blogs = [
    { title: "Building High-Throughput Web Applications with Next.js & Edge Runtime", category: "Architecture", readTime: "5 min read" },
    { title: "Offline-First Mobile Architecture: Designing Resilient Flutter Apps", category: "Mobile", readTime: "8 min read" },
    { title: "The Psychology of Minimalist UI Systems in Enterprise SaaS", category: "Design", readTime: "6 min read" },
  ];

  return (
    <main className="flex-grow min-h-screen pt-16 md:pt-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> Technical Publications
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight mb-6">
          Engineering Insights.
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Deep dives into modern tech, systems architecture, and design patterns by the TSS Soft engineering team.
        </p>
      </section>

      <section className="max-w-7xl mx-auto pb-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-[#0a0f24] border border-blue-500/20 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition duration-300 group flex flex-col"
            >
              <div className="h-48 bg-[#070b1a] w-full relative overflow-hidden p-6 flex flex-col justify-between border-b border-white/5">
                <span className="text-xs font-mono text-slate-400">{blog.readTime}</span>
                <span className="text-2xl font-mono text-blue-500/40 group-hover:text-blue-400 transition-colors font-bold">&lt;/&gt;</span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-blue-400 text-xs font-mono font-bold mb-3 uppercase tracking-wider">{blog.category}</span>
                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{blog.title}</h2>
                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="inline-flex items-center gap-2 text-sm text-slate-300 font-semibold group-hover:text-blue-400 transition-colors">
                    Read Publication &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
