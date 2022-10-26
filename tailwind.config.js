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
        teal: {
          650: "#00B897",
        },
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
        4.5: "1.125rem",
        34: "8.5rem",
        43: "10.438rem",
        101: "26.063rem",
      },
      boxShadow: {
        "md-2": "0px 4px 12px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        "5px": "5px",
      },
      gridTemplateColumns: {
        separator: "1fr 8px 1fr",
      },
      strokeWidth: {
        4: "4px",
      },
      spacing: {
        custom1: "calc(100% + 6px + 1.7rem)",
      },
    },
  },
  plugins: [],
};
