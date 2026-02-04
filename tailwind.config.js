/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
            bg: '#f3f6fc',
            dark: '#1e293b',
            muted: '#64748b',
            accent: '#6366f1'
        }
      },
      animation: {
         'phys-x': 'bounceX 7.1s linear infinite alternate',
         'phys-y': 'bounceY 9.3s linear infinite alternate',
      },
      keyframes: {
         bounceX: {
            '0%': { left: '0' },
            '100%': { left: 'calc(100% - 384px)' },
         },
         bounceY: {
            '0%': { top: '0' },
            '100%': { top: 'calc(100% - 224px)' }, 
         }
      }
    },
  },
  plugins: [],
}