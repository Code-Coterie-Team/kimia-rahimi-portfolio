import AboutProject from '@/components/AboutProject'
import Challenges from '@/components/Challenges'
import Solution from '@/components/Solution'
import React from 'react'
import filterapp from "@/assets/filterapp.png"
import Technology from '@/components/Technology'
import html from "@/assets/html5-logo.png"
import css from "@/assets/css-logo.webp"
import js from "@/assets/js-logo.png"
import tailwind from "@/assets/tailwindcss-logo.webp"
import react from "@/assets/react-logo.webp"
import github from "@/assets/github-logo.webp"
import MoreApp from '@/components/MoreApp'
import AnimationProject from '@/components/AnimationProject'


export default function FilterApp() {
  return (
    <div className=" w-full flex flex-col gap-6">
            <AnimationProject id='about'><AboutProject title="Filter App" description="a view of a furniture store with the ability to filter and search for products." industry="Furniture Store" year={2024} service="'Smart Filter'" image={filterapp}/></AnimationProject>
            <AnimationProject id='challenge'><Challenges challenge={[{desc:"Implementing simultaneous filtering and searching of products."},{desc:"Managing state for filters and search results."}]}/></AnimationProject>
            <AnimationProject id='solution'><Solution solution={[{desc:" Using useState for state management and combining filters with search."},{desc:"Implementing separate components for filtering and displaying products."}]}/></AnimationProject>
            <AnimationProject id='technologie'><Technology Technologies={[{img:html,name:"HTML5"},{img:css,name:"CSS3"},{img:js,name:"JavaScript"},{img:react,name:"React"},{img:tailwind,name:"TailwindCSS"},{img:github,name:"Github"}]}/></AnimationProject>
            <MoreApp apps={[{title:"Invoice App",link:"/apps/invoices",date:"October 2023"},{title:"Estate",link:"/apps/estate",date:"November 2023"}]}/>
    </div>
  )
}