module.exports = {
  mode: "jit",
  // purge: ['./pages/*/.{js,ts,jsx,tsx}', './components/*/.{js,ts,jsx,tsx}'],
  purge: ["./pages/*/.{js,ts,jsx,tsx}", "./components/*/.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
