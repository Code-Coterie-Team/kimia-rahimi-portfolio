import {
  Cloude,
  Cross,
  GoLive,
  MainControl,
  Notification,
  RemoteWindow,
  Warning,
} from "@/icons";

const Footer = () => {
  return (
    <div className=" flex justify-between items-center text-gray-400 text-sm border-t-2 border-dark_border">
      <div className="flex justify-between items-center gap-4">
        <div className="bg-blue-500 text-white p-2 hover:bg-gray-600">
          <RemoteWindow />
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2 flex gap-1 items-center">
          <MainControl />
          <span>main*</span>
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2">
          <Cloude />
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2 flex gap-1 items-center ">
          <Cross />
          <span>0</span>
          <Warning />
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
          <GoLive />
          <span>GO Live</span>
        </div>
        <div className="hover:bg-gray-300/10 py-1 px-2">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default Footer;
