import AboutProject from '@/components/AboutProject'
import Challenges from '@/components/Challenges'
import Solution from '@/components/Solution'
import React from 'react'
import estate from "@/assets/estate.png"
import Technology from '@/components/Technology'
import html from "@/assets/html5-logo.png"
import css from "@/assets/css-logo.webp"
import js from "@/assets/js-logo.png"
import tailwind from "@/assets/tailwindcss-logo.webp"
import react from "@/assets/react-logo.webp"
import redux from "@/assets/redux-logo.webp"
import github from "@/assets/github-logo.webp"
import MoreApp from '@/components/MoreApp'
import AnimationProject from '@/components/AnimationProject'


export default function Invoices() {
  return (
    <div className=" w-full flex flex-col gap-40">
            <AnimationProject id='about'><AboutProject title="Estate Landing Page" description="The 'Estate' project is a landing page for a company that showcases its services, client testimonials, and real estate projects." industry="Estate" year={2024} service='"Real estate consulting"' image={estate}/></AnimationProject>
            <AnimationProject id='challenge'><Challenges/></AnimationProject>
            <AnimationProject id='solution'><Solution/></AnimationProject>
            <AnimationProject id='technologies'><Technology Technologies={[{img:html,name:"HTML5"},{img:css,name:"CSS3"},{img:js,name:"JavaScript"},{img:react,name:"React"},{img:tailwind,name:"TailwindCSS"},{img:github,name:"Github"},{img:redux,name:"Redux"}]}/></AnimationProject>
            <MoreApp apps={[{title:"Invoice App",link:"/apps/invoices",date:"October 2023"},{title:"Filter App",link:"/apps/filterapp",date:"August 2023"}]}/>
    </div>
  )
}