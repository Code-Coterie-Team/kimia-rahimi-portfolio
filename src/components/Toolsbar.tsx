'use client'
import ExplorerIcon from "@/icons/ExplorerIcon";
import ExtensionsIcon from "@/icons/ExtensionsIcon";
import ProfileIcon from "@/icons/ProfileIcon";
import RunIcon from "@/icons/RunIcon";
import SearchIcon from "@/icons/SearchIcon";
import SettingIcon from "@/icons/SettingIcon";
import SourceControlIcon from "@/icons/SourceControlIcon";
import { useStore } from "../../store/useSection";

const Toolsbar = () =>{
const setShowExplore = useStore((state) => state.setShowExplore);
    return(
      <div className="flex flex-col justify-between text-buttons/50 hover: opacity-90 p-4">
        <div className="flex flex-col gap-6">
          <button className="hover:text-buttons/90" onClick={()=>setShowExplore(true)} ><ExplorerIcon/></button>
          <button className="hover:text-buttons/90" onClick={()=>setShowExplore(false)}><SearchIcon/></button>
          <button className="hover:text-buttons/90" onClick={()=>setShowExplore(false)}><SourceControlIcon/></button>
          <button className="hover:text-buttons/90" onClick={()=>setShowExplore(false)}><RunIcon/></button>
          <button className="hover:text-buttons/90" onClick={()=>setShowExplore(false)}><ExtensionsIcon/></button>
        </div>
        <div className="flex flex-col gap-6">
          <button className="hover:text-buttons/90"><ProfileIcon/></button>
          <button className="hover:text-buttons/90"><SettingIcon/></button>
        </div>

      </div>
    )
}

export default Toolsbar;

