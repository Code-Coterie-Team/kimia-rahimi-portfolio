import Aboutme from "./Aboutme";
import Aboutme_details from "./Aboutmedetails";
import ContactMe from "./ContactMe";
import Mywork from "./Mywork";
import Skills from "./Skills";
import Workexperience from "./Workexperience";
// import invoice from "@/assets/invoices.png"
// import AboutProject from "./AboutProject";
// import Challenges from "./Challenges";
// import Solution from "./Solution";

const Main = () => {
  return (
      <div className=" w-full flex flex-col gap-72">
            <div id="aboutme"><Aboutme /></div>
            <Aboutme_details/>
            <div id='work-experience'><Workexperience /></div>
            <div id="skills"><Skills /></div>
            <div id="my-work"><Mywork /></div>
            <div id="contact"><ContactMe /></div>
            {/* <AboutProject title="Invoices App" description="dgsfhnfd,ndfnm:Dgkm" industry="Invoices" image={invoice}/>
            <Challenges/>
            <Solution/> */}
      </div>

  );
};

export default Main;

