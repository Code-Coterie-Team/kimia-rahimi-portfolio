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

  const toggleItems = () => {
    setShowPublicItems((currentState) => !currentState);
  };
  const toggleSrcItems = ()=>{
    setShowSrcItems((currentState)=>!currentState)
  }

  return (
    <div className="w-full flex flex-col text-base overflow-y-auto ">
      <div>
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-4">
          <div>
            <ArrowIcon />
          </div>
          <NextIcon />
          <span className="text-gray-300/40">.next</span>
        </button>
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-4">
          <div>
            <ArrowIcon />
          </div>
          <NodemoduleIcon />
          <span className="text-gray-300/40">node_modules</span>
        </button>
        <button
          className=" flex gap-1 py-1 hover:bg-dark_border w-full px-4 "
          onClick={toggleItems}
        >
          <div>
            <ArrowIcon />
          </div>
          <PublicIcon />
          <span className="text-gray-400">public</span>
        </button>

        {showPublicItems && <Publicitems />}

        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-4" onClick={toggleSrcItems}>
          <div>
            <ArrowIcon />
          </div>
          <SrcIcon />
          <span className="text-gray-400">src</span>
        </button>
        {showSrcItems && <Scritems/>}
      </div>

      <div>
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
          <EslintIcon/>
          <span className="text-gray-400">.eslintrc.json</span>
        </button>
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
          <GitignoreIcon />
          <span className="text-gray-400">.gitignore</span>
        </button>
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
          <NextConfigIcon />
          <span className="text-gray-400">next.config.js</span>
        </button>
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
          <PackagelockIcon />
          <span className="text-gray-400">package-lock.json</span>
        </button>
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
          <PackagelockIcon />
          <span className="text-gray-400">package.json</span>
        </button>
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
          <TailwindIcon />
          <span className="text-gray-400">tailwind.config.ts</span>
        </button>
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8">
          <TsconfigIcon />
          <span className="text-gray-400 ">tsconfig.json</span>
        </button>
      </div>
    </div>
  );
};

export default Portfolioitems;
