/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, #14A311 0%, #81D13B 52.6%, #F3EF45 100%)",
        "graph-gradient":
          "linear-gradient(180deg, rgba(129, 209, 59, 0.30) -138.89%, rgba(129, 209, 59, 0.00) 100%)",
      },
      fontFamily: {
        primary: "SFProDisplay",
      },
      fontSize: {
        xs: ["12px", "18px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        md: ["21px", "28px"],
        lg: ["24px", "34px"],
        xl: ["32px", "40px"],
        "2xl": ["54px", "66px"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      colors: {
        white: "#ffffff",
        transparent: "transparent",
        pigmentGreen: "#14A311",
        kellyGreen: "#5DC22D",
        green: "#81D13B",
        yellowGreen: "#A5E049",
        pear: "#CCE847",
        icterine: "#F3EF45",
        darkGray: "#2B2B2B",
        lightBlue: "#A3AED0",
        lightGray: "#F4F7FE",
        lightBorder: "#E9EDF7",
        danger: "#E31A1A",
        dark: "#2B2B2B",
        blue: "#0b75ed",
        lightGreenBorder: "#d2efa4",
        "white-700": "#ffffffb3",
      },
      boxShadow: {
        md: "0 18px 40px 0 rgba(112, 144, 176, 0.12)",
        xl: "0 16px 32px 0 rgba(112, 144, 176, 0.2)",
        "2xl": "0 24px 32px -8px rgba(20, 163, 17, 0.3)",
        "3xl": "0 24px 40px 0 rgba(20, 163, 17, 0.4)",
      },
      maxWidth: {
        100: "100%",
        60: "60%",
        315: "315px",
        372: "372px",
        380: "380px",
      },
      minWidth: {
        100: "100%",
        315: "315px",
        372: "372px",
        290: "290",
        "1/2": "calc(50% - 0.5rem)",
        "1/4": "calc(25% - 1rem)",
      },
      width: {
        290: "290px",
      },
      maxHeight: {
        tableHeight: "calc(100vh - 300px)",
        portfolioHeight: "calc(100vh - 370px)",
      },
      minHeight: {
        portfolioHeight: "calc(100vh - 370px)",
      },
      borderRadius: {
        20: "20px",
      },
      margin: {
        290: "290px",
      },
    },
  },
  plugins: [],
};
