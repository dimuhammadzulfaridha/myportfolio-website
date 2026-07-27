import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Utility to merge tailwind classes */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function PixelButton({ children, className, variant = 'primary', ...props }) {
  const baseStyles = "relative inline-block px-6 py-3 font-pixel text-sm uppercase tracking-wider text-white transition-transform active:scale-95";
  
  const variants = {
    primary: "bg-mario-sky border-b-4 border-r-4 border-blue-700 hover:bg-blue-500",
    secondary: "bg-mario-yellow text-black border-b-4 border-r-4 border-yellow-600 hover:bg-yellow-400",
    danger: "bg-mario-red border-b-4 border-r-4 border-red-800 hover:bg-red-500",
    success: "bg-mario-green border-b-4 border-r-4 border-green-800 hover:bg-green-500",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={cn(baseStyles, variants[variant], 'pixel-corners', className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
