'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full backdrop-blur-md border border-white/10 shadow-xl bg-surface/50 dark:bg-surface/50 z-50 flex justify-between items-center px-8 py-4">
        <a className="text-headline-lg-mobile font-headline-lg-mobile font-bold text-on-surface dark:text-on-surface tracking-tight" href="/">T.S.S. Soft.</a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full" href="/">Home</a>
          <a className="text-primary font-bold border-b-2 border-primary pb-1 px-4 py-2 hover:bg-white/10 hover:backdrop-blur-lg rounded-full" href="/about">About</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full" href="/services">Services</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full" href="/portfolio">Portfolio</a>
        </div>
        <a className="hidden md:inline-flex items-center justify-center bg-primary-container text-on-primary-container font-label-caps text-label-caps rounded-full px-6 py-3 hover:scale-95 transition-transform duration-200" href="/contact">
          Contact
        </a>
        <button className="md:hidden text-on-surface p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      <main className="flex-grow pt-20 md:pt-32">
        <section className="pt-24 pb-12 md:pt-40 md:pb-20 max-w-4xl mx-auto px-container-padding text-center">
          <h1 className="font-display-xl-mobile text-display-xl-mobile md:font-display-xl md:text-display-xl text-on-surface mb-6">Built in Kushtia.<br/>Engineered for the World.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">We are T.S.S. Soft. Dev. Co. — A team of passionate technologists on a mission to become the top software company in Bangladesh.</p>
        </section>

        <section className="py-section-gap max-w-4xl mx-auto px-container-padding">
          <div className="relative border-l-2 border-primary/50 ml-4 md:ml-0 md:pl-12 space-y-16 before:absolute before:inset-0 before:ml-[-1px] before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
            <div className="relative pl-8 md:pl-0">
              <div className="absolute left-[-41px] md:left-[-57px] top-1 h-4 w-4 rounded-full bg-surface border-2 border-primary ring-4 ring-surface"></div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2">May 06, 2025 - The Inception</h3>
              <p className="text-on-surface-variant font-body-lg text-body-lg">The idea was born and the agency was named using the first letters of our founders: Tahsin, Shafaur, and Sawon.</p>
            </div>
            <div className="relative pl-8 md:pl-0">
              <div className="absolute left-[-41px] md:left-[-57px] top-1 h-4 w-4 rounded-full bg-surface border-2 border-primary ring-4 ring-surface"></div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2">July 16, 2025 - The Foundation</h3>
              <p className="text-on-surface-variant font-body-lg text-body-lg">Official agency agreement signed. We united our visions to build high-performance software, mobile applications, and web platforms.</p>
            </div>
          </div>
        </section>

        <section className="py-section-gap max-w-7xl mx-auto px-container-padding">
          <h2 className="font-headline-lg text-headline-lg text-center mb-16">The Minds Behind The Code</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-bento-gap">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white/5 border border-white/10 rounded-xl p-10 text-center backdrop-blur-md hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <div className="w-32 h-32 mx-auto rounded-full bg-surface-container-high mb-6 overflow-hidden">
                <img className="w-full h-full object-cover" alt="K. M. Tahsin Ahmmed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOBvbeVx8_y1b9JM8S5nSVqUhkVpqVLsVZmUvjzJSjdOkPk4ohVuqsKxvZ9H2NMre6RfqcI0mfiYe-vl2fqNBClkarfndvRX6YWNsNDsz7ezBPLUoQdmEdUkXCQB18k5DLPx7AGKDrL4uCMJd9_qrvBYV9NonGTXq1eTITgUXO6GcvLuupxswzdru_D-YRYK_q8CM4SeQvsBTzAz5tjFEasOjLEFIhLDtzyKeRghvLMe9khtwNTRvZfk3ExLXcGGQcYQZK8g0opfy"/>
              </div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-1">K. M. Tahsin Ahmmed</h3>
              <p className="font-label-caps text-label-caps text-primary mb-4">CEO</p>
              <p className="text-on-surface-variant">Leading the strategic vision and driving enterprise growth with a relentless focus on innovation.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white/5 border border-white/10 rounded-xl p-10 text-center backdrop-blur-md hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <div className="w-32 h-32 mx-auto rounded-full bg-surface-container-high mb-6 overflow-hidden">
                <img className="w-full h-full object-cover" alt="MD. Shafaur Rahman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1jGyk7Fmz9ZOWMZbCSC6hYNB46sC-bFh673dESBaLXux_iRZOZFXuviXSEonIolW257IrAsOnr05XaV_sqK4UmQnYy70A6dIvmlwNorF_Ay_26hUN0b26iktGwauUdc3SwRayvULAUFePvUvzrmohspmrmJrvQ-oj-XipIFj-pFy174nv2emgQz7F7ep1e44XSTWMszDCoiKkjGR9ZV1R7nx2717Fw8JoQDkGlKI-OzSY2t8EcXULe3GrPwUd9HMctP-_uqjvQD7n"/>
              </div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-1">MD. Shafaur Rahman</h3>
              <p className="font-label-caps text-label-caps text-primary mb-4">COO</p>
              <p className="text-on-surface-variant">Architecting operational excellence and ensuring flawless execution across all technical deliveries.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-white/5 border border-white/10 rounded-xl p-10 text-center backdrop-blur-md hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <div className="w-32 h-32 mx-auto rounded-full bg-surface-container-high mb-6 overflow-hidden">
                <img className="w-full h-full object-cover" alt="Mohammad Sawon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-qdYYPwcX-TuXtghJu4S45Y_QlMi6gZFN3Wvi7u_6PEuKpP0K3i-96hwGncjILSudrABjLHBt7YVoruPxh7gJT7rT1LyoYVOGoCcpH1se7xQzgSeE9x5FyaQEP3Zerc2l6gK23wkavtYdbi9V6fPp6dMbseYALKbo5h8y2x_D6l8heYr2MQblE0ynOr-niFxYgLrlydgo9OahsxMRSOnGa7KHzZockqv8anKxCOFw4YnaivuuxsHP-uMcGyace323f1g-NIWo4SUm"/>
              </div>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-1">Mohammad Sawon</h3>
              <p className="font-label-caps text-label-caps text-primary mb-4">CMO</p>
              <p className="text-on-surface-variant">Crafting our global narrative and connecting our high-performance solutions with industry leaders.</p>
            </motion.div>
          </div>
        </section>
      </main>

      
    </>
  );
}
