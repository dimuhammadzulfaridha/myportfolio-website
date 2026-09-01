import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Code, Palette, Cpu, GithubLogo, LinkedinLogo, InstagramLogo, SpotifyLogo, ArrowUpRight } from '@phosphor-icons/react';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const About = () => {
  const [calConfig, setCalConfig] = useState({ blockSize: 14, blockMargin: 4 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setCalConfig({ blockSize: 8, blockMargin: 2 });
      } else if (width < 640) {
        setCalConfig({ blockSize: 10, blockMargin: 3 });
      } else if (width < 1024) {
        setCalConfig({ blockSize: 12, blockMargin: 3 });
      } else if (width < 1280) {
        setCalConfig({ blockSize: 11, blockMargin: 3 });
      } else {
        setCalConfig({ blockSize: 13, blockMargin: 4 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const languages = [
    { name: "JavaScript", slug: "javascript" },
    { name: "TypeScript", slug: "typescript" },
    { name: "React", slug: "react" },
    { name: "Nuxt.js", slug: "nuxt" },
    { name: "Flutter", slug: "flutter" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Bootstrap", slug: "bootstrap" },
    { name: "NestJS", slug: "nestjs" },
    { name: "Python", slug: "python" },
  ];

  const tools = [
    { name: "Node.js", slug: "nodedotjs" },
    { name: "MySQL", slug: "mysql" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Docker", slug: "docker" },
    { name: "Git", slug: "git" },
    { name: "GitHub", slug: "github" },
    { name: "Firebase", slug: "firebase" },
    { name: "Vercel", slug: "vercel" },
    { name: "Railway", slug: "railway" },
  ];

  const productivity = [
    { name: "ChatGPT", customIcon: `data:image/svg+xml;utf8,%3Csvg%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22white%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M22.2819%209.8211a5.9847%205.9847%200%200%200-.5157-4.9108%206.0462%206.0462%200%200%200-6.5098-2.9A6.0651%206.0651%200%200%200%204.9807%204.1818a5.9847%205.9847%200%200%200-3.9977%202.9%206.0462%206.0462%200%200%200%20.7427%207.0966%205.98%205.98%200%200%200%20.511%204.9107%206.051%206.051%200%200%200%206.5146%202.9001A5.9847%205.9847%200%200%200%2013.2599%2024a6.0557%206.0557%200%200%200%205.7718-4.2058%205.9894%205.9894%200%200%200%203.9977-2.9001%206.0557%206.0557%200%200%200-.7475-7.073zm-9.022%2012.6081a4.4755%204.4755%200%200%201-2.8764-1.0408l.1419-.0804%204.7783-2.7582a.7948.7948%200%200%200%20.3927-.6813v-6.7369l2.02%201.1686a.071.071%200%200%201%20.038.052v5.5826a4.504%204.504%200%200%201-4.4945%204.4944zm-9.6607-4.1254a4.4708%204.4708%200%200%201-.5346-3.0137l.142.0852%204.783%202.7582a.7712.7712%200%200%200%20.7806%200l5.8428-3.3685v2.3324a.0804.0804%200%200%201-.0332.0615L9.74%2019.9502a4.4992%204.4992%200%200%201-6.1408-1.6464zM2.3408%207.8956a4.485%204.485%200%200%201%202.3655-1.9728V11.6a.7664.7664%200%200%200%20.3879.6765l5.8144%203.3543-2.0201%201.1685a.0757.0757%200%200%201-.071%200l-4.8303-2.7865A4.504%204.504%200%200%201%202.3408%207.8956zm16.0993%203.8558L12.596%208.3829%2014.6162%207.2144a.0757.0757%200%200%201%20.071%200l4.8303%202.7913a4.4944%204.4944%200%200%201-.6765%208.1042v-5.6772a.79.79%200%200%200-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759%200%200%200-.7854%200L9.409%209.2297V6.8974a.0662.0662%200%200%201%20.0284-.0615l4.8303-2.7866a4.4992%204.4992%200%200%201%206.6802%204.66zM8.3065%2012.863l-2.02-1.1638a.0804.0804%200%200%201-.038-.0567V6.06a4.4992%204.4992%200%200%201%207.3757-3.4537l-.142.0805L8.704%205.445a.7948.7948%200%200%200-.3927.6813v6.7369zM10.713%2011.97a.496.496%200%200%201-.246-.4253V9.8517a.496.496%200%200%201%20.246-.4253l1.4682-.8478a.496.496%200%200%201%20.492%200l1.4682.8478a.496.496%200%200%201%20.246.4253v1.693a.496.496%200%200%201-.246.4253l-1.4682.8478a.496.496%200%200%201-.492%200z%22%2F%3E%3C%2Fsvg%3E` },
    { name: "Claude", slug: "anthropic" },
    { name: "Gemini AI", slug: "googlegemini" },
    { name: "Postman", slug: "postman" },
    { name: "Trello", slug: "trello" },
  ];

  const socials = [
    { name: 'Instagram', role: 'Daily life & updates', url: 'https://www.instagram.com/dimzulfar', icon: <InstagramLogo weight="fill" className="w-6 h-6 text-[#E4405F]" />, color: 'bg-[#E4405F]/10', tag: 'Social' },
    { name: 'LinkedIn', role: 'Professional networking', url: 'https://www.linkedin.com/in/dimzulfaridha', icon: <LinkedinLogo weight="fill" className="w-6 h-6 text-[#0A66C2]" />, color: 'bg-[#0A66C2]/10', tag: 'Work' },
    { name: 'Spotify', role: 'Coding playlists & jams', url: 'https://open.spotify.com/', icon: <SpotifyLogo weight="fill" className="w-6 h-6 text-[#1DB954]" />, color: 'bg-[#1DB954]/10', tag: 'Music' }
  ];



  return (
    <section id="about" className="pt-8 pb-4 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* About Me Text (Left) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <div className="inline-block self-start rounded-full px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-medium border border-white/10 bg-white/5 text-white/50">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-6">
            Discover the person <br />
            <span className="text-white/30 italic font-light">behind the code.</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
            Hi! I'm a fresh graduate in Computer Engineering from Syiah Kuala University who enjoys turning ideas into useful digital solutions. My interests include Internet of Things (IoT), Machine Learning, Software Development, and UI/UX Design. I also enjoy graphic design and digital content creation, which help me build products that are both functional and visually engaging. I'm always eager to learn new things, explore new technologies, take on new challenges, and continue growing while creating digital products that are simple, functional, enjoyable to use, and make a real impact.
          </p>
        </motion.div>

        {/* Right Column: GitHub & Socials */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* GitHub Card (Top) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
            className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col justify-between relative"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
                  <img src="https://github.com/dimuhammadzulfaridha.png" alt="GitHub Avatar" className="w-full h-full object-cover" />
                </div>
                <span className="text-base md:text-lg font-medium text-white/90">@dimuhammadzulfaridha</span>
              </div>
              <a href="https://github.com/dimuhammadzulfaridha" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs md:text-sm text-white/60 hover:text-white transition-colors">
                <span className="hidden sm:inline">View Profile</span> <GithubLogo weight="fill" className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-white/40 mb-2">
                <span className="ml-auto">Real-time GitHub Contributions ({new Date().getFullYear()})</span>
              </div>

              <div className="flex justify-center w-full overflow-hidden pb-4 pt-2 hide-calendar-scroll">
                <GitHubCalendar
                  username="dimuhammadzulfaridha"
                  year={new Date().getFullYear()}
                  colorScheme="dark"
                  theme={{
                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  }}
                  hideTotalCount={true}
                  hideColorLegend={false}
                  blockSize={calConfig.blockSize}
                  blockMargin={calConfig.blockMargin}
                  fontSize={12}
                  transformData={(data) => {
                    const currentYear = new Date().getFullYear();
                    // Mulai dari 1 Juli tahun ini (bulan ke-6 secara index)
                    const julyFirst = new Date(currentYear, 6, 1);
                    const julyIndex = data.findIndex(day => new Date(day.date) >= julyFirst);
                    
                    if (julyIndex === -1) return data;
                    
                    // Sesuaikan agar mulai pada hari Minggu supaya kotak sebaris rapi
                    const daysToSunday = new Date(data[julyIndex].date).getDay();
                    return data.slice(Math.max(0, julyIndex - daysToSunday));
                  }}
                  renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                      'data-tooltip-id': 'github-tooltip',
                      'data-tooltip-content': `${activity.count} contributions on ${activity.date}`
                    })
                  }
                />
                <Tooltip id="github-tooltip" style={{ fontSize: '10px', padding: '4px 8px', borderRadius: '4px', zIndex: 100 }} />
              </div>
            </div>
          </motion.div>

          {/* Social Links (Bottom) */}
          <div className="relative flex justify-center items-center h-[120px] w-full">
            {socials.map((social, i) => {
              const isLeft = i === 0;
              const isCenter = i === 1;
              const isRight = i === 2;

              return (
                <motion.a
                  href={social.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.name}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -150 : isRight ? 150 : 0,
                    y: isCenter ? 50 : 0
                  }}
                  whileInView={{
                    opacity: 1,
                    x: isLeft ? '-65%' : isRight ? '65%' : '0%',
                    y: 0,
                    scale: isCenter ? 1.05 : 0.9,
                    rotate: isLeft ? -6 : isRight ? 6 : 0,
                    zIndex: isCenter ? 10 : 1
                  }}
                  whileHover={{
                    scale: 1.15,
                    zIndex: 30,
                    rotate: 0,
                    x: isLeft ? '-85%' : isRight ? '85%' : '0%',
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="absolute w-[130px] md:w-[150px] aspect-[4/5] flex flex-col items-center justify-center p-4 rounded-3xl bg-[#0a0a0a]/80 border border-white/10 hover:border-white/30 backdrop-blur-xl cursor-pointer shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-colors duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${social.color}`}>
                    {social.icon}
                  </div>
                  <span className="font-bold text-white/90 text-sm">{social.name}</span>
                  <span className="text-[9px] uppercase tracking-wider text-white/40 mt-1 mb-2">{social.tag}</span>
                  <span className="text-[10px] text-white/50 text-center leading-tight px-1 line-clamp-2">
                    {social.role}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Infinite Vertical Marquee (Tech Stack) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="mt-12 lg:mt-24 flex flex-col items-center"
      >
        <div className="inline-block rounded-full px-3 py-1 mb-6 md:mb-10 text-[10px] uppercase tracking-[0.2em] font-medium border border-white/10 bg-white/5 text-white/50">
          Tech Stack
        </div>

        {/* Marquee Container with Masking */}
        <div className="relative h-[400px] w-full max-w-4xl mx-auto overflow-hidden mask-y flex justify-center gap-4 md:gap-16 px-2 md:px-4">

          {/* Column 1: Languages (Scroll Up) */}
          <div className="flex flex-col w-20 sm:w-32 animate-marquee-y h-max" style={{ animationDuration: `${languages.length * 3}s` }}>
            {[...languages, ...languages].map((tech, idx) => (
              <div key={`lang-${idx}`} className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded-2xl shadow-glow hover:bg-white/10 transition-colors h-24 sm:h-32 group mb-6">
                <img src={tech.customIcon || `https://cdn.simpleicons.org/${tech.slug}/white`} alt={tech.name} className="w-8 h-8 sm:w-12 sm:h-12 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-[9px] sm:text-[10px] text-white/50 mt-3 font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Column 2: Tools & Platforms (Scroll Down) */}
          <div className="flex flex-col w-20 sm:w-32 animate-marquee-y-reverse h-max" style={{ animationDuration: `${tools.length * 3}s` }}>
            {[...tools, ...tools].map((tech, idx) => (
              <div key={`tool-${idx}`} className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded-2xl shadow-glow hover:bg-white/10 transition-colors h-24 sm:h-32 group mb-6">
                <img src={tech.customIcon || `https://cdn.simpleicons.org/${tech.slug}/white`} alt={tech.name} className="w-8 h-8 sm:w-12 sm:h-12 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-[9px] sm:text-[10px] text-white/50 mt-3 font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Column 3: AI & Productivity (Scroll Up) */}
          <div className="flex flex-col w-20 sm:w-32 animate-marquee-y h-max" style={{ animationDuration: `${productivity.length * 3}s` }}>
            {[...productivity, ...productivity].map((tech, idx) => (
              <div key={`prod-${idx}`} className="flex flex-col items-center justify-center p-4 bg-white/[0.02] border border-white/5 rounded-2xl shadow-glow hover:bg-white/10 transition-colors h-24 sm:h-32 group mb-6">
                <img src={tech.customIcon || `https://cdn.simpleicons.org/${tech.slug}/white`} alt={tech.name} className="w-8 h-8 sm:w-12 sm:h-12 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-[9px] sm:text-[10px] text-white/50 mt-3 font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.name}</span>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
