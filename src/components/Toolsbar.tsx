import { ControlSource, Explorer, Extentions, Profile, Run, Search, Setting } from "@/icons";

const Toolsbar = () =>{
    return(
      <div className="flex flex-col justify-between text-buttons/50 hover: opacity-90 p-4">
        <div className="flex flex-col gap-6">
          <button className="hover:text-buttons/90"><Explorer/></button>
          <button className="hover:text-buttons/90"><Search/></button>
          <button className="hover:text-buttons/90"><ControlSource/></button>
          <button className="hover:text-buttons/90"><Run/></button>
          <button className="hover:text-buttons/90"><Extentions/></button>
        </div>
        <div className="flex flex-col gap-6">
          <button className="hover:text-buttons/90"><Profile/></button>
          <button className="hover:text-buttons/90"><Setting/></button>
        </div>

      </div>
    )
}

export default Toolsbar;

