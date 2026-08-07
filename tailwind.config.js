/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          rose: '#E11D48',
          roseLight: '#F43F5E',
          roseBg: '#FFF1F2',
          bg: '#F8FAFC',
          gridLine: '#CBD5E1',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
