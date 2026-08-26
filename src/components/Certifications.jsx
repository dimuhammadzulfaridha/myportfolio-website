import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, DownloadSimple, ArrowUpRight } from '@phosphor-icons/react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:3000';
        const res = await fetch(`${backendUrl}/api/certifications`);
        const data = await res.json();
        
        const parsedData = data.map(c => ({
          ...c,
          tags: typeof c.tags === 'string' ? JSON.parse(c.tags) : c.tags
        }));
        
        setCertifications(parsedData);
      } catch (error) {
        console.error("Error fetching certs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle background scroll locking and navbar hiding
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
      window.dispatchEvent(new Event('modalOpen'));
    } else {
      document.body.style.overflow = 'unset';
      if (window.lenis) window.lenis.start();
      window.dispatchEvent(new Event('modalClose'));
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (window.lenis) window.lenis.start();
      window.dispatchEvent(new Event('modalClose'));
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className={`pt-8 pb-4 px-4 md:px-12 max-w-7xl mx-auto relative ${selectedCert ? 'z-[60]' : 'z-10'}`}>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="flex flex-col items-center text-center mb-6 md:mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          My Certifications
        </h2>
        <p className="text-base text-white/50 font-light max-w-xl">
          Continuous learning and professional development.
        </p>
      </motion.div>

      {/* Grid Layout 4 Columns to make cards smaller again */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, i) => (
          <motion.div 
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => setSelectedCert(cert)}
            className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden flex flex-col group hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-pointer"
          >
            {/* Certificate Image Area */}
            <div className="w-full bg-transparent flex items-center justify-center overflow-hidden border-b border-white/5 relative">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-auto object-contain block" 
              />

            </div>
            
            {/* Certificate Details */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-[13px] font-bold text-white/90 leading-tight mb-2 group-hover:text-white transition-colors line-clamp-2">
                {cert.title}
              </h3>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-auto pt-2">
                {cert.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-1.5 py-0.5 text-[7px] uppercase tracking-wider font-semibold border border-white/10 rounded-full text-white/60 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* POPUP / MODAL overlay */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)] z-10 flex flex-col max-h-full"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-colors z-20"
              >
                <X weight="bold" />
              </button>

              {/* Scrollable Body - Side-by-side on desktop */}
              <div className="overflow-y-auto flex flex-col md:flex-row md:overflow-hidden">
                {/* Image */}
                <div className="w-full md:w-1/2 bg-transparent border-b md:border-b-0 md:border-r border-white/5 p-4 sm:p-6 md:p-8 flex items-center justify-center">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-h-[35vh] md:max-h-[55vh] w-auto object-contain rounded-md shadow-lg"
                  />
                </div>

                {/* Details */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col md:overflow-y-auto">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {selectedCert.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 text-[9px] uppercase tracking-wider font-semibold border border-white/10 rounded-full text-white/60 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white/90 mb-2 leading-tight">
                    {selectedCert.title}
                  </h2>
                  <p className="text-xs font-medium text-white/50 mb-4 md:mb-6 flex flex-wrap items-center gap-1.5">
                    <span className="text-white/30 font-normal italic">Issued by:</span> 
                    {selectedCert.issuer}
                  </p>

                  <p className="text-[13px] text-white/50 leading-relaxed mt-auto">
                    {selectedCert.description}
                  </p>
                </div>
              </div>

              {/* Footer with Action Button */}
              <div className="p-6 border-t border-white/5 flex justify-end">
                <a 
                  href={selectedCert.link || selectedCert.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-semibold transition-all duration-300 border border-white/10"
                >
                  {selectedCert.link ? <ArrowUpRight weight="bold" className="w-4 h-4" /> : <DownloadSimple weight="bold" className="w-4 h-4" />}
                  View Credential
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Certifications;
