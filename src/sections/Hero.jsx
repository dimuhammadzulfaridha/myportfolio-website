import { useState } from 'react';
import { motion } from 'framer-motion'
import { MarioBackground } from '../components/MarioBackground';

export function Hero() {
  const photos = ['/profile.jpg', '/random1.jpg', '/random2.jpg', '/random3.jpg'];
  const [photoIndex, setPhotoIndex] = useState(0);

  const cyclePhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center p-4 bg-mario-sky overflow-hidden py-10">
      <MarioBackground />

      {/* =========================================================================
          MOBILE LAYOUT: Classic Vertical Game Boy (Visible on small & medium screens) 
          ========================================================================= */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="lg:hidden relative z-10 w-[95%] max-w-[340px] mx-auto flex justify-center my-6"
      >
        <div className="w-full bg-[#D3D5D7] rounded-t-xl rounded-bl-xl rounded-br-[40px] border-[5px] border-black p-4 drop-shadow-[15px_15px_0px_rgba(0,0,0,0.5)] flex flex-col items-center relative">
          
          {/* Screen Area (Dark Gray Frame) */}
          <div className="w-full bg-[#5A5A5A] rounded-t-lg rounded-b-2xl border-4 border-black p-4 flex flex-col relative">
             <div className="flex justify-between w-full px-2 text-[7px] text-[#A0A0A0] font-pixel mb-1 tracking-widest">
                <span className="flex items-center gap-1"><div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse drop-shadow-[0px_0px_4px_red]"></div> BATTERY</span>
             </div>
             {/* Actual Screen */}
             <div className="w-full h-64 bg-[#8BAC0F] border-[3px] border-black overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                   <img src={photos[photoIndex]} alt="Foto Anda" className="w-full h-full object-cover object-bottom" />
                </div>
             </div>
          </div>

          {/* Gameboy Branding & Social Links */}
          <div className="w-full flex justify-between items-center mt-3 mb-5 px-3">
             <span className="text-sm font-pixel text-[#111166] italic font-black tracking-widest drop-shadow-sm">NINTENDO</span>
             <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
                  <div className="drop-shadow-[2px_3px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                     <div className="w-10 h-10 rounded-full bg-[#999] border-[2px] border-black text-[#222] flex items-center justify-center group-active:translate-y-[3px] group-active:translate-x-[2px] transition-all duration-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                     </div>
                  </div>
                </a>
                <a href="https://www.instagram.com/dimzulfar" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
                  <div className="drop-shadow-[2px_3px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                     <div className="w-10 h-10 rounded-full bg-[#999] border-[2px] border-black text-[#222] flex items-center justify-center group-active:translate-y-[3px] group-active:translate-x-[2px] transition-all duration-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                     </div>
                  </div>
                </a>
                <a href="https://github.com/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
                  <div className="drop-shadow-[2px_3px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                     <div className="w-10 h-10 rounded-full bg-[#999] border-[2px] border-black text-[#222] flex items-center justify-center group-active:translate-y-[3px] group-active:translate-x-[2px] transition-all duration-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                     </div>
                  </div>
                </a>
             </div>
          </div>

          {/* Controls Area */}
          <div className="w-full flex justify-between px-3 items-center mt-2">
             {/* D-Pad */}
             <div className="group cursor-pointer" onClick={cyclePhoto}>
                <div className="drop-shadow-[3px_4px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                   <div className="relative w-24 h-24 group-active:translate-y-[4px] group-active:translate-x-[3px] transition-all duration-75">
                       {/* Horizontal bar */}
                       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[34%] bg-[#222] rounded-sm flex items-center justify-between px-1.5">
                          {/* Left Grips */}
                          <div className="flex flex-col gap-[2px]">
                             <div className="w-2 h-[2px] bg-[#111] rounded-full"></div>
                             <div className="w-2 h-[2px] bg-[#111] rounded-full"></div>
                             <div className="w-2 h-[2px] bg-[#111] rounded-full"></div>
                          </div>
                          {/* Right Grips */}
                          <div className="flex flex-col gap-[2px]">
                             <div className="w-2 h-[2px] bg-[#111] rounded-full"></div>
                             <div className="w-2 h-[2px] bg-[#111] rounded-full"></div>
                             <div className="w-2 h-[2px] bg-[#111] rounded-full"></div>
                          </div>
                       </div>
                       {/* Vertical bar */}
                       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[34%] h-full bg-[#222] rounded-sm flex flex-col items-center justify-between py-1.5">
                          {/* Top Grips */}
                          <div className="flex gap-[2px]">
                             <div className="h-2 w-[2px] bg-[#111] rounded-full"></div>
                             <div className="h-2 w-[2px] bg-[#111] rounded-full"></div>
                             <div className="h-2 w-[2px] bg-[#111] rounded-full"></div>
                          </div>
                          {/* Bottom Grips */}
                          <div className="flex gap-[2px]">
                             <div className="h-2 w-[2px] bg-[#111] rounded-full"></div>
                             <div className="h-2 w-[2px] bg-[#111] rounded-full"></div>
                             <div className="h-2 w-[2px] bg-[#111] rounded-full"></div>
                          </div>
                       </div>
                       {/* Center piece */}
                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[34%] h-[34%] bg-[#222] flex items-center justify-center">
                          <div className="w-[10px] h-[10px] bg-[#1a1a1a] rounded-full"></div>
                       </div>
                   </div>
                </div>
             </div>

             {/* Download CV Button */}
             <div className="flex flex-col items-center mt-5">
                <a href="/CV a.n Di Muhammad Zulfa Ridha.pdf" download="CV a.n Di Muhammad Zulfa Ridha.pdf" className="group relative flex flex-col items-center cursor-pointer select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; const fileName = e.currentTarget.getAttribute('download'); setTimeout(() => { const link = document.createElement('a'); link.href = url; link.download = fileName; document.body.appendChild(link); link.click(); document.body.removeChild(link); }, 150); }}>
                   <div className="drop-shadow-[3px_4px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                      <div className="w-20 h-20 rounded-full bg-[#9E2B4B] border-[3px] border-black group-active:translate-y-[4px] group-active:translate-x-[3px] transition-all duration-75 flex items-center justify-center lg:hover:bg-[#E33B6B]">
                         <span className="text-xl font-pixel text-white/90">CV</span>
                      </div>
                   </div>
                   <span className="text-[8px] font-pixel text-[#222] mt-3 uppercase tracking-widest text-center whitespace-nowrap">DOWNLOAD</span>
                </a>
             </div>
          </div>

          {/* Start/Select Buttons */}
          <div className="flex gap-5 mt-10 mb-5 justify-center w-full">
             <div className="flex flex-col items-center transform -rotate-12 group cursor-pointer" onClick={() => setTimeout(() => document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' }), 150)}>
                <div className="drop-shadow-[2px_3px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                   <div className="w-12 h-3 bg-[#999] border-[2px] border-black rounded-full group-active:translate-y-[3px] group-active:translate-x-[2px] transition-all duration-75"></div>
                </div>
                <span className="text-[7px] font-pixel text-[#222] mt-2 uppercase tracking-widest translate-x-[2px]">Start</span>
             </div>
             <div className="flex flex-col items-center transform -rotate-12 group cursor-pointer" onClick={cyclePhoto}>
                <div className="drop-shadow-[2px_3px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                   <div className="w-12 h-3 bg-[#999] border-[2px] border-black rounded-full group-active:translate-y-[3px] group-active:translate-x-[2px] transition-all duration-75"></div>
                </div>
                <span className="text-[7px] font-pixel text-[#222] mt-2 uppercase tracking-widest translate-x-[2px]">Select</span>
             </div>
          </div>

          {/* Speaker Grilles */}
          <div className="absolute bottom-5 right-5 flex gap-1.5 transform -rotate-12 opacity-80">
            <div className="w-2 h-10 bg-[#111] rounded-full drop-shadow-[1px_1px_0px_rgba(255,255,255,0.7)]"></div>
            <div className="w-2 h-10 bg-[#111] rounded-full drop-shadow-[1px_1px_0px_rgba(255,255,255,0.7)]"></div>
            <div className="w-2 h-10 bg-[#111] rounded-full drop-shadow-[1px_1px_0px_rgba(255,255,255,0.7)]"></div>
            <div className="w-2 h-10 bg-[#111] rounded-full drop-shadow-[1px_1px_0px_rgba(255,255,255,0.7)]"></div>
          </div>

        </div>
      </motion.div>

      {/* =========================================================================
          DESKTOP LAYOUT: Game Boy Advance (Visible on large screens)
          ========================================================================= */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden lg:flex w-full justify-center items-center min-h-[480px]"
      >
        <div 
          className="relative z-10 bg-[#6768ab] border-[4px] border-black drop-shadow-[8px_12px_0px_rgba(0,0,0,0.7)] w-[840px] h-[480px] shrink-0"
          style={{
            borderRadius: '100px 100px 180px 180px / 120px 120px 180px 180px',
            transform: 'scale(min(1, calc((100vw - 32px) / 840)))',
            transformOrigin: 'center center'
          }}
        >
        {/* L & R Bumpers */}
        <div className="absolute top-[-30px] left-[90px] group cursor-pointer z-[-1]" onClick={() => {}}>
           <div className="drop-shadow-[3px_4px_0px_rgba(0,0,0,0.6)] group-active:drop-shadow-none transition-all duration-75">
              <div className="w-[180px] h-[26px] bg-[#e5e7eb] border-[4px] border-black rounded-t-[20px] group-active:translate-y-[4px] group-active:translate-x-[3px] transition-all duration-75 flex items-center justify-center">
              </div>
           </div>
        </div>
        <div className="absolute top-[-30px] right-[90px] group cursor-pointer z-[-1]" onClick={() => {}}>
           <div className="drop-shadow-[3px_4px_0px_rgba(0,0,0,0.6)] group-active:drop-shadow-none transition-all duration-75">
              <div className="w-[180px] h-[26px] bg-[#e5e7eb] border-[4px] border-black rounded-t-[20px] group-active:translate-y-[4px] group-active:translate-x-[3px] transition-all duration-75 flex items-center justify-center">
              </div>
           </div>
        </div>

        {/* Nintendo Logo Groove */}
        <div className="absolute top-[12px] left-[250px] w-[340px] h-[28px] border-b-[2px] border-l-[2px] border-r-[2px] border-[#3b3c6a]/40 rounded-b-[60px] flex items-center justify-center">
          <span className="text-[#2b2c5a] font-sans font-black text-[12px] tracking-[0.3em] uppercase drop-shadow-sm">Nintendo</span>
        </div>

        {/* Center Screen Bezel */}
        <div className="absolute top-[70px] left-[200px] w-[440px] h-[340px] bg-[#1a1b1e] rounded-t-[20px] rounded-b-[80px] drop-shadow-2xl flex flex-col items-center pt-8 pb-4 z-20 border-[1.5px] border-[#111]">
           {/* Screen Glass */}
           <div className="w-[340px] h-[220px] bg-gradient-to-br from-[#2a437a] to-[#4c8eb5] rounded-sm crt flex flex-col items-center justify-center border-2 border-black/30 relative overflow-hidden">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.4, delayChildren: 1.0 }
                  }
                }}
                className="flex flex-col items-center"
              >
                <motion.div variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200 } } }}>
                <motion.img 
                  src="/profile2.jpeg"
                  alt="Profile"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="w-20 h-20 border-[4px] border-black pixel-corners mb-2 drop-shadow-lg object-cover object-bottom"
                />
                </motion.div>

                <motion.h1 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="font-pixel text-[13px] md:text-[15px] text-white mb-2 drop-shadow-md text-center px-1 leading-relaxed whitespace-nowrap tracking-tighter"
                >
                  Di Muhammad Zulfa Ridha
                </motion.h1>

                <motion.p 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="font-pixel text-[8px] md:text-[9px] text-gray-200 drop-shadow-md text-center px-2 leading-relaxed"
                >
                  Welcome to my life
                </motion.p>

                <motion.p 
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  className="font-pixel text-[8px] text-[#ffcc00] drop-shadow-md mt-6 animate-pulse"
                >
                  PRESS START FOR PORTFOLIO
                </motion.p>
              </motion.div>
           </div>
           
           {/* Logo and Button below screen */}
           <div className="mt-4 flex flex-col items-center justify-center gap-2.5">
             <div className="flex items-center gap-2">
                 <span className="text-gray-200 font-sans font-black tracking-[0.25em] italic text-xl drop-shadow-md">GAME BOY</span>
                 <span className="font-sans font-black tracking-widest text-[12px] text-gray-400 mt-1 drop-shadow-sm">ADVANCE</span>
             </div>
             
             {/* Download CV Button */}
             <a href="/CV a.n Di Muhammad Zulfa Ridha.pdf" download="CV a.n Di Muhammad Zulfa Ridha.pdf" className="z-30 select-none [-webkit-touch-callout:none] draggable-false">
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-5 py-1.5 bg-gradient-to-b from-[#2a2c33] to-[#141518] border-[1px] border-[#3a3c42] rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.8),inset_0px_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 group cursor-pointer"
                 >
                   <svg className="w-3 h-3 text-gray-400 lg:group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                   </svg>
                   <span className="font-pixel text-[8px] text-gray-300 lg:group-hover:text-white transition-colors mt-0.5">DOWNLOAD CV</span>
                 </motion.button>
             </a>
           </div>
        </div>

        {/* Left Side: D-Pad */}
        <div className="absolute top-[150px] left-[50px] group cursor-pointer z-30" onClick={() => {}}>
            <div className="drop-shadow-[4px_5px_0px_rgba(0,0,0,0.6)] group-active:drop-shadow-none transition-all duration-75">
               <div className="relative w-[100px] h-[100px] group-active:translate-y-[5px] group-active:translate-x-[4px] transition-all duration-75">
                  {/* Base Cross */}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[32px] bg-[#e5e7eb] rounded-sm"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[32px] h-full bg-[#e5e7eb] rounded-sm"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px] bg-[#e5e7eb]"></div>
                  
                  {/* Center indentation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-[#d1d5db] rounded-full shadow-[inset_1px_2px_3px_rgba(0,0,0,0.3)]"></div>
                  
                  {/* Triangles (Arrows) */}
                  <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-b-[7px] border-transparent border-b-[#9ca3af]"></div>
                  <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[7px] border-transparent border-t-[#9ca3af]"></div>
                  <div className="absolute left-[8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[5px] border-b-[5px] border-r-[7px] border-transparent border-r-[#9ca3af]"></div>
                  <div className="absolute right-[8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[5px] border-b-[5px] border-l-[7px] border-transparent border-l-[#9ca3af]"></div>
               </div>
            </div>
        </div>
        
        {/* Left Side: Start / Select */}
        <div className="absolute bottom-[90px] left-[50px] flex gap-4 z-30">
          <div className="flex flex-col items-center transform -rotate-[15deg] group cursor-pointer" onClick={() => setTimeout(() => document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' }), 150)}>
             <span className="text-[#2b2c5a] font-sans font-black text-[10px] tracking-widest mb-2 drop-shadow-sm">START</span>
             <div className="drop-shadow-[3px_4px_0px_rgba(0,0,0,0.6)] group-active:drop-shadow-none transition-all duration-75">
                <div className="w-12 h-3.5 bg-[#222] border-[2px] border-black rounded-full group-active:translate-y-[4px] group-active:translate-x-[3px] transition-all duration-75"></div>
             </div>
          </div>
          <div className="flex flex-col items-center transform -rotate-[15deg] group cursor-pointer" onClick={() => {}}>
             <span className="text-[#2b2c5a] font-sans font-black text-[10px] tracking-widest mb-2 drop-shadow-sm">SELECT</span>
             <div className="drop-shadow-[3px_4px_0px_rgba(0,0,0,0.6)] group-active:drop-shadow-none transition-all duration-75">
                <div className="w-12 h-3.5 bg-[#222] border-[2px] border-black rounded-full group-active:translate-y-[4px] group-active:translate-x-[3px] transition-all duration-75"></div>
             </div>
          </div>
        </div>

        {/* Right Side: Power Light */}
        <div className="absolute top-[80px] right-[90px] flex items-center gap-2">
           <div className="w-3 h-3 bg-green-400 rounded-full border border-green-200 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
           <span className="text-[#2b2c5a] font-sans font-black text-[11px] tracking-widest drop-shadow-sm">POWER</span>
        </div>
        
        {/* Right Side: A/B Buttons */}
        <div className="absolute top-[145px] right-[50px] w-[110px] h-[80px] transform -rotate-[15deg] z-30">
          <div className="absolute bottom-0 left-0 flex flex-col items-center group cursor-pointer" onClick={() => {}}>
             <div className="drop-shadow-[4px_5px_0px_rgba(0,0,0,0.6)] group-active:drop-shadow-none transition-all duration-75">
                <div className="w-12 h-12 bg-[#e5e7eb] rounded-full border-[3px] border-black flex items-center justify-center group-active:translate-y-[5px] group-active:translate-x-[4px] transition-all duration-75">
                   <span className="transform rotate-[15deg] font-sans font-black text-2xl text-[#111]">B</span>
                </div>
             </div>
          </div>
          <div className="absolute top-0 right-0 flex flex-col items-center group cursor-pointer" onClick={() => {}}>
             <div className="drop-shadow-[4px_5px_0px_rgba(0,0,0,0.6)] group-active:drop-shadow-none transition-all duration-75">
                <div className="w-12 h-12 bg-[#e5e7eb] rounded-full border-[3px] border-black flex items-center justify-center group-active:translate-y-[5px] group-active:translate-x-[4px] transition-all duration-75">
                   <span className="transform rotate-[15deg] font-sans font-black text-2xl text-[#111]">A</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Speaker */}
        <div className="absolute bottom-[80px] right-[70px] flex flex-col gap-3 transform -rotate-[15deg]">
           <div className="w-20 h-1.5 bg-[#2c2c3e] rounded-full shadow-[inset_0_2px_3px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.15)]" />
           <div className="w-20 h-1.5 bg-[#2c2c3e] rounded-full shadow-[inset_0_2px_3px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.15)]" />
           <div className="w-20 h-1.5 bg-[#2c2c3e] rounded-full shadow-[inset_0_2px_3px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.15)]" />
           <div className="w-20 h-1.5 bg-[#2c2c3e] rounded-full shadow-[inset_0_2px_3px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.15)]" />
           <div className="w-20 h-1.5 bg-[#2c2c3e] rounded-full shadow-[inset_0_2px_3px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.15)]" />
        </div>

        {/* Bottom Social Buttons */}
        <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 flex gap-5 z-30">
           <a href="https://www.linkedin.com/in/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group cursor-pointer select-none [-webkit-touch-callout:none] draggable-false" aria-label="LinkedIn" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
              <div className="drop-shadow-[4px_5px_0px_rgba(0,0,0,0.6)] group-active:drop-shadow-none transition-all duration-75">
                 <div className="w-12 h-12 bg-[#e5e7eb] rounded-full border-[3px] border-black flex items-center justify-center group-active:translate-y-[5px] group-active:translate-x-[4px] transition-all duration-75 group-hover:bg-[#d1d5db]">
                    <svg className="w-6 h-6 text-[#111]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                 </div>
              </div>
           </a>
           
           <a href="https://www.instagram.com/dimzulfar" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group cursor-pointer select-none [-webkit-touch-callout:none] draggable-false" aria-label="Instagram" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
              <div className="drop-shadow-[4px_5px_0px_rgba(0,0,0,0.6)] group-active:drop-shadow-none transition-all duration-75">
                 <div className="w-12 h-12 bg-[#e5e7eb] rounded-full border-[3px] border-black flex items-center justify-center group-active:translate-y-[5px] group-active:translate-x-[4px] transition-all duration-75 group-hover:bg-[#d1d5db]">
                    <svg className="w-6 h-6 text-[#111]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                 </div>
              </div>
           </a>

           <a href="https://github.com/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group cursor-pointer select-none [-webkit-touch-callout:none] draggable-false" aria-label="GitHub" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
              <div className="drop-shadow-[4px_5px_0px_rgba(0,0,0,0.6)] group-active:drop-shadow-none transition-all duration-75">
                 <div className="w-12 h-12 bg-[#e5e7eb] rounded-full border-[3px] border-black flex items-center justify-center group-active:translate-y-[5px] group-active:translate-x-[4px] transition-all duration-75 group-hover:bg-[#d1d5db]">
                    <svg className="w-6 h-6 text-[#111]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                 </div>
              </div>
           </a>
        </div>
        </div>
      </motion.div>
    </section>
  );
}
