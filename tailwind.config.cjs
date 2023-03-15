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
        test: "#43302b",
      },
    },
  },
  plugins: [],
};
