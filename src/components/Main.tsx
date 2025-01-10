import Aboutme from "./Aboutme";
import Headercontent from "./Headercontent";

const Main = () => {
  return (
    <div className="grid grid-row-2">
      <div>
        <Headercontent />
      </div>
      <div className="h-screen overflow-auto w-full">
        <div className="flex items-center px-7 h-full">
            <Aboutme/>
            </div>

      </div>
    </div>
  );
};

export default Main;
