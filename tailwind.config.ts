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
      animation: {
        smoothBounce: 'smoothBounce 4s infinite', // Nome e duração
      },
      keyframes: {
        smoothBounce: {
          '0%, 100%': { transform: 'translateY(0)', easing: 'ease-out' },
          '50%': { transform: 'translateY(-20px)', easing: 'ease-in' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
