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
        background: "#0A2640",
        green: "#65E4A3",
        foreground: "var(--foreground)",
        "gray": "#777777"
        
      },
    },
  },
  plugins: [],
};
export default config;
