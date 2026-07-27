import { PixelButton } from '../components/PixelButton';
import { motion } from 'framer-motion';
import { Footer } from './Footer';

export function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#080b14] via-[#111827] to-[#2e2b5e] relative overflow-hidden flex flex-col">
      {/* Starry Night Background with Animated Stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className={`absolute bg-white/80 rounded-full ${i >= 40 ? 'block md:hidden' : ''}`}
            style={{
              width: Math.random() > 0.8 ? '3px' : '2px',
              height: Math.random() > 0.8 ? '3px' : '2px',
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: Math.random() > 0.8 ? '0 0 4px 1px rgba(255,255,255,0.8)' : 'none'
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
          />
        ))}

        {/* Pixel/Retro Moon */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-16 right-10 md:top-24 md:right-[20%] w-16 h-16 md:w-24 md:h-24 rounded-full"
          style={{
            boxShadow: 'inset -12px -12px 0 2px #fde047, 0 0 20px 0 rgba(253,224,71,0.2)',
            transform: 'rotate(-20deg)'
          }}
        />
      </div>

      {/* Dark Retro Hills Silhouette */}
      <div className="absolute bottom-8 md:bottom-16 left-0 right-0 flex items-end pointer-events-none overflow-hidden opacity-80 z-0">
        <div className="w-[300px] h-[100px] md:h-[150px] bg-[#0a0e17] rounded-t-[100%] ml-[-50px] shrink-0" />
        <div className="w-[400px] h-[150px] md:h-[250px] bg-[#070a12] rounded-t-[100%] ml-[-150px] shrink-0" />
        <div className="w-[350px] h-[120px] md:h-[180px] bg-[#0a0e17] rounded-t-[100%] ml-[-100px] shrink-0" />
        <div className="w-[500px] h-[220px] bg-[#070a12] rounded-t-[100%] ml-[-200px] shrink-0 hidden md:block" />
        <div className="w-[300px] h-[160px] bg-[#0a0e17] rounded-t-[100%] ml-[-150px] shrink-0 hidden md:block" />
      </div>

      {/* Fireflies / Glowing Particles */}
      <div className="absolute bottom-8 md:bottom-16 left-0 right-0 h-40 md:h-64 pointer-events-none z-0 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={`firefly-${i}`}
            className={`absolute w-1.5 h-1.5 bg-[#a3e635] rounded-full shadow-[0_0_10px_3px_rgba(163,230,53,0.6)] ${i >= 15 ? 'block md:hidden' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -Math.random() * 30 - 10, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Main Content Area (takes up remaining space) */}
      <div className="flex-1 flex items-center justify-center relative z-20 w-full pt-16 pb-8 px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-black/90 p-5 md:p-8 border-4 md:border-8 border-white rounded-xl shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center max-w-2xl w-full mx-4"
        >
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-5xl text-[#fde047] mb-2 md:mb-3 drop-shadow-[2px_2px_0px_#000] leading-snug">MISSION COMPLETE!</h2>
          <p className="font-pixel text-[10px] md:text-sm text-white/80 mb-5 md:mb-6 tracking-widest uppercase">THANK YOU FOR PLAYING</p>

          <div className="flex flex-col gap-3 w-full max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="ENTER YOUR NAME" 
              className="w-full bg-[#1a1a1a] border-4 border-[#333] p-3 md:p-4 font-pixel text-[10px] md:text-xs text-white focus:outline-none focus:border-[#fde047] focus:shadow-[4px_4px_0px_#000] transition-all rounded-lg placeholder:text-gray-600"
            />
            <textarea 
              placeholder="YOUR MESSAGE..." 
              rows={4}
              className="w-full bg-[#1a1a1a] border-4 border-[#333] p-3 md:p-4 font-pixel text-[10px] md:text-xs text-white focus:outline-none focus:border-[#fde047] focus:shadow-[4px_4px_0px_#000] transition-all rounded-lg resize-none placeholder:text-gray-600"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center">
              <PixelButton variant="success" className="w-full sm:w-1/2 text-[10px] md:text-xs py-3">
                SEND MESSAGE
              </PixelButton>
              <PixelButton variant="primary" className="w-full sm:w-1/2 text-[10px] md:text-xs py-3">
                DOWNLOAD CV
              </PixelButton>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Mario style ground at the bottom of contact (Night Mode) */}
      <div 
        className="w-full h-8 md:h-16 border-t-4 border-black z-10 shrink-0 relative" 
        style={{ 
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(90deg, #1e293b 50%, transparent 50%), linear-gradient(90deg, #334155 50%, transparent 50%)', 
          backgroundSize: '32px 32px' 
        }} 
      />
      
      {/* Integrated Footer right below the ground block */}
      <Footer />
    </section>
  );
}
