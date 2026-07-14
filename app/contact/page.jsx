'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [btnText, setBtnText] = useState('Send Message');
  const [btnClass, setBtnClass] = useState('bg-primary-container text-on-primary-container');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const originalText = 'Send Message';
    setBtnText('Sending...');
    setBtnClass('bg-primary-container text-on-primary-container opacity-80');

    setTimeout(() => {
        setBtnText('Message Sent');
        setBtnClass('bg-tertiary text-on-tertiary');
        setTimeout(() => {
            setBtnText(originalText);
            setBtnClass('bg-primary-container text-on-primary-container');
            setIsSubmitting(false);
            e.target.reset();
        }, 3000);
    }, 1500);
  };

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-secondary-container/10 blur-[100px]"></div>
      </div>

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full bg-surface/50 dark:bg-surface/50 backdrop-blur-md border border-white/10 shadow-xl z-50 flex justify-between items-center px-8 py-4">
        <div className="text-headline-lg-mobile font-headline-lg-mobile font-bold text-on-surface dark:text-on-surface">
            T.S.S. Soft.
        </div>
        <div className="hidden md:flex items-center space-x-8 font-body-md text-body-md">
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/">Home</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/about">About</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/services">Services</a>
          <a className="text-on-surface-variant hover:text-on-surface hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-all duration-300" href="/portfolio">Portfolio</a>
        </div>
        <a className="text-primary font-bold border-b-2 border-primary pb-1 hover:bg-white/10 hover:backdrop-blur-lg px-4 py-2 rounded-full transition-transform duration-200 hover:scale-95 text-primary dark:text-primary font-body-md text-body-md" href="/contact">
            Contact
        </a>
      </nav>

      <main className="flex-grow relative z-10 pt-24 pb-8 md:pt-40 md:pb-16 min-h-screen">
        <section className="max-w-7xl mx-auto px-container-padding text-center md:text-left mb-12 md:mb-section-gap">
          <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface max-w-4xl">
              Let's Build Something <span className="text-primary">Extraordinary.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-2xl">
              Whether you have a fully scoped project or just a spark of an idea, we would love to hear from you.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-container-padding grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
          <div className="space-y-12">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Get in Touch</h2>
            <div className="space-y-8">
              <div className="group cursor-pointer">
                <p className="font-label-caps text-label-caps text-outline uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">Email</p>
                <p className="font-body-lg text-body-lg text-on-surface text-2xl font-medium">hello@tsssoft.com</p>
              </div>
              <div className="group cursor-pointer">
                <p className="font-label-caps text-label-caps text-outline uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">Location</p>
                <p className="font-body-lg text-body-lg text-on-surface text-2xl font-medium">Kushtia, Bangladesh</p>
              </div>
              <div className="group cursor-pointer">
                <p className="font-label-caps text-label-caps text-outline uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">Phone</p>
                <p className="font-body-lg text-body-lg text-on-surface text-2xl font-medium">+880 1XXX-XXXXXX</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 font-body-md text-body-md">
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="name">Full Name</label>
                <input className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="name" name="name" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="email">Email Address</label>
                <input className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="email" name="email" placeholder="john@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="service">Service Interest</label>
                <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-on-surface appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="service" name="service">
                  <option className="text-surface" disabled value="">Select a service</option>
                  <option className="bg-surface text-on-surface" value="enterprise">Enterprise Software</option>
                  <option className="bg-surface text-on-surface" value="web">Web Architecture</option>
                  <option className="bg-surface text-on-surface" value="mobile">Mobile Solutions</option>
                  <option className="bg-surface text-on-surface" value="consulting">Technical Consulting</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="message">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-on-surface placeholder:text-outline-variant resize-none focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" id="message" name="message" placeholder="Tell us about your project..." rows="4"></textarea>
              </div>
              <button className={`w-full font-body-md text-body-md font-semibold rounded-full py-4 px-8 hover:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] mt-4 ${btnClass}`} type="submit" disabled={isSubmitting}>
                  {btnText}
              </button>
            </form>
          </div>
        </section>
      </main>

      
    </>
  );
}
