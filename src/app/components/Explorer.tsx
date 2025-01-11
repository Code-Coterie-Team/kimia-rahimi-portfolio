"use client"
import { Arrow, More } from "@/icons";
import Portfolioitems from "./Portfolioitems";
import { useState } from "react";

const Explorer = () => {


 const [showPortfolioItems,setshowPortfolioItems] = useState(false)
const toggleItems = ()=>{
  setshowPortfolioItems((currentState) => !currentState);
}

  return (
    <div className="border-r-2 border-dark_border relative overflow-hidden ">
      <div className="flex flex-col gap-2 text-gray-400 text-sm pt-5 overflow-hidden ">
        <div className=" flex justify-between px-3">
          <span className="text-xs">EXPLORER</span>
          <div className="p-1 rounded-lg hover:bg-gray-300/10">
            <More />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <button className="border-b-2 border-dark_border flex gap-1 py-1">
            <div>
              <Arrow />
            </div>
            <span className=" font-extrabold">Open Editors</span>
          </button>
          <button className="border-b-2 border-dark_border flex gap-1 py-1 " onClick={toggleItems}>
            <div>
              <Arrow />
            </div>
            <span className=" font-extrabold">Portfolio</span>
          </button>
          {showPortfolioItems && <Portfolioitems/>}
          <button className="border-b-2 border-dark_border flex gap-1 py-1">
            <div>
              <Arrow />
            </div>
            <span className=" font-extrabold">Outline</span>
          </button>
          <button className="border-b-2 border-dark_border flex gap-1 py-1">
            <div>
              <Arrow />
            </div>
            <span className=" font-extrabold">Timeline</span>
          </button>
          <button>
            <div className="flex gap-1">
              <Arrow />
              <span className=" font-extrabold">Scripts</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
