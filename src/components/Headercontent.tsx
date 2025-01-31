'use client'
import ChangesIcon from "@/icons/ChnagesIcon";
import ColseIcon from "@/icons/CloseIcon";
import MoreIcon from "@/icons/MoreIcon";
import StarIcon from "@/icons/StarIcon";
import VerticalwindowIcon from "@/icons/VerticalwindowIcon";
import { useStore } from "../../store/useSection";
import ProjectIcon from "@/icons/ProjectIcon";

const Headercontent = () => {


const {links} = useStore();


  return (
    <div className="flex justify-between border-b-2 border-dark_border items-center w-full p-1 text-gray-400">
       <div className="flex justify-between p-1">
       {links.map((item,index)=>(
              <div className="flex items-center gap-1 p-1 border-r-2 border-dark_border focus:border-b-2 focus:border-b-blue-500" key={index}>
              {item.name === "About Me" ? <StarIcon/> : <ProjectIcon/> } 
              <span>{item.name}</span>
              <button className="p-1 rounded-lg hover:bg-gray-300/10 ">
                <ColseIcon />
              </button>
            </div>
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
