import { useState } from 'react';
import { motion } from 'framer-motion';
import { PixelSprite, PALETTE } from '../components/PixelSprite';
import { 
  CLOUD, BUSH, HILL, QUESTION_BLOCK, BRICK_BLOCK, GROUND_BLOCK, PIPE 
} from '../components/MarioBackground';

export function AboutMe() {
  const photos = ['/profile.jpg', '/random1.jpg', '/random2.jpg', '/random3.jpg'];
  const [photoIndex, setPhotoIndex] = useState(0);

  const cyclePhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section id="about" className="min-h-screen bg-mario-sky relative flex flex-col justify-start lg:justify-center px-4 md:px-12 pt-8 pb-32 lg:pt-16 lg:pb-16 overflow-hidden z-10">
      
      {/* Background Parallax Clouds */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <motion.div 
          animate={{ x: ['0%', '-50%'] }} 
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute top-10 left-0 h-full w-[200vw] flex"
        >
          <div className="w-[100vw] relative">
            {/* Top clouds */}
            <div className="absolute top-[2%] left-[5%]"><PixelSprite art={CLOUD} scale={4} /></div>
            <div className="absolute top-[6%] left-[45%]"><PixelSprite art={CLOUD} scale={6} /></div>
            <div className="absolute top-[3%] left-[85%]"><PixelSprite art={CLOUD} scale={5} /></div>
            
            {/* Mid clouds */}
            <div className="absolute top-[15%] left-[20%]"><PixelSprite art={CLOUD} scale={5} /></div>
            <div className="absolute top-[22%] left-[70%]"><PixelSprite art={CLOUD} scale={7} /></div>
            
            {/* Lower clouds */}
            <div className="absolute top-[35%] left-[10%]"><PixelSprite art={CLOUD} scale={6} /></div>
            <div className="absolute top-[30%] left-[50%]"><PixelSprite art={CLOUD} scale={4} /></div>
          </div>
          <div className="w-[100vw] relative">
            {/* Top clouds */}
            <div className="absolute top-[2%] left-[5%]"><PixelSprite art={CLOUD} scale={4} /></div>
            <div className="absolute top-[6%] left-[45%]"><PixelSprite art={CLOUD} scale={6} /></div>
            <div className="absolute top-[3%] left-[85%]"><PixelSprite art={CLOUD} scale={5} /></div>
            
            {/* Mid clouds */}
            <div className="absolute top-[15%] left-[20%]"><PixelSprite art={CLOUD} scale={5} /></div>
            <div className="absolute top-[22%] left-[70%]"><PixelSprite art={CLOUD} scale={7} /></div>
            
            {/* Lower clouds */}
            <div className="absolute top-[35%] left-[10%]"><PixelSprite art={CLOUD} scale={6} /></div>
            <div className="absolute top-[30%] left-[50%]"><PixelSprite art={CLOUD} scale={4} /></div>
          </div>
        </motion.div>
      </div>

      {/* Floating Platforms (Sky Bricks) - Changed Positions & Made Longer */}
      
      {/* Long strip of bricks on the left (Desktop) */}
      <div className="hidden md:flex absolute top-[35%] left-[10%] z-10">
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={QUESTION_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
      </div>
      
      {/* Scattered bricks on the far right (Desktop) */}
      <div className="hidden md:flex absolute top-[25%] right-[3%] z-10">
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={QUESTION_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
      </div>
      
      {/* Single floating block higher up (Desktop) */}
      <div className="hidden md:flex absolute top-[20%] right-[45%] z-10">
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
      </div>

      {/* MOBILE ONLY Bricks - Top Right */}
      <div className="flex md:hidden absolute top-[12%] right-[10%] z-10 scale-75 origin-top-right">
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={QUESTION_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
      </div>

      {/* MOBILE ONLY Bricks - Middle Left (Behind text box) */}
      <div className="flex md:hidden absolute top-[45%] left-[-5%] z-10 scale-[0.65] origin-left">
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={QUESTION_BLOCK} scale={4} />
      </div>

      {/* MOBILE ONLY Bricks - Lower Right (Behind text box) */}
      <div className="flex md:hidden absolute top-[70%] right-[-2%] z-10 scale-[0.65] origin-right">
        <PixelSprite art={QUESTION_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
      </div>

      {/* Scenery anchored to the bottom ground - Changed Positions */}
      
      {/* Big Hill - Moved to Right (Desktop) */}
      <div className="hidden md:block absolute bottom-24 right-[5%] z-10">
        <PixelSprite art={HILL} scale={8} />
      </div>

      {/* Small Hill - Visible on both but smaller on mobile */}
      <div className="absolute bottom-24 left-[5%] md:left-[25%] z-10 scale-[0.6] origin-bottom md:scale-100">
        <PixelSprite art={HILL} scale={5} />
      </div>

      {/* Bushes - Desktop */}
      <div className="hidden md:block absolute bottom-24 left-[50%] z-10">
        <PixelSprite art={BUSH} scale={4} />
      </div>
      <div className="hidden md:flex absolute bottom-24 right-[30%] -space-x-4 z-10">
        <PixelSprite art={BUSH} scale={4} className="relative z-20" />
        <PixelSprite art={BUSH} scale={4} className="relative z-10" />
      </div>

      {/* MOBILE ONLY Bush */}
      <div className="block md:hidden absolute bottom-24 left-[45%] z-10 scale-50 origin-bottom">
        <PixelSprite art={BUSH} scale={4} />
      </div>

      {/* Pipe & Photo (Left Side) - Desktop */}
      <div className="hidden md:block absolute bottom-24 left-[10%] z-20">
         <PixelSprite art={PIPE} scale={4} className="drop-shadow-lg" />
      </div>

      {/* MOBILE ONLY Pipe */}
      <div className="block md:hidden absolute bottom-24 right-[5%] z-20 scale-[0.55] origin-bottom-right">
         <PixelSprite art={PIPE} scale={4} className="drop-shadow-lg" />
      </div>

      {/* Main Content (Gameboy + Speech Bubble) */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center lg:gap-12 xl:gap-20 items-center lg:items-center z-50 mt-0 px-4 md:px-12 w-full max-w-[100vw] lg:max-w-7xl">
        
        {/* Left Column: Gameboy (Floating high in Sky) - HIDDEN ON MOBILE/TABLET */}
         <motion.div 
           animate={{ y: [0, -15, 0] }}
           transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
           className="hidden lg:flex relative z-40 mb-16 lg:mb-0 self-center lg:self-start flex-shrink-0 antialiased"
           style={{ willChange: 'transform', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
         >
            <div 
              className="w-72 md:w-80 lg:w-96 bg-[#D3D5D7] rounded-t-xl rounded-bl-xl rounded-br-[40px] md:rounded-br-[48px] border-[5px] border-black p-4 md:p-6 flex flex-col items-center relative"
              style={{ filter: 'drop-shadow(12px 12px 0px rgba(0,0,0,0.8)) drop-shadow(0px 0px 1.5px rgba(0,0,0,1))' }}
            >
              {/* Screen Area (Dark Gray Frame) */}
              <div 
                 className="w-full bg-[#7a7a8c] rounded-lg p-3 md:p-5 border-[3px] border-black"
                 style={{ filter: 'drop-shadow(0px 0px 1px rgba(0,0,0,1))' }}
              >
                 <div className="flex justify-between w-full px-2 text-[7px] md:text-[9px] text-[#A0A0A0] font-pixel mb-1 md:mb-2 tracking-widest">
                    <span className="flex items-center gap-1 md:gap-2"><div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse drop-shadow-[0px_0px_4px_red]"></div> BATTERY</span>
                 </div>
                 {/* Actual Screen (Greenish or Photo) */}
                 <div 
                    className="w-full h-48 md:h-56 lg:h-64 bg-[#8BAC0F] border-[3px] md:border-4 border-black overflow-hidden relative"
                    style={{ filter: 'drop-shadow(0px 0px 1px rgba(0,0,0,1))' }}
                 >
                    {/* User Photo */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                       <img 
                           src={photos[photoIndex]} 
                           alt="Zulfa Ridha" 
                           className={`w-full h-full object-cover ${photoIndex === 0 ? 'object-bottom' : 'object-[center_30%]'}`} 
                        />
                    </div>
                 </div>
              </div>

              {/* Gameboy Branding & Social Links */}
              <div className="w-full text-left mt-3 mb-5 pl-3 flex items-center justify-between">
                 <span className="text-sm md:text-base font-pixel text-[#111166] italic font-black tracking-widest drop-shadow-sm">NINTENDO</span>
                 
                 {/* Social Icons inside Gameboy */}
                 <div className="flex gap-2 md:gap-3 pr-2">
                     <a href="https://www.linkedin.com/in/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="group cursor-pointer select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
                        <div className="drop-shadow-[2px_3px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                           <div className="w-8 h-8 md:w-10 md:h-10 bg-[#999] border-[2px] border-black rounded-full flex items-center justify-center group-active:translate-y-[3px] group-active:translate-x-[2px] transition-all duration-75">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#222]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                           </div>
                        </div>
                     </a>
                     <a href="https://www.instagram.com/dimzulfar" target="_blank" rel="noopener noreferrer" className="group cursor-pointer select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
                        <div className="drop-shadow-[2px_3px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                           <div className="w-8 h-8 md:w-10 md:h-10 bg-[#999] border-[2px] border-black rounded-full flex items-center justify-center group-active:translate-y-[3px] group-active:translate-x-[2px] transition-all duration-75">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#222]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                           </div>
                        </div>
                     </a>
                     <a href="https://github.com/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="group cursor-pointer select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
                        <div className="drop-shadow-[2px_3px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                           <div className="w-8 h-8 md:w-10 md:h-10 bg-[#999] border-[2px] border-black rounded-full flex items-center justify-center group-active:translate-y-[3px] group-active:translate-x-[2px] transition-all duration-75">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#222]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                           </div>
                        </div>
                     </a>
                 </div>
              </div>

              {/* Controls Area */}
              <div className="w-full flex justify-between px-3 md:px-5 items-center mt-2">
                 {/* D-Pad */}
                 <div className="group cursor-pointer" onClick={cyclePhoto}>
                    <div className="drop-shadow-[3px_4px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                       <div className="relative w-20 h-20 md:w-24 md:h-24 group-active:translate-y-[4px] group-active:translate-x-[3px] transition-all duration-75">
                           {/* Horizontal bar */}
                           <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[34%] bg-[#222] rounded-sm flex items-center justify-between px-1.5 md:px-2">
                              {/* Left Grips */}
                              <div className="flex flex-col gap-[2px]">
                                 <div className="w-2 md:w-2.5 h-[2px] bg-[#111] rounded-full"></div>
                                 <div className="w-2 md:w-2.5 h-[2px] bg-[#111] rounded-full"></div>
                                 <div className="w-2 md:w-2.5 h-[2px] bg-[#111] rounded-full"></div>
                              </div>
                              {/* Right Grips */}
                              <div className="flex flex-col gap-[2px]">
                                 <div className="w-2 md:w-2.5 h-[2px] bg-[#111] rounded-full"></div>
                                 <div className="w-2 md:w-2.5 h-[2px] bg-[#111] rounded-full"></div>
                                 <div className="w-2 md:w-2.5 h-[2px] bg-[#111] rounded-full"></div>
                              </div>
                           </div>
                           {/* Vertical bar */}
                           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[34%] h-full bg-[#222] rounded-sm flex flex-col items-center justify-between py-1.5 md:py-2">
                              {/* Top Grips */}
                              <div className="flex gap-[2px]">
                                 <div className="h-2 md:h-2.5 w-[2px] bg-[#111] rounded-full"></div>
                                 <div className="h-2 md:h-2.5 w-[2px] bg-[#111] rounded-full"></div>
                                 <div className="h-2 md:h-2.5 w-[2px] bg-[#111] rounded-full"></div>
                              </div>
                              {/* Bottom Grips */}
                              <div className="flex gap-[2px]">
                                 <div className="h-2 md:h-2.5 w-[2px] bg-[#111] rounded-full"></div>
                                 <div className="h-2 md:h-2.5 w-[2px] bg-[#111] rounded-full"></div>
                                 <div className="h-2 md:h-2.5 w-[2px] bg-[#111] rounded-full"></div>
                              </div>
                           </div>
                           {/* Center piece */}
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[34%] h-[34%] bg-[#222] flex items-center justify-center">
                              {/* Circular Indent */}
                              <div className="w-[10px] h-[10px] md:w-[14px] md:h-[14px] bg-[#1a1a1a] rounded-full shadow-[inset_1px_2px_4px_rgba(0,0,0,0.8)]"></div>
                           </div>
                       </div>
                    </div>
                 </div>

                 {/* Download CV Button (Replaces A/B buttons) */}
                 <div className="flex flex-col items-center relative mt-6 md:mt-8">
                    <a href="/CV a.n Di Muhammad Zulfa Ridha.pdf" download="CV a.n Di Muhammad Zulfa Ridha.pdf" className="group relative flex flex-col items-center cursor-pointer select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; const fileName = e.currentTarget.getAttribute('download'); setTimeout(() => { const link = document.createElement('a'); link.href = url; link.download = fileName; document.body.appendChild(link); link.click(); document.body.removeChild(link); }, 150); }}>
                       <div className="drop-shadow-[3px_4px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#9E2B4B] border-[3px] border-black group-active:translate-y-[4px] group-active:translate-x-[3px] transition-all duration-75 flex items-center justify-center lg:hover:bg-[#E33B6B]">
                             <span className="text-base md:text-lg font-pixel text-white/90">CV</span>
                          </div>
                       </div>
                       <span className="text-[8px] md:text-[10px] font-pixel text-[#222] mt-3 md:mt-4 uppercase tracking-widest text-center whitespace-nowrap">DOWNLOAD</span>
                    </a>
                 </div>
              </div>

              {/* Start/Select Buttons */}
              <div className="flex gap-5 md:gap-8 mt-10 md:mt-12 mb-5 justify-center w-full">
                 <div className="flex flex-col items-center transform -rotate-12 group cursor-pointer" onClick={() => setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), 150)}>
                    <div className="drop-shadow-[2px_3px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                       <div className="w-12 md:w-16 h-3 md:h-4 bg-[#999] border-[2px] border-black rounded-full group-active:translate-y-[3px] group-active:translate-x-[2px] transition-all duration-75"></div>
                    </div>
                    <span className="text-[7px] md:text-[8px] font-pixel text-[#222] mt-2 md:mt-3 uppercase tracking-widest translate-x-[2px]">Start</span>
                 </div>
                 <div className="flex flex-col items-center transform -rotate-12 group cursor-pointer" onClick={cyclePhoto}>
                    <div className="drop-shadow-[2px_3px_0px_#000] group-active:drop-shadow-none transition-all duration-75">
                       <div className="w-12 md:w-16 h-3 md:h-4 bg-[#999] border-[2px] border-black rounded-full group-active:translate-y-[3px] group-active:translate-x-[2px] transition-all duration-75"></div>
                    </div>
                    <span className="text-[7px] md:text-[8px] font-pixel text-[#222] mt-2 md:mt-3 uppercase tracking-widest translate-x-[2px]">Select</span>
                 </div>
              </div>

              {/* Speaker Grilles */}
              <div className="absolute bottom-5 right-5 flex gap-1.5 md:gap-2 transform -rotate-12 opacity-80">
                <div className="w-2 md:w-2.5 h-10 md:h-12 bg-[#111] rounded-full drop-shadow-[1px_1px_0px_rgba(255,255,255,0.7)]"></div>
                <div className="w-2 md:w-2.5 h-10 md:h-12 bg-[#111] rounded-full drop-shadow-[1px_1px_0px_rgba(255,255,255,0.7)]"></div>
                <div className="w-2 md:w-2.5 h-10 md:h-12 bg-[#111] rounded-full drop-shadow-[1px_1px_0px_rgba(255,255,255,0.7)]"></div>
                <div className="w-2 md:w-2.5 h-10 md:h-12 bg-[#111] rounded-full drop-shadow-[1px_1px_0px_rgba(255,255,255,0.7)]"></div>
              </div>

            </div>
         </motion.div>
        
        {/* Right Column: Speech Bubble */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-[55%] max-w-xl lg:max-w-none bg-white p-6 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] flex-shrink-0"
        >
           {/* Left Pointer for Speech Bubble (hidden on mobile/tablet since gameboy is gone) */}
           <div className="hidden lg:block absolute top-1/2 -left-6 transform -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-r-[24px] border-r-white border-b-[20px] border-b-transparent drop-shadow-[-4px_0px_0px_rgba(0,0,0,0.1)]"></div>

           {/* Striped background effect inside the box */}
           <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 3px, #000 3px, #000 4px)' }}></div>
           
           {/* Content */}
           <div className="relative z-20 flex flex-col gap-6">
              
              {/* About Me Section */}
              <div className="flex flex-col gap-4">
                 <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-3">
                       <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 9h1M9 13h6M9 17h6"></path>
                       </svg>
                       <h3 className="font-pixel text-black text-base md:text-lg tracking-widest uppercase">About Me</h3>
                    </div>
                    <div className="hidden xl:block bg-black text-white font-pixel text-[10px] md:text-xs px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] whitespace-nowrap">
                       Di Muhammad Zulfa Ridha
                    </div>
                 </div>
                 
                 <div className="xl:hidden bg-black text-white font-pixel text-[10px] md:text-xs px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] inline-block w-fit">
                    Di Muhammad Zulfa Ridha
                 </div>

                 <p className="font-sans font-medium text-gray-800 text-sm md:text-base leading-relaxed text-justify">
                    Hi! I'm a fresh graduate in Computer Engineering from Syiah Kuala University who enjoys turning ideas into useful digital solutions. My interests include Internet of Things (IoT), Machine Learning, Software Development, and UI/UX Design. I also enjoy graphic design and digital content creation, which help me build products that are both functional and visually engaging. I'm always eager to learn new things, explore new technologies, take on new challenges, and continue growing while creating digital products that are simple, functional, enjoyable to use, and make a real impact.
                 </p>
                 
                 {/* Mobile Only: Download CV & Social Links */}
                 <div className="flex lg:hidden flex-col items-center gap-4 mt-2">
                    <a href="/CV a.n Di Muhammad Zulfa Ridha.pdf" download="CV a.n Di Muhammad Zulfa Ridha.pdf" className="w-full flex items-center justify-center cursor-pointer select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; const fileName = e.currentTarget.getAttribute('download'); setTimeout(() => { const link = document.createElement('a'); link.href = url; link.download = fileName; document.body.appendChild(link); link.click(); document.body.removeChild(link); }, 150); }}>
                       <div className="w-full px-6 py-3 bg-black border-[3px] border-black text-white hover:bg-gray-800 active:translate-y-[2px] active:translate-x-[2px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-75 flex items-center justify-center">
                          <span className="text-sm font-pixel tracking-wider">DOWNLOAD CV</span>
                       </div>
                    </a>
                    <div className="flex items-center gap-5 mt-1">
                       <a href="https://www.linkedin.com/in/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center hover:bg-gray-100 active:translate-y-[2px] active:translate-x-[2px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
                          {/* LinkedIn */}
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                       </a>
                       <a href="https://www.instagram.com/dimzulfar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center hover:bg-gray-100 active:translate-y-[2px] active:translate-x-[2px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
                          {/* Instagram */}
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                       </a>
                       <a href="https://github.com/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center hover:bg-gray-100 active:translate-y-[2px] active:translate-x-[2px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all select-none [-webkit-touch-callout:none] draggable-false" onClick={(e) => { e.preventDefault(); const url = e.currentTarget.href; setTimeout(() => { window.open(url, '_blank') || (window.location.href = url); }, 150); }}>
                          {/* GitHub */}
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                       </a>
                    </div>
                 </div>
              </div>

              {/* Pixel Divider */}
              <div className="w-full border-b-2 border-dashed border-black/20 my-1"></div>

              {/* Education Section */}
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                       <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M12 14v7"></path>
                       <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M21 9v4"></path>
                       <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M7.4 11.5v3.4c0 1.6 2 3.1 4.6 3.1s4.6-1.5 4.6-3.1v-3.4"></path>
                    </svg>
                    <h3 className="font-pixel text-black text-base md:text-lg tracking-widest uppercase">Education</h3>
                 </div>
                 
                 <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-3 xl:gap-0 w-full">
                       <div className="flex items-center gap-4">
                          {/* Timeline dot */}
                          <div className="w-3 h-3 border-2 border-black bg-white flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.4)]"></div>
                          <h4 className="font-sans font-bold text-black text-sm md:text-base leading-tight">Bachelor of Computer Engineering</h4>
                       </div>
                       <div className="pl-7 xl:pl-0 w-full xl:w-auto flex xl:justify-end mt-1 xl:mt-0">
                          <span className="font-pixel text-[8px] md:text-[10px] text-white bg-black px-3 py-1.5 border-2 border-black whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">Sep 2021 - Jan 2026</span>
                       </div>
                    </div>
                    <p className="font-sans font-medium text-gray-700 text-sm md:text-base pl-7">Syiah Kuala University</p>
                 </div>
              </div>
              
           </div>
        </motion.div>
      </div>

      {/* Ground (Image 26 Style) */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-40">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="ground-pattern-about" width="48" height="48" patternUnits="userSpaceOnUse">
              <svg width="48" height="48" viewBox="0 0 16 16" shapeRendering="crispEdges">
                {GROUND_BLOCK.map((row, y) => 
                  row.split('').map((colorCode, x) => {
                    if (colorCode === ' ') return null;
                    return <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={PALETTE[colorCode]} />
                  })
                )}
              </svg>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ground-pattern-about)" />
        </svg>
      </div>
      
    </section>
  );
}
