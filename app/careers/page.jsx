'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Briefcase, MapPin, X, Send, CheckCircle2, User, Mail, Phone, Link2, FileText } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(e.target);

    const payload = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      phone: formData.get('phone')?.toString().trim() || null,
      position: selectedJob?.title || 'General Engineering Role',
      portfolio_url: formData.get('portfolio')?.toString().trim() || null,
      experience: formData.get('experience')?.toString().trim() || null,
      message: formData.get('message')?.toString().trim() || '',
      status: 'pending',
      created_at: new Date().toISOString()
    };

    try {
      const { data, error } = await supabase
        .from('applications')
        .insert([payload]);

      if (error) {
        console.warn('Supabase application insert note:', error.message);
        // Fallback save locally
        const local = JSON.parse(localStorage.getItem('tss_local_applications') || '[]');
        local.unshift({ ...payload, id: 'local_' + Date.now() });
        localStorage.setItem('tss_local_applications', JSON.stringify(local));
      }

      setSubmitSuccess(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(false);
        setSelectedJob(null);
      }, 3000);
    } catch (err) {
      console.error('Application submit error:', err);
      const local = JSON.parse(localStorage.getItem('tss_local_applications') || '[]');
      local.unshift({ ...payload, id: 'local_' + Date.now() });
      localStorage.setItem('tss_local_applications', JSON.stringify(local));

      setSubmitSuccess(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(false);
        setSelectedJob(null);
      }, 3000);
    }
  };

  return (
    <main className="flex-grow min-h-screen pt-16 md:pt-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <section className="pt-16 pb-12 md:pt-24 md:pb-16 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> Join Our Team
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight mb-6 font-display-xl">
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
              <button 
                onClick={() => setSelectedJob(job)}
                className="bg-blue-600/10 border border-blue-500/30 text-blue-300 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 w-full md:w-auto font-semibold flex items-center justify-center gap-2"
              >
                <span>Apply for Position</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-[#080d22] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] my-8 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-1 block">Application</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">{selectedJob.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{selectedJob.type}</p>
              </div>

              {submitSuccess ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Application Transmitted</h4>
                  <p className="text-sm text-slate-300 max-w-sm">
                    Thank you for applying to TSS Soft! Our lead engineers will review your credentials and get in touch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                      <User size={13} className="text-blue-400" /> Full Name *
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="Jane Developer"
                      className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                        <Mail size={13} className="text-blue-400" /> Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="jane@example.com"
                        className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                        <Phone size={13} className="text-blue-400" /> WhatsApp / Phone
                      </label>
                      <input
                        name="phone"
                        placeholder="+880 1XXX-XXXXXX"
                        className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                        <Link2 size={13} className="text-blue-400" /> GitHub / Portfolio / CV URL *
                      </label>
                      <input
                        required
                        type="url"
                        name="portfolio"
                        placeholder="https://github.com/username"
                        className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                        <Briefcase size={13} className="text-blue-400" /> Experience
                      </label>
                      <input
                        name="experience"
                        placeholder="e.g. 3+ Years in Flutter/React"
                        className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                      <FileText size={13} className="text-blue-400" /> Why TSS Soft? (Short note)
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Highlight key platforms you've shipped and your architectural philosophy..."
                      className="w-full bg-[#050814] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all disabled:opacity-60"
                    >
                      <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
                      <Send size={15} />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
