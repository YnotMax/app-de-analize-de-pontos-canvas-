/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--color-primary), <alpha-value>)',
        secondary: 'rgba(var(--color-secondary), <alpha-value>)',
        accent: 'rgba(var(--color-accent), <alpha-value>)',
        'background-light': 'rgba(var(--color-background-light), <alpha-value>)',
        'background-dark': 'rgba(var(--color-background-dark), <alpha-value>)',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
