/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // You can still extend theme properties like spacing, colors, etc.
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.to-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      };
      addUtilities(newUtilities);
    },nextui()
  ],
};