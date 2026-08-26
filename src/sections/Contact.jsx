import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PaperPlaneRight, EnvelopeSimple, MapPin, LinkedinLogo, GithubLogo, InstagramLogo, CheckCircle, XCircle } from '@phosphor-icons/react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult({ type: 'loading', text: 'Sending...' });
    
    const formData = new FormData(event.target);
    formData.append("access_key", "e1157faf-1bc8-4c7c-a4b8-2a60b4df5d65");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setResult({ type: 'success', text: "Message sent successfully!" });
        event.target.reset();
      } else {
        setResult({ type: 'error', text: "Failed to send: " + res.message });
      }
    } catch (error) {
      setResult({ type: 'error', text: "An error occurred. Please try again." });
    }
    
    setIsSubmitting(false);
    setTimeout(() => setResult(""), 5000); // Clear message after 5 seconds
  };

  return (
    <section id="contact" className="pt-8 pb-6 md:pb-16 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Centered Heading and Subtitle */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="flex flex-col items-center text-center mb-8 md:mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Let's Work Together
        </h2>
        <p className="text-base text-white/50 font-light max-w-xl">
          Available for selected freelance opportunities and agency collaborations.
        </p>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Information / Description */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="lg:col-span-5 flex flex-col pt-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
            Get in touch
          </h3>
          
          <p className="text-white/60 font-light leading-relaxed mb-8 text-sm md:text-base">
            I'm always open to discussing product design work or partnership opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          {/* Contact Details List */}
          <ul className="flex flex-col gap-6 mb-10">
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/70">
                <EnvelopeSimple weight="duotone" className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/40 uppercase tracking-wider font-medium mb-1">Email</span>
                <a href="mailto:dimzulfaridha@gmail.com" className="text-sm font-medium text-white/90 hover:text-white transition-colors">dimzulfaridha@gmail.com</a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/70">
                <MapPin weight="duotone" className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/40 uppercase tracking-wider font-medium mb-1">Location</span>
                <span className="text-sm font-medium text-white/90">Banda Aceh, Indonesia</span>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 text-white/70 hover:text-white transition-all duration-300" aria-label="LinkedIn">
              <LinkedinLogo weight="fill" className="w-5 h-5" />
            </a>
            <a href="https://github.com/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 text-white/70 hover:text-white transition-all duration-300" aria-label="GitHub">
              <GithubLogo weight="fill" className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/dimzulfar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 text-white/70 hover:text-white transition-all duration-300" aria-label="Instagram">
              <InstagramLogo weight="fill" className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Main Card Container (Form) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="lg:col-span-7"
        >
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative p-8 md:p-10">
            <form className="flex flex-col gap-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs text-white/40 uppercase tracking-[0.1em] font-medium ml-1">Name</label>
                  <input type="text" name="name" id="name" required placeholder="Your Name" className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-3.5 outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/20 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-sm" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs text-white/40 uppercase tracking-[0.1em] font-medium ml-1">Email</label>
                  <input type="email" name="email" id="email" required placeholder="youremail@example.com" className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-3.5 outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/20 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-sm" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs text-white/40 uppercase tracking-[0.1em] font-medium ml-1">Message</label>
                <textarea name="message" id="message" required rows="5" placeholder="Your Message..." className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/20 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] resize-none text-sm"></textarea>
              </div>
              
              <button disabled={isSubmitting} type="submit" className="group relative w-full inline-flex items-center justify-center gap-3 rounded-full bg-white/5 border border-white/10 text-white px-8 py-4 font-semibold text-sm transition-all duration-500 ease-fluid active:scale-[0.98] mt-2 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-white/10 hover:border-white/20">
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {/* Button-in-Button */}
                {!isSubmitting && (
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ease-fluid group-hover:bg-white/20 group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
                    <PaperPlaneRight weight="fill" className="w-3.5 h-3.5 text-white/90" />
                  </div>
                )}
              </button>

              {/* Status Message Popup */}
              <AnimatePresence>
                {result && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="fixed top-8 left-1/2 -translate-x-1/2 w-max max-w-[90%] px-6 py-3.5 rounded-full bg-black/50 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center gap-3 z-[9999]"
                  >
                    {result.type === 'success' ? (
                      <CheckCircle weight="fill" className="w-5 h-5 text-white/80" />
                    ) : result.type === 'error' ? (
                      <XCircle weight="fill" className="w-5 h-5 text-white/80" />
                    ) : (
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
                    )}
                    <span className="text-sm font-medium text-white tracking-wide">{result.text}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
