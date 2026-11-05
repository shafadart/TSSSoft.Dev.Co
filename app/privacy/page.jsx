'use client';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto pt-24 md:pt-32 pb-20 px-4 min-h-screen relative">
      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
        <ShieldCheck className="w-3.5 h-3.5" /> Legal Governance
      </div>
      <h1 className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">Privacy Policy</h1>
      <p className="text-xs font-mono text-slate-500 mb-10">Last updated: July 2026 • TSS Soft.</p>
      
      <div className="text-slate-300 text-base leading-relaxed space-y-6 bg-[#0a0f24] p-8 sm:p-12 rounded-3xl border border-blue-500/20">
        <p>At TSS Soft., we take your digital privacy with utmost seriousness. This Privacy Policy outlines how we collect, store, and protect information when you engage with our agency platform and digital services.</p>
        
        <h2 className="text-white font-bold text-2xl mt-8 mb-3 text-blue-400">1. Information We Collect</h2>
        <p>We collect essential operational information necessary to engineer and deliver custom software solutions:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400">
          <li>Contact information (name, business email, communication preferences)</li>
          <li>Technical project requirements, specifications, and scope documents</li>
          <li>Standard diagnostic and analytical metadata for platform security</li>
        </ul>

        <h2 className="text-white font-bold text-2xl mt-8 mb-3 text-blue-400">2. How Information Is Applied</h2>
        <p>Information shared with TSS Soft is utilized strictly to formulate architectural proposals, execute software development contracts, and support enterprise deployments.</p>

        <h2 className="text-white font-bold text-2xl mt-8 mb-3 text-blue-400">3. Security Architecture</h2>
        <p>We deploy end-to-end cryptographic and industry-standard security safeguards to protect project proprietary assets against unauthorized access, disclosure, or interception.</p>
      </div>
    </main>
  );
}
