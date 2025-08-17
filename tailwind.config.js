/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#191919",
        blue: "#4545fe",
        teal: "#14b8a6",
        danger: "#F04438",
        gray: "#E4E4E4",
        green: "#12B76A",
      },

      fontFamily: {
        euclid: ["var(--font-euclid-circular)"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".sub_text": {
          "@apply text-xs lg:text-sm": {},
        },

        ".mid_text": {
          "@apply text-sm lg:text-base": {},
        },

        ".lag_text": {
          "@apply text-base lg:text-lg": {},
        },

        ".hover_transit": {
          "@apply transition-all duration-500 ease-in-out": {},
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
