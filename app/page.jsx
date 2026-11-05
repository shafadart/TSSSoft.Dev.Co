'use client';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Palette, Cloud, Calendar, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center max-w-7xl mx-auto relative z-10">
        
        {/* Dynamic Electric Blue Radial Auras */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-gradient-to-b from-blue-600/20 via-blue-500/10 to-transparent rounded-full blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } }
          }}
          className="flex flex-col items-center w-full max-w-5xl mx-auto"
        >
          {/* Tech Pill Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-blue-600/10 border border-blue-500/30 text-blue-400 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:border-blue-400/60 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>&lt;/&gt; NEXT-GEN DIGITAL ARCHITECTURE</span>
            <span className="text-blue-500/60">•</span>
            <span className="text-slate-400">TSS SOFT</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="font-display-xl-mobile text-display-xl-mobile md:font-display-xl md:text-display-xl max-w-5xl mx-auto mb-8 font-black tracking-tight"
          >
            Crafting the Future of <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(37,99,235,0.35)]">
              Digital Experiences
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="font-body-lg text-body-lg text-slate-300/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            We blend the structural precision of enterprise software with the agile innovation of a boutique digital agency. Engineered in Kushtia, delivering high-impact platforms worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none"
          >
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-[0_0_35px_rgba(37,99,235,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-blue-400/40 flex items-center justify-center gap-2 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              href="/services" 
              className="border border-white/10 text-slate-200 px-8 py-3.5 rounded-full font-semibold backdrop-blur-md bg-white/[0.04] hover:bg-white/[0.08] hover:border-blue-500/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Services</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Agency Metrics Banner */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-white/10 w-full flex justify-center gap-12 sm:gap-24 md:gap-32 flex-wrap">
          <div className="text-center group">
            <div className="font-headline-lg text-3xl sm:text-5xl font-extrabold text-white group-hover:text-blue-400 transition-colors">3+</div>
            <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mt-2">Visionary Founders</div>
          </div>
          <div className="text-center group">
            <div className="font-headline-lg text-3xl sm:text-5xl font-extrabold text-white group-hover:text-blue-400 transition-colors">24/7</div>
            <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mt-2">Engineering Agility</div>
          </div>
          <div className="text-center group">
            <div className="font-headline-lg text-3xl sm:text-5xl font-extrabold text-white group-hover:text-blue-400 transition-colors">100%</div>
            <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mt-2">Architectural Quality</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10" id="services">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Services Engineered for Scale</h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">We develop bulletproof software solutions customized for disruptive businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-80px" }} 
            transition={{ duration: 0.5 }}
            className="bg-[#0a0f24]/60 border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-xl flex flex-col justify-between h-full col-span-1 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                <Smartphone className="w-7 h-7" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Mobile App Development</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">Native and cross-platform mobile systems built with Flutter and React Native for fluid, responsive mobile experiences.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-mono text-blue-400">
              <span>IOS • ANDROID • HYBRID</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-80px" }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0a0f24]/60 border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-xl flex flex-col justify-between h-full col-span-1 md:col-span-2 relative overflow-hidden hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-600/20 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                <Globe className="w-7 h-7" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Full-Stack Web Architectures</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                Scalable, secure, and lightning-fast web architectures built on Next.js, modern microservices, and enterprise API ecosystems. We handle enterprise-grade loads with boutique perfection.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-mono text-blue-400 relative z-10">
              <span>NEXT.JS • REACT • NODE • PYTHON • POSTGRES</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-80px" }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0a0f24]/60 border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-xl flex flex-col justify-between h-full col-span-1 md:col-span-2 relative overflow-hidden hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 group"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                <Palette className="w-7 h-7" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Bespoke UI/UX Engineering</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                High-end modern interfaces designed around cognitive ease and user conversion. We craft software designs that look visually captivating and operate with speed and clarity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-mono text-blue-400 relative z-10">
              <span>FIGMA • DESIGN SYSTEMS • MICRO-INTERACTIONS</span>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-80px" }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0a0f24]/60 border border-white/10 p-8 sm:p-10 rounded-3xl backdrop-blur-xl flex flex-col justify-between h-full col-span-1 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                <Cloud className="w-7 h-7" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Cloud & DevOps</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Zero-downtime automated deployment pipelines, containerization, and resilient cloud architectures.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-mono text-blue-400">
              <span>DOCKER • AWS • CI/CD • LINUX</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" /> Our Roots
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Born in Kushtia, <br/>
              <span className="text-blue-400">Engineered for the World.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              TSS Soft. represents a new benchmark of technical execution. We believe that true sophistication lies in simplicity—stripping away unnecessary bloat to reveal powerful, elegant software tools.
            </p>
            <p className="text-slate-400 text-sm sm:text-base mb-8 leading-relaxed">
              Our multidisciplinary leadership brings together technical rigor, visionary architecture, and strategic growth to deliver world-class digital products.
            </p>

            <div className="flex items-center gap-4">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                <span>Read our full journey</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="bg-[#0b1026] border border-blue-500/20 p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300 group"
            >
              <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(37,99,235,0.4)]" alt="K. M. Tahsin Ahmmed" src="/team/tahsin.svg" />
              </div>
              <h4 className="font-bold text-white text-base">K. M. Tahsin Ahmmed</h4>
              <span className="text-xs font-mono text-blue-400 mt-1 uppercase tracking-wider">Chief Executive Officer</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }}
              className="bg-[#0b1026] border border-blue-500/20 p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300 group"
            >
              <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(37,99,235,0.4)]" alt="MD. Shafaur Rahman Sabbir" src="/team/shafaur.svg" />
              </div>
              <h4 className="font-bold text-white text-base">MD. Shafaur Rahman Sabbir</h4>
              <span className="text-xs font-mono text-blue-400 mt-1 uppercase tracking-wider">Chief Operating Officer</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }}
              className="bg-[#0b1026] border border-blue-500/20 p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300 group"
            >
              <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(37,99,235,0.4)]" alt="Mohammad Sawon" src="/team/sawon.svg" />
              </div>
              <h4 className="font-bold text-white text-base">Mohammad Sawon</h4>
              <span className="text-xs font-mono text-blue-400 mt-1 uppercase tracking-wider">Chief Marketing Officer</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.3 }}
              className="bg-[#0b1026] border border-blue-500/20 p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                <Calendar className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h4 className="text-white font-bold text-base">Founded In</h4>
              <span className="text-xs font-mono text-blue-400 mt-1 uppercase tracking-wider">July 16, 2025</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="projects">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <Zap className="w-3.5 h-3.5" /> Featured Case Studies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Built to Perform</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="bg-[#0a0f24]/70 rounded-3xl overflow-hidden border border-white/10 flex flex-col hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all duration-300 group"
          >
            <div className="relative overflow-hidden aspect-[16/9]">
              <img alt="Tutors Kushtia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVZYso5zhowu7yT_E-_ToLB1TYRgY-avJDxlRfJ_PEui1z7VEFfdZsvVftxe6tTm4gBoVnSnV4zeC2f12rlxP5wCZgiKb9SS0dPxnSIOXGVbToNbq9-bmZfdSLdEEzPzdH3Z9Vhf06Ah9iXwzLsR5t7LzOP6GrqxPgDi79TeOJFqg4ysYYTd6THrdOKiAzNtjUv1E-69uza-YaicpVNlUEq6py1g3Z9jx2mRVc9tPJzOBkHHqRYRXr302EanjpamebcLz0YEk7TSre"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">EdTech Platform</span>
              <h3 className="text-2xl font-bold text-white mb-3">Tutors Kushtia</h3>
              <p className="text-slate-400 text-sm sm:text-base mb-6 flex-grow leading-relaxed">
                A comprehensive digital ecosystem connecting thousands of students with verified educators with real-time scheduling and secure verification.
              </p>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                <span>View Case Study</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.15 }}
            className="bg-[#0a0f24]/70 rounded-3xl overflow-hidden border border-white/10 flex flex-col hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all duration-300 group"
          >
            <div className="relative overflow-hidden aspect-[16/9]">
              <img alt="Anti Dopamine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAktAzyLsv4V3WIcFMWxRfLCIvW7UP9Gcrfsz7WVXqE_GJgcqSyesmOKCewCsvLBYuzCBu3h-RNYQ6QUGjZyX8KJH7PsppyAcdj0bpWmGVl6aBws4ZVO-DqW2kamE_UXXXXO-e5_oguafewk-Y43ahv_GxRL5yHpXf26K5XZRCpibB-unNoi7Uj_pghmdPkdn08nIqNZOlXXjdZjzzp7uOjdx55P7K6iAkBQ4_Plq-CDFnFKiqUagmoBBZKYy_CPgifb38ahl6pqN8e"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">Digital Wellness Tool</span>
              <h3 className="text-2xl font-bold text-white mb-3">Anti Dopamine</h3>
              <p className="text-slate-400 text-sm sm:text-base mb-6 flex-grow leading-relaxed">
                A behavioral mindfulness tool designed to optimize focus, eliminate doom-scrolling, and improve cognitive productivity.
              </p>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                <span>View Case Study</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <section className="max-w-5xl mx-4 sm:mx-6 lg:mx-auto my-20 md:my-32 relative z-10">
        <div className="bg-gradient-to-br from-[#0c1432] via-[#080d20] to-[#050814] border-2 border-blue-500/30 rounded-[2.5rem] p-8 sm:p-14 md:p-20 text-center flex flex-col items-center relative overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.25)]">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-4 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full relative z-10">
            <span>&lt;/&gt; READY TO ACCELERATE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight relative z-10">
            Ready to scale your business?
          </h2>
          <p className="text-lg sm:text-xl mt-6 text-slate-300 max-w-2xl relative z-10">
            Let's engineer something extraordinary together. From Kushtia to global deployment.
          </p>

          <Link 
            href="/contact" 
            className="mt-10 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-bold px-10 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] transition-all duration-300 border border-blue-400/40 relative z-10 text-base"
          >
            Start Your Project With Us &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
