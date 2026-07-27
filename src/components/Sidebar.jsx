import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'home', label: 'HOME', icon: '🍄' },
  { id: 'aboutme', label: 'ABOUT ME', icon: '👾' },
  { id: 'experience', label: 'EXPERIENCE', icon: '⭐' },
  { id: 'certificates', label: 'CERTIFICATES', icon: '🪙' },
  { id: 'contact', label: 'CONTACT', icon: '✉️' },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      
      // Show sidebar after scrolling past 50% of the first screen
      if (scrollTop > window.innerHeight * 0.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (isScrollingRef.current) return;

      // Determine active section
      const scrollPosition = scrollTop + window.innerHeight / 3;
      
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    
    if (element) {
      isScrollingRef.current = true;
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth' });
      
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000); // 1s is enough for smooth scroll to finish
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={isMobile ? { y: 100, x: '-50%', opacity: 0 } : { x: -100, y: '-50%', opacity: 0 }}
          animate={isMobile ? { y: 0, x: '-50%', opacity: 1 } : { x: 0, y: '-50%', opacity: 1 }}
          exit={isMobile ? { y: 100, x: '-50%', opacity: 0 } : { x: -100, y: '-50%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-4 left-1/2 md:bottom-auto md:left-4 md:top-1/2 z-50 flex flex-row md:flex-col gap-2 md:gap-4 pointer-events-auto"
        >
          {/* Main Sidebar Wrapper */}
          <div className="bg-black/60 backdrop-blur-md border-[3px] border-white/20 p-2 md:p-3 rounded-2xl flex flex-row md:flex-col gap-2 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
            
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl transition-all duration-300 border-[2px] 
                    ${isActive 
                      ? 'border-black scale-110' 
                      : 'bg-white/10 border-transparent hover:bg-white/20 hover:scale-105'}
                  `}
                  title={item.label}
                >
                  {/* Fluid Active Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSidebar"
                      className="absolute inset-0 bg-yellow-400 rounded-xl shadow-[inset_0_-3px_0px_rgba(0,0,0,0.3)] z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}

                  <span className={`relative z-10 text-lg md:text-xl transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                    {item.icon}
                  </span>
                  
                  {/* Tooltip on Hover - Hidden on mobile to prevent double-tap bug */}
                  <span className="hidden md:block absolute left-full ml-4 px-3 py-1.5 bg-black border-[2px] border-white text-white font-pixel text-[10px] whitespace-nowrap rounded pointer-events-none opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-200">
                    {item.label}
                    {/* Tooltip Arrow */}
                    <span className="absolute right-full top-1/2 -translate-y-1/2 border-[4px] border-transparent border-r-white border-t-transparent border-b-transparent border-l-transparent"></span>
                  </span>
                </button>
              );
            })}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
