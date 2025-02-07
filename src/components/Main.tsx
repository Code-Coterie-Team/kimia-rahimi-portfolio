import Aboutme from "./Aboutme";
import Aboutme_details from "./Aboutmedetails";
import AnimationComponent from "./AnimationComponent";
import ContactMe from "./ContactMe";
import Mywork from "./Mywork";
import Skills from "./Skills";
import Workexperience from "./Workexperience";


const Main = () => {
  return (
      <div className=" w-full flex flex-col gap-72">
            <AnimationComponent id="aboutme"><Aboutme /></AnimationComponent>
            <AnimationComponent id="aboutme"><Aboutme_details/></AnimationComponent>
            <AnimationComponent id='work-experience'><Workexperience /></AnimationComponent>
            <AnimationComponent id="skills"><Skills /></AnimationComponent>
            <AnimationComponent id="my-work"><Mywork /></AnimationComponent>
            <AnimationComponent id="contact"><ContactMe /></AnimationComponent>

      </div>

  );
};

export default Main;

