module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 300: "#dde5eb", 500: "#a7a7a7", 600: "#7a7a7a", 900: "#191919", "900_01": "#021526" },
        blue_gray: {
          900: "#163048",
          "900_01": "#2e2e2e",
          "900_02": "#153048",
          "900_03": "#0d2b46",
          "900_04": "#313131",
        },
        white: { A700: "#ffffff" },
        pink: { 500: "#f22e52" },
        black: { 900: "#000000", "900_7f": "#0000007f" },
        blue: { 50: "#e1eeff", 200: "#a4cbff", 800: "#0360d9", "50_01": "#e6f5fc" },
        amber: { A400: "#f5bf00" },
      },
      boxShadow: {},
      fontFamily: { ibmplexsans: "IBM Plex Sans", inter: "Inter", rocgrotesk: "Roc Grotesk" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
