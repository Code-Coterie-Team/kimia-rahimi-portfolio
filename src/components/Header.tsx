import ColseIcon from "@/icons/CloseIcon";
import HorizentalWindow from "@/icons/HorizentalWindow";
import MaximizeIcon from "@/icons/MaximizeIcon";
import MinimizeIcon from "@/icons/MinimizeIcon";
import VerticalwindowIcon from "@/icons/VerticalwindowIcon";
import VsIcon from "@/icons/VsIcon";
import WindowIcon from "@/icons/WindowIcon";

const Header = () => {
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
      <div className="flex justify-between p-1">
        <VsIcon />
        {Menu.map((item: string, index) => (
          <button
            className="py-1 px-2 rounded-lg hover:bg-gray-300/10"
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        <span>Kimia Rahimi - Portfolio</span>
      </div>
      <div className="flex justify-between gap-2">
        <button className="p-1 rounded-lg hover:bg-gray-300/10">
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
