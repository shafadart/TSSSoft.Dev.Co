'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  ExternalLink, 
  Eye, 
  X, 
  Layers, 
  CheckCircle2, 
  Smartphone, 
  Globe, 
  Cpu 
} from 'lucide-react';
import { projectsData } from '../../lib/projectsData';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [previewProject, setPreviewProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects (5)', count: 5 },
    { id: 'mobile', label: 'Mobile Apps (2)', count: 2 },
    { id: 'web', label: 'Web Platforms (2)', count: 2 },
    { id: 'system', label: 'Windows & Systems (1)', count: 1 },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'mobile') return project.type === 'mobile' || project.type === 'mobile-web';
    if (activeFilter === 'web') return project.type === 'web';
    if (activeFilter === 'system') return project.type === 'system';
    return true;
  });

  return (
    <main className="flex-grow relative z-10 px-4 sm:px-8 max-w-7xl mx-auto pb-28">
      
      {/* =================================================================== */}
      {/* 1. HEADER                                                           */}
      {/* =================================================================== */}
      <section className="pt-6 pb-14 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SELECTED WORK — 2025–2026</span>
        </div>

        <h1 className="font-heading text-hero font-extrabold text-white mb-6 tracking-[-0.035em] leading-[1.08]">
          Turning Ideas Into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-400">
            Digital Products.
          </span>
        </h1>

        <p className="font-body text-body-p text-slate-300 max-w-2xl mx-auto leading-[1.7]">
          From innovative platforms to powerful software solutions, we design and develop technology that solves real-world problems.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-semibold transition-all duration-200 tracking-[-0.01em] ${
                activeFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.45)] scale-105'
                  : 'bg-white/[0.05] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. PROJECT CARDS GRID (5 Projects with Real Assets)                 */}
      {/* =================================================================== */}
      <section className="py-4 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-[#070e28]/80 border border-white/15 hover:border-white/35 rounded-3xl overflow-hidden backdrop-blur-2xl shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.8)]"
              >
                <div>
                  
                  {/* Banner Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#030612]">
                    <img 
                      src={project.banner} 
                      alt={project.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top Floating Badge on Image */}
                    <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full flex items-center gap-2">
                      <img 
                        src={project.logo} 
                        alt="Logo" 
                        className="w-4 h-4 rounded-md object-cover" 
                      />
                      <span className="text-[10px] font-mono text-slate-200 uppercase tracking-wider">
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-emerald-300">
                      TSS Soft
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    
                    {/* Category & Name */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                        {project.category}
                      </span>
                      <h3 className="font-heading text-card-title sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono text-emerald-400/90 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="font-body text-xs text-slate-300 leading-[1.7] line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Key Features (3-4 bullet tags) */}
                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                          <span className="truncate">{feat.title}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>

                {/* Bottom Actions Row */}
                <div className="p-6 pt-0 mt-auto">
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    
                    {/* Explore Project Action */}
                    <button
                      type="button"
                      onClick={() => setPreviewProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 px-3.5 py-2 rounded-xl transition-all active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Explore</span>
                    </button>

                    {/* View Case Study Action */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-slate-950 bg-[#22c55e] hover:bg-[#16a34a] px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.35)] transition-all active:scale-95 group/btn"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>

                  </div>

                  <div className="text-[10px] font-mono text-slate-400 text-center mt-3 pt-2 border-t border-white/5">
                    ✦ {project.developerBadge}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* =================================================================== */}
      {/* 3. MODAL: QUICK EXPLORE PREVIEW                                     */}
      {/* =================================================================== */}
      <AnimatePresence>
        {previewProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#080e28] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setPreviewProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={previewProject.logo} 
                  alt={previewProject.name} 
                  className="w-12 h-12 rounded-xl object-cover border border-white/15"
                />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                    {previewProject.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {previewProject.name}
                  </h3>
                </div>
              </div>

              {/* Banner */}
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video mb-5">
                <img 
                  src={previewProject.banner} 
                  alt={previewProject.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    About This Product
                  </span>
                  <p className="font-body text-xs text-slate-300 leading-[1.7]">
                    {previewProject.shortDescription}
                  </p>
                </div>

                <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Key Features Highlight
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {previewProject.keyFeatures.slice(0, 6).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{feat.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-emerald-400">
                    ✦ {previewProject.developerBadge}
                  </span>
                  <Link
                    href={`/projects/${previewProject.slug}`}
                    onClick={() => setPreviewProject(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-slate-950 bg-[#22c55e] hover:bg-[#16a34a] px-5 py-2.5 rounded-xl shadow-lg transition-all"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
