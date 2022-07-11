/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
          fontFamily: {
              jakarta: ["Plus Jakarta Sans", "sans-serif"],
          },
          colors: {
              mainPurple: "#635FC7",
              mainPurpleHover: "#A8A4FF",
              black: "#000112",
              veryDarkGrey: "#20212C",
              darkGrey: "#2B2C37",
              linesDark: "#3E3F4E",
              mediumGrey: "#828FA3",
              linesLight: "#E4EBFA",
              lightGrey: "#F4F7FD",
              red: "#EA5555",
              redHover: "#FF9898",
          },
      },
      screens: {
          mobile: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1440px",
      },
  },
  plugins: [],
};
