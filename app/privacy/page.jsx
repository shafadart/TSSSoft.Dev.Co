'use client';

export default function PrivacyPolicyPage() {
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full bg-surface/50 dark:bg-surface/50 backdrop-blur-md border border-white/10 shadow-xl z-50 flex justify-between items-center px-8 py-4">
        <a href="/" className="text-headline-lg-mobile font-headline-lg-mobile font-bold text-on-surface dark:text-on-surface">T.S.S. Soft.</a>
        <div className="hidden md:flex items-center space-x-8 font-body-md text-body-md">
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/">Home</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/about">About</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/services">Services</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/portfolio">Portfolio</a>
        </div>
        <a className="text-on-surface-variant font-bold border-b-2 border-transparent pb-1 hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-transform duration-200 hover:scale-95 font-body-md text-body-md" href="/contact">Contact</a>
      </nav>

      <main className="max-w-4xl mx-auto pt-40 pb-20 px-4 min-h-screen">
        <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: July 2026</p>
        
        <div className="text-slate-400 text-lg leading-relaxed space-y-6">
          <p>At T.S.S. Soft, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our premium software services.</p>
          
          <h2 className="text-white font-semibold text-2xl mt-10 mb-4">Information We Collect</h2>
          <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features, or resources we make available.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact data</li>
            <li>Usage data and analytics</li>
            <li>Device and browser information</li>
          </ul>

          <h2 className="text-white font-semibold text-2xl mt-10 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect primarily to provide, maintain, protect and improve our current services and to develop new ones. This includes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Improving customer service and support</li>
            <li>Personalizing user experience</li>
            <li>Sending periodic emails regarding your order or other products and services</li>
          </ul>

          <h2 className="text-white font-semibold text-2xl mt-10 mb-4">Data Security</h2>
          <p>We adopt industry-standard data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
        </div>
      </main>

      
    </>
  );
}
