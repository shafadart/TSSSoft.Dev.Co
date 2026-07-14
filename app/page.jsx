'use client';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Palette, Cloud, Calendar } from 'lucide-react';

export default function LandingPage() {
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10 shadow-xl z-50 flex justify-between items-center px-8 py-4">
        <div className="text-headline-lg-mobile font-headline-lg-mobile font-bold text-on-surface dark:text-on-surface">T.S.S. Soft.</div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-body-md text-body-md text-primary font-bold border-b-2 border-primary pb-1 hover:bg-white/10 hover:backdrop-blur-lg scale-95 transition-transform duration-200" href="/">Home</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-lg" href="/about">About</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-lg" href="/services">Services</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-lg" href="/portfolio">Portfolio</a>
        </div>
        <a className="hidden md:inline-flex bg-primary-container text-white px-6 py-2 rounded-full font-body-md font-semibold hover:bg-primary-container/90 transition-colors border border-white/10 backdrop-blur-md" href="/contact">Contact</a>
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center px-container-padding py-16 md:py-32 mt-16 text-center max-w-7xl mx-auto relative z-10">
        {/* Radial Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2, delayChildren: 1.2 } }
          }}
          className="flex flex-col items-center w-full"
        >
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="font-display-xl-mobile text-display-xl-mobile md:font-display-xl md:text-display-xl max-w-4xl mx-auto mb-6"
          >
            Crafting the Future of <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-primary to-inverse-primary bg-clip-text text-transparent">Digital Experiences</span>
          </motion.h1>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10"
          >
            We blend the structural reliability of enterprise software with the forward-thinking agility of a boutique agency to build sophisticated, high-performance solutions.
          </motion.p>
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
          <a href="/services" className="bg-primary-container text-white px-8 py-3 rounded-full font-body-md font-semibold hover:bg-primary-container/90 transition-colors shadow-lg">Our Services</a>
          <a href="/contact" className="border border-white/10 text-on-surface px-8 py-3 rounded-full font-body-md font-semibold backdrop-blur-md bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center">Start a Project</a>
          </motion.div>
        </motion.div>

        <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/10 w-full flex justify-center gap-16 md:gap-32 flex-wrap">
          <div className="text-center">
            <div className="font-headline-lg text-headline-lg font-bold text-on-surface">3+</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-2">Founders</div>
          </div>
          <div className="text-center">
            <div className="font-headline-lg text-headline-lg font-bold text-on-surface">2+</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-2">Years Target</div>
          </div>
          <div className="text-center">
            <div className="font-headline-lg text-headline-lg font-bold text-on-surface">100%</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-2">Quality</div>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-container-padding max-w-7xl mx-auto relative z-10">
        <h2 className="font-headline-lg text-headline-lg mb-16 text-center">Services That Drive Growth</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-slate-900/40 border border-white/10 p-10 rounded-3xl backdrop-blur-xl flex flex-col justify-between h-full col-span-1 md:col-span-1 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div>
              <Smartphone className="text-primary w-10 h-10 mb-6" strokeWidth={1.5} />
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4">Mobile App Development</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Native and cross-platform solutions engineered for seamless performance and engaging user journeys.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-slate-900/40 border border-white/10 p-10 rounded-3xl backdrop-blur-xl flex flex-col justify-between h-full col-span-1 md:col-span-2 relative overflow-hidden hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <Globe className="text-primary w-10 h-10 mb-6" strokeWidth={1.5} />
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4">Web Development</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">Scalable, secure, and lightning-fast web architectures built on modern stacks. We create digital platforms that handle enterprise loads with boutique grace.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-slate-900/40 border border-white/10 p-10 rounded-3xl backdrop-blur-xl flex flex-col justify-between h-full col-span-1 md:col-span-2 relative overflow-hidden hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <Palette className="text-primary w-10 h-10 mb-6" strokeWidth={1.5} />
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4">UI/UX Design</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">High-end minimalist interfaces focused on cognitive ease. We design systems that look ethereal but function with brutal efficiency.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-slate-900/40 border border-white/10 p-10 rounded-3xl backdrop-blur-xl flex flex-col justify-between h-full col-span-1 md:col-span-1 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div>
              <Cloud className="text-primary w-10 h-10 mb-6" strokeWidth={1.5} />
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4">Cloud Infrastructure</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Robust backend deployments designed for scale and zero downtime.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-section-gap px-container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-8 leading-tight">Born in Kushtia, <br/>Built for the World</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              T.S.S. Soft. represents a new generation of technical execution. We believe that true sophistication lies in simplicity—stripping away the unnecessary to reveal clear, focused, and powerful digital tools.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our leadership brings together diverse expertise to ensure every project is not only visually striking but architecturally sound.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-surface-container-high border border-outline-variant p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-4 overflow-hidden border border-white/10">
                <img className="w-full h-full object-cover grayscale opacity-90" alt="K. M. Tahsin Ahmmed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOBvbeVx8_y1b9JM8S5nSVqUhkVpqVLsVZmUvjzJSjdOkPk4ohVuqsKxvZ9H2NMre6RfqcI0mfiYe-vl2fqNBClkarfndvRX6YWNsNDsz7ezBPLUoQdmEdUkXCQB18k5DLPx7AGKDrL4uCMJd9_qrvBYV9NonGTXq1eTITgUXO6GcvLuupxswzdru_D-YRYK_q8CM4SeQvsBTzAz5tjFEasOjLEFIhLDtzyKeRghvLMe9khtwNTRvZfk3ExLXcGGQcYQZK8g0opfy" />
              </div>
              <h4 className="font-body-lg text-body-lg font-semibold text-on-surface">K. M. Tahsin Ahmmed</h4>
              <span className="font-label-caps text-label-caps text-on-surface-variant mt-2">CEO</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-surface-container-high border border-outline-variant p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-4 overflow-hidden border border-white/10">
                <img className="w-full h-full object-cover grayscale opacity-90" alt="MD. Shafaur Rahman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1jGyk7Fmz9ZOWMZbCSC6hYNB46sC-bFh673dESBaLXux_iRZOZFXuviXSEonIolW257IrAsOnr05XaV_sqK4UmQnYy70A6dIvmlwNorF_Ay_26hUN0b26iktGwauUdc3SwRayvULAUFePvUvzrmohspmrmJrvQ-oj-XipIFj-pFy174nv2emgQz7F7ep1e44XSTWMszDCoiKkjGR9ZV1R7nx2717Fw8JoQDkGlKI-OzSY2t8EcXULe3GrPwUd9HMctP-_uqjvQD7n" />
              </div>
              <h4 className="font-body-lg text-body-lg font-semibold text-on-surface">MD. Shafaur Rahman</h4>
              <span className="font-label-caps text-label-caps text-on-surface-variant mt-2">COO</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-surface-container-high border border-outline-variant p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-4 overflow-hidden border border-white/10">
                <img className="w-full h-full object-cover grayscale opacity-90" alt="Mohammad Sawon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-qdYYPwcX-TuXtghJu4S45Y_QlMi6gZFN3Wvi7u_6PEuKpP0K3i-96hwGncjILSudrABjLHBt7YVoruPxh7gJT7rT1LyoYVOGoCcpH1se7xQzgSeE9x5FyaQEP3Zerc2l6gK23wkavtYdbi9V6fPp6dMbseYALKbo5h8y2x_D6l8heYr2MQblE0ynOr-niFxYgLrlydgo9OahsxMRSOnGa7KHzZockqv8anKxCOFw4YnaivuuxsHP-uMcGyace323f1g-NIWo4SUm" />
              </div>
              <h4 className="font-body-lg text-body-lg font-semibold text-on-surface">Mohammad Sawon</h4>
              <span className="font-label-caps text-label-caps text-on-surface-variant mt-2">CMO</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-surface-container-high border border-outline-variant p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:bg-white/5 transition-colors duration-300">
              <Calendar className="text-primary w-10 h-10 mb-3" strokeWidth={1.5} />
              <h4 className="font-body-md text-body-md font-semibold text-on-surface">Founded</h4>
              <span className="font-label-caps text-label-caps text-primary mt-1">July 16, 2025</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 max-w-7xl mx-auto px-4 relative z-10" id="projects">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center font-display-xl">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-slate-900/50 rounded-3xl overflow-hidden border border-white/10 flex flex-col hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <img alt="Tutors Kushtia" className="w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVZYso5zhowu7yT_E-_ToLB1TYRgY-avJDxlRfJ_PEui1z7VEFfdZsvVftxe6tTm4gBoVnSnV4zeC2f12rlxP5wCZgiKb9SS0dPxnSIOXGVbToNbq9-bmZfdSLdEEzPzdH3Z9Vhf06Ah9iXwzLsR5t7LzOP6GrqxPgDi79TeOJFqg4ysYYTd6THrdOKiAzNtjUv1E-69uza-YaicpVNlUEq6py1g3Z9jx2mRVc9tPJzOBkHHqRYRXr302EanjpamebcLz0YEk7TSre"/>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 font-headline-lg-mobile">Tutors Kushtia</h3>
              <p className="text-slate-400 mb-6 flex-grow">A comprehensive platform connecting students with expert educators in the local community.</p>
              <a className="text-blue-400 font-semibold hover:text-blue-300 transition-colors" href="#">View Case Study →</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-slate-900/50 rounded-3xl overflow-hidden border border-white/10 flex flex-col hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <img alt="Anti Dopamine" className="w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAktAzyLsv4V3WIcFMWxRfLCIvW7UP9Gcrfsz7WVXqE_GJgcqSyesmOKCewCsvLBYuzCBu3h-RNYQ6QUGjZyX8KJH7PsppyAcdj0bpWmGVl6aBws4ZVO-DqW2kamE_UXXXXO-e5_oguafewk-Y43ahv_GxRL5yHpXf26K5XZRCpibB-unNoi7Uj_pghmdPkdn08nIqNZOlXXjdZjzzp7uOjdx55P7K6iAkBQ4_Plq-CDFnFKiqUagmoBBZKYy_CPgifb38ahl6pqN8e"/>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 font-headline-lg-mobile">Anti Dopamine</h3>
              <p className="text-slate-400 mb-6 flex-grow">A digital wellness tool designed to help users reclaim their focus and reduce screen addiction.</p>
              <a className="text-blue-400 font-semibold hover:text-blue-300 transition-colors" href="#">View Case Study →</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto bg-slate-900/80 backdrop-blur-xl border-2 border-primary/30 rounded-[2rem] p-8 md:p-16 text-center flex flex-col items-center my-16 md:my-32 relative z-10 mx-4 lg:mx-auto shadow-[0_0_50px_rgba(59,130,246,0.15)]">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-display-xl">Ready to scale your business?</h2>
        <p className="text-xl mt-6 text-slate-300">Let's build something extraordinary together.</p>
        <a className="bg-primary text-on-primary font-bold px-10 py-4 rounded-full mt-10 hover:scale-105 hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300" href="/contact">Contact Us</a>
      </section>


    </>
  );
}
