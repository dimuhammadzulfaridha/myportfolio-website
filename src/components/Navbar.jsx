import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { name: 'About Me', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);
    window.addEventListener('modalOpen', handleModalOpen);
    window.addEventListener('modalClose', handleModalClose);
    
    // Intersection Observer for ScrollSpy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('modalOpen', handleModalOpen);
      window.removeEventListener('modalClose', handleModalClose);
      observer.disconnect();
    };
  }, []);

  const menuVariants = {
    closed: { opacity: 0, y: '-100%', transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] } },
    open: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 40 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    })
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ease-out ${scrolled ? 'top-4' : 'top-8'} ${isModalOpen ? '-translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <div 
          className={`flex items-center justify-between transition-all duration-700 ease-in-out ${
            scrolled 
              ? 'w-full max-w-5xl px-6 py-3 rounded-full bg-black/50 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
              : 'w-full max-w-7xl px-2 py-4 rounded-full bg-transparent border border-transparent shadow-none'
          }`}
        >
          <a href="#" onClick={scrollToTop} className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105" aria-label="Zulfa Ridha">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Glassmorphic Background */}
              <rect width="40" height="40" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="transition-all duration-500 group-hover:fill-[rgba(255,255,255,0.08)]"/>
              
              {/* Z Letterform */}
              <path d="M13 15L21 15L15 25L23 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              
              {/* R Letterform (interconnected) */}
              <path d="M21 15C25.5 15 25.5 20 21 20L25 25" stroke="url(#r-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              
              <defs>
                <linearGradient id="r-grad" x1="21" y1="15" x2="25.5" y2="25" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="1"/>
                  <stop offset="1" stopColor="white" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="hidden lg:inline-block text-base font-light tracking-wider text-white whitespace-nowrap">
              Di Muhammad Zulfa <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Ridha</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-8 ml-auto pr-4">
            {links.map((link) => (
              <li key={`desktop-${link.id}`}>
                <a 
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`tracking-[0.15em] uppercase transition-all duration-500 whitespace-nowrap ${
                    scrolled ? 'text-[10px]' : 'text-xs'
                  } ${
                    activeSection === link.id
                      ? 'font-bold text-white shadow-glow-sm'
                      : 'font-semibold text-white/50 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[60] outline-none focus:outline-none border-none bg-transparent"
          >
            <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-500 ease-fluid origin-center ${isOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-500 ease-fluid origin-center ${isOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.li 
                  key={link.id}
                  custom={i}
                  variants={linkVariants}
                >
                  <a 
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`text-4xl md:text-7xl font-light tracking-tighter transition-colors duration-500 ${
                      activeSection === link.id
                        ? 'text-white font-medium'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
