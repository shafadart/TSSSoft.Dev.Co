'use client';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Briefcase, MapPin, Laptop } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
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

  const jobs = [
    { title: "Senior Flutter / Mobile Architect", type: "Full-time • Hybrid (Kushtia / Remote)", dept: "Engineering" },
    { title: "Next.js / Full-Stack Engineer", type: "Full-time • Hybrid (Kushtia / Remote)", dept: "Engineering" },
    { title: "Product & UI/UX Designer", type: "Full-time • Hybrid (Kushtia / Remote)", dept: "Design" },
  ];

  return (
    <main className="flex-grow min-h-screen pt-16 md:pt-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> Join Our Team
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight mb-6">
          Build the Future.<br/>
          <span className="text-blue-400">From Kushtia to Global Scale.</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Join an elite cadre of engineers and creators crafting high-performance digital systems at TSS Soft.
        </p>
      </section>

      <section className="max-w-5xl mx-auto pb-24 px-4 sm:px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-5"
        >
          {jobs.map((job, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-[#0a0f24] border border-blue-500/20 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition duration-300 group"
            >
              <div className="mb-6 md:mb-0">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-2 block">{job.dept}</span>
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{job.title}</h2>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>{job.type}</span>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="bg-blue-600/10 border border-blue-500/30 text-blue-300 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 w-full md:w-auto font-semibold flex items-center justify-center gap-2"
              >
                <span>Apply for Position</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
