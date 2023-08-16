/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors : {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      fontSize: {
        vs: ['0.5rem', '0.75rem'],
      },
    },
  },
  plugins: [],
}

