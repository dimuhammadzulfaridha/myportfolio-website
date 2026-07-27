/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mario: {
          sky: '#5c94fc', // Bright sky blue
          green: '#00a800', // Pipe green
          greenDark: '#008800', // Pipe shadow
          brick: '#c84c0c', // Brown brick
          red: '#e4002b', // Mario red
          yellow: '#f8d820', // Coin/Block yellow
          yellowDark: '#e0b800', // Coin shadow
          ground: '#e8b070', // Ground light brown
          text: '#ffffff', // Default white for text on dark/colored bg
          dark: '#101010', // For dark contrast parts (if needed)
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'scanlines': 'scanlines 10s linear infinite',
        'crt-flicker': 'crt-flicker 0.15s infinite',
        'typewriter': 'typing 2s steps(40, end), blink .75s step-end infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        scanlines: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        'crt-flicker': {
          '0%': { opacity: '0.95' },
          '100%': { opacity: '1' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
