'use client';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const blogs = [
    { category: "Engineering", title: "Scaling Next.js for Enterprise" },
    { category: "Design", title: "The Art of Glassmorphism in UI" },
    { category: "Mobile", title: "Flutter Architecture Best Practices" },
    { category: "Backend", title: "Microservices vs Monolith in 2026" },
    { category: "Culture", title: "Building a Tech Team in Kushtia" },
    { category: "AI", title: "Integrating LLMs into your SaaS" },
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
        <section className="pt-32 md:pt-40 pb-12 md:pb-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Engineering Insights.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
            Deep dives into modern tech, architecture, and design by the T.S.S. Soft team.
          </p>
        </section>

        <section className="max-w-7xl mx-auto pb-16 px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300 group flex flex-col"
              >
                <div className="h-56 bg-slate-800 w-full relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-blue-500 text-xs font-bold mb-3 uppercase tracking-wider">{blog.category}</span>
                  <h2 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{blog.title}</h2>
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <a href="#" className="inline-flex items-center text-slate-300 font-semibold hover:text-white transition-colors">
                      Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      
    </>
  );
}
