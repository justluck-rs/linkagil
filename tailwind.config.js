/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      {

        linkagil: {

          "primary": "#008be0",

          "secondary": "#007c00",

          "accent": "#007500",

          "neutral": "#09071f",

          "base-100": "#f3fdff",

          "info": "#008af4",

          "success": "#00bf7a",

          "warning": "#de5b00",

          "error": "#ff0052",
        },
      },
    ],
  },
  plugins: [daisyui,],
}

