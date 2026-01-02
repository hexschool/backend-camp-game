/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        coachBreath: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-4px) scale(1.01)' },
        },
        bgSlowZoom: {
          '0%, 100%': { transform: 'scale(1.02)' },
          '50%': { transform: 'scale(1.06)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      animation: {
        coachBreath: 'coachBreath 5s ease-in-out infinite',
        bgSlowZoom: 'bgSlowZoom 18s ease-in-out infinite',
        fadeUp: 'fadeUp 420ms ease-out both',
      },
    },
  },
  plugins: [],
}

