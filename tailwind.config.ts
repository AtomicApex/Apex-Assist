import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E8F5E9",
          muted: "#C8E6C9",
          deep: "#A5D6A7",
        },
        ink: "#0a0a0a",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
