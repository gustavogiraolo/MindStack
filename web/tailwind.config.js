/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // slate-50
        foreground: '#0f172a', // slate-900
        muted: '#64748b', // slate-500
        accent: '#10b981', // emerald-500
        'accent-dark': '#059669', // emerald-600
        'accent-light': '#34d399', // emerald-400
        surface: '#ffffff', // pure white for cards
        border: '#e2e8f0', // slate-200
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px -2px rgba(16, 185, 129, 0.4)',
      },
      animation: {
        'blob': 'blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)' },
          '33%': { transform: 'translate(-40%, -60%) scale(1.1)' },
          '66%': { transform: 'translate(-60%, -40%) scale(0.9)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
