import { useState, Component, useRef, useEffect } from 'react';

import { motion } from 'framer-motion';
import { LoadingScreen } from './sections/LoadingScreen'
import { Hero } from './sections/Hero'
import { TechStack } from './sections/TechStack'
import { AboutMe } from './sections/AboutMe'
import { Experience } from './sections/Experience'
import { Certificates } from './sections/Certificates'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding: 20, color: 'white', background: 'red', zIndex: 9999, position: 'relative', fontFamily: 'monospace'}}>
          <h2>Something went wrong.</h2>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

import { Sidebar } from './components/Sidebar'

function App() {
  const [isBooted, setIsBooted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (isBooted && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
  }, [isBooted]);

  useEffect(() => {
    const handleScroll = () => {
      if (!audioRef.current) return;
      
      // Maximum volume is 0.3
      const maxVol = 0.3;
      const scrollY = window.scrollY;
      const fadeEnd = window.innerHeight * 0.7; // Fades out completely after 70% of viewport height
      
      let vol = maxVol * (1 - scrollY / fadeEnd);
      
      if (vol <= 0) {
        vol = 0;
        // Pause and reset music when fully faded out
        if (!audioRef.current.paused) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      } else {
        if (vol > maxVol) vol = maxVol;
        // Resume playing (from start if it was reset) when scrolling back up
        if (audioRef.current.paused) {
          audioRef.current.play().catch(e => console.log("Audio resume failed:", e));
        }
      }
      
      audioRef.current.volume = vol;
    };

    if (isBooted) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Set initial volume
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBooted]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <ErrorBoundary>
      <div className="scanlines" />
      
      {!isBooted && (
        <LoadingScreen onComplete={() => setIsBooted(true)} />
      )}

      {/* Background Audio Element */}
      <audio ref={audioRef} src="/themsound.oga" loop />

      {isBooted && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="min-h-screen relative overflow-x-hidden w-full"
        >
          {/* Audio Toggle Button */}
          <button 
            onClick={toggleMute}
            className="fixed top-4 right-4 z-[60] w-10 h-10 bg-black/60 backdrop-blur-md border-[2px] border-white/20 rounded-xl flex items-center justify-center text-xl text-white hover:scale-105 transition-all drop-shadow-[3px_3px_0px_rgba(0,0,0,0.5)]"
            title={isMuted ? "Unmute Music" : "Mute Music"}
          >
            {isMuted ? '🔇' : '🔊'}
          </button>

          <Sidebar />
          <div id="home"><Hero /></div>
          <div id="equipment"><TechStack /></div>
          <div id="aboutme"><AboutMe /></div>
          <div id="experience"><Experience /></div>
          <div id="certificates"><Certificates /></div>
          <div id="contact">
            <Contact />
          </div>
        </motion.main>
      )}
    </ErrorBoundary>
  )
}

export default App
