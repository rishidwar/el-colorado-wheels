/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#B81C1C',
          orange: '#D4601A',
          gold: '#E8A820',
          'gold-dim': '#C48C18',
          green: '#3A8C35',
        },
        surface: {
          base: '#0a0a0a',
          card: '#141414',
          elevated: '#1e1e1e',
          border: '#2a2a2a',
        },
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(to bottom, #B81C1C 0%, #CC3010 25%, #D4601A 50%, #E8A820 75%, #C8C020 100%)',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-pause': 'marquee 28s linear infinite paused',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
