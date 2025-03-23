'use client'
import ArrowIcon from "@/icons/ArrowIcon"
import {motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import { useState } from "react";
import { useStore } from "../../store/useSection";
import DemoIcon from "@/icons/DemoIcon";
import GitIcon from "@/icons/GitIcon";

interface IProject{
  title:string,
  description:string,
  image:StaticImageData,
  href : string,
  name:string,
  linkDemo:string,
  linkGit:string
}

const Myproject = ({title,description,image,href,name,linkDemo,linkGit}:IProject)=> {
  const {links} = useStore()
  const {addLink} = useStore();
  const {setActiveLink} = useStore();

  const addLinks = (name: string, href: string) => {
    const existlink=links.some((l)=>l.href===href);
    if(!existlink){
        addLink({ name, href });
        setActiveLink(href);
    }
}


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

  const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${mouseXSpring}% ${mouseYSpring}% ,rgba(255, 220, 139,0.1),rgb(30 ,35, 54 ))`;

  return (
    <motion.div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onMouseMove={handleMouseMove}
    style={{
        background: isHovered ? spotlightBackground : "bg-gray-900/20",
    }}
     className=" border border-gray-500/20 bg-gray-900/20 rounded-2xl hover:shadow-md  hover:shadow-yellow-200 grid grid-row-2 md:grid-cols-2">
    <div className="p-5 md:p-12 text-3xl flex flex-col gap-10 md:gap-20">
      <div><span className=" text-2xl md:text-3xl text-yellow-200">{title} <span className="text-white">{description}</span></span></div>
      <Link href={href} className="text-white flex items-center gap-2" onClick={()=> addLinks(name,href)}>
        <button className="text-2xl font-semibold">Learn more</button>
        <ArrowIcon className="text-4xl"/>
      </Link>
    </div>
    <div className="relative flex justify-center items-center">
    <div className="flex gap-4 absolute">
      <a className="bg-gray-400/60 rounded-full size-12 flex justify-center items-center hover:scale-125" href={linkDemo} target="_blank"><DemoIcon className="text-white size-6"/></a>
      <a className="bg-gray-400/6~0 rounded-full size-12 flex justify-center items-center hover:scale-125"  href={linkGit} target="_blank"><GitIcon className="text-white size-6"/></a>
      </div>
      <Image src={image} alt="" className="h-full rounded-tr-2xl rounded-br-2xl"/>
    </div>
    </motion.div>
  )
}

export default Myproject
