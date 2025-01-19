import Aboutme from "./Aboutme";
import Aboutme_details from "./Aboutme_details";
import Skills from "./Skills";
import Workexperience from "./Workexperience";

const Main = () => {
  return (
      <div className=" w-full flex flex-col gap-72">
            <Aboutme/>
            <Aboutme_details/>
            <Workexperience/>
            <Skills/>
      </div>

  );
};

export default Main;
