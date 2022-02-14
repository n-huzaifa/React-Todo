// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-primary": "#0F75BD",
        "grey-primary": "#363740",
        "green-primary": "#08bc2c",
        overlay: "#FFFF33",
      },
      fontFamily: {
        Inter: "Inter",
        Noto: "Noto",
        Festive: "festive",
      },
      inset: {
        "1/10": "10%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
