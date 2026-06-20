import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'manchitas-green': '#14532d',
        'manchitas-light': '#4ade80',
        'manchitas-cream': '#fefce8',
        'manchitas-dark': '#0f172a',
      }
    },
  },
  plugins: [],
};
export default config;
