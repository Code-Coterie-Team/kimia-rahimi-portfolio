import {
  Close,
  Horizontalwindow,
  Maximize,
  Minimize,
  Verticalwindow,
  VsSvg,
  Window,
} from "@/icons";

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
        <VsSvg />
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
          <Window />
        </button>
        <button className="p-1 rounded-lg hover:bg-gray-300/10">
          <Horizontalwindow />
        </button>
        <button className="p-1 rounded-lg hover:bg-gray-300/10">
          <Verticalwindow />
        </button>
        <button className="p-3 hover:bg-gray-300/10">
          <Minimize />
        </button>
        <button className="p-3 hover:bg-gray-300/10">
          <Maximize />
        </button>
        <button className="p-3 hover:bg-red-700 hover:text-white">
          <Close />
        </button>
      </div>
    </div>
  );
};

export default Header;
