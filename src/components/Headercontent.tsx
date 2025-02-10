'use client'
import ChangesIcon from "@/icons/ChnagesIcon";
import ColseIcon from "@/icons/CloseIcon";
import MoreIcon from "@/icons/MoreIcon";
import StarIcon from "@/icons/StarIcon";
import VerticalwindowIcon from "@/icons/VerticalwindowIcon";
import { useStore } from "../../store/useSection";
import ProjectIcon from "@/icons/ProjectIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Headercontent = () => {

const path = usePathname();
const {links,setLinks} = useStore();
const {setActiveLink} = useStore();

const handelDelete = (index:number)=>{
  const newLink = links.filter((_,i)=> i !== index)
  setLinks(newLink)
}

const handelSetLink = (href:string)=>{
  setActiveLink(href);
}




  return (
    <div className="flex justify-between border-b-2 border-dark_border items-center w-full pt-1 text-gray-400">
       <div className="flex justify-between p-1">
       {links.map((item,index)=>(
              <Link href={item.href} className={clsx("flex items-center gap-5 p-1 border-r-2 border-dark_border",{
                "border-b-blue-500" : item.href === path,
                "border-b-2": item.href === path
              })}
               key={index}  onClick={()=>handelSetLink(item.href)}>
               <div className="flex items-center gap-1">
               {item.name === "About Me" ? <StarIcon/> : <ProjectIcon/> } 
               <span className={clsx("px-1",{"text-public_button":item.href === path})}>{item.name}</span>
               </div>
              <button className="p-1 rounded-lg hover:bg-gray-300/10 " onClick={()=>handelDelete(index)}>
                <ColseIcon />
              </button>
            </Link>
      ))}
       </div>

      <div className="flex items-center gap-3 p-1">
        <button className="p-1 rounded-lg hover:bg-gray-300/10">
          <ChangesIcon />
        </button>
        <button className="p-1 rounded-lg hover:bg-gray-300/10">
          <VerticalwindowIcon />
        </button>
        <button className="p-1 rounded-lg hover:bg-gray-300/10">
          <MoreIcon />
        </button>
      </div>
    </div>
  );
};

export default Headercontent;
