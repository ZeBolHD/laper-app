module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screen: {
        mobile: { max: "425px" },
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      colors: {
        main: "#676F9D",
        bgLight: "#FFFFFF",
        bgDark: "#2D3250",
      },
    },
  },
  plugins: [],
};
