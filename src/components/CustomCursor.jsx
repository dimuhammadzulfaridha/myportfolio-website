import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop devices (no touch)
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    document.body.classList.add('hide-cursor');

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      if (isJumping) {
        setTimeout(() => setIsJumping(false), 50);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    
    const handleMouseEnter = (e) => {
      setIsJumping(true);
      if (e.clientX !== undefined) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
      setIsVisible(true);
    };

    const handleFocus = () => {
      setIsJumping(true);
      setIsVisible(true);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('focus', handleFocus);

    // Add event listeners to all interactive elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    // Initial attachment
    addHoverListeners();

    // Re-attach listeners when DOM mutations happen (e.g. modals opening)
    const observer = new MutationObserver((mutations) => {
      addHoverListeners();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('focus', handleFocus);
      
      const interactives = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      observer.disconnect();
      document.body.classList.remove('hide-cursor');
    };
  }, [isVisible]);

  // If touch device or cursor is out of window, don't render
  if (window.matchMedia("(hover: none)").matches || !isVisible) return null;

  return (
    <>
      {/* Outer Ring (Delayed/Spring) */}
      <motion.div
        initial={false}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/40 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        }}
        transition={
          isJumping
            ? { duration: 0 }
            : { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }
        }
      />
      
      {/* Inner Dot (Instant) */}
      <motion.div
        initial={false}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0
        }}
      />
    </>
  );
};

export default CustomCursor;
