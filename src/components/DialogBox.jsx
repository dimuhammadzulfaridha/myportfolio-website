import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function DialogBox({ children, title, className }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative bg-black/80 border-4 border-white p-6 text-white pixel-corners backdrop-blur-sm",
        className
      )}
    >
      {title && (
        <div className="absolute -top-4 left-4 bg-black px-2 font-pixel text-xs text-mario-yellow">
          {title}
        </div>
      )}
      <div className="font-sans text-lg leading-relaxed">
        {children}
      </div>
      
      {/* Blinking indicator for RPG dialog style */}
      <div className="absolute bottom-2 right-3 w-3 h-3 bg-white animate-blink" />
    </motion.div>
  );
}
