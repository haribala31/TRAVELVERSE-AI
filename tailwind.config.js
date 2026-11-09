/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#04060F',
          900: '#070A18', // Primary dark navy
          850: '#0B0F24',
          800: '#111736',
          700: '#1A2352',
          600: '#253275',
        },
        purple: {
          DEFAULT: '#8659ED',
          light: '#A785F6',
          dark: '#6A38D4',
          glow: 'rgba(134, 89, 237, 0.4)',
        },
        electric: {
          DEFAULT: '#456FF2',
          light: '#6F91F5',
          dark: '#264FD9',
          glow: 'rgba(69, 111, 242, 0.4)',
        },
        cyan: {
          DEFAULT: '#00F2FE',
          glow: 'rgba(0, 242, 254, 0.4)',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(134, 89, 237, 0.15) 0%, rgba(69, 111, 242, 0.1) 40%, rgba(7, 10, 24, 0) 70%)',
        'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glass-card-hover': 'linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.03) 100%)',
        'cosmic-gradient': 'linear-gradient(135deg, #8659ED 0%, #456FF2 50%, #00F2FE 100%)',
      },
      boxShadow: {
        'glow-purple': '0 0 25px -5px rgba(134, 89, 237, 0.5)',
        'glow-blue': '0 0 25px -5px rgba(69, 111, 242, 0.5)',
        'glow-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
