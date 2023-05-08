/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'groovyYellow': '#F7EC59',
      'groovyBlue': '#6CCFF6',
      'groovyPurple': '#9747FF',
      'groovyPink': '#FF66D8',
      black: '#000',
      white: '#fff',
    },
    extend: {
      boxShadow: {
        'groovy': '8px 8px 0 black',
      },
      keyframes: {
        'groovy-slide': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'groovy-slide': 'slide-animation 3s linear infinite',
      },
    },
  },
  // theme: {
  // },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
