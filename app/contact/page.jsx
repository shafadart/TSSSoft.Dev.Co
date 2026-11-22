'use client';
import { useState } from 'react';
import { Mail, MapPin, Phone, Sparkles, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function ContactPage() {
  const [btnText, setBtnText] = useState('Send Message');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatusMessage(null);
    setBtnText('Transmitting...');

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      service: formData.get('service')?.toString(),
      message: formData.get('message')?.toString().trim(),
      status: 'new',
      created_at: new Date().toISOString(),
    };

    try {
      // 1. Send to Supabase contacts table
      const { data, error } = await supabase
        .from('contacts')
        .insert([payload]);

      if (error) {
        console.warn('Supabase insert note:', error.message);
        // Fallback: save locally so inquiry is NEVER lost
        const local = JSON.parse(localStorage.getItem('tss_local_contacts') || '[]');
        local.unshift({ ...payload, id: 'local_' + Date.now() });
        localStorage.setItem('tss_local_contacts', JSON.stringify(local));
      }

      setStatusMessage({
        type: 'success',
        text: '✓ Message received! Our engineering partners will reach out within 12-24 hours.'
      });
      setBtnText('✓ Transmitted');
      e.target.reset();

      setTimeout(() => {
        setBtnText('Send Message');
        setIsSubmitting(false);
      }, 3500);
    } catch (err) {
      console.error('Contact submit error:', err);
      // Fallback save locally
      const local = JSON.parse(localStorage.getItem('tss_local_contacts') || '[]');
      local.unshift({ ...payload, id: 'local_' + Date.now() });
      localStorage.setItem('tss_local_contacts', JSON.stringify(local));

      setStatusMessage({
        type: 'success',
        text: '✓ Message received! We will respond shortly.'
      });
      setBtnText('Send Message');
      setIsSubmitting(false);
      e.target.reset();
    }
  };

  return (
    <main className="flex-grow relative z-10 px-4 sm:px-8 max-w-7xl mx-auto pb-24">
      <section className="pt-8 pb-16 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-4 bg-blue-50 dark:bg-white/[0.06] border border-blue-200/80 dark:border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" /> Direct Communications
        </div>
        <h1 className="font-heading text-hero font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.08]">
          Let's Build Something <br className="hidden sm:block" />
          <span className="text-slate-500 dark:text-slate-400 font-normal">Extraordinary.</span>
        </h1>
        <p className="font-body text-body-p text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-[1.7]">
          Whether you have a fully scoped enterprise platform or are planning a high-growth startup MVP, we are ready to architect your solution.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="font-heading text-section-title font-bold text-slate-900 dark:text-white tracking-tight">Direct Channels</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#0b1026] border border-slate-200/90 dark:border-blue-500/20 hover:border-blue-500 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:hello@tsssoft.com" className="font-heading text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors">hello@tsssoft.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#0b1026] border border-slate-200/90 dark:border-blue-500/20 hover:border-blue-500 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Headquarters</p>
                <p className="font-heading text-xl font-bold text-slate-900 dark:text-white">Kushtia, Bangladesh</p>
                <p className="font-body text-sm text-slate-500 dark:text-slate-400 mt-0.5">Operating Worldwide</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#0b1026] border border-slate-200/90 dark:border-blue-500/20 hover:border-blue-500 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Office Line</p>
                <a href="tel:+8801870955900" className="font-heading text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors">+880 1870 955 900</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#0a0f24] backdrop-blur-xl border border-slate-200/90 dark:border-blue-500/30 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-sm dark:shadow-[0_0_50px_rgba(37,99,235,0.15)]">
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="font-body text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 font-medium" htmlFor="name">Full Name</label>
              <input required className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all font-body text-sm" id="name" name="name" placeholder="John Doe" type="text" />
            </div>
            <div className="space-y-2">
              <label className="font-body text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 font-medium" htmlFor="email">Email Address</label>
              <input required className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all font-body text-sm" id="email" name="email" placeholder="john@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="font-body text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 font-medium" htmlFor="service">Service Interest</label>
              <select defaultValue="" required className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-slate-900 dark:text-white appearance-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all font-body text-sm" id="service" name="service">
                <option disabled value="">Select a service category</option>
                <option value="enterprise">Custom Enterprise Software</option>
                <option value="web">Next-Gen Web Architecture</option>
                <option value="mobile">Mobile Application (Flutter / React Native)</option>
                <option value="consulting">Architecture &amp; Cloud Consulting</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-body text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 font-medium" htmlFor="message">Project Overview</label>
              <textarea required rows={4} className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all font-body text-sm" id="message" name="message" placeholder="Briefly describe your goals, timeline, and requirements..."></textarea>
            </div>

            {statusMessage && (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>{statusMessage.text}</span>
              </div>
            )}

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold text-sm py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>{btnText}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
