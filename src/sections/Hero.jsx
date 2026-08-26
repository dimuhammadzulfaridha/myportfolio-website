import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, DownloadSimple, Download, ArrowDown, LinkedinLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center px-4 md:px-12 lg:px-24 pt-24 pb-28 md:pb-4">

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-8 items-center"
      >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            className="text-[2rem] leading-[1.1] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-6"
          >
            DI MUHAMMAD <br />
            <span className="text-white/40 italic font-light">ZULFA RIDHA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.3 }}
            className="text-lg md:text-xl text-white/60 max-w-[45ch] leading-relaxed mb-12 font-light"
          >
            Welcome to my personal portfolio. This is where I document my journey in tech, share my professional experiences, and showcase the skills and digital products I've built along the way.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4"
          >
            <a href="/cv.pdf" download="CV_Di_Muhammad_Zulfa_Ridha.pdf" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white/90 hover:text-white px-8 py-4 font-medium text-sm transition-all duration-300 backdrop-blur-md hover:bg-white/10 active:scale-[0.98]">
              <span>Download CV</span>
              {/* Button-in-Button */}
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:-translate-y-[2px] group-hover:scale-105 text-white/80 group-hover:text-white">
                <Download weight="fill" className="w-4 h-4" />
              </div>
            </a>

            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="w-[52px] h-[52px] rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md hover:border-white/20" aria-label="LinkedIn">
                <LinkedinLogo weight="fill" className="w-5 h-5" />
              </a>
              <a href="https://github.com/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="w-[52px] h-[52px] rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md hover:border-white/20" aria-label="GitHub">
                <GithubLogo weight="fill" className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/dimzulfar" target="_blank" rel="noopener noreferrer" className="w-[52px] h-[52px] rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md hover:border-white/20" aria-label="Instagram">
                <InstagramLogo weight="fill" className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Photo Container */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end w-full lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
            className="w-56 h-56 md:w-80 md:h-80 lg:w-full lg:aspect-[4/5] outer-shell lg:rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <div className="inner-core w-full h-full p-2 bg-white/5 lg:rounded-[calc(3rem-0.375rem)]">
              <div className="w-full h-full bg-white/10 rounded-[calc(2rem-0.75rem)] lg:rounded-[calc(3rem-0.75rem)] flex items-center justify-center">
                <span className="text-white/30 text-xs tracking-widest uppercase font-medium">Foto Kosong</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator (Absolute Bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          className="flex items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">
            Scroll down to explore deeper
          </span>
          <ArrowDown weight="bold" className="w-3.5 h-3.5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
