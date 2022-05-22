module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "head": "#174a81",
        "lightbg": "#D8DEE9",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
