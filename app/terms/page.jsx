'use client';
import { FileText } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto pt-24 md:pt-32 pb-20 px-4 min-h-screen relative">
      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
        <FileText className="w-3.5 h-3.5" /> Terms &amp; Provisions
      </div>
      <h1 className="font-heading text-section-title font-bold text-white mb-2 tracking-[-0.025em] leading-[1.15]">Terms of Service</h1>
      <p className="text-xs font-mono text-slate-500 mb-10">Last updated: July 2026 • TSS Soft.</p>
      
      <div className="font-body text-body-p text-slate-300 leading-[1.7] space-y-6 bg-[#0a0f24] p-8 sm:p-12 rounded-3xl border border-blue-500/20">
        <p>By engaging with TSS Soft. or utilizing our digital engineering platforms, you accept and agree to be bound by the terms and provisions of this operational agreement.</p>
        
        <h2 className="font-heading text-card-title sm:text-2xl font-bold mt-8 mb-3 text-blue-400">1. Intellectual Property &amp; Code Ownership</h2>
        <p>All bespoke source code, architectures, and assets developed specifically for clients under contract become the property of the client upon final completion of delivery milestones and financial settlement, subject to standard non-exclusive libraries.</p>

        <h2 className="font-heading text-card-title sm:text-2xl font-bold mt-8 mb-3 text-blue-400">2. Professional Engagement</h2>
        <p>TSS Soft commits to industry-best engineering standards, robust testing, and agile milestone reporting throughout the engagement lifecycle.</p>

        <h2 className="font-heading text-card-title sm:text-2xl font-bold mt-8 mb-3 text-blue-400">3. Limitation of Liability</h2>
        <p>TSS Soft executes all technical deliveries with high architectural precision and standard warranties as established in project service-level agreements (SLAs).</p>
      </div>
    </main>
  );
}
