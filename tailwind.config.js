/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
        light_offwhite:"#F9FBFF",

      },
      lineHeight: {
        18:"18px",
        30: "30px",
        36: "36px",
        24: "24px",

      },
    },
  },

  plugins: [],
};

