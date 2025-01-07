import type { Config } from "tailwindcss";



export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor:{
        dark_border:"rgb(27,30,46)"
      },
      gridTemplateColumns:{
        custom:"10% 20% 70%"
      },
      gridTemplateRows: {
        custom : "20% 75% 5%"
          
      },
    },
  },
  plugins: [],
} satisfies Config;
