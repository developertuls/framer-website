
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pan: {
          "0%": { transform: "scale(1.08) translateX(0px)" },
          "100%": { transform: "scale(1.08) translateX(-80px)" },
        },
      },
      animation: {
        pan: "pan 7s linear forwards",
      },
    },
  },
  plugins: [],
};
