import { motion } from 'framer-motion';


const experienceData = [
  {
    id: 1,
    tag: 'SSH SURVEYOR',
    date: 'FEB 2026 - APR 2026',
    title: 'SSH SURVEYOR',
    subtitle: 'UPBJ Syiah Kuala University, Banda Aceh',
    description: 'Conducted price surveys across 50+ stores, verified proposed procurement items, and compiled comprehensive reports to support government procurement planning and Standard Unit Price (SSH) preparation.',
    progressColor: 'bg-[#43a047]' // Green
  },
  {
    id: 2,
    tag: 'SOCIAL PROJECT',
    date: 'DEC 2024 - FEB 2025',
    title: 'SOCIAL PROJECT',
    subtitle: 'Innovillage (PT Telkom Indonesia)',
    description: 'Contributed to an Arduino-based social innovation project through system development, hardware testing, and project documentation to support sustainable community solutions.',
    progressColor: 'bg-[#e53935]' // Red
  },
  {
    id: 3,
    tag: 'INFO & COMM DIVISION',
    date: 'FEB 2024 - JAN 2025',
    title: 'INFO & COMM DIVISION',
    subtitle: 'Himpunan Mahasiswa Teknik Komputer',
    description: 'Managed digital content, publication designs, and organizational documentation while collaborating with multiple divisions to support communication and promotional activities.',
    progressColor: 'bg-[#fdd835]' // Yellow
  },
  {
    id: 4,
    tag: 'IOT HARDWARE DEV',
    date: 'FEB 2024 - DEC 2024',
    title: 'IOT HARDWARE DEV',
    subtitle: 'PKM-KC Team (Kemendikbudristek)',
    description: 'Developed an ESP32-based IoT prototype for smart irrigation while contributing to project documentation, publication materials, and outreach activities.',
    progressColor: 'bg-[#1e88e5]' // Blue
  },
  {
    id: 5,
    tag: 'MEDIA CREATIVE',
    date: 'MAR 2024 - NOV 2024',
    title: 'MEDIA CREATIVE',
    subtitle: 'Computer Media Challenge (CMD)',
    description: 'Designed promotional materials, managed social media content, and documented events to support effective communication and student engagement.',
    progressColor: 'bg-[#8e24aa]' // Purple
  },
  {
    id: 6,
    tag: 'MEDIA ADMIN',
    date: 'FEB 2024 - MAR 2024',
    title: 'MEDIA ADMIN',
    subtitle: 'Pusjar SKMK, Banda Aceh',
    description: 'Managed digital media content and organized institutional documents to ensure information was accurate, well-structured, and easily accessible.',
    progressColor: 'bg-[#00acc1]' // Cyan
  },
  {
    id: 7,
    tag: 'ML COHORT',
    date: 'AUG 2023 - JAN 2024',
    title: 'ML COHORT',
    subtitle: 'Bangkit Academy by Google',
    description: 'Completed a six-month intensive program covering Machine Learning with Python and TensorFlow, data processing, deep learning, and collaborative capstone projects aligned with industry practices.',
    progressColor: 'bg-[#fb8c00]' // Orange
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

export function Experience() {
  return (
    <section className="min-h-screen bg-[#6888ff] text-black pt-10 pb-20 md:py-20 px-4 md:px-8 relative flex flex-col items-center overflow-hidden">
      
      {/* Background Grid to look like a map */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(white_2px,_transparent_2px),_linear-gradient(90deg,_white_2px,_transparent_2px)] pointer-events-none" style={{ backgroundSize: '50px 50px' }} />

      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-3xl md:text-5xl font-pixel text-white mb-6 md:mb-16 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] tracking-wider uppercase text-center"
      >
        EXPERIENCE
      </motion.h2>
      
      {/* Outer Wrapper Box (Glassmorphism + Pixel Retro) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 w-full max-w-[1200px] bg-black/40 backdrop-blur-md border-[4px] border-white/20 rounded-2xl p-3 md:p-8 drop-shadow-[8px_8px_0px_rgba(0,0,0,0.6)]"
      >
        
        {/* Timeline Layout */}
        <div className="relative flex flex-col gap-6 md:gap-0 pt-6 pb-6 md:pt-8 md:pb-8">
          
          {/* Central Trunk */}
          <div className="absolute left-[16px] md:left-1/2 top-4 bottom-4 w-3 md:w-5 bg-[#fdf6e3] border-[3px] md:border-[4px] border-black -translate-x-1/2 rounded-full z-0" />

          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.15 }}
                className={`relative w-full md:w-1/2 ${isLeft ? 'md:self-start md:pr-12' : 'md:self-end md:pl-12'} pl-[48px] md:pl-0 z-10 ${index > 0 ? 'md:-mt-[110px] lg:-mt-[130px]' : ''}`}
              >
                
                {/* DESKTOP LEFT BRANCH */}
                {isLeft && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-12 h-1.5 bg-black -translate-y-1/2 z-0">
                    {/* Node on trunk */}
                    <div className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 ${exp.progressColor} border-[3px] border-black rounded-sm shadow-[2px_2px_0px_0px_#000] z-20`} />
                  </div>
                )}

                {/* DESKTOP RIGHT BRANCH */}
                {!isLeft && (
                  <div className="hidden md:block absolute top-1/2 left-0 w-12 h-1.5 bg-black -translate-y-1/2 z-0">
                    {/* Node on trunk */}
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 ${exp.progressColor} border-[3px] border-black rounded-sm shadow-[2px_2px_0px_0px_#000] z-20`} />
                  </div>
                )}

                {/* MOBILE BRANCH */}
                <div className="md:hidden absolute top-1/2 left-[16px] w-[32px] h-1.5 bg-black -translate-y-1/2 z-0">
                  {/* Node on trunk */}
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 ${exp.progressColor} border-[3px] border-black rounded-sm shadow-[2px_2px_0px_0px_#000] z-20`} />
                </div>

                {/* Experience Card */}
                <div className="w-full">
                  <div
                    className="bg-[#fdf6e3] border-[3px] md:border-[4px] border-black rounded-xl flex flex-col p-4 md:p-6 shadow-[4px_4px_0px_0px_#000,8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#000,12px_12px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-300 relative h-full"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)'
                    }}
                  >
                    
                    {/* Pill, Title & Subtitle */}
                    <div className="mb-3 md:mb-4 flex flex-col items-start gap-1">
                      {/* Date Badge */}
                      <div className={`text-white font-pixel text-[6px] md:text-[8px] px-2 py-1 md:px-4 md:py-2 rounded-full uppercase tracking-wider whitespace-nowrap shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)] mb-1 ${exp.progressColor}`}>
                        {exp.date}
                      </div>

                      {/* Title */}
                      <h3 className="font-sans font-black text-base md:text-xl uppercase tracking-wide text-black leading-tight drop-shadow-sm mt-1">
                        {exp.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="font-sans font-bold text-[11px] md:text-sm text-gray-600 mt-1">
                        @ {exp.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-xs md:text-base text-gray-700 leading-relaxed flex-grow mb-4 md:mb-6">
                      {exp.description}
                    </p>

                    {/* Progress Bar Container */}
                    <div className="mt-auto">
                      <div className="w-full h-[14px] bg-gray-200 border-[3px] border-black rounded-full overflow-hidden mb-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                          className={`h-full ${exp.progressColor} shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)]`}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="font-pixel text-[8px] md:text-[10px] text-gray-600 font-bold uppercase tracking-wider">
                          Progress
                        </p>
                        <p className="font-pixel text-[8px] md:text-[10px] text-black font-bold uppercase tracking-wider">
                          100% COMPLETED
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
          
        </div>
      </motion.div>
      
    </section>
  );
}
