import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const educationData = [
  { id: 1, year: '2016', title: 'SMA Misi 1', desc: 'Misi diselesaikan dengan pangkat tinggi.', status: 'Completed' },
  { id: 2, year: '2019', title: 'Universitas A', desc: 'Gelar Sarjana diperoleh. Level Up!', status: 'Completed' },
  { id: 3, year: '2023', title: 'Bootcamp X', desc: 'Skill Web Development +50', status: 'Completed' },
];

export function Education() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-[#6888ff] relative overflow-hidden flex flex-col items-center py-20 px-4">
      {/* Background Grid to look like a map */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(white_2px,_transparent_2px),_linear-gradient(90deg,_white_2px,_transparent_2px)]" style={{ backgroundSize: '50px 50px' }} />
      
      <h2 className="font-pixel text-3xl md:text-5xl text-white mb-20 text-center text-shadow-pixel z-10">WORLD MAP</h2>
      
      <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-between z-10 mt-10">
        
        {/* The Path Line */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-mario-brick transform -translate-y-1/2" />
        
        {/* Nodes */}
        {educationData.map((edu, index) => (
          <div key={edu.id} className="relative flex flex-col items-center">
            
            {/* Map Node */}
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveNode(activeNode === edu.id ? null : edu.id)}
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-black z-20 flex items-center justify-center font-pixel text-xs text-black ${activeNode === edu.id ? 'bg-mario-yellow' : 'bg-white'}`}
            >
              {index + 1}
            </motion.button>
            
            <div className="absolute top-20 font-pixel text-xs text-white text-shadow-pixel whitespace-nowrap bg-black/50 p-2 rounded">
              {edu.year}
            </div>

            {/* Popup Detail */}
            <AnimatePresence>
              {activeNode === edu.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: -10, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute bottom-20 bg-black border-4 border-white pixel-corners p-4 w-64 z-30"
                >
                  <h3 className="font-pixel text-mario-yellow text-sm mb-2">{edu.title}</h3>
                  <p className="font-sans text-white text-sm">{edu.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        ))}
      </div>
    </section>
  );
}
