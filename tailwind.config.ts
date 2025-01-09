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
        buttons:"rgb(169, 177, 214)"
      },
      borderColor:{
        dark_border:"rgb(27,30,46)"
      },
      gridTemplateColumns:{
        custom:"5% 20% 75%"
      },
      gridTemplateRows: {
        custom : "7% 88% 3%"
          
      },

    },
  },
  plugins: [],
} satisfies Config;
