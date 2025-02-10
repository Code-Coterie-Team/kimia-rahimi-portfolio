import ArrowIcon from "@/icons/ArrowIcon"
import LeetcodeIcon from "@/icons/LeetcodeIcon"
import SrcWorkIcon from "@/icons/SrcWorkIcon"
import { useState } from "react"
import WorkItems from "./WorkItems"
import {motion} from "framer-motion"

const Scritems = ()=> {
const [showMyWork,setShowMyWork]=useState(false);

const toggleItems = ()=>{
    setShowMyWork((currentState)=>!currentState)
}

const animatParent = {
  hidden:{opacity:0},
  visible:{opacity:1,transition:{staggerChildren:0.3}}
}

const animatChild = {
  hidden:{opacity:0,y:20},
  visible:{opacity:1,y:0,transition:{duration:0.3}}
}

  return (
    <motion.div className="w-full flex flex-col text-base " variants={animatParent} initial="hidden" animate="visible" >
        <motion.button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8" onClick={toggleItems} variants={animatChild}>
                    <ArrowIcon/>
                    <SrcWorkIcon/>
                    <span className="text-gray-400">my work</span>
        </motion.button>
        {showMyWork && <WorkItems/>}
        <motion.button className=" flex gap-1 py-1 hover:bg-dark_border w-full px-8" variants={animatChild} >
                    <ArrowIcon/>
                    <LeetcodeIcon/>
                    <span className="text-gray-400">leetcode</span>
        </motion.button>
    </motion.div>
  )
}

export default Scritems