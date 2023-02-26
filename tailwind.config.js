module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        head: "#4f5d75",
        underw: "#6b9080",
        lightbg: "#FFFFFF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
