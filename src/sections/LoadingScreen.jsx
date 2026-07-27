import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [showPressStart, setShowPressStart] = useState(false);
  const [bootText, setBootText] = useState([]);

  useEffect(() => {
    const texts = [
      "BIOS Date 07/24/26 17:15:54 Ver 1.00",
      "CPU: RETRO-CORE 8-BIT",
      "Memory Test: 640K OK",
      "Initializing Graphics...",
      "Loading Assets...",
      "SYSTEM READY."
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < texts.length) {
        setBootText((prev) => [...prev, texts[i]]);
        setProgress(Math.floor(((i + 1) / texts.length) * 100));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowPressStart(true), 500);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleStartClick = () => {
    const sfx = new Audio('/startsound.ogg');
    sfx.volume = 0.8;
    sfx.play().catch(e => console.log("SFX play failed:", e));
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center crt font-pixel text-green-500 p-8"
      >
        <div className="w-full max-w-lg md:max-w-3xl text-left mb-8 md:mb-12 text-xs sm:text-sm md:text-xl lg:text-2xl leading-relaxed md:leading-loose px-2 sm:px-4 break-words">
          {bootText.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {text}
            </motion.div>
          ))}
        </div>

        <div className="w-full max-w-sm md:max-w-2xl h-6 md:h-10 border-2 md:border-4 border-green-500 p-1 md:p-1.5 mb-8 mx-4">
          <div 
            className="h-full bg-green-500 transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {showPressStart && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <motion.button
              animate={{ 
                textShadow: [
                  "0px 0px 4px rgba(255,255,255,0.2)",
                  "0px 0px 12px rgba(253,224,71,0.6)",
                  "0px 0px 4px rgba(255,255,255,0.2)"
                ]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0px 0px 20px rgba(253,224,71,1)",
                color: "#fde047"
              }}
              whileTap={{ scale: 0.95 }}
              className="text-xl md:text-2xl text-white transition-colors whitespace-nowrap flex items-center justify-center gap-4 group relative px-6 py-3"
              onClick={handleStartClick}
            >
              {/* Left Arrow bouncing */}
              <motion.span 
                animate={{ x: [0, 6, 0] }} 
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="text-green-500 group-hover:text-white"
              >&gt;</motion.span>
              
              <span className="tracking-widest relative z-10 font-bold">PRESS START</span>
              
              {/* Right Arrow bouncing */}
              <motion.span 
                animate={{ x: [0, -6, 0] }} 
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="text-green-500 group-hover:text-white"
              >&lt;</motion.span>
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
