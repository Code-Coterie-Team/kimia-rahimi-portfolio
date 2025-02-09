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
        public_button : "rgb(61, 185, 201)",
        profile_color:"rgba(126,231,135)",
      },
      backgroundImage:{
         gradiant_bg:"linear-gradient(315deg,#3649aa,#2bd2ff 52%,#2b60ff 90%)"
      },
      gridTemplateColumns:{
        custom:"5% 20% 75%",
        experience:"1fr 3fr",
        projects:" 10% 30% 30% 30%" 
      },
      gridTemplateRows: {
        custom : "7% 88% 3%"
          
      },
      boxShadow:{
        skillscircle:"rgba(255, 255, 255, 0.1) -5px -5px 5px 0px, rgba(0, 0, 0, 0.4) 10px 10px 10px 0px, rgba(255, 255, 255, 0.2) -5px -5px 5px 0px inset, rgba(0, 0, 0, 0.4) 10px 10px 10px 0px inset"
      }

    },
  },
  plugins: [],
} satisfies Config;
