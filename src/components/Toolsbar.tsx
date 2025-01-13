import ExplorerIcon from "@/icons/ExplorerIcon";
import ExtensionsIcon from "@/icons/ExtensionsIcon";
import ProfileIcon from "@/icons/ProfileIcon";
import RunIcon from "@/icons/RunIcon";
import SearchIcon from "@/icons/SearchIcon";
import SettingIcon from "@/icons/SettingIcon";
import SourceControlIcon from "@/icons/SourceControlIcon";

const Toolsbar = () =>{
    return(
      <div className="flex flex-col justify-between text-buttons/50 hover: opacity-90 p-4">
        <div className="flex flex-col gap-6">
          <button className="hover:text-buttons/90"><ExplorerIcon/></button>
          <button className="hover:text-buttons/90"><SearchIcon/></button>
          <button className="hover:text-buttons/90"><SourceControlIcon/></button>
          <button className="hover:text-buttons/90"><RunIcon/></button>
          <button className="hover:text-buttons/90"><ExtensionsIcon/></button>
        </div>
        <div className="flex flex-col gap-6">
          <button className="hover:text-buttons/90"><ProfileIcon/></button>
          <button className="hover:text-buttons/90"><SettingIcon/></button>
        </div>

      </div>
    )
}

export default Toolsbar;

