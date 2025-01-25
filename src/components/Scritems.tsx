import ArrowIcon from "@/icons/ArrowIcon"
import LeetcodeIcon from "@/icons/LeetcodeIcon"
import SrcWorkIcon from "@/icons/SrcWorkIcon"
import { useState } from "react"
import WorkItems from "./WorkItems"

const Scritems = ()=> {
const [showMyWork,setShowMyWork]=useState(false);

const toggleItems = ()=>{
    setShowMyWork((currentState)=>!currentState)
}

  return (
    <div className="w-full flex flex-col text-base ">
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8" onClick={toggleItems}>
                    <ArrowIcon/>
                    <SrcWorkIcon/>
                    <span className="text-gray-400">my work</span>
        </button>
        {showMyWork && <WorkItems/>}
        <button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8" >
                    <ArrowIcon/>
                    <LeetcodeIcon/>
                    <span className="text-gray-400">leetcode</span>
        </button>
    </div>
  )
}

export default Scritems