/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#95A0A7",

          "secondary": "#2a414f",

          "accent": "#ff9900",

          "neutral": "#050505",

          "base-100": "#FFFFFF",

          "info": "#1c2b35",

          "success": "#995c00",

          "warning": "#0e161a",

          "error": "#4c2e00",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}