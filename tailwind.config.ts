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
        buttons:"rgb(169, 177, 214)",
        dark_border:"rgb(27,30,46)",
        public_button : "rgb(61, 185, 201)"
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
