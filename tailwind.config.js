import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        custom: {
          primary: "#45AEF5",
          secondary: "#222B3D",
          accent: "#ff7a87",
          neutral: "#2B3447",
          "base-100": "#FFFFFF",
          info: "#45AEF5",
          success: "#009d3e",
          warning: "#df3f00",
          error: "#ff7a87",
        },
      },
    ],
  },
  plugins: [daisyui],
};
