import CloudeIcon from "@/icons/CloudeIcon";
import CrossIcon from "@/icons/CrossIcon";
import GoliveIcon from "@/icons/GoliveIcon";
import MainControlIcon from "@/icons/MainControlIcon";
import NotificationIcon from "@/icons/NotificationIcon";
import RemoteWindowIcon from "@/icons/RemoteWindowIcon";
import WarningIcon from "@/icons/WarningIcon";

const Footer = () => {
  return (
    <div className=" flex justify-between items-center text-gray-400 text-sm border-t-2 border-dark_border">
      <div className="flex justify-between items-center gap-4">
        <div className="bg-blue-500 text-white p-2 hover:bg-gray-600">
          <RemoteWindowIcon />
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2 flex gap-1 items-center">
          <MainControlIcon />
          <span>main*</span>
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2">
          <CloudeIcon />
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2 flex gap-1 items-center ">
          <CrossIcon />
          <span>0</span>
          <WarningIcon />
          <span>0</span>
        </div>
      </div>
      <div className=" flex justify-between p-1 gap-3 text-sm">
        <div className="hover:bg-gray-300/10 py-1 px-2">
          <span>Space:2</span>
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2">
          <span>UTF-8</span>
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2">
          <span>CRLF</span>
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2">
          <span>TypeScript JSX</span>
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2 flex items-center">
          <GoliveIcon />
          <span>GO Live</span>
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2">
          <NotificationIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
