'use client';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <>
      <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full bg-surface/50 dark:bg-surface/50 font-body-md text-body-md backdrop-blur-md border border-white/10 shadow-xl justify-between items-center px-8 py-4 z-50 transition-all duration-300">
        <div className="text-headline-lg-mobile font-headline-lg-mobile font-bold text-on-surface dark:text-on-surface">
            T.S.S. Soft.
        </div>
        <ul className="flex space-x-8 items-center">
          <li>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full" href="/">Home</a>
          </li>
          <li>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full" href="/about">About</a>
          </li>
          <li>
            <a className="text-primary font-bold border-b-2 border-primary pb-1 hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full active:scale-95 transition-transform duration-200" href="/services">Services</a>
          </li>
          <li>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full" href="/portfolio">Portfolio</a>
          </li>
        </ul>
        <a href="/contact" className="bg-primary-container text-on-primary-container hover:bg-white/10 hover:backdrop-blur-lg transition-all duration-200 px-6 py-2 rounded-full font-semibold">
            Contact
        </a>
      </nav>

      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-full bg-surface/80 backdrop-blur-md border border-white/10 shadow-xl z-50 flex justify-around items-center py-3 px-4">
        <a className="flex flex-col items-center text-on-surface-variant p-2" href="/">
          <span className="material-symbols-outlined text-2xl">home</span>
          <span className="text-[10px] mt-1 font-medium">Home</span>
        </a>
        <a className="flex flex-col items-center text-on-surface-variant p-2" href="/about">
          <span className="material-symbols-outlined text-2xl">info</span>
          <span className="text-[10px] mt-1 font-medium">About</span>
        </a>
        <a className="flex flex-col items-center text-primary p-2" href="/services">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
          <span className="text-[10px] mt-1 font-bold">Services</span>
        </a>
        <a className="flex flex-col items-center text-on-surface-variant p-2" href="/portfolio">
          <span className="material-symbols-outlined text-2xl">grid_view</span>
          <span className="text-[10px] mt-1 font-medium">Portfolio</span>
        </a>
      </nav>

      <main className="w-full">
        <section className="pt-24 pb-12 md:pt-40 md:pb-20 px-container-padding flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto z-10">
            <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-6">
                World-Class Engineering. Tailored Solutions.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
                From cross-platform mobile apps to scalable web platforms, we build digital products that drive your business forward.
            </p>
          </div>
        </section>

        <section className="py-section-gap px-container-padding max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-label-caps text-label-caps text-primary uppercase">
                  ANDROID &amp; IOS
              </span>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                  Cross-Platform Mobile Applications
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                  We engineer robust, high-performance mobile applications using cutting-edge frameworks like Flutter and React Native, alongside native Swift and Kotlin technologies. Our approach ensures a seamless, native-feeling experience across all devices while significantly reducing time-to-market.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-3 mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface">Immersive UI/UX Design</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-3 mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface">Robust API Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-3 mt-1">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface">End-to-End App Store Deployment</span>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden backdrop-blur-md border border-white/10 bg-white/5 p-6 flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
              <img className="w-full h-full object-cover rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105" alt="Mobile App Development" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsfS4TKGC3KNoTQXsDTbSkJ1dbWglPwikqDwv-wobRYt_jhvcrXBUma-fvEfSoMLpYdAXVe5B3iHLPkBYHBaOeiB9SiX7AuTvIpAeB_u7NfGVkNMGFoqD-Zskrl-4Qzlu5liI33ga_I0Q4ETd0nyo0RukjhkFMEWqDcDL1FwdOaVXx861diCSCPJMgBW1FBUiy5inb7xLH_xW8qbtF8ApxTE4uDLS-7E6VMdBOOVmAifphI65xqHpus_CHIC6dqYLzqfe1Zwehlab9"/>
            </div>
          </motion.div>
        </section>

        <section className="py-section-gap px-container-padding max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="order-2 lg:order-1 relative w-full h-[500px] rounded-xl overflow-hidden backdrop-blur-md border border-white/10 bg-white/5 p-6 flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent opacity-50"></div>
              <img className="w-full h-full object-cover rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105" alt="Web Application Development" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4ZFZ7ZMun1XzMcdT5xtTTmXQPiIKv2pGOAz7__FMnKeHCQJe2EpRsjOxkmmAaCz-YXrDRVfirBg1MJIYpd0STIdgGFhaxjqAhdWh804gj2tRnMZIpq-GV4akGKc1zwl5mOi2Di8PWSZafZKHANs3B17N_k4hdZIEG2vdUL7fNyKC94Ax8Ajjlc-89ONSyLWBEcluhx5v4yXPAV7lFSIEL9dXy8HcwU3jXctZHb1mDJnsvYMmrCCzH9T9VwhFnX0u7lBRsrm2YbGqP"/>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-label-caps text-label-caps text-primary uppercase">
                  MODERN WEB
              </span>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                  Scalable Web Platforms
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                  Leveraging modern architectures and frameworks like Next.js, React, and Node.js, we architect high-performance, SEO-optimized web applications designed for scale. Our web platforms are built to handle intensive data loads while providing incredibly fast, responsive user experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="material-symbols-outlined text-primary mb-2 text-3xl">speed</span>
                  <h4 className="font-bold text-on-surface">High Performance</h4>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="material-symbols-outlined text-primary mb-2 text-3xl">security</span>
                  <h4 className="font-bold text-on-surface">Enterprise Security</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="py-section-gap px-container-padding max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-label-caps text-label-caps text-primary uppercase">
                  ENTERPRISE
              </span>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                  Custom Business Software
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                  We design and develop bespoke software solutions, sophisticated SaaS products, and robust backend architectures tailored to your exact operational requirements. Our enterprise solutions streamline complex workflows, integrate disparate systems, and provide a secure foundation for sustainable growth.
              </p>
              <button className="mt-4 flex items-center text-primary font-semibold hover:text-white transition-colors group">
                  Explore Architecture Capabilities
                  <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden backdrop-blur-md border border-white/10 bg-white/5 p-6 flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-bl from-tertiary/10 to-transparent opacity-50"></div>
              <img className="w-full h-full object-cover rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105" alt="Custom Software Solutions" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOlf9WCWlAf8MKUq8CjzdnlJaxQdRPgEgIVRs6IOLuweZCNnlqc30w6fX3mEl2UdAV13rj4Bz1XNawuV8t6lQV8i_31P7obdDVVDDeeI9wEzmlnlgM1VQi3xiRx-V_cFiQmqT5ErLhbByNWu-JCSbA_BDeSAsuJ60AjA1EJVLjThXj-OBKbUrX54OpcVW59280wc_GQy9IW_bavW5bbzP-HJabOeYp4_6myFWwXHoobag9ZLoEGXDcLWyO1vmeCCjtvAVoSqT99anz"/>
            </div>
          </motion.div>
        </section>

        <section className="py-12 md:py-20 px-container-padding">
          <div className="max-w-5xl mx-auto relative rounded-xl overflow-hidden p-6 md:p-12 text-center backdrop-blur-md bg-primary-container/10 border border-primary/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/20 via-transparent to-primary-container/20 pointer-events-none"></div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface relative z-10 mb-8">
                Have a unique idea?
            </h2>
            <button className="relative z-10 bg-primary-container text-on-primary-container hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-300 px-8 py-4 rounded-full font-bold shadow-lg shadow-primary-container/30 hover:shadow-primary-container/50 transform hover:-translate-y-1">
                Talk to Our Engineers
            </button>
          </div>
        </section>
      </main>

      
    </>
  );
}
