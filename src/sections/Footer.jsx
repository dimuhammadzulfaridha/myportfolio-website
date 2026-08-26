import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Jakarta', // WIB / UTC+7
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(formatter.format(new Date()));
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="pt-4 pb-6 md:py-4 border-t border-white/5 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-row justify-between items-end md:items-center gap-2 md:gap-4">
        
        {/* Left Side: Tech Stack & Copyright */}
        <div className="flex flex-col items-start gap-1.5 w-1/2 md:w-auto">
          <p className="text-[8px] md:text-[10px] text-white/40 tracking-wider">
            Built with React, Vite, Tailwind & MongoDB
          </p>
          <p className="text-[9px] md:text-xs font-semibold text-white/70 uppercase tracking-wider">
            <Link to="/login" className="hover:text-white transition-colors cursor-pointer" title="Admin Login">&copy;</Link> 2026 ZULFA RIDHA
          </p>
        </div>

        {/* Right Side: Location & Time */}
        <div className="flex flex-col items-end text-right gap-1.5 w-1/2 md:w-auto">
          <p className="text-[9px] md:text-xs font-semibold text-white/70 uppercase tracking-wider">
            Banda Aceh, Indonesia
          </p>
          <p className="text-[8px] md:text-[10px] text-white/40 font-mono tracking-widest">
            UTC+7 — {time}
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
