'use client'
import ArrowIcon from "@/icons/ArrowIcon"
import {motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image, { StaticImageData } from "next/image"
import { useState } from "react";

interface IProject{
  title:string,
  description:string,
  image:StaticImageData,
}

const Myproject = ({title,description,image}:IProject)=> {
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
    // why???
    mouseX.set(0);    
    mouseY.set(0);

  };

  const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${mouseXSpring}% ${mouseYSpring}% ,rgba(255, 220, 139,0.1),rgb(30 ,35, 54 ))`;

  return (
    <motion.div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onMouseMove={handleMouseMove}
    style={{
        background: isHovered ? spotlightBackground : "bg-gray-900/20",
    }}
     className=" border border-gray-500/20 bg-gray-900/20 rounded-2xl hover:shadow-md  hover:shadow-yellow-200 grid grid-cols-2">
    <div className="p-12 text-3xl flex flex-col gap-20">
      <div><span className="text-yellow-200">{title} <span className="text-white">{description}</span></span></div>
      <div className="text-white flex items-center gap-2">
        <button className="text-2xl font-semibold">Learn more</button>
        <ArrowIcon className="text-4xl"/>
      </div>
    </div>
    <div>
      <Image src={image} alt="" className="h-full rounded-tr-2xl rounded-br-2xl"/>
    </div>
    </motion.div>
  )
}

export default Myproject
