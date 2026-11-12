'use client';
import { useState } from 'react';
import { Mail, MapPin, Phone, Sparkles, Send } from 'lucide-react';

export default function ContactPage() {
  const [btnText, setBtnText] = useState('Send Message');
  const [btnClass, setBtnClass] = useState('bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.4)]');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setBtnText('Encrypting & Sending...');
    setBtnClass('bg-blue-600/80 text-white opacity-80');

    setTimeout(() => {
      setBtnText('✓ Message Received! We will respond shortly.');
      setBtnClass('bg-emerald-600 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)]');
      setTimeout(() => {
        setBtnText('Send Message');
        setBtnClass('bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.4)]');
        setIsSubmitting(false);
        e.target.reset();
      }, 3500);
    }, 1200);
  };

  return (
    <main className="flex-grow relative z-10 px-4 sm:px-8 max-w-7xl mx-auto pb-24">
      <section className="pt-8 pb-16 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" /> Direct Communications
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight leading-tight font-display-xl">
          Let's Build Something <br className="hidden sm:block" />
          <span className="text-slate-400 font-normal">Extraordinary.</span>
        </h1>
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Whether you have a fully scoped enterprise platform or are planning a high-growth startup MVP, we are ready to architect your solution.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Direct Channel</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0b1026] border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:hello@tsssoft.com" className="text-xl font-bold text-white hover:text-blue-300 transition-colors">hello@tsssoft.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0b1026] border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">Headquarters</p>
                <p className="text-xl font-bold text-white">Kushtia, Bangladesh</p>
                <p className="text-sm text-slate-400 mt-0.5">Operating Worldwide</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0b1026] border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">Office Line</p>
                <a href="tel:+8801870955900" className="text-xl font-bold text-white hover:text-blue-300 transition-colors">+880 1870 955 900</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#0a0f24] backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)]">
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-300" htmlFor="name">Full Name</label>
              <input required className="w-full bg-[#050814] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" id="name" name="name" placeholder="John Doe" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-300" htmlFor="email">Email Address</label>
              <input required className="w-full bg-[#050814] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" id="email" name="email" placeholder="john@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-300" htmlFor="service">Service Interest</label>
              <select defaultValue="" required className="w-full bg-[#050814] border border-white/10 rounded-xl px-5 py-3.5 text-white appearance-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" id="service" name="service">
                <option disabled value="">Select a service category</option>
                <option value="enterprise">Custom Enterprise Software</option>
                <option value="web">Next-Gen Web Architecture</option>
                <option value="mobile">Mobile Application (Flutter / React Native)</option>
                <option value="consulting">Architecture &amp; Cloud Consulting</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-300" htmlFor="message">Message</label>
              <textarea required className="w-full bg-[#050814] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-500 resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" id="message" name="message" placeholder="Tell us about your project..." rows="4"></textarea>
            </div>
            <button className={`w-full font-semibold rounded-full py-4 px-8 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-4 flex items-center justify-center gap-2 ${btnClass}`} type="submit" disabled={isSubmitting}>
              <span>{btnText}</span>
              {!isSubmitting && <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
