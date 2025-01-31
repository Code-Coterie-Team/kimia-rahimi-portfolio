import Aboutme from "./Aboutme";
import Aboutme_details from "./Aboutmedetails";
import ContactMe from "./ContactMe";
import Mywork from "./Mywork";
import Skills from "./Skills";
import Workexperience from "./Workexperience";


const Main = () => {
  return (
      <div className=" w-full flex flex-col gap-72">
            <div id="aboutme"><Aboutme /></div>
            <Aboutme_details/>
            <div id='work-experience'><Workexperience /></div>
            <div id="skills"><Skills /></div>
            <div id="my-work"><Mywork /></div>
            <div id="contact"><ContactMe /></div>

      </div>

  );
};

export default Main;

