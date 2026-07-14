'use client';
import { motion } from 'framer-motion';

export default function CareersPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const jobs = [
    { title: "Senior Flutter Developer", type: "Full-time • Remote/Kushtia" },
    { title: "Next.js Frontend Engineer", type: "Full-time • Remote/Kushtia" },
    { title: "UI/UX Designer", type: "Full-time • Remote/Kushtia" },
  ];

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

      <main className="flex-grow min-h-screen">
        <section className="pt-32 md:pt-40 pb-12 md:pb-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Build the Future in Kushtia.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
            Join our team of elite engineers and designers at T.S.S. Soft.
          </p>
        </section>

        <section className="max-w-5xl mx-auto pb-16 px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-6"
          >
            {jobs.map((job, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-blue-500/50 transition duration-300 group"
              >
                <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold text-white mb-2">{job.title}</h2>
                  <span className="text-blue-500 text-sm font-semibold">{job.type}</span>
                </div>
                <button className="border border-slate-600 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors w-full md:w-auto font-semibold">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      
    </>
  );
}
