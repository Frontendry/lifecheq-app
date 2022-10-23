/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: ["14px", "130%"],
      },
      colors: {
        cyan: {
          750: "#3C7F90",
          850: "#215A6B",
          950: "#173F4B",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      },
      width: {
        33: "8.125rem",
        34: "8.5rem",
      },
      minHeight: {
        34: "8.5rem",
        43: "10.438rem",
      },
      boxShadow: {
        "md-2": "0px 4px 12px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        "5px": "5px",
      },
    },
  },
  plugins: [],
};
