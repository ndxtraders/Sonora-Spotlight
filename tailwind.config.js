/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#29C4F8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Enforces 18px body / 1.6 line-height rule
        base: ['18px', { lineHeight: '1.6' }],
      },
      // Mobile headline floor: 28px
      minHeight: {
        headline: '28px',
      },
      aspectRatio: {
        'square': '1 / 1',       // People: 1:1
        'landscape': '4 / 3',    // Places & Events: 4:3
        'hero': '16 / 9',        // House Talk / Hero: 16:9
      },
    },
  },
  plugins: [],
}
