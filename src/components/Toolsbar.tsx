'use client'
import ExplorerIcon from "@/icons/ExplorerIcon";
import ExtensionsIcon from "@/icons/ExtensionsIcon";
import ProfileIcon from "@/icons/ProfileIcon";
import RunIcon from "@/icons/RunIcon";
import SearchIcon from "@/icons/SearchIcon";
import SettingIcon from "@/icons/SettingIcon";
import SourceControlIcon from "@/icons/SourceControlIcon";
import { useStore } from "../../store/useSection";
import { useState } from "react";

const Toolsbar = () => {
  const { showExplore, setShowExplore } = useStore();
  const { setShowExploreItems } = useStore();
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (clickCount === 0) {
      setShowExploreItems(true);
    } else if (clickCount === 1) {
      setShowExplore(!showExplore);
    }
    setClickCount((prevCount) => (prevCount + 1) % 2);
  };

  return (
    <div className="flex flex-col justify-between text-buttons/50 hover: opacity-90">
      <div className="grid grid-rows-5 gap-1 ">
        <button className="hover:text-buttons/90 p-3 focus:border-l-2 border-gray-400" onClick={handleClick}>
          <ExplorerIcon />
        </button>
        <button className="hover:text-buttons/90 p-3 focus:border-l-2 border-gray-400" onClick={() => setShowExploreItems(false)}>
          <SearchIcon />
        </button>
        <button className="hover:text-buttons/90 p-3 focus:border-l-2 border-gray-400" onClick={() => setShowExploreItems(false)}>
          <SourceControlIcon />
        </button>
        <button className="hover:text-buttons/90 p-3 focus:border-l-2 border-gray-400" onClick={() => setShowExploreItems(false)}>
          <RunIcon />
        </button>
        <button className="hover:text-buttons/90 p-3 focus:border-l-2 border-gray-400" onClick={() => setShowExploreItems(false)}>
          <ExtensionsIcon />
        </button>
      </div>
      <div className="flex flex-col ">
        <button className="hover:text-buttons/90 p-3">
          <ProfileIcon />
        </button>
        <button className="hover:text-buttons/90 p-3">
          <SettingIcon />
        </button>
      </div>
    </div>
  );
};

export default Toolsbar;
