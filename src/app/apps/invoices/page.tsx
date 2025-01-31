import AboutProject from '@/components/AboutProject'
import Challenges from '@/components/Challenges'
import Solution from '@/components/Solution'
import React from 'react'
import invoice from "@/assets/invoices.png"
import Technology from '@/components/Technology'
import html from "@/assets/html5-logo.png"
import css from "@/assets/css-logo.webp"
import js from "@/assets/js-logo.png"
import tailwind from "@/assets/tailwindcss-logo.webp"
import react from "@/assets/react-logo.webp"
import redux from "@/assets/redux-logo.webp"
import github from "@/assets/github-logo.webp"
import MoreApp from '@/components/MoreApp'


export default function Invoices() {
  return (
    <div className=" w-full flex flex-col gap-52">
            <AboutProject title="Invoices App" description="The invoice management project allows users to easily create, edit, and track invoices." industry="Invoices" year={2024} service='"Invoice Management"' image={invoice}/>
            <Challenges/>
            <Solution/>
            <Technology Technologies={[{img:html,name:"HTML5"},{img:css,name:"CSS3"},{img:js,name:"JavaScript"},{img:react,name:"React"},{img:tailwind,name:"TailwindCSS"},{img:github,name:"Github"},{img:redux,name:"Redux"}]}/>
            <MoreApp title='Estate Landing Page' link='/apps/estate'/>
    </div>
  )
}
