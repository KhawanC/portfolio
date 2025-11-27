/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#2B3340',
          secondary: '#1F2732',
          tertiary: '#2a2a2a',
        },
        accent: {
          blue: '#6B7FFF',
          purple: '#5865F2',
          cyan: '#4ECDC4',
          coral: '#FF6B6B',
          orange: '#FFB84D',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A8B8',
          tertiary: '#6B7380',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

