import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Crimson: {
          500: "#2E0109",
          950: "#16080B",
        },
        Rose: "#420718",
        Vine: {
          900: "#004E37", 
          500: "#07946B"
        },
        Petal: "#381D24",
        Midnight: "#151213",
      },
    },
  },
  plugins: [],
};
export default config;
