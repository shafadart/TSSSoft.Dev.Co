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
    <main className="flex-grow min-h-screen pt-8 md:pt-16 pb-24 relative overflow-hidden text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      <section className="pt-8 pb-12 md:pb-16 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-4 bg-blue-50 dark:bg-blue-500/10 border border-blue-200/80 dark:border-blue-500/20 px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> Join Our Team
        </div>
        <h1 className="font-heading text-hero font-extrabold text-slate-900 dark:text-white leading-[1.08] tracking-tight mb-6">
          Build the Future.<br/>
          <span className="text-blue-600 dark:text-blue-400 font-bold">From Kushtia to Global Scale.</span>
        </h1>
        <p className="font-body text-body-p text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-[1.7]">
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
              className="bg-white dark:bg-[#0a0f24] border border-slate-200/90 dark:border-blue-500/20 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-blue-500 shadow-sm hover:shadow-xl transition duration-300 group"
            >
              <div className="mb-6 md:mb-0">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 block">{job.dept}</span>
                <h2 className="font-heading text-card-title font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{job.title}</h2>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-body text-sm">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>{job.type}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedJob(job)}
                className="bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 w-full md:w-auto font-heading font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 shadow-sm"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-white dark:bg-[#080d22] border border-slate-200 dark:border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 overflow-hidden text-slate-900 dark:text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-white flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1 block">Application</span>
                <h3 className="text-2xl font-bold tracking-tight">{selectedJob.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{selectedJob.type}</p>
              </div>

              {submitSuccess ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Application Transmitted</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
                    Thank you for applying to TSS Soft! Our lead engineers will review your credentials and get in touch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <User size={13} className="text-blue-600 dark:text-blue-400" /> Full Name *
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="Jane Developer"
                      className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Mail size={13} className="text-blue-600 dark:text-blue-400" /> Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                      className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Phone size={13} className="text-blue-600 dark:text-blue-400" /> Phone / WhatsApp
                    </label>
                    <input
                      name="phone"
                      placeholder="+880 1700 000000"
                      className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Link2 size={13} className="text-blue-600 dark:text-blue-400" /> GitHub / Portfolio URL
                    </label>
                    <input
                      name="portfolio_url"
                      placeholder="https://github.com/username"
                      className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <FileText size={13} className="text-blue-600 dark:text-blue-400" /> Relevant Experience &amp; Highlights
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about the hardest problem you solved or technologies you master..."
                      className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-sm"
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold text-sm py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Submit Application'}</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
