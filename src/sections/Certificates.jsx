import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: 'Peserta Top 165 Social Project Program Innovillage 2024',
    institution: 'PT Telkom Indonesia dan Universitas Telkom',
    description: 'Successfully selected as one of the Top 165 teams in the Innovillage 2024 Social Project Program organized by PT Telkom Indonesia. The project focused on developing an Arduino-based solution that utilizes tofu production wastewater to support sustainable livestock farming. I contributed to system development, hardware assembly, testing, and project documentation while collaborating with the team to deliver a practical solution with positive social impact.',
    link: '',
    image: '/images/innovilage.png',
    tags: ['Innovillage', 'Social Innovation', 'IoT Project']
  },
  {
    id: 2,
    title: 'Peraih Pendanaan Bidang PKM-KC Tahun 2024',
    institution: 'Kemendikbudristek',
    description: 'Successfully awarded funding in the Student Creativity Program – Karsa Cipta (PKM-KC), organized by the Ministry of Education, Culture, Research, and Technology. The funded project developed an Internet of Things (IoT)-based irrigation monitoring and control system to improve water distribution efficiency in agricultural areas. This achievement recognizes innovative student projects that transform technology into practical solutions with real-world impact.',
    link: '',
    image: '/images/pkm.png',
    tags: ['PKM-KC', 'Research', 'IoT Project']
  },
  {
    id: 3,
    title: 'Certificate of Completion Bangkit Specializing in Machine Learning',
    institution: 'Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka',
    description: 'Successfully completed Bangkit Academy 2023 Batch 2 in the Machine Learning learning path, a technology career program led by Google, GoTo, and Traveloka. The program provided intensive training in Machine Learning using Python and TensorFlow, covering data processing, deep learning, and AI model development while strengthening problem-solving, collaboration, and industry-ready skills through hands-on projects.',
    link: '',
    image: '/images/bangkit.png',
    tags: ['Bangkit Academy', 'Machine Learning']
  },
  {
    id: 4,
    title: 'Analyze Data to Answer Questions',
    institution: 'Coursera',
    description: 'Successfully completed the Analyze Data to Answer Questions course as part of the Google Data Analytics Professional Certificate. The course focused on analyzing and interpreting data using spreadsheets and SQL, applying data visualization techniques, and communicating insights to support data-driven decision-making.',
    link: 'https://coursera.org/verify/522W8BEHAFSH',
    image: '/images/coursera-data.png',
    tags: ['Coursera', 'Google', 'Analyze Data']
  },
  {
    id: 5,
    title: 'Belajar Dasar Git dengan GitHub',
    institution: 'Dicoding',
    description: 'Successfully completed the Belajar Dasar Git dengan GitHub course by Dicoding. The course introduced the fundamentals of version control using Git and GitHub, including repository management, branching, collaboration through remote repositories, and best practices for managing software development projects.',
    link: 'https://www.dicoding.com/certificates/EYX46N8WOPDL',
    image: '/images/dicoding-git.png',
    tags: ['Dicoding', 'Git', 'GitHub']
  },
  {
    id: 6,
    title: 'Using Python to Interact with the Operating System',
    institution: 'Coursera',
    description: 'Successfully completed the Using Python to Interact with the Operating System course from Google. The course focused on using Python to automate system administration tasks, manage files and directories, execute operating system commands, and develop automation scripts to improve productivity and workflow efficiency.',
    link: 'https://coursera.org/verify/V9JPJTJDDS9V',
    image: '/images/coursera-python.png',
    tags: ['Coursera', 'Google', 'Python']
  }
];

const containerVariants = {
  hidden: {},
  show: (direction) => ({
    transition: { 
      staggerChildren: 0.3, 
      staggerDirection: direction === 'up' ? -1 : 1 
    }
  })
};

const itemVariants = {
  hidden: { rotateY: -180 },
  show: { rotateY: 0, rotateX: 0, z: 0, transition: { type: 'tween', ease: 'easeOut', duration: 1.2 } }
};

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState('down');

  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (selectedCert) {
      // Store current focus
      previousFocusRef.current = document.activeElement;

      // Lock body scroll and prevent layout shift
      const scrollY = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';

      // Focus modal for accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }

      // Handle Escape key
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedCert(null);
      };
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        
        // Restore scroll and body styles
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.paddingRight = '';
        document.body.style.overflow = '';
        
        // Temporarily disable smooth scrolling to prevent jumpy/bouncing animation
        const htmlElement = document.documentElement;
        htmlElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, scrollY);
        
        // Restore smooth scrolling via setTimeout to ensure the instant jump completes first
        requestAnimationFrame(() => {
          htmlElement.style.scrollBehavior = '';
        });

        // Restore focus
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [selectedCert]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous) {
      setScrollDirection('down');
    } else if (latest < previous) {
      setScrollDirection('up');
    }
  });

  return (
    <section 
      className="min-h-screen text-white pt-10 pb-20 md:py-20 px-4 md:px-8 relative flex flex-col items-center overflow-hidden"
      style={{
        backgroundColor: '#166534', // Emerald 800 base
        backgroundImage: `
          linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.15) 49%, rgba(255,255,255,0.15) 51%, transparent 51%),
          linear-gradient(-45deg, transparent 49%, rgba(255,255,255,0.15) 49%, rgba(255,255,255,0.15) 51%, transparent 51%),
          linear-gradient(45deg, #14532d 25%, transparent 25%, transparent 75%, #14532d 75%, #14532d),
          linear-gradient(45deg, #14532d 25%, transparent 25%, transparent 75%, #14532d 75%, #14532d)
        `,
        backgroundSize: '64px 64px',
        backgroundPosition: '0 0, 0 0, 0 0, 32px 32px'
      }}
    >
      
      {/* Spotlight Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)]" />

      <div className="w-full max-w-[1200px] relative z-10 flex-1 flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12 gap-4">
          <h2 className="text-[12px] min-[375px]:text-[14px] sm:text-2xl md:text-4xl font-pixel text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase text-center md:text-left whitespace-nowrap md:whitespace-normal">
            Certifications & Awards
          </h2>
        </div>

        {/* Certificates Grid (3D Flip layout) */}
        <motion.div 
          custom={scrollDirection}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-1 [perspective:2000px]"
        >
          {certificates.map((cert, idx) => {
            // SAVED CUSTOM LOGIC: const isRed = [0, 2, 3, 5].includes(idx);
            const isRed = idx % 2 !== 0;
            const theme = isRed 
              ? { base: '#a92f39', accent: 'rgba(255, 255, 255, 0.15)' } // Classic Muted Red
              : { base: '#1a2b4c', accent: 'rgba(255, 255, 255, 0.15)' }; // Classic Navy Blue

            return (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                onClick={() => setSelectedCert(cert)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                className="relative w-full h-[360px] md:h-[420px] rounded-2xl cursor-pointer group"
                style={{ transformStyle: 'preserve-3d' }}
                tabIndex={0}
              >
                
                {/* BACK SIDE (Playing Card Design) */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl bg-slate-100 p-2 sm:p-2.5 shadow-2xl"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  {/* Playing Card Pattern */}
                  <div className="w-full h-full rounded-xl relative overflow-hidden flex items-center justify-center border-2 border-slate-300"
                       style={{
                          backgroundColor: theme.base,
                          backgroundImage: `
                            linear-gradient(135deg, ${theme.accent} 25%, transparent 25%),
                            linear-gradient(225deg, ${theme.accent} 25%, transparent 25%),
                            linear-gradient(45deg, ${theme.accent} 25%, transparent 25%),
                            linear-gradient(315deg, ${theme.accent} 25%, ${theme.base} 25%)
                          `,
                          backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
                          backgroundSize: '20px 20px',
                          backgroundRepeat: 'repeat'
                       }}
                  />
                </div>

                {/* FRONT SIDE */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl bg-slate-100 p-2 sm:p-2.5 shadow-2xl"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg) translate3d(0,0,0) scale(1)', filter: 'blur(0)', WebkitFontSmoothing: 'antialiased', WebkitTransformStyle: 'preserve-3d' }}
                >
                  <div className="w-full h-full rounded-xl relative flex flex-col transition-colors overflow-hidden isolate bg-slate-100" style={{ transform: 'translateZ(0)' }}>
                    <div className="h-[160px] md:h-[200px] w-full overflow-hidden relative flex items-center justify-center shrink-0">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover object-top" />
                    </div>

                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start" style={{ backgroundColor: theme.base }}>
                      <h3 className="font-bold text-white text-sm md:text-[15px] mb-3 line-clamp-3 md:line-clamp-3 leading-snug drop-shadow-sm">{cert.title}</h3>
                      <div className="flex gap-2 flex-wrap">
                        {cert.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="text-[9px] md:text-[10px] font-black uppercase tracking-wider bg-white/90 px-2 md:px-2.5 py-1 md:py-1.5 rounded-md shadow-sm" style={{ color: theme.base }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (() => {
          const selectedIdx = certificates.findIndex(c => c.id === selectedCert.id);
          // SAVED CUSTOM LOGIC: const isSelectedRed = [0, 2, 3, 5].includes(selectedIdx);
          const isSelectedRed = selectedIdx % 2 !== 0;
          const modalTheme = isSelectedRed ? { base: '#a92f39' } : { base: '#1a2b4c' };
          const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

          return (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              />
              <motion.div
                ref={modalRef}
                tabIndex={-1}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed z-50 flex flex-col border-[8px] sm:border-[12px] border-slate-100 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden focus:outline-none
                           inset-0 m-auto w-[92%] h-fit max-h-[85dvh] rounded-2xl
                           md:w-[1050px] md:h-[620px]"
                style={{ backgroundColor: modalTheme.base }}
              >
                <style>{`
                  .hide-scroll::-webkit-scrollbar { display: none; }
                `}</style>

                {/* --- DESKTOP LAYOUT --- */}
                <div className="hidden md:flex w-full h-full flex-row overflow-hidden shadow-inner isolate">
                  <div className="w-1/2 p-6 flex flex-col justify-center relative">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                      className="w-full rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                    >
                      <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto object-contain" />
                    </motion.div>
                  </div>
                  
                  {/* Right: Text & Buttons */}
                  <div className="w-1/2 flex flex-col h-full">
                    {/* Header */}
                    <div className="p-5 lg:p-6 shrink-0">
                      <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-sm leading-tight">{selectedCert.title}</h2>
                      <span className="bg-white/90 text-xs px-3 py-1.5 rounded-md font-black uppercase tracking-wider shadow-sm" style={{ color: modalTheme.base }}>
                        certification
                      </span>
                    </div>

                    {/* Content */}
                    <div className="px-5 lg:px-6 flex-1 space-y-4 overflow-y-auto hide-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                      <div>
                        <h3 className="text-white/70 font-bold mb-2 text-xs uppercase tracking-widest pb-1.5">Description</h3>
                        <p className="text-white text-sm leading-relaxed text-justify font-medium">
                          {selectedCert.description}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-white/70 font-bold mb-2 text-xs uppercase tracking-widest pb-1.5">Issuing Institution</h3>
                        <p className="text-white text-sm font-medium leading-relaxed">
                          {selectedCert.institution}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-5 lg:p-6 flex gap-3 shrink-0 mt-2">
                      {selectedCert.link && (
                        <a
                          href={selectedCert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white hover:bg-slate-100 font-bold py-3 rounded-full flex items-center justify-center transition-colors active:scale-[0.98] shadow-sm uppercase tracking-wider text-xs"
                          style={{ color: modalTheme.base }}
                        >
                          View Credential
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedCert(null)}
                        className={`flex-1 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 rounded-full flex items-center justify-center transition-colors active:scale-[0.98] uppercase tracking-wider text-xs`}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>

                {/* --- MOBILE LAYOUT (1 Column, Side Panel) --- */}
                <div className="md:hidden w-full h-full flex flex-col overflow-hidden shadow-inner isolate">
                  {/* Header */}
                  <div className="p-4 flex flex-col items-start shrink-0">
                    <h2 className="text-[17px] font-bold text-white mb-2 drop-shadow-sm leading-tight line-clamp-2">{selectedCert.title}</h2>
                    <span className="bg-white/90 text-[10px] px-2.5 py-1 rounded-md font-black uppercase tracking-wider shadow-sm" style={{ color: modalTheme.base }}>
                      certification
                    </span>
                  </div>

                  {/* Content */}
                  <div 
                    className="px-4 flex-1 flex flex-col justify-start space-y-4 overflow-y-auto hide-scroll"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {/* Image */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                      className="w-full rounded-lg overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.3)] shrink-0"
                    >
                      <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto object-cover" />
                    </motion.div>

                    {/* Description */}
                    <div>
                      <h3 className="text-white/70 font-bold mb-1.5 text-[11px] uppercase tracking-widest pb-0.5">Description</h3>
                      <p className="text-white text-xs leading-relaxed text-justify font-medium">
                        {selectedCert.description}
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className="pb-2">
                      <h3 className="text-white/70 font-bold mb-1.5 text-[11px] uppercase tracking-widest pb-0.5">Issuing Institution</h3>
                      <p className="text-white text-xs font-medium leading-tight">
                        {selectedCert.institution}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-4 flex gap-3 shrink-0">
                    {selectedCert.link && (
                      <a
                        href={selectedCert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white hover:bg-slate-100 font-bold py-2 rounded-full flex items-center justify-center transition-colors active:scale-[0.98] shadow-sm uppercase tracking-wider text-[10px]"
                        style={{ color: modalTheme.base }}
                      >
                        View Credential
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedCert(null)}
                      className={`flex-1 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-1.5 rounded-full flex items-center justify-center transition-colors active:scale-[0.98] uppercase tracking-wider text-[10px]`}
                    >
                      Close
                    </button>
                  </div>
                </div>

              </motion.div>
            </>
          );
        })()}
      </AnimatePresence>

    </section>
  );
}
