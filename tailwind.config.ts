import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lSpartan: ["var(--font-lSpartan)"],
        jersey: ["var(--font-jersey-15)"],
        crimsonText: ["var(--font-crimson-text)"],
      },
      fontWeight: {
        sm: "100",
        md: "700",
        lg: "800",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
