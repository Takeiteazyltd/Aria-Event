/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Varela Round', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#ffb1b9', // New Brand Pink
          600: '#e11d48',
          700: '#be185d',
          800: '#9d174d',
          900: '#881337',
        },
        secondary: {
          50: '#f9f9f8',
          100: '#f2f0eb', // New Brand Beige
          200: '#e5e1d7',
          300: '#d7d1c3',
          400: '#c9c2af',
          500: '#bab29b',
          600: '#a19983',
          700: '#817a69',
          800: '#615c4f',
          900: '#413d35',
        },
        accent: {
          50: '#f0f3f9',
          100: '#e1e7f3',
          200: '#c3cfe7',
          300: '#a5b7db',
          400: '#879fcf',
          500: '#202945', // New Brand Navy
          600: '#5c74a9',
          700: '#4a5b87',
          800: '#384265',
          900: '#262a43',
        },
        brand: {
          pink: '#ffb1b9',
          beige: '#f2f0eb',
          white: '#ffffff',
          navy: '#EBE8E1',
          cream: '#FFF8E7',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'bounce-slow': 'bounceSlow 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'flip': 'flip 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 177, 185, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 177, 185, 0.8), 0 0 30px rgba(232, 168, 124, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(255, 177, 185, 0.7)'
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 0 10px rgba(255, 177, 185, 0)'
          },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-10px)' },
          '75%': { transform: 'translateY(10px)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(236, 72, 153, 0.4)',
        'glow-md': '0 0 20px rgba(236, 72, 153, 0.5)',
        'glow-lg': '0 0 30px rgba(236, 72, 153, 0.6)',
        'glow-xl': '0 0 40px rgba(236, 72, 153, 0.7), 0 0 50px rgba(232, 168, 124, 0.5)',
        'glow-purple': '0 0 20px rgba(232, 168, 124, 0.5)',
        'glow-accent': '0 0 20px rgba(179, 157, 146, 0.5)',
      },
    },
  },
  plugins: [],
}
