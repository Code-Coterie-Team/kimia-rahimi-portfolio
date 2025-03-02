"use client";
import ColseIcon from "@/icons/CloseIcon";
import HamburgerIcon from "@/icons/HamburgerIcon";
import HorizentalWindow from "@/icons/HorizentalWindow";
import MaximizeIcon from "@/icons/MaximizeIcon";
import MinimizeIcon from "@/icons/MinimizeIcon";
import VerticalwindowIcon from "@/icons/VerticalwindowIcon";
import VsIcon from "@/icons/VsIcon";
import WindowIcon from "@/icons/WindowIcon";
import { useStore } from "../../store/useSection";

const Header = () => {
  const { showExplore, setShowExplore } = useStore();

  const Menu = [
    "File",
    "Edit",
    "Selection",
    "View",
    "Go",
    "Run",
    "Terminal",
    "Help",
  ];

  return (
    <div className=" flex justify-between items-center text-gray-400 border-b-2 border-dark_border p-1">
      <div className="flex justify-between p-1 gap-5 md:gap-0">
        <VsIcon />
        <div className=" hidden md:flex md:justify-between">
          {Menu.map((item: string, index) => (
            <button
              className="py-1 px-2 rounded-lg hover:bg-gray-300/10"
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => {
            setShowExplore(!showExplore);
          }} ><HamburgerIcon className="md:hidden" /></button>
      </div>
      <div className="hidden md:inline">
        <span>Kimia Rahimi - Portfolio</span>
      </div>
      <div className="flex justify-between gap-2">
        <button
          onClick={() => {
            setShowExplore(!showExplore);
          }}
          className="p-1 rounded-lg hover:bg-gray-300/10"
        >
          <WindowIcon />
        </button>
        <button className="p-1 rounded-lg hover:bg-gray-300/10">
          <HorizentalWindow />
        </button>
        <button className="p-1 rounded-lg hover:bg-gray-300/10">
          <VerticalwindowIcon />
        </button>
        <button className="p-3 hover:bg-gray-300/10">
          <MinimizeIcon />
        </button>
        <button className="p-3 hover:bg-gray-300/10">
          <MaximizeIcon />
        </button>
        <button className="p-3 hover:bg-red-700 hover:text-white">
          <ColseIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
