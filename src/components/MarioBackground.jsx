// React not needed in new JSX transform
import { motion } from 'framer-motion';
import { PixelSprite, PALETTE } from './PixelSprite';

export const CLOUD = [
  "          bbbb          ",
  "        bbwwwwbb        ",
  "       bwwwwwwwwb       ",
  "    bbbwwwwwwwwwwbbb    ",
  "  bbwwwwwwwwwwwwwwwwbb  ",
  " bwwwwwwwwwwwwwwwwwwwwb ",
  "bwwwwwwwwwwwwwwwwwwwwwwb",
  "bwwwwwwwwwwwwwwwwwwwwwwb",
  "bssssssssssssssssssssssb",
  " bssssssssssssssssssssb ",
  "  bbbbbbbbbbbbbbbbbbbb  "
];

export const BUSH = [
  "          bbbb          ",
  "        bbllllbb        ",
  "       bllllllllb       ",
  "    bbbllllllllllbbb    ",
  "  bbllllllllllllllllbb  ",
  " bllllllllllllllllllllb ",
  "bllllllllllllllllllllllb",
  "bllllllllllllllllllllllb",
  "bggggggggggggggggggggggb",
  " bggggggggggggggggggggb ",
  "  bbbbbbbbbbbbbbbbbbbb  "
];

export const HILL = [
  "               bb               ",
  "              bllb              ",
  "             blglb              ",
  "            blllllb             ",
  "           bllgllllb            ",
  "          blllllllllb           ",
  "         bllglllglllb           ",
  "        bllllllllllllb          ",
  "       blllllgllllglllb         ",
  "      bllglllllllllllllb        ",
  "     bllllllllllgllllgllb       ",
  "    bllgllllgllllllllllllb      ",
  "   bllllllllllllllgllllgllb     ",
  "  bllgllllgllllglllllllllllb    ",
  " bllllllllllllllllllgllllgllb   ",
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb  "
];

export const QUESTION_BLOCK = [
  "ooooooooooooooob",
  "oyyyyyyyyyyyyybb",
  "oybyyyyyyyyybybb",
  "oyyyyyyyyyyyyybb",
  "oyyyyoooobyyyybb",
  "oyyyooboobyyyybb",
  "oyyyooboobyyyybb",
  "oyyybboobyyyyybb",
  "oyyyyyoobyyyyybb",
  "oyyyyyoobyyyyybb",
  "oyyyyybbbyyyyybb",
  "oyyyyyyyyyyyyybb",
  "oyyyyyoobyyyyybb",
  "oybyyybbbyyybybb",
  "obbbbbbbbbbbbbbb",
  "bbbbbbbbbbbbbbbb"
];

export const BRICK_BLOCK = [
  "bbbbbbbbbbbbbbbb",
  "boooobooooobooob",
  "boooobooooobooob",
  "boooobooooobooob",
  "bbbbbbbbbbbbbbbb",
  "boobooooobooooob",
  "boobooooobooooob",
  "boobooooobooooob",
  "bbbbbbbbbbbbbbbb",
  "boooobooooobooob",
  "boooobooooobooob",
  "boooobooooobooob",
  "bbbbbbbbbbbbbbbb",
  "boobooooobooooob",
  "boobooooobooooob",
  "bbbbbbbbbbbbbbbb"
];

export const MUSHROOM = [
  "      bbbb      ",
  "    bbwwwobb    ",
  "   bwowoowwob   ",
  "  bwooooowwoob  ",
  " bwwooooooooowb ",
  " bwwooooooooowb ",
  " bwoooowwoooowb ",
  " bwoooowwoooowb ",
  "  booooooooowb  ",
  "   bbbbbbbbbb   ",
  "    bccccccb    ",
  "   bccbbbbccb   ",
  "   bccccccccb   ",
  "   bccccccccb   ",
  "    bbbbbbbb    "
];

export const GOOMBA = [
  "      dddd      ",
  "     dddddd     ",
  "    dddddddd    ",
  "   dddddddddd   ",
  "  dddbbddbbddd  ",
  " ddddbbddbbdddd ",
  "dddddcbddbcddddd",
  "dddddcbddbcddddd",
  "dddddccddccddddd",
  " dddccccccccddd ",
  "  bbccccccccbb  ",
  " bbbbccccccbbbb ",
  "bbbbbbccccbbbbbb",
  "bbbbbb    bbbbbb",
  "bbbbbb    bbbbbb"
];

export const GROUND_BLOCK = [
  "coooooooooooooob",
  "coccooooooocooob",
  "coocbooooobcooob",
  "cooboooooobbooob",
  "coobooooooboooob",
  "cooobbbbbbooooob",
  "cooocoooooooooob",
  "coobcoooooooooob",
  "cooboooobbbbooob",
  "coobooobcoobooob",
  "coooooocooobooob",
  "cooooobcooobooob",
  "coooooboooobooob",
  "coooobboooobboob",
  "coooooooooooooob",
  "bbbbbbbbbbbbbbbb"
];

export const PIPE = [
  "bbbbbbbbbbbbbbbbbbbbbbbb",
  "bllllllggggggggggglglglb",
  "bllllllgggggggggggglglgb",
  "bllbbllggggggggggglglglb",
  "bllbbllgggggggggggglglgb",
  "bllllllggggggggggglglglb",
  "bllllllgggggggggggglglgb",
  "bbbbbbbbbbbbbbbbbbbbbbbb",
  "  bblllllgggggggglglglbb",
  "  bblllllggggggggglglgbb",
  "  bblbbllgggggggglglglbb",
  "  bblbbllggggggggglglgbb",
  "  bblllllgggggggglglglbb",
  "  bblllllggggggggglglgbb",
  "  bblllllgggggggglglglbb",
  "  bblllllggggggggglglgbb",
  "  bblllllgggggggglglglbb",
  "  bblllllggggggggglglgbb",
  "  bblllllgggggggglglglbb",
  "  bblllllggggggggglglgbb",
  "  bblllllgggggggglglglbb",
  "  bblllllggggggggglglgbb",
  "  bblllllgggggggglglglbb",
  "  bblllllggggggggglglgbb"
];

export function MarioBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-mario-sky">
      
      {/* Parallax Clouds (Seamless Infinite Loop & Instantly Visible) */}
      
      {/* Layer 1: Large & Fast */}
      <motion.div 
        animate={{ x: ['0%', '-50%'] }} 
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="hidden md:flex absolute top-0 left-0 h-full w-[200vw]"
      >
        <div className="w-[100vw] h-full relative">
          <div className="absolute top-[5%] left-[5%]"><PixelSprite art={CLOUD} scale={9} className="opacity-90" /></div>
          <div className="absolute top-[12%] left-[40%]"><PixelSprite art={CLOUD} scale={8} className="opacity-90" /></div>
          <div className="absolute top-[5%] left-[75%]"><PixelSprite art={CLOUD} scale={9} className="opacity-90" /></div>
        </div>
        <div className="w-[100vw] h-full relative">
          <div className="absolute top-[5%] left-[5%]"><PixelSprite art={CLOUD} scale={9} className="opacity-90" /></div>
          <div className="absolute top-[12%] left-[40%]"><PixelSprite art={CLOUD} scale={8} className="opacity-90" /></div>
          <div className="absolute top-[5%] left-[75%]"><PixelSprite art={CLOUD} scale={9} className="opacity-90" /></div>
        </div>
      </motion.div>

      {/* Layer 2: Medium & Normal Speed */}
      <motion.div 
        animate={{ x: ['0%', '-50%'] }} 
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="hidden md:flex absolute top-0 left-0 h-full w-[200vw]"
      >
        <div className="w-[100vw] h-full relative">
          <div className="absolute top-[28%] left-[15%]"><PixelSprite art={CLOUD} scale={7} className="opacity-80" /></div>
          <div className="absolute top-[38%] left-[50%]"><PixelSprite art={CLOUD} scale={6} className="opacity-80" /></div>
          <div className="absolute top-[25%] left-[85%]"><PixelSprite art={CLOUD} scale={7} className="opacity-80" /></div>
        </div>
        <div className="w-[100vw] h-full relative">
          <div className="absolute top-[28%] left-[15%]"><PixelSprite art={CLOUD} scale={7} className="opacity-80" /></div>
          <div className="absolute top-[38%] left-[50%]"><PixelSprite art={CLOUD} scale={6} className="opacity-80" /></div>
          <div className="absolute top-[25%] left-[85%]"><PixelSprite art={CLOUD} scale={7} className="opacity-80" /></div>
        </div>
      </motion.div>

      {/* Layer 3: Small & Slow (Desktop) */}
      <motion.div 
        animate={{ x: ['0%', '-50%'] }} 
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="hidden md:flex absolute top-0 left-0 h-full w-[200vw]"
      >
        <div className="w-[100vw] h-full relative">
          <div className="absolute top-[50%] left-[5%]"><PixelSprite art={CLOUD} scale={5} className="opacity-60" /></div>
          <div className="absolute top-[58%] left-[35%]"><PixelSprite art={CLOUD} scale={4} className="opacity-60" /></div>
          <div className="absolute top-[48%] left-[65%]"><PixelSprite art={CLOUD} scale={5} className="opacity-60" /></div>
          <div className="absolute top-[55%] left-[90%]"><PixelSprite art={CLOUD} scale={4} className="opacity-60" /></div>
        </div>
        <div className="w-[100vw] h-full relative">
          <div className="absolute top-[50%] left-[5%]"><PixelSprite art={CLOUD} scale={5} className="opacity-60" /></div>
          <div className="absolute top-[58%] left-[35%]"><PixelSprite art={CLOUD} scale={4} className="opacity-60" /></div>
          <div className="absolute top-[48%] left-[65%]"><PixelSprite art={CLOUD} scale={5} className="opacity-60" /></div>
          <div className="absolute top-[55%] left-[90%]"><PixelSprite art={CLOUD} scale={4} className="opacity-60" /></div>
        </div>
      </motion.div>

      {/* Layer 3: Small & Fast (Mobile) */}
      <motion.div 
        animate={{ x: ['0%', '-50%'] }} 
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="flex md:hidden absolute top-0 left-0 h-full w-[200vw]"
      >
        <div className="w-[100vw] h-full relative">
          {/* Mobile-only extra clouds to fill the top sky */}
          <div className="md:hidden absolute top-[1%] left-[30%]"><PixelSprite art={CLOUD} scale={4} className="opacity-70" /></div>
          <div className="md:hidden absolute top-[3%] left-[80%]"><PixelSprite art={CLOUD} scale={5} className="opacity-85" /></div>
          <div className="md:hidden absolute top-[6%] left-[40%]"><PixelSprite art={CLOUD} scale={3} className="opacity-60" /></div>
          
          <div className="absolute top-[2%] left-[15%]"><PixelSprite art={CLOUD} scale={5} className="opacity-80" /></div>
          <div className="absolute top-[5%] left-[65%]"><PixelSprite art={CLOUD} scale={6} className="opacity-90" /></div>
          <div className="absolute top-[8%] left-[90%]"><PixelSprite art={CLOUD} scale={4} className="opacity-60" /></div>
          <div className="absolute top-[12%] left-[5%]"><PixelSprite art={CLOUD} scale={6} className="opacity-90" /></div>
          <div className="absolute top-[25%] left-[35%]"><PixelSprite art={CLOUD} scale={4} className="opacity-50" /></div>
          <div className="absolute top-[40%] left-[65%]"><PixelSprite art={CLOUD} scale={5} className="opacity-70" /></div>
          <div className="absolute top-[55%] left-[90%]"><PixelSprite art={CLOUD} scale={4} className="opacity-40" /></div>
        </div>
        <div className="w-[100vw] h-full relative">
          {/* Mobile-only extra clouds to fill the top sky */}
          <div className="md:hidden absolute top-[1%] left-[30%]"><PixelSprite art={CLOUD} scale={4} className="opacity-70" /></div>
          <div className="md:hidden absolute top-[3%] left-[80%]"><PixelSprite art={CLOUD} scale={5} className="opacity-85" /></div>
          <div className="md:hidden absolute top-[6%] left-[40%]"><PixelSprite art={CLOUD} scale={3} className="opacity-60" /></div>
          
          <div className="absolute top-[2%] left-[15%]"><PixelSprite art={CLOUD} scale={5} className="opacity-80" /></div>
          <div className="absolute top-[5%] left-[65%]"><PixelSprite art={CLOUD} scale={6} className="opacity-90" /></div>
          <div className="absolute top-[8%] left-[90%]"><PixelSprite art={CLOUD} scale={4} className="opacity-60" /></div>
          <div className="absolute top-[12%] left-[5%]"><PixelSprite art={CLOUD} scale={6} className="opacity-90" /></div>
          <div className="absolute top-[25%] left-[35%]"><PixelSprite art={CLOUD} scale={4} className="opacity-50" /></div>
          <div className="absolute top-[40%] left-[65%]"><PixelSprite art={CLOUD} scale={5} className="opacity-70" /></div>
          <div className="absolute top-[55%] left-[90%]"><PixelSprite art={CLOUD} scale={4} className="opacity-40" /></div>
        </div>
      </motion.div>

      {/* Floating Platforms (Right Side) */}
      <div className="hidden md:flex absolute top-[40%] right-[15%]">
        <PixelSprite art={QUESTION_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={QUESTION_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
      </div>
      
      {/* Mushroom sitting on the platform */}
      <div className="hidden md:block absolute top-[calc(40%-60px)] right-[calc(15%+64px)]">
        <PixelSprite art={MUSHROOM} scale={4} />
      </div>

      {/* Floating blocks (Left Side) - Desktop */}
      <div className="hidden md:flex absolute top-[50%] left-[15%]">
        <PixelSprite art={BRICK_BLOCK} scale={4} />
        <PixelSprite art={QUESTION_BLOCK} scale={4} />
        <PixelSprite art={BRICK_BLOCK} scale={4} />
      </div>

      {/* Floating blocks (Left Side) - Mobile */}
      <div className="flex md:hidden absolute top-[15%] left-[5%]">
        <PixelSprite art={BRICK_BLOCK} scale={3} />
        <PixelSprite art={QUESTION_BLOCK} scale={3} />
        <PixelSprite art={BRICK_BLOCK} scale={3} />
      </div>

      {/* Floating blocks (Right Side) - Mobile */}
      <div className="flex md:hidden absolute top-[35%] right-[5%]">
        <PixelSprite art={QUESTION_BLOCK} scale={3} />
        <PixelSprite art={BRICK_BLOCK} scale={3} />
      </div>

      {/* Scenery on Ground (Matching Reference Layout) */}
      
      {/* --- DESKTOP SCENERY --- */}
      {/* Big Hill */}
      <div className="hidden md:block absolute bottom-[96px] left-[2%]">
        <PixelSprite art={HILL} scale={8} />
      </div>
      {/* Single Bush */}
      <div className="hidden md:block absolute bottom-[96px] left-[28%]">
        <PixelSprite art={BUSH} scale={4} />
      </div>
      {/* Small Hill */}
      <div className="hidden md:block absolute bottom-[96px] left-[45%]">
        <PixelSprite art={HILL} scale={5} />
      </div>
      {/* Triple Bush */}
      <div className="hidden md:flex absolute bottom-[96px] left-[65%] -space-x-4">
        <PixelSprite art={BUSH} scale={4} className="relative z-30" />
        <PixelSprite art={BUSH} scale={4} className="relative z-20" />
        <PixelSprite art={BUSH} scale={4} className="relative z-10" />
      </div>
      {/* Green Pipe (Far Right) */}
      <div className="hidden md:block absolute bottom-[96px] right-[8%] z-10">
        <PixelSprite art={PIPE} scale={4} />
      </div>

      {/* --- MOBILE SCENERY --- */}
      {/* Big Tree (Left) */}
      <div className="block md:hidden absolute bottom-[96px] left-[2%]">
        <PixelSprite art={HILL} scale={6} />
      </div>
      {/* Small Tree (Middle) */}
      <div className="block md:hidden absolute bottom-[96px] left-[42%]">
        <PixelSprite art={BUSH} scale={3} />
      </div>
      {/* Green Pipe (Far Right) */}
      <div className="block md:hidden absolute bottom-[96px] right-[5%] z-10">
        <PixelSprite art={PIPE} scale={4} />
      </div>
      {/* Walking Goomba */}
      <motion.div 
        animate={{ x: ['10vw', '90vw', '10vw'] }} 
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute bottom-[96px] left-0 z-40"
      >
        <div className="hidden md:block">
          <PixelSprite art={GOOMBA} scale={3} />
        </div>
        <div className="block md:hidden">
          <PixelSprite art={GOOMBA} scale={2} />
        </div>
      </motion.div>

      {/* Ground (Image 26 Style) */}
      <div className="absolute bottom-0 w-full h-[96px] z-50">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="ground-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#ground-pattern)" />
        </svg>
      </div>

    </div>
  );
}
