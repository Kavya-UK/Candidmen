/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "900px",
      ...defaultTheme.screens,
    },
    extend: {
      ringWidth: {
        button: "0px 4px 20px rgba(0, 0, 0, 0.15)",
        address: "0px 4px 20px rgba(0, 0, 0, 0.15)",
      },
      padding: {
        "xl-largeButton": "16px 90px 16px 90px",
        "lg-largeButton": "14px 70px 14px 70px",
        "sm-largeButton": "12px 50px 12px 50px",
      },
      backgroundImage: {
        returnPolicy: "url('./assets/home/returnPolicy.png')",
      },
      fontFamily: {
        Rufina_Bold: ["Rufina-Bold"],
        Rufina_Regular: ["Rufina-Regular"],
        Poppins: ["Poppins"],
      },
      colors: {
        shadeYellow: "#FABB4B",
        darekBlue: "#091C42",
        textGray: "#7D8089",
        grayShade: "rgba(0, 0, 0, 0.5)",
        lightGray: "rgba(9, 28, 66, 0.05)",
        deleteRed: "#B51843",
        cancelRed: "#FA4B4B",
        productGreen: "#319900",
        productYellow: "#E5C30D",
        light_graycolor: "#D9D9D9",
        off_white: "#F0F0F0",
        light_offwhite: "#F9FBFF",
        grayish_color: "#C3C3C3",
        contentBlack: "#3E3E3E",
        lightAsh: "#F2F2F2",
        lightBlack: "#00000080",
        darkRed: "#DC3E3E",
        suvaGray: "#929191",
        blueGray: "#130F26",
        lightblueGray: "#130f2680",
        floralWhite: "#FFF9ED",
      },
      lineHeight: {
        18: "18px",
        30: "30px",
        36: "36px",
        24: "24px",
      },
      dropShadow: {
        header: "0px 4px 20px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  plugins: [],
};

