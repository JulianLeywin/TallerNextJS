module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        darkBg: '#1f2937',
        lightBg: '#f3f4f6',
        accent: '#4f46e5',
      },
    },
  },
  plugins: [],
};