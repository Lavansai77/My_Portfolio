import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B1220",
        surface: "#0F172A",
        accent: "#22D3EE"
      }
    }
  },
  plugins: []
} satisfies Config;