import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  Workflow, 
  Target, 
  ShieldCheck, 
  ExternalLink,
  Users,
  Compass,
  Monitor,
  Smartphone,
  Sun,
  Activity,
  FileText
} from 'lucide-react';
import { projectsData, getProjectBySlug, getAllProjectSlugs } from '../../../lib/projectsData';

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found • TSS Soft' };

  return {
    title: `${project.name} — Case Study | TSS Soft`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.shortDescription,
      images: [project.banner]
    }
  };
}

export default function CaseStudyPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  // Related projects
  const relatedProjects = projectsData.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100 pb-28 relative overflow-hidden transition-colors duration-200">
      
      {/* Background Soft Ambient Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full blur-[160px] pointer-events-none -z-10 opacity-15 dark:opacity-30"
        style={{ background: project.accentColor }}
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
      {/* 1. PROJECT HERO                                                     */}
      {/* =================================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 text-center">
        
        {/* Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200/90 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accentColor }} />
            <span>{project.category}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/25 text-xs font-mono text-emerald-700 dark:text-emerald-300 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{project.developerBadge}</span>
          </div>
        </div>

        {/* Project Brand & Headline */}
        <div className="flex items-center justify-center gap-3.5 mb-4">
          <img 
            src={project.logo} 
            alt={`${project.name} Logo`} 
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border border-slate-200 dark:border-white/15 shadow-md bg-white p-1"
          />
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
            {project.name}
          </h2>
        </div>

        <h1 className="font-heading text-hero font-extrabold text-slate-900 dark:text-white tracking-[-0.035em] leading-[1.08] mb-6 max-w-4xl mx-auto">
          {project.heroTitle}
        </h1>

        <p className="font-body text-body-p text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-[1.7] mb-8">
          {project.heroDescription}
        </p>

        {/* Quick Spec Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {project.techStack.map((tech, idx) => (
            <span 
              key={idx}
              className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 px-3 py-1 rounded-lg shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

      </section>

      {/* =================================================================== */}
      {/* 2. HIGH-RES PRODUCT BANNER SHOWCASE                                 */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/15 shadow-2xl bg-slate-950 group">
          <img 
            src={project.banner} 
            alt={`${project.name} Official Product Showcase`} 
            className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-3xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Verified TSS Soft Product Architecture</span>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. PROBLEM & SOLUTION                                               */}
      {/* =================================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Problem Card */}
          <div className="bg-white dark:bg-[#070e28]/80 border border-rose-200 dark:border-rose-500/20 rounded-3xl p-8 backdrop-blur-xl shadow-sm dark:shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-4 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 px-3 py-1 rounded-full">
                <span>The Challenge</span>
              </div>
              <h3 className="font-heading text-subheading font-bold text-slate-900 dark:text-white mb-3">
                The Problem
              </h3>
              <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7]">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-white dark:bg-[#070e28]/80 border border-emerald-200 dark:border-emerald-500/20 rounded-3xl p-8 backdrop-blur-xl shadow-sm dark:shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-3 py-1 rounded-full">
                <span>The Architecture</span>
              </div>
              <h3 className="font-heading text-subheading font-bold text-slate-900 dark:text-white mb-3">
                Our Solution
              </h3>
              <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7]">
                {project.solution}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. SPECIAL HIGHLIGHT CALLOUT (If Present)                           */}
      {/* =================================================================== */}
      {project.specialHighlight && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:via-[#0b1744]/75 dark:to-blue-950/80 border border-blue-200 dark:border-blue-400/30 rounded-3xl p-8 sm:p-12 shadow-sm dark:shadow-[0_20px_50px_rgba(37,99,235,0.25)] backdrop-blur-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-700 dark:text-sky-300 mb-4 bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-400/30 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.specialHighlight.badge}</span>
            </div>
            <h3 className="font-heading text-section-title font-extrabold text-slate-900 dark:text-white mb-4 tracking-[-0.025em]">
              {project.specialHighlight.title}
            </h3>
            <p className="font-body text-body-p text-slate-700 dark:text-slate-200 max-w-3xl leading-[1.7]">
              {project.specialHighlight.desc}
            </p>
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* 5. USER ROLES                                                       */}
      {/* =================================================================== */}
      {project.userRoles && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest">Designed For Scale</span>
            <h3 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-[-0.025em]">
              User Roles &amp; Stakeholders
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.userRoles.map((role, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#070e28]/70 border border-slate-200/90 dark:border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-blue-400 dark:hover:border-white/20 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-heading text-card-title font-bold text-slate-900 dark:text-white">{role.role}</h4>
                </div>
                <p className="font-body text-body-p text-slate-600 dark:text-slate-300 leading-[1.7]">{role.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* 6. CORE FEATURES GRID                                               */}
      {/* =================================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest">System Capabilities</span>
          <h3 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-[-0.025em]">
            Core Features &amp; Engineering
          </h3>
          <p className="font-body text-body-p text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            {project.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.keyFeatures.map((feat, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-[#070e28]/70 border border-slate-200/90 dark:border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-blue-500 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-400/20 flex items-center justify-center text-blue-600 dark:text-blue-300 text-xs font-mono font-bold">
                  {idx + 1}
                </span>
                <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">
                  {feat.title}
                </h4>
              </div>
              <p className="font-body text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================== */}
      {/* 7. PROJECT OBJECTIVE                                                */}
      {/* =================================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <div className="bg-white dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 rounded-2xl p-8 backdrop-blur-xl space-y-3 shadow-sm">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">Core Mission &amp; Impact</span>
          <p className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white italic">
            “{project.objective}”
          </p>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 block pt-1">
            ✦ Engineered &amp; Maintained by TSS Soft
          </span>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 8. RELATED PROJECTS                                                 */}
      {/* =================================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-200 dark:border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest">More Case Studies</span>
            <h3 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-[-0.025em]">
              Explore Other Work
            </h3>
          </div>
          <Link 
            href="/portfolio" 
            className="text-xs font-heading font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 group"
          >
            <span>View All 5 Projects</span>
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

    </main>
  );
}
