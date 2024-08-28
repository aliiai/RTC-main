/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'sc1485':{max:'1485px'}
    },
    colors: {
      offBlack: "#161c1a",
      offWhite: "#f8f8f8",
      gold: "#b29358",
      red: "#ff131d",
      gray: "#848484",
      black2:"#020407"
    },
    fontFamily: {
      Poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
};
