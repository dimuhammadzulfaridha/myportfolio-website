import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, GithubLogo, Globe } from '@phosphor-icons/react';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  if (dateStr.toLowerCase() === 'present') return 'Present';
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
  return dateStr;
};

const Experience = () => {
  const containerRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data.json');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        
        const projData = data.projects || [];
        const expData = data.experiences || [];
        
        // Parse tags if needed
        const parsedProj = projData.map(p => ({
          ...p,
          tags: typeof p.tags === 'string' ? JSON.parse(p.tags) : p.tags
        }));
        
        setProjects(parsedProj);
        setExperiences(expData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="experience" className="pt-8 pb-4 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
        
        {/* Left Column: EXPERIENCE */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="mb-12"
          >
            <div className="inline-block rounded-full px-3 py-1 mb-4 text-[10px] uppercase tracking-[0.2em] font-medium border border-white/10 bg-white/5 text-white/50">
              Experience
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-2 text-white">
              My Journey
            </h2>
            <p className="text-base text-white/50 font-light">
              Professional journey and technical contributions.
            </p>
          </motion.div>

          <div className="relative" ref={containerRef}>
            {/* The central vertical line (background) */}
            <div className="absolute left-[27px] md:left-[96px] top-4 bottom-4 w-[2px] bg-white/5"></div>
            {/* The animated filled vertical line */}
            <motion.div 
              className="absolute left-[27px] md:left-[96px] top-4 bottom-4 w-[2px] bg-white/40 origin-top"
              style={{ scaleY: scrollYProgress }}
            ></motion.div>
            
            <div className="flex flex-col gap-10">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
                  className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                >
                  {/* Node on the timeline */}
                  <div className="absolute left-[24px] md:left-[93px] top-[30px] md:top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/10 ring-4 ring-[#090f1d] outline outline-2 outline-white/20 shadow-[0_0_12px_rgba(255,255,255,0.1)] z-10"></div>
                  
                  {/* Date (Left Side on Desktop, hidden on mobile) */}
                  <div className="hidden md:block w-20 flex-shrink-0 text-right mt-1">
                    <div className="text-[13px] font-semibold text-white/90">{formatDate(exp.startDate)}</div>
                    <div className="text-[11px] font-mono text-white/40 mt-1">{formatDate(exp.endDate)}</div>
                  </div>

                  {/* Content Box */}
                  <div className="pl-16 md:pl-0 flex-grow flex items-start md:items-center gap-4 group">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center mt-1 md:mt-0 transition-transform duration-300 group-hover:scale-110">
                      {exp.image ? (
                        <img src={exp.image} alt={exp.title} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <div className="w-full h-full bg-blue-500/20 rounded-full" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-base font-bold text-white/90 leading-tight mb-1 group-hover:text-white transition-colors">{exp.title}</h3>
                      <span className="text-xs text-white/50 font-medium">{exp.company}</span>
                      {/* Mobile Date */}
                      <div className="md:hidden text-[10px] text-white/40 mt-2 font-mono">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: PROJECTS */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="mb-12"
          >
            <div className="inline-block rounded-full px-3 py-1 mb-4 text-[10px] uppercase tracking-[0.2em] font-medium border border-white/10 bg-white/5 text-white/50">
              Projects
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-2 text-white">
              Selected Work
            </h2>
            <p className="text-base text-white/50 font-light">
              Things I've built and researched.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden flex flex-col group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-32 w-full bg-black/40 flex items-center justify-center overflow-hidden relative border-b border-white/5">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" 
                    />
                  ) : (
                    <div className="text-3xl text-white/5 font-mono group-hover:text-white/10 transition-colors duration-500">
                      {"{}"}
                    </div>
                  )}
                  {/* Optional Hover Overlay Icon */}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 hover:bg-black/80 z-20"
                    >
                      {project.link.includes('github.com') ? (
                        <GithubLogo weight="fill" className="text-white w-4 h-4" />
                      ) : (
                        <Globe weight="bold" className="text-white w-4 h-4" />
                      )}
                    </a>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-sm font-bold text-white/90 mb-1 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-[10px] text-white/50 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-1.5 py-0.5 text-[7px] uppercase tracking-wider font-semibold border border-white/10 rounded-full text-white/60 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
