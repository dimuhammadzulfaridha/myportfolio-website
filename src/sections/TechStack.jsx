import { motion } from 'framer-motion';
import { PixelSprite } from '../components/PixelSprite';

const HTML_LOGO = [
  "                ",
  " hhhhhhhhhhhhhh ",
  " hhiiiiiiiiiiih ",
  " hhiiiiiiiiiiih ",
  " hhhiiwiiwiihhh ",
  " hhhiiwiiwiihhh ",
  " hhhiiwwwwiihhh ",
  " hhhiiwiiwiihhh ",
  " hhhiiwiiwiihhh ",
  " hhiiiiiiiiiiih ",
  "  hhiiiiiiiihh  ",
  "   hhiiiiiihh   ",
  "    hhiiiihh    ",
  "     hhihhh     ",
  "      hhhh      ",
  "                "
];

const CSS_LOGO = [
  "                ",
  " uuuuuuuuuuuuuu ",
  " uuvvvvvvvvvvvu ",
  " uuvvvvvvvvvvvu ",
  " uuuvwwwwwvvuuu ",
  " uuuvwvvvvvvuuu ",
  " uuuvwwwwwvvuuu ",
  " uuuvvvvvwwvuuu ",
  " uuuvwwwwwvvuuu ",
  " uuvvvvvvvvvvvu ",
  "  uuvvvvvvvvuu  ",
  "   uuvvvvvvuu   ",
  "    uuvvvvuu    ",
  "     uuvuuu     ",
  "      uuuu      ",
  "                "
];

const VITE_LOGO = [
  "                ",
  " yyyyyy  222222 ",
  "  yyyyy  22222  ",
  "  yyyyy  22222  ",
  "   yyyy  2222   ",
  "   yyyy  2222   ",
  "    yyy  222    ",
  "    yyy  222    ",
  "     yy  22     ",
  "     yy  22     ",
  "      y  2      ",
  "      y  2      ",
  "                ",
  "                ",
  "                ",
  "                "
];

const FRAMER_MOTION_LOGO = [
  "                ",
  "  222      222  ",
  "  2222    2222  ",
  "  22222  22222  ",
  "  22 22  22 22  ",
  "  22 222222 22  ",
  "  22  2222  22  ",
  "  22   22   22  ",
  "  22        22  ",
  "  22        22  ",
  "  22        22  ",
  "  22        22  ",
  "                ",
  "                ",
  "                ",
  "                "
];

const REACT_LOGO = [
  "                ",
  "       rr       ",
  "    rrr  rrr    ",
  "   r        r   ",
  "   r        r   ",
  "  r   r  r   r  ",
  "  r    rr    r  ",
  "   r  rrrr  r   ",
  "   r  rrrr  r   ",
  "  r    rr    r  ",
  "  r   r  r   r  ",
  "   r        r   ",
  "   r        r   ",
  "    rrr  rrr    ",
  "       rr       ",
  "                "
];

const TAILWIND_LOGO = [
  "                ",
  "                ",
  "                ",
  "       tt       ",
  "      tttt      ",
  "     tttttt     ",
  "    ttt  ttt    ",
  "   ttt    ttt   ",
  "   ttt    ttt   ",
  "    ttt  ttt    ",
  "     tttttt     ",
  "       tt       ",
  "                ",
  "                ",
  "                ",
  "                "
];

const NODE_LOGO = [
  "                ",
  "      nnnn      ",
  "    nn    nn    ",
  "   nn      nn   ",
  "  nn        nn  ",
  "  n n   n    n  ",
  "  n nn  n    n  ",
  "  n n n n    n  ",
  "  n n  nn    n  ",
  "  n n   n    n  ",
  "  nn        nn  ",
  "   nn      nn   ",
  "    nn    nn    ",
  "      nnnn      ",
  "                ",
  "                "
];

const TS_LOGO = [
  "                ",
  " vvvvvvvvvvvvvv ",
  " vvvvvvvvvvvvvv ",
  " vvvvvvvvvvvvvv ",
  " vvvvvvvvvvvvvv ",
  " vvvvvvvvvvvvvv ",
  " vvvvvvvvvvvvvv ",
  " vvvwwwvvwwwvvv ",
  " vvvvwvvvwvvvvv ",
  " vvvvwvvvwwwvvv ",
  " vvvvwvvvvvwvvv ",
  " vvvvwvvvwwwvvv ",
  " vvvvvvvvvvvvvv ",
  " vvvvvvvvvvvvvv ",
  "                ",
  "                "
];

const techItems = [
  // Foundation & Languages
  { id: 7, name: 'HTML5', type: 'Structure', desc: 'The skeleton of the web. Grants +20 Structure.', art: HTML_LOGO },
  { id: 8, name: 'CSS3', type: 'Styling', desc: 'The beauty of the web. +30 Aesthetics.', art: CSS_LOGO },
  { id: 2, name: 'TypeScript', type: 'Language', desc: 'Adds strong typing to JS. +15 Defense against bugs.', art: TS_LOGO },
  
  // Frameworks & Libraries
  { id: 1, name: 'React', type: 'Framework', desc: 'The core engine of this UI. Grants +10 Agility.', art: REACT_LOGO },
  { id: 3, name: 'Tailwind', type: 'Styling', desc: 'Utility-first CSS. +20 Speed in pixel crafting.', art: TAILWIND_LOGO },
  { id: 4, name: 'Framer Motion', type: 'Animation', desc: 'Smooth dynamic movements. +50 Charisma.', art: FRAMER_MOTION_LOGO },
  
  // Tools & Backend
  { id: 6, name: 'Node.js', type: 'Backend', desc: 'JavaScript runtime. +30 Mana for server magic.', art: NODE_LOGO },
  { id: 5, name: 'Vite', type: 'Build Tool', desc: 'Lightning fast dev server. +100 Speed.', art: VITE_LOGO },
];

const MarqueeGroup = () => (
  <div className="flex gap-6 md:gap-12 items-center justify-around min-w-max px-3 md:px-6">
    {techItems.map((item, index) => (
      <div key={index} className="flex items-center transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] rounded-xl">
        <PixelSprite art={item.art} className="w-14 h-14 md:w-20 md:h-20 drop-shadow-xl transition-transform hover:scale-110 hover:-translate-y-2 duration-300" />
      </div>
    ))}
  </div>
);

export function TechStack() {
  return (
    <section className="bg-[#0D1117] text-white py-3 md:py-4 relative flex items-center overflow-hidden border-y-[4px] border-[#30363D]">
      
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)]" style={{ backgroundSize: '24px 24px' }} />

      {/* Left/Right Fade for sleek look */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0D1117] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0D1117] to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden w-full relative z-0">
        <motion.div 
          className="flex py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          <MarqueeGroup />
          <MarqueeGroup />
          <MarqueeGroup />
          <MarqueeGroup />
        </motion.div>
      </div>
    </section>
  );
}
