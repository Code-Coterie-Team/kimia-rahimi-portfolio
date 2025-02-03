"use client"
import BookIcon from "@/icons/BookIcon";
import { useEffect, useState } from "react";
import javascript from "@/assets/js-logo.png"
import typescript from "@/assets/ts-logo.webp"
import html from "@/assets/html5-logo.png"
import css from "@/assets/css-logo.webp"
import next from "@/assets/nextjs-logo.webp"
import react from "@/assets/react-logo.webp"
import saas from "@/assets/sass-logo.webp"
import tailwind from "@/assets/tailwindcss-logo.webp"
import git from "@/assets/git-logo.webp"
import github from "@/assets/github-logo.webp"
import redux from "@/assets/redux-logo.webp"
import eslint from "@/assets/eslint-logo.webp"
import Myskills from "./Myskills";


const Skills = () => {
const [color, setColor] = useState('#ffffff');
const [showLanguage,setShowLanguage] = useState(true);
const [showFront,setShowFront] = useState(false);
const [showTools,setShowTools] = useState(false);

useEffect(() => {
    const changeColor = () => {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        setColor(randomColor);
          };
        const intervalId = setInterval(changeColor,2000);
        return () => clearInterval(intervalId);
        }, []);

  return (
    <div className="w-full flex flex-col gap-8 px-10">
      <div className="flex gap-2 w-full py-7 ">
        <div className="border-b border-b-white w-6"></div>
        <div className="border-b border-b-gray-400/40 w-full"></div>
      </div>
      <div className="relative flex items-center gap-10">
        <div className=" bg-indigo-300 blur-lg size-7 "></div>
        <BookIcon className=" absolute text-white" />
        <span className="text-2xl text-white">Skills</span>
      </div>
      <div className="text-5xl pt-5 pb-7">
        <span className="text-indigo-400">Front-End <span className="text-white">software developer</span></span>
      </div>
      <div className="flex gap-24 pt-10">
        <div className=" relative size-80 rounded-full flex justify-center items-center" style={{backgroundColor:color}}>
           <div className="bg-transparent absolute z-10 size-10/12">
           <div className="absolute size-full rounded-full bg-gray-800 grid grid-cols-2 grid-rows-2 gap-3 rotate-45 ">
            <button onClick={() => {setShowLanguage(true);setShowFront(false);setShowTools(false);}}>
                <p className="text-3xl text-white font-semibold w-min -rotate-45 -translate-x-2">Languages
                    <span className=" -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full h-4">
                        </span></p>
                </button>
                <button  onClick={() => {setShowTools(true);setShowLanguage(false);setShowFront(false);}}>
                <p className="text-3xl text-white font-semibold w-min -rotate-45 translate-x-2 translate-y-10">Tools
                    <span className=" -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full h-1">
                        </span></p>
                </button>
                <button onClick={() => {setShowFront(true);setShowLanguage(false);setShowTools(false);}}>
                <p className="text-3xl text-white font-semibold w-min -rotate-45 translate-x-11 -translate-y-1">Front
                    <span className=" -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full h-1">
                        </span></p>
                </button>
                <button>
                <p className="text-3xl text-white font-semibold w-min -rotate-45 -translate-x-2">
                    <span className=" -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full h-[1.5rem]">
                        </span></p>
                </button>
            
            </div>
           </div>
        </div>
        <div>
         {showLanguage && <Myskills title="Programming Languages" languages={[{img:javascript,name:"JavaScript"},{img:typescript,name:"TypeScript"}]}/>}
         {showTools && <Myskills title="Tools" languages={[{img:git,name:"Git"},{img:github,name:"Github"},{img:eslint,name:"Eslint"},{img:redux,name:"Redux"}]}/>}
         {showFront && <Myskills title="Frontend" languages={[{img:html,name:"HTML5"},{img:css,name:"CSS3"},{img:react,name:"ReactJs"},{img:next,name:"NextJs"},{img:tailwind,name:"TailwindCSS"},{img:saas,name:"Sass"}]}/>}
        </div>
      </div>

    </div>
  );
};

export default Skills;

