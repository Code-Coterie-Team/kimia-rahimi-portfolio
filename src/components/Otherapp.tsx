'use client'
import ArrowIcon from "@/icons/ArrowIcon"
import { useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link"
import { useState } from "react";
import {motion} from "framer-motion"
interface IApp{
    title:string,
    link:string,
    date:string
}
const Otherapp=({title,link,date}:IApp)=> {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX);
  const mouseYSpring = useSpring(mouseY);

const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
  const offsetX = event.nativeEvent.offsetX;
  const offsetY = event.nativeEvent.offsetY;
  const currentTarget = event.currentTarget;
  const { width, height } = currentTarget.getBoundingClientRect();
  mouseX.set((offsetX / width) * 100);
  mouseY.set((offsetY / height) * 100);
};
  const handleMouseEnter = () => {
    setIsHovered(true);
};

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);    
    mouseY.set(0);

  };

  const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${mouseXSpring}% ${mouseYSpring}% ,rgba(61, 185, 201,0.1),rgb(30 ,35, 54 ))`;

  return (
    <motion.div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onMouseMove={handleMouseMove}
    style={{
        background: isHovered ? spotlightBackground : "bg-gray-900/20",
    }}
     className="p-12 border border-gray-500/20 bg-gray-900/20 rounded-2xl">
    <div className="flex gap-6">
      <div className="flex flex-col gap-2">
        <div className="border-l border-l-white h-6"></div>
        <div className="border-l border-l-gray-400/40 h-full"></div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <span className="text-white text-sm">{date}</span>
          <span className="font-semibold text-base text-public_button">
            {title}
          </span>
        </div>
        <div>
          <Link href={link}  className="text-white text-2xl font-semibold flex items-center gap-2">
           <span>Learn more</span>
           <ArrowIcon className="text-4xl"/>
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Otherapp


