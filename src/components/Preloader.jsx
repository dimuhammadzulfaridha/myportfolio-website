import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cat } from '@phosphor-icons/react';

const Preloader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("Please wait");
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Animasi titik-titik berjalan
    const dotsInterval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    // Ganti teks menjadi Welcome setelah 2.5 detik
    const textTimer = setTimeout(() => {
      clearInterval(dotsInterval);
      setText("Welcome!");
    }, 2500);

    // Selesai loading setelah 4 detik
    const endTimer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) {
        onComplete();
      }
    }, 4000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(textTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center"
        >
          {/* Animasi Kucing Berjalan / Meme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center pointer-events-none"
          >
            {/* Gambar GIF Kucing dari folder public */}
            {/* mix-blend-screen menghilangkan background hitam. Jika background GIF-nya putih, ganti dengan mix-blend-multiply */}
            <img 
              src="/images/loadingcat.gif" 
              alt="Walking Cat" 
              className="w-56 h-56 md:w-72 md:h-72 object-contain object-bottom mix-blend-screen scale-[1.2]"
            />
          </motion.div>

          {/* Teks yang berubah */}
          <div className="h-6 flex items-center -mt-10 md:-mt-16 w-full justify-center translate-x-3 md:translate-x-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative flex items-center justify-center w-full"
              >
                <span className="text-[#f8fafc]/80 text-base md:text-lg tracking-widest font-semibold text-center">
                  {text}{text === "Please wait" ? dots : null}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
