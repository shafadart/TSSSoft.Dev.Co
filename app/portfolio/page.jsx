'use client';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full z-50 bg-surface/50 backdrop-blur-md border border-white/10 shadow-xl flex justify-between items-center px-8 py-4 transition-transform duration-200">
        <div className="text-headline-lg-mobile font-headline-lg-mobile font-bold text-on-surface">
            T.S.S. Soft.
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md" href="/">Home</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md" href="/about">About</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md text-body-md" href="/services">Services</a>
          <a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="/portfolio">Portfolio</a>
        </nav>
        <a href="/contact" className="bg-primary text-on-primary rounded-full px-6 py-2 font-semibold hover:bg-white/10 hover:backdrop-blur-lg transition-colors font-body-md text-body-md hidden md:block border border-white/10">
            Contact
        </a>
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      <main className="flex-grow">
        <section className="pt-24 pb-8 md:pt-40 md:pb-16 max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-background mb-6">
              Selected Masterpieces.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
              A curated collection of mobile applications, digital platforms, and software solutions engineered by T.S.S. Soft.
          </p>
        </section>

        <section className="py-8 md:py-16 max-w-7xl mx-auto px-container-padding">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-surface-container-high/20 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row backdrop-blur-md shadow-2xl hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="w-full lg:w-3/5 bg-surface-container flex items-center justify-center overflow-hidden min-h-[24rem]">
              <img className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt="Tutors Kushtia" src="https://lh3.googleusercontent.com/aida/AP1WRLvh0sROD2UE6okz6Gb2G7n7l15A1ALz20VAZ7Lb1BYopaycCOFvzj651A82ZdBTvtY46kPVONMJdXHVAyE3IDTcXdwVpNRAxBjD7uJXcIfzsl9kzziwqzU1wuQoeBgPK3MxuWK-BZde4MBv9Yvj4iS2vSYATZDadv71eMM8Ta0NJzRmawibjJ5sBtbQ4rpt6LHiCAFvZsdnx_tGDKp4tg5WN5wjzdmNWYMY3_Pnvcyuu8qhSgkOdwWb12Q"/>
            </div>
            <div className="w-full lg:w-2/5 p-12 lg:p-16 flex flex-col justify-center">
              <span className="font-label-caps text-label-caps text-primary tracking-widest mb-4">ED-TECH PLATFORM</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">Tutors Kushtia</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  A comprehensive digital platform connecting students and educators with smart matching algorithms and secure profiles.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-surface-bright/50 border border-white/10 px-4 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface">Next.js</span>
                <span className="bg-surface-bright/50 border border-white/10 px-4 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface">Tailwind</span>
                <span className="bg-surface-bright/50 border border-white/10 px-4 py-1.5 rounded-full font-label-caps text-label-caps text-on-surface">Firebase</span>
              </div>
              <a className="inline-flex items-center text-primary hover:text-primary-fixed transition-colors font-body-md text-body-md font-semibold w-max group" href="#">
                  View Case Study 
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </motion.div>
        </section>

        <section className="py-8 md:py-16 max-w-7xl mx-auto px-container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-bento-gap">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-surface-container-high/10 border border-white/10 rounded-3xl overflow-hidden flex flex-col backdrop-blur-sm hover:bg-surface-container-high/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-72 bg-surface-container overflow-hidden">
                <img className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500" alt="Anti Dopamine" src="https://lh3.googleusercontent.com/aida/AP1WRLvv3MGzV8LcsgQbW_dlfZ8pWBqsDupM0i86XUA9XqVtC2r-ARFVKVpc8jXzPCzVPTwkyIxYV4wUcjllzGs3IQiygw86zb4R9HZwJw1jOxCZkmB_BBHF_SOxcazRugYQbF-QqlWE05DvaGNQ-xmSO2_EBcYO72Ob_YzCFDNhzCs53RM_khgh9khFuE1zIJGaSRPDQaCxnRK8xPh3lbVRge5BAz9n8w2irDdh8q5got1Omjnnmtu93hRcKOw"/>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <span className="font-label-caps text-label-caps text-primary tracking-widest mb-3">COMMERCIAL APP</span>
                <h3 className="font-headline-lg text-headline-lg-mobile text-on-background mb-3">Anti Dopamine</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                    A military-grade phone detox app with offline cryptographic unlocking.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-surface-container-high/10 border border-white/10 rounded-3xl overflow-hidden flex flex-col backdrop-blur-sm hover:bg-surface-container-high/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-72 bg-surface-container overflow-hidden relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfPlpW4LXSg0wz5Iik1f6IRiorWnJEDUIraD_ZU27XhE2lsixGOwfMPNmgXnnue8gpSyicYXSWDvfZ2b_0YCQfs3TIe9jNaiDQx1lGjMKkeNx9gDXwLZSa5TIttPyIcia-AyGToto0AGKy0JZAWsd4Z1mDKGkL4aFZficujQZGr8kYXYCdiE2binuJMIN07hGKyCRi55tCobDLcm02u1dbi9PPtPWsHU33uxznI6eMmM1Do96waVDmK9bE4qHCFcKVX4c58L5tro4r')", backgroundSize: "cover" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <span className="font-label-caps text-label-caps text-primary tracking-widest mb-3">FULL-STACK SAAS</span>
                <h3 className="font-headline-lg text-headline-lg-mobile text-on-background mb-3">ShohojBebsha</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                    An all-in-one comprehensive business management SaaS platform designed for local enterprises.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-8 md:py-16 text-center max-w-7xl mx-auto px-container-padding mb-8 md:mb-section-gap">
          <button className="px-8 py-4 rounded-full border border-outline-variant text-on-background font-body-md text-body-md font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              View All Projects
          </button>
        </section>
      </main>

      
    </>
  );
}
