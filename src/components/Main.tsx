import Aboutme from "./Aboutme";
import Aboutme_details from "./Aboutme_details";
import ContactMe from "./ContactMe";
import Mywork from "./Mywork";
import Skills from "./Skills";
import Workexperience from "./Workexperience";

const Main = () => {
  return (
      <div className=" w-full flex flex-col gap-72">
            <Aboutme/>
            <Aboutme_details/>
            <Workexperience/>
            <Skills/>
            <Mywork/>
            <ContactMe/>
      </div>

  );
};

export default Main;
