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
    <footer className="py-4 border-t border-white/5 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        {/* Left Side: Tech Stack & Copyright */}
        <div className="flex flex-col gap-1.5">
          <p className="text-[10px] text-white/40 tracking-wider">
            Built with Nuxt 3, Tailwind CSS, Shadcn UI, NestJS
          </p>
          <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">
            <Link to="/login" className="hover:text-white transition-colors cursor-pointer" title="Admin Login">&copy;</Link> 2026 Di Muhammad Zulfa Ridha
          </p>
        </div>

        {/* Right Side: Location & Time */}
        <div className="flex flex-col md:items-end gap-1.5">
          <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">
            Banda Aceh, Indonesia
          </p>
          <p className="text-[10px] text-white/40 font-mono tracking-widest">
            UTC+7 — {time}
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
