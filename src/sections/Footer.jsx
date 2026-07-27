import { motion } from 'framer-motion';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0f172a] text-white flex flex-col md:flex-row items-center justify-start md:justify-between pt-5 pb-24 md:py-4 px-4 md:px-8 relative z-20 min-h-[140px] md:min-h-0 gap-3 md:gap-0">
      
      {/* Left side: Copyright */}
      <div className="flex-none md:flex-1 text-center md:text-left w-full md:w-auto pl-2 md:pl-4">
        <p className="text-[11px] md:text-sm text-gray-500 font-sans">
          © 2026 DI Muhammad Zulfa Ridha. All rights reserved.
        </p>
      </div>

      {/* Center side: Play Again (Hidden on mobile) */}
      <div className="hidden md:flex flex-none md:flex-1 justify-center w-full md:w-auto">
        <button 
          onClick={scrollToTop}
          className="font-pixel text-[10px] md:text-[12px] text-gray-400 hover:text-white transition-colors uppercase flex items-center justify-center gap-2 group"
        >
          <span className="text-sm md:text-lg animate-bounce group-hover:animate-none text-gray-500 group-hover:text-white">▲</span> PLAY AGAIN
        </button>
      </div>

      {/* Right side: Social Icons */}
      <div className="flex-none md:flex-1 flex justify-center md:justify-end gap-3 md:gap-4 pr-2 w-full md:w-auto">
        <a href="https://www.linkedin.com/in/dimzulfaridha" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0a0f1c] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-900 transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="https://www.instagram.com/dimzulfar" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0a0f1c] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-900 transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://github.com/dimzulfaridha" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0a0f1c] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-900 transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </div>
    </footer>
  );
}
