/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "clr-princ": "#e45326",
        "clr-sec": "#ba431f",
        "clr-bg": "#080E16",
        "clr-bgsec": "rgb(18,18,18)",
        "clr-input": "#1A1B1E",
        "clr-offwhite": "#BABABA",
      },
      fontFamily: {
        Poppins: ["Poppins"],
        Genty: ["Gentium"],
      },
    },
  },
  plugins: [],
};
