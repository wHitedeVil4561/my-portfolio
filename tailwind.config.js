/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslate: "#212428",
        darkred: "#f2494f",
        darkcream: "#70a6ce",
        white: "#ffffff",
        neu: "#c4cfde",
        darkblack: "#131517",
        lightcream: "#DAF0FF",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }
        tab: "992px",
        // => @media (min-width: 992px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        lgmax: { max: "1279px" },
        smmax: { max: "639px" },
      },
    },
  },
  plugins: [],
};
