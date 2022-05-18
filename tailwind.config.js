module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "#3d4856",
        "lightbg": "#c4c5cf",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
