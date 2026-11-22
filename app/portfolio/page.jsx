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
      
      {/* 1. HEADER */}
      <section className="pt-6 pb-14 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-4 bg-blue-50 dark:bg-white/[0.06] border border-blue-200/80 dark:border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SELECTED WORK — 2025–2026</span>
        </div>

        <h1 className="font-heading text-hero font-extrabold text-slate-900 dark:text-white mb-6 tracking-[-0.035em] leading-[1.08]">
          Turning Ideas Into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-emerald-400 dark:via-sky-300 dark:to-blue-400">
            Digital Products.
          </span>
        </h1>

        <p className="font-body text-body-p text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-[1.7]">
          From innovative platforms to powerful software solutions, we design and develop technology that solves real-world problems.
        </p>
      </section>

      {/* 2. FILTER TABS */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-heading font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 3. PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            className="bg-white dark:bg-[#070e24]/90 border border-slate-200/90 dark:border-white/10 hover:border-blue-500 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Thumbnail Banner */}
              <div className="relative h-56 overflow-hidden bg-white dark:bg-slate-900">
                <img
                  src={project.banner || project.heroMockup || project.logo}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <img src={project.logo} alt={project.name} className="w-6 h-6 rounded-md object-contain" />
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2 italic">
                  "{project.tagline}"
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>
            </div>

            {/* Footer Links */}
            <div className="p-6 pt-0 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <Link
                href={`/projects/${project.slug}`}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 hover:underline"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[10px] font-mono text-slate-400 uppercase">Production</span>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
