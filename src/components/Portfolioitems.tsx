"use client";
import Publicitems from "./Publicitems";
import { useState } from "react";
import ArrowIcon from "@/icons/ArrowIcon";
import EslintIcon from "@/icons/EslintIcon";
import GitignoreIcon from "@/icons/GitignoreIcon";
import NextConfigIcon from "@/icons/NextConfigIcon";
import NextIcon from "@/icons/NextIcon";
import NodemoduleIcon from "@/icons/NodemoduleIcon";
import PackagelockIcon from "@/icons/PackagelockIcon";
import PublicIcon from "@/icons/PublicIcon";
import SrcIcon from "@/icons/SrcIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import TsconfigIcon from "@/icons/TsconfigIcon";
import Scritems from "./Scritems";

const Portfolioitems = () => {
  const [showPublicItems, setShowPublicItems] = useState(false);
  const [showSrcItems, setShowSrcItems] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const toggleItems = (itemName: string) => {
    if (itemName === "public") {
      setShowPublicItems((currentState) => !currentState);
    }
    else if (itemName === "src") {
      setShowSrcItems((currentState) => !currentState);
    }
   setIsArrowRotated((currentState)=>!currentState)
  };


  const firstItems = [
    {
    title: ".next",
    icon: <NextIcon/>
  },
  {
    title: "node_modules",
    icon: <NodemoduleIcon/>
  }
]
const secondItems = [
  {
  title: "public",
  icon: <PublicIcon/>
},
{
  title: "src",
  icon: <SrcIcon/>
}
]

const lastItems = [
  {
    title: ".eslintrc.json",
    icon: <EslintIcon/>
  },
  {
    title: ".gitignore",
    icon: <GitignoreIcon/>
  },
  {
    title: "next.config.js",
    icon: <NextConfigIcon/>
  },
  {
    title: "package-lock.json",
    icon: <PackagelockIcon/>
  },
  {
    title: "package.json",
    icon: <PackagelockIcon/>
  },
  {
    title: "tailwind.config.ts",
    icon: <TailwindIcon/>
  },
  {
    title: "tsconfig.json",
    icon: <TsconfigIcon/>
  }
]

  return (
    <div className="w-full flex flex-col text-base overflow-y-auto ">
      <div>
        {firstItems.map((item,index)=>(
            <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-4" key={index}>
                  <div>
                    <ArrowIcon />
                  </div>
                  {item.icon}
                  <span className="text-gray-300/40">{item.title}</span>
                </button>
        ))}
        {secondItems.map((item,index)=>(
         <div key={index}>
              <button
                  className=" flex gap-1 py-1 hover:bg-dark_border w-full px-4 "
                  onClick={() => toggleItems(item.title)}
                >
                  <div 
                    style={{
                    transform: isArrowRotated
                      ? "rotate(90deg)"
                      : "rotate(0deg)", 
                    transition: "transform 0.3s ease",
                  }}>
                    <ArrowIcon />
                  </div>
                  {item.icon}
                  <span className="text-gray-400">{item.title}</span>
            </button>
            {item.title === "public" && showPublicItems && (
                    <Publicitems />
                  )}
            {item.title === "src" && showSrcItems && (
                    <Scritems />
            )}
         </div>
        ))}
      </div>

      <div>
        {lastItems.map((item,index)=>(
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8" key={index}>
        {item.icon}
        <span className="text-gray-400">{item.title}</span>
      </button>
        ))}
        
      </div>
    </div>
  );
};

export default Portfolioitems;
